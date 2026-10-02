'use strict';
// Each seat shares the same order lifecycle but has its own viewpoint and staging.
seats[1].name='Rincón de las flores';
seats[3].name='En la barra con Delfi';
const renderSeatedGuest=guest;
guest=function(){
  let html=renderSeatedGuest();
  if(state.seat===3)html=html.replace('<div class="room-vignette"></div>', '<div class="room-vignette"></div><div class="bar-foreground" aria-hidden="true"></div>');
  if(state.seat!==null&&state.seat<3)html=html.replace('<div class="room-vignette"></div>', '<div class="room-vignette"></div><div class="table-foreground" aria-hidden="true"></div>');
  return html;
};
render();
