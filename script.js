/* ------------ Dark Mode ------------ */
const body = document.body;
const toggleBtn = document.getElementById('theme-toggle');

const saved = localStorage.getItem('theme');
if(saved){ body.classList.toggle('light', saved === 'light'); updateToggleIcon(); }

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const mode = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
  updateToggleIcon();
});
function updateToggleIcon(){
  const light = body.classList.contains('light');
  toggleBtn.textContent = light ? '🌞' : '🌙';
}

/* ------------ Smooth Scroll for anchors ------------ */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

/* ------------ Typing Effect ------------ */
const typing = document.getElementById('typing');
const phrases = [
  "Aspiring SOC Analyst",
  "Cybersecurity Enthusiast",
  "Final Year BCA Student",
];
let pi = 0, ci = 0, deleting = false;

function typeLoop(){
  const full = phrases[pi];
  if(!deleting){
    typing.textContent = full.slice(0, ++ci);
    if(ci === full.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
  }else{
    typing.textContent = full.slice(0, --ci);
    if(ci === 0){ deleting = false; pi = (pi+1) % phrases.length; }
  }
  const speed = deleting ? 35 : 65;
  setTimeout(typeLoop, speed);
}
if(typing) typeLoop();

/* ------------ Reveal on Scroll ------------ */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('section, .panel, .card, .entry').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});

/* ------------ Minimal contact form (static) ------------ */
const form = document.querySelector('#contact form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const mailto = `mailto:akarshgautam6@gmail.com?subject=Portfolio%20Contact:%20${encodeURIComponent(data.name||'')}&body=${encodeURIComponent(data.message||'')}%0A%0AReply%20to:%20${encodeURIComponent(data.email||'')}`;
    window.location.href = mailto;
  });
}


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

