export function midiNoteNumberToName(number) {
  const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const octave = Math.floor(number / 12) - 1;
  return `${names[number % 12]}${octave}`;
}

export async function connectMidi(onNote) {
  if (!navigator.requestMIDIAccess) {
    return { ok: false, message: "Web MIDI n’est pas disponible dans ce navigateur." };
  }

  try {
    const access = await navigator.requestMIDIAccess();
    const inputs = [...access.inputs.values()];

    if (!inputs.length) {
      return { ok: false, message: "Aucun piano MIDI détecté. Branche ton piano puis réessaie." };
    }

    const listeners = [];

    for (const input of inputs) {
      const handler = event => {
        const [status, noteNumber, velocity] = event.data;
        const command = status & 0xf0;
        if (command === 0x90 && velocity > 0) {
          onNote(midiNoteNumberToName(noteNumber), velocity, input.name || "Piano MIDI");
        }
      };
      input.addEventListener("midimessage", handler);
      listeners.push([input, handler]);
    }

    return {
      ok: true,
      message: `${inputs.length} entrée(s) MIDI connectée(s).`,
      disconnect() {
        listeners.forEach(([input, handler]) => input.removeEventListener("midimessage", handler));
      }
    };
  } catch (error) {
    return { ok: false, message: "Connexion MIDI refusée ou impossible." };
  }
}
