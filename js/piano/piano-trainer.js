import { createPianoKeyboard, noteLabelFr } from "./piano-keyboard.js";
import {
  preparePiano,
  playNote,
  playChord,
  playSequence,
  playChordSequence,
  stopPlayback,
  pianoSoundCredits
} from "./audio-player.js";
import { connectMidi } from "./midi-input.js";
import { renderScore } from "./score-renderer.js";

function targetSteps(activity) {
  if (activity.mode === "two-hand") {
    const right = activity.rightHand || [];
    const left = activity.leftHand || [];
    const count = Math.max(right.length, left.length);

    return Array.from({ length: count }, (_, index) => {
      const notes = [];
      if (right[index]?.note) notes.push(right[index].note);
      if (left[index]?.note) notes.push(left[index].note);
      return notes;
    });
  }

  if (activity.mode === "chord-sequence") {
    return (activity.groups || []).map(group => group.map(item => item.note));
  }

  if (activity.mode === "chord") {
    return [(activity.notes || []).map(item => item.note)];
  }

  return (activity.notes || []).map(item => [item.note]);
}

function prettyTarget(notes) {
  return notes.map(note => `${noteLabelFr(note)} (${note})`).join(" + ");
}

function entriesForStep(activity, index) {
  if (activity.mode === "two-hand") {
    const result = [];
    if (activity.rightHand?.[index]) {
      result.push({ ...activity.rightHand[index], handCode: "MD" });
    }
    if (activity.leftHand?.[index]) {
      result.push({ ...activity.leftHand[index], handCode: "MG" });
    }
    return result;
  }

  if (activity.mode === "chord-sequence") {
    const group = (activity.groups || [])[index] || [];
    const code = /gauche/i.test(activity.hand || "") ? "MG" : "MD";
    return group.map(item => ({ ...item, handCode: code }));
  }

  if (activity.mode === "chord") {
    const code = /gauche/i.test(activity.hand || "") ? "MG" : "MD";
    return (activity.notes || []).map(item => ({ ...item, handCode: code }));
  }

  const item = activity.notes?.[index];
  if (!item) return [];
  return [{
    ...item,
    handCode: /gauche/i.test(activity.hand || "") ? "MG" : "MD"
  }];
}

function fingersLabel(entries) {
  if (!entries.length) return "";

  const right = entries.filter(item => item.handCode === "MD" && item.finger);
  const left = entries.filter(item => item.handCode === "MG" && item.finger);

  const parts = [];

  if (right.length) {
    parts.push(
      `MD · ${right.length > 1 ? "doigts" : "doigt"} ${right.map(x => x.finger).join(" - ")}`
    );
  }

  if (left.length) {
    parts.push(
      `MG · ${left.length > 1 ? "doigts" : "doigt"} ${left.map(x => x.finger).join(" - ")}`
    );
  }

  return parts.join(" · ");
}

