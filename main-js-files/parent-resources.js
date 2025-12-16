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

// Accordion toggle for glossary
const accordions = document.querySelectorAll('.accordion-button');

accordions.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isOpen = content.classList.contains('active');
        // Close all
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('active');
        });
        // Open clicked
        if (!isOpen) {
            content.classList.add('active');
        }
    });
});

// File download
function downloadFile(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    link.click();
}
