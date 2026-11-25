
// ZEVOR Website JavaScript

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

// ZEVOR Newsletter Form
document.addEventListener("DOMContentLoaded", function () {

    const newsletterForm = document.getElementById("newsletterForm");

    if (!newsletterForm) return;

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = document.getElementById("email");
        const message = document.getElementById("newsletterMessage");

        if (!emailInput || !message) return;

        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            return;
        }

        message.textContent = "Thank you for your interest in ZEVOR!";

        newsletterForm.reset();

    });

});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ZEVOR Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (backToTop) {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    }
});

if (backToTop) {
    backToTop.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}
// ZEVOR Hero Slider with Working Navigation Dots

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    if (slides.length === 0 || dots.length !== slides.length) {
        console.log("ZEVOR Slider: Images and dots count mismatch!");
        return;
    }

    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        currentSlide = index;

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function startSlider() {

        clearInterval(sliderTimer);

        sliderTimer = setInterval(function () {

            let nextSlide = (currentSlide + 1) % slides.length;

            showSlide(nextSlide);

        }, 4000);
    }

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);
            startSlider();

        });

    });

    showSlide(0);
    startSlider();

});
// ZEVOR Luxury Loading Screen

window.addEventListener("load", function () {

    const loader = document.getElementById("zevor-loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("loader-hidden");
        }, 2000);
    }

});
// ZEVOR Scroll Reveal Animation

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        revealElements.forEach(function (element) {

            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight - 50) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    window.addEventListener("load", revealOnScroll);

    revealOnScroll();

});
// ZEVOR Active Navigation Highlight

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(
        "#home, #shop, #collections, #about, #contact"
    );

    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - 150 &&
                window.scrollY < sectionTop + sectionHeight - 150) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

});
// ZEVOR Mobile Navbar Auto Close

document.addEventListener("DOMContentLoaded", function () {

    const navbarMenu = document.getElementById("navbarMenu");

    if (!navbarMenu || typeof bootstrap === "undefined") {
    return;
}

    const navLinks = document.querySelectorAll(
        "#navbarMenu .nav-link, #navbarMenu .gold-btn"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth < 992) {

                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
                    navbarMenu,
                    { toggle: false }
                );

                bsCollapse.hide();

            }

        });

    });

});

