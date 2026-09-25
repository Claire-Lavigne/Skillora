const NOTE_TO_SEMITONE = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11 };

function noteToFrequency(note) {
  const match = /^([A-G](?:#|b)?)(\d)$/.exec(note);
  if (!match) return 440;
  const pitch = match[1];
  const octave = Number(match[2]);
  const midi = (octave + 1) * 12 + NOTE_TO_SEMITONE[pitch];
  return 440 * Math.pow(2, (midi - 69) / 12);
}

let audioContext = null;

function context() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function nativePlay(note, duration = 0.55, when = 0) {
  const ctx = context();
  const start = ctx.currentTime + when;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(noteToFrequency(note), start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.24, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.04);
}

export function playNote(note, duration = 0.55) {
  nativePlay(note, duration, 0);
}

export function playChord(notes, duration = 0.8) {
  notes.forEach(note => nativePlay(note, duration, 0));
}

export function playSequence(notes, bpm = 60) {
  const beat = 60 / Math.max(30, Math.min(180, bpm));
  notes.forEach((note, index) => nativePlay(note, Math.min(0.7, beat * 0.85), index * beat));
}

export function playChordSequence(groups, bpm = 60) {
  const beat = 60 / Math.max(30, Math.min(180, bpm));
  groups.forEach((group, index) => {
    group.forEach(note => nativePlay(note, Math.min(0.9, beat * 0.9), index * beat));
  });
}
