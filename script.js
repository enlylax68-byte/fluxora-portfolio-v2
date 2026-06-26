
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

});

aboutCards.forEach(card=>{

    aboutObserver.observe(card);

});
