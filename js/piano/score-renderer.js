import * as Vex from "https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm";
import {
  timeSignatureCapacity,
  validateTimeline,
  momentIndexByEventId,
  timelineStaves,
  measureStaffVoices,
  displayEventPitches
} from "./music-model.js";

function normalizeNoteForVex(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return "c/4";
  return `${match[1].toLowerCase()}${match[2] || ""}/${match[3]}`;
}

const NOTE_NAMES_FR = { C:"Do", D:"Ré", E:"Mi", F:"Fa", G:"Sol", A:"La", B:"Si" };
function noteLabelFr(note) {
  const m = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!m) return note;
  const a = m[2] === "#" ? "♯" : m[2] === "b" ? "♭" : "";
  return `${NOTE_NAMES_FR[m[1]]}${a}`;
}

function vexDuration(duration, rest = false) {
  const dotted = duration === "hd" || duration === "qd";
  const base = duration === "hd" ? "h" : duration === "qd" ? "q" : duration;
  return { value:`${base}${dotted ? "d" : ""}${rest ? "r" : ""}`, dotted };
}

function svgNode(name, attrs = {}, text = "") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  if (text) node.textContent = text;
  return node;
}

function eventFingers(event) {
  if (event.type === "note") return event.finger ? [event.finger] : [];
  if (event.type === "chord") return event.fingers || [];
  return [];
}

function noteCenterX(tickable) {
  const begin = tickable.getNoteHeadBeginX?.();
  const end = tickable.getNoteHeadEndX?.();
  if (Number.isFinite(begin) && Number.isFinite(end)) return (begin + end) / 2;
  return tickable.getAbsoluteX?.() || 0;
}

function addBeatGrid(svg, grid, signature) {
  const slots = Math.max(1, Math.round(timeSignatureCapacity(signature || "4/4")));
  const usableWidth = grid.end - grid.start;
  for (let slot = 0; slot < slots; slot += 1) {
    const x = grid.start + usableWidth * ((slot + 0.5) / slots);
    svg.insertBefore(svgNode("line", {
      x1:x, x2:x, y1:grid.top, y2:grid.bottom, class:"score-beat-guide"
    }), svg.firstChild);
  }
}

export function setScoreActiveEvents(container, eventIds = []) {
  const svg = container?.querySelector?.("svg");
  if (!svg) return;
  const activeIds = new Set(eventIds || []);
  svg.classList.toggle("has-score-playback", activeIds.size > 0);
  svg.querySelectorAll("[data-score-event-id]").forEach(element => {
    element.classList.toggle("is-score-active", activeIds.has(element.dataset.scoreEventId));
  });
}

export function clearScoreActiveEvents(container) {
  const svg = container?.querySelector?.("svg");
  if (!svg) return;
  svg.classList.remove("has-score-playback");
  svg.querySelectorAll(".is-score-active").forEach(element => element.classList.remove("is-score-active"));
}

