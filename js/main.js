/* Luxury Software: rendering, interactions and animations. Content lives in config.js */
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n]}"/></svg>`;
const $=s=>document.querySelector(s),C=CONFIG;
// logo
$("#logo").innerHTML=C.logo?`<img src="${C.logo}" alt="Luxury Software" height="40">`:
 `<svg viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="8" fill="#0f1b3d"/><path d="M11 8v13h12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="23" cy="10" r="2.2" fill="#b8893b"/></svg><span>Luxury Software</span>`;
// content
const card=(i,t,d,k)=>`<article class="card rv" style="--d:${k*.05}s"><div class="ib">${ic(i)}</div><h3>${t}</h3><p>${d}</p></article>`;
$("#svc").innerHTML=C.services.map((s,k)=>card(...s,k%4)).join("");
$("#whyg").innerHTML=C.why.map((s,k)=>card(...s,k%3)).join("");
$("#indg").innerHTML=C.industries.map(([i,t],k)=>`<article class="card rv" style="--d:${(k%4)*.05}s"><div class="ib">${ic(i)}</div><h3>${t}</h3></article>`).join("")+
 `<article class="card rv more"><div class="ib">${ic("layers")}</div><h3>And more</h3></article>`;
// projects
$("#projg").innerHTML=C.projects.map((p,k)=>`<article class="card proj rv" style="--d:${(k%3)*.06}s">
 <div class="thumb">${p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy">`:`<div class="mock" aria-hidden="true"><i></i><i></i><i></i></div><div class="ib">${ic(p.icon)}</div>`}<span class="cat">${p.cat}</span></div>
 <h3>${p.title}</h3><p>${p.desc}</p>
 <dl class="res">${p.results.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl>
 <ul class="tags">${p.tags.map(t=>`<li>${t}</li>`).join("")}</ul></article>`).join("");
// testimonials
$("#testg").innerHTML=C.testimonials.map((t,k)=>`<figure class="card tst rv" style="--d:${k*.08}s">
 <div class="stars" role="img" aria-label="${t.rating} out of 5 stars">${"★".repeat(t.rating)}${"☆".repeat(5-t.rating)}</div>
 <blockquote>${t.quote}</blockquote>
 <figcaption><span class="av" aria-hidden="true">${t.name.split(" ").map(w=>w[0]).join("").slice(0,2)}</span><span><b>${t.name}</b><small>${t.role}, ${t.company}</small></span></figcaption></figure>`).join("");
$("#stepsg").innerHTML=C.process.map(([n,t,d],k)=>`<li class="step rv" style="--d:${k*.08}s"><div class="num">${n}</div><h3>${t}</h3><p>${d}</p></li>`).join("");
const sv=(a,c)=>a.map(x=>`<div class="${c}"><b><span data-n="${x.v}">0</span>${x.s}</b><span>${x.l}</span></div>`).join("");
$("#stats").innerHTML=sv(C.stats,"");$("#facts").innerHTML=sv(C.facts,"fact");
const cl=c=>`<div class="cl">${c.logo?`<img src="${c.logo}" alt="${c.name}" loading="lazy">`:c.name}</div>`;
const set=C.clients.map(cl).join("");
// two identical halves; each half repeats the set so the loop is seamless on wide screens
const half=`<div class="half">${set.repeat(3)}</div>`;
$("#track").innerHTML=half+half.replace('class="half"','class="half" aria-hidden="true"');
$("#info").innerHTML=[["mail","Email",`<a href="mailto:${C.contact.email}">${C.contact.email}</a>`],["tel","Phone",`<a href="tel:${C.contact.phone.replace(/\s/g,"")}">${C.contact.phone}</a>`],["pin","Location",`<span>${C.contact.location}</span>`]]
 .map(([i,l,v])=>`<div><div class="ib">${ic(i)}</div><div><small>${l}</small>${v}</div></div>`).join("")+
 `<div class="soc">${C.contact.social.map(s=>`<a href="${s.u}" aria-label="${s.l}">${s.n}</a>`).join("")}</div>`;
$("#ptype").innerHTML='<option value="">Select a project type</option>'+C.projectTypes.map(p=>`<option>${p}</option>`).join("");
$("#yr").textContent=new Date().getFullYear();
// mobile menu
const b=$("#burger"),m=$("#menu"),tg=o=>{m.classList.toggle("open",o);b.setAttribute("aria-expanded",o)};
b.onclick=()=>tg(!m.classList.contains("open"));
m.querySelectorAll("a").forEach(a=>a.onclick=()=>tg(false));
addEventListener("keydown",e=>e.key==="Escape"&&tg(false));
// reveal + counters
const run=el=>{const to=+el.dataset.n,t0=performance.now(),d=1400;(function f(t){const p=Math.min((t-t0)/d,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-n]").forEach(run);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
// active nav link
const links=[...m.querySelectorAll("a:not(.btn)")];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
links.forEach(a=>{const s=document.querySelector(a.getAttribute("href"));s&&so.observe(s)});
// form (front-end only: connect to your backend/email service)
$("#form").onsubmit=e=>{e.preventDefault();const f=e.target;if(!f.checkValidity()){f.reportValidity();return}$("#ok").hidden=false;f.reset()};
