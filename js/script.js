/* =========================
   IYUNGA SECONDARY SCHOOL
   JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    /* Check fields */

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    /* Success */

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});


/* =========================
   SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(
    ".welcome, .services, .about, .contact"
);


function revealSections() {

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;


        if (sectionTop < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);


/* =========================
   BACK TO TOP BUTTON
========================= */

const topButton =
    document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

topButton.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   AUTOMATIC YEAR
========================= */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Iyunga Secondary School website loaded successfully."
);