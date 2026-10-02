const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH} : {}), args:['--no-sandbox','--disable-dev-shm-usage'] });
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    page.setDefaultTimeout(10000);
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
    const click = selector => page.locator(selector).click();
    await click('[data-action="guest"]');
    await click('[data-action="seat"][data-id="0"]');
    await click('[data-action="menu"]');
    await click('[data-action="add-cart"][data-id="roll"]');
    await click('[data-action="cart-frosting"][data-frosting="lavender"]');
    await click('[data-action="category"][data-id="copa"]');
    await click('[data-action="add-cart"][data-id="tiramisu"]');
    await click('[data-action="category"][data-id="cold"]');
    assert.equal(await page.locator('.menu-item').count(),24);
    await page.locator('.menu-search').fill('milkshake');
    assert.equal(await page.locator('.menu-item:visible').count(),5);
    await click('[data-action="category"][data-id="hot"]');
    assert.equal(await page.locator('.menu-item').count(),24);
    await click('[data-action="place-order"]');
    assert.equal(await page.evaluate(()=>state.guestPhase),'leaving');
    await page.waitForFunction(()=>state.guestPhase==='preparing');
    await page.waitForFunction(()=>state.guestPhase==='returning');
    await page.waitForSelector('[data-action="eat"]');
    await page.locator('[data-action="eat"]').first().click();
    await page.locator('[data-action="eat"]').first().click();
    await click('[data-action="rate"][data-id="5"]');
    assert.equal(await page.evaluate(()=>progress.visits),1);
    await click('.modal [data-action="home"]');
    await click('[data-action="work"]');
    await click('.modal .primary[data-action="close"]');
    await click('[data-action="catalog"][data-category="dulce"]');
    await click('[data-action="prepare"][data-id="roll"]');
    const playRecipe=require('./skill-play.cjs');
    await playRecipe(page,'cream');
    await click('[data-action="catalog"][data-category="hot"]');
    await click('[data-action="prepare"][data-id="latte"]');
    await playRecipe(page);
    await click('[data-action="pack"][data-id="takeaway"]');
    await click('[data-action="serve"]');
    assert.equal(await page.evaluate(()=>progress.served),0);
    await click('[data-action="pack"][data-id="here"]');
    await click('[data-action="serve"]');
    assert.equal(await page.evaluate(()=>progress.served),1);
    // Exercise the remaining turn transitions; recipe and first-order input paths were tested above.
    const names=[await page.evaluate(()=>state.orders[0].name)];
    for(let i=0;i<4;i++){
      await page.waitForFunction(()=>!state.serving);
      names.push(await page.evaluate(()=>state.orders[0].name));
      await page.evaluate(()=>{state.tray=state.orders[0].items.map(p=>({...p,quality:100}));state.delivery=state.orders[0].delivery;render()});
      await click('[data-action="serve"]');
    }
    await page.waitForFunction(()=>state.scene==='summary');
    assert.equal(new Set(names).size,5);
    assert.equal(await page.evaluate(()=>progress.day),2);
    await click('.shop-trigger');
    await click('[data-action="shop-preview"][data-id="plant"]');
    await click('[data-action="buy-upgrade"][data-id="plant"]');
    assert.equal(await page.evaluate(()=>progress.decor),true);
    await page.reload();
    assert.equal(await page.evaluate(()=>progress.served),5);
    assert.equal(await page.evaluate(()=>progress.decor),true);
    for(const pet of ['miguel','phoebe','canelita']){await click(`[data-action="pet"][data-id="${pet}"]`);await click('[data-action="pet-stroke"]');await click('.close-button')}
    assert.equal(await page.evaluate(()=>progress.affection.canelita),2);
    await page.reload();
    assert.equal(await page.evaluate(()=>progress.ratings[0].stars),5);
    assert.equal(await page.evaluate(()=>progress.affection.miguel),2);
    // Seed a test balance to exercise every upgrade without grinding turns.
    await page.evaluate(()=>{progress.coins=1000;save();render()});
    await click('.shop-trigger');
    for(const id of ['lights','lavender','pet-beds','treats','oven']){await click(`[data-action="shop-preview"][data-id="${id}"]`);await click(`[data-action="buy-upgrade"][data-id="${id}"]`);}
    assert.equal(await page.evaluate(()=>progress.coins),510);
    await click('.close-button');
    await click('[data-action="pet"][data-id="phoebe"]');
    await click('[data-action="pet-treat"]');
    assert.equal(await page.evaluate(()=>progress.affection.phoebe),5);
    await click('.close-button');
    await click('[data-action="guest"]');await click('[data-action="seat"][data-id="0"]');
    await page.waitForFunction(()=>state.guestPhase==='taking');
    assert.equal(await page.locator('.fairy-lights i').count(),12);
    assert.equal(await page.locator('.pet-dock.with-beds').count(),1);
    await page.screenshot({path:'/tmp/cafe-window-qa.png'});
    assert.deepEqual(errors,[]);
    console.log('PASS: visit, menu, frostings, cooking, oven, coffee, order validation, five-order shift, decoration and persistence.');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
