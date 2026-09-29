import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js";

function buildWeekMeta(week) {
  const curriculum = week.curriculum || {};
  const songStage = (week.stages || []).find(stage => stage?.song?.title);
  const lessonObjectives = Array.isArray(week?.pedagogy?.objectives)
    ? [...week.pedagogy.objectives]
    : [];

  if (songStage?.song?.title) {
    lessonObjectives.push(`Application : jouer « ${songStage.song.title} »`);
  }

  return {
    curriculum,
    lessonObjectives,
    lessonGoalTitle: 'Objectifs de la semaine',
    lessonGoalSummary: lessonObjectives.join(' · '),
    songTitle: songStage?.song?.title || '',
    prerequisites: week?.pedagogy?.prerequisites || '',
    newConcepts: week?.pedagogy?.newConcepts || ''
  };
}

export const pianoCourse = {
  id: "piano",
  title: "Piano",
  status: "available",
  description: "Du niveau débutant au niveau avancé : lecture en clé de sol et clé de fa dès le départ, coordination des deux mains, rythme, accords, gammes, pédale, harmonie et interprétation.",
  intro: "32 semaines progressives. Chaque semaine contient 5 étapes avec partition complète, rythmes réels, deux mains indépendantes et une pièce finale complète ou une étude clairement identifiée avant une partition fournie.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages,
    buildWeekMeta(week)
  ])
};
