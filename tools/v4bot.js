// v4 bot: plays Jan 2015 -> ~2020 only through assistant text commands typed into the chat box
const {chromium,devices}=require('playwright');
(async()=>{const url=process.argv[2]||'file:///tmp/v4.html';const shots=process.argv[3];const br=await chromium.launch();const errs=[];
const ctx=await br.newContext({viewport:{width:1500,height:900}});const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto(url);await p.waitForTimeout(1200);if(shots)await p.screenshot({path:shots+'/v4-1-start-1500.png'});
const type=async c=>{await p.fill('#ci',c);await p.press('#ci','Enter')};
const log=[];let shot2=false;
for(let m=0;m<66;m++){const S=await p.evaluate(()=>{const S=__G.S;return{t:S.t,cash:S.cash,goal:S.goal,land:S.rd.land.p,reuse:S.rd.reuse&&S.rd.reuse.p,m3:S.rd.m3&&S.rd.m3.p,fix:S.rd.m3fix&&S.rd.m3fix.p,giga:S.built.giga||S.building.giga,rate:S.m3rate,sl:S.rd.starlink&&S.rd.starlink.p,sats:S.sats,cd:S.raiseCd,rockets:S.rockets,shang:S.built.shanghai||S.building.shanghai}});
 const cmds=[];
 if(S.cash<400&&!S.cd)cmds.push('raise some money');
 if(S.goal===0){if(S.land<60&&S.cash>300)cmds.push('put money into booster landing');cmds.push('launch a rocket')}
 else if(S.goal===1){if(S.reuse<100&&S.cash>300)cmds.push('fund reuse');cmds.push('launch rocket')}
 else if(S.goal===2){if(!S.giga){if(S.cash>1600)cmds.push('build a gigafactory in nevada')}else if(S.m3<100&&S.cash>300)cmds.push('research model 3');else if(S.fix!==undefined&&S.fix<100&&S.cash>500)cmds.push('fund production fixes');cmds.push('launch rocket')}
 else if(S.goal===3){if(S.sl<100&&S.cash>300)cmds.push('fund starlink');else cmds.push('launch starlink');if(!S.shang&&S.cash>2500)cmds.push('build gigafactory shanghai')}
 else {cmds.push('fund starship')}
 if(S.cash>900&&S.goal<3&&!(S.goal===2&&!S.giga))cmds.push('build 3k cars');if(S.goal===2&&!S.giga&&!S.cd)cmds.push('raise capital');
 if(m%12===5)cmds.push('what should I do next?');
 for(const c of cmds){await type(c)}
 await p.evaluate(()=>__G.step(1));
 if(!shot2&&S.goal>=2&&shots){shot2=true;await p.waitForTimeout(300);await p.screenshot({path:shots+'/v4-2-reuse-era-1500.png'})}
 if(m%6===0)log.push(`${S.t.toFixed(0)}m goal${S.goal} $${S.cash.toFixed(0)}M land${S.land.toFixed(0)} m3rate${S.rate} sats${S.sats}`)}
const fin=await p.evaluate(()=>({d:document.getElementById('sD').textContent,goal:__G.S.goal,done:__G.S.done,cash:__G.S.cash}));
console.log(log.join('\n'));console.log(JSON.stringify(fin));
if(shots){await p.evaluate(()=>{const S=__G.S;S.flight={kind:'customer',reuse:true,t:1.4,dur:2.4}});await p.waitForTimeout(900);await p.screenshot({path:shots+'/v4-3-late-launch-1500.png'});
 for(const [n,c] of [['1280',{viewport:{width:1280,height:800}}],['phone',{...devices['iPhone 13']}]]){const c2=await br.newContext(c);const q=await c2.newPage();q.on('pageerror',e=>errs.push(n+e.message));await q.goto(url);await q.waitForTimeout(1200);await q.screenshot({path:shots+`/v4-4-start-${n}.png`});await c2.close()}}
console.log('ERR',JSON.stringify(errs));await br.close()})();
