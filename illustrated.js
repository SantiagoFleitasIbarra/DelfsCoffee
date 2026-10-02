'use strict';
// The indices remain stable so every existing scene uses the same illustrated cast.
sprite=function(index,cls='',name=''){
 const group=index<4?'delfi':index<9?'customers':'pets';
 const local=index<4?index:index<9?index-4:index-9,cols=group==='delfi'?2:3;
 return `<span class="actor-sprite illustrated-sprite art-${group} ${cls}" data-sprite="${index}" style="--col:${local%cols};--row:${Math.floor(local/cols)}" role="img" aria-label="${esc(name)}"></span>`;
};
petsDock=function(){return `<div class="pet-dock scene-pets ${hasUpgrade('pet-beds')?'with-beds':''}" aria-label="Las mascotas de Delfi">${PETS.map(p=>`<button class="pet-hit scene-pet pet-${p.id}" data-action="pet" data-id="${p.id}" aria-label="Acariciar a ${p.name}">${sprite(p.sprite,'pet-idle',p.name)}<small>${p.name} ♡</small></button>`).join('')}</div>`};
header=function(){return `<header class="topbar"><button class="brand" data-action="home" aria-label="Volver a la entrada"><img src="assets/icon.svg" alt=""><span>CANELA & COFFEE<small>UN RATITO CON DELFI</small></span></button><div class="top-center">un pequeño lugar para estar bien</div><nav>${button(progress.coins+' ✦ <span>Tienda</span>','shop','coin shop-trigger','title="Gastar tus estrellas"')}${button('♪','sound','icon-button','aria-label="Abrir o cerrar la música de YouTube" title="Vintage Bakery · Música"')}${button('<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 2H2v4m8-4h4v4M2 10v4h4m4 0h4v-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>','fullscreen','icon-button','aria-label="Pantalla completa"')}${button('?','help','icon-button','aria-label="Cómo jugar"')}</nav></header>`};
const illustratedWelcome=welcome;
welcome=function(){return illustratedWelcome().replace('<h1>Un ratito<br>en <em>Delfi.</em></h1>','<h1>Un ratito en<br><em>CANELA<br>& COFFEE</em></h1>').replace('BIENVENIDO A','EL CAFÉ DE DELFI')};
const illustratedDialogue=dialogue;
dialogue=function(name,msg,actions=''){return illustratedDialogue(name,msg,actions).replace('<img src="assets/welcome.webp" alt="Delfi">',sprite(3,'portrait','Delfi'))};
const illustratedWork=work;
work=function(){return illustratedWork().replace('</section><aside class="order-board">','<div class="work-pets-wrapper">'+petsDock()+'</div></section><aside class="order-board">')};
document.title='Un ratito en CANELA & COFFEE';
render();
