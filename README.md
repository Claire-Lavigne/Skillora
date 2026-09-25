# Parcours d'apprentissage

Plateforme statique destinée à être publiée sur GitHub Pages.

## Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── course-data.js
│   └── firebase-config.js
├── firestore.rules
├── .gitignore
└── README.md
```

## 1. Créer un projet Firebase

1. Ouvre https://console.firebase.google.com/
2. Crée un projet.
3. Ajoute une application Web.
4. Copie l'objet `firebaseConfig`.

## 2. Configurer le site

Ouvre :

```text
js/firebase-config.js
```

Remplace les valeurs `REMPLACE_...` par les valeurs de ton projet Firebase.

## 3. Activer l'authentification

Dans Firebase :

1. Ouvre **Authentication**.
2. Ouvre les méthodes de connexion.
3. Active **E-mail / Mot de passe**.

## 4. Créer Firestore

1. Ouvre **Firestore Database**.
2. Crée une base.
3. Dans l'onglet **Règles**, copie le contenu de `firestore.rules`.
4. Publie les règles.

Chaque utilisateur peut ainsi uniquement lire et modifier sa propre progression.

## 5. Ajouter GitHub Pages aux domaines autorisés

Après création du site GitHub Pages :

1. Firebase → Authentication → Settings.
2. Ouvre **Authorized domains**.
3. Ajoute ton domaine, par exemple :

```text
tonpseudo.github.io
```

## 6. Publier sur GitHub Pages

Crée un dépôt GitHub puis ajoute tous les fichiers de ce dossier.

Exemple :

```bash
git init
git add .
git commit -m "Première version du site"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/TON-DEPOT.git
git push -u origin main
```

Ensuite :

1. GitHub → **Settings**
2. **Pages**
3. **Deploy from a branch**
4. Branche `main`
5. Dossier `/ (root)`

Le site sera disponible sur une adresse du type :

```text
https://TON-COMPTE.github.io/TON-DEPOT/
```

## Ajouter de futurs cours

Les cartes des futurs cours sont actuellement dans `index.html`.

Le cours Shopify est stocké dans :

```text
js/course-data.js
```

Pour ajouter plusieurs cours proprement plus tard, il sera préférable de créer un fichier de données par cours, par exemple :

```text
js/courses/shopify.js
js/courses/wordpress.js
js/courses/google-workspace.js
js/courses/office.js
js/courses/systemes.js
js/courses/piano.js
```

et de rendre `app.js` générique.

## Données utilisateur

La progression Shopify est enregistrée dans Firestore sous :

```text
users/{uid}/courses/shopify
```

Elle contient notamment :

- les cases cochées ;
- le niveau actuel ;
- la date de dernière mise à jour.

Les mots de passe sont gérés par Firebase Authentication et ne sont pas enregistrés dans Firestore.
