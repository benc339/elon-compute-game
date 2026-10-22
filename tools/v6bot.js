const {chromium}=require('playwright');const url=process.argv[2]||'file:///workspace/elon-game/index.html';const out=process.argv[3]||'/workspace/elon-game/shots';
(async()=>{const b=await chromium.launch();const errs=[];const p=await b.newPage({viewport:{width:1500,height:900}});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto(url);await p.waitForTimeout(2500);await p.screenshot({path:out+'/v6-1-start-1500.png'});
 const say=async c=>{await p.fill('#ci',c);await p.press('#ci','Enter')};
 await say('launch a rocket');await p.waitForTimeout(2600);await p.screenshot({path:out+'/v6-2-liftoff-1500.png'});await p.waitForTimeout(1700);await p.waitForTimeout(1300);await p.screenshot({path:out+'/v6-3-landing-1500.png'});
 for(let m=0;m<30;m++){for(let k=0;k<3;k++){await say('launch rocket');await p.evaluate(()=>__G.flyNow())}const s=await p.evaluate(()=>({c:__G.S.cash,l:__G.S.unl}));if(s.l.line)await say('expand lines');if(s.l.eu)await say('open europe');if(s.l.cn)await say('open china');if(s.l.pad)await say('upgrade pad');if(m%8==0)await say('what should I do next?');await p.evaluate(()=>{__G.S.cd=0;__G.step(1)})}
 const r=await p.evaluate(()=>({d:document.getElementById('sD').textContent,cash:__G.S.cash.toFixed(2),wk:Math.round(__G.S.carsWk),L:__G.S.launches,done:__G.S.done}));console.log(JSON.stringify(r));
 await p.waitForTimeout(2500);await p.screenshot({path:out+'/v6-4-late-1500.png'});
 for(const [w,h,n] of [[1280,800,'1280'],[390,844,'phone']]){const q=await b.newPage({viewport:{width:w,height:h}});q.on('pageerror',e=>errs.push(e.message));await q.goto(url);await q.waitForTimeout(1500);await q.evaluate(()=>__G.command('launch rocket'));await q.waitForTimeout(2700);await q.screenshot({path:out+`/v6-5-${n}.png`})}
 console.log('errors',errs);await b.close()})();
