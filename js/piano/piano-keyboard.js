const NOTE_NAMES_FR = {
  C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si"
};

const WHITE_PCS = ["C", "D", "E", "F", "G", "A", "B"];
const BLACK_AFTER = { C: "C#", D: "D#", F: "F#", G: "G#", A: "A#" };

const SEMITONES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

function noteParts(note) {
  const match = /^([A-G])(#|b)?(\d)$/.exec(note);
  if (!match) return null;
  return {
    letter: match[1],
    accidental: match[2] || "",
    octave: Number(match[3])
  };
}

function noteToMidi(note) {
  const parts = noteParts(note);
  if (!parts) return 60;

  let pitch = SEMITONES[parts.letter];
  if (parts.accidental === "#") pitch += 1;
  if (parts.accidental === "b") pitch -= 1;

  return (parts.octave + 1) * 12 + pitch;
}

function canonicalNote(note) {
  const parts = noteParts(note);
  if (!parts || parts.accidental !== "b") return note;

  const midi = noteToMidi(note);
  const sharpNames = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  const name = sharpNames[midi % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${name}${octave}`;
}

export function noteLabelFr(note) {
  const parts = noteParts(note);
  if (!parts) return note;

  const accidental =
    parts.accidental === "#" ? "♯" :
    parts.accidental === "b" ? "♭" : "";

  return `${NOTE_NAMES_FR[parts.letter]}${accidental}`;
}

function buildWhiteNotes() {
  const notes = [];

  for (let octave = 0; octave <= 8; octave += 1) {
    WHITE_PCS.forEach(letter => {
      notes.push({
        note: `${letter}${octave}`,
        letter,
        octave,
        midi: noteToMidi(`${letter}${octave}`)
      });
    });
  }

  return notes;
}

const ALL_WHITE_NOTES = buildWhiteNotes();

function visibleWhiteRange(notes = [], minWhiteKeys = 7) {
  const valid = notes.map(canonicalNote).filter(noteParts);

  if (!valid.length) {
    return ALL_WHITE_NOTES.filter(item => item.midi >= noteToMidi("C3") && item.midi <= noteToMidi("C5"));
  }

  const midis = valid.map(noteToMidi);
  const minMidi = Math.min(...midis);
  const maxMidi = Math.max(...midis);

  let startIndex = ALL_WHITE_NOTES.findIndex(item => item.midi >= minMidi);
  if (startIndex < 0) startIndex = 0;
  if (ALL_WHITE_NOTES[startIndex].midi > minMidi && startIndex > 0) startIndex -= 1;

  let endIndex = ALL_WHITE_NOTES.findIndex(item => item.midi >= maxMidi);
  if (endIndex < 0) endIndex = ALL_WHITE_NOTES.length - 1;

  // Une touche blanche de marge de chaque côté aide à retrouver la zone sur le vrai piano.
  startIndex = Math.max(0, startIndex - 1);
  endIndex = Math.min(ALL_WHITE_NOTES.length - 1, endIndex + 1);

  while (endIndex - startIndex + 1 < minWhiteKeys) {
    if (startIndex > 0) startIndex -= 1;
    if (endIndex - startIndex + 1 >= minWhiteKeys) break;
    if (endIndex < ALL_WHITE_NOTES.length - 1) endIndex += 1;
    if (startIndex === 0 && endIndex === ALL_WHITE_NOTES.length - 1) break;
  }

  return ALL_WHITE_NOTES.slice(startIndex, endIndex + 1);
}

export function createPianoKeyboard(container, { notes = [], minWhiteKeys = 7 } = {}) {
  // On affiche TOUJOURS toute l'étendue utilisée par l'exercice.
  // Les touches se compressent pour tenir dans le conteneur au lieu de couper
  // les notes graves ou aiguës.
  const whites = visibleWhiteRange(notes, minWhiteKeys);

  container.innerHTML = `
    <div
      class="trainer-keyboard"
      role="img"
      aria-label="Zone du clavier de piano utilisée dans cet exercice"
      style="--white-count:${whites.length}"
    >
      <div class="trainer-keyboard__whites"></div>
      <div class="trainer-keyboard__blacks" aria-hidden="true"></div>
    </div>
  `;

  const keyboard = container.querySelector(".trainer-keyboard");
  const whiteLayer = keyboard.querySelector(".trainer-keyboard__whites");
  const blackLayer = keyboard.querySelector(".trainer-keyboard__blacks");

  whites.forEach((item, index) => {
    const key = document.createElement("div");
    key.className = "trainer-key trainer-key--white";
    key.dataset.note = item.note;
    key.setAttribute("aria-label", `${noteLabelFr(item.note)} ${item.note}`);

    const label = document.createElement("span");
    label.className = "trainer-key__label";
    label.textContent = item.note === "C4" ? "Do central" : noteLabelFr(item.note);
    key.appendChild(label);

    whiteLayer.appendChild(key);

    const blackName = BLACK_AFTER[item.letter];
    const hasFollowingWhite = index < whites.length - 1;

    if (blackName && hasFollowingWhite) {
      const blackNote = `${blackName}${item.octave}`;
      const black = document.createElement("div");
      black.className = "trainer-key trainer-key--black";
      black.dataset.note = blackNote;
      black.setAttribute("aria-label", `${noteLabelFr(blackNote)} ${blackNote}`);

      // La touche noire se place exactement sur la frontière entre deux blanches.
      black.style.left = `${((index + 1) / whites.length) * 100}%`;
      blackLayer.appendChild(black);
    }
  });

  function allKeys() {
    return keyboard.querySelectorAll(".trainer-key");
  }

  function highlight(notesToHighlight, currentNotes = []) {
    const noteSet = new Set((notesToHighlight || []).map(canonicalNote));
    const currentSet = new Set(
      (Array.isArray(currentNotes) ? currentNotes : currentNotes ? [currentNotes] : [])
        .map(canonicalNote)
    );

    allKeys().forEach(key => {
      key.classList.toggle("is-target", noteSet.has(key.dataset.note));
      key.classList.toggle("is-current", currentSet.has(key.dataset.note));
    });
  }

  let releaseTimer = null;

  function animate(notesToAnimate, duration = 500, holdUntilNext = false) {
    const list = (Array.isArray(notesToAnimate) ? notesToAnimate : [notesToAnimate])
      .map(canonicalNote);

    if (releaseTimer) {
      window.clearTimeout(releaseTimer);
      releaseTimer = null;
    }

    // Une seule étape visuelle reste active : on passe doucement de l'ancienne
    // note/accord à la nouvelle sans laisser une période "éteinte".
    keyboard.querySelectorAll(".is-playing").forEach(key => {
      key.classList.remove("is-playing");
    });

    list.forEach(note => {
      const key = keyboard.querySelector(`[data-note="${note}"]`);
      if (key) key.classList.add("is-playing");
    });

    if (!holdUntilNext && duration > 0) {
      releaseTimer = window.setTimeout(() => {
        keyboard.querySelectorAll(".is-playing").forEach(key => {
          key.classList.remove("is-playing");
        });
        releaseTimer = null;
      }, duration);
    }
  }

  function setPlaying(notesToPlay = []) {
    animate(notesToPlay, 0, true);
  }

  function clearPlaying() {
    if (releaseTimer) {
      window.clearTimeout(releaseTimer);
      releaseTimer = null;
    }

    keyboard.querySelectorAll(".is-playing").forEach(key => {
      key.classList.remove("is-playing");
    });
  }

  return { highlight, animate, clearPlaying };
}
