# Parcours d'apprentissage

Plateforme statique d'apprentissage publiée sur GitHub Pages, avec authentification Firebase et progression sauvegardée dans Cloud Firestore.

## Architecture

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── courses.js
│   ├── firebase-config.js
│   └── courses/
│       ├── shopify.js
│       ├── piano.js
│       ├── wordpress.js
│       ├── google-workspace.js
│       ├── office.js
│       └── systemes.js
├── firestore.rules
├── .gitignore
└── README.md
```

## Fonctionnement général

`index.html` contient uniquement la structure de l'interface.

`css/styles.css` contient tous les styles.

`js/app.js` est générique, il gère :

- l'authentification Firebase ;
- la page d'accueil ;
- l'ouverture d'un cours ;
- l'affichage des semaines ;
- les étapes ;
- la navigation entre semaines ;
- le bouton « Tout cocher » ;
- la progression ;
- la sauvegarde Firestore.

`js/courses.js` sert de registre central des cours.

Chaque cours est stocké dans son propre fichier dans `js/courses/`.

## Structure d'un cours

Exemple :

```js
export const exempleCourse = {
  id: "exemple",
  title: "Titre du cours",
  status: "available",
  description: "Description courte affichée sur l'accueil.",
  intro: "Introduction affichée à l'ouverture du cours.",
  weeks: [
    [
      "Semaine 1 — Titre",
      [
        "Première consigne.",
        "Deuxième consigne.",
        "Troisième consigne."
      ]
    ]
  ]
};
```

Valeurs possibles pour `status` :

```text
available
coming-soon
```

Un cours `available` est ouvrable et sa progression est sauvegardée.

Un cours `coming-soon` apparaît sur l'accueil mais ne peut pas encore être ouvert.

## Ajouter un nouveau cours

### 1. Créer son fichier

Par exemple :

```text
js/courses/wordpress.js
```

### 2. Exporter un objet cours

```js
export const wordpressCourse = {
  id: "wordpress",
  title: "WordPress — Développement",
  status: "available",
  description: "...",
  intro: "...",
  weeks: [
    // ...
  ]
};
```

L'`id` doit être unique et ne doit pas changer après publication si des utilisateurs ont déjà commencé le cours.

La progression Firestore utilise cet identifiant.

### 3. Ajouter le cours au registre

Dans :

```text
js/courses.js
```

Importer le cours :

```js
import { wordpressCourse } from "./courses/wordpress.js";
```

Puis l'ajouter à :

```js
export const courses = [
  shopifyCourse,
  pianoCourse,
  wordpressCourse
];
```

Aucune autre modification de `app.js` n'est nécessaire.

## Regrouper plusieurs étapes dans une semaine

Une semaine peut utiliser une simple liste :

```js
[
  "Semaine 1 — Exemple",
  [
    "Action 1",
    "Action 2"
  ]
]
```

Ou plusieurs groupes :

```js
[
  "Semaine 2 — Produits",
  [
    {
      group: "Produit 1",
      steps: [
        "Créer le produit.",
        "Ajouter le prix."
      ]
    },
    {
      group: "Produit 2",
      steps: [
        "Créer le produit.",
        "Ajouter le stock."
      ]
    }
  ]
]
```

L'interface numérote automatiquement toutes les consignes :

```text
Étape 1
Étape 2
Étape 3
...
```

La numérotation recommence à 1 à chaque semaine.

## Progression Firestore

Chaque cours possède sa propre progression.

Structure :

```text
users/{uid}/courses/{courseId}
```

Exemples :

```text
users/ABC123/courses/shopify
users/ABC123/courses/piano
```

Chaque document contient :

```js
{
  checks: {
    w0s0: true,
    w0s1: false
  },
  currentLevel: 0,
  updatedAt: ...
}
```

Cela permet à un même utilisateur d'avoir une progression indépendante pour chaque cours.

## Développement local

Comme le projet utilise des modules JavaScript ES, il est préférable de le servir avec un serveur local plutôt que d'ouvrir directement `index.html`.

Exemples :

### VS Code Live Server

Installer l'extension Live Server puis lancer le site.

### Python

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Publication GitHub Pages

```bash
git add .
git commit -m "Mise à jour des parcours"
git push
```

GitHub Pages republiera ensuite automatiquement le site si le dépôt est déjà configuré.

## Cours actuellement structurés

### Disponibles

- Shopify — Développement
- Piano

### Préparés mais non disponibles

- WordPress — Développement
- Google Workspace
- Pack Office
- Ingénieur Systèmes

Pour rendre un cours disponible, renseigner ses semaines et passer :

```js
status: "coming-soon"
```

à :

```js
status: "available"
```

## Conventions recommandées

- tout le contenu utilisateur doit rester en français ;
- une consigne doit correspondre à une action claire ;
- éviter les longues explications théoriques dans les étapes ;
- chaque semaine doit rester réalisable et progressive ;
- ne jamais renommer l'`id` d'un cours déjà utilisé en production ;
- ne pas mettre de secrets serveur dans le dépôt ;
- la configuration Web Firebase peut être publique, mais la sécurité doit reposer sur Authentication et les règles Firestore.


## Bibliothèque interactive Piano

Le cours Piano possède maintenant un outil d'entraînement destiné à être reproduit sur un **vrai piano**.

Fichiers :

```text
css/piano-trainer.css
js/piano/piano-trainer.js
js/piano/piano-keyboard.js
js/piano/score-renderer.js
js/piano/audio-player.js
js/piano/midi-input.js
js/piano/exercises/piano-exercises.js
```

Fonctions principales :

- affiche les notes de la semaine sur une portée avec VexFlow ;
- montre les touches correspondantes sur un clavier visuel ;
- indique le doigt à utiliser ;
- permet d'avancer note par note ;
- permet d'écouter une note, un accord ou tout l'exercice ;
- permet de connecter un piano numérique avec Web MIDI quand le navigateur le prend en charge ;
- vérifie automatiquement une note jouée via MIDI pour les exercices note par note.

Les exercices sont associés aux semaines dans :

```text
js/piano/exercises/piano-exercises.js
```

`app.js` monte automatiquement l'outil lorsque :

```js
course.id === "piano"
```

Lors d'un changement de semaine, `app.js` appelle :

```js
pianoTrainer.setWeek(currentLevel);
```

### Dépendance externe

La portée utilise VexFlow depuis jsDelivr :

```text
https://cdn.jsdelivr.net/npm/vexflow@5.0.0/+esm
```

Si VexFlow ne peut pas être chargé, un affichage texte des notes est utilisé automatiquement et l'exercice reste fonctionnel.

### Web MIDI

Web MIDI est optionnel. Le site fonctionne sans piano numérique connecté.
Pour utiliser la validation MIDI, ouvrir le site en HTTPS et utiliser un navigateur compatible.
