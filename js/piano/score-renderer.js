function normalizeNoteForVex(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return "c/4";
  return `${match[1].toLowerCase()}${match[2] || ""}/${match[3]}`;
}

const NOTE_NAMES_FR = {
  C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si"
};

function noteLabelFr(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return note;

  const accidental =
    match[2] === "#" ? "♯" :
    match[2] === "b" ? "♭" : "";

  return `${NOTE_NAMES_FR[match[1]]}${accidental}`;
}

function addAccidentals(note, chord, Accidental) {
  chord.forEach((entry, index) => {
    if (entry.note.includes("#")) note.addModifier(new Accidental("#"), index);
    if (entry.note.includes("b")) note.addModifier(new Accidental("b"), index);
  });
}

function activityGroups(activity) {
  if (activity.mode === "two-hand") {
    return {
      right: (activity.rightHand || []).map(item => [item]),
      left: (activity.leftHand || []).map(item => [item])
    };
  }

  if (activity.mode === "chord-sequence") {
    const groups = activity.groups || [];
    return activity.staff === "bass"
      ? { right: [], left: groups }
      : { right: groups, left: [] };
  }

  if (activity.mode === "chord") {
    const group = [activity.notes || []];
    return activity.staff === "bass"
      ? { right: [], left: group }
      : { right: group, left: [] };
  }

  const groups = (activity.notes || []).map(item => [item]);
  return activity.staff === "bass"
    ? { right: [], left: groups }
    : { right: groups, left: [] };
}

function svgNode(name, attrs = {}, text = "") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  if (text) node.textContent = text;
  return node;
}

function drawHelp(svg, item, stave, clef, showNoteNames, showFingers) {
  if (!item.group?.length || item.isRest) return;

  const x = item.tickable.getAbsoluteX();
  const ys = item.tickable.getYs?.() || [];
  const noteY = ys.length ? Math.min(...ys) : stave.getYForLine(2);

  if (showFingers) {
    const fingers = item.group
      .map(entry => entry.finger)
      .filter(value => value !== undefined && value !== null);

    if (fingers.length) {
      const y = clef === "treble" ? noteY - 18 : noteY + 24;
      svg.appendChild(svgNode("text", {
        x,
        y,
        "text-anchor": "middle",
        class: "score-help score-help--finger"
      }, fingers.join("·")));
    }
  }

  if (showNoteNames) {
    const label = item.group
      .map(entry => noteLabelFr(entry.note))
      .join(" + ");

    svg.appendChild(svgNode("text", {
      x,
      y: stave.getBottomLineY() + 28,
      "text-anchor": "middle",
      class: "score-help score-help--note"
    }, label));
  }
}

function drawBeatGuides(svg, beatXs, topY, bottomY, firstBeatOfMeasure = 0) {
  beatXs.forEach((x, index) => {
    if (index === firstBeatOfMeasure) return;

    const line = svgNode("line", {
      x1: x,
      x2: x,
      y1: topY,
      y2: bottomY,
      class: "score-beat-guide"
    });

    // Mettre les repères derrière les notes.
    svg.insertBefore(line, svg.firstChild);
  });
}

