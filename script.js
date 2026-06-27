
/* ===================================
   FLUXORA PORTFOLIO V2
   MODULE 1 - JAVASCRIPT
=================================== */

// ===== Smooth Fade In =====

window.addEventListener("load", () => {

    document.querySelector(".hero-text").classList.add("show");

});

// ===== Navbar Background on Scroll =====

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(10,15,30,0.85)";
        navbar.style.backdropFilter = "blur(22px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "none";

    }

});

// ===== Button Animation =====

document.querySelectorAll(".hero-buttons a").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-6px) scale(1.04)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// ===== Console Message =====

console.log("🚀 FLUXORA Portfolio V2 Loaded Successfully");
/* ===================================
   MODULE 2 - ABOUT ANIMATIONS
=================================== */

// ===== Animated Counters =====

const stats = document.querySelectorAll(".stat h3");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

stats.forEach(stat => {

    counterObserver.observe(stat);

});


// ===== About Card Reveal =====

const aboutCards = document.querySelectorAll(".about-card");

const aboutObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-card");

        }

    });

});/* ===================================
   MODULE 3 - SERVICES ANIMATION
=================================== */

// ===== Services Scroll Reveal =====

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-service");
        }

    });

}, {
    threshold: 0.2
});

serviceCards.forEach(card => {
    serviceObserver.observe(card);
});


// ===== Mouse Tilt Effect =====

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

console.log("✅ Module 3 Loaded");/* ===================================
   MODULE 4 - SKILLS ANIMATION
=================================== */

const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");
const skillBoxes = document.querySelectorAll(".skill-box");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Animate Progress Bars
            progressBars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });

            // Reveal Skill Cards
            skillBoxes.forEach((box, index) => {

                setTimeout(() => {
                    box.classList.add("show-skill");
                }, index * 150);

            });

            skillObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

if (skillSection) {
    skillObserver.observe(skillSection);
}/* ===================================
   MODULE 5 - PROJECTS ANIMATION
=================================== */

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show-project");

        }

    });

},{
    threshold:0.2
});

projectCards.forEach(card=>{
    projectObserver.observe(card);
});


/* ===== Premium 3D Hover ===== */

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*14;
        const rotateX = ((y / rect.height)-0.5)*-14;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});


console.log("🚀 Module 5 Loaded Successfully");

aboutCards.forEach(card=>{

    aboutObserver.observe(card);

});
