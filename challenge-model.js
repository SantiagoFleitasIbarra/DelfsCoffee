/* Pure scoring rules shared by the game and its tests. */
(function(root){
 const clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,Number(n)||0));
 function tasks(p){if(p.category==='bebida')return ['assemble','stir','pour'];if(p.art==='roll')return ['assemble','trace','heat','frost'];if(p.category==='salado')return ['assemble','slice',p.art==='board'?'arrange':'heat'];if(p.category==='copa')return ['assemble','pour','arrange'];return ['assemble',/Cortar/i.test(p.steps.join(' '))?'slice':'trace',p.steps.includes('Hornear')?'heat':'arrange']}
 function ingredients(p){
 const food={roll:['masa','canela','manteca'],'apple-roll':['masa','manzana y canela','manteca'],carrot:['bizcocho de zanahoria','crema','nueces'],crumble:['manzana','masa de crumble','manteca'],'berry-crumble':['manzana y frutos rojos','masa de crumble','manteca'],'cat-cookie':['masa de galletitas','chocolate','glasé'],'lemon-loaf':['budín','glaseado de limón','ralladura'],brownie:['brownie','chocolate','plato'],chocoflan:['base de chocolate','flan','caramelo'],'choco-mousse':['chocolate','crema','copa'],'lemon-mousse':['limón','crema','copa'],cheesecake:['base de galletas','crema de queso','frutos rojos'],marble:['masa de vainilla','masa de chocolate','molde'],danish:['masa de manteca','azúcar','bandeja'],ferrero:['tapas de alfajor','crema de avellanas','chocolate'],'cheese-scone':['masa','queso','bandeja'],lomito:['pan y queso crema','lomito','rúcula'],caprese:['pan','tomate y muzzarella','albahaca'],avocado:['pan tostado','palta y huevo','verdes'],italian:['ciabatta y pesto','muzzarella y lomito','tomate y rúcula'],'spinach-scone':['masa','espinaca y queso','bandeja'],cheeseboard:['quesos','uvas, peras e higos','frutos secos y mermelada'],yogurt:['yogurt','granola','frutos rojos'],'fruit-tart':['base de galletas','crema pastelera','frutas'],'fruit-salad':['frutas cortadas','jugo de fruta','copa'],icecream:['copa','helado','barquillo'],tiramisu:['bizcochos con café','crema de mascarpone','cacao']};
 if(food[p.id])return food[p.id];
 if(p.id==='orange')return ['naranjas','colador','vaso'];
 if(p.art==='tea')return [p.name,'agua caliente','taza'];
 if(p.id==='matcha')return ['matcha','agua caliente','leche'];
 if(['submarino','chocolate'].includes(p.id))return ['chocolate','leche caliente','taza'];
 if(p.id.startsWith('smoothie'))return [p.name.replace('Licuado de ',''),'leche','hielo'];
 if(p.id.startsWith('espresso'))return ['café molido','agua caliente',p.id==='espresso-panna'?'crema batida':p.id==='espresso-double'?'segunda medida':'taza'];
 if(p.id==='americano')return ['espresso','agua caliente','taza'];
 if(p.id==='affogato')return ['helado de vainilla','espresso','copa'];
 if(p.art==='coffee')return ['espresso',p.id==='hawaiian'?'leche de coco':p.id==='breve'?'leche y crema':'leche',p.id.includes('caramel')?'caramelo':p.id.includes('vanilla')?'vainilla':p.id==='mocha'?'chocolate':'espuma'];
 let a=p.steps.filter(x=>!/^(Servir|Licuar|Mezclar|Batir)/i.test(x)).map(x=>x.replace(/^(Agregar|Preparar|Extraer|Exprimir|Colocar|Verter)\s+/i,''));return [...new Set([...a,'hielo','vaso'])].slice(0,3);
 }
 function budget(day,number,items,flowers=false){return Math.max(75,140-(Math.max(1,day)-1)*6-(number-1)*5)+(items-2)*30+(flowers?15:0)}
 function evaluate(quality,remaining,budget,mistakes=0){const q=clamp(quality),pace=clamp(remaining/Math.max(1,budget)*100);const score=clamp(q*.75+pace*.25-Math.max(0,mistakes)*7);const stars=score>=88?5:score>=72?4:score>=53?3:score>=32?2:1;return {score:Math.round(score),stars,quality:Math.round(q),pace:Math.round(pace)}}
 function earnings(total,stars,streak=0){return {base:Math.round(total*({1:.35,2:.55,3:.8,4:1,5:1}[stars]||0)),tip:stars>=4?(stars===5?8:3)+Math.min(5,Math.max(0,streak)):0}}
 function pour(fill,target=68,bonus=0){return Math.round(clamp(100-Math.max(0,Math.abs(fill-target)-3-bonus)*4))}
 function buy(p,catalog,id){const u=catalog.find(x=>x.id===id);if(!u)return {ok:false,reason:'Esa mejora no existe.'};if(p.owned.includes(id))return {ok:false,reason:'Ya la tenés.'};if((p.served||0)<(u.unlock||0))return {ok:false,reason:`Se desbloquea al atender ${u.unlock} clientes.`};if(p.coins<u.price)return {ok:false,reason:`Te faltan ${u.price-p.coins} estrellas.`};p.coins-=u.price;p.owned.push(id);if(id==='plant')p.decor=true;return {ok:true,item:u}}
 root.CafeChallenge={clamp,tasks,ingredients,budget,evaluate,earnings,pour,buy};if(typeof module!=='undefined')module.exports=root.CafeChallenge;
})(typeof window!=='undefined'?window:globalThis);
