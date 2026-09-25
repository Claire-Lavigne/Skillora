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
  if (activity.staff === "bass") return { right: [], left: groups };
  return { right: groups, left: [] };
}

export async function renderScore(container, activity) {
  container.innerHTML = `<div class="score-loading">Chargement de la portée…</div>`;

  try {
    const Vex = await import("https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm");
    const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, StaveConnector } = Vex;
    const { right, left } = activityGroups(activity);
    const forceGrand = activity.staff === "grand" || activity.mode === "two-hand";
    const hasRight = right.length > 0;
    const hasLeft = left.length > 0;

    if (!hasRight && !hasLeft) {
      container.textContent = "Aucune note à afficher.";
      return;
    }

    container.innerHTML = "";
    const width = Math.max(620, Math.min(980, container.clientWidth || 820));
    const grand = forceGrand || (hasRight && hasLeft);
    const height = grand ? 300 : 210;
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, height);
    const context = renderer.getContext();

    function makeNote(chord, clef) {
      const keys = chord.map(entry => normalizeNoteForVex(entry.note));
      const duration = chord[0]?.duration || "q";
      const note = new StaveNote({ clef, keys, duration, autoStem: true });
      addAccidentals(note, chord, Accidental);
      return note;
    }

    function makeRest(clef) {
      return new StaveNote({
        clef,
        keys: [clef === "bass" ? "d/3" : "b/4"],
        duration: "qr"
      });
    }

    if (!grand) {
      const clef = hasLeft ? "bass" : "treble";
      const groups = hasLeft ? left : right;
      const stave = new Stave(10, 30, width - 20);
      stave.addClef(clef).addTimeSignature("4/4");
      stave.setContext(context).draw();

      const notes = groups.map(group => makeNote(group, clef));
      const voice = new Voice({ numBeats: notes.length, beatValue: 4 }).setStrict(false);
      voice.addTickables(notes);
      new Formatter().joinVoices([voice]).format([voice], width - 115);
      voice.draw(context, stave);
      return;
    }

    const treble = new Stave(10, 15, width - 20);
    const bass = new Stave(10, 145, width - 20);
    treble.addClef("treble").addTimeSignature("4/4");
    bass.addClef("bass").addTimeSignature("4/4");
    treble.setContext(context).draw();
    bass.setContext(context).draw();

    try {
      new StaveConnector(treble, bass).setType(StaveConnector.type.BRACE).setContext(context).draw();
      new StaveConnector(treble, bass).setType(StaveConnector.type.SINGLE_LEFT).setContext(context).draw();
    } catch (_) {}

    const count = Math.max(right.length, left.length);
    const trebleNotes = [];
    const bassNotes = [];

    for (let i = 0; i < count; i += 1) {
      trebleNotes.push(right[i] ? makeNote(right[i], "treble") : makeRest("treble"));
      bassNotes.push(left[i] ? makeNote(left[i], "bass") : makeRest("bass"));
    }

    const trebleVoice = new Voice({ numBeats: count, beatValue: 4 }).setStrict(false);
    const bassVoice = new Voice({ numBeats: count, beatValue: 4 }).setStrict(false);
    trebleVoice.addTickables(trebleNotes);
    bassVoice.addTickables(bassNotes);

    new Formatter()
      .joinVoices([trebleVoice, bassVoice])
      .format([trebleVoice, bassVoice], width - 120);

    trebleVoice.draw(context, treble);
    bassVoice.draw(context, bass);
  } catch (error) {
    console.error("Erreur VexFlow :", error);
    container.innerHTML = `<div class="score-fallback"><strong>La portée n’a pas pu être chargée.</strong><br><span>L’exercice reste utilisable avec le clavier et l’audio.</span></div>`;
  }
}
