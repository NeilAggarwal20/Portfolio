const toggleBtn = document.querySelector(".dark-toggle");


toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  }
});


  gsap.registerPlugin(ScrollTrigger);

    // MAIN Section Animation


    gsap.from("main aside img", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",

      toggleActions: "play reverse play reverse",
      once: false,
      lazy: true
    });

    // About Heading Animation
    gsap.from(".about-heading", {
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 80%",

        toggleActions: "play reverse play reverse",
        once: false,
        lazy: true
      },
      y: 50,
      opacity: 0,
      duration: 1
    });


    // Work HEADING Animations
    gsap.from(".work-heading", {
      scrollTrigger: {
        trigger: ".work-heading",
        start: "top 80%",

        toggleActions: "play reverse play reverse",
        once: false,
        lazy: true
      },
      y: 60,
      opacity: 0,
      duration: 1
    });

    gsap.from(".work-section div", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        
        toggleActions: "play reverse play reverse",
        once: false,
        lazy: true
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

    // Footer Animation
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 95%",
        toggleActions: "play reverse play reverse",
        once: false,
        lazy: true
      },
      opacity: 0,
      y: 50,
      duration: 0.5
    });

// CONTACT FORM
const contactBtn = document.querySelector(".contact-btn");
const contactModal = document.querySelector(".contact-modal");
const closeBtn = document.querySelector(".close-btn");


contactBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    contactModal.classList.remove("hidden");
});


closeBtn.addEventListener("click", () => {
    contactModal.classList.add("hidden");
});


// Hamburger menu toggle for mobile
const nav = document.querySelector('nav');
const bars = document.querySelector('.fa-bars');
bars.addEventListener('click', () => {
    nav.classList.toggle('open');
});
