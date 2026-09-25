function normalizeNoteForVex(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return "c/4";
  return `${match[1].toLowerCase()}${match[2] || ""}/${match[3]}`;
}

function midiNumber(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return 60;
  const offsets = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  let pitch = offsets[match[1]];
  if (match[2] === "#") pitch += 1;
  if (match[2] === "b") pitch -= 1;
  return (Number(match[3]) + 1) * 12 + pitch;
}

function scoreGroups(exercise) {
  if (exercise.mode === "chord-sequence") return exercise.groups || [];
  if (exercise.mode === "chord") return [exercise.notes || []];
  return (exercise.notes || []).map(item => [item]);
}

function chooseLayout(exercise, groups) {
  const notes = groups.flat().map(item => item.note);
  if (!notes.length) return "treble";
  const values = notes.map(midiNumber);
  const min = Math.min(...values);
  const max = Math.max(...values);

  if (/deux mains|droite puis main gauche/i.test(exercise.hand || "")) return "grand";
  if (min < 58 && max >= 64) return "grand";
  if (/main gauche/i.test(exercise.hand || "") || max < 62) return "bass";
  return "treble";
}

function addAccidentals(note, chord, Accidental) {
  chord.forEach((entry, index) => {
    if (entry.note.includes("#")) note.addModifier(new Accidental("#"), index);
    if (entry.note.includes("b")) note.addModifier(new Accidental("b"), index);
  });
}

export async function renderScore(container, exercise) {
  container.innerHTML = `<div class="score-loading">Chargement de la portée…</div>`;

  try {
    const Vex = await import("https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm");
    const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, StaveConnector } = Vex;
    const groups = scoreGroups(exercise);

    if (!groups.length) {
      container.textContent = "Aucune note à afficher.";
      return;
    }

    container.innerHTML = "";
    const width = Math.max(600, Math.min(980, container.clientWidth || 780));
    const layout = chooseLayout(exercise, groups);
    const height = layout === "grand" ? 285 : 205;
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();

    function makeNote(chord, clef) {
      const keys = chord.map(entry => normalizeNoteForVex(entry.note));
      const note = new StaveNote({ clef, keys, duration: "q", autoStem: true });
      addAccidentals(note, chord, Accidental);
      return note;
    }

    if (layout !== "grand") {
      const stave = new Stave(10, 28, width - 20);
      stave.addClef(layout).addTimeSignature("4/4");
      stave.setContext(context).draw();

      const staveNotes = groups.map(group => makeNote(group, layout));
      const voice = new Voice({ numBeats: staveNotes.length, beatValue: 4 }).setStrict(false);
      voice.addTickables(staveNotes);
      new Formatter().joinVoices([voice]).format([voice], width - 105);
      voice.draw(context, stave);
      return;
    }

    const treble = new Stave(10, 15, width - 20);
    const bass = new Stave(10, 135, width - 20);
    treble.addClef("treble").addTimeSignature("4/4");
    bass.addClef("bass").addTimeSignature("4/4");
    treble.setContext(context).draw();
    bass.setContext(context).draw();

    try {
      new StaveConnector(treble, bass).setType(StaveConnector.type.BRACE).setContext(context).draw();
      new StaveConnector(treble, bass).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
    } catch (_) {
      // Les deux portées restent lisibles même si un navigateur ne dessine pas le connecteur.
    }

    const trebleNotes = [];
    const bassNotes = [];

    groups.forEach(group => {
      const average = group.reduce((sum, item) => sum + midiNumber(item.note), 0) / group.length;
      if (average < 60) {
        trebleNotes.push(new StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }));
        bassNotes.push(makeNote(group, "bass"));
      } else {
        trebleNotes.push(makeNote(group, "treble"));
        bassNotes.push(new StaveNote({ clef: "bass", keys: ["d/3"], duration: "qr" }));
      }
    });

    const trebleVoice = new Voice({ numBeats: groups.length, beatValue: 4 }).setStrict(false);
    const bassVoice = new Voice({ numBeats: groups.length, beatValue: 4 }).setStrict(false);
    trebleVoice.addTickables(trebleNotes);
    bassVoice.addTickables(bassNotes);
    new Formatter().joinVoices([trebleVoice, bassVoice]).format([trebleVoice, bassVoice], width - 110);
    trebleVoice.draw(context, treble);
    bassVoice.draw(context, bass);
  } catch (error) {
    const notes = exercise.mode === "chord-sequence"
      ? (exercise.groups || []).map(group => group.map(item => item.note).join(" + ")).join(" → ")
      : (exercise.notes || []).map(item => item.note).join(exercise.mode === "chord" ? " + " : " → ");
    container.innerHTML = `<div class="score-fallback"><strong>Notes :</strong> ${notes || "—"}<br><span>La portée n’a pas pu être chargée, mais l’exercice reste utilisable.</span></div>`;
  }
}
