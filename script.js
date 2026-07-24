// ======================================
// FLASHWELD ENGINEERS
// script.js
// ======================================


// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#05121d";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(6,20,36,.95)";
        header.style.boxShadow = "none";
    }

});



// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});




// =============================
// Scroll Reveal
// =============================

const reveals = document.querySelectorAll("section");

function revealSection() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = ".8s";

});

window.addEventListener("scroll", revealSection);

revealSection();




// =============================
// Counter Animation
// =============================

const counters = document.querySelectorAll(".counter h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const top = counterSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText.replace(/\D/g, "");

            const target = Number(text);

            let count = 0;

            const speed = target / 120;

            function update() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    if (counter.innerText.includes("%")) {

                        counter.innerText = target + "%";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);




// =============================
// Image Lightbox
// =============================

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = "<img>";

document.body.appendChild(lightbox);

const lightImage = lightbox.querySelector("img");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightImage.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});




// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




// =============================
// Contact Form Validation
// =============================

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]');

const email = form.querySelector('input[type="email"]');

const mobile = form.querySelectorAll('input[type="text"]')[1];

const message = form.querySelector("textarea");

if(

name.value.trim()==="" ||

email.value.trim()==="" ||

mobile.value.trim()==="" ||

message.value.trim()===""

){

alert("Please fill all fields.");

return;

}

alert("Thank You!\n\nYour enquiry has been submitted successfully.");

form.reset();

});

}




// =============================
// Active Menu Highlight
// =============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop-120;

const height = section.clientHeight;

if(pageYOffset >= top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});