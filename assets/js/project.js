"use strict";

if (typeof AOS !== "undefined") {
  AOS.init();
}

/* 8 Verified Projects Data */
const projects = [
  {
    id: "racan-ai",
    title: "Racan-AI",
    tagline: "AI-Powered Personal Fashion Stylist",
    badge: "Live Demo",
    badgeClass: "badge-success",
    cardImage: "assets/images/project-page/racan_ai.jpg",
    description: "An AI-powered personal styling and fashion recommendation platform that provides hyper-personalized outfit curation using multimodal agentic vision workflows.",
    technologies: ["Gemini 2.5 Flash", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Agentic AI recommendation workflow orchestrated with Gemini 2.5 Flash multimodal vision",
      "Multimodal virtual try-on and wardrobe styling engine",
      "Conversational product discovery and ranked fashion suggestions across 10+ categories",
      "Optimized Express.js REST APIs with structured prompt engineering pipelines"
    ],
    category: "AI",
    Githublink: "https://github.com/NikhilSiddartha1342/Racan-Ai",
    Previewlink: "https://racan-ai-rho.vercel.app/"
  },
  {
    id: "awareon",
    title: "Awareon",
    tagline: "Driver Fatigue Detection System",
    badge: "Computer Vision",
    badgeClass: "badge-primary",
    cardImage: "assets/images/project-page/awareon.png",
    description: "A real-time driver drowsiness and fatigue monitoring system built with Python, OpenCV, and MediaPipe to prevent vehicle collisions through facial telemetry.",
    technologies: ["Python", "OpenCV", "MediaPipe FaceMesh", "scikit-learn", "Flask", "SQLite", "Chart.js"],
    features: [
      "Eye Aspect Ratio (EAR) & Mouth Aspect Ratio (MAR) computation",
      "PERCLOS-based fatigue analysis & weighted fatigue score",
      "Real-time facial landmark detection at 33ms/frame inference with adaptive calibration",
      "Multi-stage audio and visual alarms with remote emergency warning alert capability",
      "Flask analytics telemetry dashboard with Chart.js visualizations backed by SQLite logging"
    ],
    category: "CV",
    Githublink: "https://github.com/NikhilSiddartha1342/AwareOn",
    Previewlink: ""
  },
  {
    id: "privastram",
    title: "PrivaStram",
    tagline: "Enterprise-Grade Real-Time Multimodal Privacy Shield",
    badge: "Research / Privacy AI",
    badgeClass: "badge-info",
    cardImage: "assets/images/project-page/privastram.png",
    description: "An AI-powered privacy protection framework that detects and selectively anonymizes sensitive visual and spoken information during real-time video processing.",
    technologies: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "EasyOCR", "NLP / Transformers", "WebRTC", "PyTorch"],
    features: [
      "<span class='text-success font-weight-bold'>[Implemented]</span> Face detection and anonymization",
      "<span class='text-success font-weight-bold'>[Implemented]</span> Vehicle license plate and ID document detection",
      "<span class='text-success font-weight-bold'>[Implemented]</span> OCR-based sensitive text & PII identification",
      "<span class='text-success font-weight-bold'>[Implemented]</span> Adaptive blurring, masking & temporal mask stabilization",
      "<span class='text-success font-weight-bold'>[Implemented]</span> Real-time processed video stream output",
      "<span class='text-warning font-weight-bold'>[Planned / In Progress]</span> Audio transcription & spoken PII detection",
      "<span class='text-warning font-weight-bold'>[Planned]</span> Distributed edge deployment across multi-camera streams"
    ],
    category: "AI",
    Githublink: "",
    Previewlink: ""
  },
  {
    id: "shaktiai",
    title: "ShaktiAI",
    tagline: "AI Platform for Rural Women Entrepreneurs",
    badge: "Social Impact AI",
    badgeClass: "badge-info",
    cardImage: "assets/images/project-page/shaktiai.png",
    description: "An intelligent platform designed to support rural women entrepreneurs through conversational mentoring, government scheme discovery, and automated commerce tools.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Multilingual NLP", "Web Speech API"],
    features: [
      "Interactive AI Business Mentor for grassroots entrepreneurs",
      "Government scheme discovery & subsidy eligibility matching",
      "Hyper-local market intelligence and product pricing assistance",
      "Automated voice-assisted invoice generation & ledger management",
      "Voice input and text-to-speech for accessibility across vernacular regional languages"
    ],
    category: "FullStack",
    Githublink: "https://github.com/NikhilSiddartha1342/Shakti-Ai",
    Previewlink: ""
  },
  {
    id: "speak-up",
    title: "Speak-Up",
    tagline: "AI-Powered Public Speaking Coach",
    badge: "Live Demo",
    badgeClass: "badge-success",
    cardImage: "assets/images/project-page/speak_up.jpg",
    description: "An intelligent interactive communication platform designed to evaluate and coach public speakers using real-time audio analytics and collaborative WebRTC practice rooms.",
    technologies: ["React.js", "Node.js", "LiveKit", "WebRTC", "Web Speech API", "Gemini Flash"],
    features: [
      "Automated NLP speech scoring across 5 dimensions: Clarity, Vocabulary, Grammar, Structure & Confidence",
      "Real-time actionable feedback generated by Gemini Flash from Web Speech API transcriptions",
      "Scalable WebRTC peer rooms powered by LiveKit with screen sharing",
      "Server-side round-robin speaker queue management and in-session chat"
    ],
    category: "AI",
    Githublink: "https://github.com/NikhilSiddartha1342/speak-up-studio",
    Previewlink: "https://speak-up-studio-gules.vercel.app/"
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    tagline: "Travel Listing Web Application",
    badge: "Full Stack",
    badgeClass: "badge-secondary",
    cardImage: "assets/images/project-page/wanderlust.jpg",
    description: "A full-stack travel accommodation marketplace inspired by Airbnb, featuring property listing management, interactive geocoding, and user reviews.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap", "Mapbox API", "Cloudinary"],
    features: [
      "Full-stack property listing management with CRUD operations & RESTful routing",
      "Secure user authentication, session management, and authorization middleware",
      "Multi-image cloud uploads and automated optimization via Cloudinary",
      "Interactive mapping and address geocoding via Mapbox SDK",
      "User reviews and rating system with robust schema validation"
    ],
    category: "FullStack",
    Githublink: "https://github.com/NikhilSiddartha1342/WanderLust",
    Previewlink: ""
  },
  {
    id: "stress-predictor",
    title: "Stress Predictor",
    tagline: "ML-Based Stress Prediction & Recommendation System",
    badge: "Machine Learning",
    badgeClass: "badge-primary",
    cardImage: "assets/images/project-page/stress_predictor.png",
    description: "An intelligent machine learning application that predicts a user's stress level based on activity patterns (sleep, screen time, academics, attendance) and provides personalized recommendations to improve well-being.",
    technologies: ["Python", "Flask", "scikit-learn", "Random Forest", "StandardScaler", "NumPy", "Pandas", "Lyzr AI"],
    features: [
      "RandomForestClassifier trained with StandardScaled z-score feature transformations",
      "Processes multi-dimensional activity inputs: academic load, sleep hours, app usage, attendance & assignment deadlines",
      "Predicts stress severity into 3 discrete classes (Low, Moderate, High) with confidence scoring",
      "Generates contextual personalized well-being recommendations via Lyzr AI Agent integration",
      "Interactive Flask web dashboard with real-time prediction responses"
    ],
    category: "ML",
    Githublink: "https://github.com/NikhilSiddartha1342/Stress-Predictor",
    Previewlink: ""
  },
  {
    id: "tech-doctor",
    title: "TechDoctor",
    tagline: "Gamified Cyber-Healthcare Simulation & Assessment Platform",
    badge: "Healthcare Tech",
    badgeClass: "badge-info",
    cardImage: "assets/images/project-page/techdoctor.jpeg",
    description: "An interactive, gamified cyber-medicine training simulation built with React, Vite, and TypeScript. Students diagnose and treat simulated anatomical anomalies across body quadrants under timed evaluation and instructor oversight.",
    technologies: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Zustand"],
    features: [
      "Interactive cyber-surgery simulation spanning 5 anatomical domains (Head, Torso, Arms, Legs)",
      "Dynamic question assessment engine with timed countdowns and real-time score tracking",
      "Instructor Admin Override gate with authorization code security for proctored sessions",
      "Live competitive leaderboard with persistent state management and telemetry storage",
      "Futuristic cyberpunk UI crafted with custom SVG anatomical overlays and Framer Motion transitions"
    ],
    category: "FullStack",
    Githublink: "https://github.com/NikhilSiddartha1342/Tech-Doctor",
    Previewlink: ""
  }
];

