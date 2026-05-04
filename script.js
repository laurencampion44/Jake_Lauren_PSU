

let current = 0;
function checkPassword() {
    let input = document.getElementById("passwordInput").value;

    if (input === "09032022love") {
        document.getElementById("passwordScreen").style.display = "none";
    } else {
        alert("Wrong password 💔");
    }
}

function showSlide(index) {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function revealOnScroll() {
    let points = document.querySelectorAll(".timeline-point");

    points.forEach(point => {
        let windowHeight = window.innerHeight;
        let elementTop = point.getBoundingClientRect().top;

        if (elementTop < windowHeight - 50) {
            point.classList.add("show");
        }
    });
}

function calculateTimeTogether() {
    let startDate = new Date("2022-09-18T00:00:00"); // 👉 adjust time if needed
    let now = new Date();

    let diff = now - startDate;

    // total calculations
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let daysTotal = Math.floor(hours / 24);

    // breakdown
    let years = Math.floor(daysTotal / 365);
    let months = Math.floor((daysTotal % 365) / 30);
    let days = (daysTotal % 365) % 30;

    let remainingHours = hours % 24;
    let remainingMinutes = minutes % 60;
    let remainingSeconds = seconds % 60;

    document.getElementById("timeTogether").innerText =
        `We’ve been together for 
        ${years}y ${months}m ${days}d 
        ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s 💙`;
}

// 🔥 THIS makes it live
setInterval(calculateTimeTogether, 1000);
window.addEventListener("load", calculateTimeTogether);

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

window.onload = function() {
    if (document.getElementById("slide")) {
        showSlide(current);
    }
};

window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};