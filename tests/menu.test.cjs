const test=require('node:test'),assert=require('node:assert/strict');
const {MENU,FROSTINGS,validateOrder}=require('../menu.js');
test('32 unique recipes and all requested menu categories',()=>{assert.equal(MENU.length,32);assert.equal(new Set(MENU.map(p=>p.id)).size,32);for(const [c,n] of [['dulce',11],['salado',7],['copa',9],['bebida',5]])assert.equal(MENU.filter(p=>p.category===c).length,n);for(const p of MENU){assert.ok(p.steps.length>=3);assert.ok(p.price>0)}});
test('all frosting choices',()=>assert.deepEqual(FROSTINGS.map(f=>f.id),['cream','lavender','chocolate']));
test('order accepts correct items in any sequence',()=>assert.equal(validateOrder([{id:'roll',frosting:'lavender'},{id:'latte'}],[{id:'latte'},{id:'roll',frosting:'lavender'}],'here','here').ok,true));
test('wrong frosting, wrong presentation, extras and missing items are rejected',()=>{const order=[{id:'roll',frosting:'cream'}];for(const actual of [[{id:'roll',frosting:'chocolate'}],[],[{id:'roll',frosting:'cream'},{id:'tea'}]])assert.equal(validateOrder(order,actual,'here','here').ok,false);assert.equal(validateOrder(order,order,'takeaway','here').ok,false)});
test('duplicate items must match quantities',()=>assert.equal(validateOrder([{id:'latte'},{id:'latte'}],[{id:'latte'}],'here','here').ok,false));
