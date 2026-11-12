"use strict";

// Sweet Alert CDN through JS
if (!document.getElementById("sweetalert-script")) {
  let script = document.createElement("script");
  script.id = "sweetalert-script";
  script.type = "text/javascript";
  script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
  document.head.appendChild(script);
}

// Global Config Fallback
const CFG = window.PORTFOLIO_CONFIG || {
  FULL_NAME: "Pinninti Varaha Siddartha Nikhil",
  SHORT_NAME: "Nikhil Siddartha",
  TITLE: "Software Development Engineer | Full Stack Developer | AI/ML Enthusiast",
  HEADLINE: "Software Development Engineer | Competitive Programmer | Full Stack Developer",
  LINKEDIN_URL: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
  GITHUB_URL: "https://github.com/NikhilSiddartha1342",
  LEETCODE_URL: "https://leetcode.com/u/nikhilsiddarthaa21/",
  HACKERRANK_URL: "https://www.hackerrank.com/profile/23241a05a7vsn",
  GEEKSFORGEEKS_URL: "https://www.geeksforgeeks.org/profile/siddartha2rgl6",
  EMAIL_ADDRESS: "nikhilsiddartha21@gmail.com",
  RESUME_PATH: "assets/docs/Nikhil_Siddartha_Resume.pdf",
  CURRENT_YEAR: new Date().getFullYear()
};

// Navigation Bar
let header = $(`
<nav class="navbar navbar-expand-lg fixed-top dark-theme" id="navbar">
  <div class="container-fluid px-3 px-lg-4">
    <a class="navbar-brand d-flex align-items-center" href="index.html">
      <span class="brand-code">&lt;</span>
      <span class="brand-name">${CFG.SHORT_NAME}</span>
      <span class="brand-code">/&gt;</span>
    </a>

    <div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div id="js-hamburger" class="hamburger">
        <span class="first"></span>
        <span class="second"></span>
        <span class="third"></span>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto align-items-center" id="navbar-content">
        <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html#about">About</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Education</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="techstack.html">Skills</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html">Experience</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="projects.html">Projects</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="experience.html#achievements">Achievements</a></li>
        <li class="nav-item nav-item-hover"><a class="nav-link" href="#contact">Contact</a></li>
        <li class="nav-item ml-lg-2 my-2 my-lg-0">
          <a class="nav-resume-btn" href="${CFG.RESUME_PATH}" target="_blank" download="Nikhil_Siddartha_Resume.pdf" title="Download Resume">
            <i class="fas fa-file-download mr-1"></i>Resume
          </a>
        </li>
        <li class="nav-item ml-lg-2">
          <input type="checkbox" id="dark_toggler" class="dark_toggler" aria-label="Toggle Light/Dark Mode" onclick="toggle_light_mode()" checked>
        </li>
      </ul>
    </div>
  </div>
</nav>`);

