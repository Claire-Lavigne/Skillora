export const pianoTrainingWeeks = [
  {
    "title": "Semaine 1 — Deux portées, pulsation et vrais silences",
    "stages": [
      {
        "id": "w01-a1",
        "label": "Découverte",
        "title": "Le Do des deux mains et le silence",
        "objective": "Repérer le Do main droite et le Do main gauche. Jouer une noire = 1 temps ; respecter un soupir = 1 temps.",
        "instructions": [
          "Compte 1-2-3-4 à voix haute.",
          "Quand tu vois un soupir, ne joue rien mais continue de compter.",
          "Clé de sol : main droite. Clé de fa : main gauche."
        ],
        "curriculum": {
          "reading": "Repérer Do4 en clé de sol et Do3 en clé de fa",
          "rhythm": "Noire et soupir",
          "accompaniment": "Basse simple"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Do + silences",
          "tempo": 54,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w01-a2",
        "label": "Exercice 1",
        "title": "Question main droite, réponse main gauche",
        "objective": "Lire 4 mesures sans arrêter la pulsation.",
        "instructions": [
          "Joue seulement quand ta portée contient une note.",
          "Les silences de l’autre main comptent aussi."
        ],
        "curriculum": {
          "reading": "Do4 / Do3",
          "rhythm": "Noires, blanches et silences déjà expliqués visuellement",
          "accompaniment": "Réponse de basse"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Question-réponse",
          "tempo": 56,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "w"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "w"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w01-a3",
        "label": "Exercice 2",
        "title": "Silence sur le temps 2",
        "objective": "Ne pas combler les silences : le silence fait partie de la musique.",
        "instructions": [
          "Compte chaque mesure jusqu’à 4.",
          "Sur le temps 2, garde les mains immobiles quand le soupir apparaît."
        ],
        "curriculum": {
          "reading": "Do sur les deux portées",
          "rhythm": "Soupir placé sur différents temps",
          "accompaniment": "Basse simple tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Silences précis",
          "tempo": 58,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w01-a4",
        "label": "Mélodie finale",
        "title": "Écho de Do — étude originale",
        "objective": "Jouer 8 mesures en respectant notes et silences.",
        "instructions": [
          "Commence lentement.",
          "Les deux dernières mesures se jouent ensemble."
        ],
        "curriculum": {
          "reading": "Do dans deux registres",
          "rhythm": "Pulsation stable + silences",
          "accompaniment": "Basse simple"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Écho de Do",
          "tempo": 60,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w01-chant",
        "label": "Morceau de la semaine",
        "title": "Premier duo — pièce originale complète",
        "objective": "Jouer une pièce complète de 8 mesures avec des silences réels.",
        "instructions": [
          "Joue la pièce du début à la fin.",
          "Essaie ensuite sans Aide lecture.",
          "Objectif : 3 passages sans arrêt à 60 BPM."
        ],
        "curriculum": {
          "reading": "Clé de sol + clé de fa",
          "rhythm": "Noire, blanche, ronde et silences",
          "accompaniment": "Basse simple"
        },
        "song": {
          "title": "Premier duo",
          "sourceMode": "original",
          "sourceNote": "Pièce originale Skillora complète.",
          "uniqueForWeek": true
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Premier duo",
          "tempo": 60,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      }
    ],
    "curriculum": {
      "reading": "Clé de sol + clé de fa : repérer les Do",
      "rhythm": "Noires",
      "accompaniment": "Basse simple : fondamentale"
    },
    "engine": "timeline-v2"
  },
  {
    "title": "Semaine 2 — Do Ré Mi, doigtés et blanches",
    "stages": [
      {
        "id": "w02-a1",
        "label": "Découverte",
        "title": "Do–Ré–Mi et les doigts 1–2–3",
        "objective": "Déplacer les doigts sans bouger toute la main. Découvrir la blanche = 2 temps.",
        "instructions": [
          "MD : Do(1), Ré(2), Mi(3).",
          "MG : Do(5), Ré(4), Mi(3).",
          "Une blanche tient pendant 2 pulsations."
        ],
        "curriculum": {
          "reading": "Do Ré Mi sur les deux clés",
          "rhythm": "Noire + blanche",
          "accompaniment": "Basse répétée"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Trois notes",
          "tempo": 58,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w02-a2",
        "label": "Exercice 1",
        "title": "Main droite : motifs différents",
        "objective": "Lire sans réciter Do–Ré–Mi toujours dans le même ordre.",
        "instructions": [
          "Observe avant de jouer.",
          "Garde les doigts posés au-dessus des touches."
        ],
        "curriculum": {
          "reading": "Lecture mélangée Do Ré Mi",
          "rhythm": "Noires et blanches",
          "accompaniment": "Basse tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Motifs MD",
          "tempo": 60,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w02-a3",
        "label": "Exercice 2",
        "title": "Main gauche : Do–Ré–Mi avec silences",
        "objective": "Lire la clé de fa sans copier la main droite.",
        "instructions": [
          "MG : 5–4–3.",
          "Ne joue pas pendant les silences."
        ],
        "curriculum": {
          "reading": "Do Ré Mi en clé de fa",
          "rhythm": "Blanche + silences",
          "accompaniment": "Basse mélodique"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Motifs MG",
          "tempo": 58,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "w",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w02-a4",
        "label": "Mélodie finale",
        "title": "Trois lumières — étude originale",
        "objective": "Coordonner une mélodie Do–Ré–Mi avec une basse indépendante.",
        "instructions": [
          "Travaille MD seule, puis MG seule, puis ensemble."
        ],
        "curriculum": {
          "reading": "Do Ré Mi deux mains",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Basse répétée"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Trois lumières",
          "tempo": 62,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "w",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w02-chant",
        "label": "Morceau de la semaine",
        "title": "Chemin tranquille — pièce originale complète",
        "objective": "Jouer 12 mesures complètes avec Do–Ré–Mi et des durées variées.",
        "instructions": [
          "Objectif : aucun arrêt entre les mesures.",
          "Puis rejoue à 75 % sans aides."
        ],
        "curriculum": {
          "reading": "Trois notes sur deux portées",
          "rhythm": "Noire, blanche, ronde, silences",
          "accompaniment": "Basse répétée"
        },
        "song": {
          "title": "Chemin tranquille",
          "sourceMode": "original",
          "sourceNote": "Pièce originale Skillora complète.",
          "uniqueForWeek": true
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Chemin tranquille",
          "tempo": 64,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "w",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "w",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "w",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      }
    ],
    "curriculum": {
      "reading": "Cinq doigts sur les deux portées",
      "rhythm": "Blanches",
      "accompaniment": "Basse répétée"
    },
    "engine": "timeline-v2"
  },
  {
    "title": "Semaine 3 — Rondes et indépendance des mains",
    "stages": [
      {
        "id": "w03-a1",
        "label": "Découverte",
        "title": "La ronde et la mesure complète",
        "objective": "Comprendre qu’une ronde occupe les 4 temps d’une mesure en 4/4.",
        "instructions": [
          "Compte 1-2-3-4 pendant toute la ronde.",
          "Ne rejoue pas la note au milieu."
        ],
        "curriculum": {
          "reading": "Do Ré Mi sans aide automatique",
          "rhythm": "Ronde, blanche, noire et silences",
          "accompaniment": "Fondamentale tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Ronde tenue",
          "tempo": 56,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "w",
                    "finger": 4
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w03-a2",
        "label": "Exercice 1",
        "title": "Une main tient, l’autre bouge",
        "objective": "Commencer l’indépendance : tenir une ronde pendant que l’autre main joue.",
        "instructions": [
          "Ne coupe pas la note tenue quand l’autre main change."
        ],
        "curriculum": {
          "reading": "Do Ré Mi deux mains",
          "rhythm": "Durées différentes simultanées",
          "accompaniment": "Note tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Indépendance 1",
          "tempo": 58,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "w",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "w",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w03-a3",
        "label": "Exercice 2",
        "title": "Silences indépendants",
        "objective": "Une main peut être silencieuse pendant que l’autre continue.",
        "instructions": [
          "Ne transforme pas les silences en notes.",
          "Garde la pulsation dans ta tête."
        ],
        "curriculum": {
          "reading": "Deux portées indépendantes",
          "rhythm": "Silences à des endroits différents",
          "accompaniment": "Fondamentale + note voisine"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Indépendance 2",
          "tempo": 60,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w03-a4",
        "label": "Mélodie finale",
        "title": "Respire — étude originale",
        "objective": "Jouer une phrase de 8 mesures avec de vrais espaces de silence.",
        "instructions": [
          "Les silences font respirer la phrase.",
          "Essaie d’entendre intérieurement la pulsation pendant les silences."
        ],
        "curriculum": {
          "reading": "Lecture fluide Do Ré Mi",
          "rhythm": "Rondes + silences + durées superposées",
          "accompaniment": "Basse tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Respire",
          "tempo": 62,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "w",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "w",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "q",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w03-chant",
        "label": "Morceau de la semaine",
        "title": "Trois notes, une phrase — pièce originale complète",
        "objective": "Jouer 12 mesures en gardant la continuité malgré les silences.",
        "instructions": [
          "Travaille 4 mesures par 4 mesures.",
          "Puis enchaîne les 12 mesures sans arrêt."
        ],
        "curriculum": {
          "reading": "Do Ré Mi autonome",
          "rhythm": "Noire, blanche, ronde, silences indépendants",
          "accompaniment": "Basse tenue et mouvement conjoint"
        },
        "song": {
          "title": "Trois notes, une phrase",
          "sourceMode": "original",
          "sourceNote": "Pièce originale Skillora complète.",
          "uniqueForWeek": true
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Trois notes, une phrase",
          "tempo": 64,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "w",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "w",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "rest",
                    "duration": "q"
                  },
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "w",
                    "finger": 3
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "w",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "rest",
                    "duration": "h"
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "rest",
                    "duration": "h"
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "E3",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "D3",
                    "duration": "h",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      }
    ],
    "curriculum": {
      "reading": "Do Ré Mi mélangés sur les deux clés",
      "rhythm": "Rondes",
      "accompaniment": "Fondamentale + quinte"
    },
    "engine": "timeline-v2"
  },
  {
    "title": "Semaine 4 — Do à Sol et Hymne à la joie",
    "stages": [
      {
        "id": "w04-a1",
        "label": "Découverte",
        "title": "Ajouter Fa et Sol",
        "objective": "Étendre la position de cinq doigts jusqu’à Sol.",
        "instructions": [
          "MD : Do1 Ré2 Mi3 Fa4 Sol5.",
          "MG : Do5 Ré4 Mi3 Fa2 Sol1."
        ],
        "curriculum": {
          "reading": "Do à Sol sur les deux clés",
          "rhythm": "Noire, blanche, ronde",
          "accompaniment": "Fondamentale tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Cinq notes",
          "tempo": 58,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 1
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "w",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w04-a2",
        "label": "Exercice 1",
        "title": "Sauts dans les cinq notes",
        "objective": "Lire des notes qui ne montent pas toujours dans l’ordre.",
        "instructions": [
          "Lis la note avant de regarder le clavier."
        ],
        "curriculum": {
          "reading": "Do à Sol mélangés",
          "rhythm": "Noires + blanches",
          "accompaniment": "Basse C/G"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Lecture mélangée",
          "tempo": 60,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "h",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 1
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "h",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "h",
                    "finger": 1
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w04-a3",
        "label": "Exercice 2",
        "title": "Préparation à l’Hymne à la joie",
        "objective": "Travailler les cellules rythmiques et les notes réellement utilisées dans le morceau final.",
        "instructions": [
          "Répète chaque mesure jusqu’à la jouer sans hésitation.",
          "La main gauche tient une basse pendant que la droite joue quatre noires."
        ],
        "curriculum": {
          "reading": "Do Ré Mi Fa Sol",
          "rhythm": "4 noires contre une ronde",
          "accompaniment": "Basse fondamentale tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Cellules Beethoven",
          "tempo": 62,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 1
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 1
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w04-a4",
        "label": "Mélodie finale",
        "title": "Hymne à la joie — première phrase réelle",
        "objective": "Jouer les 8 premières mesures de la vraie mélodie de Beethoven avec basse simple.",
        "instructions": [
          "Travaille d’abord la main droite seule.",
          "Ajoute ensuite les rondes de basse."
        ],
        "curriculum": {
          "reading": "Do à Sol",
          "rhythm": "Noires + blanches",
          "accompaniment": "Basse C/G tenue"
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Hymne à la joie — 8 mesures",
          "tempo": 66,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      },
      {
        "id": "w04-chant",
        "label": "Morceau de la semaine",
        "title": "Hymne à la joie — Beethoven — thème complet",
        "objective": "Jouer le thème complet de 16 mesures, avec la vraie mélodie et une basse pédagogique simple.",
        "instructions": [
          "Ceci n’est pas une préparation générique : la mélodie est celle du thème public-domain.",
          "Travaille 4 mesures à la fois.",
          "Puis joue les 16 mesures sans arrêt.",
          "Objectif final : 3 passages à 72 BPM."
        ],
        "curriculum": {
          "reading": "Do à Sol sur deux portées",
          "rhythm": "Noires + blanches, 4/4",
          "accompaniment": "Basses fondamentales tenues"
        },
        "song": {
          "title": "Hymne à la joie",
          "composer": "Ludwig van Beethoven",
          "sourceMode": "domaine_public",
          "sourceNote": "Mélodie du thème public-domain ; accompagnement de basse simplifié pour le niveau 4.",
          "uniqueForWeek": true,
          "complete": true
        },
        "practice": {
          "engine": "timeline-v2",
          "title": "Hymne à la joie — thème complet",
          "tempo": 72,
          "staff": "grand",
          "measuresPerSystem": 2,
          "timeline": {
            "timeSignature": "4/4",
            "measures": [
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "F2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "h",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "G4",
                    "duration": "q",
                    "finger": 5
                  },
                  {
                    "type": "note",
                    "pitch": "F4",
                    "duration": "q",
                    "finger": 4
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "G2",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "q",
                    "finger": 1
                  },
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "q",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "E4",
                    "duration": "q",
                    "finger": 3
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              },
              {
                "treble": [
                  {
                    "type": "note",
                    "pitch": "D4",
                    "duration": "h",
                    "finger": 2
                  },
                  {
                    "type": "note",
                    "pitch": "C4",
                    "duration": "h",
                    "finger": 1
                  }
                ],
                "bass": [
                  {
                    "type": "note",
                    "pitch": "C3",
                    "duration": "w",
                    "finger": 5
                  }
                ]
              }
            ]
          },
          "description": ""
        }
      }
    ],
    "curriculum": {
      "reading": "Do à Sol sur les deux clés",
      "rhythm": "Noires + silences",
      "accompaniment": "Basse alternée"
    },
    "engine": "timeline-v2"
  },
  {
    "title": "Semaine 5 — Pulsation et rythme en 4/4",
    "stages": [
      {
        "id": "w05-a1",
        "label": "Découverte",
        "title": "Découvrir quatre temps",
        "objective": "Lire en gardant la pulsation. Rythme : Croches par paires. Accompagnement : Basse double / octave simple.",
        "instructions": [
          "Lecture : Lire en gardant la pulsation.",
          "Rythme : travaille croches par paires.",
          "Main gauche / harmonie : basse double / octave simple.",
          "Compte 1 - 2 - 3 - 4 sans jouer.",
          "Lis une mesure sur les deux portées.",
          "Repère où tombe chaque note."
        ],
        "practice": {
          "title": "Découvrir quatre temps",
          "objective": "Garde une pulsation commune aux deux mains.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches par paires",
          "accompanimentFocus": "Basse double / octave simple",
          "readingFocus": "Lire en gardant la pulsation"
        },
        "curriculum": {
          "reading": "Lire en gardant la pulsation",
          "rhythm": "Croches par paires",
          "accompaniment": "Basse double / octave simple"
        }
      },
      {
        "id": "w05-a2",
        "label": "Exercice 1",
        "title": "Quatre pulsations — main droite",
        "objective": "Une note sur chaque battement.",
        "instructions": [
          "Joue une note par temps main droite."
        ],
        "practice": {
          "title": "Quatre pulsations — main droite",
          "objective": "Une note sur chaque battement.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches par paires",
          "accompanimentFocus": "Basse double / octave simple",
          "readingFocus": "Lire en gardant la pulsation"
        },
        "curriculum": {
          "reading": "Lire en gardant la pulsation",
          "rhythm": "Croches par paires",
          "accompaniment": "Basse double / octave simple"
        }
      },
      {
        "id": "w05-a3",
        "label": "Exercice 2",
        "title": "Quatre pulsations — main gauche",
        "objective": "Une basse sur chaque battement.",
        "instructions": [
          "Joue une note par temps main gauche.",
          "Refais avec le métronome à 60 BPM."
        ],
        "practice": {
          "title": "Quatre pulsations — main gauche",
          "objective": "Une basse sur chaque battement.",
          "hand": "Main gauche",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches par paires",
          "accompanimentFocus": "Basse double / octave simple",
          "readingFocus": "Lire en gardant la pulsation"
        },
        "curriculum": {
          "reading": "Lire en gardant la pulsation",
          "rhythm": "Croches par paires",
          "accompaniment": "Basse double / octave simple"
        }
      },
      {
        "id": "w05-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Quatre temps",
        "objective": "Joue une mesure régulière à deux mains.",
        "instructions": [
          "Compte à voix haute.",
          "Joue la mélodie main droite.",
          "Ajoute la basse en gardant la pulsation."
        ],
        "practice": {
          "title": "Mélodie finale — Quatre temps",
          "objective": "Joue une mesure régulière à deux mains sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches par paires",
          "accompanimentFocus": "Basse double / octave simple",
          "readingFocus": "Lire en gardant la pulsation"
        },
        "curriculum": {
          "reading": "Lire en gardant la pulsation",
          "rhythm": "Croches par paires",
          "accompaniment": "Basse double / octave simple"
        }
      },
      {
        "id": "w05-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Für Elise — Beethoven (court extrait)",
        "objective": "Appliquer la découverte de la semaine (Croches par paires ; Basse double / octave simple) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire en gardant la pulsation",
          "rhythm": "Croches par paires",
          "accompaniment": "Basse double / octave simple"
        },
        "song": {
          "title": "Für Elise — Beethoven (court extrait)",
          "sourceMode": "domaine_public",
          "sourceNote": "Morceau du domaine public : utiliser un extrait adapté au niveau de la semaine, avec l’accompagnement appris jusqu’ici.",
          "requiredSkills": [
            "Do Ré Mi mélangés sur les deux clés",
            "Do à Sol sur les deux clés",
            "Lire en gardant la pulsation",
            "Fondamentale + quinte",
            "Basse alternée",
            "Basse double / octave simple"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Für Elise — Beethoven (court extrait)",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches par paires",
          "accompanimentFocus": "Basse double / octave simple",
          "readingFocus": "Lire en gardant la pulsation",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire en gardant la pulsation",
      "rhythm": "Croches par paires",
      "accompaniment": "Basse double / octave simple"
    }
  },
  {
    "title": "Semaine 6 — Lecture mélangée Do à Sol",
    "stages": [
      {
        "id": "w06-a1",
        "label": "Découverte",
        "title": "Découvrir la lecture sans ordre",
        "objective": "Lecture mélangée sans réciter les notes. Rythme : Noire + blanche + ronde. Accompagnement : Premier accord plaqué majeur.",
        "instructions": [
          "Lecture : Lecture mélangée sans réciter les notes.",
          "Rythme : travaille noire + blanche + ronde.",
          "Main gauche / harmonie : premier accord plaqué majeur.",
          "Observe les cinq positions en clé de sol.",
          "Observe les cinq positions en clé de fa.",
          "Ne déduis pas la note uniquement à partir de la précédente."
        ],
        "practice": {
          "title": "Découvrir la lecture sans ordre",
          "objective": "Lis Do à Sol sans t’aider de la suite des notes.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "w"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire + blanche + ronde",
          "accompanimentFocus": "Premier accord plaqué majeur",
          "readingFocus": "Lecture mélangée sans réciter les notes"
        },
        "curriculum": {
          "reading": "Lecture mélangée sans réciter les notes",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Premier accord plaqué majeur"
        }
      },
      {
        "id": "w06-a2",
        "label": "Exercice 1",
        "title": "Lecture aléatoire — clé de sol",
        "objective": "Lis chaque note avant de la jouer.",
        "instructions": [
          "Lis six notes mélangées main droite."
        ],
        "practice": {
          "title": "Lecture aléatoire — clé de sol",
          "objective": "Lis chaque note avant de la jouer.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire + blanche + ronde",
          "accompanimentFocus": "Premier accord plaqué majeur",
          "readingFocus": "Lecture mélangée sans réciter les notes"
        },
        "curriculum": {
          "reading": "Lecture mélangée sans réciter les notes",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Premier accord plaqué majeur"
        }
      },
      {
        "id": "w06-a3",
        "label": "Exercice 2",
        "title": "Lecture aléatoire — clé de fa",
        "objective": "Lis les mêmes noms en clé de fa.",
        "instructions": [
          "Lis six notes mélangées main gauche.",
          "Recommence en regardant moins le clavier."
        ],
        "practice": {
          "title": "Lecture aléatoire — clé de fa",
          "objective": "Lis les mêmes noms en clé de fa.",
          "hand": "Main gauche",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "w"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire + blanche + ronde",
          "accompanimentFocus": "Premier accord plaqué majeur",
          "readingFocus": "Lecture mélangée sans réciter les notes"
        },
        "curriculum": {
          "reading": "Lecture mélangée sans réciter les notes",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Premier accord plaqué majeur"
        }
      },
      {
        "id": "w06-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Lecture surprise",
        "objective": "Applique la lecture sur une courte phrase à deux mains.",
        "instructions": [
          "Lis les deux portées avant de commencer.",
          "Joue lentement mains séparées.",
          "Assemble la phrase complète."
        ],
        "practice": {
          "title": "Mélodie finale — Lecture surprise",
          "objective": "Applique la lecture sur une courte phrase à deux mains.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "w"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire + blanche + ronde",
          "accompanimentFocus": "Premier accord plaqué majeur",
          "readingFocus": "Lecture mélangée sans réciter les notes"
        },
        "curriculum": {
          "reading": "Lecture mélangée sans réciter les notes",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Premier accord plaqué majeur"
        }
      },
      {
        "id": "w06-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Menuet — Bach/Petzold (court extrait)",
        "objective": "Appliquer la découverte de la semaine (Noire + blanche + ronde ; Premier accord plaqué majeur) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lecture mélangée sans réciter les notes",
          "rhythm": "Noire + blanche + ronde",
          "accompaniment": "Premier accord plaqué majeur"
        },
        "song": {
          "title": "Menuet — Bach/Petzold (court extrait)",
          "sourceMode": "domaine_public",
          "sourceNote": "Morceau du domaine public : utiliser un extrait adapté au niveau de la semaine, avec l’accompagnement appris jusqu’ici.",
          "requiredSkills": [
            "Do à Sol sur les deux clés",
            "Lire en gardant la pulsation",
            "Lecture mélangée sans réciter les notes",
            "Basse alternée",
            "Basse double / octave simple",
            "Premier accord plaqué majeur"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Menuet — Bach/Petzold (court extrait)",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "w"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire + blanche + ronde",
          "accompanimentFocus": "Premier accord plaqué majeur",
          "readingFocus": "Lecture mélangée sans réciter les notes",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lecture mélangée sans réciter les notes",
      "rhythm": "Noire + blanche + ronde",
      "accompaniment": "Premier accord plaqué majeur"
    }
  },
  {
    "title": "Semaine 7 — Secondes et tierces",
    "stages": [
      {
        "id": "w07-a1",
        "label": "Découverte",
        "title": "Découvrir les intervalles",
        "objective": "Secondes et tierces. Rythme : Blanche pointée. Accompagnement : Accords plaqués majeurs et mineurs.",
        "instructions": [
          "Lecture : Secondes et tierces.",
          "Rythme : travaille blanche pointée.",
          "Main gauche / harmonie : accords plaqués majeurs et mineurs.",
          "Observe l’objectif : Reconnais une seconde et une tierce.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir les intervalles",
          "objective": "Reconnais une seconde et une tierce.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "hd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "hd"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Blanche pointée",
          "accompanimentFocus": "Accords plaqués majeurs et mineurs",
          "readingFocus": "Secondes et tierces"
        },
        "curriculum": {
          "reading": "Secondes et tierces",
          "rhythm": "Blanche pointée",
          "accompaniment": "Accords plaqués majeurs et mineurs"
        }
      },
      {
        "id": "w07-a2",
        "label": "Exercice 1",
        "title": "Secondes — main droite",
        "objective": "Joue des notes voisines.",
        "instructions": [
          "Joue des notes voisines."
        ],
        "practice": {
          "title": "Secondes — main droite",
          "objective": "Joue des notes voisines.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "hd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "hd"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Blanche pointée",
          "accompanimentFocus": "Accords plaqués majeurs et mineurs",
          "readingFocus": "Secondes et tierces"
        },
        "curriculum": {
          "reading": "Secondes et tierces",
          "rhythm": "Blanche pointée",
          "accompaniment": "Accords plaqués majeurs et mineurs"
        }
      },
      {
        "id": "w07-a3",
        "label": "Exercice 2",
        "title": "Tierces — main gauche",
        "objective": "Saute une note entre deux sons.",
        "instructions": [
          "Saute une note entre deux sons.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Tierces — main gauche",
          "objective": "Saute une note entre deux sons.",
          "hand": "Main gauche",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "hd"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "hd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Blanche pointée",
          "accompanimentFocus": "Accords plaqués majeurs et mineurs",
          "readingFocus": "Secondes et tierces"
        },
        "curriculum": {
          "reading": "Secondes et tierces",
          "rhythm": "Blanche pointée",
          "accompaniment": "Accords plaqués majeurs et mineurs"
        }
      },
      {
        "id": "w07-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Pas et sauts",
        "objective": "Mélange secondes et tierces.",
        "instructions": [
          "Mélange secondes et tierces.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Pas et sauts",
          "objective": "Mélange secondes et tierces.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "hd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "hd"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "hd"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "hd"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "hd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "hd"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Blanche pointée",
          "accompanimentFocus": "Accords plaqués majeurs et mineurs",
          "readingFocus": "Secondes et tierces"
        },
        "curriculum": {
          "reading": "Secondes et tierces",
          "rhythm": "Blanche pointée",
          "accompaniment": "Accords plaqués majeurs et mineurs"
        }
      },
      {
        "id": "w07-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Amazing Grace",
        "objective": "Appliquer la découverte de la semaine (Blanche pointée ; Accords plaqués majeurs et mineurs) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Secondes et tierces",
          "rhythm": "Blanche pointée",
          "accompaniment": "Accords plaqués majeurs et mineurs"
        },
        "song": {
          "title": "Amazing Grace",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire en gardant la pulsation",
            "Lecture mélangée sans réciter les notes",
            "Secondes et tierces",
            "Basse double / octave simple",
            "Premier accord plaqué majeur",
            "Accords plaqués majeurs et mineurs"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Amazing Grace",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "hd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "hd"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "hd"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "hd"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "hd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "hd"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Blanche pointée",
          "accompanimentFocus": "Accords plaqués majeurs et mineurs",
          "readingFocus": "Secondes et tierces",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Secondes et tierces",
      "rhythm": "Blanche pointée",
      "accompaniment": "Accords plaqués majeurs et mineurs"
    }
  },
  {
    "title": "Semaine 8 — Première vraie mélodie à deux mains",
    "stages": [
      {
        "id": "w08-a1",
        "label": "Découverte",
        "title": "Découvrir deux lignes simultanées",
        "objective": "Première vraie lecture à deux mains. Rythme : Noire pointée + croche. Accompagnement : Basse + accord.",
        "instructions": [
          "Lecture : Première vraie lecture à deux mains.",
          "Rythme : travaille noire pointée + croche.",
          "Main gauche / harmonie : basse + accord.",
          "Observe l’objectif : Lis une note à droite et une note à gauche.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir deux lignes simultanées",
          "objective": "Lis une note à droite et une note à gauche.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "qd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire pointée + croche",
          "accompanimentFocus": "Basse + accord",
          "readingFocus": "Première vraie lecture à deux mains"
        },
        "curriculum": {
          "reading": "Première vraie lecture à deux mains",
          "rhythm": "Noire pointée + croche",
          "accompaniment": "Basse + accord"
        }
      },
      {
        "id": "w08-a2",
        "label": "Exercice 1",
        "title": "Phrase main droite",
        "objective": "Mémorise une phrase courte.",
        "instructions": [
          "Mémorise une phrase courte."
        ],
        "practice": {
          "title": "Phrase main droite",
          "objective": "Mémorise une phrase courte.",
          "hand": "Main droite",
          "tempo": 58,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "qd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "qd"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire pointée + croche",
          "accompanimentFocus": "Basse + accord",
          "readingFocus": "Première vraie lecture à deux mains"
        },
        "curriculum": {
          "reading": "Première vraie lecture à deux mains",
          "rhythm": "Noire pointée + croche",
          "accompaniment": "Basse + accord"
        }
      },
      {
        "id": "w08-a3",
        "label": "Exercice 2",
        "title": "Basse main gauche",
        "objective": "Stabilise la basse.",
        "instructions": [
          "Stabilise la basse.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Basse main gauche",
          "objective": "Stabilise la basse.",
          "hand": "Main gauche",
          "tempo": 58,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire pointée + croche",
          "accompanimentFocus": "Basse + accord",
          "readingFocus": "Première vraie lecture à deux mains"
        },
        "curriculum": {
          "reading": "Première vraie lecture à deux mains",
          "rhythm": "Noire pointée + croche",
          "accompaniment": "Basse + accord"
        }
      },
      {
        "id": "w08-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Premier duo",
        "objective": "Assemble mélodie et basse.",
        "instructions": [
          "Assemble mélodie et basse.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Premier duo",
          "objective": "Assemble mélodie et basse.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "qd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "qd"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire pointée + croche",
          "accompanimentFocus": "Basse + accord",
          "readingFocus": "Première vraie lecture à deux mains"
        },
        "curriculum": {
          "reading": "Première vraie lecture à deux mains",
          "rhythm": "Noire pointée + croche",
          "accompaniment": "Basse + accord"
        }
      },
      {
        "id": "w08-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Jesus Loves Me",
        "objective": "Appliquer la découverte de la semaine (Noire pointée + croche ; Basse + accord) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Première vraie lecture à deux mains",
          "rhythm": "Noire pointée + croche",
          "accompaniment": "Basse + accord"
        },
        "song": {
          "title": "Jesus Loves Me",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lecture mélangée sans réciter les notes",
            "Secondes et tierces",
            "Première vraie lecture à deux mains",
            "Premier accord plaqué majeur",
            "Accords plaqués majeurs et mineurs",
            "Basse + accord"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Jesus Loves Me",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "qd"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "qd"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Noire pointée + croche",
          "accompanimentFocus": "Basse + accord",
          "readingFocus": "Première vraie lecture à deux mains",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Première vraie lecture à deux mains",
      "rhythm": "Noire pointée + croche",
      "accompaniment": "Basse + accord"
    }
  },
  {
    "title": "Semaine 9 — Accord de Do majeur",
    "stages": [
      {
        "id": "w09-a1",
        "label": "Découverte",
        "title": "Découvrir l’accord et sa basse",
        "objective": "Lire un accord sur la portée. Rythme : Croches + silences de croche. Accompagnement : Accords plaqués I–IV–V.",
        "instructions": [
          "Lecture : Lire un accord sur la portée.",
          "Rythme : travaille croches + silences de croche.",
          "Main gauche / harmonie : accords plaqués i–iv–v.",
          "Observe l’objectif : Vois l’accord à droite et la basse à gauche.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir l’accord et sa basse",
          "objective": "Vois l’accord à droite et la basse à gauche.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches + silences de croche",
          "accompanimentFocus": "Accords plaqués I–IV–V",
          "readingFocus": "Lire un accord sur la portée"
        },
        "curriculum": {
          "reading": "Lire un accord sur la portée",
          "rhythm": "Croches + silences de croche",
          "accompaniment": "Accords plaqués I–IV–V"
        }
      },
      {
        "id": "w09-a2",
        "label": "Exercice 1",
        "title": "Do majeur main droite",
        "objective": "Joue les trois notes ensemble.",
        "instructions": [
          "Joue les trois notes ensemble."
        ],
        "practice": {
          "title": "Do majeur main droite",
          "objective": "Joue les trois notes ensemble.",
          "hand": "Main droite",
          "tempo": 58,
          "mode": "chord",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches + silences de croche",
          "accompanimentFocus": "Accords plaqués I–IV–V",
          "readingFocus": "Lire un accord sur la portée"
        },
        "curriculum": {
          "reading": "Lire un accord sur la portée",
          "rhythm": "Croches + silences de croche",
          "accompaniment": "Accords plaqués I–IV–V"
        }
      },
      {
        "id": "w09-a3",
        "label": "Exercice 2",
        "title": "Do majeur main gauche",
        "objective": "Forme le même accord plus grave.",
        "instructions": [
          "Forme le même accord plus grave.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Do majeur main gauche",
          "objective": "Forme le même accord plus grave.",
          "hand": "Main gauche",
          "tempo": 58,
          "mode": "chord",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches + silences de croche",
          "accompanimentFocus": "Accords plaqués I–IV–V",
          "readingFocus": "Lire un accord sur la portée"
        },
        "curriculum": {
          "reading": "Lire un accord sur la portée",
          "rhythm": "Croches + silences de croche",
          "accompaniment": "Accords plaqués I–IV–V"
        }
      },
      {
        "id": "w09-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Do majeur",
        "objective": "Joue une mélodie sur une basse de Do.",
        "instructions": [
          "Joue une mélodie sur une basse de Do.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Do majeur",
          "objective": "Joue une mélodie sur une basse de Do.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches + silences de croche",
          "accompanimentFocus": "Accords plaqués I–IV–V",
          "readingFocus": "Lire un accord sur la portée"
        },
        "curriculum": {
          "reading": "Lire un accord sur la portée",
          "rhythm": "Croches + silences de croche",
          "accompaniment": "Accords plaqués I–IV–V"
        }
      },
      {
        "id": "w09-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Glorious — chant à choisir avec partition",
        "objective": "Appliquer la découverte de la semaine (Croches + silences de croche ; Accords plaqués I–IV–V) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire un accord sur la portée",
          "rhythm": "Croches + silences de croche",
          "accompaniment": "Accords plaqués I–IV–V"
        },
        "song": {
          "title": "Glorious — chant à choisir avec partition",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Secondes et tierces",
            "Première vraie lecture à deux mains",
            "Lire un accord sur la portée",
            "Accords plaqués majeurs et mineurs",
            "Basse + accord",
            "Accords plaqués I–IV–V"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Glorious — chant à choisir avec partition",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches + silences de croche",
          "accompanimentFocus": "Accords plaqués I–IV–V",
          "readingFocus": "Lire un accord sur la portée",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire un accord sur la portée",
      "rhythm": "Croches + silences de croche",
      "accompaniment": "Accords plaqués I–IV–V"
    }
  },
  {
    "title": "Semaine 10 — Accords de Fa et Sol",
    "stages": [
      {
        "id": "w10-a1",
        "label": "Découverte",
        "title": "Découvrir deux nouvelles harmonies",
        "objective": "Lire Fa et Sol majeurs. Rythme : Premières syncopes simples. Accompagnement : Enchaînement d’accords sans déplacer inutilement la main.",
        "instructions": [
          "Lecture : Lire Fa et Sol majeurs.",
          "Rythme : travaille premières syncopes simples.",
          "Main gauche / harmonie : enchaînement d’accords sans déplacer inutilement la main.",
          "Observe l’objectif : Lis Fa et Sol sur les deux portées.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir deux nouvelles harmonies",
          "objective": "Lis Fa et Sol sur les deux portées.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Premières syncopes simples",
          "accompanimentFocus": "Enchaînement d’accords sans déplacer inutilement la main",
          "readingFocus": "Lire Fa et Sol majeurs"
        },
        "curriculum": {
          "reading": "Lire Fa et Sol majeurs",
          "rhythm": "Premières syncopes simples",
          "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
        }
      },
      {
        "id": "w10-a2",
        "label": "Exercice 1",
        "title": "Fa majeur",
        "objective": "Forme Fa La Do.",
        "instructions": [
          "Forme Fa La Do."
        ],
        "practice": {
          "title": "Fa majeur",
          "objective": "Forme Fa La Do.",
          "hand": "Main droite",
          "tempo": 58,
          "mode": "chord",
          "notes": [
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Premières syncopes simples",
          "accompanimentFocus": "Enchaînement d’accords sans déplacer inutilement la main",
          "readingFocus": "Lire Fa et Sol majeurs"
        },
        "curriculum": {
          "reading": "Lire Fa et Sol majeurs",
          "rhythm": "Premières syncopes simples",
          "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
        }
      },
      {
        "id": "w10-a3",
        "label": "Exercice 2",
        "title": "Sol majeur",
        "objective": "Forme Sol Si Ré.",
        "instructions": [
          "Forme Sol Si Ré.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Sol majeur",
          "objective": "Forme Sol Si Ré.",
          "hand": "Main droite",
          "tempo": 58,
          "mode": "chord",
          "notes": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Premières syncopes simples",
          "accompanimentFocus": "Enchaînement d’accords sans déplacer inutilement la main",
          "readingFocus": "Lire Fa et Sol majeurs"
        },
        "curriculum": {
          "reading": "Lire Fa et Sol majeurs",
          "rhythm": "Premières syncopes simples",
          "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
        }
      },
      {
        "id": "w10-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Fa vers Sol",
        "objective": "Entends le changement d’harmonie.",
        "instructions": [
          "Entends le changement d’harmonie.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Fa vers Sol",
          "objective": "Entends le changement d’harmonie.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Premières syncopes simples",
          "accompanimentFocus": "Enchaînement d’accords sans déplacer inutilement la main",
          "readingFocus": "Lire Fa et Sol majeurs"
        },
        "curriculum": {
          "reading": "Lire Fa et Sol majeurs",
          "rhythm": "Premières syncopes simples",
          "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
        }
      },
      {
        "id": "w10-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Super Mario — thème principal (extrait autorisé)",
        "objective": "Appliquer la découverte de la semaine (Premières syncopes simples ; Enchaînement d’accords sans déplacer inutilement la main) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire Fa et Sol majeurs",
          "rhythm": "Premières syncopes simples",
          "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
        },
        "song": {
          "title": "Super Mario — thème principal (extrait autorisé)",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Première vraie lecture à deux mains",
            "Lire un accord sur la portée",
            "Lire Fa et Sol majeurs",
            "Basse + accord",
            "Accords plaqués I–IV–V",
            "Enchaînement d’accords sans déplacer inutilement la main"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Super Mario — thème principal (extrait autorisé)",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Premières syncopes simples",
          "accompanimentFocus": "Enchaînement d’accords sans déplacer inutilement la main",
          "readingFocus": "Lire Fa et Sol majeurs",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire Fa et Sol majeurs",
      "rhythm": "Premières syncopes simples",
      "accompaniment": "Enchaînement d’accords sans déplacer inutilement la main"
    }
  },
  {
    "title": "Semaine 11 — Enchaînement Do Fa Sol Do",
    "stages": [
      {
        "id": "w11-a1",
        "label": "Découverte",
        "title": "Découvrir I - IV - V - I",
        "objective": "Lire une cadence I–IV–V–I. Rythme : Liaisons de durée. Accompagnement : Basse + accord sur plusieurs harmonies.",
        "instructions": [
          "Lecture : Lire une cadence I–IV–V–I.",
          "Rythme : travaille liaisons de durée.",
          "Main gauche / harmonie : basse + accord sur plusieurs harmonies.",
          "Observe l’objectif : Lis les quatre accords dans l’ordre.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir I - IV - V - I",
          "objective": "Lis les quatre accords dans l’ordre.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "chord-sequence",
          "groups": [
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "h"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "h"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "h"
              }
            ],
            [
              {
                "note": "F4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "A4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "C5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "G4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "B4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "D5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "h"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "h"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "h"
              }
            ]
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Liaisons de durée",
          "accompanimentFocus": "Basse + accord sur plusieurs harmonies",
          "readingFocus": "Lire une cadence I–IV–V–I"
        },
        "curriculum": {
          "reading": "Lire une cadence I–IV–V–I",
          "rhythm": "Liaisons de durée",
          "accompaniment": "Basse + accord sur plusieurs harmonies"
        }
      },
      {
        "id": "w11-a2",
        "label": "Exercice 1",
        "title": "Basses Do Fa Sol Do",
        "objective": "Prépare la main gauche.",
        "instructions": [
          "Prépare la main gauche."
        ],
        "practice": {
          "title": "Basses Do Fa Sol Do",
          "objective": "Prépare la main gauche.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Liaisons de durée",
          "accompanimentFocus": "Basse + accord sur plusieurs harmonies",
          "readingFocus": "Lire une cadence I–IV–V–I"
        },
        "curriculum": {
          "reading": "Lire une cadence I–IV–V–I",
          "rhythm": "Liaisons de durée",
          "accompaniment": "Basse + accord sur plusieurs harmonies"
        }
      },
      {
        "id": "w11-a3",
        "label": "Exercice 2",
        "title": "Accords seuls",
        "objective": "Enchaîne sans t’arrêter.",
        "instructions": [
          "Enchaîne sans t’arrêter.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Accords seuls",
          "objective": "Enchaîne sans t’arrêter.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "chord-sequence",
          "groups": [
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "h"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "h"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "h"
              }
            ],
            [
              {
                "note": "F4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "A4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "C5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "G4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "B4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "D5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "h"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "h"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "h"
              }
            ]
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Liaisons de durée",
          "accompanimentFocus": "Basse + accord sur plusieurs harmonies",
          "readingFocus": "Lire une cadence I–IV–V–I"
        },
        "curriculum": {
          "reading": "Lire une cadence I–IV–V–I",
          "rhythm": "Liaisons de durée",
          "accompaniment": "Basse + accord sur plusieurs harmonies"
        }
      },
      {
        "id": "w11-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Cadence",
        "objective": "Assemble une ligne simple et les basses.",
        "instructions": [
          "Assemble une ligne simple et les basses.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Cadence",
          "objective": "Assemble une ligne simple et les basses sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Liaisons de durée",
          "accompanimentFocus": "Basse + accord sur plusieurs harmonies",
          "readingFocus": "Lire une cadence I–IV–V–I"
        },
        "curriculum": {
          "reading": "Lire une cadence I–IV–V–I",
          "rhythm": "Liaisons de durée",
          "accompaniment": "Basse + accord sur plusieurs harmonies"
        }
      },
      {
        "id": "w11-chant",
        "label": "Morceau / chant de la semaine",
        "title": "MLK — chant à choisir avec partition",
        "objective": "Appliquer la découverte de la semaine (Liaisons de durée ; Basse + accord sur plusieurs harmonies) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire une cadence I–IV–V–I",
          "rhythm": "Liaisons de durée",
          "accompaniment": "Basse + accord sur plusieurs harmonies"
        },
        "song": {
          "title": "MLK — chant à choisir avec partition",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire un accord sur la portée",
            "Lire Fa et Sol majeurs",
            "Lire une cadence I–IV–V–I",
            "Accords plaqués I–IV–V",
            "Enchaînement d’accords sans déplacer inutilement la main",
            "Basse + accord sur plusieurs harmonies"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — MLK — chant à choisir avec partition",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Liaisons de durée",
          "accompanimentFocus": "Basse + accord sur plusieurs harmonies",
          "readingFocus": "Lire une cadence I–IV–V–I",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire une cadence I–IV–V–I",
      "rhythm": "Liaisons de durée",
      "accompaniment": "Basse + accord sur plusieurs harmonies"
    }
  },
  {
    "title": "Semaine 12 — Jouer avec le métronome",
    "stages": [
      {
        "id": "w12-a1",
        "label": "Découverte",
        "title": "Découvrir la pulsation partagée",
        "objective": "Lire sans perdre le tempo. Rythme : Mesure à 3/4. Accompagnement : Accords réguliers au métronome.",
        "instructions": [
          "Lecture : Lire sans perdre le tempo.",
          "Rythme : travaille mesure à 3/4.",
          "Main gauche / harmonie : accords réguliers au métronome.",
          "Observe l’objectif : Les deux mains tombent ensemble sur le temps.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir la pulsation partagée",
          "objective": "Les deux mains tombent ensemble sur le temps.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "3/4",
          "rhythmFocus": "Mesure à 3/4",
          "accompanimentFocus": "Accords réguliers au métronome",
          "readingFocus": "Lire sans perdre le tempo"
        },
        "curriculum": {
          "reading": "Lire sans perdre le tempo",
          "rhythm": "Mesure à 3/4",
          "accompaniment": "Accords réguliers au métronome"
        }
      },
      {
        "id": "w12-a2",
        "label": "Exercice 1",
        "title": "Main droite à 60 BPM",
        "objective": "Reste exactement sur le clic.",
        "instructions": [
          "Reste exactement sur le clic."
        ],
        "practice": {
          "title": "Main droite à 60 BPM",
          "objective": "Reste exactement sur le clic.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "3/4",
          "rhythmFocus": "Mesure à 3/4",
          "accompanimentFocus": "Accords réguliers au métronome",
          "readingFocus": "Lire sans perdre le tempo"
        },
        "curriculum": {
          "reading": "Lire sans perdre le tempo",
          "rhythm": "Mesure à 3/4",
          "accompaniment": "Accords réguliers au métronome"
        }
      },
      {
        "id": "w12-a3",
        "label": "Exercice 2",
        "title": "Main gauche à 60 BPM",
        "objective": "Garde la basse régulière.",
        "instructions": [
          "Garde la basse régulière.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Main gauche à 60 BPM",
          "objective": "Garde la basse régulière.",
          "hand": "Main gauche",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "3/4",
          "rhythmFocus": "Mesure à 3/4",
          "accompanimentFocus": "Accords réguliers au métronome",
          "readingFocus": "Lire sans perdre le tempo"
        },
        "curriculum": {
          "reading": "Lire sans perdre le tempo",
          "rhythm": "Mesure à 3/4",
          "accompaniment": "Accords réguliers au métronome"
        }
      },
      {
        "id": "w12-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Métronome",
        "objective": "Joue sans accélérer.",
        "instructions": [
          "Joue sans accélérer.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Métronome",
          "objective": "Joue sans accélérer sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "3/4",
          "rhythmFocus": "Mesure à 3/4",
          "accompanimentFocus": "Accords réguliers au métronome",
          "readingFocus": "Lire sans perdre le tempo"
        },
        "curriculum": {
          "reading": "Lire sans perdre le tempo",
          "rhythm": "Mesure à 3/4",
          "accompaniment": "Accords réguliers au métronome"
        }
      },
      {
        "id": "w12-chant",
        "label": "Morceau / chant de la semaine",
        "title": "The Legend of Zelda — thème (extrait autorisé)",
        "objective": "Appliquer la découverte de la semaine (Mesure à 3/4 ; Accords réguliers au métronome) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire sans perdre le tempo",
          "rhythm": "Mesure à 3/4",
          "accompaniment": "Accords réguliers au métronome"
        },
        "song": {
          "title": "The Legend of Zelda — thème (extrait autorisé)",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire Fa et Sol majeurs",
            "Lire une cadence I–IV–V–I",
            "Lire sans perdre le tempo",
            "Enchaînement d’accords sans déplacer inutilement la main",
            "Basse + accord sur plusieurs harmonies",
            "Accords réguliers au métronome"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — The Legend of Zelda — thème (extrait autorisé)",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "3/4",
          "rhythmFocus": "Mesure à 3/4",
          "accompanimentFocus": "Accords réguliers au métronome",
          "readingFocus": "Lire sans perdre le tempo",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire sans perdre le tempo",
      "rhythm": "Mesure à 3/4",
      "accompaniment": "Accords réguliers au métronome"
    }
  },
  {
    "title": "Semaine 13 — Gamme de Do majeur",
    "stages": [
      {
        "id": "w13-a1",
        "label": "Découverte",
        "title": "Découvrir le passage du pouce",
        "objective": "Lire une gamme complète. Rythme : Triolets simples. Accompagnement : Basse + notes de gamme.",
        "instructions": [
          "Lecture : Lire une gamme complète.",
          "Rythme : travaille triolets simples.",
          "Main gauche / harmonie : basse + notes de gamme.",
          "Observe l’objectif : Observe le doigté des deux mains.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir le passage du pouce",
          "objective": "Observe le doigté des deux mains.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets simples",
          "accompanimentFocus": "Basse + notes de gamme",
          "readingFocus": "Lire une gamme complète"
        },
        "curriculum": {
          "reading": "Lire une gamme complète",
          "rhythm": "Triolets simples",
          "accompaniment": "Basse + notes de gamme"
        }
      },
      {
        "id": "w13-a2",
        "label": "Exercice 1",
        "title": "Gamme main droite",
        "objective": "Passe le pouce après Mi.",
        "instructions": [
          "Passe le pouce après Mi."
        ],
        "practice": {
          "title": "Gamme main droite",
          "objective": "Passe le pouce après Mi.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets simples",
          "accompanimentFocus": "Basse + notes de gamme",
          "readingFocus": "Lire une gamme complète"
        },
        "curriculum": {
          "reading": "Lire une gamme complète",
          "rhythm": "Triolets simples",
          "accompaniment": "Basse + notes de gamme"
        }
      },
      {
        "id": "w13-a3",
        "label": "Exercice 2",
        "title": "Gamme main gauche",
        "objective": "Utilise le doigté de la main gauche.",
        "instructions": [
          "Utilise le doigté de la main gauche.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Gamme main gauche",
          "objective": "Utilise le doigté de la main gauche.",
          "hand": "Main gauche",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "B3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets simples",
          "accompanimentFocus": "Basse + notes de gamme",
          "readingFocus": "Lire une gamme complète"
        },
        "curriculum": {
          "reading": "Lire une gamme complète",
          "rhythm": "Triolets simples",
          "accompaniment": "Basse + notes de gamme"
        }
      },
      {
        "id": "w13-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Fragment de gamme",
        "objective": "Utilise la gamme dans une phrase.",
        "instructions": [
          "Utilise la gamme dans une phrase.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Fragment de gamme",
          "objective": "Utilise la gamme dans une phrase sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets simples",
          "accompanimentFocus": "Basse + notes de gamme",
          "readingFocus": "Lire une gamme complète"
        },
        "curriculum": {
          "reading": "Lire une gamme complète",
          "rhythm": "Triolets simples",
          "accompaniment": "Basse + notes de gamme"
        }
      },
      {
        "id": "w13-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Glorious — 2e chant à choisir avec partition",
        "objective": "Appliquer la découverte de la semaine (Triolets simples ; Basse + notes de gamme) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire une gamme complète",
          "rhythm": "Triolets simples",
          "accompaniment": "Basse + notes de gamme"
        },
        "song": {
          "title": "Glorious — 2e chant à choisir avec partition",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire une cadence I–IV–V–I",
            "Lire sans perdre le tempo",
            "Lire une gamme complète",
            "Basse + accord sur plusieurs harmonies",
            "Accords réguliers au métronome",
            "Basse + notes de gamme"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Glorious — 2e chant à choisir avec partition",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets simples",
          "accompanimentFocus": "Basse + notes de gamme",
          "readingFocus": "Lire une gamme complète",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire une gamme complète",
      "rhythm": "Triolets simples",
      "accompaniment": "Basse + notes de gamme"
    }
  },
  {
    "title": "Semaine 14 — Gamme de Do, mains ensemble",
    "stages": [
      {
        "id": "w14-a1",
        "label": "Découverte",
        "title": "Découvrir le mouvement parallèle",
        "objective": "Lire les deux mains simultanément. Rythme : Mesure à 6/8. Accompagnement : Deux mains en mouvement parallèle.",
        "instructions": [
          "Lecture : Lire les deux mains simultanément.",
          "Rythme : travaille mesure à 6/8.",
          "Main gauche / harmonie : deux mains en mouvement parallèle.",
          "Observe l’objectif : Observe les deux doigtés ensemble.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir le mouvement parallèle",
          "objective": "Observe les deux doigtés ensemble.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "6/8",
          "rhythmFocus": "Mesure à 6/8",
          "accompanimentFocus": "Deux mains en mouvement parallèle",
          "readingFocus": "Lire les deux mains simultanément"
        },
        "curriculum": {
          "reading": "Lire les deux mains simultanément",
          "rhythm": "Mesure à 6/8",
          "accompaniment": "Deux mains en mouvement parallèle"
        }
      },
      {
        "id": "w14-a2",
        "label": "Exercice 1",
        "title": "Quatre notes ensemble",
        "objective": "Coordonne quatre notes seulement.",
        "instructions": [
          "Coordonne quatre notes seulement."
        ],
        "practice": {
          "title": "Quatre notes ensemble",
          "objective": "Coordonne quatre notes seulement.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "exercise",
          "timeSignature": "6/8",
          "rhythmFocus": "Mesure à 6/8",
          "accompanimentFocus": "Deux mains en mouvement parallèle",
          "readingFocus": "Lire les deux mains simultanément"
        },
        "curriculum": {
          "reading": "Lire les deux mains simultanément",
          "rhythm": "Mesure à 6/8",
          "accompaniment": "Deux mains en mouvement parallèle"
        }
      },
      {
        "id": "w14-a3",
        "label": "Exercice 2",
        "title": "Cinq notes ensemble",
        "objective": "Ajoute Sol.",
        "instructions": [
          "Ajoute Sol.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Cinq notes ensemble",
          "objective": "Ajoute Sol.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "exercise",
          "timeSignature": "6/8",
          "rhythmFocus": "Mesure à 6/8",
          "accompanimentFocus": "Deux mains en mouvement parallèle",
          "readingFocus": "Lire les deux mains simultanément"
        },
        "curriculum": {
          "reading": "Lire les deux mains simultanément",
          "rhythm": "Mesure à 6/8",
          "accompaniment": "Deux mains en mouvement parallèle"
        }
      },
      {
        "id": "w14-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Montée commune",
        "objective": "Termine par une phrase à deux mains.",
        "instructions": [
          "Termine par une phrase à deux mains.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Montée commune",
          "objective": "Termine par une phrase à deux mains.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "6/8",
          "rhythmFocus": "Mesure à 6/8",
          "accompanimentFocus": "Deux mains en mouvement parallèle",
          "readingFocus": "Lire les deux mains simultanément"
        },
        "curriculum": {
          "reading": "Lire les deux mains simultanément",
          "rhythm": "Mesure à 6/8",
          "accompaniment": "Deux mains en mouvement parallèle"
        }
      },
      {
        "id": "w14-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Hedwig’s Theme — extrait autorisé",
        "objective": "Appliquer la découverte de la semaine (Mesure à 6/8 ; Deux mains en mouvement parallèle) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire les deux mains simultanément",
          "rhythm": "Mesure à 6/8",
          "accompaniment": "Deux mains en mouvement parallèle"
        },
        "song": {
          "title": "Hedwig’s Theme — extrait autorisé",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire sans perdre le tempo",
            "Lire une gamme complète",
            "Lire les deux mains simultanément",
            "Accords réguliers au métronome",
            "Basse + notes de gamme",
            "Deux mains en mouvement parallèle"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Hedwig’s Theme — extrait autorisé",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "6/8",
          "rhythmFocus": "Mesure à 6/8",
          "accompanimentFocus": "Deux mains en mouvement parallèle",
          "readingFocus": "Lire les deux mains simultanément",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire les deux mains simultanément",
      "rhythm": "Mesure à 6/8",
      "accompaniment": "Deux mains en mouvement parallèle"
    }
  },
  {
    "title": "Semaine 15 — Nuances et expression",
    "stages": [
      {
        "id": "w15-a1",
        "label": "Découverte",
        "title": "Découvrir piano et forte",
        "objective": "Lire avec nuances. Rythme : Mélange 3/4 et 4/4. Accompagnement : Accords plaqués avec nuances.",
        "instructions": [
          "Lecture : Lire avec nuances.",
          "Rythme : travaille mélange 3/4 et 4/4.",
          "Main gauche / harmonie : accords plaqués avec nuances.",
          "Observe l’objectif : Joue la même phrase avec deux intensités.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir piano et forte",
          "objective": "Joue la même phrase avec deux intensités.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Mélange 3/4 et 4/4",
          "accompanimentFocus": "Accords plaqués avec nuances",
          "readingFocus": "Lire avec nuances"
        },
        "curriculum": {
          "reading": "Lire avec nuances",
          "rhythm": "Mélange 3/4 et 4/4",
          "accompaniment": "Accords plaqués avec nuances"
        }
      },
      {
        "id": "w15-a2",
        "label": "Exercice 1",
        "title": "Phrase douce",
        "objective": "Joue avec un toucher léger.",
        "instructions": [
          "Joue avec un toucher léger."
        ],
        "practice": {
          "title": "Phrase douce",
          "objective": "Joue avec un toucher léger.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Mélange 3/4 et 4/4",
          "accompanimentFocus": "Accords plaqués avec nuances",
          "readingFocus": "Lire avec nuances"
        },
        "curriculum": {
          "reading": "Lire avec nuances",
          "rhythm": "Mélange 3/4 et 4/4",
          "accompaniment": "Accords plaqués avec nuances"
        }
      },
      {
        "id": "w15-a3",
        "label": "Exercice 2",
        "title": "Phrase forte contrôlée",
        "objective": "Joue plus fort sans taper.",
        "instructions": [
          "Joue plus fort sans taper.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Phrase forte contrôlée",
          "objective": "Joue plus fort sans taper.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Mélange 3/4 et 4/4",
          "accompanimentFocus": "Accords plaqués avec nuances",
          "readingFocus": "Lire avec nuances"
        },
        "curriculum": {
          "reading": "Lire avec nuances",
          "rhythm": "Mélange 3/4 et 4/4",
          "accompaniment": "Accords plaqués avec nuances"
        }
      },
      {
        "id": "w15-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Écho",
        "objective": "Fais une phrase puis son écho plus doux.",
        "instructions": [
          "Fais une phrase puis son écho plus doux.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Écho",
          "objective": "Fais une phrase puis son écho plus doux.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Mélange 3/4 et 4/4",
          "accompanimentFocus": "Accords plaqués avec nuances",
          "readingFocus": "Lire avec nuances"
        },
        "curriculum": {
          "reading": "Lire avec nuances",
          "rhythm": "Mélange 3/4 et 4/4",
          "accompaniment": "Accords plaqués avec nuances"
        }
      },
      {
        "id": "w15-chant",
        "label": "Morceau / chant de la semaine",
        "title": "MLK — 2e chant à choisir avec partition",
        "objective": "Appliquer la découverte de la semaine (Mélange 3/4 et 4/4 ; Accords plaqués avec nuances) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire avec nuances",
          "rhythm": "Mélange 3/4 et 4/4",
          "accompaniment": "Accords plaqués avec nuances"
        },
        "song": {
          "title": "MLK — 2e chant à choisir avec partition",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire une gamme complète",
            "Lire les deux mains simultanément",
            "Lire avec nuances",
            "Basse + notes de gamme",
            "Deux mains en mouvement parallèle",
            "Accords plaqués avec nuances"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — MLK — 2e chant à choisir avec partition",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Mélange 3/4 et 4/4",
          "accompanimentFocus": "Accords plaqués avec nuances",
          "readingFocus": "Lire avec nuances",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire avec nuances",
      "rhythm": "Mélange 3/4 et 4/4",
      "accompaniment": "Accords plaqués avec nuances"
    }
  },
  {
    "title": "Semaine 16 — Pédale de sustain",
    "stages": [
      {
        "id": "w16-a1",
        "label": "Découverte",
        "title": "Découvrir la pédale avec deux portées",
        "objective": "Lire et pédaler. Rythme : Tenues + pédale. Accompagnement : Accords + pédale.",
        "instructions": [
          "Lecture : Lire et pédaler.",
          "Rythme : travaille tenues + pédale.",
          "Main gauche / harmonie : accords + pédale.",
          "Observe l’objectif : Change la pédale quand l’harmonie change.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir la pédale avec deux portées",
          "objective": "Change la pédale quand l’harmonie change.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "w"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Tenues + pédale",
          "accompanimentFocus": "Accords + pédale",
          "readingFocus": "Lire et pédaler"
        },
        "curriculum": {
          "reading": "Lire et pédaler",
          "rhythm": "Tenues + pédale",
          "accompaniment": "Accords + pédale"
        }
      },
      {
        "id": "w16-a2",
        "label": "Exercice 1",
        "title": "Accord de Do avec pédale",
        "objective": "Écoute la résonance.",
        "instructions": [
          "Écoute la résonance."
        ],
        "practice": {
          "title": "Accord de Do avec pédale",
          "objective": "Écoute la résonance.",
          "hand": "Main droite",
          "tempo": 50,
          "mode": "chord",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Tenues + pédale",
          "accompanimentFocus": "Accords + pédale",
          "readingFocus": "Lire et pédaler"
        },
        "curriculum": {
          "reading": "Lire et pédaler",
          "rhythm": "Tenues + pédale",
          "accompaniment": "Accords + pédale"
        }
      },
      {
        "id": "w16-a3",
        "label": "Exercice 2",
        "title": "Accord de Fa avec pédale",
        "objective": "Relève puis remets la pédale au changement.",
        "instructions": [
          "Relève puis remets la pédale au changement.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Accord de Fa avec pédale",
          "objective": "Relève puis remets la pédale au changement.",
          "hand": "Main droite",
          "tempo": 50,
          "mode": "chord",
          "notes": [
            {
              "note": "F4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Tenues + pédale",
          "accompanimentFocus": "Accords + pédale",
          "readingFocus": "Lire et pédaler"
        },
        "curriculum": {
          "reading": "Lire et pédaler",
          "rhythm": "Tenues + pédale",
          "accompaniment": "Accords + pédale"
        }
      },
      {
        "id": "w16-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Deux harmonies",
        "objective": "Coordonne pédale, basse et mélodie.",
        "instructions": [
          "Coordonne pédale, basse et mélodie.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Deux harmonies",
          "objective": "Coordonne pédale, basse et mélodie.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "w"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Tenues + pédale",
          "accompanimentFocus": "Accords + pédale",
          "readingFocus": "Lire et pédaler"
        },
        "curriculum": {
          "reading": "Lire et pédaler",
          "rhythm": "Tenues + pédale",
          "accompaniment": "Accords + pédale"
        }
      },
      {
        "id": "w16-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Interstellar — thème (extrait autorisé)",
        "objective": "Appliquer la découverte de la semaine (Tenues + pédale ; Accords + pédale) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire et pédaler",
          "rhythm": "Tenues + pédale",
          "accompaniment": "Accords + pédale"
        },
        "song": {
          "title": "Interstellar — thème (extrait autorisé)",
          "sourceMode": "partition_autorisee",
          "sourceNote": "Utiliser un extrait court à partir d’une partition autorisée ou fournie. La préparation interactive n’est pas présentée comme la mélodie originale.",
          "requiredSkills": [
            "Lire les deux mains simultanément",
            "Lire avec nuances",
            "Lire et pédaler",
            "Deux mains en mouvement parallèle",
            "Accords plaqués avec nuances",
            "Accords + pédale"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Interstellar — thème (extrait autorisé)",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 50,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "w"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "w"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Tenues + pédale",
          "accompanimentFocus": "Accords + pédale",
          "readingFocus": "Lire et pédaler",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire et pédaler",
      "rhythm": "Tenues + pédale",
      "accompaniment": "Accords + pédale"
    }
  },
  {
    "title": "Semaine 17 — Arpèges simples",
    "stages": [
      {
        "id": "w17-a1",
        "label": "Découverte",
        "title": "Découvrir l’accord décomposé",
        "objective": "Lire un arpège. Rythme : Syncopes régulières. Accompagnement : Accords brisés / premiers arpèges.",
        "instructions": [
          "Lecture : Lire un arpège.",
          "Rythme : travaille syncopes régulières.",
          "Main gauche / harmonie : accords brisés / premiers arpèges.",
          "Observe l’objectif : Vois l’accord sur deux portées.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir l’accord décomposé",
          "objective": "Vois l’accord sur deux portées.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Syncopes régulières",
          "accompanimentFocus": "Accords brisés / premiers arpèges",
          "readingFocus": "Lire un arpège"
        },
        "curriculum": {
          "reading": "Lire un arpège",
          "rhythm": "Syncopes régulières",
          "accompaniment": "Accords brisés / premiers arpèges"
        }
      },
      {
        "id": "w17-a2",
        "label": "Exercice 1",
        "title": "Arpège main droite",
        "objective": "Joue Do Mi Sol Mi Do.",
        "instructions": [
          "Joue Do Mi Sol Mi Do."
        ],
        "practice": {
          "title": "Arpège main droite",
          "objective": "Joue Do Mi Sol Mi Do.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Syncopes régulières",
          "accompanimentFocus": "Accords brisés / premiers arpèges",
          "readingFocus": "Lire un arpège"
        },
        "curriculum": {
          "reading": "Lire un arpège",
          "rhythm": "Syncopes régulières",
          "accompaniment": "Accords brisés / premiers arpèges"
        }
      },
      {
        "id": "w17-a3",
        "label": "Exercice 2",
        "title": "Arpège main gauche",
        "objective": "Joue Do Mi Sol Mi Do en clé de fa.",
        "instructions": [
          "Joue Do Mi Sol Mi Do en clé de fa.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Arpège main gauche",
          "objective": "Joue Do Mi Sol Mi Do en clé de fa.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Syncopes régulières",
          "accompanimentFocus": "Accords brisés / premiers arpèges",
          "readingFocus": "Lire un arpège"
        },
        "curriculum": {
          "reading": "Lire un arpège",
          "rhythm": "Syncopes régulières",
          "accompaniment": "Accords brisés / premiers arpèges"
        }
      },
      {
        "id": "w17-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Arpège accompagné",
        "objective": "Utilise un arpège contre une basse simple.",
        "instructions": [
          "Utilise un arpège contre une basse simple.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Arpège accompagné",
          "objective": "Utilise un arpège contre une basse simple.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Syncopes régulières",
          "accompanimentFocus": "Accords brisés / premiers arpèges",
          "readingFocus": "Lire un arpège"
        },
        "curriculum": {
          "reading": "Lire un arpège",
          "rhythm": "Syncopes régulières",
          "accompaniment": "Accords brisés / premiers arpèges"
        }
      },
      {
        "id": "w17-chant",
        "label": "Morceau / chant de la semaine",
        "title": "What a Friend We Have in Jesus",
        "objective": "Appliquer la découverte de la semaine (Syncopes régulières ; Accords brisés / premiers arpèges) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire un arpège",
          "rhythm": "Syncopes régulières",
          "accompaniment": "Accords brisés / premiers arpèges"
        },
        "song": {
          "title": "What a Friend We Have in Jesus",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire avec nuances",
            "Lire et pédaler",
            "Lire un arpège",
            "Accords plaqués avec nuances",
            "Accords + pédale",
            "Accords brisés / premiers arpèges"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — What a Friend We Have in Jesus",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Syncopes régulières",
          "accompanimentFocus": "Accords brisés / premiers arpèges",
          "readingFocus": "Lire un arpège",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire un arpège",
      "rhythm": "Syncopes régulières",
      "accompaniment": "Accords brisés / premiers arpèges"
    }
  },
  {
    "title": "Semaine 18 — Progression Do La mineur Fa Sol",
    "stages": [
      {
        "id": "w18-a1",
        "label": "Découverte",
        "title": "Découvrir quatre accords",
        "objective": "Lire une progression d’accords. Rythme : Croches d’accompagnement. Accompagnement : Arpèges d’accompagnement.",
        "instructions": [
          "Lecture : Lire une progression d’accords.",
          "Rythme : travaille croches d’accompagnement.",
          "Main gauche / harmonie : arpèges d’accompagnement.",
          "Observe l’objectif : Lis la progression sur une portée d’accords.",
          "Lis d’abord la clé de sol puis la clé de fa.",
          "Repère les notes sur le clavier avant de jouer."
        ],
        "practice": {
          "title": "Découvrir quatre accords",
          "objective": "Lis la progression sur une portée d’accords.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "chord-sequence",
          "groups": [
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "A3",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "C4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "E4",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "F4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "A4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "C5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "G4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "B4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "D5",
                "finger": 5,
                "duration": "8"
              }
            ]
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches d’accompagnement",
          "accompanimentFocus": "Arpèges d’accompagnement",
          "readingFocus": "Lire une progression d’accords"
        },
        "curriculum": {
          "reading": "Lire une progression d’accords",
          "rhythm": "Croches d’accompagnement",
          "accompaniment": "Arpèges d’accompagnement"
        }
      },
      {
        "id": "w18-a2",
        "label": "Exercice 1",
        "title": "Basses de la progression",
        "objective": "Lis Do La Fa Sol en clé de fa.",
        "instructions": [
          "Lis Do La Fa Sol en clé de fa."
        ],
        "practice": {
          "title": "Basses de la progression",
          "objective": "Lis Do La Fa Sol en clé de fa.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches d’accompagnement",
          "accompanimentFocus": "Arpèges d’accompagnement",
          "readingFocus": "Lire une progression d’accords"
        },
        "curriculum": {
          "reading": "Lire une progression d’accords",
          "rhythm": "Croches d’accompagnement",
          "accompaniment": "Arpèges d’accompagnement"
        }
      },
      {
        "id": "w18-a3",
        "label": "Exercice 2",
        "title": "Accords main droite",
        "objective": "Enchaîne les quatre accords.",
        "instructions": [
          "Enchaîne les quatre accords.",
          "Rejoue lentement en gardant les bons doigtés."
        ],
        "practice": {
          "title": "Accords main droite",
          "objective": "Enchaîne les quatre accords.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "chord-sequence",
          "groups": [
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "A3",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "C4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "E4",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "F4",
                "finger": 1,
                "duration": "q"
              },
              {
                "note": "A4",
                "finger": 3,
                "duration": "q"
              },
              {
                "note": "C5",
                "finger": 5,
                "duration": "q"
              }
            ],
            [
              {
                "note": "G4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "B4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "D5",
                "finger": 5,
                "duration": "8"
              }
            ]
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches d’accompagnement",
          "accompanimentFocus": "Arpèges d’accompagnement",
          "readingFocus": "Lire une progression d’accords"
        },
        "curriculum": {
          "reading": "Lire une progression d’accords",
          "rhythm": "Croches d’accompagnement",
          "accompaniment": "Arpèges d’accompagnement"
        }
      },
      {
        "id": "w18-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Progression complète",
        "objective": "Joue une note mélodique sur chaque basse.",
        "instructions": [
          "Joue une note mélodique sur chaque basse.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie finale — Progression complète",
          "objective": "Joue une note mélodique sur chaque basse sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "F2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches d’accompagnement",
          "accompanimentFocus": "Arpèges d’accompagnement",
          "readingFocus": "Lire une progression d’accords"
        },
        "curriculum": {
          "reading": "Lire une progression d’accords",
          "rhythm": "Croches d’accompagnement",
          "accompaniment": "Arpèges d’accompagnement"
        }
      },
      {
        "id": "w18-chant",
        "label": "Morceau / chant de la semaine",
        "title": "It Is Well with My Soul",
        "objective": "Appliquer la découverte de la semaine (Croches d’accompagnement ; Arpèges d’accompagnement) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire une progression d’accords",
          "rhythm": "Croches d’accompagnement",
          "accompaniment": "Arpèges d’accompagnement"
        },
        "song": {
          "title": "It Is Well with My Soul",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire et pédaler",
            "Lire un arpège",
            "Lire une progression d’accords",
            "Accords + pédale",
            "Accords brisés / premiers arpèges",
            "Arpèges d’accompagnement"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — It Is Well with My Soul",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "F2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Croches d’accompagnement",
          "accompanimentFocus": "Arpèges d’accompagnement",
          "readingFocus": "Lire une progression d’accords",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire une progression d’accords",
      "rhythm": "Croches d’accompagnement",
      "accompaniment": "Arpèges d’accompagnement"
    }
  },
  {
    "title": "Semaine 19 — Indépendance des mains",
    "stages": [
      {
        "id": "w19-a1",
        "label": "Découverte",
        "title": "Découvrir deux rythmes différents",
        "objective": "Deux rôles différents aux mains. Rythme : Indépendance rythmique des mains. Accompagnement : Motif main gauche autonome.",
        "instructions": [
          "Lecture : Deux rôles différents aux mains.",
          "Rythme : travaille indépendance rythmique des mains.",
          "Main gauche / harmonie : motif main gauche autonome.",
          "La main gauche tient la structure pendant que la droite bouge.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir deux rythmes différents",
          "objective": "La main gauche tient la structure pendant que la droite bouge.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Indépendance rythmique des mains",
          "accompanimentFocus": "Motif main gauche autonome",
          "readingFocus": "Deux rôles différents aux mains"
        },
        "curriculum": {
          "reading": "Deux rôles différents aux mains",
          "rhythm": "Indépendance rythmique des mains",
          "accompaniment": "Motif main gauche autonome"
        }
      },
      {
        "id": "w19-a2",
        "label": "Exercice 1",
        "title": "Main droite mobile",
        "objective": "Joue une note à chaque temps.",
        "instructions": [
          "Joue une note à chaque temps."
        ],
        "practice": {
          "title": "Main droite mobile",
          "objective": "Joue une note à chaque temps.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Indépendance rythmique des mains",
          "accompanimentFocus": "Motif main gauche autonome",
          "readingFocus": "Deux rôles différents aux mains"
        },
        "curriculum": {
          "reading": "Deux rôles différents aux mains",
          "rhythm": "Indépendance rythmique des mains",
          "accompaniment": "Motif main gauche autonome"
        }
      },
      {
        "id": "w19-a3",
        "label": "Exercice 2",
        "title": "Main gauche stable",
        "objective": "Reste sur des basses longues et régulières.",
        "instructions": [
          "Reste sur des basses longues et régulières.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Main gauche stable",
          "objective": "Reste sur des basses longues et régulières.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Indépendance rythmique des mains",
          "accompanimentFocus": "Motif main gauche autonome",
          "readingFocus": "Deux rôles différents aux mains"
        },
        "curriculum": {
          "reading": "Deux rôles différents aux mains",
          "rhythm": "Indépendance rythmique des mains",
          "accompaniment": "Motif main gauche autonome"
        }
      },
      {
        "id": "w19-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Deux rôles",
        "objective": "Garde les deux fonctions distinctes.",
        "instructions": [
          "Garde les deux fonctions distinctes.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Deux rôles",
          "objective": "Garde les deux fonctions distinctes sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Indépendance rythmique des mains",
          "accompanimentFocus": "Motif main gauche autonome",
          "readingFocus": "Deux rôles différents aux mains"
        },
        "curriculum": {
          "reading": "Deux rôles différents aux mains",
          "rhythm": "Indépendance rythmique des mains",
          "accompaniment": "Motif main gauche autonome"
        }
      },
      {
        "id": "w19-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Come Thou Fount of Every Blessing",
        "objective": "Appliquer la découverte de la semaine (Indépendance rythmique des mains ; Motif main gauche autonome) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Deux rôles différents aux mains",
          "rhythm": "Indépendance rythmique des mains",
          "accompaniment": "Motif main gauche autonome"
        },
        "song": {
          "title": "Come Thou Fount of Every Blessing",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire un arpège",
            "Lire une progression d’accords",
            "Deux rôles différents aux mains",
            "Accords brisés / premiers arpèges",
            "Arpèges d’accompagnement",
            "Motif main gauche autonome"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Come Thou Fount of Every Blessing",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Indépendance rythmique des mains",
          "accompanimentFocus": "Motif main gauche autonome",
          "readingFocus": "Deux rôles différents aux mains",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Deux rôles différents aux mains",
      "rhythm": "Indépendance rythmique des mains",
      "accompaniment": "Motif main gauche autonome"
    }
  },
  {
    "title": "Semaine 20 — Lecture à vue sur deux portées",
    "stages": [
      {
        "id": "w20-a1",
        "label": "Découverte",
        "title": "Découvrir une phrase inconnue",
        "objective": "Lecture à vue sur deux portées. Rythme : Lecture rythmique à vue. Accompagnement : Choisir les positions les plus proches.",
        "instructions": [
          "Lecture : Lecture à vue sur deux portées.",
          "Rythme : travaille lecture rythmique à vue.",
          "Main gauche / harmonie : choisir les positions les plus proches.",
          "Lis avant de toucher le clavier.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir une phrase inconnue",
          "objective": "Lis avant de toucher le clavier.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture rythmique à vue",
          "accompanimentFocus": "Choisir les positions les plus proches",
          "readingFocus": "Lecture à vue sur deux portées"
        },
        "curriculum": {
          "reading": "Lecture à vue sur deux portées",
          "rhythm": "Lecture rythmique à vue",
          "accompaniment": "Choisir les positions les plus proches"
        }
      },
      {
        "id": "w20-a2",
        "label": "Exercice 1",
        "title": "Lecture clé de sol",
        "objective": "Lis six notes sans t’arrêter.",
        "instructions": [
          "Lis six notes sans t’arrêter."
        ],
        "practice": {
          "title": "Lecture clé de sol",
          "objective": "Lis six notes sans t’arrêter.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture rythmique à vue",
          "accompanimentFocus": "Choisir les positions les plus proches",
          "readingFocus": "Lecture à vue sur deux portées"
        },
        "curriculum": {
          "reading": "Lecture à vue sur deux portées",
          "rhythm": "Lecture rythmique à vue",
          "accompaniment": "Choisir les positions les plus proches"
        }
      },
      {
        "id": "w20-a3",
        "label": "Exercice 2",
        "title": "Lecture clé de fa",
        "objective": "Lis six basses sans revenir en arrière.",
        "instructions": [
          "Lis six basses sans revenir en arrière.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Lecture clé de fa",
          "objective": "Lis six basses sans revenir en arrière.",
          "hand": "Main gauche",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture rythmique à vue",
          "accompanimentFocus": "Choisir les positions les plus proches",
          "readingFocus": "Lecture à vue sur deux portées"
        },
        "curriculum": {
          "reading": "Lecture à vue sur deux portées",
          "rhythm": "Lecture rythmique à vue",
          "accompaniment": "Choisir les positions les plus proches"
        }
      },
      {
        "id": "w20-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Lecture à vue",
        "objective": "Fais une première lecture complète.",
        "instructions": [
          "Fais une première lecture complète.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Lecture à vue",
          "objective": "Fais une première lecture complète sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture rythmique à vue",
          "accompanimentFocus": "Choisir les positions les plus proches",
          "readingFocus": "Lecture à vue sur deux portées"
        },
        "curriculum": {
          "reading": "Lecture à vue sur deux portées",
          "rhythm": "Lecture rythmique à vue",
          "accompaniment": "Choisir les positions les plus proches"
        }
      },
      {
        "id": "w20-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Blessed Assurance",
        "objective": "Appliquer la découverte de la semaine (Lecture rythmique à vue ; Choisir les positions les plus proches) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lecture à vue sur deux portées",
          "rhythm": "Lecture rythmique à vue",
          "accompaniment": "Choisir les positions les plus proches"
        },
        "song": {
          "title": "Blessed Assurance",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire une progression d’accords",
            "Deux rôles différents aux mains",
            "Lecture à vue sur deux portées",
            "Arpèges d’accompagnement",
            "Motif main gauche autonome",
            "Choisir les positions les plus proches"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Blessed Assurance",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "A2",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture rythmique à vue",
          "accompanimentFocus": "Choisir les positions les plus proches",
          "readingFocus": "Lecture à vue sur deux portées",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lecture à vue sur deux portées",
      "rhythm": "Lecture rythmique à vue",
      "accompaniment": "Choisir les positions les plus proches"
    }
  },
  {
    "title": "Semaine 21 — Renversements d’accords",
    "stages": [
      {
        "id": "w21-a1",
        "label": "Découverte",
        "title": "Découvrir les renversements",
        "objective": "Lire les renversements. Rythme : Triolets + noires. Accompagnement : Renversements : premier renversement.",
        "instructions": [
          "Lecture : Lire les renversements.",
          "Rythme : travaille triolets + noires.",
          "Main gauche / harmonie : renversements : premier renversement.",
          "Observe trois positions du même accord.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir les renversements",
          "objective": "Observe trois positions du même accord.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "chord-sequence",
          "groups": [
            [
              {
                "note": "C4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "E4",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "G4",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "E4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "G4",
                "finger": 2,
                "duration": "8"
              },
              {
                "note": "C5",
                "finger": 5,
                "duration": "8"
              }
            ],
            [
              {
                "note": "G4",
                "finger": 1,
                "duration": "8"
              },
              {
                "note": "C5",
                "finger": 3,
                "duration": "8"
              },
              {
                "note": "E5",
                "finger": 5,
                "duration": "8"
              }
            ]
          ],
          "staff": "treble",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets + noires",
          "accompanimentFocus": "Renversements : premier renversement",
          "readingFocus": "Lire les renversements"
        },
        "curriculum": {
          "reading": "Lire les renversements",
          "rhythm": "Triolets + noires",
          "accompaniment": "Renversements : premier renversement"
        }
      },
      {
        "id": "w21-a2",
        "label": "Exercice 1",
        "title": "Premier renversement",
        "objective": "Joue Mi Sol Do.",
        "instructions": [
          "Joue Mi Sol Do."
        ],
        "practice": {
          "title": "Premier renversement",
          "objective": "Joue Mi Sol Do.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "chord",
          "notes": [
            {
              "note": "E4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets + noires",
          "accompanimentFocus": "Renversements : premier renversement",
          "readingFocus": "Lire les renversements"
        },
        "curriculum": {
          "reading": "Lire les renversements",
          "rhythm": "Triolets + noires",
          "accompaniment": "Renversements : premier renversement"
        }
      },
      {
        "id": "w21-a3",
        "label": "Exercice 2",
        "title": "Deuxième renversement",
        "objective": "Joue Sol Do Mi.",
        "instructions": [
          "Joue Sol Do Mi.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Deuxième renversement",
          "objective": "Joue Sol Do Mi.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "chord",
          "notes": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets + noires",
          "accompanimentFocus": "Renversements : premier renversement",
          "readingFocus": "Lire les renversements"
        },
        "curriculum": {
          "reading": "Lire les renversements",
          "rhythm": "Triolets + noires",
          "accompaniment": "Renversements : premier renversement"
        }
      },
      {
        "id": "w21-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Accord au plus proche",
        "objective": "Choisis la position qui demande le moins de déplacement.",
        "instructions": [
          "Choisis la position qui demande le moins de déplacement.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Accord au plus proche",
          "objective": "Choisis la position qui demande le moins de déplacement.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets + noires",
          "accompanimentFocus": "Renversements : premier renversement",
          "readingFocus": "Lire les renversements"
        },
        "curriculum": {
          "reading": "Lire les renversements",
          "rhythm": "Triolets + noires",
          "accompaniment": "Renversements : premier renversement"
        }
      },
      {
        "id": "w21-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Crown Him with Many Crowns",
        "objective": "Appliquer la découverte de la semaine (Triolets + noires ; Renversements : premier renversement) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire les renversements",
          "rhythm": "Triolets + noires",
          "accompaniment": "Renversements : premier renversement"
        },
        "song": {
          "title": "Crown Him with Many Crowns",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Deux rôles différents aux mains",
            "Lecture à vue sur deux portées",
            "Lire les renversements",
            "Motif main gauche autonome",
            "Choisir les positions les plus proches",
            "Renversements : premier renversement"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Crown Him with Many Crowns",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Triolets + noires",
          "accompanimentFocus": "Renversements : premier renversement",
          "readingFocus": "Lire les renversements",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire les renversements",
      "rhythm": "Triolets + noires",
      "accompaniment": "Renversements : premier renversement"
    }
  },
  {
    "title": "Semaine 22 — Accompagnement main gauche",
    "stages": [
      {
        "id": "w22-a1",
        "label": "Découverte",
        "title": "Découvrir basse + quinte",
        "objective": "Lire un accompagnement main gauche. Rythme : Motifs d’accompagnement. Accompagnement : Renversements + basse/quinte.",
        "instructions": [
          "Lecture : Lire un accompagnement main gauche.",
          "Rythme : travaille motifs d’accompagnement.",
          "Main gauche / harmonie : renversements + basse/quinte.",
          "La main gauche crée un motif d’accompagnement.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir basse + quinte",
          "objective": "La main gauche crée un motif d’accompagnement.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Motifs d’accompagnement",
          "accompanimentFocus": "Renversements + basse/quinte",
          "readingFocus": "Lire un accompagnement main gauche"
        },
        "curriculum": {
          "reading": "Lire un accompagnement main gauche",
          "rhythm": "Motifs d’accompagnement",
          "accompaniment": "Renversements + basse/quinte"
        }
      },
      {
        "id": "w22-a2",
        "label": "Exercice 1",
        "title": "Basse + quinte",
        "objective": "Alterne fondamentale et quinte.",
        "instructions": [
          "Alterne fondamentale et quinte."
        ],
        "practice": {
          "title": "Basse + quinte",
          "objective": "Alterne fondamentale et quinte.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Motifs d’accompagnement",
          "accompanimentFocus": "Renversements + basse/quinte",
          "readingFocus": "Lire un accompagnement main gauche"
        },
        "curriculum": {
          "reading": "Lire un accompagnement main gauche",
          "rhythm": "Motifs d’accompagnement",
          "accompaniment": "Renversements + basse/quinte"
        }
      },
      {
        "id": "w22-a3",
        "label": "Exercice 2",
        "title": "Mélodie droite",
        "objective": "Garde une phrase liée.",
        "instructions": [
          "Garde une phrase liée.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Mélodie droite",
          "objective": "Garde une phrase liée.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Motifs d’accompagnement",
          "accompanimentFocus": "Renversements + basse/quinte",
          "readingFocus": "Lire un accompagnement main gauche"
        },
        "curriculum": {
          "reading": "Lire un accompagnement main gauche",
          "rhythm": "Motifs d’accompagnement",
          "accompaniment": "Renversements + basse/quinte"
        }
      },
      {
        "id": "w22-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Accompagnement",
        "objective": "Assemble motif gauche et phrase droite.",
        "instructions": [
          "Assemble motif gauche et phrase droite.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Accompagnement",
          "objective": "Assemble motif gauche et phrase droite sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Motifs d’accompagnement",
          "accompanimentFocus": "Renversements + basse/quinte",
          "readingFocus": "Lire un accompagnement main gauche"
        },
        "curriculum": {
          "reading": "Lire un accompagnement main gauche",
          "rhythm": "Motifs d’accompagnement",
          "accompaniment": "Renversements + basse/quinte"
        }
      },
      {
        "id": "w22-chant",
        "label": "Morceau / chant de la semaine",
        "title": "To God Be the Glory",
        "objective": "Appliquer la découverte de la semaine (Motifs d’accompagnement ; Renversements + basse/quinte) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire un accompagnement main gauche",
          "rhythm": "Motifs d’accompagnement",
          "accompaniment": "Renversements + basse/quinte"
        },
        "song": {
          "title": "To God Be the Glory",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lecture à vue sur deux portées",
            "Lire les renversements",
            "Lire un accompagnement main gauche",
            "Choisir les positions les plus proches",
            "Renversements : premier renversement",
            "Renversements + basse/quinte"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — To God Be the Glory",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Motifs d’accompagnement",
          "accompanimentFocus": "Renversements + basse/quinte",
          "readingFocus": "Lire un accompagnement main gauche",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire un accompagnement main gauche",
      "rhythm": "Motifs d’accompagnement",
      "accompaniment": "Renversements + basse/quinte"
    }
  },
  {
    "title": "Semaine 23 — Phrasé et respiration",
    "stages": [
      {
        "id": "w23-a1",
        "label": "Découverte",
        "title": "Découvrir les phrases musicales",
        "objective": "Phrasé sur deux portées. Rythme : Respiration et phrasé. Accompagnement : Accompagnement lié et respiré.",
        "instructions": [
          "Lecture : Phrasé sur deux portées.",
          "Rythme : travaille respiration et phrasé.",
          "Main gauche / harmonie : accompagnement lié et respiré.",
          "Repère début, sommet et fin.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir les phrases musicales",
          "objective": "Repère début, sommet et fin.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Respiration et phrasé",
          "accompanimentFocus": "Accompagnement lié et respiré",
          "readingFocus": "Phrasé sur deux portées"
        },
        "curriculum": {
          "reading": "Phrasé sur deux portées",
          "rhythm": "Respiration et phrasé",
          "accompaniment": "Accompagnement lié et respiré"
        }
      },
      {
        "id": "w23-a2",
        "label": "Exercice 1",
        "title": "Lier la phrase",
        "objective": "Évite de détacher chaque note.",
        "instructions": [
          "Évite de détacher chaque note."
        ],
        "practice": {
          "title": "Lier la phrase",
          "objective": "Évite de détacher chaque note.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Respiration et phrasé",
          "accompanimentFocus": "Accompagnement lié et respiré",
          "readingFocus": "Phrasé sur deux portées"
        },
        "curriculum": {
          "reading": "Phrasé sur deux portées",
          "rhythm": "Respiration et phrasé",
          "accompaniment": "Accompagnement lié et respiré"
        }
      },
      {
        "id": "w23-a3",
        "label": "Exercice 2",
        "title": "Respirer entre deux phrases",
        "objective": "Fais une micro-pause entre deux idées.",
        "instructions": [
          "Fais une micro-pause entre deux idées.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Respirer entre deux phrases",
          "objective": "Fais une micro-pause entre deux idées.",
          "hand": "Main gauche",
          "tempo": 54,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Respiration et phrasé",
          "accompanimentFocus": "Accompagnement lié et respiré",
          "readingFocus": "Phrasé sur deux portées"
        },
        "curriculum": {
          "reading": "Phrasé sur deux portées",
          "rhythm": "Respiration et phrasé",
          "accompaniment": "Accompagnement lié et respiré"
        }
      },
      {
        "id": "w23-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Deux phrases",
        "objective": "Fais entendre une respiration musicale.",
        "instructions": [
          "Fais entendre une respiration musicale.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Deux phrases",
          "objective": "Fais entendre une respiration musicale sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Respiration et phrasé",
          "accompanimentFocus": "Accompagnement lié et respiré",
          "readingFocus": "Phrasé sur deux portées"
        },
        "curriculum": {
          "reading": "Phrasé sur deux portées",
          "rhythm": "Respiration et phrasé",
          "accompaniment": "Accompagnement lié et respiré"
        }
      },
      {
        "id": "w23-chant",
        "label": "Morceau / chant de la semaine",
        "title": "I Surrender All",
        "objective": "Appliquer la découverte de la semaine (Respiration et phrasé ; Accompagnement lié et respiré) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Phrasé sur deux portées",
          "rhythm": "Respiration et phrasé",
          "accompaniment": "Accompagnement lié et respiré"
        },
        "song": {
          "title": "I Surrender All",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire les renversements",
            "Lire un accompagnement main gauche",
            "Phrasé sur deux portées",
            "Renversements : premier renversement",
            "Renversements + basse/quinte",
            "Accompagnement lié et respiré"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — I Surrender All",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Respiration et phrasé",
          "accompanimentFocus": "Accompagnement lié et respiré",
          "readingFocus": "Phrasé sur deux portées",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Phrasé sur deux portées",
      "rhythm": "Respiration et phrasé",
      "accompaniment": "Accompagnement lié et respiré"
    }
  },
  {
    "title": "Semaine 24 — Sol majeur et Fa majeur",
    "stages": [
      {
        "id": "w24-a1",
        "label": "Découverte",
        "title": "Découvrir Fa♯ et Si♭",
        "objective": "Altérations : Fa♯ et Si♭. Rythme : Rythmes avec altérations. Accompagnement : Accords dans plusieurs tonalités.",
        "instructions": [
          "Lecture : Altérations : Fa♯ et Si♭.",
          "Rythme : travaille rythmes avec altérations.",
          "Main gauche / harmonie : accords dans plusieurs tonalités.",
          "Repère les premières altérations.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir Fa♯ et Si♭",
          "objective": "Repère les premières altérations.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "G3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "B3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 2,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec altérations",
          "accompanimentFocus": "Accords dans plusieurs tonalités",
          "readingFocus": "Altérations : Fa♯ et Si♭"
        },
        "curriculum": {
          "reading": "Altérations : Fa♯ et Si♭",
          "rhythm": "Rythmes avec altérations",
          "accompaniment": "Accords dans plusieurs tonalités"
        }
      },
      {
        "id": "w24-a2",
        "label": "Exercice 1",
        "title": "Gamme de Sol — fragment",
        "objective": "Joue avec Fa♯.",
        "instructions": [
          "Joue avec Fa♯."
        ],
        "practice": {
          "title": "Gamme de Sol — fragment",
          "objective": "Joue avec Fa♯.",
          "hand": "Main droite",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "D5",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F#5",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec altérations",
          "accompanimentFocus": "Accords dans plusieurs tonalités",
          "readingFocus": "Altérations : Fa♯ et Si♭"
        },
        "curriculum": {
          "reading": "Altérations : Fa♯ et Si♭",
          "rhythm": "Rythmes avec altérations",
          "accompaniment": "Accords dans plusieurs tonalités"
        }
      },
      {
        "id": "w24-a3",
        "label": "Exercice 2",
        "title": "Gamme de Fa — fragment",
        "objective": "Joue avec Si♭.",
        "instructions": [
          "Joue avec Si♭.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Gamme de Fa — fragment",
          "objective": "Joue avec Si♭.",
          "hand": "Main gauche",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "Bb3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec altérations",
          "accompanimentFocus": "Accords dans plusieurs tonalités",
          "readingFocus": "Altérations : Fa♯ et Si♭"
        },
        "curriculum": {
          "reading": "Altérations : Fa♯ et Si♭",
          "rhythm": "Rythmes avec altérations",
          "accompaniment": "Accords dans plusieurs tonalités"
        }
      },
      {
        "id": "w24-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Deux tonalités",
        "objective": "Entends la couleur différente des deux tonalités.",
        "instructions": [
          "Entends la couleur différente des deux tonalités.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Deux tonalités",
          "objective": "Entends la couleur différente des deux tonalités sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "C5",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "Bb3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec altérations",
          "accompanimentFocus": "Accords dans plusieurs tonalités",
          "readingFocus": "Altérations : Fa♯ et Si♭"
        },
        "curriculum": {
          "reading": "Altérations : Fa♯ et Si♭",
          "rhythm": "Rythmes avec altérations",
          "accompaniment": "Accords dans plusieurs tonalités"
        }
      },
      {
        "id": "w24-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Nothing but the Blood",
        "objective": "Appliquer la découverte de la semaine (Rythmes avec altérations ; Accords dans plusieurs tonalités) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Altérations : Fa♯ et Si♭",
          "rhythm": "Rythmes avec altérations",
          "accompaniment": "Accords dans plusieurs tonalités"
        },
        "song": {
          "title": "Nothing but the Blood",
          "sourceMode": "historique",
          "sourceNote": "Chant historique : utiliser un extrait vérifié et adapté au niveau de la semaine.",
          "requiredSkills": [
            "Lire un accompagnement main gauche",
            "Phrasé sur deux portées",
            "Altérations : Fa♯ et Si♭",
            "Renversements + basse/quinte",
            "Accompagnement lié et respiré",
            "Accords dans plusieurs tonalités"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Nothing but the Blood",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "C5",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "F3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "Bb3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec altérations",
          "accompanimentFocus": "Accords dans plusieurs tonalités",
          "readingFocus": "Altérations : Fa♯ et Si♭",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Altérations : Fa♯ et Si♭",
      "rhythm": "Rythmes avec altérations",
      "accompaniment": "Accords dans plusieurs tonalités"
    }
  },
  {
    "title": "Semaine 25 — Accords mineurs",
    "stages": [
      {
        "id": "w25-a1",
        "label": "Découverte",
        "title": "Découvrir majeur et mineur",
        "objective": "Accords mineurs sur les deux clés. Rythme : Rythmes en accords mineurs. Accompagnement : Accords mineurs.",
        "instructions": [
          "Lecture : Accords mineurs sur les deux clés.",
          "Rythme : travaille rythmes en accords mineurs.",
          "Main gauche / harmonie : accords mineurs.",
          "Compare la tierce majeure et mineure.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir majeur et mineur",
          "objective": "Compare la tierce majeure et mineure.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "A4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "A2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes en accords mineurs",
          "accompanimentFocus": "Accords mineurs",
          "readingFocus": "Accords mineurs sur les deux clés"
        },
        "curriculum": {
          "reading": "Accords mineurs sur les deux clés",
          "rhythm": "Rythmes en accords mineurs",
          "accompaniment": "Accords mineurs"
        }
      },
      {
        "id": "w25-a2",
        "label": "Exercice 1",
        "title": "La mineur",
        "objective": "Joue La Do Mi.",
        "instructions": [
          "Joue La Do Mi."
        ],
        "practice": {
          "title": "La mineur",
          "objective": "Joue La Do Mi.",
          "hand": "Main droite",
          "tempo": 54,
          "mode": "chord",
          "notes": [
            {
              "note": "A4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "E5",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes en accords mineurs",
          "accompanimentFocus": "Accords mineurs",
          "readingFocus": "Accords mineurs sur les deux clés"
        },
        "curriculum": {
          "reading": "Accords mineurs sur les deux clés",
          "rhythm": "Rythmes en accords mineurs",
          "accompaniment": "Accords mineurs"
        }
      },
      {
        "id": "w25-a3",
        "label": "Exercice 2",
        "title": "Ré mineur",
        "objective": "Joue Ré Fa La.",
        "instructions": [
          "Joue Ré Fa La.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Ré mineur",
          "objective": "Joue Ré Fa La.",
          "hand": "Main gauche",
          "tempo": 54,
          "mode": "chord",
          "notes": [
            {
              "note": "D3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes en accords mineurs",
          "accompanimentFocus": "Accords mineurs",
          "readingFocus": "Accords mineurs sur les deux clés"
        },
        "curriculum": {
          "reading": "Accords mineurs sur les deux clés",
          "rhythm": "Rythmes en accords mineurs",
          "accompaniment": "Accords mineurs"
        }
      },
      {
        "id": "w25-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Couleur mineure",
        "objective": "Joue une phrase en La mineur.",
        "instructions": [
          "Joue une phrase en La mineur.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Couleur mineure",
          "objective": "Joue une phrase en La mineur.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "A4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "A2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "A2",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes en accords mineurs",
          "accompanimentFocus": "Accords mineurs",
          "readingFocus": "Accords mineurs sur les deux clés"
        },
        "curriculum": {
          "reading": "Accords mineurs sur les deux clés",
          "rhythm": "Rythmes en accords mineurs",
          "accompaniment": "Accords mineurs"
        }
      },
      {
        "id": "w25-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Ta présence, mes délices",
        "objective": "Appliquer la découverte de la semaine (Rythmes en accords mineurs ; Accords mineurs) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Accords mineurs sur les deux clés",
          "rhythm": "Rythmes en accords mineurs",
          "accompaniment": "Accords mineurs"
        },
        "song": {
          "title": "Ta présence, mes délices",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Phrasé sur deux portées",
            "Altérations : Fa♯ et Si♭",
            "Accords mineurs sur les deux clés",
            "Accompagnement lié et respiré",
            "Accords dans plusieurs tonalités",
            "Accords mineurs"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Ta présence, mes délices",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 54,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "A4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "E5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "C5",
              "finger": 3,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "A2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "A2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "A2",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes en accords mineurs",
          "accompanimentFocus": "Accords mineurs",
          "readingFocus": "Accords mineurs sur les deux clés",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Accords mineurs sur les deux clés",
      "rhythm": "Rythmes en accords mineurs",
      "accompaniment": "Accords mineurs"
    }
  },
  {
    "title": "Semaine 26 — Jouer sans regarder les mains",
    "stages": [
      {
        "id": "w26-a1",
        "label": "Découverte",
        "title": "Découvrir les repères tactiles",
        "objective": "Lire sans regarder le clavier. Rythme : Lecture continue sans regarder les mains. Accompagnement : Basses doubles / octaves avec repères tactiles.",
        "instructions": [
          "Lecture : Lire sans regarder le clavier.",
          "Rythme : travaille lecture continue sans regarder les mains.",
          "Main gauche / harmonie : basses doubles / octaves avec repères tactiles.",
          "Utilise les groupes de touches noires comme repères.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir les repères tactiles",
          "objective": "Utilise les groupes de touches noires comme repères.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture continue sans regarder les mains",
          "accompanimentFocus": "Basses doubles / octaves avec repères tactiles",
          "readingFocus": "Lire sans regarder le clavier"
        },
        "curriculum": {
          "reading": "Lire sans regarder le clavier",
          "rhythm": "Lecture continue sans regarder les mains",
          "accompaniment": "Basses doubles / octaves avec repères tactiles"
        }
      },
      {
        "id": "w26-a2",
        "label": "Exercice 1",
        "title": "Lecture droite sans regarder",
        "objective": "Regarde la portée pendant quatre notes.",
        "instructions": [
          "Regarde la portée pendant quatre notes."
        ],
        "practice": {
          "title": "Lecture droite sans regarder",
          "objective": "Regarde la portée pendant quatre notes.",
          "hand": "Main droite",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture continue sans regarder les mains",
          "accompanimentFocus": "Basses doubles / octaves avec repères tactiles",
          "readingFocus": "Lire sans regarder le clavier"
        },
        "curriculum": {
          "reading": "Lire sans regarder le clavier",
          "rhythm": "Lecture continue sans regarder les mains",
          "accompaniment": "Basses doubles / octaves avec repères tactiles"
        }
      },
      {
        "id": "w26-a3",
        "label": "Exercice 2",
        "title": "Lecture gauche sans regarder",
        "objective": "Garde les yeux sur la clé de fa.",
        "instructions": [
          "Garde les yeux sur la clé de fa.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Lecture gauche sans regarder",
          "objective": "Garde les yeux sur la clé de fa.",
          "hand": "Main gauche",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture continue sans regarder les mains",
          "accompanimentFocus": "Basses doubles / octaves avec repères tactiles",
          "readingFocus": "Lire sans regarder le clavier"
        },
        "curriculum": {
          "reading": "Lire sans regarder le clavier",
          "rhythm": "Lecture continue sans regarder les mains",
          "accompaniment": "Basses doubles / octaves avec repères tactiles"
        }
      },
      {
        "id": "w26-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Regard sur la partition",
        "objective": "Joue une phrase sans regarder chaque touche.",
        "instructions": [
          "Joue une phrase sans regarder chaque touche.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Regard sur la partition",
          "objective": "Joue une phrase sans regarder chaque touche sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture continue sans regarder les mains",
          "accompanimentFocus": "Basses doubles / octaves avec repères tactiles",
          "readingFocus": "Lire sans regarder le clavier"
        },
        "curriculum": {
          "reading": "Lire sans regarder le clavier",
          "rhythm": "Lecture continue sans regarder les mains",
          "accompaniment": "Basses doubles / octaves avec repères tactiles"
        }
      },
      {
        "id": "w26-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Et je chante car tu es bon",
        "objective": "Appliquer la découverte de la semaine (Lecture continue sans regarder les mains ; Basses doubles / octaves avec repères tactiles) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire sans regarder le clavier",
          "rhythm": "Lecture continue sans regarder les mains",
          "accompaniment": "Basses doubles / octaves avec repères tactiles"
        },
        "song": {
          "title": "Et je chante car tu es bon",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Altérations : Fa♯ et Si♭",
            "Accords mineurs sur les deux clés",
            "Lire sans regarder le clavier",
            "Accords dans plusieurs tonalités",
            "Accords mineurs",
            "Basses doubles / octaves avec repères tactiles"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Et je chante car tu es bon",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Lecture continue sans regarder les mains",
          "accompanimentFocus": "Basses doubles / octaves avec repères tactiles",
          "readingFocus": "Lire sans regarder le clavier",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire sans regarder le clavier",
      "rhythm": "Lecture continue sans regarder les mains",
      "accompaniment": "Basses doubles / octaves avec repères tactiles"
    }
  },
  {
    "title": "Semaine 27 — Improvisation pentatonique",
    "stages": [
      {
        "id": "w27-a1",
        "label": "Découverte",
        "title": "Découvrir cinq notes sûres",
        "objective": "Lire une grille simple pour improviser. Rythme : Improvisation sur pulsation. Accompagnement : Accompagnement libre sur grille.",
        "instructions": [
          "Lecture : Lire une grille simple pour improviser.",
          "Rythme : travaille improvisation sur pulsation.",
          "Main gauche / harmonie : accompagnement libre sur grille.",
          "Utilise Do Ré Mi Sol La.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir cinq notes sûres",
          "objective": "Utilise Do Ré Mi Sol La.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 5,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Improvisation sur pulsation",
          "accompanimentFocus": "Accompagnement libre sur grille",
          "readingFocus": "Lire une grille simple pour improviser"
        },
        "curriculum": {
          "reading": "Lire une grille simple pour improviser",
          "rhythm": "Improvisation sur pulsation",
          "accompaniment": "Accompagnement libre sur grille"
        }
      },
      {
        "id": "w27-a2",
        "label": "Exercice 1",
        "title": "Motif 1",
        "objective": "Improvise avec trois notes.",
        "instructions": [
          "Improvise avec trois notes."
        ],
        "practice": {
          "title": "Motif 1",
          "objective": "Improvise avec trois notes.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Improvisation sur pulsation",
          "accompanimentFocus": "Accompagnement libre sur grille",
          "readingFocus": "Lire une grille simple pour improviser"
        },
        "curriculum": {
          "reading": "Lire une grille simple pour improviser",
          "rhythm": "Improvisation sur pulsation",
          "accompaniment": "Accompagnement libre sur grille"
        }
      },
      {
        "id": "w27-a3",
        "label": "Exercice 2",
        "title": "Motif 2",
        "objective": "Change le rythme sans changer les notes.",
        "instructions": [
          "Change le rythme sans changer les notes.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Motif 2",
          "objective": "Change le rythme sans changer les notes.",
          "hand": "Main droite",
          "tempo": 60,
          "mode": "sequence",
          "notes": [
            {
              "note": "A4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Improvisation sur pulsation",
          "accompanimentFocus": "Accompagnement libre sur grille",
          "readingFocus": "Lire une grille simple pour improviser"
        },
        "curriculum": {
          "reading": "Lire une grille simple pour improviser",
          "rhythm": "Improvisation sur pulsation",
          "accompaniment": "Accompagnement libre sur grille"
        }
      },
      {
        "id": "w27-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Improvisation guidée",
        "objective": "Joue librement au-dessus d’une basse Do / Sol.",
        "instructions": [
          "Joue librement au-dessus d’une basse Do / Sol.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Improvisation guidée",
          "objective": "Joue librement au-dessus d’une basse Do / Sol sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Improvisation sur pulsation",
          "accompanimentFocus": "Accompagnement libre sur grille",
          "readingFocus": "Lire une grille simple pour improviser"
        },
        "curriculum": {
          "reading": "Lire une grille simple pour improviser",
          "rhythm": "Improvisation sur pulsation",
          "accompaniment": "Accompagnement libre sur grille"
        }
      },
      {
        "id": "w27-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Venez le célébrer",
        "objective": "Appliquer la découverte de la semaine (Improvisation sur pulsation ; Accompagnement libre sur grille) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lire une grille simple pour improviser",
          "rhythm": "Improvisation sur pulsation",
          "accompaniment": "Accompagnement libre sur grille"
        },
        "song": {
          "title": "Venez le célébrer",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Accords mineurs sur les deux clés",
            "Lire sans regarder le clavier",
            "Lire une grille simple pour improviser",
            "Accords mineurs",
            "Basses doubles / octaves avec repères tactiles",
            "Accompagnement libre sur grille"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Venez le célébrer",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 60,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Improvisation sur pulsation",
          "accompanimentFocus": "Accompagnement libre sur grille",
          "readingFocus": "Lire une grille simple pour improviser",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lire une grille simple pour improviser",
      "rhythm": "Improvisation sur pulsation",
      "accompaniment": "Accompagnement libre sur grille"
    }
  },
  {
    "title": "Semaine 28 — Accords de septième",
    "stages": [
      {
        "id": "w28-a1",
        "label": "Découverte",
        "title": "Découvrir la tension de dominante",
        "objective": "Accords de septième sur portée. Rythme : Rythmes avec accords de 7e. Accompagnement : Accords de septième.",
        "instructions": [
          "Lecture : Accords de septième sur portée.",
          "Rythme : travaille rythmes avec accords de 7e.",
          "Main gauche / harmonie : accords de septième.",
          "Observe Sol7 puis sa résolution vers Do.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir la tension de dominante",
          "objective": "Observe Sol7 puis sa résolution vers Do.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F5",
              "finger": 5,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec accords de 7e",
          "accompanimentFocus": "Accords de septième",
          "readingFocus": "Accords de septième sur portée"
        },
        "curriculum": {
          "reading": "Accords de septième sur portée",
          "rhythm": "Rythmes avec accords de 7e",
          "accompaniment": "Accords de septième"
        }
      },
      {
        "id": "w28-a2",
        "label": "Exercice 1",
        "title": "Sol7",
        "objective": "Joue Sol Si Ré Fa.",
        "instructions": [
          "Joue Sol Si Ré Fa."
        ],
        "practice": {
          "title": "Sol7",
          "objective": "Joue Sol Si Ré Fa.",
          "hand": "Main droite",
          "tempo": 52,
          "mode": "chord",
          "notes": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "F5",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec accords de 7e",
          "accompanimentFocus": "Accords de septième",
          "readingFocus": "Accords de septième sur portée"
        },
        "curriculum": {
          "reading": "Accords de septième sur portée",
          "rhythm": "Rythmes avec accords de 7e",
          "accompaniment": "Accords de septième"
        }
      },
      {
        "id": "w28-a3",
        "label": "Exercice 2",
        "title": "Do majeur",
        "objective": "Résous vers Do Mi Sol.",
        "instructions": [
          "Résous vers Do Mi Sol.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Do majeur",
          "objective": "Résous vers Do Mi Sol.",
          "hand": "Main gauche",
          "tempo": 52,
          "mode": "chord",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec accords de 7e",
          "accompanimentFocus": "Accords de septième",
          "readingFocus": "Accords de septième sur portée"
        },
        "curriculum": {
          "reading": "Accords de septième sur portée",
          "rhythm": "Rythmes avec accords de 7e",
          "accompaniment": "Accords de septième"
        }
      },
      {
        "id": "w28-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Tension / résolution",
        "objective": "Entends clairement le retour vers Do.",
        "instructions": [
          "Entends clairement le retour vers Do.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Tension / résolution",
          "objective": "Entends clairement le retour vers Do sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "F5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E5",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec accords de 7e",
          "accompanimentFocus": "Accords de septième",
          "readingFocus": "Accords de septième sur portée"
        },
        "curriculum": {
          "reading": "Accords de septième sur portée",
          "rhythm": "Rythmes avec accords de 7e",
          "accompaniment": "Accords de septième"
        }
      },
      {
        "id": "w28-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Dieu est une fête aujourd’hui",
        "objective": "Appliquer la découverte de la semaine (Rythmes avec accords de 7e ; Accords de septième) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Accords de septième sur portée",
          "rhythm": "Rythmes avec accords de 7e",
          "accompaniment": "Accords de septième"
        },
        "song": {
          "title": "Dieu est une fête aujourd’hui",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Lire sans regarder le clavier",
            "Lire une grille simple pour improviser",
            "Accords de septième sur portée",
            "Basses doubles / octaves avec repères tactiles",
            "Accompagnement libre sur grille",
            "Accords de septième"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Dieu est une fête aujourd’hui",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "F5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E5",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Rythmes avec accords de 7e",
          "accompanimentFocus": "Accords de septième",
          "readingFocus": "Accords de septième sur portée",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Accords de septième sur portée",
      "rhythm": "Rythmes avec accords de 7e",
      "accompaniment": "Accords de septième"
    }
  },
  {
    "title": "Semaine 29 — Technique et vitesse contrôlée",
    "stages": [
      {
        "id": "w29-a1",
        "label": "Découverte",
        "title": "Découvrir le tempo de travail",
        "objective": "Lecture plus rapide sans perdre la précision. Rythme : Vitesse contrôlée. Accompagnement : Basse + accord + arpège à tempo contrôlé.",
        "instructions": [
          "Lecture : Lecture plus rapide sans perdre la précision.",
          "Rythme : travaille vitesse contrôlée.",
          "Main gauche / harmonie : basse + accord + arpège à tempo contrôlé.",
          "Ne monte le tempo qu’après une exécution propre.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir le tempo de travail",
          "objective": "Ne monte le tempo qu’après une exécution propre.",
          "hand": "Deux mains",
          "tempo": 64,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Vitesse contrôlée",
          "accompanimentFocus": "Basse + accord + arpège à tempo contrôlé",
          "readingFocus": "Lecture plus rapide sans perdre la précision"
        },
        "curriculum": {
          "reading": "Lecture plus rapide sans perdre la précision",
          "rhythm": "Vitesse contrôlée",
          "accompaniment": "Basse + accord + arpège à tempo contrôlé"
        }
      },
      {
        "id": "w29-a2",
        "label": "Exercice 1",
        "title": "Gamme droite à tempo",
        "objective": "Joue proprement avant d’accélérer.",
        "instructions": [
          "Joue proprement avant d’accélérer."
        ],
        "practice": {
          "title": "Gamme droite à tempo",
          "objective": "Joue proprement avant d’accélérer.",
          "hand": "Main droite",
          "tempo": 64,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "A4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Vitesse contrôlée",
          "accompanimentFocus": "Basse + accord + arpège à tempo contrôlé",
          "readingFocus": "Lecture plus rapide sans perdre la précision"
        },
        "curriculum": {
          "reading": "Lecture plus rapide sans perdre la précision",
          "rhythm": "Vitesse contrôlée",
          "accompaniment": "Basse + accord + arpège à tempo contrôlé"
        }
      },
      {
        "id": "w29-a3",
        "label": "Exercice 2",
        "title": "Gamme gauche à tempo",
        "objective": "Garde le même contrôle.",
        "instructions": [
          "Garde le même contrôle.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Gamme gauche à tempo",
          "objective": "Garde le même contrôle.",
          "hand": "Main gauche",
          "tempo": 64,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "D3",
              "finger": 4,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "A3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Vitesse contrôlée",
          "accompanimentFocus": "Basse + accord + arpège à tempo contrôlé",
          "readingFocus": "Lecture plus rapide sans perdre la précision"
        },
        "curriculum": {
          "reading": "Lecture plus rapide sans perdre la précision",
          "rhythm": "Vitesse contrôlée",
          "accompaniment": "Basse + accord + arpège à tempo contrôlé"
        }
      },
      {
        "id": "w29-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Propre avant rapide",
        "objective": "Joue une phrase au tempo choisi sans erreur.",
        "instructions": [
          "Joue une phrase au tempo choisi sans erreur.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Propre avant rapide",
          "objective": "Joue une phrase au tempo choisi sans erreur sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 64,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "B3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Vitesse contrôlée",
          "accompanimentFocus": "Basse + accord + arpège à tempo contrôlé",
          "readingFocus": "Lecture plus rapide sans perdre la précision"
        },
        "curriculum": {
          "reading": "Lecture plus rapide sans perdre la précision",
          "rhythm": "Vitesse contrôlée",
          "accompaniment": "Basse + accord + arpège à tempo contrôlé"
        }
      },
      {
        "id": "w29-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Je chanterai l’Éternel tant que je vivrai",
        "objective": "Appliquer la découverte de la semaine (Vitesse contrôlée ; Basse + accord + arpège à tempo contrôlé) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lecture plus rapide sans perdre la précision",
          "rhythm": "Vitesse contrôlée",
          "accompaniment": "Basse + accord + arpège à tempo contrôlé"
        },
        "song": {
          "title": "Je chanterai l’Éternel tant que je vivrai",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Lire une grille simple pour improviser",
            "Accords de septième sur portée",
            "Lecture plus rapide sans perdre la précision",
            "Accompagnement libre sur grille",
            "Accords de septième",
            "Basse + accord + arpège à tempo contrôlé"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Je chanterai l’Éternel tant que je vivrai",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 64,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "B4",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "B3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "8"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Vitesse contrôlée",
          "accompanimentFocus": "Basse + accord + arpège à tempo contrôlé",
          "readingFocus": "Lecture plus rapide sans perdre la précision",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lecture plus rapide sans perdre la précision",
      "rhythm": "Vitesse contrôlée",
      "accompaniment": "Basse + accord + arpège à tempo contrôlé"
    }
  },
  {
    "title": "Semaine 30 — Construire un morceau intermédiaire",
    "stages": [
      {
        "id": "w30-a1",
        "label": "Découverte",
        "title": "Découvrir une section A",
        "objective": "Lecture d’un morceau intermédiaire. Rythme : Morceau intermédiaire complet. Accompagnement : Arrangement complet : basse, accords et arpèges.",
        "instructions": [
          "Lecture : Lecture d’un morceau intermédiaire.",
          "Rythme : travaille morceau intermédiaire complet.",
          "Main gauche / harmonie : arrangement complet : basse, accords et arpèges.",
          "Travaille une petite section complète.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir une section A",
          "objective": "Travaille une petite section complète.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Morceau intermédiaire complet",
          "accompanimentFocus": "Arrangement complet : basse, accords et arpèges",
          "readingFocus": "Lecture d’un morceau intermédiaire"
        },
        "curriculum": {
          "reading": "Lecture d’un morceau intermédiaire",
          "rhythm": "Morceau intermédiaire complet",
          "accompaniment": "Arrangement complet : basse, accords et arpèges"
        }
      },
      {
        "id": "w30-a2",
        "label": "Exercice 1",
        "title": "Section A — main droite",
        "objective": "Stabilise la mélodie.",
        "instructions": [
          "Stabilise la mélodie."
        ],
        "practice": {
          "title": "Section A — main droite",
          "objective": "Stabilise la mélodie.",
          "hand": "Main droite",
          "tempo": 58,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Morceau intermédiaire complet",
          "accompanimentFocus": "Arrangement complet : basse, accords et arpèges",
          "readingFocus": "Lecture d’un morceau intermédiaire"
        },
        "curriculum": {
          "reading": "Lecture d’un morceau intermédiaire",
          "rhythm": "Morceau intermédiaire complet",
          "accompaniment": "Arrangement complet : basse, accords et arpèges"
        }
      },
      {
        "id": "w30-a3",
        "label": "Exercice 2",
        "title": "Section A — main gauche",
        "objective": "Stabilise l’accompagnement.",
        "instructions": [
          "Stabilise l’accompagnement.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Section A — main gauche",
          "objective": "Stabilise l’accompagnement.",
          "hand": "Main gauche",
          "tempo": 58,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Morceau intermédiaire complet",
          "accompanimentFocus": "Arrangement complet : basse, accords et arpèges",
          "readingFocus": "Lecture d’un morceau intermédiaire"
        },
        "curriculum": {
          "reading": "Lecture d’un morceau intermédiaire",
          "rhythm": "Morceau intermédiaire complet",
          "accompaniment": "Arrangement complet : basse, accords et arpèges"
        }
      },
      {
        "id": "w30-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Section A",
        "objective": "Assemble la section entière.",
        "instructions": [
          "Assemble la section entière.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Section A",
          "objective": "Assemble la section entière.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Morceau intermédiaire complet",
          "accompanimentFocus": "Arrangement complet : basse, accords et arpèges",
          "readingFocus": "Lecture d’un morceau intermédiaire"
        },
        "curriculum": {
          "reading": "Lecture d’un morceau intermédiaire",
          "rhythm": "Morceau intermédiaire complet",
          "accompaniment": "Arrangement complet : basse, accords et arpèges"
        }
      },
      {
        "id": "w30-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Yahweh se manifestera",
        "objective": "Appliquer la découverte de la semaine (Morceau intermédiaire complet ; Arrangement complet : basse, accords et arpèges) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lecture d’un morceau intermédiaire",
          "rhythm": "Morceau intermédiaire complet",
          "accompaniment": "Arrangement complet : basse, accords et arpèges"
        },
        "song": {
          "title": "Yahweh se manifestera",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Accords de septième sur portée",
            "Lecture plus rapide sans perdre la précision",
            "Lecture d’un morceau intermédiaire",
            "Accords de septième",
            "Basse + accord + arpège à tempo contrôlé",
            "Arrangement complet : basse, accords et arpèges"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Yahweh se manifestera",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 58,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Morceau intermédiaire complet",
          "accompanimentFocus": "Arrangement complet : basse, accords et arpèges",
          "readingFocus": "Lecture d’un morceau intermédiaire",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lecture d’un morceau intermédiaire",
      "rhythm": "Morceau intermédiaire complet",
      "accompaniment": "Arrangement complet : basse, accords et arpèges"
    }
  },
  {
    "title": "Semaine 31 — Harmonie et transposition",
    "stages": [
      {
        "id": "w31-a1",
        "label": "Découverte",
        "title": "Découvrir I IV V",
        "objective": "Transposition et accords enrichis. Rythme : Changements de mesure et harmonie. Accompagnement : Accords enrichis : sus2/sus4, maj7, m7.",
        "instructions": [
          "Lecture : Transposition et accords enrichis.",
          "Rythme : travaille changements de mesure et harmonie.",
          "Main gauche / harmonie : accords enrichis : sus2/sus4, maj7, m7.",
          "Repère les fonctions dans une tonalité.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir I IV V",
          "objective": "Repère les fonctions dans une tonalité.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "F4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Changements de mesure et harmonie",
          "accompanimentFocus": "Accords enrichis : sus2/sus4, maj7, m7",
          "readingFocus": "Transposition et accords enrichis"
        },
        "curriculum": {
          "reading": "Transposition et accords enrichis",
          "rhythm": "Changements de mesure et harmonie",
          "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
        }
      },
      {
        "id": "w31-a2",
        "label": "Exercice 1",
        "title": "Fondamentales en Do",
        "objective": "Joue I IV V I.",
        "instructions": [
          "Joue I IV V I."
        ],
        "practice": {
          "title": "Fondamentales en Do",
          "objective": "Joue I IV V I.",
          "hand": "Main gauche",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Changements de mesure et harmonie",
          "accompanimentFocus": "Accords enrichis : sus2/sus4, maj7, m7",
          "readingFocus": "Transposition et accords enrichis"
        },
        "curriculum": {
          "reading": "Transposition et accords enrichis",
          "rhythm": "Changements de mesure et harmonie",
          "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
        }
      },
      {
        "id": "w31-a3",
        "label": "Exercice 2",
        "title": "Transposition en Sol",
        "objective": "Joue Sol Do Ré Sol.",
        "instructions": [
          "Joue Sol Do Ré Sol.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Transposition en Sol",
          "objective": "Joue Sol Do Ré Sol.",
          "hand": "Main droite",
          "tempo": 52,
          "mode": "sequence",
          "notes": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C5",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "G5",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Changements de mesure et harmonie",
          "accompanimentFocus": "Accords enrichis : sus2/sus4, maj7, m7",
          "readingFocus": "Transposition et accords enrichis"
        },
        "curriculum": {
          "reading": "Transposition et accords enrichis",
          "rhythm": "Changements de mesure et harmonie",
          "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
        }
      },
      {
        "id": "w31-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Même idée, autre tonalité",
        "objective": "Entends la même fonction dans une autre hauteur.",
        "instructions": [
          "Entends la même fonction dans une autre hauteur.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Même idée, autre tonalité",
          "objective": "Entends la même fonction dans une autre hauteur sur une phrase plus complète de deux mesures.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E5",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "G3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Changements de mesure et harmonie",
          "accompanimentFocus": "Accords enrichis : sus2/sus4, maj7, m7",
          "readingFocus": "Transposition et accords enrichis"
        },
        "curriculum": {
          "reading": "Transposition et accords enrichis",
          "rhythm": "Changements de mesure et harmonie",
          "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
        }
      },
      {
        "id": "w31-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Nous croyons",
        "objective": "Appliquer la découverte de la semaine (Changements de mesure et harmonie ; Accords enrichis : sus2/sus4, maj7, m7) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Transposition et accords enrichis",
          "rhythm": "Changements de mesure et harmonie",
          "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
        },
        "song": {
          "title": "Nous croyons",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Lecture plus rapide sans perdre la précision",
            "Lecture d’un morceau intermédiaire",
            "Transposition et accords enrichis",
            "Basse + accord + arpège à tempo contrôlé",
            "Arrangement complet : basse, accords et arpèges",
            "Accords enrichis : sus2/sus4, maj7, m7"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Nous croyons",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 52,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G5",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E5",
              "finger": 4,
              "duration": "q"
            },
            {
              "note": "D5",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "B4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "G4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "G3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 5,
              "duration": "h"
            },
            {
              "note": "E3",
              "finger": 3,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "D4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "G3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Changements de mesure et harmonie",
          "accompanimentFocus": "Accords enrichis : sus2/sus4, maj7, m7",
          "readingFocus": "Transposition et accords enrichis",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Transposition et accords enrichis",
      "rhythm": "Changements de mesure et harmonie",
      "accompaniment": "Accords enrichis : sus2/sus4, maj7, m7"
    }
  },
  {
    "title": "Semaine 32 — Projet final",
    "stages": [
      {
        "id": "w32-a1",
        "label": "Découverte",
        "title": "Découvrir la structure finale",
        "objective": "Lecture autonome d’un arrangement complet. Rythme : Projet final : rythmes complets. Accompagnement : Accords enrichis et projet final : 7e, 9e, diminués selon le morceau.",
        "instructions": [
          "Lecture : Lecture autonome d’un arrangement complet.",
          "Rythme : travaille projet final : rythmes complets.",
          "Main gauche / harmonie : accords enrichis et projet final : 7e, 9e, diminués selon le morceau.",
          "Lis l’ensemble avant de travailler les détails.",
          "Lis la clé de sol et la clé de fa avant de jouer.",
          "Repère les doigtés utiles."
        ],
        "practice": {
          "title": "Découvrir la structure finale",
          "objective": "Lis l’ensemble avant de travailler les détails.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "C5",
              "finger": 5,
              "duration": "h"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "h"
            }
          ],
          "staff": "grand",
          "kind": "discovery",
          "timeSignature": "4/4",
          "rhythmFocus": "Projet final : rythmes complets",
          "accompanimentFocus": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau",
          "readingFocus": "Lecture autonome d’un arrangement complet"
        },
        "curriculum": {
          "reading": "Lecture autonome d’un arrangement complet",
          "rhythm": "Projet final : rythmes complets",
          "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
        }
      },
      {
        "id": "w32-a2",
        "label": "Exercice 1",
        "title": "Répétition main droite",
        "objective": "Joue la ligne sans interruption.",
        "instructions": [
          "Joue la ligne sans interruption."
        ],
        "practice": {
          "title": "Répétition main droite",
          "objective": "Joue la ligne sans interruption.",
          "hand": "Main droite",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "staff": "treble",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Projet final : rythmes complets",
          "accompanimentFocus": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau",
          "readingFocus": "Lecture autonome d’un arrangement complet"
        },
        "curriculum": {
          "reading": "Lecture autonome d’un arrangement complet",
          "rhythm": "Projet final : rythmes complets",
          "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
        }
      },
      {
        "id": "w32-a3",
        "label": "Exercice 2",
        "title": "Répétition main gauche",
        "objective": "Joue l’accompagnement sans interruption.",
        "instructions": [
          "Joue l’accompagnement sans interruption.",
          "Rejoue les deux petits exercices sans t’arrêter."
        ],
        "practice": {
          "title": "Répétition main gauche",
          "objective": "Joue l’accompagnement sans interruption.",
          "hand": "Main gauche",
          "tempo": 56,
          "mode": "sequence",
          "notes": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "bass",
          "kind": "exercise",
          "timeSignature": "4/4",
          "rhythmFocus": "Projet final : rythmes complets",
          "accompanimentFocus": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau",
          "readingFocus": "Lecture autonome d’un arrangement complet"
        },
        "curriculum": {
          "reading": "Lecture autonome d’un arrangement complet",
          "rhythm": "Projet final : rythmes complets",
          "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
        }
      },
      {
        "id": "w32-a4",
        "label": "Mélodie finale",
        "title": "Mélodie finale — Projet complet",
        "objective": "Interprète une pièce courte avec les deux mains.",
        "instructions": [
          "Interprète une pièce courte avec les deux mains.",
          "Travaille les mains séparées si nécessaire.",
          "Joue la mélodie finale de la semaine."
        ],
        "practice": {
          "title": "Mélodie finale — Projet complet",
          "objective": "Interprète une pièce courte avec les deux mains.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "melody",
          "timeSignature": "4/4",
          "rhythmFocus": "Projet final : rythmes complets",
          "accompanimentFocus": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau",
          "readingFocus": "Lecture autonome d’un arrangement complet"
        },
        "curriculum": {
          "reading": "Lecture autonome d’un arrangement complet",
          "rhythm": "Projet final : rythmes complets",
          "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
        }
      },
      {
        "id": "w32-chant",
        "label": "Morceau / chant de la semaine",
        "title": "Oh ! viens et vois",
        "objective": "Appliquer la découverte de la semaine (Projet final : rythmes complets ; Accords enrichis et projet final : 7e, 9e, diminués selon le morceau) et réutiliser les acquis précédents.",
        "instructions": [
          "Travaille d’abord la préparation cumulative affichée ci-dessous.",
          "Active Aide lecture et Aide doigté au premier passage.",
          "Travaille la main droite seule.",
          "Travaille la main gauche seule avec l’accompagnement de la semaine.",
          "Assemble lentement les deux mains.",
          "Masque progressivement les aides.",
          "Termine par l’extrait réel du morceau ou du chant."
        ],
        "curriculum": {
          "reading": "Lecture autonome d’un arrangement complet",
          "rhythm": "Projet final : rythmes complets",
          "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
        },
        "song": {
          "title": "Oh ! viens et vois",
          "sourceMode": "partition_fournie",
          "sourceNote": "Partition fournie dans la conversation : utiliser l’extrait adapté à cette semaine. L’exercice préparatoire ci-dessous travaille la technique avant le vrai extrait.",
          "requiredSkills": [
            "Lecture d’un morceau intermédiaire",
            "Transposition et accords enrichis",
            "Lecture autonome d’un arrangement complet",
            "Arrangement complet : basse, accords et arpèges",
            "Accords enrichis : sus2/sus4, maj7, m7",
            "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
          ],
          "usesCurrentDiscovery": true,
          "uniqueForWeek": true
        },
        "practice": {
          "title": "Préparation cumulative — Oh ! viens et vois",
          "objective": "Préparer le morceau en réutilisant la notion de la semaine et tous les acquis précédents.",
          "hand": "Deux mains",
          "tempo": 56,
          "mode": "two-hand",
          "rightHand": [
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "8"
            },
            {
              "note": "A4",
              "finger": 4,
              "duration": "h"
            },
            {
              "note": "G4",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "E4",
              "finger": 3,
              "duration": "8"
            },
            {
              "note": "D4",
              "finger": 2,
              "duration": "q"
            },
            {
              "note": "C4",
              "finger": 1,
              "duration": "q"
            }
          ],
          "leftHand": [
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            },
            {
              "note": "G2",
              "finger": 1,
              "duration": "8"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "h"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "qd"
            },
            {
              "note": "F3",
              "finger": 2,
              "duration": "8"
            },
            {
              "note": "G3",
              "finger": 1,
              "duration": "q"
            },
            {
              "note": "C3",
              "finger": 5,
              "duration": "q"
            }
          ],
          "staff": "grand",
          "kind": "song-preparation",
          "timeSignature": "4/4",
          "rhythmFocus": "Projet final : rythmes complets",
          "accompanimentFocus": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau",
          "readingFocus": "Lecture autonome d’un arrangement complet",
          "songPreparationOnly": true
        }
      }
    ],
    "curriculum": {
      "reading": "Lecture autonome d’un arrangement complet",
      "rhythm": "Projet final : rythmes complets",
      "accompaniment": "Accords enrichis et projet final : 7e, 9e, diminués selon le morceau"
    }
  }
];

export function getPianoTrainingWeek(index) {
  return pianoTrainingWeeks[Math.max(0, Math.min(index, pianoTrainingWeeks.length - 1))];
}

export function getPianoStage(weekIndex, stageIndex) {
  const week = getPianoTrainingWeek(weekIndex);
  return week.stages[Math.max(0, Math.min(stageIndex, week.stages.length - 1))];
}
