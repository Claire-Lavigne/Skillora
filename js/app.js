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
import { mountPianoTrainer } from "./piano/piano-trainer.js";

const firebaseConfigured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("REMPLACE_")
);

let firebaseUser = null;
let auth = null;
let db = null;
let currentCourse = null;
let currentLevel = 0;
let pianoTrainer = null;

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

  if (pianoTrainer) {
    pianoTrainer.destroy();
    pianoTrainer = null;
  }

  slot.innerHTML = "";
  slot.classList.add("hidden");

  if (course.id === "piano") {
    slot.classList.remove("hidden");
    pianoTrainer = mountPianoTrainer(slot);
  }
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
    title.textContent = week[0];
    head.appendChild(title);

    const checkAllButton = document.createElement("button");
    checkAllButton.type = "button";
    checkAllButton.className = "check-all";
    checkAllButton.textContent = "Tout cocher";

    checkAllButton.addEventListener("click", async () => {
      const boxes = [...page.querySelectorAll('input[type="checkbox"]')];
      boxes.forEach(checkbox => {
        checkbox.checked = true;
        checkbox.closest(".step").classList.add("done");
      });
      await saveProgress();
      updateCourseUI();
    });

    head.appendChild(checkAllButton);
    page.appendChild(head);

    let counter = 0;
    let visibleStep = 1;
    const content = week[1];

    if (content.length && typeof content[0] === "object" && content[0].group) {
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
    dot.title = week[0];
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

  document.querySelectorAll('#courseView input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = !!checks[checkbox.id];
    checkbox.closest(".step").classList.toggle("done", checkbox.checked);
  });

  const savedLevel = Number.isInteger(data.currentLevel)
    ? data.currentLevel
    : 0;

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

  await setDoc(
    ref,
    {
      checks,
      currentLevel,
      updatedAt: serverTimestamp()
    },
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

  if (currentCourse?.id === "piano" && pianoTrainer) {
    pianoTrainer.setWeek(currentLevel);
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
  const totalSteps = countCourseSteps(course);
  const checkedSteps = Object.values(checks).filter(Boolean).length;

  return totalSteps ? Math.round((checkedSteps / totalSteps) * 100) : 0;
}

function countCourseSteps(course) {
  let total = 0;

  course.weeks.forEach(week => {
    const content = week[1];

    if (content.length && typeof content[0] === "object" && content[0].group) {
      content.forEach(group => {
        total += group.steps.length;
      });
    } else {
      total += content.length;
    }
  });

  return total;
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
    event.target.closest(".step").classList.toggle(
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
