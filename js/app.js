import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import { firebaseConfig } from "./firebase-config.js";
import { courses, getCourseById } from "./courses.js";
import { mountPianoStageTrainer } from "./piano/piano-trainer.js";

const firebaseConfigured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("REMPLACE_")
);

let firebaseUser = null;
let auth = null;
let db = null;
let currentCourse = null;
let currentLevel = 0;
let pianoStageTrainers = [];

if (firebaseConfigured) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

const pages = document.getElementById("pages");
const map = document.getElementById("levelMap");
const courseGrid = document.getElementById("courseGrid");

function safeLink(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener">$1</a>'
  );
}

function isCommand(text) {
  return /^(Dans PowerShell, tape :|Tape :|Dans le terminal, tape :|Ou, dans PowerShell, tape :)/i.test(text);
}

function extractCommand(text) {
  const index = text.indexOf(":");
  return index >= 0 ? text.slice(index + 1).trim() : text;
}

function shortWeekTitle(title) {
  const match = /^\s*(Semaine\s+\d+)/i.exec(title || "");
  return match ? match[1] : title;
}

function makeStep(text, key, stepNumber) {
  const label = document.createElement("label");
  label.className = "step";
  label.innerHTML = `
    <input type="checkbox" id="${key}">
    <span class="step-number">Étape ${stepNumber}</span>
    <span class="step-text">${safeLink(text)}</span>
  `;

  if (isCommand(text)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = "Copier la commande";

    button.addEventListener("click", event => {
      event.preventDefault();
      navigator.clipboard.writeText(extractCommand(text));
      button.textContent = "Copié";
      setTimeout(() => (button.textContent = "Copier la commande"), 1000);
    });

    label.querySelector(".step-text").appendChild(document.createElement("br"));
    label.querySelector(".step-text").appendChild(button);
  }

  return label;
}

function clearCourseUI() {
  pages.innerHTML = "";
  map.innerHTML = "";
}


function mountCourseTools(course) {
  const slot = document.getElementById("courseWidgetSlot");

  pianoStageTrainers.forEach(trainer => trainer?.destroy?.());
  pianoStageTrainers = [];

  slot.innerHTML = "";
  slot.classList.add("hidden");
}



function isReferenceOnlyPianoStage(stage) {
  return Boolean(
    stage?.song?.scoreImage &&
    stage?.song?.interactiveStatus === "preparation-technique"
  );
}

function pianoProgressId(stage, weekIndex, stageIndex) {
  return stage?.id ? `p-${stage.id}` : `pw${weekIndex}a${stageIndex}`;
}

function previousPianoProgressId(stage, fallbackWeekIndex, fallbackStageIndex) {
  const match = /^w(\d+)-a(\d+)$/i.exec(stage?.id || "");
  if (!match) return `pw${fallbackWeekIndex}a${fallbackStageIndex}`;
  return `pw${Number(match[1]) - 1}a${Number(match[2]) - 1}`;
}

function songSectionNames(title = "") {
  const key = title.toLowerCase();
  const vocal = [
    "mon secours est en toi", "ta présence", "dieu est une fête", "nous croyons",
    "tu es bon", "je chante", "venez le célébrer", "je chanterai", "yahweh",
    "oh ! viens et vois", "blessed be your name", "broken vessels", "quand j’ai vu tes mains"
  ].some(name => key.includes(name));

  if (key.includes("mon secours est en toi")) return ["Intro", "Couplet 1", "Refrain", "Couplets 2–3", "Final"];
  if (key.includes("ta présence")) return ["Couplet 1", "Refrain", "Couplet 2", "Refrain final"];
  if (key.includes("nous croyons")) return ["Couplet", "Refrain", "Partie 2", "Final"];
  if (key.includes("yahweh")) return ["Introduction", "Partie 1", "Montée", "Partie 2", "Final"];
  if (key.includes("oh ! viens et vois")) return ["Introduction", "Partie 1", "Refrain", "Partie 2", "Final"];
  if (vocal) return ["Introduction", "Couplet", "Refrain", "Partie 2", "Final"];
  return ["Introduction", "Partie A", "Partie B", "Reprise", "Final"];
}

