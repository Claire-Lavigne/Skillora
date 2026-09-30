import { pianoTrainingWeeks } from "../piano/exercises/piano-exercises.js?v=20260930-final";

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
  intro: "32 semaines progressives. Chaque semaine contient des étapes courtes sur portées customisées : lecture, technique, préparation par phrases et morceau. Les partitions fournies restent archivées comme sources de vérification.",
  weeks: pianoTrainingWeeks.map(week => [
    week.title,
    week.stages,
    buildWeekMeta(week)
  ])
};
