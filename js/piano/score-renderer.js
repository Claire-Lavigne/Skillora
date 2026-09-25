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
    if (activity.staff === "bass") return { right: [], left: groups };
    return { right: groups, left: [] };
  }

  if (activity.mode === "chord") {
    const group = [activity.notes || []];
    if (activity.staff === "bass") return { right: [], left: group };
    return { right: group, left: [] };
  }

  const groups = (activity.notes || []).map(item => [item]);

  if (activity.staff === "bass") {
    return { right: [], left: groups };
  }

  return { right: groups, left: [] };
}

function appendSvgText(svg, x, y, text, className) {
  if (!svg || !text) return;

  const node = document.createElementNS("http://www.w3.org/2000/svg", "text");
  node.setAttribute("x", x);
  node.setAttribute("y", y);
  node.setAttribute("text-anchor", "middle");
  node.setAttribute("class", className);
  node.textContent = text;
  svg.appendChild(node);
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

    const width = Math.max(560, Math.min(980, container.clientWidth || 820));
    const systemHeight = grand ? 320 : 210;
    const height = systems * systemHeight + 10;

    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();

    function makeNote(chord, clef, globalIndex) {
      const keys = chord.map(entry => normalizeNoteForVex(entry.note));
      const duration = chord[0]?.duration || "q";

      const note = new StaveNote({
        clef,
        keys,
        duration,
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

    function paddedMeasure(groups, measureIndex, clef) {
      const start = measureIndex * 4;
      const result = [];

      for (let beat = 0; beat < 4; beat += 1) {
        const globalIndex = start + beat;
        const group = groups[globalIndex];

        result.push({
          tickable: group ? makeNote(group, clef, globalIndex) : makeRest(clef),
          group: group || null,
          globalIndex,
          isRest: !group
        });
      }

      return result;
    }

    function drawHints(svg, items, stave, clef) {
      items.forEach(item => {
        if (item.isRest || !item.group?.length) return;

        const x = item.tickable.getAbsoluteX();
        const ys = item.tickable.getYs?.() || [];
        const noteY = ys.length ? ys[0] : stave.getYForLine(2);

        if (showFingers) {
          const fingers = item.group
            .map(entry => entry.finger)
            .filter(value => value !== undefined && value !== null);

          if (fingers.length) {
            appendSvgText(
              svg,
              x,
              clef === "treble" ? noteY - 18 : noteY + 24,
              fingers.join("·"),
              "score-help score-help--finger"
            );
          }
        }

        if (showNoteNames) {
          const label = item.group.map(entry => noteLabelFr(entry.note)).join(" + ");

          appendSvgText(
            svg,
            x,
            stave.getBottomLineY() + 30,
            label,
            "score-help score-help--note"
          );
        }
      });
    }

    const sidePadding = 12;
    const measureWidth = (width - sidePadding * 2) / measuresPerSystem;
    const pendingHints = [];

    for (let measureIndex = 0; measureIndex < measureCount; measureIndex += 1) {
      const systemIndex = Math.floor(measureIndex / measuresPerSystem);
      const positionInSystem = measureIndex % measuresPerSystem;

      const x = sidePadding + positionInSystem * measureWidth;
      const yBase = systemIndex * systemHeight;
      const isFirstMeasureOfSystem = positionInSystem === 0;
      const isFirstMeasureOverall = measureIndex === 0;

      if (!grand) {
        const clef = hasLeft ? "bass" : "treble";
        const groups = hasLeft ? left : right;

        const stave = new Stave(x, yBase + 28, measureWidth);

        if (isFirstMeasureOfSystem) {
          stave.addClef(clef);
          if (isFirstMeasureOverall) stave.addTimeSignature("4/4");
        }

        if (Barline?.type) {
          stave.setEndBarType(
            measureIndex === measureCount - 1
              ? Barline.type.END
              : Barline.type.SINGLE
          );
        }

        stave.setContext(context).draw();

        const items = paddedMeasure(groups, measureIndex, clef);
        const voice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
        voice.addTickables(items.map(item => item.tickable));

        const usable = measureWidth - (isFirstMeasureOfSystem ? 92 : 28);
        new Formatter().joinVoices([voice]).format([voice], usable);
        voice.draw(context, stave);

        pendingHints.push({ items, stave, clef });
        continue;
      }

      const treble = new Stave(x, yBase + 10, measureWidth);
      const bass = new Stave(x, yBase + 155, measureWidth);

      if (isFirstMeasureOfSystem) {
        treble.addClef("treble");
        bass.addClef("bass");

        if (isFirstMeasureOverall) {
          treble.addTimeSignature("4/4");
          bass.addTimeSignature("4/4");
        }
      }

      if (Barline?.type) {
        const type =
          measureIndex === measureCount - 1
            ? Barline.type.END
            : Barline.type.SINGLE;

        treble.setEndBarType(type);
        bass.setEndBarType(type);
      }

      treble.setContext(context).draw();
      bass.setContext(context).draw();

      try {
        if (isFirstMeasureOfSystem) {
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

      const trebleItems = paddedMeasure(right, measureIndex, "treble");
      const bassItems = paddedMeasure(left, measureIndex, "bass");

      const trebleVoice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);
      const bassVoice = new Voice({ numBeats: 4, beatValue: 4 }).setStrict(false);

      trebleVoice.addTickables(trebleItems.map(item => item.tickable));
      bassVoice.addTickables(bassItems.map(item => item.tickable));

      const formatter = new Formatter();
      formatter.joinVoices([trebleVoice, bassVoice]);

      const usable = measureWidth - (isFirstMeasureOfSystem ? 92 : 28);
      formatter.format([trebleVoice, bassVoice], usable);

      trebleVoice.draw(context, treble);
      bassVoice.draw(context, bass);

      pendingHints.push(
        { items: trebleItems, stave: treble, clef: "treble" },
        { items: bassItems, stave: bass, clef: "bass" }
      );
    }

    const svg = container.querySelector("svg");

    pendingHints.forEach(({ items, stave, clef }) => {
      drawHints(svg, items, stave, clef);
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