// Contact Section & Footer Component
let footer = $(`
<footer class="footer sticky-bottom contact-section-wrapper" id="contact">
  <div class="py-5 px-3 px-md-5">
    <div class="container text-center mb-5">
      <h2 class="contact-main-heading">Let's <span class="highlight-accent">Connect</span></h2>
      <p class="contact-main-subtitle">
        Have an opportunity, an interesting project, or just want to connect? Feel free to reach out. I'd love to hear from you!
      </p>

      <!-- 4 Social Contact Cards Grid -->
      <div class="row text-left mb-5">
        <!-- 1. LinkedIn Card -->
        <div class="col-12 col-sm-6 col-lg-3 mb-3">
          <a href="${CFG.LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" class="social-contact-card" title="Open LinkedIn Profile">
            <div class="social-contact-icon-box icon-linkedin">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="social-contact-details">
              <h5>LinkedIn</h5>
              <p>Let's connect professionally</p>
            </div>
            <i class="fas fa-external-link-alt social-contact-external-icon"></i>
          </a>
        </div>

        <!-- 2. GitHub Card -->
        <div class="col-12 col-sm-6 col-lg-3 mb-3">
          <a href="${CFG.GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="social-contact-card" title="Open GitHub Profile">
            <div class="social-contact-icon-box icon-github">
              <i class="fab fa-github"></i>
            </div>
            <div class="social-contact-details">
              <h5>GitHub</h5>
              <p>Explore my repositories</p>
            </div>
            <i class="fas fa-external-link-alt social-contact-external-icon"></i>
          </a>
        </div>

        <!-- 3. LeetCode Card -->
        <div class="col-12 col-sm-6 col-lg-3 mb-3">
          <a href="${CFG.LEETCODE_URL}" target="_blank" rel="noopener noreferrer" class="social-contact-card" title="Open LeetCode Profile">
            <div class="social-contact-icon-box icon-leetcode">
              <i class="fas fa-code"></i>
            </div>
            <div class="social-contact-details">
              <h5>LeetCode</h5>
              <p>Explore coding profile</p>
            </div>
            <i class="fas fa-external-link-alt social-contact-external-icon"></i>
          </a>
        </div>

        <!-- 4. Email Card -->
        <div class="col-12 col-sm-6 col-lg-3 mb-3">
          <a href="mailto:${CFG.EMAIL_ADDRESS}" class="social-contact-card" title="Send Direct Email">
            <div class="social-contact-icon-box icon-email">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="social-contact-details">
              <h5>Email Me</h5>
              <p>Get in touch directly</p>
            </div>
            <i class="fas fa-paper-plane social-contact-external-icon"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Contact Form & Overview Row -->
    <div class="container mb-4">
      <div class="row align-items-stretch">
        <!-- Overview Left Column -->
        <div class="col-lg-5 col-md-12 mb-4 mb-lg-0 text-white">
          <div class="footer-bio-card p-4 rounded h-100 d-flex flex-column justify-content-between" style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); backdrop-filter: blur(10px); border-radius: 14px;">
            <div>
              <h4 class="font-weight-bold text-white mb-2" style="letter-spacing: 0.5px;">${CFG.FULL_NAME}</h4>
              <p class="mb-3 font-weight-500" style="color: #38bdf8 !important;">${CFG.TITLE}</p>
              <p class="text-muted small mb-4" style="color: #94a3b8 !important; line-height: 1.7;">
                B.Tech Computer Science & Engineering undergraduate at GRIET Hyderabad (CGPA: 9.11/10). Solved 1000+ problems on LeetCode (Knight Tier, 2000+ rating). Interested in scalable full-stack applications, intelligent agentic workflows, and competitive programming.
              </p>
            </div>
            <div class="footer-contact-details">
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-map-marker-alt text-info mr-3" style="width: 20px;"></i>
                <span style="color: #cbd5e1;">Hyderabad, Telangana, India</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="fas fa-envelope text-info mr-3" style="width: 20px;"></i>
                <a href="mailto:${CFG.EMAIL_ADDRESS}" style="color: #38bdf8; text-decoration: none;">${CFG.EMAIL_ADDRESS}</a>
              </div>
              <a href="${CFG.RESUME_PATH}" target="_blank" download="Nikhil_Siddartha_Resume.pdf" class="btn btn-sm btn-outline-info" style="border-radius: 6px; padding: 6px 16px; font-weight: 500;">
                <i class="fas fa-download mr-1"></i> Download Resume PDF
              </a>
            </div>
          </div>
        </div>

        <!-- Direct Message Form Column -->
        <div class="col-lg-7 col-md-12">
          <div class="contact-form-glass-card">
            <div class="mb-3">
              <h5 class="text-white font-weight-bold mb-1"><i class="fas fa-paper-plane mr-2 text-info"></i>Send a Direct Message</h5>
              <p class="small text-muted mb-0">Fill out the fields below to dispatch a message directly to my inbox.</p>
            </div>

            <!-- Feedback Alert Banner -->
            <div id="contactFormFeedback" class="form-feedback-alert" role="alert"></div>

            <form id="contactForm" onsubmit="handleContactSubmit(event)" novalidate>
              <div class="row">
                <div class="col-md-6 form-group mb-3">
                  <label for="name">Your Name <span class="text-danger">*</span></label>
                  <input id="name" type="text" name="name" class="form-control" placeholder="e.g. Alex Johnson" required />
                  <div class="invalid-feedback">Please enter your name.</div>
                </div>
                <div class="col-md-6 form-group mb-3">
                  <label for="email">Your Email Address <span class="text-danger">*</span></label>
                  <input id="email" type="email" name="email" class="form-control" placeholder="alex@example.com" required />
                  <div class="invalid-feedback">Please provide a valid email address.</div>
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="subject">Subject <span class="text-muted">(Optional)</span></label>
                <input id="subject" type="text" name="subject" class="form-control" placeholder="Project collaboration / Internship inquiry" />
              </div>
              <div class="form-group mb-3">
                <label for="textArea">Message <span class="text-danger">*</span></label>
                <textarea id="textArea" name="message" class="form-control" rows="4" placeholder="Hello Nikhil, I would like to discuss..." required></textarea>
                <div class="invalid-feedback">Please enter your message.</div>
              </div>
              <button id="lnch" type="submit" class="btn btn-info btn-block py-2 font-weight-bold" style="background: linear-gradient(135deg, #0284c7, #2563eb); border: none; border-radius: 8px;">
                <i class="fas fa-paper-plane mr-2"></i>Send Message via Email Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer Row -->
    <div class="container text-center mt-5 pt-3 border-top" style="border-color: rgba(255, 255, 255, 0.08) !important;">
      <div class="rounded-social-buttons d-flex justify-content-center flex-wrap mb-3" style="gap: 14px;">
        <a class="social-button-custom github-btn" href="${CFG.GITHUB_URL}" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a class="social-button-custom linkedin-btn" href="${CFG.LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="social-button-custom leetcode-btn" href="${CFG.LEETCODE_URL}" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <i class="fas fa-code"></i>
        </a>
        <a class="social-button-custom hackerrank-btn" href="${CFG.HACKERRANK_URL}" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <i class="fab fa-hackerrank"></i>
        </a>
        <a class="social-button-custom gfg-btn" href="${CFG.GEEKSFORGEEKS_URL}" target="_blank" rel="noopener noreferrer" title="GeeksforGeeks">
          <i class="fas fa-laptop-code"></i>
        </a>
        <a class="social-button-custom mail-btn" href="mailto:${CFG.EMAIL_ADDRESS}" title="Email Nikhil">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p class="text-muted small mb-0" style="color: #64748b !important;">
        © <span id="currentYear">${CFG.CURRENT_YEAR}</span> ${CFG.FULL_NAME}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
`);