function splitPracticeIntoParts(stage, targetSongTitle = "") {
  const activity = stage?.practice;
  const measures = activity?.timeline?.measures || [];
  if (!measures.length) return [];

  const desiredNames = songSectionNames(targetSongTitle || stage.title || "");
  const partCount = Math.min(desiredNames.length, Math.max(1, Math.ceil(measures.length / 2)));
  const names = desiredNames.slice(0, partCount);
  const baseSize = Math.floor(measures.length / partCount);
  const remainder = measures.length % partCount;
  let cursor = 0;

  return names.map((name, index) => {
    const size = baseSize + (index < remainder ? 1 : 0);
    const slice = measures.slice(cursor, cursor + size);
    const first = cursor + 1;
    const last = cursor + size;
    cursor += size;

    return {
      label:name,
      activity:{
        ...activity,
        title:`${targetSongTitle || activity.title || "Morceau"} · ${name}`,
        sourceMeasures:`mesures ${first}–${last}`,
        timeline:{ ...activity.timeline, measures:slice }
      }
    };
  });
}

function stageSummaryTitle(stage) {
  if (stage.label === "Leçon") return stage.title.replace(/^Comprendre\s*[—-]\s*/i, "");
  if (stage.label === "Dextérité") return stage.title.replace(/^Dextérité\s*(et\s*doigtés)?/i, "").replace(/^\s*[—-]?\s*/, "") || "Technique des doigts";
  if (stage.label === "Exercice préparatoire") return "Préparation technique";
  if (stage.label === "Préparation de la partition") return stage.title.replace(/^Préparer\s*/i, "");
  if (stage.label === "Morceau") return stage.song?.title || stage.title;
  return stage.title;
}

function makePianoStage(stage, weekIndex, stageIndex, weekMeta = null, songStage = null) {
  const card = document.createElement("details");
  card.className = "piano-learning-stage piano-learning-stage--accordion";
  card.dataset.pianoStage = stageIndex;
  card.open = stageIndex === 0;

  const progressId = pianoProgressId(stage, weekIndex, stageIndex);
  const allBonusPieces = (stage.song?.bonusPieces || []).filter(piece => piece?.scoreImage);
  const continuationPages = allBonusPieces.filter(piece => /page\s*\d+/i.test(`${piece.title || ""} ${piece.scoreImageAlt || ""}`));
  const extraBonusPieces = allBonusPieces.filter(piece => !continuationPages.includes(piece));
  const scorePages = stage.song?.scoreImage
    ? [{
        title: stage.song.scoreImageAlt || stage.song.title || stage.title || "Partition",
        scoreImage: stage.song.scoreImage,
        scoreImageAlt: stage.song.scoreImageAlt || `Partition de ${stage.song.title || stage.title}`
      }, ...continuationPages]
    : [];

  const targetSongTitle = songStage?.song?.title || stage.song?.title || "";
  const practiceParts = stage.label === "Préparation de la partition"
    ? splitPracticeIntoParts(stage, targetSongTitle)
    : [];
  const isLesson = stage.label === "Leçon";

  card.innerHTML = `
    <summary class="piano-stage-summary">
      <span class="piano-stage-summary__text">
        <span class="piano-learning-stage__label">${stage.label}</span>
        <strong>${stageSummaryTitle(stage)}</strong>
      </span>
      <span class="piano-stage-summary__chevron" aria-hidden="true">⌄</span>
    </summary>

    <div class="piano-stage-body">
      <label class="piano-stage-complete piano-stage-complete--compact">
        <input type="checkbox" id="${progressId}">
        <span>Étape terminée</span>
      </label>

      ${isLesson ? `
        <div class="piano-lesson-note">
          <strong>À retenir</strong>
          <p>${stage.objective || ""}</p>
          ${(stage.instructions || []).length ? `<ul>${stage.instructions.map(item => `<li>${safeLink(item)}</li>`).join("")}</ul>` : ""}
        </div>
      ` : ""}

      ${stage.song ? `
        <div class="piano-song-goal piano-song-goal--compact">
          <strong>${stage.song.title || stage.title || "Morceau"}</strong>
          ${scorePages.length ? `
            <div class="piano-full-score-block">
              ${scorePages.map((page, pageIndex) => `
                <figure class="piano-reference-score ${scorePages.length > 1 ? 'piano-reference-score--page' : 'piano-reference-score--single'}">
                  <figcaption>${scorePages.length > 1 ? `Page ${pageIndex + 1}` : 'Partition complète'}</figcaption>
                  <img src="${page.scoreImage}" alt="${page.scoreImageAlt || page.title}" loading="lazy">
                </figure>
              `).join("")}
            </div>
          ` : ""}
          ${extraBonusPieces.length ? `
            <details class="piano-bonus-scores">
              <summary>Partitions bonus</summary>
              ${extraBonusPieces.map(piece => `
                <figure class="piano-reference-score piano-reference-score--bonus">
                  <figcaption>${piece.title}</figcaption>
                  <img src="${piece.scoreImage}" alt="${piece.scoreImageAlt || piece.title}" loading="lazy">
                </figure>
              `).join("")}
            </details>
          ` : ""}
        </div>
      ` : ""}

      ${practiceParts.length ? `
        <div class="piano-practice-parts">
          ${practiceParts.map((part, index) => `
            <details class="piano-practice-part" ${index === 0 ? 'open' : ''}>
              <summary>${part.label}</summary>
              <div class="piano-practice-part-slot" data-part-index="${index}"></div>
            </details>
          `).join("")}
        </div>
      ` : (
        isReferenceOnlyPianoStage(stage)
          ? `<div class="piano-reference-only-note">Travaille la partition complète affichée ci-dessus.</div>`
          : `<div class="piano-stage-trainer-slot"></div>`
      )}
    </div>
  `;

  card.__practiceParts = practiceParts;
  return card;
}

