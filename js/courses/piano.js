import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "Chaque semaine suit le même parcours : découverte, petits exercices, mélodie pédagogique, puis Chant de la semaine. Le chant final applique directement les acquis de la leçon avec clé de sol, clé de fa, doigtés et accompagnement progressif.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages
  ])
};
