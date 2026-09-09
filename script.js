async function start(){
 const d=await fetch('content.json?x='+Date.now()).then(r=>r.json());
 document.title=d.name;
 document.getElementById('tagline').textContent=d.tagline;
 document.getElementById('description').textContent=d.description;
 document.getElementById('heroImage').src=d.heroImage;
 document.getElementById('aboutText').textContent=d.about;
 document.getElementById('giving').textContent=d.giving;
 document.getElementById('programs').innerHTML=d.programs.map(p=>`<article class="card"><div class="icon">${p.icon}</div><h3>${p.title}</h3><p>${p.text}</p></article>`).join('');
 document.getElementById('galleryList').innerHTML=d.photos.map(x=>`<img src="${x}" alt="Hope Charity community">`).join('');
 document.getElementById('location').textContent='📍 '+(d.contact.location||'');
 document.getElementById('phone').textContent='📞 '+(d.contact.phone||'');
 document.getElementById('email').textContent=d.contact.email?'✉️ '+d.contact.email:'';
 const t=document.getElementById('tiktok');t.href=d.contact.tiktok||'#';
 document.getElementById('year').textContent=new Date().getFullYear();
}
start();