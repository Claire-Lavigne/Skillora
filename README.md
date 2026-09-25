# Parcours d'apprentissage

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
