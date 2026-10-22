// node shots.js <url> <prefix>  -> 1280, 1500, phone screenshots after bot plays to Q4 2027
const {chromium,devices}=require('playwright');const fs=require('fs');
const src=fs.readFileSync(__dirname+'/smart.js','utf8');const a=src.indexOf('const res=await p.evaluate(')+'const res=await p.evaluate('.length;const b=src.indexOf(');\nconsole.log(res');const botFn=src.slice(a,b);
(async()=>{const url=process.argv[2],pre=process.argv[3];const br=await chromium.launch();const errs=[];
 const cfgs=[['1280',{viewport:{width:1280,height:800}}],['1500',{viewport:{width:1500,height:900}}],['phone',{...devices['iPhone 13']}]];
 for(const [n,c] of cfgs){const ctx=await br.newContext(c);const p=await ctx.newPage();p.on('pageerror',e=>errs.push(n+' '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(n+' '+m.text())});
  await p.goto(url+'#nohelp');await p.waitForTimeout(900);if(n!=='phone')await p.screenshot({path:`${pre}-${n}-start.png`});
  await p.evaluate(()=>{window.SEEDS=[20261020];window.STOPQ=4});await p.evaluate(eval(botFn));
  await p.evaluate(()=>{document.getElementById('modal').style.display='none';__G.fitView&&__G.fitView()});await p.waitForTimeout(1500);
  await p.screenshot({path:`${pre}-${n}-mid.png`});
  if(n==='1500'){await p.evaluate(()=>__G.zoomTo?__G.zoomTo(1.6):(__G.cam.z=1.5));await p.waitForTimeout(1500);await p.screenshot({path:`${pre}-${n}-zoom.png`})}
  if(process.env.FPS){const f=await p.evaluate(()=>new Promise(r=>{let n=0;const t0=performance.now();function s(){n++;if(performance.now()-t0<2000)requestAnimationFrame(s);else r(n/2)}requestAnimationFrame(s)}));console.log(n,'fps',f)}
  await ctx.close()}
 console.log('ERR',JSON.stringify(errs));await br.close()})();
