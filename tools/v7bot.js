const {chromium}=require('playwright');const url=process.argv[2]||'file:///workspace/elon-game/index.html';const out=process.argv[3]||'/workspace/elon-game/shots';const tag=process.argv[4]||'a';
(async()=>{const b=await chromium.launch();const errs=[];const p=await b.newPage({viewport:{width:1500,height:900}});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(url);await p.waitForTimeout(2000);await p.screenshot({path:`${out}/v7${tag}-1-card-1500.png`});await p.evaluate(()=>__G.closeCard());await p.waitForTimeout(1500);await p.screenshot({path:`${out}/v7${tag}-2-start-1500.png`});
 const say=async c=>{await p.fill('#ci',c);await p.press('#ci','Enter')};
 const fps=async ms=>p.evaluate(ms=>new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<ms)requestAnimationFrame(f);else r(Math.round(n*1000/(performance.now()-t0)))};requestAnimationFrame(f)}),ms);
 await say('build turbine');let shot=0;
 for(let m=0;m<40;m++){await p.evaluate(()=>__G.closeCard());const s=await p.evaluate(()=>({c:__G.S.cash,u:__G.S.unl,b:__G.S.b,e:__G.econ(),acc:__G.S.acc,tb:__G.S.turbB.length}));
  if(s.e.lim==='power'&&s.tb<3)await say('build turbine');
  for(const k of['fab','hbm','pkg'])if(s.u[k]&&!s.b[k])await say('build '+({fab:'fab',hbm:'hbm',pkg:'packaging'})[k]);
  if(s.acc>s.e.inst)await say('expand data hall');if(s.b.pkg){await say(s.e.plim==='HBM'?'add hbm line':s.e.plim==='logic dies'?'add fab line':'add packaging line')}
  if(m%10==0)await say('what should I do next?');
  await p.evaluate(()=>__G.step(1));
  if(!shot&&s.b.pkg){shot=1;await p.evaluate(()=>__G.closeCard());await p.waitForTimeout(2500);await p.screenshot({path:`${out}/v7${tag}-3-chain-1500.png`})}}
 await p.evaluate(()=>__G.closeCard());await p.waitForTimeout(2500);const f=await fps(2500);await p.screenshot({path:`${out}/v7${tag}-4-late-1500.png`});
 const r=await p.evaluate(()=>({m:__G.S.month,cash:__G.S.cash.toFixed(2),e:__G.econ(),made:__G.S.made,done:__G.S.done}));console.log(JSON.stringify(r),'fps',f);
 for(const [w,h,n] of [[1280,800,'1280'],[390,844,'phone']]){const q=await b.newPage({viewport:{width:w,height:h}});q.on('pageerror',e=>errs.push(e.message));await q.goto(url);await q.waitForTimeout(1500);await q.evaluate(()=>__G.closeCard());await q.waitForTimeout(1500);await q.screenshot({path:`${out}/v7${tag}-5-${n}.png`})}
 console.log('errors',errs);await b.close()})();
