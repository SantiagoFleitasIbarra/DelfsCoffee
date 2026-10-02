'use strict';
// Keep the official player visible and independent of scene rerenders.
const SONG_ID='VwR3LBbL6Jk';
let songPlayer=null,songSession=0,songLoader=null,songTimeout=null;
function musicStatus(message){const label=document.querySelector('#music-status');if(label)label.textContent=message}
function closeSoundtrack(){songSession++;clearTimeout(songTimeout);if(songPlayer){try{songPlayer.destroy()}catch{}songPlayer=null}document.querySelector('#music-root').replaceChildren();document.body.classList.remove('music-open');state.sound=false;clearInterval(musicTimer);musicTimer=null}
function loadSongAPI(){
 if(window.YT?.Player)return Promise.resolve();
 if(songLoader)return songLoader;
 songLoader=new Promise((resolve,reject)=>{
  const previous=window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady=()=>{if(previous)previous();resolve()};
  const tag=document.createElement('script');tag.src='https://www.youtube.com/iframe_api';
  tag.onerror=()=>{songLoader=null;tag.remove();reject(new Error('YouTube no está disponible'))};
  document.head.appendChild(tag);
 });return songLoader;
}
toggleSound=function(){
 if(document.querySelector('#music-root').childElementCount){closeSoundtrack();return}
 clearInterval(musicTimer);musicTimer=null;state.sound=false;
 const session=++songSession;
 const embedParams=new URLSearchParams({enablejsapi:'1',playsinline:'1',controls:'1',loop:'1',playlist:SONG_ID,autoplay:'1',...(/^https?:$/.test(location.protocol)?{origin:location.origin}:{})});
 document.body.classList.add('music-open');
 document.querySelector('#music-root').innerHTML=`<aside class="music-dock" aria-label="Música del café"><div class="music-heading"><div><span class="eyebrow">LA MÚSICA DEL CAFÉ</span><strong>Vintage Bakery</strong><small>Solace Crossing · YouTube</small></div><button type="button" id="close-music" aria-label="Cerrar y detener música">×</button></div><iframe id="cafe-youtube-player" title="Vintage Bakery — Solace Crossing" width="320" height="200" src="https://www.youtube.com/embed/${SONG_ID}?${embedParams}" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p id="music-status" role="status">Conectando con YouTube…</p><a href="https://www.youtube.com/watch?v=${SONG_ID}" target="_blank" rel="noopener noreferrer">Abrir canción en YouTube ↗</a></aside>`;
 document.querySelector('#close-music').addEventListener('click',closeSoundtrack);
 songTimeout=setTimeout(()=>musicStatus('Si no carga, comprobá la conexión o abrí la canción en YouTube.'),15000);
 loadSongAPI().then(()=>{
  if(session!==songSession)return;
  songPlayer=new YT.Player('cafe-youtube-player',{
   width:320,height:200,videoId:SONG_ID,
   playerVars:{playsinline:1,controls:1,loop:1,playlist:SONG_ID,...(/^https?:$/.test(location.protocol)?{origin:location.origin}:{})},
   events:{
    onReady:event=>{if(session!==songSession)return;clearTimeout(songTimeout);event.target.setVolume(25);musicStatus('Dale a ▶ si la música no comienza sola.');event.target.playVideo()},
    onStateChange:event=>{if(session!==songSession)return;state.sound=event.data===1;musicStatus(event.data===1?'Sonando · ajustá el volumen en el reproductor.':event.data===2?'En pausa.':'Dale a ▶ para escuchar la canción.')},
    onAutoplayBlocked:()=>{if(session===songSession)musicStatus('Tocá ▶ en el reproductor para empezar.')},
    onError:()=>{if(session!==songSession)return;clearTimeout(songTimeout);state.sound=false;musicStatus('YouTube no pudo reproducirla aquí. Podés abrir la canción con el enlace de abajo.')}
   }
  });
 }).catch(()=>{clearTimeout(songTimeout);if(session===songSession)musicStatus('Usá ▶ y el volumen del reproductor. Si no carga, abrí la canción en YouTube.')});
};
