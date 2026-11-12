AOS.init();

// Expanded & Categorized Technical Skills
const techStackCards = document.querySelector(".techstack-box");

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "fas fa-code",
    color: "#64ffda",
    description: "Core languages used for systems programming, competitive programming, and scalable application development.",
    skills: [
      { name: "Java", icon: "fab fa-java", color: "#f89820" },
      { name: "C++", icon: "fas fa-laptop-code", color: "#00599c" },
      { name: "Python", icon: "fab fa-python", color: "#3776ab" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "#f7df1e" },
      { name: "SQL", icon: "fas fa-database", color: "#00758f" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "fas fa-desktop",
    color: "#818cf8",
    description: "Modern, responsive, user-centric web applications and dynamic user interface engineering.",
    skills: [
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "Vite", icon: "fas fa-bolt", color: "#bd34fe" },
      { name: "Material UI", icon: "fas fa-layer-group", color: "#007fff" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
      { name: "EJS", icon: "fas fa-file-code", color: "#a4c639" },
    ],
  },
  {
    category: "Backend Development",
    icon: "fas fa-server",
    color: "#34d399",
    description: "Robust server-side architecture, RESTful API endpoints, and scalable backend services.",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Express.js", icon: "fas fa-cubes", color: "#cbd5e1" },
      { name: "REST API Development", icon: "fas fa-exchange-alt", color: "#38bdf8" },
    ],
  },
  {
    category: "Databases & Cloud Storage",
    icon: "fas fa-database",
    color: "#f59e0b",
    description: "Relational and document databases, object modeling, and cloud-hosted data stores.",
    skills: [
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
      { name: "Mongoose", icon: "fas fa-project-diagram", color: "#e11d48" },
      { name: "MongoDB Atlas", icon: "fas fa-cloud", color: "#00ed64" },
      { name: "MySQL", icon: "fas fa-table", color: "#00758f" },
      { name: "Firebase Firestore", icon: "fas fa-fire", color: "#ffa611" },
    ],
  },
  {
    category: "Authentication & Security",
    icon: "fas fa-shield-alt",
    color: "#ef4444",
    description: "Session management, OAuth, identity verification, and role-based access security.",
    skills: [
      { name: "Firebase Authentication", icon: "fas fa-user-lock", color: "#ffa611" },
      { name: "Passport.js", icon: "fas fa-id-badge", color: "#34d399" },
      { name: "Passport-Local-Mongoose", icon: "fas fa-key", color: "#38bdf8" },
    ],
  },
  {
    category: "Artificial Intelligence & ML",
    icon: "fas fa-brain",
    color: "#38bdf8",
    description: "Core algorithms, generative intelligence, agentic architectures, and predictive modeling.",
    skills: [
      { name: "Machine Learning", icon: "fas fa-cogs", color: "#38bdf8" },
      { name: "Generative AI", icon: "fas fa-robot", color: "#ec4899" },
      { name: "Agentic AI", icon: "fas fa-network-wired", color: "#a855f7" },
      { name: "Natural Language Processing", icon: "fas fa-comments", color: "#818cf8" },
      { name: "Predictive Modeling", icon: "fas fa-chart-line", color: "#64ffda" },
      { name: "Model Evaluation", icon: "fas fa-check-double", color: "#10b981" },
    ],
  },
  {
    category: "Computer Vision",
    icon: "fas fa-eye",
    color: "#34d399",
    description: "Real-time video telemetry, landmark tracking, driver fatigue modeling, and image processing.",
    skills: [
      { name: "OpenCV", icon: "fas fa-camera", color: "#5c8dbc" },
      { name: "MediaPipe", icon: "fas fa-crosshairs", color: "#f59e0b" },
      { name: "Facial Landmark Detection", icon: "fas fa-smile", color: "#ec4899" },
      { name: "Eye Aspect Ratio (EAR)", icon: "far fa-eye", color: "#38bdf8" },
      { name: "Mouth Aspect Ratio (MAR)", icon: "far fa-comment-dots", color: "#f43f5e" },
      { name: "PERCLOS-based Fatigue Detection", icon: "fas fa-tachometer-alt", color: "#f59e0b" },
    ],
  },
  {
    category: "AI Application Development",
    icon: "fas fa-magic",
    color: "#a855f7",
    description: "Practical intelligent application interfaces, vision models, and multimodal pipelines.",
    skills: [
      { name: "Claude AI Integration", icon: "fas fa-brain", color: "#d97706" },
      { name: "OCR", icon: "fas fa-font", color: "#3b82f6" },
      { name: "Speech-to-Text", icon: "fas fa-microphone-alt", color: "#10b981" },
      { name: "Text-to-Speech", icon: "fas fa-volume-up", color: "#06b6d4" },
      { name: "Voice Interfaces", icon: "fas fa-headset", color: "#f59e0b" },
      { name: "Multilingual AI Applications", icon: "fas fa-language", color: "#6366f1" },
    ],
  },
  {
    category: "Data Science",
    icon: "fas fa-chart-bar",
    color: "#10b981",
    description: "Statistical analysis, data curation, feature transformations, and classification pipelines.",
    skills: [
      { name: "Data Preprocessing", icon: "fas fa-filter", color: "#38bdf8" },
      { name: "Data Analysis", icon: "fas fa-chart-pie", color: "#f59e0b" },
      { name: "Feature Engineering", icon: "fas fa-sliders-h", color: "#ec4899" },
      { name: "Classification", icon: "fas fa-sitemap", color: "#10b981" },
      { name: "Predictive Analytics", icon: "fas fa-analytics", color: "#64ffda" },
    ],
  },
  {
    category: "API Integration & Development",
    icon: "fas fa-cloud-upload-alt",
    color: "#06b6d4",
    description: "Third-party APIs, schema validation, geocoding services, and asynchronous requests.",
    skills: [
      { name: "REST APIs", icon: "fas fa-network-wired", color: "#38bdf8" },
      { name: "Joi Validation", icon: "fas fa-clipboard-check", color: "#10b981" },
      { name: "Third-party API Integration", icon: "fas fa-plug", color: "#f59e0b" },
      { name: "Mapbox Integration", icon: "fas fa-map-marked-alt", color: "#3b82f6" },
    ],
  },
  {
    category: "Developer Tools",
    icon: "fas fa-tools",
    color: "#ec4899",
    description: "Version control workflows, development environments, dependency managers, and testing.",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
      { name: "GitHub", icon: "fab fa-github", color: "#ffffff" },
      { name: "Visual Studio Code", icon: "fas fa-file-code", color: "#007acc" },
      { name: "Postman", icon: "fas fa-space-shuttle", color: "#ff6c37" },
      { name: "npm", icon: "fab fa-npm", color: "#cb3837" },
    ],
  },
  {
    category: "Core Computer Science",
    icon: "fas fa-atom",
    color: "#64ffda",
    description: "Fundamental principles powering algorithmic problem solving and resilient software architecture.",
    skills: [
      { name: "Data Structures & Algorithms", icon: "fas fa-project-diagram", color: "#64ffda" },
      { name: "Object-Oriented Programming", icon: "fas fa-cubes", color: "#38bdf8" },
      { name: "Database Management Systems", icon: "fas fa-database", color: "#f59e0b" },
      { name: "Operating Systems", icon: "fas fa-microchip", color: "#818cf8" },
      { name: "Computer Networks", icon: "fas fa-network-wired", color: "#34d399" },
      { name: "Algorithm Design", icon: "fas fa-drafting-compass", color: "#ec4899" },
      { name: "Complexity Analysis", icon: "fas fa-hourglass-half", color: "#f43f5e" },
      { name: "Competitive Programming", icon: "fas fa-trophy", color: "#ffa116" },
    ],
  },
];

