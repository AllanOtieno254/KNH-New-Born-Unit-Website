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




// Emergency behavior
const emergency = document.getElementById("emergencyBar");
const number = "+254720000000";

if (/Mobi|Android/i.test(navigator.userAgent)) {
    emergency.onclick = () => window.location.href = `tel:${number}`;
} else {
    emergency.onclick = () => alert(`Emergency Number: ${number}`);
}

// Wizard
const steps = document.querySelectorAll(".form-step");
const progress = document.querySelectorAll(".step");
let current = 0;

document.querySelectorAll(".next").forEach(btn =>
    btn.onclick = () => move(1)
);
document.querySelectorAll(".prev").forEach(btn =>
    btn.onclick = () => move(-1)
);

function move(dir) {
    steps[current].classList.remove("active");
    progress[current].classList.remove("active");
    current += dir;
    steps[current].classList.add("active");
    progress[current].classList.add("active");
}

// Submit
document.getElementById("bookingForm").addEventListener("submit", async e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    document.getElementById("bookingId").textContent = data.bookingID;
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmation").classList.remove("hidden");
});
