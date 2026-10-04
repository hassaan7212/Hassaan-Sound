const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formSuccess').style.display='block';
  form.reset();
});
