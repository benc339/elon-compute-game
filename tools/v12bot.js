const {chromium}=require('playwright');(async()=>{const [url,out]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});await p.goto(url);await p.waitForTimeout(1200);
await p.screenshot({path:`${out}/v12-0-intro.png`});await p.click('#igo');
const G=f=>p.evaluate(f);const C=()=>G(()=>__G.closeCard());const at=async(x,y)=>p.evaluate(([x,y])=>__G.scr(x,y),[x,y]);const btn=async id=>p.click(`#actbar .act[data-id="${id}"]`);
// real UI: turbine, smelter, depot, wire drag, belt drag
await btn('gt');let [sx,sy]=await at(4,5);await p.mouse.move(sx,sy);await p.waitForTimeout(200);await p.mouse.click(sx,sy);await C();
await btn('smelt');[sx,sy]=await at(8,9.5);await p.mouse.move(sx,sy);await p.waitForTimeout(250);await p.screenshot({path:`${out}/v12-1-ghost.png`});await p.mouse.click(sx,sy);await C();
await btn('depot');[sx,sy]=await at(2.5,9.5);await p.mouse.click(sx,sy);await C();
const st=await G(()=>({t:__G.S.turbs.map(t=>[t.x,t.y]),sm:[SITES.smelt.x,SITES.smelt.y,!!__G.S.placed.smelt],dp:[SITES.depot.x,SITES.depot.y,!!__G.S.placed.depot]}));console.log(JSON.stringify(st));
// belt between depot and smelter
await btn('belt');a=await at(st.dp[0]+3.5,st.dp[1]+1.5);await p.mouse.move(...a);await p.mouse.down();for(let x=st.dp[0]+3;x<st.sm[0];x++){a=await at(x+.5,st.dp[1]+1.5);await p.mouse.move(...a,{steps:3})}await p.mouse.up();await p.keyboard.press('Escape');await C();
console.log('links',await G(()=>JSON.stringify(__G.S.link)),'wire',await G(()=>__G.S.wire.size),'belt',await G(()=>__G.S.belt.size));
for(let i=0;i<8;i++){await G(()=>{__G.step(1);__G.closeCard()})}
console.log('m8',await G(()=>JSON.stringify({pf:__G.S.pf,made:__G.S.made,goal:__G.S.goal,MW:__G.MW(),cash:__G.S.cash})));
await p.waitForTimeout(500);await p.screenshot({path:`${out}/v12-2-smelt.png`});
// rest via commands as they unlock
const cmds=['build polysilicon','lay belts','build turbine'];for(const c of cmds){await p.evaluate(c=>__G.command(c),c);await C()}
for(let i=0;i<8;i++)await G(()=>{__G.step(1);__G.closeCard()});
for(const c of['build spruce pine quartz','build crucible shop','lay belts']){await p.evaluate(c=>__G.command(c),c);await C()}
for(let i=0;i<6;i++)await G(()=>{__G.step(1);__G.closeCard()});
for(const c of['build crystal puller','lay belts','build turbine']){await p.evaluate(c=>__G.command(c),c);await C()}
for(let i=0;i<6;i++)await G(()=>{__G.step(1);__G.closeCard()});
console.log('m',await G(()=>JSON.stringify({t:__G.S.t|0,pf:__G.S.pf,made:__G.S.made,rate:__G.S.rate,goal:__G.S.goal,MW:__G.MW(),dem:__G.econ().dem,cash:__G.S.cash,lims:Object.fromEntries(Object.entries(__G.econ().b).map(([k,v])=>[k,v.lim]))})));
await p.waitForTimeout(800);await p.screenshot({path:`${out}/v12-3-chain.png`});
for(const c of['order turbine','outbid turbine'])await p.evaluate(c=>__G.command(c),c);
for(let i=0;i<3;i++)await G(()=>{__G.step(1);__G.closeCard()});await p.evaluate(()=>__G.command('build turbine'));for(let i=0;i<2;i++)await G(()=>{__G.step(1)});
console.log('mk',await G(()=>JSON.stringify({turbs:__G.S.turbs.length,stock:__G.S.stock,mk:__G.S.mk.turb,goal:__G.S.goal,cash:__G.S.cash})));
for(const c of['build turbine assembly','order blade','outbid blade'])await p.evaluate(c=>__G.command(c),c);for(let i=0;i<3;i++)await G(()=>{__G.step(1)});console.log('bladebuy',await G(()=>JSON.stringify({made:__G.S.made.asm,stock:__G.S.stock,mk:[__G.S.mk.blade.q,__G.S.mk.blade.pq]})));await p.evaluate(()=>{LBT='mkt';sync()});await p.waitForTimeout(500);await p.screenshot({path:`${out}/v12-7-markets.png`});await p.evaluate(()=>{LBT='chain';sync()});
for(const c of['build superalloy melt','build blade foundry','lay belts'])await p.evaluate(c=>__G.command(c),c);
for(let i=0;i<8;i++)await G(()=>{__G.step(1)});await p.evaluate(()=>__G.command('lay belts'));for(let i=0;i<4;i++)await G(()=>{__G.step(1)});
console.log('tc',await G(()=>JSON.stringify({placed:__G.S.placed,made:__G.S.made,goal:__G.S.goal,stock:__G.S.stock,cash:__G.S.cash,MW:__G.MW(),dem:__G.econ().dem,lims:Object.fromEntries(Object.entries(__G.econ().b).map(([k,v])=>[k,v.lim]))})));
await p.waitForTimeout(800);await p.screenshot({path:`${out}/v12-6-turbchain.png`});
await G(()=>__G.showCard('cz'));await p.waitForTimeout(900);await p.screenshot({path:`${out}/v12-4-card.png`});await C();
for(let i=0;i<20;i++)await G(()=>{__G.step(1);__G.closeCard()});
console.log('end',await G(()=>JSON.stringify({t:__G.S.t|0,made:__G.S.made,goal:__G.S.goal,done:__G.S.done})));
const fps=await p.evaluate(()=>new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<2000)requestAnimationFrame(f);else r(n/2)};requestAnimationFrame(f)}));console.log('fps',fps);
await p.screenshot({path:`${out}/v12-5-late.png`});console.log('errs',errs.slice(0,5));await b.close()})();
