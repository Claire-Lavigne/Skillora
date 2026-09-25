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
import { shopifyWeeks as weeks } from "./course-data.js";

const firebaseConfigured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("REMPLACE_")
);

let firebaseUser = null;
let auth = null;
let db = null;
let current = 0;

if (firebaseConfigured) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

const pages = document.getElementById("pages");
const map = document.getElementById("levelMap");

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

function makeStep(text, key) {
  const label = document.createElement("label");
  label.className = "step";
  label.innerHTML = `<input type="checkbox" id="${key}"><span>${safeLink(text)}</span>`;

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

    label.querySelector("span").appendChild(document.createElement("br"));
    label.querySelector("span").appendChild(button);
  }

  return label;
}

function buildCourse() {
  weeks.forEach((week, weekIndex) => {
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
      await saveChecks();
      updateUI();
    });

    head.appendChild(checkAllButton);
    page.appendChild(head);

    let counter = 0;
    const content = week[1];

    if (content.length && typeof content[0] === "object" && content[0].group) {
      content.forEach(group => {
        const card = document.createElement("div");
        card.className = "group-card";

        const heading = document.createElement("h3");
        heading.textContent = group.group;
        card.appendChild(heading);

        group.steps.forEach(step => {
          card.appendChild(makeStep(step, `w${weekIndex}s${counter++}`));
        });

        page.appendChild(card);
      });
    } else {
      content.forEach(step => {
        page.appendChild(makeStep(step, `w${weekIndex}s${counter++}`));
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
    dot.addEventListener("click", () => showWeek(weekIndex));
    map.appendChild(dot);
  });
}

async function loadChecks() {
  if (!firebaseUser) return;

  const ref = doc(db, "users", firebaseUser.uid, "courses", "shopify");
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : {};
  const checks = data.checks || {};

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = !!checks[checkbox.id];
    checkbox.closest(".step").classList.toggle("done", checkbox.checked);
  });

  const savedLevel = Number.isInteger(data.currentLevel) ? data.currentLevel : 0;
  if (savedLevel >= 0 && savedLevel < weeks.length) {
    current = savedLevel;
  }
}

async function saveChecks() {
  if (!firebaseUser) return;

  const checks = {};
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checks[checkbox.id] = checkbox.checked;
  });

  const ref = doc(db, "users", firebaseUser.uid, "courses", "shopify");

  await setDoc(
    ref,
    {
      checks,
      currentLevel: current,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );

  updateHomeProgress();
}

function weekFinished(index) {
  const boxes = [
    ...document.querySelectorAll(
      `.week-page[data-week="${index}"] input[type="checkbox"]`
    )
  ];

  return boxes.length > 0 && boxes.every(box => box.checked);
}

function updateHomeProgress() {
  const all = [...document.querySelectorAll('#shopifyView input[type="checkbox"]')];
  const checked = all.filter(item => item.checked).length;
  const percent = all.length ? Math.round((checked / all.length) * 100) : 0;

  document.getElementById("shopifyHomeProgress").textContent =
    `${percent} % terminé`;
}

function updateUI() {
  const all = [...document.querySelectorAll('#shopifyView input[type="checkbox"]')];
  const checked = all.filter(item => item.checked).length;
  const percent = all.length ? Math.round((checked / all.length) * 100) : 0;

  document.getElementById("bar").style.width = `${percent}%`;
  document.getElementById("levelLabel").textContent =
    `Niveau ${current + 1} / ${weeks.length}`;

  const currentBoxes = [
    ...document.querySelectorAll(
      `.week-page[data-week="${current}"] input[type="checkbox"]`
    )
  ];

  document.getElementById("stepCount").textContent =
    `${currentBoxes.filter(item => item.checked).length} / ${currentBoxes.length} étapes`;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("current", index === current);
    dot.classList.toggle("finished", weekFinished(index));
  });

  document.querySelectorAll(".week-page").forEach((page, index) => {
    page.querySelector(".complete").classList.toggle("show", weekFinished(index));
    page.querySelector(".prev").disabled = index === 0;
    page.querySelector(".next").disabled = index === weeks.length - 1;
  });

  updateHomeProgress();
}

function showWeek(index) {
  current = Math.max(0, Math.min(weeks.length - 1, index));

  document.querySelectorAll(".week-page").forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === current);
  });

  updateUI();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (firebaseUser) {
    saveChecks();
  }
}

function showHome() {
  document.getElementById("shopifyView").classList.add("hidden");
  document.getElementById("homeView").classList.remove("hidden");
  updateHomeProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showShopify() {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("shopifyView").classList.remove("hidden");
  showWeek(current);
}

function showSignedOut() {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("shopifyView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.add("hidden");
  document.getElementById("authView").classList.remove("hidden");
}

async function showSignedIn(user) {
  firebaseUser = user;

  document.getElementById("authView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.add("hidden");

  document.getElementById("homeUser").textContent = `Connecté : ${user.email}`;
  document.getElementById("courseUser").textContent = `Connecté : ${user.email}`;

  await loadChecks();
  showWeek(current);
  showHome();
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

buildCourse();

document.addEventListener("change", async event => {
  if (event.target.matches('#shopifyView input[type="checkbox"]')) {
    event.target.closest(".step").classList.toggle("done", event.target.checked);
    await saveChecks();
    updateUI();
  }
});

document.addEventListener("click", event => {
  if (event.target.classList.contains("prev")) {
    showWeek(current - 1);
  }
  if (event.target.classList.contains("next")) {
    showWeek(current + 1);
  }
});

document.getElementById("openShopifyCourse").onclick = showShopify;
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
  document.getElementById("shopifyView").classList.add("hidden");
  document.getElementById("firebaseSetupView").classList.remove("hidden");
} else {
  onAuthStateChanged(auth, async user => {
    if (user) {
      await showSignedIn(user);
    } else {
      firebaseUser = null;
      showSignedOut();
    }
  });
}
