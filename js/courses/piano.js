import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "32 semaines progressives. Chaque semaine contient 5 étapes avec partition complète, rythmes réels, deux mains indépendantes et une pièce finale complète ou une étude clairement identifiée avant une partition fournie.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages
  ])
};
