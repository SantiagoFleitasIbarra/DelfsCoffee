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
    await click('[data-action="place-order"]');
    await page.waitForSelector('[data-action="eat"]');
    await page.locator('[data-action="eat"]').first().click();
    await page.locator('[data-action="eat"]').first().click();
    assert.equal(await page.evaluate(()=>progress.visits),1);
    await click('.modal [data-action="home"]');
    await click('[data-action="work"]');
    await click('.modal .primary[data-action="close"]');
    await click('[data-action="catalog"][data-category="dulce"]');
    await click('[data-action="prepare"][data-id="roll"]');
    await click('[data-action="prep-step"][data-correct="false"]');
    assert.equal(await page.evaluate(()=>state.prep.step),0);
    for(let i=0;i<3;i++) await click('[data-action="prep-step"][data-correct="true"]');
    await click('[data-action="start-bake"]');
    await page.waitForFunction(()=>state.prep.position>=46&&state.prep.position<61);
    await click('[data-action="start-bake"]');
    await click('[data-action="prep-step"][data-value="cream"]');
    await click('[data-action="prep-step"][data-correct="true"]');
    await click('[data-action="catalog"][data-category="bebida"]');
    await click('[data-action="prepare"][data-id="latte"]');
    for(let i=0;i<5;i++) await click('[data-action="prep-step"][data-correct="true"]');
    await click('[data-action="pack"][data-id="takeaway"]');
    await click('[data-action="serve"]');
    assert.equal(await page.evaluate(()=>progress.served),0);
    await click('[data-action="pack"][data-id="here"]');
    await click('[data-action="serve"]');
    assert.equal(await page.evaluate(()=>progress.served),1);
    // Exercise the remaining turn transitions; recipe and first-order input paths were tested above.
    for(let i=0;i<4;i++){
      await page.evaluate(()=>{state.tray=state.orders[0].items.map(p=>({...p,quality:100}));state.delivery=state.orders[0].delivery;render()});
      await click('[data-action="serve"]');
    }
    assert.equal(await page.evaluate(()=>state.scene),'summary');
    assert.equal(await page.evaluate(()=>progress.day),2);
    await click('[data-action="decor"]');
    assert.equal(await page.evaluate(()=>progress.decor),true);
    await page.reload();
    assert.equal(await page.evaluate(()=>progress.served),5);
    assert.equal(await page.evaluate(()=>progress.decor),true);
    assert.deepEqual(errors,[]);
    console.log('PASS: visit, menu, frostings, cooking, oven, coffee, order validation, five-order shift, decoration and persistence.');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
