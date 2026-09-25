const NOTE_NAMES_FR = {
  C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si"
};

const WHITE_PCS = ["C", "D", "E", "F", "G", "A", "B"];
const BLACK_AFTER = { C: "C#", D: "D#", F: "F#", G: "G#", A: "A#" };

function noteParts(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return null;
  return { letter: match[1], accidental: match[2] || "", octave: Number(match[3]) };
}

export function noteLabelFr(note) {
  const parts = noteParts(note);
  if (!parts) return note;
  const accidental = parts.accidental === "#" ? "♯" : parts.accidental === "b" ? "♭" : "";
  return `${NOTE_NAMES_FR[parts.letter]}${accidental}`;
}

function buildKeys(startOctave = 3, endOctave = 5) {
  const keys = [];
  for (let octave = startOctave; octave <= endOctave; octave++) {
    for (const white of WHITE_PCS) {
      keys.push({ note: `${white}${octave}`, black: false });
      const black = BLACK_AFTER[white];
      if (black) keys.push({ note: `${black}${octave}`, black: true });
    }
  }
  return keys;
}

export function createPianoKeyboard(container, { startOctave = 3, endOctave = 5 } = {}) {
  const keys = buildKeys(startOctave, endOctave);
  container.innerHTML = `<div class="trainer-keyboard" role="img" aria-label="Clavier de piano servant de repère pour le vrai instrument"></div>`;
  const keyboard = container.querySelector(".trainer-keyboard");

  for (const item of keys) {
    const key = document.createElement("div");
    key.className = `trainer-key ${item.black ? "trainer-key--black" : "trainer-key--white"}`;
    key.dataset.note = item.note;
    key.setAttribute("aria-label", `${noteLabelFr(item.note)} ${item.note}`);

    if (!item.black) {
      const label = document.createElement("span");
      label.className = "trainer-key__label";
      label.textContent = item.note === "C4" ? "Do central" : noteLabelFr(item.note);
      key.appendChild(label);
    }

    keyboard.appendChild(key);
  }

  function highlight(notes, currentNote = null) {
    const noteSet = new Set(notes || []);
    keyboard.querySelectorAll(".trainer-key").forEach(key => {
      key.classList.toggle("is-target", noteSet.has(key.dataset.note));
      key.classList.toggle("is-current", key.dataset.note === currentNote);
    });

    if (currentNote) {
      const target = keyboard.querySelector(`[data-note="${currentNote}"]`);
      target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  return { highlight };
}