function mountPianoWeekTools(weekIndex) {
  pianoStageTrainers.forEach(trainer => trainer?.destroy?.());
  pianoStageTrainers = [];

  if (currentCourse?.id !== "piano") return;

  const week = currentCourse.weeks[weekIndex];
  const stages = week?.[1] || [];
  const page = document.querySelector(`.week-page[data-week="${weekIndex}"]`);
  if (!page) return;

  const cards = [...page.querySelectorAll(".piano-learning-stage")];

  function mountOnce(slot, pseudoStage) {
    if (!slot || slot.dataset.trainerMounted === "true" || !pseudoStage?.practice) return;
    slot.dataset.trainerMounted = "true";
    pianoStageTrainers.push(mountPianoStageTrainer(slot, pseudoStage));
  }

  cards.forEach((card, stageIndex) => {
    const stage = stages[stageIndex];
    const partDetails = [...card.querySelectorAll(".piano-practice-part")];

    if (partDetails.length && Array.isArray(card.__practiceParts)) {
      const ensureParts = () => {
        if (!card.open) return;
        partDetails.forEach((details, partIndex) => {
          if (!details.open) return;
          const slot = details.querySelector(".piano-practice-part-slot");
          const part = card.__practiceParts[partIndex];
          if (!part?.activity) return;
          mountOnce(slot, { ...stage, title:part.label, practice:part.activity, song:null });
        });
      };

      card.addEventListener("toggle", ensureParts);
      partDetails.forEach(details => details.addEventListener("toggle", ensureParts));
      ensureParts();
      return;
    }

    const slot = card.querySelector(".piano-stage-trainer-slot");
    const ensureStage = () => {
      if (!card.open || isReferenceOnlyPianoStage(stage)) return;
      mountOnce(slot, stage);
    };
    card.addEventListener("toggle", ensureStage);
    ensureStage();
  });
}

