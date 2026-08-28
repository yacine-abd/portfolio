const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");
// =========================================
// INTRO / BOOT SEQUENCE
// =========================================

document.body.classList.add("intro-active");

const intro = document.getElementById("intro");
const introProgress = document.getElementById("intro-progress");
const introPercent = document.getElementById("intro-percent");
const introStatus = document.getElementById("intro-status-text");
const introEnter = document.getElementById("intro-enter-text");

let progress = 0;

const statusMessages = [
    "INITIALIZING EXPERIENCE",
    "LOADING INTERFACE",
    "CONNECTING DESIGN",
    "LOADING PROJECTS",
    "PREPARING PORTFOLIO"
];

const progressInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 4) + 1;

    if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
    }

    introProgress.style.width = `${progress}%`;

    introPercent.textContent =
        String(progress).padStart(2, "0");

    const messageIndex =
        Math.min(
            Math.floor(progress / 20),
            statusMessages.length - 1
        );

    introStatus.textContent =
        statusMessages[messageIndex];

}, 55);


// =========================================
// FINISH INTRO
// =========================================

setTimeout(() => {

    introEnter.textContent =
        "ENTERING PORTFOLIO";

}, 2700);


setTimeout(() => {

    intro.classList.add("intro-exit");

    document.body.classList.remove("intro-active");

}, 3400);


setTimeout(() => {

    intro.remove();

}, 4900);

// =========================
// MOVE NAV INDICATOR
// =========================

function moveIndicator(link) {

    const linkRect = link.getBoundingClientRect();
    const navRect = link.parentElement.getBoundingClientRect();

    indicator.style.left =
        `${linkRect.left - navRect.left}px`;

    indicator.style.width =
        `${linkRect.width}px`;
}


// =========================
// INITIAL POSITION
// =========================

moveIndicator(
    document.querySelector(".nav-link.active")
);


// =========================
// CLICK NAVIGATION
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        moveIndicator(link);

    });

});


// =========================
// DETECT CURRENT SECTION
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {

                        link.classList.add("active");

                        moveIndicator(link);
                    }

                });

            }

        });

    },

    {
        threshold: 0.55
    }

);


// Observe every section

sections.forEach(section => {
    observer.observe(section);
});


// =========================
// WINDOW RESIZE
// =========================

window.addEventListener("resize", () => {

    const active =
        document.querySelector(".nav-link.active");

    moveIndicator(active);

});
lucide.createIcons();
const themeToggle = document.getElementById("theme-toggle");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}


// Update icon
function updateThemeIcon() {

    const isDark =
        document.body.classList.contains("dark");

    themeToggle.innerHTML = isDark
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

    lucide.createIcons();
}


// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();

});


updateThemeIcon();
// =========================
// TYPING EFFECT
// =========================

const typingElement = document.getElementById("typing");

const texts = [
    "UI/UX Designer",
    "Web Developer",
    "Web Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {

        // كتابة النص حرفًا حرفًا
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        // عند انتهاء الكتابة
        if (charIndex === currentText.length) {

            isDeleting = true;

            // انتظار قبل البدء بالحذف
            setTimeout(typeEffect, 1800);

            return;
        }

        setTimeout(typeEffect, 100);

    } else {

        // حذف النص حرفًا حرفًا
        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        // عند انتهاء الحذف
        if (charIndex === 0) {

            isDeleting = false;

            // الانتقال إلى النص التالي
            textIndex =
                (textIndex + 1) % texts.length;

            setTimeout(typeEffect, 400);

            return;
        }

        setTimeout(typeEffect, 60);
    }
}

// تشغيل التأثير
typeEffect();
// =========================================
// ABOUT SCROLL ANIMATION
// =========================================

const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            } else {

                entry.target.classList.remove("visible");

            }

        });

    },
    {
        threshold: 0.18
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}
// =========================================
// PROJECTS SCROLL ANIMATION
// =========================================

const projectsSection =
    document.querySelector(".projects-section");

const projectsObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                } else {

                    entry.target.classList.remove("visible");

                }

            });

        },
        {
            threshold: 0.18
        }
    );


if (projectsSection) {
    projectsObserver.observe(projectsSection);
}
// =========================================
// SERVICES SCROLL REVEAL
// =========================================

const servicesSection =
    document.querySelector(".services-section");


if (servicesSection) {

    const servicesObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    } else {

                        entry.target.classList.remove("visible");

                    }

                });

            },

            {
                threshold: 0.18
            }

        );


    servicesObserver.observe(servicesSection);

}
// =========================================
// CONTACT SCROLL REVEAL
// =========================================

const contactSection =
    document.querySelector(".contact-section");


if (contactSection) {

    const contactObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    } else {

                        entry.target.classList.remove("visible");

                    }

                });

            },

            {
                threshold: 0.18
            }

        );


    contactObserver.observe(contactSection);

}
// =========================================
// BACK TO TOP
// =========================================

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});