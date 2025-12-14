// HEADER SECTION
// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking any link on mobile
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* --------------------------------------------------
   REVEAL ON SCROLL
-------------------------------------------------- */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* --------------------------------------------------
   READ MORE SHOW/HIDE
-------------------------------------------------- */
const readMoreBtn = document.querySelector(".read-more-btn");
const readMoreContent = document.querySelector(".read-more-content");

if (readMoreBtn) {
  readMoreBtn.addEventListener("click", () => {
    const isVisible = readMoreContent.style.display === "block";

    readMoreContent.style.display = isVisible ? "none" : "block";
    readMoreBtn.textContent = isVisible ? "Read More" : "Show Less";
  });
}


/* Discharge page JS
   - reveal on scroll
   - read-more toggle
   - smooth internal links
*/

/* Smooth scroll for internal anchors (works if href="#process" etc.) */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(!target) return; // allow normal behavior for missing anchors
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 28; // small offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

/* Reveal on scroll (single observer, performant) */
(function(){
  const reveals = document.querySelectorAll('.reveal, .service-block .panel');
  if(!('IntersectionObserver' in window)) {
    // fallback: show all
    reveals.forEach(r=> r.classList.add('active'));
    return;
  }
  const obs = new IntersectionObserver((entries, obs)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('active');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.18 });
  reveals.forEach(r=> obs.observe(r));
})();

/* Read-more toggle */
(function(){
  const btn = document.querySelector('.read-more-btn');
  const cont = document.querySelector('.read-more-content');
  if(!btn || !cont) return;
  btn.addEventListener('click', ()=>{
    const isOpen = cont.style.display === 'block' || cont.classList.contains('open');
    if(isOpen){
      // hide
      cont.style.display = 'none';
      cont.classList.remove('open');
      btn.textContent = 'Read More';
    } else {
      // show with small fade
      cont.style.display = 'block';
      cont.classList.add('open');
      btn.textContent = 'Show Less';
      cont.animate([{opacity:0, transform:'translateY(8px)'}, {opacity:1, transform:'translateY(0)'}], { duration:260, easing:'cubic-bezier(.2,.9,.3,1)'});
    }
  });
})();