export async function renderScore(container, activity, {
  showNoteNames = false,
  showFingers = false,
  showLyrics = false,
  currentStep = 0
} = {}) {
  const timeline = activity.timeline;
  if (!timeline) {
    container.innerHTML = '<div class="score-fallback"><strong>Exercice ancien.</strong></div>';
    return;
  }

  const validation = validateTimeline(timeline);
  if (!validation.ok) {
    container.innerHTML = `<div class="score-fallback"><strong>Partition invalide.</strong><br><span>${validation.problems.join(" ")}</span></div>`;
    return;
  }

  container.innerHTML = '<div class="score-loading">Chargement de la partition…</div>';

  try {
    const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, StaveConnector, Barline, Dot, StaveTie, Tuplet } = Vex;

    const signature = timeline.timeSignature || "4/4";
    const [numBeats, beatValue] = signature.split("/").map(Number);
    const measures = timeline.measures || [];
    const staffSpecs = timelineStaves(timeline);
    const measuresPerSystem = activity.measuresPerSystem || 2;
    const systems = Math.ceil(measures.length / measuresPerSystem);
    const width = Math.max(760, Math.min(1280, container.clientWidth || 900));
    const staffGap = staffSpecs.length >= 3 ? 108 : 146;
    const systemHeight = 74 + staffGap * staffSpecs.length;
    const height = systems * systemHeight + 20;
    const measureCapacity = timeSignatureCapacity(signature);

    container.innerHTML = "";
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();
    const eventToMoment = momentIndexByEventId(timeline);
    const hints = [];
    const grids = [];
    const renderedRows = [];

    function createTickable(event, clef) {
      const pitches = displayEventPitches(event);
      const isRest = event.type === "rest";
      const { value, dotted } = vexDuration(event.duration, isRest);
      const keys = isRest ? [clef === "bass" ? "d/3" : "b/4"] : pitches.map(normalizeNoteForVex);
      const note = new StaveNote({ clef, keys, duration:value, autoStem:true });
      if (dotted && Dot?.buildAndAttach) Dot.buildAndAttach([note], { all:true });
      pitches.forEach((pitch, index) => {
        if (pitch.includes("#")) note.addModifier(new Accidental("#"), index);
        if (pitch.includes("b")) note.addModifier(new Accidental("b"), index);
      });
      return note;
    }

    function buildVoice(voiceSpec, staffSpec, measureIndex) {
      const items = (voiceSpec.events || []).map((event, eventIndex) => {
        const id = `m${measureIndex}-${staffSpec.id}-${voiceSpec.id}-${eventIndex}`;
        return { id, event, tickable:createTickable(event, staffSpec.clef), staffId:staffSpec.id, voiceId:voiceSpec.id };
      });
      const tuplets = [];
      if (Tuplet) {
        const groups = new Map();
        items.forEach((item, index) => {
          const t = item.event?.tuplet;
          if (!t) return;
          const key = t.id || `${staffSpec.id}-${voiceSpec.id}-${Math.floor(index / Number(t.numNotes || 3))}`;
          if (!groups.has(key)) groups.set(key, { spec:t, notes:[] });
          groups.get(key).notes.push(item.tickable);
        });
        groups.forEach(group => {
          const n = Number(group.spec.numNotes || 3);
          if (group.notes.length === n) {
            tuplets.push(new Tuplet(group.notes, {
              num_notes:n,
              notes_occupied:Number(group.spec.notesOccupied || 2)
            }));
          }
        });
      }
      const voice = new Voice({ numBeats, beatValue }).setStrict(true);
      voice.addTickables(items.map(x => x.tickable));
      return { voice, items, tuplets };
    }

    const pad = 14;
    const measureWidth = (width - pad * 2) / measuresPerSystem;

    measures.forEach((measure, measureIndex) => {
      const systemIndex = Math.floor(measureIndex / measuresPerSystem);
      const pos = measureIndex % measuresPerSystem;
      const x = pad + pos * measureWidth;
      const y = systemIndex * systemHeight;
      const firstOnSystem = pos === 0;
      const firstOverall = measureIndex === 0;
      const lastOverall = measureIndex === measures.length - 1;

      const staves = staffSpecs.map((spec, index) => {
        const stave = new Stave(x, y + 16 + index * staffGap, measureWidth);
        if (firstOnSystem) {
          stave.addClef(spec.clef);
          if (spec.keySignature) stave.addKeySignature(spec.keySignature);
          if (firstOverall) stave.addTimeSignature(signature);
        }
        if (Barline?.type) stave.setEndBarType(lastOverall ? Barline.type.END : Barline.type.SINGLE);
        stave.setContext(context);
        return { spec, stave };
      });

      if (typeof Stave.formatBegModifiers === "function") {
        Stave.formatBegModifiers(staves.map(x => x.stave));
      } else {
        const shared = Math.max(...staves.map(x => x.stave.getNoteStartX()));
        staves.forEach(x => x.stave.setNoteStartX(shared));
      }
      staves.forEach(x => x.stave.draw());

      try {
        const top = staves[0].stave;
        const bottom = staves[staves.length - 1].stave;
        if (firstOnSystem) {
          new StaveConnector(top,bottom).setType(StaveConnector.type.BRACE).setContext(context).draw();
          new StaveConnector(top,bottom).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
        }
        new StaveConnector(top,bottom).setType(StaveConnector.type.SINGLE_RIGHT).setContext(context).draw();
      } catch (_) {}

      const builtByStaff = staves.map(({spec, stave}) => ({
        spec,
        stave,
        voices: measureStaffVoices(measure, spec.id).map(v => buildVoice(v, spec, measureIndex))
      }));
      const allVoices = builtByStaff.flatMap(x => x.voices.map(v => v.voice));
      const formatter = new Formatter();
      builtByStaff.forEach(group => formatter.joinVoices(group.voices.map(v => v.voice)));
      formatter.format(allVoices, measureWidth - (firstOnSystem ? 112 : 30));

      builtByStaff.forEach(group => {
        group.voices.forEach(v => {
          v.voice.draw(context, group.stave);
          (v.tuplets || []).forEach(tuplet => {
            try { tuplet.setContext(context).draw(); } catch (_) {}
          });
          v.items.forEach(item => {
            if (item.event.type !== "rest") {
              const element = item.tickable.getSVGElement?.();
              if (element) {
                element.classList.add("score-event");
                element.dataset.scoreEventId = item.id;
                if (eventToMoment.get(item.id) === currentStep) element.classList.add("is-current-step");
              }
            }
            renderedRows.push({ ...item, systemIndex, stave:group.stave });
          });
          hints.push({ items:v.items, stave:group.stave });
        });
      });

      const sharedStart = Math.max(...staves.map(x => x.stave.getNoteStartX()));
      grids.push({
        top:staves[0].stave.getYForLine(0)-20,
        bottom:staves[staves.length-1].stave.getBottomLineY()+20,
        start:sharedStart,
        end:x + measureWidth - 12,
        absoluteStart:measureIndex * measureCapacity,
        capacity:measureCapacity
      });
    });

    // Liaisons de prolongation. Elles sont dessinées quand les deux notes
    // se trouvent sur le même système ; l'audio, lui, peut rester lié même
    // lorsque la liaison traverse un retour à la ligne.
    renderedRows.forEach((row, index) => {
      if (!row.event?.tieToNext || row.event.type === "rest") return;
      const next = renderedRows.slice(index + 1).find(candidate =>
        candidate.staffId === row.staffId && candidate.voiceId === row.voiceId && candidate.event.type !== "rest"
      );
      if (!next || next.systemIndex !== row.systemIndex || !StaveTie) return;
      try {
        const firstPitches = displayEventPitches(row.event);
        const nextPitches = displayEventPitches(next.event);
        const common = firstPitches.map((p,i) => ({p,i,j:nextPitches.indexOf(p)})).filter(x => x.j >= 0);
        if (!common.length) return;
        new StaveTie({
          first_note:row.tickable,
          last_note:next.tickable,
          first_indices:common.map(x => x.i),
          last_indices:common.map(x => x.j)
        }).setContext(context).draw();
      } catch (_) {}
    });

    const svg = container.querySelector("svg");
    grids.forEach(grid => addBeatGrid(svg, grid, signature));

    hints.forEach(({items, stave}) => {
      const helpGroups = [];
      items.forEach(({event, tickable}) => {
        if (event.type === "rest") return;
        const x = noteCenterX(tickable);
        let group = helpGroups.find(candidate => Math.abs(candidate.x - x) < 5);
        if (!group) {
          group = { x, events:[] };
          helpGroups.push(group);
        }
        group.events.push(event);
      });

      const y1 = stave.getBottomLineY() + 26;
      const y2 = y1 + 17;
      const y3 = y2 + 17;

      helpGroups.forEach(group => {
        const pitches = [...new Set(group.events.flatMap(event => displayEventPitches(event).map(noteLabelFr)))];
        const fingers = [...new Set(group.events.flatMap(event => eventFingers(event).map(String)))];
        const lyric = group.events.map(event => event.lyric).find(Boolean);
        if (showNoteNames && pitches.length) {
          svg.appendChild(svgNode("text", {x:group.x,y:y1,"text-anchor":"middle",class:"score-help score-help--note"}, pitches.join(" + ")));
        }
        if (showFingers && fingers.length) {
          svg.appendChild(svgNode("text", {x:group.x,y:y2,"text-anchor":"middle",class:"score-help score-help--finger"}, fingers.join("·")));
        }
        if (showLyrics && lyric) {
          svg.appendChild(svgNode("text", {x:group.x,y:y3,"text-anchor":"start",class:"score-help score-help--lyric"}, lyric));
        }
      });
    });

    container.__scoreLayout = { grids, signature, totalBeats:measures.length * measureCapacity };
    clearScoreActiveEvents(container);
  } catch (error) {
    console.error("Erreur VexFlow :", error);
    container.innerHTML = '<div class="score-fallback"><strong>La partition n’a pas pu être chargée.</strong><br><span>Le clavier et l’audio restent disponibles.</span></div>';
  }
}