export function mountPianoStageTrainer(container, stage) {
  const activity = stage.practice;

  container.innerHTML = `
    <div class="piano-stage-tools">
      <div class="trainer-focus" aria-live="polite">
        <div>
          <span class="trainer-focus__label">À jouer maintenant sur ton vrai piano</span>
          <strong class="trainer-current">—</strong>
          <span class="trainer-finger"></span>
        </div>
        <div class="trainer-focus__actions">
          <button type="button" class="trainer-prev">← Précédent</button>
          <button type="button" class="trainer-next">Suivant →</button>
        </div>
      </div>

      <div class="trainer-score-panel">
        <div class="trainer-section-title">
          <strong>Portée</strong>
          <span>Clé de sol = main droite · clé de fa = main gauche.</span>
        </div>
        <div class="trainer-score" aria-label="Partition de l’étape"></div>
      </div>

      <div class="trainer-keyboard-panel">
        <div class="trainer-section-title">
          <strong>Repère sur le clavier</strong>
          <span>Les touches colorées correspondent uniquement à l’étape sélectionnée.</span>
        </div>
        <div class="trainer-keyboard-slot"></div>
      </div>

      <div class="trainer-demo-panel">
        <div class="trainer-section-title">
          <strong>Démonstration</strong>
          <span class="trainer-audio-status">Le premier lancement charge les sons du piano.</span>
        </div>
        <div class="trainer-demo-actions">
          <button type="button" class="trainer-listen">♪ Écouter</button>
          <button type="button" class="trainer-play-all">▶ Démonstration animée</button>
          <button type="button" class="trainer-stop">■ Arrêter</button>
        </div>
      </div>

      <div class="trainer-sequence-panel">
        <div class="trainer-section-title">
          <strong>Séquence — note et doigt</strong>
          <span class="trainer-sequence-status"></span>
        </div>
        <div class="trainer-sequence"></div>
      </div>

      <details class="trainer-midi-panel trainer-midi-details">
        <summary>Vérifier avec un piano numérique MIDI (optionnel)</summary>
        <div class="trainer-midi-row">
          <button type="button" class="trainer-midi">🎹 Connecter mon piano MIDI</button>
          <span class="trainer-midi-status">Tu peux faire l’exercice sans connexion MIDI.</span>
        </div>
      </details>

      <p class="trainer-audio-credit">
        Son : ${pianoSoundCredits.instrument}, échantillons d’${pianoSoundCredits.author} (${pianoSoundCredits.license}).
      </p>
    </div>
  `;

  const current = container.querySelector(".trainer-current");
  const finger = container.querySelector(".trainer-finger");
  const score = container.querySelector(".trainer-score");
  const sequence = container.querySelector(".trainer-sequence");
  const sequenceStatus = container.querySelector(".trainer-sequence-status");
  const midiStatus = container.querySelector(".trainer-midi-status");
  const audioStatus = container.querySelector(".trainer-audio-status");
  const playAllButton = container.querySelector(".trainer-play-all");

  const keyboard = createPianoKeyboard(
    container.querySelector(".trainer-keyboard-slot"),
    { startOctave: 2, endOctave: 5 }
  );

  let stepIndex = 0;
  let midiConnection = null;

  function steps() {
    return targetSteps(activity);
  }

  function currentStep() {
    const list = steps();
    return list[Math.max(0, Math.min(stepIndex, list.length - 1))] || [];
  }

  function renderSequence() {
    sequence.innerHTML = "";
    const list = steps();

    list.forEach((notes, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "trainer-sequence__item";
      item.classList.toggle("is-current", index === stepIndex);

      item.innerHTML = `
        <span class="trainer-sequence__step">Étape ${index + 1}</span>
        <strong>${notes.map(noteLabelFr).join(" + ")}</strong>
        <em class="trainer-sequence__finger">${fingersLabel(entriesForStep(activity, index))}</em>
      `;

      item.addEventListener("click", () => {
        stopPlayback();
        stepIndex = index;
        renderCurrent();
      });

      sequence.appendChild(item);
    });

    sequenceStatus.textContent =
      `${Math.min(stepIndex + 1, list.length)} / ${list.length}`;
  }

  function renderCurrent(message = "") {
    const target = currentStep();

    current.textContent = message || prettyTarget(target);
    finger.textContent =
      fingersLabel(entriesForStep(activity, stepIndex)) ||
      (target.length > 1 ? "Joue les notes ensemble" : "");

    keyboard.highlight(target, target);
    renderSequence();
  }

  function demoStep(notes, index) {
    stepIndex = Math.min(index, steps().length - 1);
    keyboard.highlight(notes, notes);
    keyboard.animate(notes, 460);
    current.textContent = prettyTarget(notes);
    finger.textContent = fingersLabel(entriesForStep(activity, stepIndex));
    renderSequence();
  }

  container.querySelector(".trainer-listen").addEventListener("click", async () => {
    const target = currentStep();
    audioStatus.textContent = "Lecture du piano acoustique…";

    try {
      keyboard.animate(target, 650);

      if (target.length > 1) await playChord(target);
      else if (target[0]) await playNote(target[0]);

      audioStatus.textContent = "À toi de reproduire sur ton vrai piano.";
    } catch (_) {
      audioStatus.textContent = "Impossible de charger le son. Vérifie ta connexion Internet.";
    }
  });

  container.querySelector(".trainer-prev").addEventListener("click", () => {
    stopPlayback();
    stepIndex = Math.max(0, stepIndex - 1);
    renderCurrent();
  });

  container.querySelector(".trainer-next").addEventListener("click", () => {
    stopPlayback();
    stepIndex = Math.min(steps().length - 1, stepIndex + 1);
    renderCurrent();
  });

  playAllButton.addEventListener("click", async () => {
    stopPlayback();
    playAllButton.disabled = true;
    audioStatus.textContent = "Préparation du piano acoustique…";

    const ready = await preparePiano();
    audioStatus.textContent = ready.message;

    if (!ready.ok) {
      playAllButton.disabled = false;
      return;
    }

    const options = {
      onStep: demoStep,
      onDone: () => {
        playAllButton.disabled = false;
        audioStatus.textContent = "Démonstration terminée. À toi de jouer.";
        renderCurrent();
      }
    };

    try {
      if (activity.mode === "chord-sequence") {
        await playChordSequence(
          (activity.groups || []).map(group => group.map(item => item.note)),
          activity.tempo,
          options
        );
      } else if (activity.mode === "chord") {
        const notes = (activity.notes || []).map(item => item.note);
        demoStep(notes, 0);
        await playChord(notes);
        options.onDone();
      } else if (activity.mode === "two-hand") {
        await playChordSequence(steps(), activity.tempo, options);
      } else {
        await playSequence(
          (activity.notes || []).map(item => item.note),
          activity.tempo,
          options
        );
      }
    } catch (_) {
      playAllButton.disabled = false;
      audioStatus.textContent = "La démonstration audio a été interrompue.";
    }
  });

  container.querySelector(".trainer-stop").addEventListener("click", () => {
    stopPlayback();
    keyboard.clearPlaying();
    playAllButton.disabled = false;
    audioStatus.textContent = "Démonstration arrêtée.";
    renderCurrent();
  });

  container.querySelector(".trainer-midi").addEventListener("click", async () => {
    if (midiConnection?.disconnect) midiConnection.disconnect();

    midiStatus.textContent = "Recherche du piano MIDI…";

    midiConnection = await connectMidi((playedNote, velocity, deviceName) => {
      const target = currentStep();
      keyboard.animate([playedNote], 280);

      if (target.includes(playedNote)) {
        midiStatus.textContent =
          `✅ ${noteLabelFr(playedNote)} correct — ${deviceName}`;
      } else {
        midiStatus.textContent =
          `❌ Tu as joué ${noteLabelFr(playedNote)}. Attendu : ${target.map(noteLabelFr).join(" + ")}.`;
      }
    });

    midiStatus.textContent = midiConnection.message;
  });

  renderScore(score, activity);
  renderCurrent();

  return {
    destroy() {
      stopPlayback();
      if (midiConnection?.disconnect) midiConnection.disconnect();
      container.innerHTML = "";
    }
  };
}