// Validated Contact Form Submission Handler
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const nameEl = document.querySelector("#name");
  const emailEl = document.querySelector("#email");
  const subjectEl = document.querySelector("#subject");
  const messageEl = document.querySelector("#textArea");
  const feedbackEl = document.querySelector("#contactFormFeedback");

  const name = nameEl ? nameEl.value.trim() : "";
  const email = emailEl ? emailEl.value.trim() : "";
  const subject = (subjectEl && subjectEl.value.trim()) || `Portfolio Inquiry from ${name || "Visitor"}`;
  const message = messageEl ? messageEl.value.trim() : "";

  // Email format validator regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous validation classes
  [nameEl, emailEl, messageEl].forEach(el => el && el.classList.remove("is-invalid"));

  let hasError = false;
  let errorMsg = "";

  if (!name) {
    if (nameEl) nameEl.classList.add("is-invalid");
    hasError = true;
    errorMsg = "Please enter your name.";
  } else if (!email || !emailRegex.test(email)) {
    if (emailEl) emailEl.classList.add("is-invalid");
    hasError = true;
    errorMsg = "Please provide a valid email address.";
  } else if (!message) {
    if (messageEl) messageEl.classList.add("is-invalid");
    hasError = true;
    errorMsg = "Please enter your message.";
  }

  if (hasError) {
    if (feedbackEl) {
      feedbackEl.className = "form-feedback-alert alert alert-danger";
      feedbackEl.style.display = "block";
      feedbackEl.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${errorMsg}`;
    }
    if (typeof swal !== "undefined") {
      swal("Missing Information", errorMsg, "warning");
    }
    return false;
  }

  // Hide feedback banner
  if (feedbackEl) feedbackEl.style.display = "none";

  // Build mailto URI
  const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:${CFG.EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

  if (typeof swal !== "undefined") {
    swal({
      title: "Open Email Application?",
      text: `Your message is ready to send to ${CFG.EMAIL_ADDRESS}. Click below to launch your default mail client with pre-filled content.`,
      icon: "info",
      buttons: ["Cancel", "Launch Email App"]
    }).then((willOpen) => {
      if (willOpen) {
        window.location.href = mailtoUrl;
      }
    });
  } else {
    window.location.href = mailtoUrl;
  }
  return false;
};

// Preloader dismiss handler
function dismissPreloader() {
  let loader = document.querySelector(".loader-container");
  if (loader) {
    loader.classList.add("disappear");
    $(loader).fadeOut(600);
  }
  let preloads = document.querySelectorAll(".no-scroll-preload");
  preloads.forEach(el => {
    el.classList.remove("no-scroll-preload");
    el.style.overflow = "visible";
  });
}

// Dismiss as soon as page loads, with a fallback timer
window.addEventListener("load", dismissPreloader);
$(document).ready(function() {
  setTimeout(dismissPreloader, 800);
});
setTimeout(dismissPreloader, 2000);

// "Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()" aria-label="Scroll to top" title="Scroll to top">
    <i class="fas fa-angle-up"></i>
  </button>
`);

// DOM Ready initialization
$(document).ready(function () {
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $("#btnScrollToTop").css("visibility", "hidden").css("opacity", "0");
    } else {
      $("#btnScrollToTop").css("visibility", "visible").css("opacity", "1");
    }
  });
});

