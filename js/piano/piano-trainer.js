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
import { getPianoExerciseByWeek } from "./exercises/piano-exercises.js";

function flattenExercise(exercise) {
  if (exercise.mode === "chord-sequence") return (exercise.groups || []).flat();
  return exercise.notes || [];
}

function targetSteps(exercise) {
  if (exercise.mode === "chord-sequence") return (exercise.groups || []).map(group => group.map(item => item.note));
  if (exercise.mode === "chord") return [(exercise.notes || []).map(item => item.note)];
  return (exercise.notes || []).map(item => [item.note]);
}

function prettyTarget(notes) {
  return notes.map(note => `${noteLabelFr(note)} (${note})`).join(" + ");
}

export function mountPianoTrainer(container) {
  container.innerHTML = `
    <section class="piano-trainer">
      <div class="trainer-head">
        <div>
          <span class="trainer-eyebrow">Exercice pratique de la semaine</span>
          <h2 id="trainerTitle">Exercice</h2>
          <p id="trainerObjective"></p>
        </div>
        <div class="trainer-meta">
          <span id="trainerHand"></span>
          <span id="trainerTempo"></span>
        </div>
      </div>

      <div class="trainer-focus" aria-live="polite">
        <div>
          <span class="trainer-focus__label">À jouer maintenant sur ton vrai piano</span>
          <strong id="trainerCurrent">—</strong>
          <span id="trainerFinger"></span>
        </div>
        <div class="trainer-focus__actions">
          <button type="button" id="trainerPrev">← Précédent</button>
          <button type="button" id="trainerNext">Suivant →</button>
        </div>
      </div>

      <div class="trainer-score-panel">
        <div class="trainer-section-title">
          <strong>1. Lis la portée</strong>
          <span>La clé s’adapte à la tessiture de l’exercice.</span>
        </div>
        <div id="trainerScore" class="trainer-score" aria-label="Partition de l’exercice"></div>
      </div>

      <div class="trainer-keyboard-panel">
        <div class="trainer-section-title">
          <strong>2. Repère les touches sur ton vrai piano</strong>
          <span>Les touches colorées correspondent uniquement à l’étape sélectionnée dans la séquence.</span>
        </div>
        <div id="trainerKeyboard"></div>
      </div>

      <div class="trainer-demo-panel">
        <div class="trainer-section-title">
          <strong>3. Regarde et écoute la démonstration</strong>
          <span id="trainerAudioStatus">Le premier lancement charge les vrais sons du piano.</span>
        </div>
        <div class="trainer-demo-actions">
          <button type="button" id="trainerListen">♪ Écouter la note</button>
          <button type="button" id="trainerPlayAll">▶ Démonstration animée</button>
          <button type="button" id="trainerStop">■ Arrêter</button>
        </div>
      </div>

      <div class="trainer-sequence-panel">
        <div class="trainer-section-title">
          <strong>4. Suis la séquence</strong>
          <span id="trainerSequenceStatus"></span>
        </div>
        <div id="trainerSequence" class="trainer-sequence"></div>
      </div>

      <div class="trainer-midi-panel">
        <div class="trainer-section-title">
          <strong>5. Vérifie avec ton piano numérique</strong>
          <span>Optionnel — uniquement si ton piano possède USB/MIDI.</span>
        </div>
        <div class="trainer-midi-row">
          <button type="button" id="trainerMidi">🎹 Connecter mon piano MIDI</button>
          <span id="trainerMidiStatus" class="trainer-midi-status">Tu peux aussi faire l’exercice sans connexion MIDI.</span>
        </div>
      </div>

      <p class="trainer-audio-credit">
        Son : ${pianoSoundCredits.instrument}, échantillons d’${pianoSoundCredits.author} (${pianoSoundCredits.license}).
      </p>
    </section>
  `;

  const title = container.querySelector("#trainerTitle");
  const objective = container.querySelector("#trainerObjective");
  const hand = container.querySelector("#trainerHand");
  const tempo = container.querySelector("#trainerTempo");
  const current = container.querySelector("#trainerCurrent");
  const finger = container.querySelector("#trainerFinger");
  const score = container.querySelector("#trainerScore");
  const sequence = container.querySelector("#trainerSequence");
  const sequenceStatus = container.querySelector("#trainerSequenceStatus");
  const midiStatus = container.querySelector("#trainerMidiStatus");
  const audioStatus = container.querySelector("#trainerAudioStatus");
  const playAllButton = container.querySelector("#trainerPlayAll");

  const keyboard = createPianoKeyboard(container.querySelector("#trainerKeyboard"), { startOctave: 3, endOctave: 5 });

  let exercise = getPianoExerciseByWeek(0);
  let stepIndex = 0;
  let midiConnection = null;

  function steps() {
    return targetSteps(exercise);
  }

  function currentStep() {
    const list = steps();
    return list[Math.max(0, Math.min(stepIndex, list.length - 1))] || [];
  }

  function noteInfoForCurrent() {
    const target = currentStep();
    if (target.length !== 1) return null;
    return flattenExercise(exercise).find(item => item.note === target[0]) || null;
  }

  function renderSequence() {
    sequence.innerHTML = "";
    const list = steps();
    list.forEach((notes, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "trainer-sequence__item";
      item.classList.toggle("is-current", index === stepIndex);
      item.innerHTML = `<span>${index + 1}</span><strong>${notes.map(noteLabelFr).join(" + ")}</strong>`;
      item.addEventListener("click", () => {
        stopPlayback();
        stepIndex = index;
        renderCurrent();
      });
      sequence.appendChild(item);
    });
    sequenceStatus.textContent = `${Math.min(stepIndex + 1, list.length)} / ${list.length}`;
  }

  function renderCurrent(message = "") {
    const target = currentStep();
    current.textContent = message || prettyTarget(target);

    const info = noteInfoForCurrent();
    finger.textContent = info?.finger ? `Doigt ${info.finger}` : target.length > 1 ? "Joue les notes ensemble" : "";

    // Le clavier ne montre que l'étape sélectionnée dans la séquence.
    // Pour un accord, seules les notes de cet accord sont colorées.
    keyboard.highlight(target, target);
    renderSequence();
  }

  function demoStep(notes, index) {
    stepIndex = Math.min(index, steps().length - 1);
    // Pendant la démonstration, n'affiche que le groupe joué à cet instant.
    keyboard.highlight(notes, notes);
    keyboard.animate(notes, 460);
    current.textContent = prettyTarget(notes);
    renderSequence();
  }

  async function loadWeek(index) {
    stopPlayback();
    keyboard.clearPlaying();
    exercise = getPianoExerciseByWeek(index);
    stepIndex = 0;

    title.textContent = exercise.title;
    objective.textContent = exercise.objective;
    hand.textContent = exercise.hand;
    tempo.textContent = `${exercise.tempo || 60} BPM`;

    await renderScore(score, exercise);
    renderCurrent();
  }

  container.querySelector("#trainerListen").addEventListener("click", async () => {
    const target = currentStep();
    audioStatus.textContent = "Chargement / lecture du piano acoustique…";
    try {
      keyboard.animate(target, 650);
      if (target.length > 1) await playChord(target);
      else if (target[0]) await playNote(target[0]);
      audioStatus.textContent = "Son de piano acoustique prêt.";
    } catch (_) {
      audioStatus.textContent = "Impossible de charger le son. Vérifie ta connexion Internet.";
    }
  });

  container.querySelector("#trainerPrev").addEventListener("click", () => {
    stopPlayback();
    stepIndex = Math.max(0, stepIndex - 1);
    renderCurrent();
  });

  container.querySelector("#trainerNext").addEventListener("click", () => {
    stopPlayback();
    const list = steps();
    stepIndex = Math.min(list.length - 1, stepIndex + 1);
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
        audioStatus.textContent = "Démonstration terminée. À toi de jouer sur ton vrai piano.";
        renderCurrent();
      }
    };

    try {
      if (exercise.mode === "chord-sequence") {
        await playChordSequence((exercise.groups || []).map(group => group.map(item => item.note)), exercise.tempo, options);
      } else if (exercise.mode === "chord") {
        const notes = (exercise.notes || []).map(item => item.note);
        demoStep(notes, 0);
        await playChord(notes);
        options.onDone();
      } else {
        await playSequence((exercise.notes || []).map(item => item.note), exercise.tempo, options);
      }
    } catch (_) {
      playAllButton.disabled = false;
      audioStatus.textContent = "La démonstration audio a été interrompue.";
    }
  });

  container.querySelector("#trainerStop").addEventListener("click", () => {
    stopPlayback();
    keyboard.clearPlaying();
    playAllButton.disabled = false;
    audioStatus.textContent = "Démonstration arrêtée.";
    renderCurrent();
  });

  container.querySelector("#trainerMidi").addEventListener("click", async () => {
    if (midiConnection?.disconnect) midiConnection.disconnect();
    midiStatus.textContent = "Recherche du piano MIDI…";

    midiConnection = await connectMidi((playedNote, velocity, deviceName) => {
      const target = currentStep();
      keyboard.animate([playedNote], 280);

      if (target.includes(playedNote)) {
        midiStatus.textContent = `✅ ${noteLabelFr(playedNote)} correct — ${deviceName}`;
        if (target.length === 1 && stepIndex < steps().length - 1) {
          setTimeout(() => {
            stepIndex += 1;
            renderCurrent();
          }, 350);
        }
      } else {
        midiStatus.textContent = `❌ Tu as joué ${noteLabelFr(playedNote)}. Attendu : ${target.map(noteLabelFr).join(" + ")}.`;
      }
    });

    midiStatus.textContent = midiConnection.message;
  });

  loadWeek(0);

  return {
    setWeek(index) {
      loadWeek(index);
    },
    destroy() {
      stopPlayback();
      if (midiConnection?.disconnect) midiConnection.disconnect();
      container.innerHTML = "";
    }
  };
}
