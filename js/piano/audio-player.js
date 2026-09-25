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
let channel = null;
let reverb = null;
let limiter = null;
let loadingPromise = null;
let playbackToken = 0;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function ensurePiano() {
  if (sampler?.loaded) return sampler;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    Tone = await import(TONE_URL);

    // Les navigateurs imposent généralement une interaction utilisateur
    // avant d'autoriser le démarrage du contexte audio.
    await Tone.start();

    // Chaîne audio :
    // Sampler acoustique -> niveau -> légère réverbération -> limiteur.
    limiter = new Tone.Limiter(-1).toDestination();

    reverb = new Tone.Reverb({
      decay: 1.65,
      preDelay: 0.012,
      wet: 0.13
    });
    reverb.connect(limiter);

    // Tone.Reverb génère son impulse response de façon asynchrone.
    await reverb.ready;

    channel = new Tone.Channel({
      volume: -4.5,
      pan: 0
    });
    channel.connect(reverb);

    sampler = new Tone.Sampler({
      urls: SAMPLE_MAP,
      baseUrl: SAMPLE_BASE_URL,
      attack: 0,
      release: 1.75,
      curve: "exponential"
    });
    sampler.connect(channel);

    await Tone.loaded();

    return sampler;
  })();

  try {
    return await loadingPromise;
  } catch (error) {
    loadingPromise = null;

    try { sampler?.dispose?.(); } catch (_) {}
    try { channel?.dispose?.(); } catch (_) {}
    try { reverb?.dispose?.(); } catch (_) {}
    try { limiter?.dispose?.(); } catch (_) {}

    sampler = null;
    channel = null;
    reverb = null;
    limiter = null;

    throw error;
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function naturalVelocity(index = 0, base = 0.72) {
  // Petite variation déterministe : évite l'impression "MIDI robotique"
  // tout en gardant exactement les mêmes notes et le même tempo.
  const pattern = [0, -0.035, 0.018, -0.012, 0.026, -0.02, 0.012, -0.008];
  return clamp(base + pattern[index % pattern.length], 0.52, 0.82);
}

function noteDurationFromBeat(beatSeconds, ratio = 0.9, min = 0.55, max = 1.8) {
  return clamp(beatSeconds * ratio, min, max);
}

export async function preparePiano() {
  try {
    await ensurePiano();
    return {
      ok: true,
      message: "Piano acoustique prêt — samples Salamander Grand Piano."
    };
  } catch (error) {
    console.error("Impossible de charger le piano acoustique :", error);
    return {
      ok: false,
      message: "Le piano acoustique n’a pas pu être chargé. Vérifie ta connexion Internet puis recharge la page."
    };
  }
}

export function stopPlayback() {
  playbackToken += 1;

  try {
    sampler?.releaseAll?.();
  } catch (_) {
    // L'arrêt visuel reste prioritaire si le navigateur refuse une libération audio.
  }
}

export async function playNote(note, duration = 1.15) {
  const instrument = await ensurePiano();
  const now = Tone.now();

  instrument.triggerAttackRelease(
    note,
    clamp(duration, 0.45, 2.2),
    now,
    0.72
  );
}

export async function playChord(notes, duration = 1.45) {
  const instrument = await ensurePiano();
  const now = Tone.now();

  // Une vélocité moins forte évite que plusieurs samples additionnés
  // rendent l'accord agressif ou saturé.
  instrument.triggerAttackRelease(
    notes,
    clamp(duration, 0.7, 2.5),
    now,
    0.62
  );
}

export async function playSequence(notes, bpm = 60, { onStep, onDone } = {}) {
  const instrument = await ensurePiano();
  const token = ++playbackToken;

  const safeBpm = clamp(bpm, 30, 180);
  const beatSeconds = 60 / safeBpm;
  const beatMs = beatSeconds * 1000;
  const duration = noteDurationFromBeat(beatSeconds, 0.92, 0.58, 1.55);

  for (let index = 0; index < notes.length; index += 1) {
    if (token !== playbackToken) return;

    const note = notes[index];
    onStep?.([note], index);

    instrument.triggerAttackRelease(
      note,
      duration,
      Tone.now(),
      naturalVelocity(index, 0.72)
    );

    await wait(beatMs);
  }

  if (token === playbackToken) {
    // Laisse respirer très légèrement la dernière note avant de terminer
    // l'animation, sans ralentir réellement l'exercice.
    await wait(Math.min(160, beatMs * 0.18));
    onDone?.();
  }
}

export async function playChordSequence(groups, bpm = 60, { onStep, onDone } = {}) {
  const instrument = await ensurePiano();
  const token = ++playbackToken;

  const safeBpm = clamp(bpm, 30, 180);
  const beatSeconds = 60 / safeBpm;
  const beatMs = beatSeconds * 1000;
  const duration = noteDurationFromBeat(beatSeconds, 1.18, 0.85, 2.0);

  for (let index = 0; index < groups.length; index += 1) {
    if (token !== playbackToken) return;

    const notes = groups[index];
    onStep?.(notes, index);

    instrument.triggerAttackRelease(
      notes,
      duration,
      Tone.now(),
      naturalVelocity(index, 0.61)
    );

    await wait(beatMs);
  }

  if (token === playbackToken) {
    await wait(Math.min(180, beatMs * 0.2));
    onDone?.();
  }
}

export const pianoSoundCredits = {
  engine: "Tone.js 15.1.22",
  instrument: "Salamander Grand Piano — Yamaha C5",
  author: "Alexander Holm",
  license: "CC BY 3.0",
  source: "https://tonejs.github.io/audio/salamander/"
};
