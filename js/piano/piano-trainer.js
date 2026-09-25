import { createPianoKeyboard, noteLabelFr } from "./piano-keyboard.js";
import { playNote, playChord, playSequence, playChordSequence } from "./audio-player.js";
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
          <span class="trainer-eyebrow">À reproduire sur ton vrai piano</span>
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
          <span class="trainer-focus__label">À jouer maintenant</span>
          <strong id="trainerCurrent">—</strong>
          <span id="trainerFinger"></span>
        </div>
        <div class="trainer-focus__actions">
          <button type="button" id="trainerListen">Écouter</button>
          <button type="button" id="trainerPrev">← Précédent</button>
          <button type="button" id="trainerNext">Note suivante →</button>
        </div>
      </div>

      <div class="trainer-score-panel">
        <div class="trainer-section-title">
          <strong>Portée</strong>
          <span>Lis la note ici, puis retrouve-la sur le vrai piano.</span>
        </div>
        <div id="trainerScore" class="trainer-score"></div>
      </div>

      <div class="trainer-keyboard-panel">
        <div class="trainer-section-title">
          <strong>Repère sur le clavier</strong>
          <span>Les touches colorées sont celles de l’exercice. La touche plus marquée est la prochaine à jouer.</span>
        </div>
        <div id="trainerKeyboard"></div>
      </div>

      <div class="trainer-sequence-panel">
        <div class="trainer-section-title">
          <strong>Séquence</strong>
          <span id="trainerSequenceStatus"></span>
        </div>
        <div id="trainerSequence" class="trainer-sequence"></div>
      </div>

      <div class="trainer-bottom-actions">
        <button type="button" id="trainerPlayAll">▶ Écouter tout l’exercice</button>
        <button type="button" id="trainerMidi">🎹 Connecter mon piano MIDI</button>
        <span id="trainerMidiStatus" class="trainer-midi-status">Optionnel : pour un piano numérique USB/MIDI.</span>
      </div>
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

  const keyboard = createPianoKeyboard(container.querySelector("#trainerKeyboard"), { startOctave: 3, endOctave: 5 });

  let weekIndex = 0;
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
        stepIndex = index;
        renderCurrent();
      });
      sequence.appendChild(item);
    });
    sequenceStatus.textContent = `${Math.min(stepIndex + 1, list.length)} / ${list.length}`;
  }

  function renderCurrent(message = "") {
    const target = currentStep();
    const allNotes = [...new Set(flattenExercise(exercise).map(item => item.note))];
    current.textContent = message || prettyTarget(target);

    const info = noteInfoForCurrent();
    finger.textContent = info?.finger ? `Doigt ${info.finger}` : target.length > 1 ? "Joue les notes ensemble" : "";
    keyboard.highlight(allNotes, target.length === 1 ? target[0] : null);
    renderSequence();
  }

  async function loadWeek(index) {
    weekIndex = index;
    exercise = getPianoExerciseByWeek(index);
    stepIndex = 0;

    title.textContent = exercise.title;
    objective.textContent = exercise.objective;
    hand.textContent = exercise.hand;
    tempo.textContent = `${exercise.tempo || 60} BPM`;

    await renderScore(score, exercise);
    renderCurrent();
  }

  container.querySelector("#trainerListen").addEventListener("click", () => {
    const target = currentStep();
    if (target.length > 1) playChord(target);
    else if (target[0]) playNote(target[0]);
  });

  container.querySelector("#trainerPrev").addEventListener("click", () => {
    stepIndex = Math.max(0, stepIndex - 1);
    renderCurrent();
  });

  container.querySelector("#trainerNext").addEventListener("click", () => {
    const list = steps();
    stepIndex = Math.min(list.length - 1, stepIndex + 1);
    renderCurrent();
  });

  container.querySelector("#trainerPlayAll").addEventListener("click", () => {
    if (exercise.mode === "chord-sequence") {
      playChordSequence((exercise.groups || []).map(group => group.map(item => item.note)), exercise.tempo);
    } else if (exercise.mode === "chord") {
      playChord((exercise.notes || []).map(item => item.note));
    } else {
      playSequence((exercise.notes || []).map(item => item.note), exercise.tempo);
    }
  });

  container.querySelector("#trainerMidi").addEventListener("click", async () => {
    if (midiConnection?.disconnect) midiConnection.disconnect();
    midiStatus.textContent = "Recherche du piano MIDI…";

    midiConnection = await connectMidi((playedNote, velocity, deviceName) => {
      const target = currentStep();
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
      if (midiConnection?.disconnect) midiConnection.disconnect();
      container.innerHTML = "";
    }
  };
}