export async function renderScore(
  container,
  activity,
  {
    showNoteNames = false,
    showFingers = false,
    currentStep = 0
  } = {}
) {
  container.innerHTML = `<div class="score-loading">Chargement de la portée…</div>`;

  try {
    const Vex = await import("https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm");
    const {
      Renderer,
      Stave,
      StaveNote,
      Voice,
      Formatter,
      Accidental,
      StaveConnector,
      Barline
    } = Vex;

    const { right, left } = activityGroups(activity);
    const hasRight = right.length > 0;
    const hasLeft = left.length > 0;
    const grand =
      activity.staff === "grand" ||
      activity.mode === "two-hand" ||
      (hasRight && hasLeft);

    if (!hasRight && !hasLeft) {
      container.textContent = "Aucune note à afficher.";
      return;
    }

    const totalSteps = Math.max(right.length, left.length);
    const measureCount = Math.max(1, Math.ceil(totalSteps / 4));
    const measuresPerSystem = 2;
    const systems = Math.ceil(measureCount / measuresPerSystem);

    container.innerHTML = "";

    const width = Math.max(540, Math.min(980, container.clientWidth || 820));
    const systemHeight = grand ? 330 : 220;
    const height = systems * systemHeight + 10;

    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();

    function makeNote(chord, clef, globalIndex) {
      const note = new StaveNote({
        clef,
        keys: chord.map(entry => normalizeNoteForVex(entry.note)),
        duration: chord[0]?.duration || "q",
        autoStem: true
      });

      addAccidentals(note, chord, Accidental);

      if (globalIndex === currentStep) {
        note.setStyle({
          fillStyle: "#10664c",
          strokeStyle: "#10664c"
        });
      }

      return note;
    }

    function makeRest(clef) {
      return new StaveNote({
        clef,
        keys: [clef === "bass" ? "d/3" : "b/4"],
        duration: "qr"
      });
    }

    function measureItems(groups, measureIndex, clef) {
      const start = measureIndex * 4;

      return Array.from({ length: 4 }, (_, beat) => {
        const globalIndex = start + beat;
        const group = groups[globalIndex] || null;

        return {
          globalIndex,
          group,
          isRest: !group,
          tickable: group
            ? makeNote(group, clef, globalIndex)
            : makeRest(clef)
        };
      });
    }

    const sidePadding = 12;
    const measureWidth = (width - sidePadding * 2) / measuresPerSystem;
    const hintQueue = [];
    const guideQueue = [];

    for (let measureIndex = 0; measureIndex < measureCount; measureIndex += 1) {
      const systemIndex = Math.floor(measureIndex / measuresPerSystem);
      const positionInSystem = measureIndex % measuresPerSystem;
      const x = sidePadding + positionInSystem * measureWidth;
      const yBase = systemIndex * systemHeight;
      const firstOnSystem = positionInSystem === 0;
      const firstOverall = measureIndex === 0;
      const lastOverall = measureIndex === measureCount - 1;

      if (!grand) {
        const clef = hasLeft ? "bass" : "treble";
        const groups = hasLeft ? left : right;
        const stave = new Stave(x, yBase + 34, measureWidth);

        if (firstOnSystem) {
          stave.addClef(clef);
          if (firstOverall) stave.addTimeSignature("4/4");
        }

        if (Barline?.type) {
          stave.setEndBarType(lastOverall ? Barline.type.END : Barline.type.SINGLE);
        }

        stave.setContext(context).draw();

        const items = measureItems(groups, measureIndex, clef);
        const voice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
        voice.addTickables(items.map(item => item.tickable));

        const usable = measureWidth - (firstOnSystem ? 92 : 28);
        const formatter = new Formatter();
        formatter.joinVoices([voice]).format([voice], usable);
        voice.draw(context, stave);

        hintQueue.push({ items, stave, clef });
        guideQueue.push({
          xs: items.map(item => item.tickable.getAbsoluteX()),
          top: stave.getYForLine(0) - 22,
          bottom: stave.getBottomLineY() + 22
        });

        continue;
      }

      const treble = new Stave(x, yBase + 14, measureWidth);
      const bass = new Stave(x, yBase + 165, measureWidth);

      if (firstOnSystem) {
        treble.addClef("treble");
        bass.addClef("bass");

        if (firstOverall) {
          treble.addTimeSignature("4/4");
          bass.addTimeSignature("4/4");
        }
      }

      if (Barline?.type) {
        const type = lastOverall ? Barline.type.END : Barline.type.SINGLE;
        treble.setEndBarType(type);
        bass.setEndBarType(type);
      }

      treble.setContext(context).draw();
      bass.setContext(context).draw();

      try {
        if (firstOnSystem) {
          new StaveConnector(treble, bass)
            .setType(StaveConnector.type.BRACE)
            .setContext(context)
            .draw();

          new StaveConnector(treble, bass)
            .setType(StaveConnector.type.SINGLE_LEFT)
            .setContext(context)
            .draw();
        }

        new StaveConnector(treble, bass)
          .setType(StaveConnector.type.SINGLE_RIGHT)
          .setContext(context)
          .draw();
      } catch (_) {}

      const trebleItems = measureItems(right, measureIndex, "treble");
      const bassItems = measureItems(left, measureIndex, "bass");

      const trebleVoice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
      const bassVoice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);

      trebleVoice.addTickables(trebleItems.map(item => item.tickable));
      bassVoice.addTickables(bassItems.map(item => item.tickable));

      // Les deux voix sont formatées ENSEMBLE.
      // Cela impose le même TickContext pour chaque temps :
      // temps 1 clé de sol = temps 1 clé de fa sur la même verticale.
      const formatter = new Formatter();
      formatter.joinVoices([trebleVoice, bassVoice]);
      const usable = measureWidth - (firstOnSystem ? 92 : 28);
      formatter.format([trebleVoice, bassVoice], usable);

      trebleVoice.draw(context, treble);
      bassVoice.draw(context, bass);

      hintQueue.push(
        { items: trebleItems, stave: treble, clef: "treble" },
        { items: bassItems, stave: bass, clef: "bass" }
      );

      // On prend les X de la voix de dessus : la voix de dessous partage les mêmes temps.
      guideQueue.push({
        xs: trebleItems.map(item => item.tickable.getAbsoluteX()),
        top: treble.getYForLine(0) - 20,
        bottom: bass.getBottomLineY() + 20
      });
    }

    const svg = container.querySelector("svg");

    guideQueue.forEach(({ xs, top, bottom }) => {
      drawBeatGuides(svg, xs, top, bottom);
    });

    hintQueue.forEach(({ items, stave, clef }) => {
      items.forEach(item => {
        drawHelp(svg, item, stave, clef, showNoteNames, showFingers);
      });
    });
  } catch (error) {
    console.error("Erreur VexFlow :", error);

    container.innerHTML = `
      <div class="score-fallback">
        <strong>La portée n’a pas pu être chargée.</strong><br>
        <span>L’exercice reste utilisable avec le clavier et l’audio.</span>
      </div>
    `;
  }
}