const showCards = () => {
  let output = '<div class="container-fluid px-3 px-lg-5"><div class="row">';
  skillCategories.forEach(
    ({ category, icon, color, description, skills }, index) =>
      (output += `
        <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="skill-category-card h-100 p-4" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7); display: flex; flex-direction: column; transition: transform 0.3s ease, border-color 0.3s ease; backdrop-filter: blur(8px);">
                <div class="d-flex align-items-center mb-3">
                    <div class="mr-3" style="width: 46px; height: 46px; border-radius: 10px; background: rgba(56, 189, 248, 0.12); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(56, 189, 248, 0.3);">
                        <i class="${icon}" style="color: ${color}; font-size: 1.3rem;"></i>
                    </div>
                    <div>
                        <h5 class="mb-0 font-weight-bold" style="color: #f8fafc; font-size: 1.12rem;">${category}</h5>
                        <span class="badge badge-dark" style="background: #1e293b; color: ${color}; font-size: 0.72rem;">${skills.length} Competencies</span>
                    </div>
                </div>
                <p style="color: #94a3b8; font-size: 0.86rem; line-height: 1.55; margin-bottom: 16px;">
                    ${description}
                </p>
                <div class="mt-auto d-flex flex-wrap" style="gap: 8px;">
                    ${skills
                      .map(
                        (skill) => `
                        <div class="skill-badge" style="display: inline-flex; align-items: center; gap: 7px; background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 6px 11px; font-size: 0.82rem; color: #e2e8f0; font-weight: 500; transition: all 0.2s ease;">
                            <i class="${skill.icon}" style="color: ${skill.color}; font-size: 0.95rem;"></i>
                            <span>${skill.name}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `)
  );
  output += "</div></div>";
  if (techStackCards) techStackCards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);
