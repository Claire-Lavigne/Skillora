import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "Chaque semaine suit le même parcours : découverte, petits exercices, mélodie pédagogique, puis un Chant de la semaine différent. Le chant final réutilise la notion du jour et tous les acquis précédents. Pour les chants contemporains, Skillora utilise une partition autorisée ou fournie par l’utilisateur.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages
  ])
};
