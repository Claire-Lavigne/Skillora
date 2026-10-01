export const DURATION_BEATS = Object.freeze({
  w: 4,
  h: 2,
  q: 1,
  "8": 0.5,
  "8d": 0.75,
  "16": 0.25,
  "16d": 0.375,
  "32": 0.125,
  hd: 3,
  qd: 1.5
});

export function durationBeats(duration = "q") {
  const value = DURATION_BEATS[duration];
  if (!value) throw new Error(`Durée inconnue : ${duration}`);
  return value;
}

export function eventDurationBeats(event = {}) {
  const base = durationBeats(event.duration || "q");
  const tuplet = event.tuplet;
  if (!tuplet) return base;
  const numNotes = Number(tuplet.numNotes || tuplet.num_notes || 3);
  const notesOccupied = Number(tuplet.notesOccupied || tuplet.notes_occupied || 2);
  if (!numNotes || !notesOccupied) return base;
  return base * (notesOccupied / numNotes);
}

export function timeSignatureCapacity(signature = "4/4") {
  const [beats, beatValue] = signature.split("/").map(Number);
  if (!beats || !beatValue) throw new Error(`Signature rythmique invalide : ${signature}`);
  return beats * (4 / beatValue);
}

export function eventPitches(event) {
  if (!event || event.type === "rest") return [];
  if (event.type === "note") return event.pitch ? [event.pitch] : [];
  if (event.type === "chord") return event.pitches || [];
  return [];
}

export function displayEventPitches(event) {
  if (!event || event.type === "rest") return [];
  if (event.type === "note") return [event.displayPitch || event.pitch].filter(Boolean);
  if (event.type === "chord") return event.displayPitches || event.pitches || [];
  return [];
}

export function timelineStaves(timeline = {}) {
  if (Array.isArray(timeline.staves) && timeline.staves.length) {
    return timeline.staves.map((staff, index) => ({
      id: staff.id || `staff${index + 1}`,
      clef: staff.clef || (index === timeline.staves.length - 1 ? "bass" : "treble"),
      hand: staff.hand || (index === 0 ? "right" : "left"),
      label: staff.label || "",
      keySignature: staff.keySignature || timeline.keySignature || null
    }));
  }

  return [
    { id:"treble", clef:"treble", hand:"right", label:"", keySignature:timeline.keySignature || null },
    { id:"bass", clef:"bass", hand:"left", label:"", keySignature:timeline.keySignature || null }
  ];
}

export function measureStaffVoices(measure = {}, staffId) {
  const source = measure?.[staffId];

  if (Array.isArray(source)) {
    return [{ id:"v1", events:source }];
  }

  if (source && Array.isArray(source.voices)) {
    return source.voices.map((voice, index) => ({
      id: voice.id || `v${index + 1}`,
      events: Array.isArray(voice.events) ? voice.events : [],
      stemDirection: voice.stemDirection || null
    }));
  }

  if (source && Array.isArray(source.events)) {
    return [{ id:source.id || "v1", events:source.events, stemDirection:source.stemDirection || null }];
  }

  return [{ id:"v1", events:[] }];
}

export function measureVoiceBeats(events = []) {
  return events.reduce((sum, event) => sum + eventDurationBeats(event), 0);
}

export function validateTimeline(timeline) {
  const problems = [];
  const signature = timeline.timeSignature || "4/4";
  const staves = timelineStaves(timeline);

  (timeline.measures || []).forEach((measure, measureIndex) => {
    const capacity = timeSignatureCapacity(measure.timeSignature || signature);
    staves.forEach(staff => {
      const voices = measureStaffVoices(measure, staff.id);
      voices.forEach((voice, voiceIndex) => {
        const total = measureVoiceBeats(voice.events);
        if (Math.abs(total - capacity) > 0.0001) {
          problems.push(
            `Mesure ${measureIndex + 1}, ${staff.id}, voix ${voiceIndex + 1} : ${total} temps au lieu de ${capacity}.`
          );
        }
      });
    });
  });

  return { ok: problems.length === 0, problems, capacity: timeSignatureCapacity(signature) };
}

