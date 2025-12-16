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

// Reveal animation
const cards = document.querySelectorAll(
    '.area-card, .tech-card, .safety-card'
);

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});
