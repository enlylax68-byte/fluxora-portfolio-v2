
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
