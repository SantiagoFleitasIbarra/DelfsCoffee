/* Persistent upgrades and reusable cast; no external services. */
(function(root){
const SHOP=[
{id:'plant',name:'Una planta para Delfi',price:60,icon:'🪴',description:'Una maceta nueva aparece en el salón.'},
{id:'lights',name:'Guirnalda de luces',price:90,icon:'✧',description:'Luces cálidas animadas para iluminar las mesas.'},
{id:'lavender',name:'Mesa de lavanda',price:120,icon:'❀',description:'Un mantel y una bandeja en tonos lavanda.'},
{id:'pet-beds',name:'Camitas para los tres',price:80,icon:'♡',description:'Miguel, Phoebe y Canelita estrenan almohadones.'},
{id:'treats',name:'Frasco de premios',price:40,icon:'♧',description:'Desbloquea dar un premio a cada mascota.'},
{id:'oven',name:'Horno de precisión',price:160,icon:'♨',description:'Amplía la zona verde del horno del 30 % al 50 %.'}
];
const CUSTOMERS=[{id:'lucia',name:'Lucía',sprite:4,quote:'¡Qué rico huele! Me encanta venir acá.'},{id:'mateo',name:'Mateo',sprite:5,quote:'Hoy me merezco una pausa rica.'},{id:'sofia',name:'Sofía',sprite:6,quote:'Delfi me recomendó este lugar. ¡Qué lindo!'},{id:'bruno',name:'Bruno',sprite:7,quote:'Un pedido calentito siempre mejora el día.'},{id:'valentina',name:'Valentina',sprite:8,quote:'¡Vengo por algo rico y un poquito de calma!'}];
const PETS=[{id:'miguel',name:'Miguel',sprite:9,line:'Miguel se acomoda junto a vos y ronronea.'},{id:'phoebe',name:'Phoebe',sprite:10,line:'Phoebe cierra los ojitos. Su cascabel suena bajito.'},{id:'canelita',name:'Canelita',sprite:11,line:'Canelita mueve la cola y te pide otra caricia.'}];
function normalize(p){p.coins=Math.max(0,Number(p.coins)||0);p.owned=Array.isArray(p.owned)?p.owned.filter(x=>SHOP.some(s=>s.id===x)):[];if(p.decor&&!p.owned.includes('plant'))p.owned.push('plant');p.affection=p.affection&&typeof p.affection==='object'?p.affection:{};p.ratings=Array.isArray(p.ratings)?p.ratings.slice(-20):[];return p}
function buy(p,id){normalize(p);const u=SHOP.find(x=>x.id===id);if(!u)return {ok:false,reason:'Esa mejora no existe.'};if(p.owned.includes(id))return {ok:false,reason:'¡Ya tenés esta mejora!'};if(p.coins<u.price)return {ok:false,reason:`Te faltan ${u.price-p.coins} estrellas. Ganás más atendiendo clientes.`};p.coins-=u.price;p.owned.push(id);if(id==='plant')p.decor=true;return {ok:true,item:u}}
root.CafeLiving={SHOP,CUSTOMERS,PETS,normalize,buy};if(typeof module!=='undefined')module.exports=root.CafeLiving;
})(typeof window!=='undefined'?window:globalThis);
