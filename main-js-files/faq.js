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




document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('.icon');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.maxHeight = null;
            });
            document.querySelectorAll('.icon').forEach(i => {
                i.textContent = '+';
            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '−';
        }
    });
});
