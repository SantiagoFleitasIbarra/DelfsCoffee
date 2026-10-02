// Drive the same mouse gestures a player performs; never assign scores.
module.exports=async function playRecipe(page,frosting='cream'){
 const canvas=page.locator('#skill-canvas');
 async function pos(x,y){const b=await canvas.boundingBox();return {x:b.x+x*b.width/800,y:b.y+y*b.height/390}}
 async function move(x,y,steps=1){const p=await pos(x,y);await page.mouse.move(p.x,p.y,{steps})}
 while(await canvas.count()){
  const kind=await page.evaluate(()=>mini.kind);
  if(kind==='assemble'){
   const cards=await page.evaluate(()=>({cards:mini.cards,ingredients:mini.ingredients}));
   for(const name of cards.ingredients){const i=cards.cards.findIndex(c=>c.label===name);await move(100+i*152,66);await page.mouse.down();await move(400,256,12);await page.mouse.up()}
  }else if(['trace','frost','arrange'].includes(kind)){
   if(kind==='frost')await page.click(`[data-action=skill-frost][data-id="${frosting}"]`);
   const path=await page.evaluate(()=>mini.path);await move(path[0].x,path[0].y);await page.mouse.down();for(const p of path)await move(p.x,p.y,2);await page.mouse.up();
  }else if(kind==='stir'){
   await move(500,205);await page.mouse.down();for(let i=1;i<=195;i++){const a=i/64*Math.PI*2;await move(400+100*Math.cos(a),205+100*Math.sin(a))}await page.mouse.up();
  }else if(kind==='slice'){
   for(let i=0;i<3;i++){await move(270+i*130,100);await page.mouse.down();await move(270+i*130,320,15);await page.mouse.up()}
  }else if(kind==='pour'){
   await move(400,80);await page.mouse.down();await page.waitForFunction(()=>mini.fill>=67);await page.mouse.up();
  }else if(kind==='heat'){
   await move(400,180);await page.mouse.down();let held=true;
   while(!(await page.evaluate(()=>mini.done))){const temp=await page.evaluate(()=>mini.temp);if(temp>62&&held){await page.mouse.up();held=false}else if(temp<58&&!held){await page.mouse.down();held=true}await page.waitForTimeout(45)}if(held)await page.mouse.up();
  }
  await page.waitForFunction(()=>mini.done);await page.click('[data-action=skill-next]');
 }
};
