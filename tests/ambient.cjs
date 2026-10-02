const {chromium}=require('playwright'),assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});try{
 const p=await b.newPage({viewport:{width:1440,height:900}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto('file://'+require('node:path').resolve(__dirname,'../index.html'));
 await p.click('[data-action=guest]');await p.waitForFunction(()=>!cafeAudio.paused&&cafeAudio.currentTime>.05);
 const t=await p.evaluate(()=>cafeAudio.currentTime);await p.click('[data-action=seat][data-id="1"]');await p.waitForFunction(t=>cafeAudio.currentTime>t,t);
 assert.equal(await p.locator('iframe').count(),0);
 await p.click('[data-action=sound]');assert.equal(await p.evaluate(()=>cafeAudio.paused),true);
 await p.click('[data-action=sound]');await p.waitForFunction(()=>!cafeAudio.paused);
 await p.evaluate(()=>cafeAudio.currentTime=cafeAudio.duration-.2);
 await p.waitForFunction(()=>ambientPart===1&&!cafeAudio.paused&&cafeAudio.currentTime>0);
 assert.equal(await p.evaluate(()=>cafeAudio.src.endsWith('vintage-001.ogg')),true);
 await p.evaluate(()=>{ambientPart=17;cafeAudio.dispatchEvent(new Event('ended'))});
 await p.waitForFunction(()=>ambientPart===0&&!cafeAudio.paused&&cafeAudio.currentTime>0);
 await p.click('.ambient-title');await p.waitForSelector('#ambient-volume');await p.locator('#ambient-volume').fill('15');
 assert.equal(await p.evaluate(()=>cafeAudio.volume),.15);
 assert.deepEqual(errors,[]);console.log('PASS: ambient starts, continues between scenes, pauses, advances parts, loops and adjusts volume.');
 }finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
