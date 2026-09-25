export const pianoExercises = [
  {
    id: "w01-do-central",
    title: "Repérer et jouer les Do",
    objective: "Retrouver visuellement les Do sur ton vrai piano.",
    hand: "Main droite puis main gauche",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C3", finger: 2, label: "Do" },
      { note: "C4", finger: 2, label: "Do central" },
      { note: "C5", finger: 2, label: "Do" }
    ]
  },
  {
    id: "w02-do-re-mi-fa-sol",
    title: "Position de 5 doigts",
    objective: "Poser les cinq doigts sur Do Ré Mi Fa Sol et les jouer dans l'ordre.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1, label: "Do" },
      { note: "D4", finger: 2, label: "Ré" },
      { note: "E4", finger: 3, label: "Mi" },
      { note: "F4", finger: 4, label: "Fa" },
      { note: "G4", finger: 5, label: "Sol" }
    ]
  },
  {
    id: "w03-monter-descendre",
    title: "Do Ré Mi Fa Sol puis retour",
    objective: "Jouer une suite régulière sans déplacer la main.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "F4", finger: 4 }, { note: "G4", finger: 5 }, { note: "F4", finger: 4 },
      { note: "E4", finger: 3 }, { note: "D4", finger: 2 }, { note: "C4", finger: 1 }
    ]
  },
  {
    id: "w04-pulsation",
    title: "4 temps réguliers",
    objective: "Jouer Do sur quatre pulsations régulières.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1, beat: 1 }, { note: "C4", finger: 1, beat: 2 },
      { note: "C4", finger: 1, beat: 3 }, { note: "C4", finger: 1, beat: 4 }
    ]
  },
  {
    id: "w05-petite-melodie",
    title: "Petite mélodie de 5 notes",
    objective: "Enchaîner une première phrase simple.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "D4", finger: 2 }, { note: "C4", finger: 1 }
    ]
  },
  {
    id: "w06-lecture-cinq-notes",
    title: "Lecture Do à Sol",
    objective: "Lire la note puis la retrouver sur le vrai clavier.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "D4", finger: 2 },
      { note: "G4", finger: 5 }, { note: "F4", finger: 4 }
    ]
  },
  {
    id: "w07-basses-do-sol",
    title: "Basse Do / Sol",
    objective: "Trouver deux notes graves avec la main gauche.",
    hand: "Main gauche",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C3", finger: 5 }, { note: "G3", finger: 1 }, { note: "C3", finger: 5 }, { note: "G3", finger: 1 }
    ]
  },
  {
    id: "w08-accord-do",
    title: "Accord de Do majeur",
    objective: "Jouer Do Mi Sol en même temps.",
    hand: "Main droite",
    tempo: 60,
    mode: "chord",
    notes: [
      { note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }
    ]
  },
  {
    id: "w09-fa-sol",
    title: "Accords Fa et Sol",
    objective: "Identifier et jouer deux accords majeurs.",
    hand: "Main droite",
    tempo: 60,
    mode: "chord-sequence",
    groups: [
      [{ note: "F4", finger: 1 }, { note: "A4", finger: 3 }, { note: "C5", finger: 5 }],
      [{ note: "G4", finger: 1 }, { note: "B4", finger: 3 }, { note: "D5", finger: 5 }]
    ]
  },
  {
    id: "w10-do-fa-sol-do",
    title: "Do → Fa → Sol → Do",
    objective: "Enchaîner les trois accords sans t'arrêter.",
    hand: "Main droite",
    tempo: 60,
    mode: "chord-sequence",
    groups: [
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }],
      [{ note: "F4", finger: 1 }, { note: "A4", finger: 3 }, { note: "C5", finger: 5 }],
      [{ note: "G4", finger: 1 }, { note: "B4", finger: 3 }, { note: "D5", finger: 5 }],
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }]
    ]
  },
  {
    id: "w11-melodie-accords",
    title: "Mélodie + accord de Do",
    objective: "Voir la mélodie et l'accord séparément avant de les assembler.",
    hand: "Deux mains",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "E4", finger: 3 }, { note: "F4", finger: 4 }, { note: "G4", finger: 5 }, { note: "E4", finger: 3 }
    ],
    leftHand: [{ note: "C3", finger: 5 }, { note: "G3", finger: 1 }]
  },
  {
    id: "w12-metronome",
    title: "Jouer au métronome",
    objective: "Faire tomber chaque note sur une pulsation.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "F4", finger: 4 }, { note: "G4", finger: 5 }
    ]
  },
  {
    id: "w13-gamme-do",
    title: "Gamme de Do majeur",
    objective: "Apprendre le passage du pouce dans la gamme.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "F4", finger: 1 }, { note: "G4", finger: 2 }, { note: "A4", finger: 3 },
      { note: "B4", finger: 4 }, { note: "C5", finger: 5 }
    ]
  },
  {
    id: "w14-gamme-deux-mains",
    title: "Gamme de Do — deux mains",
    objective: "Visualiser les notes communes avant de jouer les mains ensemble.",
    hand: "Deux mains",
    tempo: 55,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "F4", finger: 1 }, { note: "G4", finger: 2 }, { note: "A4", finger: 3 },
      { note: "B4", finger: 4 }, { note: "C5", finger: 5 }
    ]
  },
  {
    id: "w15-nuances",
    title: "Même phrase, différentes nuances",
    objective: "Jouer la même phrase doucement puis plus fort.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }, { note: "E4", finger: 3 }
    ]
  },
  {
    id: "w16-pedale",
    title: "Accords avec pédale",
    objective: "Changer la pédale entre deux harmonies.",
    hand: "Main droite + pied droit",
    tempo: 50,
    mode: "chord-sequence",
    groups: [
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }],
      [{ note: "F4", finger: 1 }, { note: "A4", finger: 3 }, { note: "C5", finger: 5 }]
    ]
  },
  {
    id: "w17-arpeges",
    title: "Arpège de Do majeur",
    objective: "Jouer les notes de l'accord séparément.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 },
      { note: "E4", finger: 3 }, { note: "C4", finger: 1 }
    ]
  },
  {
    id: "w18-progression-pop",
    title: "Do → La mineur → Fa → Sol",
    objective: "Mémoriser une progression de quatre accords.",
    hand: "Main droite",
    tempo: 60,
    mode: "chord-sequence",
    groups: [
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }],
      [{ note: "A3", finger: 1 }, { note: "C4", finger: 3 }, { note: "E4", finger: 5 }],
      [{ note: "F3", finger: 1 }, { note: "A3", finger: 3 }, { note: "C4", finger: 5 }],
      [{ note: "G3", finger: 1 }, { note: "B3", finger: 3 }, { note: "D4", finger: 5 }]
    ]
  },
  {
    id: "w19-independance",
    title: "Basse + notes régulières",
    objective: "Séparer le rythme de la main gauche et de la main droite.",
    hand: "Deux mains",
    tempo: 50,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }
    ],
    leftHand: [{ note: "C3", finger: 5 }]
  },
  {
    id: "w20-lecture-huit-notes",
    title: "Lecture continue",
    objective: "Lire une petite phrase sans regarder chaque touche.",
    hand: "Main droite",
    tempo: 55,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 },
      { note: "F4", finger: 4 }, { note: "E4", finger: 3 }, { note: "D4", finger: 2 }, { note: "C4", finger: 1 }
    ]
  },
  {
    id: "w21-renversements",
    title: "Renversements de Do majeur",
    objective: "Voir comment les mêmes trois notes changent de position.",
    hand: "Main droite",
    tempo: 55,
    mode: "chord-sequence",
    groups: [
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }],
      [{ note: "E4", finger: 1 }, { note: "G4", finger: 2 }, { note: "C5", finger: 5 }],
      [{ note: "G3", finger: 1 }, { note: "C4", finger: 3 }, { note: "E4", finger: 5 }]
    ]
  },
  {
    id: "w22-basse-quinte",
    title: "Basse + quinte",
    objective: "Construire un accompagnement simple à la main gauche.",
    hand: "Main gauche",
    tempo: 55,
    mode: "sequence",
    notes: [
      { note: "C3", finger: 5 }, { note: "G3", finger: 1 }, { note: "F3", finger: 5 }, { note: "C4", finger: 1 }
    ]
  },
  {
    id: "w23-expression",
    title: "Phrase expressive",
    objective: "Préparer une phrase à jouer avec une intensité progressive.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "E4", finger: 1 }, { note: "G4", finger: 3 }, { note: "A4", finger: 4 },
      { note: "G4", finger: 3 }, { note: "E4", finger: 1 }
    ]
  },
  {
    id: "w24-sol-majeur",
    title: "Gamme de Sol majeur",
    objective: "Repérer le Fa♯ dans une nouvelle gamme.",
    hand: "Main droite",
    tempo: 60,
    mode: "sequence",
    notes: [
      { note: "G4", finger: 1 }, { note: "A4", finger: 2 }, { note: "B4", finger: 3 },
      { note: "C5", finger: 1 }, { note: "D5", finger: 2 }, { note: "E5", finger: 3 },
      { note: "F#5", finger: 4 }, { note: "G5", finger: 5 }
    ]
  },
  {
    id: "w25-accords-mineurs",
    title: "Trois accords mineurs",
    objective: "Identifier la couleur mineure et les positions de base.",
    hand: "Main droite",
    tempo: 55,
    mode: "chord-sequence",
    groups: [
      [{ note: "A3", finger: 1 }, { note: "C4", finger: 3 }, { note: "E4", finger: 5 }],
      [{ note: "D4", finger: 1 }, { note: "F4", finger: 3 }, { note: "A4", finger: 5 }],
      [{ note: "E4", finger: 1 }, { note: "G4", finger: 3 }, { note: "B4", finger: 5 }]
    ]
  },
  {
    id: "w26-reperes-tactiles",
    title: "Jouer sans regarder chaque note",
    objective: "Utiliser la forme des touches noires comme repère tactile.",
    hand: "Main droite",
    tempo: 50,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "F4", finger: 1 }, { note: "G4", finger: 2 }
    ]
  },
  {
    id: "w27-pentatonique",
    title: "Improviser avec 5 notes",
    objective: "Utiliser Do Ré Mi Sol La pour improviser librement.",
    hand: "Main droite",
    tempo: 70,
    mode: "free-set",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 },
      { note: "G4", finger: 4 }, { note: "A4", finger: 5 }
    ]
  },
  {
    id: "w28-sol7",
    title: "Sol7 → Do",
    objective: "Entendre puis reproduire la tension et sa résolution.",
    hand: "Main droite",
    tempo: 55,
    mode: "chord-sequence",
    groups: [
      [{ note: "G3", finger: 1 }, { note: "B3", finger: 2 }, { note: "D4", finger: 3 }, { note: "F4", finger: 5 }],
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }]
    ]
  },
  {
    id: "w29-vitesse",
    title: "Gamme propre avant la vitesse",
    objective: "Augmenter le tempo sans perdre la précision.",
    hand: "Main droite",
    tempo: 70,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "D4", finger: 2 }, { note: "E4", finger: 3 }, { note: "F4", finger: 1 },
      { note: "G4", finger: 2 }, { note: "A4", finger: 3 }, { note: "B4", finger: 4 }, { note: "C5", finger: 5 }
    ]
  },
  {
    id: "w30-phrase-intermediaire",
    title: "Phrase intermédiaire",
    objective: "Travailler une phrase plus longue par petits groupes.",
    hand: "Main droite",
    tempo: 65,
    mode: "sequence",
    notes: [
      { note: "E4", finger: 1 }, { note: "G4", finger: 3 }, { note: "A4", finger: 4 }, { note: "B4", finger: 5 },
      { note: "A4", finger: 4 }, { note: "G4", finger: 3 }, { note: "E4", finger: 1 }, { note: "D4", finger: 2 }
    ]
  },
  {
    id: "w31-harmonie",
    title: "I – IV – V – I en Do",
    objective: "Relier les degrés harmoniques aux accords réels du clavier.",
    hand: "Main droite",
    tempo: 60,
    mode: "chord-sequence",
    groups: [
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }],
      [{ note: "F4", finger: 1 }, { note: "A4", finger: 3 }, { note: "C5", finger: 5 }],
      [{ note: "G4", finger: 1 }, { note: "B4", finger: 3 }, { note: "D5", finger: 5 }],
      [{ note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }]
    ]
  },
  {
    id: "w32-projet-final",
    title: "Mini-projet final",
    objective: "Combiner mélodie, accompagnement et expression.",
    hand: "Deux mains",
    tempo: 65,
    mode: "sequence",
    notes: [
      { note: "C4", finger: 1 }, { note: "E4", finger: 3 }, { note: "G4", finger: 5 }, { note: "A4", finger: 5 },
      { note: "G4", finger: 4 }, { note: "E4", finger: 2 }, { note: "D4", finger: 1 }, { note: "C4", finger: 1 }
    ],
    leftHand: [{ note: "C3", finger: 5 }, { note: "G3", finger: 1 }]
  }
];

export function getPianoExerciseByWeek(index) {
  return pianoExercises[index] || pianoExercises[0];
}
