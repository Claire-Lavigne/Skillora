const TONE_URL = "https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm";
const SAMPLE_BASE_URL = "https://tonejs.github.io/audio/salamander/";

const SAMPLE_MAP = {
  A0: "A0.mp3", C1: "C1.mp3", "D#1": "Ds1.mp3", "F#1": "Fs1.mp3",
  A1: "A1.mp3", C2: "C2.mp3", "D#2": "Ds2.mp3", "F#2": "Fs2.mp3",
  A2: "A2.mp3", C3: "C3.mp3", "D#3": "Ds3.mp3", "F#3": "Fs3.mp3",
  A3: "A3.mp3", C4: "C4.mp3", "D#4": "Ds4.mp3", "F#4": "Fs4.mp3",
  A4: "A4.mp3", C5: "C5.mp3", "D#5": "Ds5.mp3", "F#5": "Fs5.mp3",
  A5: "A5.mp3", C6: "C6.mp3", "D#6": "Ds6.mp3", "F#6": "Fs6.mp3",
  A6: "A6.mp3", C7: "C7.mp3"
};

let Tone = null;
let sampler = null;
let loadingPromise = null;
let playbackToken = 0;

async function ensurePiano() {
  if (sampler?.loaded) return sampler;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    Tone = await import(TONE_URL);
    await Tone.start();

    sampler = new Tone.Sampler({
      urls: SAMPLE_MAP,
      baseUrl: SAMPLE_BASE_URL,
      release: 1.2
    }).toDestination();

    await Tone.loaded();
    return sampler;
  })();

  try {
    return await loadingPromise;
  } catch (error) {
    loadingPromise = null;
    throw error;
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function preparePiano() {
  try {
    await ensurePiano();
    return { ok: true, message: "Son de piano acoustique prêt." };
  } catch (error) {
    return { ok: false, message: "Le son de piano n’a pas pu être chargé. Vérifie ta connexion Internet." };
  }
}

export function stopPlayback() {
  playbackToken += 1;
  try {
    sampler?.releaseAll?.();
  } catch (_) {
    // Rien à faire : l'arrêt visuel reste prioritaire.
  }
}

export async function playNote(note, duration = 0.8) {
  const instrument = await ensurePiano();
  instrument.triggerAttackRelease(note, duration);
}

export async function playChord(notes, duration = 1.1) {
  const instrument = await ensurePiano();
  instrument.triggerAttackRelease(notes, duration);
}

export async function playSequence(notes, bpm = 60, { onStep, onDone } = {}) {
  const instrument = await ensurePiano();
  const token = ++playbackToken;
  const beatMs = (60 / Math.max(30, Math.min(180, bpm))) * 1000;

  for (let index = 0; index < notes.length; index += 1) {
    if (token !== playbackToken) return;
    const note = notes[index];
    onStep?.([note], index);
    instrument.triggerAttackRelease(note, Math.min(0.9, beatMs / 1000 * 0.82));
    await wait(beatMs);
  }

  if (token === playbackToken) onDone?.();
}

export async function playChordSequence(groups, bpm = 60, { onStep, onDone } = {}) {
  const instrument = await ensurePiano();
  const token = ++playbackToken;
  const beatMs = (60 / Math.max(30, Math.min(180, bpm))) * 1000;

  for (let index = 0; index < groups.length; index += 1) {
    if (token !== playbackToken) return;
    const notes = groups[index];
    onStep?.(notes, index);
    instrument.triggerAttackRelease(notes, Math.min(1.2, beatMs / 1000 * 0.9));
    await wait(beatMs);
  }

  if (token === playbackToken) onDone?.();
}

export const pianoSoundCredits = {
  instrument: "Salamander Grand Piano — Yamaha C5",
  author: "Alexander Holm",
  license: "CC BY 3.0",
  source: "https://tonejs.github.io/audio/salamander/"
};
