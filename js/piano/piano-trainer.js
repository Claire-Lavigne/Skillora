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
import { getPianoTrainingWeek } from "./exercises/piano-exercises.js";

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

function activityLabel(activity, index) {
  if (activity.kind === "discovery") return "Découverte";
  if (activity.kind === "melody") return "Mélodie finale";
  return `Exercice ${index}`;
}

export function mountPianoTrainer(container) {
  container.innerHTML = `
    <section class="piano-trainer">
      <div class="trainer-head">
        <div>
          <span class="trainer-eyebrow">Parcours pratique de la semaine</span>
          <h2 id="trainerWeekTitle">Semaine</h2>
          <p>Découverte → petits exercices → mélodie finale</p>
        </div>
      </div>

      <div id="trainerActivities" class="trainer-activities" aria-label="Activités de la semaine"></div>

      <div class="trainer-activity-head">
        <div>
          <span class="trainer-activity-type" id="trainerActivityType"></span>
          <h3 id="trainerTitle">Exercice</h3>
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
          <span>Clé de sol = main droite · clé de fa = main gauche.</span>
        </div>
        <div id="trainerScore" class="trainer-score" aria-label="Partition de l’exercice"></div>
      </div>

      <div class="trainer-keyboard-panel">
        <div class="trainer-section-title">
          <strong>2. Repère les touches sur ton vrai piano</strong>
          <span>Seules les notes de l’étape sélectionnée sont colorées.</span>
        </div>
        <div id="trainerKeyboard"></div>
      </div>

      <div class="trainer-demo-panel">
        <div class="trainer-section-title">
          <strong>3. Regarde et écoute la démonstration</strong>
          <span id="trainerAudioStatus">Le premier lancement charge les sons du piano.</span>
        </div>
        <div class="trainer-demo-actions">
          <button type="button" id="trainerListen">♪ Écouter</button>
          <button type="button" id="trainerPlayAll">▶ Démonstration animée</button>
          <button type="button" id="trainerStop">■ Arrêter</button>
        </div>
      </div>

      <div class="trainer-sequence-panel">
        <div class="trainer-section-title">
          <strong>4. Suis la séquence — note et doigt</strong>
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
          <span id="trainerMidiStatus" class="trainer-midi-status">Tu peux faire l’exercice sans connexion MIDI.</span>
        </div>
      </div>

      <p class="trainer-audio-credit">
        Son : ${pianoSoundCredits.instrument}, échantillons d’${pianoSoundCredits.author} (${pianoSoundCredits.license}).
      </p>
    </section>
  `;

  const weekTitle = container.querySelector("#trainerWeekTitle");
  const activitiesNav = container.querySelector("#trainerActivities");
  const activityType = container.querySelector("#trainerActivityType");
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

  const keyboard = createPianoKeyboard(container.querySelector("#trainerKeyboard"), {
    startOctave: 2,
    endOctave: 5
  });

  let weekPlan = getPianoTrainingWeek(0);
  let activityIndex = 0;
  let activity = weekPlan.activities[0];
  let stepIndex = 0;
  let midiConnection = null;

  function steps() {
    return targetSteps(activity);
  }

  function currentStep() {
    const list = steps();
    return list[Math.max(0, Math.min(stepIndex, list.length - 1))] || [];
  }

  function stepEntries(index = stepIndex) {
    if (activity.mode === "two-hand") {
      const result = [];
      if (activity.rightHand?.[index]) result.push({ ...activity.rightHand[index], handCode: "MD" });
      if (activity.leftHand?.[index]) result.push({ ...activity.leftHand[index], handCode: "MG" });
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
    return [{ ...item, handCode: /gauche/i.test(activity.hand || "") ? "MG" : "MD" }];
  }

  function fingersLabel(entries) {
    if (!entries.length) return "";

    const right = entries.filter(item => item.handCode === "MD" && item.finger);
    const left = entries.filter(item => item.handCode === "MG" && item.finger);

    const parts = [];
    if (right.length) {
      parts.push(`MD · ${right.length > 1 ? "doigts" : "doigt"} ${right.map(x => x.finger).join(" - ")}`);
    }
    if (left.length) {
      parts.push(`MG · ${left.length > 1 ? "doigts" : "doigt"} ${left.map(x => x.finger).join(" - ")}`);
    }

    return parts.join(" · ");
  }

  function renderActivities() {
    activitiesNav.innerHTML = "";
    weekPlan.activities.forEach((entry, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "trainer-activity-tab";
      button.classList.toggle("is-current", index === activityIndex);
      button.textContent = activityLabel(entry, index);
      button.addEventListener("click", () => {
        stopPlayback();
        activityIndex = index;
        activity = weekPlan.activities[index];
        stepIndex = 0;
        loadActivity();
      });
      activitiesNav.appendChild(button);
    });
  }

  function renderSequence() {
    sequence.innerHTML = "";
    const list = steps();

    list.forEach((notes, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "trainer-sequence__item";
      item.classList.toggle("is-current", index === stepIndex);

      const fingerLabel = fingersLabel(stepEntries(index));

      item.innerHTML = `
        <span class="trainer-sequence__step">Étape ${index + 1}</span>
        <strong>${notes.map(noteLabelFr).join(" + ")}</strong>
        <em class="trainer-sequence__finger">${fingerLabel}</em>
      `;

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
    finger.textContent = fingersLabel(stepEntries()) || (target.length > 1 ? "Joue les notes ensemble" : "");
    keyboard.highlight(target, target);
    renderSequence();
  }

  function demoStep(notes, index) {
    stepIndex = Math.min(index, steps().length - 1);
    keyboard.highlight(notes, notes);
    keyboard.animate(notes, 460);
    current.textContent = prettyTarget(notes);
    finger.textContent = fingersLabel(stepEntries());
    renderSequence();
  }

  async function loadActivity() {
    stopPlayback();
    keyboard.clearPlaying();

    activity = weekPlan.activities[activityIndex];
    stepIndex = 0;

    activityType.textContent = activityLabel(activity, activityIndex);
    title.textContent = activity.title;
    objective.textContent = activity.objective;
    hand.textContent = activity.hand;
    tempo.textContent = `${activity.tempo || 60} BPM`;

    renderActivities();
    await renderScore(score, activity);
    renderCurrent();
  }

  async function loadWeek(index) {
    stopPlayback();
    keyboard.clearPlaying();

    weekPlan = getPianoTrainingWeek(index);
    activityIndex = 0;
    activity = weekPlan.activities[0];
    stepIndex = 0;

    weekTitle.textContent = weekPlan.title;
    await loadActivity();
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
        audioStatus.textContent = "Démonstration terminée. À toi de jouer sur ton vrai piano.";
        renderCurrent();
      }
    };

    try {
      if (activity.mode === "chord-sequence") {
        await playChordSequence((activity.groups || []).map(group => group.map(item => item.note)), activity.tempo, options);
      } else if (activity.mode === "chord") {
        const notes = (activity.notes || []).map(item => item.note);
        demoStep(notes, 0);
        await playChord(notes);
        options.onDone();
      } else if (activity.mode === "two-hand") {
        await playChordSequence(steps(), activity.tempo, options);
      } else {
        await playSequence((activity.notes || []).map(item => item.note), activity.tempo, options);
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
