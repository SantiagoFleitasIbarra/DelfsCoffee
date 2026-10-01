const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  page.setDefaultTimeout(12000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
  const backgrounds=['window','flowers','center','bar'];
  for(let id=0;id<4;id++){
   await page.click('[data-action="guest"]');
   await page.click(`[data-action="seat"][data-id="${id}"]`);
   await page.waitForFunction(()=>state.guestPhase==='taking');
   const background=await page.locator('.scene-image').evaluate(el=>getComputedStyle(el).backgroundImage);
   assert.ok(background.includes(backgrounds[id]+'.webp'));
   assert.equal(await page.locator('.delfi-actor.phase-taking').count(),1);
   await page.screenshot({path:`/tmp/cafe-seat-${id}.png`});
   await page.click('[data-action="menu"]');
   await page.click('[data-action="category"][data-id="hot"]');
   await page.click('[data-action="add-cart"][data-id="latte"]');
   await page.click('[data-action="place-order"]');
   assert.equal(await page.evaluate(()=>state.guestPhase),'leaving');
   await page.waitForFunction(()=>state.guestPhase==='preparing');
   await page.waitForFunction(()=>state.guestPhase==='returning');
   await page.waitForSelector('[data-action="eat"]');
   assert.equal(await page.evaluate(()=>state.seat),id);
   assert.equal(await page.evaluate(()=>state.meal[0].id),'latte');
   if(id===3)assert.equal(await page.locator('.bar-foreground').count(),1);
   await page.click('[data-action="eat"]');
   await page.click('[data-action="rate"][data-id="5"]');
   await page.click('.modal [data-action="home"]');
  }
  assert.equal(await page.evaluate(()=>progress.visits),4);
  assert.equal(await page.evaluate(()=>new Set(progress.ratings.map(r=>r.seat)).size),4);
  assert.deepEqual(errors,[]);
  console.log('PASS: all four distinct viewpoints, Delfi taking/leaving/preparing/returning, food and ratings at every seat.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