// Function to render project cards
const showCards = () => {
  const projectcards = document.querySelector(".projectcards");
  if (!projectcards) return;

  let output = "";
  projects.forEach((proj, index) => {
    const techBadges = proj.technologies.map(t => `<span class="project-tech-tag">${t}</span>`).join("");
    const featureList = proj.features.map(f => `<li><i class="fas fa-check-circle text-info mr-2"></i><span>${f}</span></li>`).join("");

    const liveBtn = proj.Previewlink ? 
      `<a href="${proj.Previewlink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-info project-action-btn mr-2" title="Live Demo">
        <i class="fas fa-external-link-alt mr-1"></i>Live Demo
      </a>` : ``;

    const githubBtn = proj.Githublink ? 
      `<a href="${proj.Githublink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-light project-action-btn mr-2" title="GitHub Repository">
        <i class="fab fa-github mr-1"></i>GitHub
      </a>` : ``;

    output += `
      <div class="col-lg-6 col-md-12 mb-4 project-item tilt-card-wrapper" data-category="${proj.category}" data-title="${proj.title.toLowerCase()}" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
        <div class="interactive-tilt-card h-100 d-flex flex-column">
          <div class="card-glare"></div>
          <!-- Card Image & Header -->
          <div class="card-media-box">
            <img src="${proj.cardImage}" alt="${proj.title} Screenshot" class="project-card-image" loading="lazy">
            <span class="project-badge ${proj.badgeClass}">${proj.badge}</span>
          </div>

          <!-- Card Body -->
          <div class="p-4 d-flex flex-column justify-content-between flex-grow-1">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-1">
                <h3 class="project-card-title text-white mb-0">${proj.title}</h3>
              </div>
              <h6 class="project-card-subtitle text-info mb-3 font-weight-500">${proj.tagline}</h6>
              
              <p class="project-card-desc mb-3">
                ${proj.description}
              </p>

              <!-- Technologies Used -->
              <div class="mb-3">
                <div class="text-uppercase small font-weight-bold text-muted mb-2" style="font-size: 0.75rem; letter-spacing: 0.5px;">Technologies Used:</div>
                <div class="d-flex flex-wrap" style="gap: 6px;">
                  ${techBadges}
                </div>
              </div>

              <!-- Key Features -->
              <div class="mb-4">
                <div class="text-uppercase small font-weight-bold text-muted mb-2" style="font-size: 0.75rem; letter-spacing: 0.5px;">Key Features:</div>
                <ul class="project-features-list">
                  ${featureList}
                </ul>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="project-card-actions pt-3 border-top d-flex flex-wrap align-items-center" style="border-color: rgba(255, 255, 255, 0.08) !important; gap: 8px;">
              ${liveBtn}
              ${githubBtn}
              <button type="button" class="btn btn-sm btn-outline-info project-action-btn ml-auto" onclick="openProjectModal(${index})">
                <i class="fas fa-expand mr-1"></i>Explore Details
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  projectcards.innerHTML = output;
};

// Modal Details Handler with Project-Specific Visual Architecture Pipelines
window.openProjectModal = function(index) {
  const p = projects[index];
  if (!p) return;

  // Generate project-specific interactive architecture diagram / pipeline
  let pipelineHtml = "";
  if (p.id === "awareon") {
    pipelineHtml = `
      <div class="pipeline-flow-container">
        <div class="text-uppercase small font-weight-bold mb-2" style="color: #38bdf8; font-size: 0.78rem; letter-spacing: 0.5px;">
          <i class="fas fa-project-diagram mr-1"></i> Verified Fatigue Telemetry Pipeline:
        </div>
        <div class="pipeline-steps">
          <div class="pipeline-step"><i class="fas fa-video text-info mb-1 d-block"></i>Camera Feed (30 FPS)</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-smile text-info mb-1 d-block"></i>MediaPipe FaceMesh (468 pts)</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step active-step"><i class="fas fa-calculator text-cyan mb-1 d-block"></i>EAR & MAR Ratios</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-chart-line text-warning mb-1 d-block"></i>PERCLOS Scoring</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-bell text-danger mb-1 d-block"></i>Multi-Stage Alert</div>
        </div>
      </div>`;
  } else if (p.id === "privastram") {
    pipelineHtml = `
      <div class="pipeline-flow-container">
        <div class="text-uppercase small font-weight-bold mb-2" style="color: #64ffda; font-size: 0.78rem; letter-spacing: 0.5px;">
          <i class="fas fa-shield-alt mr-1"></i> Multimodal Privacy Processing Pipeline:
        </div>
        <div class="pipeline-steps">
          <div class="pipeline-step"><i class="fas fa-film text-info mb-1 d-block"></i>Video Stream</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step active-step"><i class="fas fa-user-secret text-info mb-1 d-block"></i>YOLOv8 + MediaPipe</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-id-card text-warning mb-1 d-block"></i>EasyOCR PII Extraction</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step active-step"><i class="fas fa-eye-slash text-cyan mb-1 d-block"></i>Adaptive Mask Blur</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-broadcast-tower text-success mb-1 d-block"></i>Sanitized Output</div>
        </div>
      </div>`;
  } else if (p.id === "stress-predictor") {
    pipelineHtml = `
      <div class="pipeline-flow-container">
        <div class="text-uppercase small font-weight-bold mb-2" style="color: #38bdf8; font-size: 0.78rem; letter-spacing: 0.5px;">
          <i class="fas fa-brain mr-1"></i> Activity-Data-To-Prediction Pipeline:
        </div>
        <div class="pipeline-steps">
          <div class="pipeline-step"><i class="fas fa-user-clock text-info mb-1 d-block"></i>Sleep & Screen Data</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-sliders-h text-info mb-1 d-block"></i>StandardScaler Z-Scores</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step active-step"><i class="fas fa-tree text-success mb-1 d-block"></i>Random Forest ML</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-poll text-warning mb-1 d-block"></i>Stress Severity Tier</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-robot text-cyan mb-1 d-block"></i>Lyzr AI Guidance</div>
        </div>
      </div>`;
  } else if (p.id === "racan-ai") {
    pipelineHtml = `
      <div class="pipeline-flow-container">
        <div class="text-uppercase small font-weight-bold mb-2" style="color: #38bdf8; font-size: 0.78rem; letter-spacing: 0.5px;">
          <i class="fas fa-tshirt mr-1"></i> Multimodal Stylist Recommendation Workflow:
        </div>
        <div class="pipeline-steps">
          <div class="pipeline-step"><i class="fas fa-camera-retro text-info mb-1 d-block"></i>User Wardrobe Input</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step active-step"><i class="fas fa-robot text-cyan mb-1 d-block"></i>Gemini 2.5 Flash Vision</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-palette text-warning mb-1 d-block"></i>Color & Style Match</div>
          <span class="pipeline-arrow"><i class="fas fa-chevron-right"></i></span>
          <div class="pipeline-step"><i class="fas fa-shopping-bag text-success mb-1 d-block"></i>Ranked Outfit Feed</div>
        </div>
      </div>`;
  }

  const modalHtml = `
    <div class="modal fade" id="projectDetailsModal" tabindex="-1" role="dialog" aria-labelledby="projectModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content" style="background: #090e1a; color: #e2e8f0; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 16px; box-shadow: 0 25px 50px rgba(0,0,0,0.8);">
          <div class="modal-header" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: #0c1424; border-top-left-radius: 16px; border-top-right-radius: 16px;">
            <div>
              <h4 class="modal-title font-weight-bold text-white mb-1" id="projectModalTitle">${p.title}</h4>
              <p class="text-info small mb-0">${p.tagline}</p>
            </div>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" style="outline: none; opacity: 0.8;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4" style="background: #070c18;">
            <img src="${p.cardImage}" alt="${p.title}" class="img-fluid rounded mb-3" style="width: 100%; max-height: 340px; object-fit: cover; border: 1px solid rgba(255, 255, 255, 0.1);">
            
            ${pipelineHtml}

            <h5 class="text-white font-weight-bold mb-2 mt-3">Project Overview</h5>
            <p style="color: #cbd5e1; line-height: 1.8;">${p.description}</p>
            
            <h5 class="text-white font-weight-bold mt-4 mb-2">Technology Stack</h5>
            <div class="d-flex flex-wrap mb-4" style="gap: 8px;">
              ${p.technologies.map(t => `<span class="badge" style="background: #0f172a; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.25); padding: 7px 12px; font-size: 0.85rem; border-radius: 6px;">${t}</span>`).join("")}
            </div>

            <h5 class="text-white font-weight-bold mt-3 mb-2">Verified Architecture & Core Capabilities</h5>
            <ul style="color: #cbd5e1; line-height: 1.9; padding-left: 20px;">
              ${p.features.map(f => `<li>${f}</li>`).join("")}
            </ul>
          </div>
          <div class="modal-footer" style="border-top: 1px solid rgba(255, 255, 255, 0.08); background: #0c1424; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
            ${p.Previewlink ? `<a href="${p.Previewlink}" target="_blank" rel="noopener noreferrer" class="btn btn-info" style="background: linear-gradient(135deg, #0284c7, #2563eb); border: none; font-weight: 600;"><i class="fas fa-external-link-alt mr-1"></i>Launch Application</a>` : ``}
            ${p.Githublink ? `<a href="${p.Githublink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light" style="font-weight: 500;"><i class="fab fa-github mr-1"></i>Source Code</a>` : ``}
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  $("#projectDetailsModal").remove();
  $("body").append(modalHtml);
  $("#projectDetailsModal").modal("show");
};

// Filter & Search handler
window.filterProjects = function(category = "all") {
  const query = (document.getElementById("projectSearchInput") ? document.getElementById("projectSearchInput").value : "").toLowerCase().trim();
  const items = document.querySelectorAll(".project-item");

  items.forEach(item => {
    const itemCat = item.getAttribute("data-category") || "";
    const title = item.getAttribute("data-title") || "";
    const textContent = item.textContent.toLowerCase();

    const matchesQuery = !query || title.includes(query) || textContent.includes(query);
    const matchesCat = (category === "all") || (itemCat === category);

    if (matchesQuery && matchesCat) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};

document.addEventListener("DOMContentLoaded", showCards);
