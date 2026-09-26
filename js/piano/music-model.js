export const DURATION_BEATS = Object.freeze({
  w: 4,
  h: 2,
  q: 1,
  "8": 0.5,
  "16": 0.25,
  hd: 3,
  qd: 1.5
});

export function durationBeats(duration = "q") {
  const value = DURATION_BEATS[duration];
  if (!value) throw new Error(`Durée inconnue : ${duration}`);
  return value;
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

export function measureVoiceBeats(events = []) {
  return events.reduce((sum, event) => sum + durationBeats(event.duration), 0);
}

export function validateTimeline(timeline) {
  const problems = [];
  const signature = timeline.timeSignature || "4/4";
  const capacity = timeSignatureCapacity(signature);

  (timeline.measures || []).forEach((measure, measureIndex) => {
    ["treble", "bass"].forEach(staff => {
      const events = measure[staff] || [];
      const total = measureVoiceBeats(events);
      if (Math.abs(total - capacity) > 0.0001) {
        problems.push(
          `Mesure ${measureIndex + 1}, ${staff} : ${total} temps au lieu de ${capacity}.`
        );
      }
    });
  });

  return { ok: problems.length === 0, problems, capacity };
}

export function timelineEventRows(timeline) {
  const signature = timeline.timeSignature || "4/4";
  const capacity = timeSignatureCapacity(signature);
  const rows = [];

  (timeline.measures || []).forEach((measure, measureIndex) => {
    const measureStart = measureIndex * capacity;

    ["treble", "bass"].forEach(staff => {
      let beat = 0;
      (measure[staff] || []).forEach((event, eventIndex) => {
        rows.push({
          id: `m${measureIndex}-${staff}-${eventIndex}`,
          measureIndex,
          staff,
          eventIndex,
          startBeat: measureStart + beat,
          beatInMeasure: beat,
          durationBeats: durationBeats(event.duration),
          event
        });
        beat += durationBeats(event.duration);
      });
    });
  });

  return rows;
}

export function timelineMoments(timeline, { hand = "both" } = {}) {
  const rows = timelineEventRows(timeline).filter(row => {
    if (hand === "right") return row.staff === "treble";
    if (hand === "left") return row.staff === "bass";
    return true;
  });

  const grouped = new Map();
  rows.forEach(row => {
    const key = row.startBeat.toFixed(6);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  });

  return [...grouped.entries()]
    .map(([_, events]) => ({
      startBeat: events[0].startBeat,
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