function buildCourse(course) {
  clearCourseUI();
  mountCourseTools(course);

  document.getElementById("courseTitle").textContent = course.title;
  document.getElementById("courseIntro").textContent = course.intro || "";

  course.weeks.forEach((week, weekIndex) => {
    const page = document.createElement("section");
    page.className = "week-page";
    page.dataset.week = weekIndex;

    const head = document.createElement("div");
    head.className = "week-head";

    const title = document.createElement("h2");
    title.textContent = shortWeekTitle(week[0]);
    head.appendChild(title);

    if (course.id === "piano" && Array.isArray(week?.[2]?.lessonObjectives) && week[2].lessonObjectives.length) {
      const objectiveList = document.createElement("div");
      objectiveList.className = "piano-week-goals";
      objectiveList.innerHTML = `
        <strong>Objectifs de la semaine</strong>
        <ul>${week[2].lessonObjectives.map(item => `<li>${item}</li>`).join("")}</ul>
      `;
      head.appendChild(objectiveList);
    }

    const checkAllButton = document.createElement("button");
    checkAllButton.type = "button";
    checkAllButton.className = "check-all";
    checkAllButton.textContent = "Tout cocher";

    checkAllButton.addEventListener("click", async () => {
      const boxes = [...page.querySelectorAll('input[type="checkbox"]')];
      boxes.forEach(checkbox => {
        checkbox.checked = true;
        checkbox.closest(".step")?.classList.add("done");
        checkbox.closest(".piano-learning-stage")?.classList.add("done");
      });
      await saveProgress();
      updateCourseUI();
    });

    head.appendChild(checkAllButton);
    page.appendChild(head);

    let counter = 0;
    let visibleStep = 1;
    const content = week[1];

    if (course.id === "piano") {
      const songStage = content.find(item => item?.song?.title) || null;
      content.forEach((stage, stageIndex) => {
        page.appendChild(
          makePianoStage(stage, weekIndex, stageIndex, week[2] || null, songStage)
        );
      });
    } else if (content.length && typeof content[0] === "object" && content[0].group) {
      content.forEach(group => {
        const card = document.createElement("div");
        card.className = "group-card";

        const heading = document.createElement("h3");
        heading.textContent = group.group;
        card.appendChild(heading);

        group.steps.forEach(step => {
          card.appendChild(
            makeStep(step, `w${weekIndex}s${counter++}`, visibleStep++)
          );
        });

        page.appendChild(card);
      });
    } else {
      content.forEach(step => {
        page.appendChild(
          makeStep(step, `w${weekIndex}s${counter++}`, visibleStep++)
        );
      });
    }

    const complete = document.createElement("div");
    complete.className = "complete";
    complete.textContent = "Niveau terminé. Tu peux passer au niveau suivant.";
    page.appendChild(complete);

    const nav = document.createElement("div");
    nav.className = "nav";
    nav.innerHTML = `
      <button class="prev">← Niveau précédent</button>
      <button class="next">Niveau suivant →</button>
    `;
    page.appendChild(nav);
    pages.appendChild(page);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.textContent = weekIndex + 1;
    dot.title = shortWeekTitle(week[0]);
    dot.addEventListener("click", () => showLevel(weekIndex));
    map.appendChild(dot);
  });
}

async function loadProgress() {
  if (!firebaseUser || !currentCourse) return;

  const ref = doc(
    db,
    "users",
    firebaseUser.uid,
    "courses",
    currentCourse.id
  );

  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : {};
  const checks = data.checks || {};

  if (currentCourse.id === "piano") {
    // Progression stable après réorganisation des semaines : les IDs suivent maintenant
    // l'exercice lui-même (stage.id) et non sa position dans le parcours.
    currentCourse.weeks.forEach((week, weekIndex) => {
      week[1].forEach((stage, stageIndex) => {
        const stableId = pianoProgressId(stage, weekIndex, stageIndex);
        if (Object.prototype.hasOwnProperty.call(checks, stableId)) return;

        const previousId = previousPianoProgressId(stage, weekIndex, stageIndex);
        if (checks[previousId] === true) checks[stableId] = true;
      });

      const legacyKeys = Object.keys(checks).filter(key =>
        new RegExp(`^w${weekIndex}s\\d+$`).test(key)
      );
      if (legacyKeys.length && legacyKeys.every(key => checks[key] === true)) {
        week[1].forEach((stage, stageIndex) => {
          const stableId = pianoProgressId(stage, weekIndex, stageIndex);
          if (!Object.prototype.hasOwnProperty.call(checks, stableId)) checks[stableId] = true;
        });
      }
    });
  }

  document.querySelectorAll('#courseView input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = !!checks[checkbox.id];
    checkbox.closest(".step")?.classList.toggle("done", checkbox.checked);
    checkbox.closest(".piano-learning-stage")?.classList.toggle("done", checkbox.checked);
  });

  let savedLevel = Number.isInteger(data.currentLevel)
    ? data.currentLevel
    : 0;

  if (currentCourse.id === "piano" && data.planVersion !== 2) {
    const oldPrefix = `w${String(savedLevel + 1).padStart(2, "0")}-`;
    const migratedIndex = currentCourse.weeks.findIndex(week =>
      week?.[1]?.some(stage => String(stage?.id || "").startsWith(oldPrefix))
    );
    if (migratedIndex >= 0) savedLevel = migratedIndex;
  }

  currentLevel =
    savedLevel >= 0 && savedLevel < currentCourse.weeks.length
      ? savedLevel
      : 0;
}

