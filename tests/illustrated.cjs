const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
  assert.equal(await page.title(),'Un ratito en CANELA & COFFEE');
  assert.match(await page.locator('h1').innerText(),/CANELA\s*& COFFEE/);
  assert.equal(await page.locator('.scene-pets .art-pets').count(),3);
  await page.click('[data-action="guest"]');await page.click('[data-action="seat"][data-id="0"]');
  await page.waitForFunction(()=>state.guestPhase==='taking');
  assert.ok((await page.locator('.delfi-actor .art-delfi').evaluate(e=>getComputedStyle(e).backgroundImage)).includes('delfi-illustrated.webp'));
  await page.evaluate(()=>{state.cart=[{id:'latte'}];placeOrder()});
  assert.equal(await page.locator('.delfi-actor [data-sprite="1"]').count(),1);
  await page.screenshot({path:'/tmp/delfi-back-qa.png'});
  await page.evaluate(()=>goHome());await page.click('[data-action="work"]');
  await page.click('.modal .primary[data-action="close"]');
  assert.equal(await page.locator('.customer-person .art-customers').count(),1);
  assert.ok((await page.locator('.kitchen-backdrop').evaluate(e=>getComputedStyle(e).backgroundImage)).includes('bar.webp'));
  assert.equal(await page.locator('.work-pets-wrapper [data-action="pet"]').count(),3);
  await page.click('[data-action="pet"][data-id="canelita"]');
  assert.equal(await page.locator('.pet-reacting .art-pets').count(),1);
  assert.deepEqual(errors,[]);
  console.log('PASS: illustrated cast, rear pose, pets in work scene, branding.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
