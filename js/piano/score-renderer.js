import {
  timeSignatureCapacity,
  validateTimeline,
  momentIndexByEventId
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

  // Le suffixe `d` doit faire partie de la durée VexFlow pour que la note
  // compte réellement 1,5× sa valeur dans la voix. Le Dot ci-dessous ne sert
  // ensuite qu'à dessiner le point sur la portée. Sans ce `d`, une blanche
  // pointée était comptée comme 2 temps au lieu de 3 et VexFlow rejetait la
  // mesure en mode strict.
  const value = `${base}${dotted ? "d" : ""}${rest ? "r" : ""}`;
  return { value, dotted };
}

function svgNode(name, attrs = {}, text = "") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  if (text) node.textContent = text;
  return node;
}

function eventPitches(event) {
  if (event.type === "note") return [event.pitch];
  if (event.type === "chord") return event.pitches || [];
  return [];
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

function beatSlotsForSignature(signature) {
  return Math.max(1, Math.round(timeSignatureCapacity(signature || "4/4")));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function beatToCenterX(grid, beatInMeasure) {
  const slots = grid.capacity || 1;
  const usableWidth = grid.end - grid.start;
  const centerBeat = clamp(beatInMeasure + 0.5, 0.5, slots - 0.0001);
  return grid.start + (usableWidth * centerBeat / slots);
}

function addBeatGrid(svg, grid, signature) {
  const slots = beatSlotsForSignature(signature);
  const usableWidth = grid.end - grid.start;

  for (let slot = 0; slot < slots; slot += 1) {
    const x = grid.start + usableWidth * ((slot + 0.5) / slots);
    svg.insertBefore(svgNode("line", {
      x1:x, x2:x, y1:grid.top, y2:grid.bottom, class:"score-beat-guide"
    }), svg.firstChild);
  }
}

function ensurePlayhead(container, svg) {
  let line = svg.querySelector('.score-playhead');
  if (!line) {
    line = svgNode('line', {
      x1:0, x2:0, y1:0, y2:0,
      class:'score-playhead',
      visibility:'hidden'
    });
    svg.appendChild(line);
  }
  container.__scorePlayheadEl = line;
  return line;
}

export function setScorePlayhead(container, absoluteBeat = null) {
  const state = container?.__scoreLayout;
  const line = container?.__scorePlayheadEl;
  if (!state || !line || absoluteBeat == null || absoluteBeat < 0) {
    if (line) line.setAttribute('visibility', 'hidden');
    return;
  }

  const grids = state.grids || [];
  let grid = grids.find(g => absoluteBeat >= g.absoluteStart && absoluteBeat < g.absoluteStart + g.capacity - 0.000001);

  if (!grid && grids.length) {
    const last = grids[grids.length - 1];
    if (absoluteBeat >= last.absoluteStart + last.capacity - 0.000001) grid = last;
  }

  if (!grid) {
    line.setAttribute('visibility', 'hidden');
    return;
  }

  const beatInMeasure = clamp(absoluteBeat - grid.absoluteStart, 0, grid.capacity - 0.0001);
  const x = beatToCenterX(grid, beatInMeasure);

  line.setAttribute('x1', x);
  line.setAttribute('x2', x);
  line.setAttribute('y1', grid.top);
  line.setAttribute('y2', grid.bottom);
  line.setAttribute('visibility', 'visible');
}

export function clearScorePlayhead(container) {
  if (container?.__scorePlayheadEl) {
    container.__scorePlayheadEl.setAttribute('visibility', 'hidden');
  }
}


export function setScoreActiveEvents(container, eventIds = []) {
  const svg = container?.querySelector?.("svg");
  if (!svg) return;

  const activeIds = new Set(eventIds || []);
  svg.classList.toggle("has-score-playback", activeIds.size > 0);

  svg.querySelectorAll("[data-score-event-id]").forEach(element => {
    element.classList.toggle(
      "is-score-active",
      activeIds.has(element.dataset.scoreEventId)
    );
  });
}

export function clearScoreActiveEvents(container) {
  const svg = container?.querySelector?.("svg");
  if (!svg) return;

  svg.classList.remove("has-score-playback");
  svg.querySelectorAll(".is-score-active").forEach(element => {
    element.classList.remove("is-score-active");
  });
}

export async function renderScore(container, activity, {
  showNoteNames = false,
  showFingers = false,
  currentStep = 0
} = {}) {
  const timeline = activity.timeline;
  if (!timeline) {
    container.innerHTML = '<div class="score-fallback"><strong>Exercice ancien.</strong><br><span>Cette étape sera convertie vers le nouveau moteur musical.</span></div>';
    return;
  }

  const validation = validateTimeline(timeline);
  if (!validation.ok) {
    container.innerHTML = `<div class="score-fallback"><strong>Partition invalide.</strong><br><span>${validation.problems.join(" ")}</span></div>`;
    return;
  }

  container.innerHTML = '<div class="score-loading">Chargement de la partition…</div>';

  try {
    const Vex = await import("https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm");
    const {
      Renderer, Stave, StaveNote, Voice, Formatter, Accidental,
      StaveConnector, Barline, Dot
    } = Vex;

    const signature = timeline.timeSignature || "4/4";
    const [numBeats, beatValue] = signature.split("/").map(Number);
    const measures = timeline.measures || [];
    const measuresPerSystem = activity.measuresPerSystem || 2;
    const systems = Math.ceil(measures.length / measuresPerSystem);
    const width = Math.max(620, Math.min(1100, container.clientWidth || 900));
    const systemHeight = 320;
    const height = systems * systemHeight + 20;
    const measureCapacity = timeSignatureCapacity(signature);

    container.innerHTML = "";
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();
    const eventToMoment = momentIndexByEventId(timeline);
    const hints = [];
    const grids = [];

    function createTickable(event, clef, eventId) {
      const pitches = eventPitches(event);
      const isRest = event.type === "rest";
      const { value, dotted } = vexDuration(event.duration, isRest);
      const keys = isRest
        ? [clef === "bass" ? "d/3" : "b/4"]
        : pitches.map(normalizeNoteForVex);

      const note = new StaveNote({ clef, keys, duration:value, autoStem:true });
      if (dotted && Dot?.buildAndAttach) Dot.buildAndAttach([note], { all:true });

      pitches.forEach((pitch, index) => {
        if (pitch.includes("#")) note.addModifier(new Accidental("#"), index);
        if (pitch.includes("b")) note.addModifier(new Accidental("b"), index);
      });

      return note;
    }

    function buildVoice(events, clef, measureIndex, staff) {
      const items = events.map((event, eventIndex) => {
        const id = `m${measureIndex}-${staff}-${eventIndex}`;
        return { id, event, tickable:createTickable(event, clef, id) };
      });
      const voice = new Voice({ numBeats, beatValue }).setStrict(true);
      voice.addTickables(items.map(x => x.tickable));
      return { voice, items };
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

      const treble = new Stave(x, y + 16, measureWidth);
      const bass = new Stave(x, y + 162, measureWidth);

      if (firstOnSystem) {
        treble.addClef("treble");
        bass.addClef("bass");
        if (firstOverall) {
          treble.addTimeSignature(signature);
          bass.addTimeSignature(signature);
        }
      }

      if (Barline?.type) {
        const endType = lastOverall ? Barline.type.END : Barline.type.SINGLE;
        treble.setEndBarType(endType);
        bass.setEndBarType(endType);
      }

      treble.setContext(context);
      bass.setContext(context);
      if (typeof Stave.formatBegModifiers === "function") {
        Stave.formatBegModifiers([treble, bass]);
      } else {
        const shared = Math.max(treble.getNoteStartX(), bass.getNoteStartX());
        treble.setNoteStartX(shared);
        bass.setNoteStartX(shared);
      }
      treble.draw();
      bass.draw();

      try {
        if (firstOnSystem) {
          new StaveConnector(treble,bass).setType(StaveConnector.type.BRACE).setContext(context).draw();
          new StaveConnector(treble,bass).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
        }
        new StaveConnector(treble,bass).setType(StaveConnector.type.SINGLE_RIGHT).setContext(context).draw();
      } catch (_) {}

      const tv = buildVoice(measure.treble || [], "treble", measureIndex, "treble");
      const bv = buildVoice(measure.bass || [], "bass", measureIndex, "bass");
      const formatter = new Formatter();
      formatter.joinVoices([tv.voice, bv.voice]);
      formatter.format([tv.voice, bv.voice], measureWidth - (firstOnSystem ? 98 : 30));
      tv.voice.draw(context, treble);
      bv.voice.draw(context, bass);

      [...tv.items, ...bv.items].forEach(({ id, event, tickable }) => {
        if (event.type === "rest") return;
        const element = tickable.getSVGElement?.();
        if (!element) return;

        element.classList.add("score-event");
        element.dataset.scoreEventId = id;

        if (eventToMoment.get(id) === currentStep) {
          element.classList.add("is-current-step");
        }
      });

      hints.push({ items:tv.items, stave:treble }, { items:bv.items, stave:bass });
      grids.push({
        top:treble.getYForLine(0)-20,
        bottom:bass.getBottomLineY()+20,
        start:Math.max(treble.getNoteStartX(), bass.getNoteStartX()),
        end:x + measureWidth - 12,
        absoluteStart: measureIndex * measureCapacity,
        capacity: measureCapacity
      });
    });

    const svg = container.querySelector("svg");
    grids.forEach(grid => addBeatGrid(svg, grid, signature));

    hints.forEach(({items, stave}) => {
      items.forEach(({event, tickable}) => {
        if (event.type === "rest") return;
        const x = noteCenterX(tickable);
        const y1 = stave.getBottomLineY() + 26;
        const y2 = y1 + 17;
        if (showNoteNames) {
          svg.appendChild(svgNode("text", {x,y:y1,"text-anchor":"middle",class:"score-help score-help--note"},
            eventPitches(event).map(noteLabelFr).join(" + ")));
        }
        if (showFingers) {
          const fingers = eventFingers(event);
          if (fingers.length) svg.appendChild(svgNode("text", {x,y:y2,"text-anchor":"middle",class:"score-help score-help--finger"}, fingers.join("·")));
        }
      });
    });

    container.__scoreLayout = { grids, signature, totalBeats: measures.length * measureCapacity };
    clearScoreActiveEvents(container);
  } catch (error) {
    console.error("Erreur VexFlow :", error);
    container.innerHTML = '<div class="score-fallback"><strong>La partition n’a pas pu être chargée.</strong><br><span>Le clavier et l’audio restent disponibles.</span></div>';
  }
}
