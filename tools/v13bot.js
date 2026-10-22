const {chromium}=require('playwright');(async()=>{const [url,out]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});await p.goto(url);await p.waitForTimeout(1200);await p.click('#igo');
const G=f=>p.evaluate(f);const cmd=c=>p.evaluate(c=>__G.command(c),c);const at=async(x,y)=>p.evaluate(([x,y])=>__G.scr(x,y),[x,y]);const btn=async id=>p.click(`#actbar .act[data-id="${id}"]`);
await btn('gt');let [sx,sy]=await at(4,5);await p.mouse.click(sx,sy);await cmd('build smelter');await cmd('build industrial inputs');await cmd('build turbine');await cmd('build r&d lab');
const st=()=>G(()=>JSON.stringify({t:__G.S.t|0,goal:__G.S.goal,tech:__G.S.tech,stock:__G.S.stock,turbs:__G.S.turbs.length,made:Object.fromEntries(Object.entries(__G.S.made).map(([k,v])=>[k,Math.round(v)])),MW:__G.MW(),dem:__G.econ().dem,cardOpen:!!document.querySelector('#card.show,.card.show')}));
const tech=['research siemens','research fused','research czochralski','research rhenium','research single','research wafer'];
const builds={siemens:['build polysilicon'],quartz:['build spruce pine quartz','build crucible shop'],czo:['build crystal puller'],alloy:['build superalloy melt'],sx:['build blade foundry','build turbine assembly']};
let shot=0;
for(let m=0;m<160;m++){await G(()=>{__G.step(1)});const s=JSON.parse(await st());
 if(!s.tech.cur){for(const c of tech)await cmd(c)}
 for(const k in builds)if(s.tech.done[k])for(const c of builds[k])await cmd(c);
 if(s.stock.turb>=1)await cmd('build turbine');
 if(m%10==0)console.log(m,JSON.stringify({t:s.t,goal:s.goal,cur:s.tech.cur,done:Object.keys(s.tech.done),turbs:s.turbs,MW:s.MW,dem:s.dem,cz:s.made.cz,card:s.cardOpen}));
 if(s.goal>=7&&!shot){shot=1;await p.evaluate(()=>{LBT='tech';sync()});await p.waitForTimeout(600);await p.screenshot({path:`${out}/v13-tech.png`});await p.evaluate(()=>{LBT='mkt';sync()});await p.waitForTimeout(400);await p.screenshot({path:`${out}/v13-supply.png`});await p.evaluate(()=>{LBT='chain';sync()})}
 if(s.goal>=10)break}
console.log('end',await st());console.log('done',await G(()=>JSON.stringify(__G.S.done)));
await p.waitForTimeout(800);await p.screenshot({path:`${out}/v13-end.png`});
const fps=await p.evaluate(()=>new Promise(r=>{let n=0;const t0=performance.now();const f=()=>{n++;if(performance.now()-t0<2000)requestAnimationFrame(f);else r(n/2)};requestAnimationFrame(f)}));console.log('fps',fps,'errs',errs.slice(0,5));await b.close()})();
