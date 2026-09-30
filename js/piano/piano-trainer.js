import { createPianoKeyboard, noteLabelFr } from "./piano-keyboard.js";
import { preparePiano, playTimeline, stopPlayback } from "./audio-player.js";
import { connectMidi } from "./midi-input.js";
import { renderScore, setScoreActiveEvents, clearScoreActiveEvents } from "./score-renderer.js?v=20260930-final";
import { timelineMoments, timelineNotes, timelineEventRows } from "./music-model.js";

function prettyMoment(moment) {
  if (!moment) return "—";
  if (moment.countIn) return `Compte : ${moment.count}`;
  const notes = moment.notes || [];
  if (!notes.length) return "Silence — continue de compter";
  return notes.map(n => `${noteLabelFr(n)} (${n})`).join(" + ");
}


export function mountPianoStageTrainer(container, stage) {
  const activity = stage.practice;
  if (!activity?.timeline) {
    container.innerHTML = '<div class="score-fallback"><strong>Cette étape utilise encore l’ancien moteur.</strong><br><span>Les semaines sont migrées par blocs de quatre afin de préserver la qualité musicale.</span></div>';
    return { destroy(){ container.innerHTML=""; } };
  }

  const isCompleteTranscription = activity?.transcriptionType === "complete-from-supplied-score" || stage.song?.interactiveFidelity === "transcription-complete";
  const scoreHeading = "Partition";

  container.innerHTML = `
    <div class="piano-stage-tools">
      <div class="trainer-sr-status" role="status" aria-live="polite" aria-atomic="true"></div>

      <div class="trainer-score-panel">
        <div class="trainer-section-title trainer-score-title">
          <div>
            <strong>${scoreHeading}</strong>
            ${stage.practice?.sourceMeasures ? `<span>Extrait ${stage.practice.sourceMeasures}</span>` : ''}
          </div>
          <div class="score-help-controls">
            <button type="button" class="score-help-toggle score-help-notes" aria-pressed="false">Aide lecture</button>
            <button type="button" class="score-help-toggle score-help-fingers" aria-pressed="false">Aide doigté</button>
          </div>
        </div>
        <div class="trainer-score"></div>
      </div>

      <div class="trainer-keyboard-panel"><div class="trainer-section-title"><strong>Clavier</strong></div><div class="trainer-keyboard-slot"></div></div>

      <div class="trainer-demo-panel">
        <div class="trainer-section-title"><strong>Exercice complet</strong><span class="trainer-audio-status">Choisis les mains, la vitesse et le métronome.</span></div>
        <div class="trainer-demo-settings">
          <label>Mains <select class="trainer-hands"><option value="both">Deux mains</option><option value="right">Main droite</option><option value="left">Main gauche</option></select></label>
          <label>Vitesse <select class="trainer-speed"><option value="0.5">50 %</option><option value="0.75">75 %</option><option value="1" selected>100 %</option></select></label>
          <label class="trainer-metronome-toggle"><input type="checkbox" class="trainer-metronome"> Métronome</label>
        </div>
        <div class="trainer-demo-actions"><button class="trainer-play-all" type="button">▶ Écouter tout l’exercice</button><button class="trainer-stop" type="button">■ Arrêter</button></div>
      </div>

      <details class="trainer-midi-panel trainer-midi-details"><summary>Vérifier avec un piano numérique MIDI (optionnel)</summary><div class="trainer-midi-row"><button type="button" class="trainer-midi">🎹 Connecter mon piano MIDI</button><span class="trainer-midi-status">Tu peux faire l’exercice sans MIDI.</span></div></details>
    </div>`;

  container.querySelectorAll('.trainer-current,.trainer-current-card,.trainer-current-panel,.trainer-step-nav').forEach(el=>el.remove());
  const score = container.querySelector('.trainer-score');
  const liveStatus = container.querySelector('.trainer-sr-status');
  const audioStatus = container.querySelector('.trainer-audio-status');
  const midiStatus = container.querySelector('.trainer-midi-status');
  const handsSelect = container.querySelector('.trainer-hands');
  const speedSelect = container.querySelector('.trainer-speed');
  const metronomeInput = container.querySelector('.trainer-metronome');
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
    liveStatus.textContent = message || prettyMoment(moment);
    keyboard.clearPlaying();
    keyboard.highlight(moment?.notes || [], moment?.notes || []);
    clearScoreActiveEvents(score);
    refreshScore();
  }

  playAllButton.addEventListener('click', async()=>{
    stopPlayback(); playAllButton.disabled=true; audioStatus.textContent='Préparation du piano…';
    const ready=await preparePiano(); if(!ready.ok){ playAllButton.disabled=false; audioStatus.textContent=ready.message; return; }
    const hand=handsSelect.value; const speed=Number(speedSelect.value)||1;
    const rows=timelineEventRows(activity.timeline).filter(row=> hand==='both' || row.hand===hand);
    const moments=timelineMoments(activity.timeline,{hand});
    const countInBeats=Number((activity.timeline.timeSignature||'4/4').split('/')[0])||4;
    try{
      await playTimeline(rows, activity.tempo||60, {
        speed,
        countInBeats,
        metronome: metronomeInput.checked,
        timeSignature: activity.timeline.timeSignature || '4/4',
        onStep:(moment,index)=>{
          if(moment.countIn){
            liveStatus.textContent=`Compte : ${moment.count}`;
            clearScoreActiveEvents(score);
            return;
          }

          const m=moments[index];
          if(!m) return;

          const global=allMoments().findIndex(
            x=>Math.abs(x.startBeat-m.startBeat)<0.0001
          );
          if(global>=0) stepIndex=global;

          liveStatus.textContent=prettyMoment({...m,notes:m.notes});
          const attackNotes = (m.events || [])
            .filter(row => !row.event?.tieFromPrevious)
            .flatMap(row => row.event?.type === 'chord' ? (row.event.pitches || []) : [row.event?.pitch].filter(Boolean));
          if (attackNotes.length) keyboard.retrigger(attackNotes, 55);
        },
        onVisualState:(state)=>{
          const active=state.activeNotes||[];
          const activeEventIds=(state.activeEvents||[]).map(row=>row.id);

          keyboard.highlight(active,active);
          keyboard.setPlaying(active);

          if (state.countIn) clearScoreActiveEvents(score);
          else setScoreActiveEvents(score, activeEventIds);
        },
        onDone:()=>{
          keyboard.clearPlaying();
          clearScoreActiveEvents(score);
          playAllButton.disabled=false;
          audioStatus.textContent='Démonstration terminée. À toi de jouer.';
          renderCurrent();
        }
      });
    }catch(error){
      console.error("Erreur démonstration piano :", error);
      keyboard.clearPlaying();
      clearScoreActiveEvents(score);
      playAllButton.disabled=false;
      audioStatus.textContent='La démonstration a été interrompue. Consulte la console pour le détail.';
    }
  });

  container.querySelector('.trainer-stop').addEventListener('click',()=>{
    stopPlayback();
    keyboard.clearPlaying();
    clearScoreActiveEvents(score);
    playAllButton.disabled=false;
    audioStatus.textContent='Démonstration arrêtée.';
    const moment=currentMoment();
    liveStatus.textContent=prettyMoment(moment);
    keyboard.highlight(moment?.notes || [], moment?.notes || []);
  });

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
