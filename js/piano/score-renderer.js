function normalizeNoteForVex(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return "c/4";
  return `${match[1].toLowerCase()}${match[2] || ""}/${match[3]}`;
}

export async function renderScore(container, exercise) {
  container.innerHTML = `<div class="score-loading">Chargement de la portée…</div>`;

  try {
    const Vex = await import("https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm");
    const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental } = Vex;
    container.innerHTML = "";

    const width = Math.max(520, Math.min(900, container.clientWidth || 720));
    const renderer = new Renderer(container, Renderer.Backends.SVG);
    renderer.resize(width, 180);
    const context = renderer.getContext();
    const stave = new Stave(10, 35, width - 20);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    let source = exercise.notes || [];
    if (exercise.mode === "chord") source = [exercise.notes];
    if (exercise.mode === "chord-sequence") source = exercise.groups || [];

    const staveNotes = [];
    for (const item of source) {
      const chord = Array.isArray(item) ? item : [item];
      const keys = chord.map(entry => normalizeNoteForVex(entry.note));
      const note = new StaveNote({ keys, duration: "q" });
      chord.forEach((entry, index) => {
        if (entry.note.includes("#")) note.addModifier(new Accidental("#"), index);
        if (entry.note.includes("b")) note.addModifier(new Accidental("b"), index);
      });
      staveNotes.push(note);
    }

    if (!staveNotes.length) {
      container.textContent = "Aucune note à afficher.";
      return;
    }

    const voice = new Voice({ numBeats: staveNotes.length, beatValue: 4 }).setStrict(false);
    voice.addTickables(staveNotes);
    new Formatter().joinVoices([voice]).format([voice], width - 90);
    voice.draw(context, stave);
  } catch (error) {
    const notes = exercise.mode === "chord-sequence"
      ? (exercise.groups || []).map(group => group.map(item => item.note).join(" + ")).join(" → ")
      : (exercise.notes || []).map(item => item.note).join(exercise.mode === "chord" ? " + " : " → ");
    container.innerHTML = `<div class="score-fallback"><strong>Notes :</strong> ${notes || "—"}<br><span>La portée n’a pas pu être chargée, mais l’exercice reste utilisable.</span></div>`;
  }
}