// Function to scroll smoothly to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Load handler
$(function () {
  let bodyElement = $("body");
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  // Dynamic active link highlighting
  let currentPath = window.location.pathname.split("/").pop() || "index.html";
  $("a.nav-link").each(function () {
    let href = $(this).attr("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      $(this).addClass("current-link");
    }
  });
});

// Light/Dark mode toggler function
function toggle_light_mode() {
  var app = document.getElementsByTagName("HTML")[0];
  if (localStorage.getItem("lightMode") == "dark") {
    localStorage.setItem("lightMode", "light");
    app.setAttribute("light-mode", "light");
    updateColorOfSwiperBullets("light");
  } else {
    localStorage.setItem("lightMode", "dark");
    app.setAttribute("light-mode", "dark");
    updateColorOfSwiperBullets("dark");
  }
}

function updateColorOfSwiperBullets(mode) {
  let bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach(bullet => {
    if (mode === "light") {
      bullet.style.backgroundColor = "#2563eb";
    } else {
      bullet.style.backgroundColor = "#64ffda";
    }
  });
}

window.addEventListener("load", function () {
  var app = document.getElementsByTagName("HTML")[0];
  var mode = localStorage.getItem("lightMode");
  var toggler = document.getElementById("dark_toggler");
  if (mode === "light") {
    app.setAttribute("light-mode", "light");
    if (toggler) toggler.checked = false;
  } else {
    app.setAttribute("light-mode", "dark");
    if (toggler) toggler.checked = true;
  }
});
