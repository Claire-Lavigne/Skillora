import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "Chaque semaine suit le même parcours : découverte d’une notion, plusieurs petits exercices guidés, puis une mélodie finale. Chaque étape contient directement la consigne, la portée, le clavier, la démonstration et la séquence correspondante.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages
  ])
};
