// HEADER SECTION
// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Emergency Modal
const modal = document.getElementById('emergencyModal');
const btn = document.getElementById('emergencyBtn');
const span = document.getElementsByClassName('close')[0];
btn.onclick = () => modal.style.display = 'flex';
span.onclick = () => modal.style.display = 'none';
window.onclick = e => {if(e.target==modal) modal.style.display='none';};

// Animated counters
function animateCounter(id, end) {
  let count = 0;
  const elem = document.getElementById(id);
  const step = Math.ceil(end/100);
  const interval = setInterval(() => {
    count+=step;
    if(count>=end){count=end; clearInterval(interval);}
    elem.innerText = count;
  },20);
}
animateCounter('visitorsToday', 35);
animateCounter('allowedVisitors', 50);
animateCounter('emergencyVisits', 2);
