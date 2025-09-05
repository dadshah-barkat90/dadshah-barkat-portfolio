(function(){
})();


// Contact form validation
(function(){
const form = document.getElementById('contactForm');
const msg = document.getElementById('contactMsg');
if(form){
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();
if(name.length < 2){ msg.textContent = 'Please enter your name.'; msg.style.color='var(--danger)'; return; }
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ msg.textContent = 'Invalid email.'; msg.style.color='var(--danger)'; return; }
if(message.length < 10){ msg.textContent = 'Message should be at least 10 characters.'; msg.style.color='var(--danger)'; return; }
msg.textContent = 'Message sent! We will reply soon.';
msg.style.color = 'var(--brand)';
form.reset();
});
}
})();


// Courses filtering & search
(function(){
const grid = document.getElementById('courseGrid');
const search = document.getElementById('searchInput');
const select = document.getElementById('categorySelect');
function applyFilters(){
if(!grid) return;
const term = (search?.value || '').toLowerCase();
const cat = (select?.value || 'all');
const cards = grid.querySelectorAll('.course');
cards.forEach(card=>{
const title = (card.getAttribute('data-title') || '').toLowerCase();
const category = card.getAttribute('data-category');
const matchesText = title.includes(term);
const matchesCat = (cat === 'all' || category === cat);
card.style.display = (matchesText && matchesCat) ? 'flex' : 'none';
});
}
if(search) search.addEventListener('input', applyFilters);
if(select) select.addEventListener('change', applyFilters);
})();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// Auto year in footer
document.getElementById("year").textContent = new Date().getFullYear();
