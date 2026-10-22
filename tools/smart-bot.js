// smart bot; usage: node smart.js [url] [shotsDir|-]
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1500,height:900}});const errs=[];
p.on('pageerror',e=>errs.push('PE '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
const url=process.argv[2]||'file:///workspace/elon-game/index.html';await p.goto(url+'#nohelp');await p.waitForTimeout(500);
const SH=process.argv[3];if(SH)await p.evaluate(()=>{window.SEEDS=[20261020];window.STOPQ=5});
const res=await p.evaluate(()=>{const out=[];
 for(let seed of (window.SEEDS||[20261020,1,7,42,99])){const G=__G;G.newGame();G.S.seed=seed;const log=[];
  for(let q=0;q<(window.STOPQ||9)&&!G.S.over;q++){const S=G.S;const st=G.stats();
   ['mega','casting','boxes','optimus'].forEach(t=>{if(S.cash>-40)G.startTech(t)});if(S.tech.starship&&q>=2)G.startTech('orbital');
   const tryB=(t,n)=>{let k=0;for(let i=0;i<n;i++){if(G.canBuild(t))break;const s=G.findSpot(t);if(!s)break;G.place(t,...s);k++}return k};
   tryB('cast',Math.max(0,4-S.blds.filter(b=>b.t==='cast').length));
   // turbines from cores+blades
   tryB('asm',Math.max(0,5-S.blds.filter(b=>b.t==='asm').length));if(!window.BOXFIRST)tryB('turb',20);tryB('sub',Math.floor(S.inv.xf));
   // boxes: factories to consume gpu+mega
   const fleets=Math.min(Math.floor(S.inv.gpu/.1+1e-9),Math.floor(S.inv.mega/1.9+1e-9)+Math.min(Math.floor(S.inv.core/.1+1e-9),Math.floor(S.inv.blade/3)));
   tryB('boxfab',Math.max(0,Math.ceil(fleets/2)-G.live('boxfab').length-S.blds.filter(b=>b.t==='boxfab'&&b.left>0).length));
   for(let i=0;i<fleets;i++)G.deployBox();
   if(S.tech.orbital){tryB('pad',Math.max(0,2-S.blds.filter(b=>b.t==='pad').length));for(let i=0;i<4;i++)G.launchOrb()}
   const ns=tryB('solar',Math.floor(S.inv.mega/2));if(q==4)log.push('SOLAR '+ns+' '+G.canBuild('solar')+' '+G.findSpot('solar')+' n='+S.blds.length);
   {const all=t=>S.blds.filter(b=>b.t===t).length;const B=G.B;
    const powAll=S.blds.reduce((a,b)=>a+(B[b.t].pow&&!(B[b.t].needBlades&&b.bl<41)?B[b.t].pow:0),0)+(S.blds.some(b=>b.t==='sth'&&b.bl<41)?1200:0);
    const target=powAll+(q<5?0:0);const capAll=S.blds.reduce((a,b)=>a+(B[b.t].cap||0),0),coolAll=S.blds.reduce((a,b)=>a+(B[b.t].cool||0),0),mwAll=S.blds.reduce((a,b)=>a+(B[b.t].mw||0),0);
    tryB('shell',Math.max(0,Math.ceil((target-capAll)/500)));tryB('cool',Math.max(0,Math.ceil((target-coolAll)/500)));tryB('hall',Math.max(0,Math.ceil((target-mwAll)/500)));}
   // orders sized to cash
   const inc=37.5+10*G.stats().online/1000;let budget=S.cash+inc+55;
   const want={aero:[2,1],xfs:[1,.6],cool:[4,5],gev:[0,.5],sie:[0,.6],mhi:[-1,.45],xf:[-2,2],how:[-1,300]};
   for(const k in want){const[lastQ,amt]=want[k];if(q<=lastQ||q>=5){G.setReq(k,amt)}}
   budget-=10;
   const pr=q<1?25:40;const nv=Math.max(0,Math.min(6,budget/(pr*[1,1.1,1.25][0])));G.setReq('nv',+nv.toFixed(2));G.setPri('nv',0);
   G.raise();
   const z=G.stats();log.push(`\n ${S.q}:${(z.online/1000).toFixed(2)}GW p${(z.pow/1e3).toFixed(1)} m${(z.mw/1e3).toFixed(1)} c${(z.cap/1e3).toFixed(1)} k${(z.cool/1e3).toFixed(1)} inv ${Object.entries(S.inv).map(([k,v])=>k+v.toFixed(1)).join(",")} mega=${S.tech.mega} cast=${G.live("cast").length} $${S.cash.toFixed(0)} nv${nv.toFixed(1)}`);
   if(window.__shot&&q===3)window.__mid=JSON.stringify(1);
   G.endQuarter();if(G.S.q===5)G.S.e27=G.stats().online;document.getElementById('modal').style.display='none';if(S.won&&!S.over){} }
  out.push(`seed ${seed}: won=${G.S.won} END2027=${(G.S.e27/1000).toFixed(2)} final=${(G.stats().online/1000).toFixed(2)} boxes=${G.S.boxes} orb=${G.S.orbital} debt=${G.S.debt||0} | `+log.join(' '))}
 return out});
console.log(res.join('\n'));
if(SH){await p.evaluate(()=>__G.end(!!__G.S.won));await p.waitForTimeout(400);await p.screenshot({path:SH+'/v3b-4-result.png'});await p.evaluate(()=>document.getElementById('modal').style.display='none');
 await p.evaluate(()=>{__G.cam.z=1.3;__G.cam.x=40;__G.cam.y=60});await p.waitForTimeout(600);await p.screenshot({path:SH+'/v3b-3-zoom-belts.png'});
 await p.evaluate(()=>__G.fitView());await p.waitForTimeout(500);await p.screenshot({path:SH+'/v3b-2-end2027-factory.png'});
 }console.log('ERRORS',JSON.stringify(errs));await b.close()})();
