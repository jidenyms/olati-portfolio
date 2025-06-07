// script.js

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          });
        }
      });
    });
  });
// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => {
  observer.observe(el);
});
  


/*newcode*/

document.getElementById('readMoreBtn').addEventListener('click', function () {
    const moreText = document.getElementById('moreText');
    if (moreText.style.display === 'inline') {
      moreText.style.display = 'none';
      this.textContent = 'Read More';
    } else {
      moreText.style.display = 'inline';
      this.textContent = 'Read Less';
    }
  });

  

  /* testimonials*/


  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 7000); // every 7 seconds


// AOS Animate On Scroll Initialization
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

 // EmailJS config
// emailjs.init("5Kuy6dJawEBCYgOlw");

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const btn = document.getElementById("submitBtn");
//   const status = document.getElementById("formStatus");
//   btn.classList.add("loading");
//   status.textContent = "";

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   if (!name || !email || !message) {
//     status.textContent = "Please fill out all fields.";
//     btn.classList.remove("loading");
//     return;
//   }

//   const params = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   emailjs
//     .send("service_ktom60v", "template_sz2fh1f", params)
//     .then(() => {
//       status.textContent = "Message sent successfully!";
//       btn.classList.remove("loading");
//       document.getElementById("contactForm").reset();
//     })
//     .catch((err) => {
//       console.error("EmailJS Error:", err);
//       status.textContent = "Something went wrong. Try again.";
//       btn.classList.remove("loading");
//     });
// });


/* header*/// Wait for DOM
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const closeBtn = document.getElementById("closeBtn");
  
    // Open mobile menu
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.add("active");
      // prevent body scroll when menu open
      document.body.style.overflow = "hidden";
    });
  
    // Close mobile menu
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  
    // Close mobile menu on scroll (mobile only)
    window.addEventListener("scroll", () => {
      if (mobileNav.classList.contains("active") && window.innerWidth <= 768) {
        mobileNav.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  
    // Smooth scroll for nav links (desktop and mobile)
    const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const target = document.querySelector(targetId);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 60,
              behavior: "smooth",
            });
            // Close mobile menu after click
            if (mobileNav.classList.contains("active")) {
              mobileNav.classList.remove("active");
              document.body.style.overflow = "";
            }
          }
        }
      });
    });
  
    // "Hire Me" buttons scroll to #contact
    const hireMeBtns = document.querySelectorAll("#hireMeBtn, #hireMeBtnMobile");
    hireMeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
          // Close mobile menu if open
          if (mobileNav.classList.contains("active")) {
            mobileNav.classList.remove("active");
            document.body.style.overflow = "";
          }
        }
      });
    });
  });

  // Force scroll to top on page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
