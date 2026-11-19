(()=>{
const d=document,$=(s)=>d.querySelector(s),$$=(s)=>[...d.querySelectorAll(s)];
const ready=()=>d.body.classList.add('ready');
addEventListener('load',()=>setTimeout(ready,450));setTimeout(ready,2500);
const nav=$('#nav'),btn=$('#menu');
const close=()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')};
btn.addEventListener('click',()=>btn.setAttribute('aria-expanded',nav.classList.toggle('open')));
$$('#nav a').forEach(a=>a.addEventListener('click',close));
addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const links=$$('#nav a[href^="#"]');
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>spy.observe(s));
const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>rv.observe(el));
$('#top').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
})();
