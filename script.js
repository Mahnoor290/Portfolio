/* ==========================================
   MAHNOOR MALIK PORTFOLIO
   script.js
========================================== */

// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing-text");

const text = "BBIT Student • AI Enthusiast • Web Developer";

let index = 0;

function typeText() {

    if (!typingElement) return;

    if (index < text.length) {

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 70);

    }

}

typeText();


// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {

        progressBar.style.width = progress + "%";

    }

});


// ===============================
// Back To Top Button
// ===============================

const backButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backButton) return;

    if (window.scrollY > 500) {

        backButton.classList.add("show");

    } else {

        backButton.classList.remove("show");

    }

});

if (backButton) {

    backButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===============================
// Dark Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}
/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menu-btn");
document.addEventListener("click",(e)=>{

    if(!menuBtn.contains(e.target) && !navLinks.contains(e.target)){

        navLinks.classList.remove("show");

    }

});
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

    navLinks.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("show");

        });

    });

}
// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// ==========================================
// Reveal on Scroll
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(section=>{

    observer.observe(section);

});
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        navLinks.classList.remove("show");

    }

});
// ==========================================
// Contact Form
// ==========================================


// ==========================
// EmailJS
// ==========================

emailjs.init("cNNDDq3k6Pizme49O");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

   emailjs.send(
    "service_1jjwt3l",
    "template_22pogp9",
    {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
    }
)
.then(function () {
    alert("✅ Message sent successfully!");
    contactForm.reset();
})
.catch(function (error) {
    console.log(error);
    alert("❌ " + JSON.stringify(error));
});

});