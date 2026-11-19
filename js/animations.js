(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(rm)return;
const cur=document.getElementById('cur');
if(cur&&matchMedia('(pointer:fine)').matches)addEventListener('pointermove',e=>{cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
const viz=document.querySelector('.viz');
if(viz)addEventListener('scroll',()=>{viz.style.transform=`translateY(${Math.min(scrollY,600)*.08}px)`},{passive:true});
const c=document.getElementById('bg');if(!c)return;
const x=c.getContext('2d');let w,h,p=[],on=true;
const fit=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;p=Array.from({length:Math.min(60,w/20|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
fit();addEventListener('resize',fit);
new IntersectionObserver(e=>on=e[0].isIntersecting).observe(c);
(function t(){requestAnimationFrame(t);if(!on)return;x.clearRect(0,0,w,h);
p.forEach((a,i)=>{a.x=(a.x+a.vx+w)%w;a.y=(a.y+a.vy+h)%h;x.fillStyle='rgba(81,152,114,.7)';x.fillRect(a.x,a.y,2,2);
for(let j=i+1;j<p.length;j++){const b=p[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){x.strokeStyle=`rgba(81,152,114,${.18*(1-d/120)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}})})();
})();
