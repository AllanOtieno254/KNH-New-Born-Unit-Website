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







// ABOUT SECTION
/* ================
   DOCTOR DATA
================ */
const doctorTeam = [
    {
        name: "Dr. Evans Odhiambo",
        role: "Neonatal Surgeon",
        img: "./img/about-img/doc7.jpg"
    },
    {
        name: "Dr. Beatrice Mwende",
        role: "Respiratory Specialist",
        img: "./img/about-img/doc4.jpg"
    },
    {
        name: "Dr. Kelvin Mutai",
        role: "Neonatal Emergency Consultant",
        img: "./img/about-img/doc2.jpg"
    }
];

let docIndex1 = 0;
let docIndex2 = 1;

/* update 1st doctor card */
function updateDoctor1() {
    document.getElementById("doc-img").src = doctorTeam[docIndex1].img;
    document.getElementById("doc-name").textContent = doctorTeam[docIndex1].name;
    document.getElementById("doc-role").textContent = doctorTeam[docIndex1].role;
}

/* update 2nd doctor card */
function updateDoctor2() {
    document.getElementById("doc2-img").src = doctorTeam[docIndex2].img;
    document.getElementById("doc2-name").textContent = doctorTeam[docIndex2].name;
    document.getElementById("doc2-role").textContent = doctorTeam[docIndex2].role;
}

/* controls for doctors */
document.getElementById("doc-next").onclick = () => {
    docIndex1 = (docIndex1 + 1) % doctorTeam.length;
    updateDoctor1();
};
document.getElementById("doc-prev").onclick = () => {
    docIndex1 = (docIndex1 - 1 + doctorTeam.length) % doctorTeam.length;
    updateDoctor1();
};

document.getElementById("doc2-next").onclick = () => {
    docIndex2 = (docIndex2 + 1) % doctorTeam.length;
    updateDoctor2();
};
document.getElementById("doc2-prev").onclick = () => {
    docIndex2 = (docIndex2 - 1 + doctorTeam.length) % doctorTeam.length;
    updateDoctor2();
};

/* INIT */
updateDoctor1();
updateDoctor2();



/* ================
   NURSE DATA
================ */
const nurseTeam = [
    {
        name: "Nurse Angela",
        role: "NICU Senior Nurse",
        img: "./img/about-img/doc5.jpg"
    },
    {
        name: "Nurse Santoz",
        role: "Kangaroo Mother Care Specialist",
        img: "./img/about-img/nurse6 (1).jpg"
    },
    {
        name: "Nurse Brenda",
        role: "HDU Nurse",
        img: "./img/about-img/nurse2.jpg"
    }
];

let nurseIndex1 = 0;
let nurseIndex2 = 1;

/* update cards */
function updateNurse1() {
    document.getElementById("nurse-img").src = nurseTeam[nurseIndex1].img;
    document.getElementById("nurse-name").textContent = nurseTeam[nurseIndex1].name;
    document.getElementById("nurse-role").textContent = nurseTeam[nurseIndex1].role;
}

function updateNurse2() {
    document.getElementById("nurse2-img").src = nurseTeam[nurseIndex2].img;
    document.getElementById("nurse2-name").textContent = nurseTeam[nurseIndex2].name;
    document.getElementById("nurse2-role").textContent = nurseTeam[nurseIndex2].role;
}

/* controls */
document.getElementById("nurse-next").onclick = () => {
    nurseIndex1 = (nurseIndex1 + 1) % nurseTeam.length;
    updateNurse1();
};
document.getElementById("nurse-prev").onclick = () => {
    nurseIndex1 = (nurseIndex1 - 1 + nurseTeam.length) % nurseTeam.length;
    updateNurse1();
};

document.getElementById("nurse2-next").onclick = () => {
    nurseIndex2 = (nurseIndex2 + 1) % nurseTeam.length;
    updateNurse2();
};
document.getElementById("nurse2-prev").onclick = () => {
    nurseIndex2 = (nurseIndex2 - 1 + nurseTeam.length) % nurseTeam.length;
    updateNurse2();
};

/* INIT */
updateNurse1();
updateNurse2();




// ================================
// TIMELINE SCROLL ANIMATION
// ================================
const timelineItems = document.querySelectorAll(".timeline-item");

function animateTimeline() {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateTimeline);
window.addEventListener("load", animateTimeline);


// SERVICE SECTION
// Fade-in animation on scroll

