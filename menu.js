/* Data-driven menu. Prices are fictional game coins, not real currency. */
(function(root){
const steps=(...values)=>values;
const MENU=[
['roll','Roll de canela','dulce',8,'roll','Nuestro abrazo recién horneado.',steps('Estirar la masa','Agregar canela','Enrollar','Hornear','Frosting','Emplatar')],
['apple-roll','Roll de canela y manzana','dulce',10,'roll','Manzana tibia, canela y un poquito de magia.',steps('Estirar la masa','Agregar manzana y canela','Enrollar','Hornear','Frosting','Emplatar')],
['carrot','Carrot cake','dulce',9,'cake','Especias suaves y crema.',steps('Cortar una porción','Agregar crema','Decorar con nueces','Emplatar')],
['crumble','Crumble de manzana','dulce',8,'crumble','Manzana horneada bajo una capa crocante.',steps('Agregar manzana','Cubrir con crumble','Hornear','Emplatar')],
['berry-crumble','Crumble de manzana y frutos rojos','dulce',10,'crumble','Frutas dulces, ácidas y crumble dorado.',steps('Agregar manzana y frutos rojos','Cubrir con crumble','Hornear','Emplatar')],
['cat-cookie','Cookies de gatitos','dulce',6,'cat','Tan tiernas que da pena comerlas.',steps('Estirar la masa','Cortar gatitos','Hornear','Decorar caritas','Emplatar')],
['lemon-loaf','Budín de limón','dulce',7,'cake','Una rodaja de sol con glaseado.',steps('Cortar una porción','Agregar glaseado de limón','Emplatar')],
['brownie','Brownie','dulce',8,'brownie','Chocolate intenso y centro suave.',steps('Cortar un cuadrado','Agregar chocolate','Emplatar')],
['chocoflan','Chocoflan','copa',10,'flan','Dos capas, una cucharada feliz.',steps('Desmoldar','Agregar caramelo','Emplatar')],
['choco-mousse','Mousse de chocolate','copa',8,'mousse','Chocolate ligero como una nube.',steps('Llenar la copa de chocolate','Agregar crema','Decorar con chocolate','Emplatar')],
['lemon-mousse','Mousse de limón','copa',8,'mousse','Fresquita, cremosa y delicada.',steps('Llenar la copa de limón','Agregar crema','Decorar con limón','Emplatar')],
['cheesecake','Cheesecake de frutos rojos','copa',11,'cake','Crema suave con frutos del bosque.',steps('Cortar una porción','Agregar frutos rojos','Emplatar')],
['marble','Torta marmolada','dulce',7,'cake','Vainilla y chocolate, como en casa.',steps('Cortar una porción','Agregar chocolate','Emplatar')],
['danish','Galletitas danesas','dulce',6,'cookies','Manteca, vainilla y bordes doraditos.',steps('Formar las galletitas','Hornear','Espolvorear azúcar','Emplatar')],
['ferrero','Alfajor ferrero','dulce',9,'alfajor','Chocolate y avellanas crujientes.',steps('Unir las tapas con crema de avellanas','Bañar en chocolate','Agregar avellanas','Emplatar')],
['cheese-scone','Scones de queso','salado',8,'scone','Dorados por fuera, tiernos por dentro.',steps('Mezclar masa y queso','Cortar los scones','Hornear','Emplatar')],
['lomito','Sándwich de lomito, queso crema y rúcula','salado',12,'sandwich','Lomito, crema suave y hojas frescas.',steps('Cortar el pan','Untar queso crema','Agregar lomito','Agregar rúcula','Emplatar')],
['caprese','Sándwich capresse','salado',10,'sandwich','Muzzarella fresca, tomate y albahaca.',steps('Cortar el pan','Agregar tomate y muzzarella','Agregar albahaca','Emplatar')],
['avocado','Tostón de palta, huevo y verdes','salado',11,'sandwich','Crocante, cremoso y lleno de frescura.',steps('Colocar pan','Tostar','Agregar palta','Agregar huevo','Agregar verdes','Emplatar')],
['italian','Sándwich italiano','salado',14,'sandwich','Ciabatta, muzzarella, pesto, lomito, tomate y rúcula.',steps('Abrir pan ciabatta','Untar pesto','Agregar muzzarella fresca y lomito','Agregar tomate y rúcula','Terminar con aceite de oliva','Emplatar')],
['spinach-scone','Scones de espinaca y queso','salado',9,'scone','Queso y espinaca en una masa tierna.',steps('Mezclar masa, espinaca y queso','Cortar los scones','Hornear','Emplatar')],
['cheeseboard','Tabla de quesos','salado',18,'board','Suaves, azules y de cabra, con frutas y crocantes.',steps('Disponer quesos suaves, azules y de cabra','Agregar uvas, peras e higos','Agregar frutos secos','Agregar mermelada','Emplatar')],
['yogurt','Yogurt con granola y frutos rojos','copa',8,'mousse','Cremoso, crocante y fresco.',steps('Llenar la copa de yogurt','Agregar granola','Agregar frutos rojos','Emplatar')],
['fruit-tart','Tarta frutal','copa',10,'cake','Base de galletas, crema pastelera y frutas.',steps('Preparar base de galletas','Agregar crema pastelera','Decorar con frutas variadas','Emplatar')],
['fruit-salad','Ensalada de frutas','copa',7,'fruit','Frutas frescas de todos los colores.',steps('Cortar frutas variadas','Mezclar las frutas','Servir en copa','Emplatar')],
['icecream','Helado','copa',7,'icecream','Tres bochitas de pura felicidad.',steps('Preparar la copa','Agregar bochitas de helado','Agregar barquillo','Emplatar')],
['tiramisu','Tiramisú','copa',11,'mousse','Café, crema y una lluvia de cacao.',steps('Humedecer bizcochos con café','Agregar crema de mascarpone','Formar las capas','Espolvorear cacao','Emplatar')],
['latte','Café con leche','bebida',5,'coffee','Café suave con corazón de leche.',steps('Moler café','Extraer espresso','Vaporizar leche','Dibujar un corazón','Servir en taza')],
['espresso','Espresso','bebida',4,'coffee','Pequeño, intenso y aromático.',steps('Moler café','Extraer espresso','Servir en taza')],
['tea','Té de lavanda','bebida',4,'tea','Flores, calma y una taza calentita.',steps('Agregar té de lavanda','Verter agua caliente','Dejar infusionar','Servir en taza')],
['chocolate','Chocolate caliente','bebida',6,'coffee','Chocolate cremoso para tardes lentas.',steps('Agregar chocolate','Verter leche caliente','Mezclar','Servir en taza')],
['lemonade','Limonada','bebida',5,'lemonade','Limón, menta y mucho frescor.',steps('Exprimir limón','Agregar agua y azúcar','Agregar hielo y menta','Servir en vaso')]
].map(([id,name,category,price,art,description,steps])=>({id,name,category,price,art,description,steps}));
const FROSTINGS=[{id:'cream',name:'Crema',color:'#fff4da'},{id:'lavender',name:'Crema y lavanda',color:'#bcb0d4'},{id:'chocolate',name:'Crema con chocolate',color:'#795046'}];
function same(a,b){return a.id===b.id&&(!['roll','apple-roll'].includes(a.id)||a.frosting===b.frosting)}
function validateOrder(expected,actual,delivery,selected){if(delivery!==selected)return {ok:false,reason:delivery==='takeaway'?'Este pedido es para llevar: usá la caja.':'Este pedido es para comer aquí: usá el plato.'};const copy=[...actual];for(const e of expected){const i=copy.findIndex(a=>same(a,e));if(i<0)return {ok:false,reason:'Revisá los productos y el frosting del ticket. Podés retirar un producto de la bandeja y prepararlo otra vez.'};copy.splice(i,1)}return copy.length?{ok:false,reason:'Hay productos de más en la bandeja.'}:{ok:true};}
root.CafeData={MENU,FROSTINGS,validateOrder};if(typeof module!=='undefined')module.exports=root.CafeData;
})(typeof window!=='undefined'?window:globalThis);
