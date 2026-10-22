const {chromium}=require('playwright');(async()=>{const [url,out,tag]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1600,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto(url);await p.waitForTimeout(1500);
const G=f=>p.evaluate(f);await G(()=>__G.closeCard());
await G(()=>__G.setMode('turb'));await p.mouse.move(700,420);await p.waitForTimeout(400);await p.screenshot({path:`${out}/v8${tag}-1-ghost.png`});
await G(()=>{__G.S.mode=null;__G.S.cash+=.1;__G.place(15,12)});await G(()=>__G.step(1));await G(()=>__G.closeCard());await p.waitForTimeout(500);await p.screenshot({path:`${out}/v8${tag}-2-unconn.png`});
console.log('MW unconnected',await G(()=>__G.econ().pw));
await G(()=>{__G.wire(14,12);__G.wire(14,13)});await G(()=>__G.step(1));await G(()=>__G.closeCard());console.log('after wire MW',await G(()=>__G.S.turbs.map(t=>t.conn)));
await G(()=>__G.command('build a turbine'));await G(()=>__G.step(4));await G(()=>__G.closeCard());console.log('auto',await G(()=>__G.S.turbs.map(t=>[t.x,t.y,t.conn,t.left])));
for(let m=0;m<60;m++){await G(()=>{const S=__G.S;__G.closeCard();const e=__G.econ();if(e.lim==='power')__G.command('build turbine');for(const k of['fab','hbm','pkg'])if(S.unl[k]&&!S.b[k]&&!S.bt[k])__G.command('build '+({pkg:'packaging',fab:'fab',hbm:'hbm'})[k]);if(S.b.pkg){if(e.plim==='HBM')__G.command('add hbm line');else if(e.plim==='logic dies')__G.command('add fab line');else __G.command('add packaging line')}__G.step(1)});}
await G(()=>__G.closeCard());await p.waitForTimeout(600);await p.screenshot({path:`${out}/v8${tag}-3-late.png`});
console.log(await G(()=>{const S=__G.S;return{t:S.t,acc:S.acc,slots:S.slots,made:S.made,goal:S.goal,turbs:S.turbs.length,MW:__G.econ().pw}}));
const fps=await p.evaluate(()=>new Promise(r=>{let n=0;const t0=performance.now();(function f(){n++;if(performance.now()-t0<3000)requestAnimationFrame(f);else r(n/3)})()}));console.log('fps',fps,'errs',errs);
await G(()=>__G.showCard('fab'));await p.waitForTimeout(800);await p.screenshot({path:`${out}/v8${tag}-4-card.png`});await b.close()})();
