const test=require('node:test'),assert=require('node:assert/strict');
const {newTower,balance,pull}=require('../table-games-model.js');
test('tower starts balanced and upper floor is protected',()=>{const t=newTower();assert.equal(balance(t),100);assert.equal(pull(t,7,0).ok,false);assert.equal(t.flat().filter(Boolean).length,24)});
test('extracting preserves blocks and does not mutate original',()=>{const t=newTower(),r=pull(t,0,0,1);assert.equal(r.ok,true);assert.equal(r.fallen,false);assert.equal(t[0][0],true);assert.equal(r.rows[0][0],false);assert.equal(r.rows.length,9);assert.equal(r.rows.flat().filter(Boolean).length,24);assert.equal(pull(r.rows,0,0).ok,false)});
test('a floor without support collapses even with a perfect pull',()=>{let r=pull(newTower(),0,0,1);r=pull(r.rows,0,2,1);assert.equal(r.fallen,false);r=pull(r.rows,0,1,1);assert.equal(r.fallen,true);assert.equal(r.stability,0)});
test('rough pulls are less stable than gentle ones',()=>{const t=newTower();assert.ok(pull(t,0,0,0).stability<pull(t,0,0,1).stability)});
