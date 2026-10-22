const {chromium}=require('playwright');const url=process.argv[2]||'file:///workspace/elon-game/index.html';const tag=process.argv[3]||'r1';const out='/workspace/elon-game/shots';
(async()=>{const b=await chromium.launch();const errs=[];const p=await b.newPage({viewport:{width:1500,height:900}});p.on('pageerror',e=>errs.push(e.message));
 await p.goto(url);await p.waitForTimeout(2500);await p.screenshot({path:`${out}/v5v-${tag}-idle-1500.png`});
 const fps=async ms=>p.evaluate(ms=>new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<ms)requestAnimationFrame(f);else r(Math.round(n*1000/(performance.now()-t0)))};requestAnimationFrame(f)}),ms);
 const idle=await fps(3000);await p.evaluate(()=>__G.command('launch rocket'));await p.waitForTimeout(1500);await p.screenshot({path:`${out}/v5v-${tag}-pad-1500.png`});await p.waitForTimeout(1100);await p.screenshot({path:`${out}/v5v-${tag}-liftoff-1500.png`});const lf=await fps(1500);await p.waitForTimeout(500);await p.screenshot({path:`${out}/v5v-${tag}-landing-1500.png`});await p.waitForTimeout(2500);
 await p.evaluate(()=>{__G.S.speed=4});await p.waitForTimeout(5000);const f4=await fps(2000);await p.screenshot({path:`${out}/v5v-${tag}-4x-1500.png`});
 const q=await b.newPage({viewport:{width:390,height:844}});await q.goto(url);await q.waitForTimeout(1500);await q.evaluate(()=>__G.command('launch rocket'));await q.waitForTimeout(2700);await q.screenshot({path:`${out}/v5v-${tag}-phone.png`});
 const q2=await b.newPage({viewport:{width:1280,height:800}});await q2.goto(url);await q2.waitForTimeout(2000);await q2.screenshot({path:`${out}/v5v-${tag}-1280.png`});
 console.log(JSON.stringify({idle,launch:lf,x4:f4,errs}));await b.close()})();
