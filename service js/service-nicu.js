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

/* NICU */

// =========================
// FAQ Accordion (details)
// =========================
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    detailsElements.forEach((el) => {
      if (el !== detail) el.removeAttribute('open');
    });
  });
});

// =========================
// Smooth Scroll for Anchor Links
// =========================
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
