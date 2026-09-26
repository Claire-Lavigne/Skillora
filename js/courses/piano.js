import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "Chaque semaine travaille trois axes en parallèle : lecture sur clé de sol et clé de fa, rythme, et accompagnement/harmonie. La semaine se termine par un morceau ou un chant différent qui réutilise la découverte du jour et les acquis précédents.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages
  ])
};