async function saveProgress() {
  if (!firebaseUser || !currentCourse) return;

  const checks = {};

  document.querySelectorAll('#courseView input[type="checkbox"]').forEach(checkbox => {
    checks[checkbox.id] = checkbox.checked;
  });

  const ref = doc(
    db,
    "users",
    firebaseUser.uid,
    "courses",
    currentCourse.id
  );

  const progressPayload = {
    checks,
    currentLevel,
    updatedAt: serverTimestamp()
  };
  if (currentCourse.id === "piano") progressPayload.planVersion = 2;

  await setDoc(
    ref,
    progressPayload,
    { merge: true }
  );

  await updateHomeProgressForCourse(currentCourse.id);
}

function levelFinished(index) {
  const boxes = [
    ...document.querySelectorAll(
      `.week-page[data-week="${index}"] input[type="checkbox"]`
    )
  ];

  return boxes.length > 0 && boxes.every(box => box.checked);
}

function calculateCurrentPercent() {
  const all = [...document.querySelectorAll('#courseView input[type="checkbox"]')];
  const checked = all.filter(item => item.checked).length;
  return all.length ? Math.round((checked / all.length) * 100) : 0;
}

function updateCourseUI() {
  if (!currentCourse) return;

  const percent = calculateCurrentPercent();

  document.getElementById("bar").style.width = `${percent}%`;
  document.getElementById("levelLabel").textContent =
    `Semaine ${currentLevel + 1} / ${currentCourse.weeks.length}`;

  const currentBoxes = [
    ...document.querySelectorAll(
      `.week-page[data-week="${currentLevel}"] input[type="checkbox"]`
    )
  ];

  document.getElementById("stepCount").textContent =
    `${currentBoxes.filter(item => item.checked).length} / ${currentBoxes.length} étapes`;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("current", index === currentLevel);
    dot.classList.toggle("finished", levelFinished(index));
  });

  document.querySelectorAll(".week-page").forEach((page, index) => {
    page.querySelector(".complete").classList.toggle("show", levelFinished(index));
    page.querySelector(".prev").disabled = index === 0;
    page.querySelector(".next").disabled =
      index === currentCourse.weeks.length - 1;
  });
}

function showLevel(index) {
  if (!currentCourse) return;

  currentLevel = Math.max(
    0,
    Math.min(currentCourse.weeks.length - 1, index)
  );

  document.querySelectorAll(".week-page").forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === currentLevel);
  });

  updateCourseUI();

  if (currentCourse?.id === "piano") {
    mountPianoWeekTools(currentLevel);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (firebaseUser) {
    saveProgress();
  }
}

