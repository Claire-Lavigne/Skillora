import { createPianoKeyboard, noteLabelFr } from "./piano-keyboard.js";
import { preparePiano, playNote, playChord, playTimeline, stopPlayback, pianoSoundCredits } from "./audio-player.js";
import { connectMidi } from "./midi-input.js";
import { renderScore } from "./score-renderer.js";
import { timelineMoments, timelineNotes, timelineEventRows, eventPitches } from "./music-model.js";

function prettyMoment(moment) {
  if (!moment) return "—";
  if (moment.countIn) return `Compte : ${moment.count}`;
  const notes = moment.notes || [];
  if (!notes.length) return "Silence — continue de compter";
  return notes.map(n => `${noteLabelFr(n)} (${n})`).join(" + ");
}

function fingersForMoment(moment) {
  if (!moment?.events) return "";
  const parts = [];
  for (const staff of ["treble","bass"]) {
    const fingers = moment.events
      .filter(row => row.staff === staff)
      .flatMap(row => row.event.type === "chord" ? (row.event.fingers || []) : [row.event.finger].filter(Boolean));
    if (fingers.length) parts.push(`${staff === "treble" ? "MD" : "MG"} · ${fingers.join(" - ")}`);
  }
  return parts.join(" · ");
}

export function mountPianoStageTrainer(container, stage) {
  const activity = stage.practice;
  if (!activity?.timeline) {
    container.innerHTML = '<div class="score-fallback"><strong>Cette étape utilise encore l’ancien moteur.</strong><br><span>Les semaines sont migrées par blocs de quatre afin de préserver la qualité musicale.</span></div>';
    return { destroy(){ container.innerHTML=""; } };
  }

  container.innerHTML = `
    <div class="piano-stage-tools">
      <div class="trainer-learning-focus">
        <span><strong>Lecture</strong>${stage.curriculum?.reading || activity.readingFocus || "—"}</span>
        <span><strong>Rythme</strong>${stage.curriculum?.rhythm || activity.rhythmFocus || "—"}</span>
        <span><strong>Accompagnement</strong>${stage.curriculum?.accompaniment || activity.accompanimentFocus || "—"}</span>
      </div>

      <div class="trainer-focus" aria-live="polite">
        <div><span class="trainer-focus__label">À jouer maintenant</span><strong class="trainer-current">—</strong><span class="trainer-finger"></span></div>
        <div class="trainer-focus__actions"><button class="trainer-prev" type="button">← Précédent</button><button class="trainer-next" type="button">Suivant →</button></div>
      </div>

      <div class="trainer-score-panel">
        <div class="trainer-section-title trainer-score-title">
          <div><strong>Partition complète de l’exercice</strong><span>Les silences et les durées font partie de l’exercice.</span></div>
          <div class="score-help-controls">
            <button type="button" class="score-help-toggle score-help-notes" aria-pressed="false">Aide lecture</button>
            <button type="button" class="score-help-toggle score-help-fingers" aria-pressed="false">Aide doigté</button>
          </div>
        </div>
        <div class="trainer-score"></div>
      </div>

      <div class="trainer-keyboard-panel"><div class="trainer-section-title"><strong>Clavier</strong><span>Toute la tessiture de l’exercice reste visible.</span></div><div class="trainer-keyboard-slot"></div></div>

      <div class="trainer-demo-panel">
        <div class="trainer-section-title"><strong>Démonstration</strong><span class="trainer-audio-status">Choisis les mains et la vitesse.</span></div>
        <div class="trainer-demo-settings">
          <label>Mains <select class="trainer-hands"><option value="both">Deux mains</option><option value="right">Main droite</option><option value="left">Main gauche</option></select></label>
          <label>Vitesse <select class="trainer-speed"><option value="0.5">50 %</option><option value="0.75">75 %</option><option value="1" selected>100 %</option></select></label>
        </div>
        <div class="trainer-demo-actions"><button class="trainer-listen" type="button">♪ Écouter l’étape</button><button class="trainer-play-all" type="button">▶ Démo avec compte</button><button class="trainer-stop" type="button">■ Arrêter</button></div>
      </div>

      <details class="trainer-midi-panel trainer-midi-details"><summary>Vérifier avec un piano numérique MIDI (optionnel)</summary><div class="trainer-midi-row"><button type="button" class="trainer-midi">🎹 Connecter mon piano MIDI</button><span class="trainer-midi-status">Tu peux faire l’exercice sans MIDI.</span></div></details>
      <p class="trainer-audio-credit">Son : ${pianoSoundCredits.instrument}, échantillons d’${pianoSoundCredits.author} (${pianoSoundCredits.license}).</p>
    </div>`;

  const score = container.querySelector('.trainer-score');
  const current = container.querySelector('.trainer-current');
  const finger = container.querySelector('.trainer-finger');
  const audioStatus = container.querySelector('.trainer-audio-status');
  const midiStatus = container.querySelector('.trainer-midi-status');
  const handsSelect = container.querySelector('.trainer-hands');
  const speedSelect = container.querySelector('.trainer-speed');
  const playAllButton = container.querySelector('.trainer-play-all');

  const keyboard = createPianoKeyboard(container.querySelector('.trainer-keyboard-slot'), { notes:timelineNotes(activity.timeline), minWhiteKeys:7 });
  let stepIndex = 0;
  let showNoteNames = false;
  let showFingers = false;
  let midiConnection = null;

  const allMoments = () => timelineMoments(activity.timeline);
  const currentMoment = () => allMoments()[Math.max(0,Math.min(stepIndex, allMoments().length-1))];

  async function refreshScore(){
    await renderScore(score, activity, { showNoteNames, showFingers, currentStep:stepIndex });
  }

  function renderCurrent(message=''){
    const moment = currentMoment();
    current.textContent = message || prettyMoment(moment);
    finger.textContent = fingersForMoment(moment);
    keyboard.highlight(moment?.notes || [], moment?.notes || []);
    refreshScore();
  }

  container.querySelector('.trainer-prev').addEventListener('click',()=>{ stopPlayback(); stepIndex=Math.max(0,stepIndex-1); renderCurrent(); });
  container.querySelector('.trainer-next').addEventListener('click',()=>{ stopPlayback(); stepIndex=Math.min(allMoments().length-1,stepIndex+1); renderCurrent(); });

  container.querySelector('.trainer-listen').addEventListener('click', async()=>{
    const m=currentMoment(); const notes=m?.notes||[];
    if(!notes.length){ audioStatus.textContent='C’est un silence : compte sans jouer.'; return; }
    keyboard.animate(notes,700);
    try { if(notes.length>1) await playChord(notes); else await playNote(notes[0]); audioStatus.textContent='À toi.'; }
    catch(_){ audioStatus.textContent='Impossible de charger le piano acoustique.'; }
  });

  playAllButton.addEventListener('click', async()=>{
    stopPlayback(); playAllButton.disabled=true; audioStatus.textContent='Préparation du piano…';
    const ready=await preparePiano(); if(!ready.ok){ playAllButton.disabled=false; audioStatus.textContent=ready.message; return; }
    const hand=handsSelect.value; const speed=Number(speedSelect.value)||1;
    const rows=timelineEventRows(activity.timeline).filter(row=> hand==='both' || (hand==='right'&&row.staff==='treble') || (hand==='left'&&row.staff==='bass'));
    const moments=timelineMoments(activity.timeline,{hand});
    try{
      await playTimeline(rows, activity.tempo||60, {
        speed,
        countInBeats:Number((activity.timeline.timeSignature||'4/4').split('/')[0])||4,
        onStep:(moment,index)=>{
          if(moment.countIn){ current.textContent=`Compte : ${moment.count}`; finger.textContent=''; keyboard.clearPlaying(); return; }
          const m=moments[index]; if(!m) return;
          const global=allMoments().findIndex(x=>Math.abs(x.startBeat-m.startBeat)<0.0001);
          if(global>=0) stepIndex=global;
          current.textContent=prettyMoment({...m,notes:m.notes}); finger.textContent=fingersForMoment(m);
          keyboard.highlight(m.notes,m.notes); keyboard.animate(m.notes,0,true);
        },
        onDone:()=>{ keyboard.clearPlaying(); playAllButton.disabled=false; audioStatus.textContent='Démonstration terminée. À toi de jouer.'; renderCurrent(); }
      });
    }catch(_){ playAllButton.disabled=false; audioStatus.textContent='La démonstration a été interrompue.'; }
  });

  container.querySelector('.trainer-stop').addEventListener('click',()=>{ stopPlayback(); keyboard.clearPlaying(); playAllButton.disabled=false; audioStatus.textContent='Démonstration arrêtée.'; renderCurrent(); });

  const bNotes=container.querySelector('.score-help-notes'); const bFingers=container.querySelector('.score-help-fingers');
  bNotes.addEventListener('click',()=>{ showNoteNames=!showNoteNames; bNotes.classList.toggle('is-active',showNoteNames); bNotes.setAttribute('aria-pressed',String(showNoteNames)); refreshScore(); });
  bFingers.addEventListener('click',()=>{ showFingers=!showFingers; bFingers.classList.toggle('is-active',showFingers); bFingers.setAttribute('aria-pressed',String(showFingers)); refreshScore(); });

  container.querySelector('.trainer-midi').addEventListener('click',async()=>{
    if(midiConnection?.disconnect) midiConnection.disconnect(); midiStatus.textContent='Recherche du piano MIDI…';
    midiConnection=await connectMidi((playedNote,velocity,deviceName)=>{
      const target=currentMoment()?.notes||[]; keyboard.animate([playedNote],280);
      if(target.includes(playedNote)) midiStatus.textContent=`✅ ${noteLabelFr(playedNote)} correct — ${deviceName}`;
      else midiStatus.textContent=`❌ ${noteLabelFr(playedNote)}. Attendu : ${target.length?target.map(noteLabelFr).join(' + '):'silence'}.`;
    }); midiStatus.textContent=midiConnection.message;
  });

  renderCurrent();
  return { destroy(){ stopPlayback(); if(midiConnection?.disconnect)midiConnection.disconnect(); container.innerHTML=''; } };
}
