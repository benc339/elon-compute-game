const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const errs=[];
for(const [w,n] of [[1500,'v3b-1-start-1500px'],[1280,'']]){const p=await b.newPage({viewport:{width:w,height:900}});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto((process.argv[2]||'file:///workspace/elon-game/index.html')+'#nohelp');await p.waitForTimeout(700);
const hh=await p.evaluate(()=>document.querySelector('header').offsetHeight);console.log(w,'header h',hh);if(n)await p.screenshot({path:'/workspace/elon-game/shots/'+n+'.png'});}
console.log('ERR',JSON.stringify(errs));await b.close()})();