async function getCourseProgressPercent(course) {
  if (!firebaseUser || course.status !== "available" || !course.weeks.length) {
    return 0;
  }

  const ref = doc(db, "users", firebaseUser.uid, "courses", course.id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return 0;

  const checks = snap.data().checks || {};
  const expectedIds = expectedCourseStepIds(course);
  const checkedSteps = expectedIds.filter(id => checks[id] === true).length;

  return expectedIds.length
    ? Math.round((checkedSteps / expectedIds.length) * 100)
    : 0;
}

function expectedCourseStepIds(course) {
  const ids = [];

  course.weeks.forEach((week, weekIndex) => {
    const content = week[1];

    if (course.id === "piano") {
      content.forEach((stage, stageIndex) => {
        ids.push(pianoProgressId(stage, weekIndex, stageIndex));
      });
      return;
    }

    let counter = 0;

    if (content.length && typeof content[0] === "object" && content[0].group) {
      content.forEach(group => {
        group.steps.forEach(() => {
          ids.push(`w${weekIndex}s${counter++}`);
        });
      });
    } else {
      content.forEach(() => {
        ids.push(`w${weekIndex}s${counter++}`);
      });
    }
  });

  return ids;
}

function countCourseSteps(course) {
  return expectedCourseStepIds(course).length;
}

async function updateHomeProgressForCourse(courseId) {
  const course = getCourseById(courseId);
  const element = document.querySelector(
    `[data-course-progress="${courseId}"]`
  );

  if (!course || !element) return;

  const percent = await getCourseProgressPercent(course);
  element.textContent = `${percent} % terminé`;
}

async function renderHomeCourses() {
  courseGrid.innerHTML = "";

  for (const course of courses) {
    const card = document.createElement("article");
    card.className = "course-card";

    const available = course.status === "available";

    card.innerHTML = `
      <span class="tag">${available ? "Disponible" : "À venir"}</span>
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      ${
        available
          ? `<div class="small" data-course-progress="${course.id}">0 % terminé</div>
             <button data-open-course="${course.id}">Ouvrir le cours</button>`
          : `<button class="disabled" disabled>Pas encore disponible</button>`
      }
    `;

    courseGrid.appendChild(card);

    if (available) {
      await updateHomeProgressForCourse(course.id);
    }
  }
}

async function openCourse(courseId) {
  const course = getCourseById(courseId);
  if (!course || course.status !== "available") return;

  currentCourse = course;
  currentLevel = 0;

  buildCourse(course);
  await loadProgress();

  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("courseView").classList.remove("hidden");

  showLevel(currentLevel);
}

async function showHome() {
  document.getElementById("courseView").classList.add("hidden");
  document.getElementById("homeView").classList.remove("hidden");
  await renderHomeCourses();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSignedOut() {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("courseView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.add("hidden");
  document.getElementById("authView").classList.remove("hidden");
}

async function showSignedIn(user) {
  firebaseUser = user;

  document.getElementById("authView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.add("hidden");

  document.getElementById("homeUser").textContent =
    `Connecté : ${user.email}`;

  document.getElementById("courseUser").textContent =
    `Connecté : ${user.email}`;

  await showHome();
}

function authMessage(message) {
  document.getElementById("authError").textContent = message;
}

function friendlyAuthError(error) {
  const code = error?.code || "";

  if (code.includes("email-already-in-use")) {
    return "Cette adresse e-mail possède déjà un compte.";
  }
  if (code.includes("invalid-email")) {
    return "L’adresse e-mail n’est pas valide.";
  }
  if (code.includes("weak-password")) {
    return "Le mot de passe doit contenir au moins 6 caractères.";
  }
  if (code.includes("invalid-credential")) {
    return "Adresse e-mail ou mot de passe incorrect.";
  }
  if (code.includes("too-many-requests")) {
    return "Trop de tentatives. Réessaie un peu plus tard.";
  }

  return "Une erreur est survenue. Vérifie tes informations et réessaie.";
}

async function logout() {
  await signOut(auth);
}

document.addEventListener("change", async event => {
  if (event.target.matches('#courseView input[type="checkbox"]')) {
    event.target.closest(".step")?.classList.toggle(
      "done",
      event.target.checked
    );

    event.target.closest(".piano-learning-stage")?.classList.toggle(
      "done",
      event.target.checked
    );

    await saveProgress();
    updateCourseUI();
  }
});

document.addEventListener("click", async event => {
  if (event.target.classList.contains("prev")) {
    showLevel(currentLevel - 1);
  }

  if (event.target.classList.contains("next")) {
    showLevel(currentLevel + 1);
  }

  const courseButton = event.target.closest("[data-open-course]");
  if (courseButton) {
    await openCourse(courseButton.dataset.openCourse);
  }
});

document.getElementById("backHome").onclick = showHome;

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("authUser").value.trim();
  const password = document.getElementById("authPass").value;
  authMessage("");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    authMessage(friendlyAuthError(error));
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("authUser").value.trim();
  const password = document.getElementById("authPass").value;
  authMessage("");

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    authMessage(friendlyAuthError(error));
  }
});

document.getElementById("logoutHome").onclick = logout;
document.getElementById("logoutCourse").onclick = logout;

if (!firebaseConfigured) {
  document.getElementById("authView").classList.add("hidden");
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("courseView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.remove("hidden");
} else {
  onAuthStateChanged(auth, async user => {
    if (user) {
      await showSignedIn(user);
    } else {
      firebaseUser = null;
      currentCourse = null;
      showSignedOut();
    }
  });
}