export function timelineEventRows(timeline) {
  const signature = timeline.timeSignature || "4/4";
  const staves = timelineStaves(timeline);
  const rows = [];
  let measureStart = 0;

  (timeline.measures || []).forEach((measure, measureIndex) => {
    const capacity = timeSignatureCapacity(measure.timeSignature || signature);

    staves.forEach((staff, staffIndex) => {
      measureStaffVoices(measure, staff.id).forEach((voice, voiceIndex) => {
        let beat = 0;
        (voice.events || []).forEach((event, eventIndex) => {
          rows.push({
            id: `m${measureIndex}-${staff.id}-${voice.id || `v${voiceIndex + 1}`}-${eventIndex}`,
            measureIndex,
            staff: staff.id,
            staffIndex,
            clef: staff.clef,
            hand: staff.hand,
            voice: voice.id || `v${voiceIndex + 1}`,
            voiceIndex,
            eventIndex,
            startBeat: measureStart + beat,
            beatInMeasure: beat,
            durationBeats: eventDurationBeats(event),
            event
          });
          beat += eventDurationBeats(event);
        });
      });
    });

    // Avance le curseur global après chaque mesure. Sans cette ligne,
    // toutes les mesures redémarrent au temps 0 et leurs notes sont
    // superposées pendant la lecture audio.
    measureStart += capacity;
  });

  if (timeline.swing) {
    const ratio = Number(timeline.swingRatio || 2);
    const longPart = ratio / (ratio + 1);
    const shortPart = 1 / (ratio + 1);
    const lanes = new Map();
    rows.forEach(row => {
      const key = `${row.measureIndex}::${row.staff}::${row.voice}`;
      if (!lanes.has(key)) lanes.set(key, []);
      lanes.get(key).push(row);
    });
    lanes.forEach(lane => {
      lane.sort((a,b)=>a.startBeat-b.startBeat);
      for (let i=0;i<lane.length-1;i+=1) {
        const a=lane[i], b=lane[i+1];
        const localA=a.beatInMeasure;
        const isPair = a.event?.duration === "8" && b.event?.duration === "8"
          && Math.abs((b.startBeat-a.startBeat)-0.5) < 0.0001
          && Math.abs(localA-Math.round(localA)) < 0.0001;
        if (!isPair) continue;
        a.playbackStartBeat=a.startBeat;
        a.playbackDurationBeats=longPart;
        b.playbackStartBeat=a.startBeat+longPart;
        b.playbackDurationBeats=shortPart;
        i+=1;
      }
    });
  }

  rows.forEach(row => {
    if (row.playbackStartBeat == null) row.playbackStartBeat = row.startBeat;
    if (row.playbackDurationBeats == null) row.playbackDurationBeats = row.durationBeats;
  });
  return rows;
}

export function timelineMoments(timeline, { hand = "both" } = {}) {
  const rows = timelineEventRows(timeline).filter(row => {
    if (hand === "right") return row.hand === "right";
    if (hand === "left") return row.hand === "left";
    return true;
  });

  const grouped = new Map();
  rows.forEach(row => {
    const key = row.playbackStartBeat.toFixed(6);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  });

  return [...grouped.values()]
    .map(events => ({
      startBeat: events[0].playbackStartBeat,
      events,
      notes: events.flatMap(row => eventPitches(row.event)),
      hasRest: events.some(row => row.event.type === "rest")
    }))
    .sort((a, b) => a.startBeat - b.startBeat)
    .map((moment, index) => ({ ...moment, index }));
}

export function timelineNotes(timeline) {
  return [...new Set(
    timelineEventRows(timeline).flatMap(row => eventPitches(row.event))
  )];
}

export function momentIndexByEventId(timeline) {
  const result = new Map();
  timelineMoments(timeline).forEach(moment => {
    moment.events.forEach(row => result.set(row.id, moment.index));
  });
  return result;
}
