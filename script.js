
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

});/* ===================================
   MODULE 6 - TEAM ANIMATION
=================================== */

const teamCards = document.querySelectorAll(".team-card");

const teamObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-team");

        }

    });

}, {
    threshold: 0.2
});

teamCards.forEach(card => {
    teamObserver.observe(card);
});


/* ===== Premium 3D Hover ===== */

teamCards.forEach(card => {

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
        translateY(-12px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

console.log("✅ Module 6 Loaded Successfully");/* ===================================
   MODULE 7 - TESTIMONIALS
=================================== */

// ===== Testimonial Auto Slider =====

const testimonialCards = document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function showTestimonial(index){

    testimonialCards.forEach((card)=>{
        card.classList.remove("active");
    });

    testimonialCards[index].classList.add("active");

}

setInterval(()=>{

    testimonialIndex++;

    if(testimonialIndex >= testimonialCards.length){
        testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);

},5000);


// ===== Reveal Animation =====

const testimonialObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-testimonial");

        }

    });

},{
    threshold:0.2
});

testimonialCards.forEach(card=>{
    testimonialObserver.observe(card);
});


// ===== Hover Effect =====

testimonialCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*8;
        const rotateX = ((y / rect.height)-0.5)*-8;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});

console.log("⭐ Module 7 Loaded Successfully");/* ===================================
   MODULE 8 - CONTACT SECTION
=================================== */

// ===== Contact Section Reveal =====

const contactSection = document.querySelector(".contact");
const contactItems = document.querySelectorAll(".info-card, .contact-form");

const contactObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            contactItems.forEach((item, index) => {

                setTimeout(() => {

                    item.classList.add("show-contact");

                }, index * 150);

            });

            contactObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

if (contactSection) {
    contactObserver.observe(contactSection);
}


// ===== Contact Form Demo =====

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.innerHTML = "✅ Message Sent";

        button.style.background = "#00c853";

        setTimeout(()=>{

            button.innerHTML = "Send Message";

            button.style.background = "";

            contactForm.reset();

        },2500);

    });

}/* ===================================
   MODULE 9 - ANIME EFFECTS
=================================== */

// ===== Scroll To Top =====

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== Sakura Animation =====

const sakuraContainer = document.getElementById("sakura-container");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "absolute";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";
    petal.style.fontSize = (12 + Math.random() * 18) + "px";
    petal.style.opacity = Math.random();

    petal.style.animation =
        `fall ${6 + Math.random() * 5}s linear forwards`;

    sakuraContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);

}

setInterval(createPetal, 350);


// ===== Floating Buttons =====

const floatingButtons = document.querySelectorAll(
".float-whatsapp,.float-instagram"
);

floatingButtons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.15) rotate(8deg)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1) rotate(0deg)";

    });

});


console.log("🌸 Module 9 Loaded");/* ===================================
   MODULE 10 - ULTRA PREMIUM
=================================== */

// Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},1500);

});


// Progress Bar

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const height=document.body.scrollHeight-window.innerHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});


// Cursor

const dot=document.querySelector(".cursor-dot");
const outline=document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

outline.style.left=(e.clientX-15)+"px";
outline.style.top=(e.clientY-15)+"px";

});


// Particles

const particles=document.getElementById("particles");

function particle(){

const p=document.createElement("div");

p.style.position="absolute";

p.style.width="4px";

p.style.height="4px";

p.style.background="#4F8CFF";

p.style.borderRadius="50%";

p.style.left=Math.random()*100+"vw";

p.style.top="100vh";

p.style.opacity=Math.random();

p.style.animation="particleUp 7s linear forwards";

particles.appendChild(p);

setTimeout(()=>{

p.remove();

},7000);

}

setInterval(particle,150);
