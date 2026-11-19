/**
 * DEVELOPER EXPERIENCE & INTERACTIVE WORKSPACE ENGINE
 * Modules:
 * 1. Hero Animated Name Reveal + Typing Code Terminal
 * 2. 3D Project Card Tilt (requestAnimationFrame with smooth reset)
 * 3. Interactive Skills Constellation (Connected graph with dynamic highlighting)
 * 4. Interactive Portfolio CLI Terminal (about, skills, projects, achievements, etc.)
 * 5. Cursor Spotlight & Subtle Network Physics
 * 6. Scroll-triggered Timelines & Micro-interactions
 */

(function () {
  "use strict";

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================================
     1. CURSOR SPOTLIGHT & SCROLL PROGRESS
     ========================================================================== */
  function initSpotlightAndScroll() {
    // Scroll progress bar
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress-bar";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", function () {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    }, { passive: true });

    if (prefersReducedMotion || window.innerWidth < 992) return;

    // Create spotlight element
    const spotlight = document.createElement("div");
    spotlight.className = "cursor-spotlight";
    document.body.appendChild(spotlight);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderSpotlight() {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      spotlight.style.left = posX + "px";
      spotlight.style.top = posY + "px";
      requestAnimationFrame(renderSpotlight);
    }
    requestAnimationFrame(renderSpotlight);
  }

  /* ==========================================================================
     2. HERO NAME REVEAL & HERO CODING TERMINAL
     ========================================================================== */
  function initHeroAnimations() {
    // A. Character-by-character animated name reveal
    const nameContainer = document.querySelector(".hero-animated-name");
    if (nameContainer && !nameContainer.dataset.revealed) {
      const fullName = nameContainer.getAttribute("data-name") || "Pinninti Varaha Siddartha Nikhil";
      nameContainer.innerHTML = "";
      nameContainer.dataset.revealed = "true";

      const words = fullName.split(" ");
      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "char-reveal-container";
        wordSpan.style.whiteSpace = "nowrap";

        word.split("").forEach((char, cIdx) => {
          const charSpan = document.createElement("span");
          charSpan.className = "char-span";
          charSpan.textContent = char;
          const delay = (wIdx * 6 + cIdx) * 0.035;
          charSpan.style.animationDelay = delay + "s";
          wordSpan.appendChild(charSpan);
        });

        nameContainer.appendChild(wordSpan);
        if (wIdx < words.length - 1) {
          nameContainer.appendChild(document.createTextNode(" "));
        }
      });
      // Safety fallback: ensure text opacity is guaranteed visible
      nameContainer.style.opacity = "1";
    }

    // B. Hero Interactive Coding Terminal (Realistic Java Binary Search Algorithm)
    const codeElement = document.getElementById("heroTypingCode");
    if (codeElement && !prefersReducedMotion) {
      const codeSnippet = [
        '<span class="syn-com">// Optimized Binary Search in Java</span>',
        '<span class="syn-kw">public class</span> <span class="syn-type">BinarySearchEngine</span> {',
        '    <span class="syn-kw">public static</span> <span class="syn-type">int</span> <span class="syn-fn">search</span>(<span class="syn-type">int</span>[] <span class="syn-var">arr</span>, <span class="syn-type">int</span> <span class="syn-var">target</span>) {',
        '        <span class="syn-type">int</span> <span class="syn-var">low</span> = <span class="syn-num">0</span>, <span class="syn-var">high</span> = <span class="syn-var">arr</span>.length - <span class="syn-num">1</span>;',
        '        <span class="syn-kw">while</span> (<span class="syn-var">low</span> <= <span class="syn-var">high</span>) {',
        '            <span class="syn-type">int</span> <span class="syn-var">mid</span> = <span class="syn-var">low</span> + (<span class="syn-var">high</span> - <span class="syn-var">low</span>) / <span class="syn-num">2</span>;',
        '            <span class="syn-kw">if</span> (<span class="syn-var">arr</span>[<span class="syn-var">mid</span>] == <span class="syn-var">target</span>) <span class="syn-kw">return</span> <span class="syn-var">mid</span>;',
        '            <span class="syn-kw">if</span> (<span class="syn-var">arr</span>[<span class="syn-var">mid</span>] < <span class="syn-var">target</span>) <span class="syn-var">low</span> = <span class="syn-var">mid</span> + <span class="syn-num">1</span>;',
        '            <span class="syn-kw">else</span> <span class="syn-var">high</span> = <span class="syn-var">mid</span> - <span class="syn-num">1</span>;',
        '        }',
        '        <span class="syn-kw">return</span> -<span class="syn-num">1</span>; <span class="syn-com">// Target not found</span>',
        '    }',
        '}'
      ];

      let lineIndex = 0;
      codeElement.innerHTML = '<span class="typing-cursor"></span>';

      function typeLine() {
        if (lineIndex < codeSnippet.length) {
          const currentLine = codeSnippet[lineIndex];
          const lineDiv = document.createElement("div");
          lineDiv.innerHTML = currentLine;
          codeElement.insertBefore(lineDiv, codeElement.lastElementChild);
          lineIndex++;
          setTimeout(typeLine, 110);
        }
      }
      setTimeout(typeLine, 600);
    }
  }

  /* ==========================================================================
     3. 3D TILT INTERACTION FOR PROJECT & ACHIEVEMENT CARDS
     ========================================================================== */
  function init3DTiltCards() {
    if (prefersReducedMotion || window.innerWidth < 992) return;

    const cards = document.querySelectorAll(".interactive-tilt-card, .achievement-glow-card, .featured-project-card");

    cards.forEach(card => {
      let isHovered = false;

      card.addEventListener("mouseenter", function () {
        isHovered = true;
      });

      card.addEventListener("mousemove", function (e) {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
      });

      card.addEventListener("mouseleave", function () {
        isHovered = false;
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      });
    });
  }

  /* ==========================================================================
     4. INTERACTIVE SKILLS CONSTELLATION GRAPH (Canvas Network)
     ========================================================================== */
  function initSkillsConstellation() {
    const canvas = document.getElementById("constellationCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width, height;
    function resize() {
      const container = canvas.parentElement;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight || 520;
    }
    resize();
    window.addEventListener("resize", resize);

    // Skill clusters with their associated skills and projects
    const clusters = [
      {
        id: "core",
        label: "NIKHIL\nSOFTWARE ENGINEER",
        color: "#38bdf8",
        radius: 36,
        isCenter: true,
        desc: "Core Engineering Anchor: Data Structures, Algorithms, Distributed Architecture",
        skills: ["Algorithms", "System Design", "Problem Solving", "Scalability"],
        projects: ["All Featured Systems"]
      },
      {
        id: "programming",
        label: "Programming",
        color: "#60a5fa",
        radius: 26,
        angle: 0.15,
        dist: 0.32,
        desc: "High-performance object-oriented & functional languages",
        skills: ["Java", "C++", "Python", "JavaScript", "SQL"],
        projects: ["Awareon", "Stress Predictor", "Wanderlust"]
      },
      {
        id: "frontend",
        label: "Frontend Dev",
        color: "#38bdf8",
        radius: 24,
        angle: 1.1,
        dist: 0.38,
        desc: "Responsive, stateful & reactive web interfaces",
        skills: ["React.js", "Vite", "HTML5", "CSS3", "Material UI", "Bootstrap"],
        projects: ["TechDoctor", "Speak-Up", "ShaktiAI"]
      },
      {
        id: "backend",
        label: "Backend & Cloud",
        color: "#818cf8",
        radius: 24,
        angle: 2.1,
        dist: 0.34,
        desc: "High-throughput asynchronous servers & REST architecture",
        skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "JWT / Auth"],
        projects: ["Racan-AI", "Wanderlust", "Awareon"]
      },
      {
        id: "databases",
        label: "Databases",
        color: "#34d399",
        radius: 22,
        angle: 3.1,
        dist: 0.36,
        desc: "Relational, document & cloud database stores",
        skills: ["MongoDB", "MySQL", "MongoDB Atlas", "Firebase Firestore", "SQLite"],
        projects: ["Wanderlust", "Awareon"]
      },
      {
        id: "aiml",
        label: "AI & ML",
        color: "#c084fc",
        radius: 26,
        angle: 4.1,
        dist: 0.35,
        desc: "Predictive machine learning, Generative AI & Agentic pipelines",
        skills: ["Machine Learning", "Generative AI", "Agentic AI", "NLP", "Scikit-Learn"],
        projects: ["Racan-AI", "Stress Predictor"]
      },
      {
        id: "cv",
        label: "Computer Vision",
        color: "#f472b6",
        radius: 24,
        angle: 5.1,
        dist: 0.36,
        desc: "Real-time edge facial tracking & geometric telemetry",
        skills: ["OpenCV", "MediaPipe FaceMesh", "EAR / MAR Metrics", "PERCLOS", "YOLOv8"],
        projects: ["Awareon", "PrivaStram"]
      },
      {
        id: "csfundamentals",
        label: "Core CS",
        color: "#fbbf24",
        radius: 23,
        angle: 5.8,
        dist: 0.42,
        desc: "Undergraduate theoretical and algorithmic foundations",
        skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Networks"],
        projects: ["Competitive Programming", "Smart Interviews"]
      }
    ];

    let nodes = [];
    function computeNodePositions() {
      const cx = width / 2;
      const cy = height / 2;
      nodes = clusters.map(c => {
        if (c.isCenter) {
          return { ...c, x: cx, y: cy, vx: 0, vy: 0 };
        }
        const maxDist = Math.min(width, height) * c.dist;
        const x = cx + Math.cos(c.angle) * maxDist;
        const y = cy + Math.sin(c.angle) * maxDist;
        return { ...c, x, y, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 };
      });
    }
    computeNodePositions();

    let hoveredNode = null;
    let selectedNode = null;

    // Draw Loop
    function renderConstellation() {
      ctx.clearRect(0, 0, width, height);

      const center = nodes[0];

      // Draw connection lines from center to each category
      nodes.forEach((n, idx) => {
        if (idx === 0) return;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(n.x, n.y);

        const isHighlighted = hoveredNode && (hoveredNode === n || hoveredNode === center);
        ctx.strokeStyle = isHighlighted ? n.color : "rgba(56, 189, 248, 0.18)";
        ctx.lineWidth = isHighlighted ? 2.5 : 1.2;
        if (isHighlighted) {
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.stroke();

        // Subtle gentle drift
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          const distFromOrig = Math.hypot(n.x - (center.x + Math.cos(n.angle) * Math.min(width, height) * n.dist), n.y - (center.y + Math.sin(n.angle) * Math.min(width, height) * n.dist));
          if (distFromOrig > 12) {
            n.vx *= -1;
            n.vy *= -1;
          }
        }
      });

      // Draw outer connection web
      for (let i = 1; i < nodes.length; i++) {
        const next = i === nodes.length - 1 ? 1 : i + 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[next].x, nodes[next].y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.stroke();
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.save();
        const isHovered = hoveredNode === n || selectedNode === n;

        // Glow
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 8, 0, Math.PI * 2);
          ctx.fillStyle = n.color.replace(")", ", 0.25)").replace("rgb", "rgba");
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isCenter ? "#0b152d" : "#09101f";
        ctx.fill();
        ctx.lineWidth = isHovered ? 3 : (n.isCenter ? 2.5 : 1.5);
        ctx.strokeStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = isHovered ? 15 : 6;
        ctx.stroke();

        // Label
        ctx.shadowBlur = 0;
        ctx.fillStyle = isHovered ? "#ffffff" : "#e2e8f0";
        ctx.font = n.isCenter ? "bold 11px 'Poppins', sans-serif" : "600 11px 'Poppins', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (n.label.includes("\n")) {
          const lines = n.label.split("\n");
          ctx.fillText(lines[0], n.x, n.y - 7);
          ctx.fillStyle = "#38bdf8";
          ctx.fillText(lines[1], n.x, n.y + 8);
        } else {
          ctx.fillText(n.label, n.x, n.y);
        }

        ctx.restore();
      });

      requestAnimationFrame(renderConstellation);
    }
    requestAnimationFrame(renderConstellation);

    // Mouse Interaction
    const panel = document.getElementById("constellationDetailPanel");

    function getMousePos(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }

    canvas.addEventListener("mousemove", function (e) {
      const pos = getMousePos(e);
      hoveredNode = nodes.find(n => Math.hypot(n.x - pos.x, n.y - pos.y) <= n.radius + 6) || null;
      canvas.style.cursor = hoveredNode ? "pointer" : "default";
    });

    canvas.addEventListener("click", function (e) {
      const pos = getMousePos(e);
      const clicked = nodes.find(n => Math.hypot(n.x - pos.x, n.y - pos.y) <= n.radius + 6);
      if (clicked && panel) {
        selectedNode = clicked;
        showDetailPanel(clicked);
      } else if (panel && !hoveredNode) {
        panel.classList.remove("active");
        selectedNode = null;
      }
    });

    function showDetailPanel(node) {
      if (!panel) return;
      document.getElementById("constellationTitle").textContent = node.label.replace("\n", " - ");
      document.getElementById("constellationTitle").style.color = node.color;
      document.getElementById("constellationDesc").textContent = node.desc;

      const skillsEl = document.getElementById("constellationSkills");
      skillsEl.innerHTML = node.skills.map(s => `<span class="badge" style="background: rgba(30, 41, 59, 0.8); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.25); padding: 5px 10px; border-radius: 6px; font-size: 0.8rem; margin: 2px;">${s}</span>`).join(" ");

      const projEl = document.getElementById("constellationProjects");
      projEl.innerHTML = node.projects.map(p => `<span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #c084fc; border: 1px solid rgba(99, 102, 241, 0.3); padding: 5px 10px; border-radius: 6px; font-size: 0.8rem; margin: 2px;"><i class="fas fa-layer-group mr-1"></i>${p}</span>`).join(" ");

      panel.classList.add("active");
    }
  }

  /* ==========================================================================
     5. DEDICATED INTERACTIVE PORTFOLIO CLI TERMINAL
     ========================================================================== */
  function initCliTerminal() {
    const input = document.getElementById("cliTerminalInput");
    const output = document.getElementById("cliTerminalOutput");
    if (!input || !output) return;

    // Command registry
    const COMMANDS = {
      help: () => `
        <div style="color: #38bdf8; font-weight: 600; margin-bottom: 6px;">Available Commands:</div>
        <div style="display: grid; grid-template-columns: 130px 1fr; gap: 4px; color: #cbd5e1;">
          <span><strong>about</strong></span><span>Professional summary & background</span>
          <span><strong>skills</strong></span><span>Overview of technical capabilities</span>
          <span><strong>projects</strong></span><span>Verified engineering portfolio projects</span>
          <span><strong>achievements</strong></span><span>Competitive coding ranks & honors</span>
          <span><strong>education</strong></span><span>Formal degrees, CGPA & academic scores</span>
          <span><strong>contact</strong></span><span>Verified social & direct contact channels</span>
          <span><strong>resume</strong></span><span>Download / view official resume</span>
          <span><strong>clear</strong></span><span>Clear terminal screen</span>
        </div>`,

      about: () => `
        <div style="color: #64ffda; font-weight: 600; margin-bottom: 4px;">Pinninti Varaha Siddartha Nikhil</div>
        <div style="color: #94a3b8; margin-bottom: 6px;">Software Development Engineer | Competitive Programmer | Full Stack Developer</div>
        <p style="color: #cbd5e1; margin-bottom: 4px;">B.Tech CSE undergrad at GRIET Hyderabad (CGPA 9.11/10). Knight Coder on LeetCode (2000+ rating, 1000+ problems solved). Passionate about scalable distributed systems, computer vision telemetry, and modern full-stack web applications.</p>`,

      skills: () => `
        <div style="color: #38bdf8; font-weight: 600; margin-bottom: 6px;">Technical Stacks:</div>
        <div style="color: #cbd5e1; line-height: 1.8;">
          • <strong style="color: #60a5fa;">Languages:</strong> Java, C++, Python, JavaScript, SQL<br>
          • <strong style="color: #38bdf8;">Frontend:</strong> React.js, Vite, HTML5, CSS3, Material UI, Bootstrap<br>
          • <strong style="color: #818cf8;">Backend:</strong> Node.js, Express.js, Flask, REST APIs<br>
          • <strong style="color: #34d399;">Databases:</strong> MongoDB, MySQL, Firebase Firestore, SQLite<br>
          • <strong style="color: #c084fc;">AI/ML & CV:</strong> OpenCV, MediaPipe, Scikit-Learn, YOLOv8, Generative AI<br>
          • <strong style="color: #fbbf24;">Core CS:</strong> Data Structures & Algorithms, OOP, DBMS, OS, Networks
        </div>`,

      projects: () => `
        <div style="color: #38bdf8; font-weight: 600; margin-bottom: 6px;">Featured Systems & Applications:</div>
        <div style="color: #cbd5e1; line-height: 1.8;">
          1. <strong style="color: #ffffff;">Racan-AI</strong> – AI Fashion Stylist & Virtual Outfits (<a href="https://racan-ai-rho.vercel.app/" target="_blank" style="color: #38bdf8;">Live App</a> | <a href="https://github.com/NikhilSiddartha1342/Racan-Ai" target="_blank" style="color: #38bdf8;">GitHub</a>)<br>
          2. <strong style="color: #ffffff;">Awareon</strong> – Real-Time Driver Drowsiness Detection (OpenCV & MediaPipe)<br>
          3. <strong style="color: #ffffff;">PrivaStram</strong> – Multimodal Privacy & Anonymization Pipeline<br>
          4. <strong style="color: #ffffff;">Speak-Up</strong> – AI Speech Evaluation Platform with WebRTC Practice Rooms<br>
          5. <strong style="color: #ffffff;">ShaktiAI</strong> – Grassroots Multilingual Entrepreneur Platform<br>
          6. <strong style="color: #ffffff;">Wanderlust</strong> – Airbnb Architecture Full-Stack Listing Marketplace<br>
          7. <strong style="color: #ffffff;">Stress Predictor</strong> – Activity Data Stress ML Engine (RandomForest) (<a href="https://github.com/NikhilSiddartha1342/Stress-Predictor" target="_blank" style="color: #38bdf8;">GitHub</a>)<br>
          8. <strong style="color: #ffffff;">TechDoctor</strong> – Gamified Cyber-Healthcare Diagnostic System (<a href="https://github.com/NikhilSiddartha1342/Tech-Doctor" target="_blank" style="color: #38bdf8;">GitHub</a>)
        </div>`,

      achievements: () => `
        <div style="color: #f59e0b; font-weight: 600; margin-bottom: 6px;">Verified Achievements & Accreditations:</div>
        <div style="color: #cbd5e1; line-height: 1.8;">
          🏆 <strong style="color: #facc15;">Rank 5 nationally / 2,000+ competitors:</strong> 9am Nova Code Challenge 2026 (₹10,000 cash prize)<br>
          ⚔️ <strong style="color: #38bdf8;">Knight Coder:</strong> LeetCode Top 2.5% (Rating 2000+, 1000+ solved, 300-Day Badge)<br>
          💎 <strong style="color: #64ffda;">Smart Interviews Diamond Coder:</strong> Rank 249 out of 54,565 participants<br>
          🎓 <strong style="color: #60a5fa;">NPTEL Top 1% Distinction:</strong> Data Science for Engineers (IIT Madras, 88%)<br>
          🥈 <strong style="color: #c084fc;">Runner-Up:</strong> Code Shuffle algorithmic sprint, JNTUH QUEST 2025
        </div>`,

      education: () => `
        <div style="color: #38bdf8; font-weight: 600; margin-bottom: 6px;">Academic Timeline:</div>
        <div style="color: #cbd5e1; line-height: 1.8;">
          • <strong>B.Tech in CSE (2023–2027):</strong> GRIET Hyderabad | <span style="color: #64ffda;">CGPA: 9.11 / 10</span><br>
          • <strong>Intermediate MPC (2021–2023):</strong> Junior College, Visakhapatnam | <span style="color: #38bdf8;">972/1000 (97.2%) | EAMCET Rank: 5757</span><br>
          • <strong>Secondary SSC (2020–2021):</strong> Sri Chaitanya School, Visakhapatnam | <span style="color: #fbbf24;">597/600 (99.5%)</span>
        </div>`,

      contact: () => `
        <div style="color: #38bdf8; font-weight: 600; margin-bottom: 6px;">Contact & Social Profiles:</div>
        <div style="color: #cbd5e1; line-height: 1.8;">
          📧 <strong>Email:</strong> <a href="mailto:nikhilsiddartha21@gmail.com" style="color: #38bdf8;">nikhilsiddartha21@gmail.com</a><br>
          💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikhil-siddartha-7347b532b/" target="_blank" style="color: #38bdf8;">linkedin.com/in/nikhil-siddartha-7347b532b</a><br>
          🐙 <strong>GitHub:</strong> <a href="https://github.com/NikhilSiddartha1342" target="_blank" style="color: #38bdf8;">github.com/NikhilSiddartha1342</a><br>
          💻 <strong>LeetCode:</strong> <a href="https://leetcode.com/u/nikhilsiddarthaa21/" target="_blank" style="color: #38bdf8;">leetcode.com/u/nikhilsiddarthaa21</a>
        </div>`,

      resume: () => {
        window.open("assets/docs/Nikhil_Siddartha_Resume.pdf", "_blank");
        return `<div style="color: #64ffda;">Opening resume in a new tab... <a href="assets/docs/Nikhil_Siddartha_Resume.pdf" target="_blank" style="color: #38bdf8;">[Click here if not opened automatically]</a></div>`;
      },

      clear: () => {
        output.innerHTML = "";
        return null;
      }
    };

    function executeCommand(raw) {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      // Echo line
      const echoDiv = document.createElement("div");
      echoDiv.className = "cli-echo-line";
      echoDiv.innerHTML = `<span class="cli-prompt-user">nikhil</span><span style="color:#64748b">@</span><span class="cli-prompt-path">portfolio</span><span class="cli-prompt-symbol">:~$</span> <span style="color:#ffffff">${escapeHtml(cmd)}</span>`;
      output.appendChild(echoDiv);

      const respDiv = document.createElement("div");
      respDiv.className = "cli-response";

      if (cmd in COMMANDS) {
        const result = COMMANDS[cmd]();
        if (result !== null) {
          respDiv.innerHTML = result;
          output.appendChild(respDiv);
        }
      } else {
        respDiv.innerHTML = `<span style="color: #ef4444;">Command not recognized: "${escapeHtml(cmd)}". Type <strong style="color: #38bdf8;">help</strong> to view valid commands.</span>`;
        output.appendChild(respDiv);
      }

      input.value = "";
      output.scrollTop = output.scrollHeight;
    }

    function escapeHtml(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        executeCommand(input.value);
      }
    });

    // Quick chips
    document.querySelectorAll(".cli-quick-chip").forEach(chip => {
      chip.addEventListener("click", function () {
        const cmd = this.getAttribute("data-cmd");
        if (cmd) {
          executeCommand(cmd);
          input.focus();
        }
      });
    });
  }

  /* ==========================================================================
     6. SCROLL OBSERVER FOR STAGGERED REVEALS & TIMELINES
     ========================================================================== */
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.12
    });

    document.querySelectorAll(".scroll-reveal, .edu-timeline-card, .achievement-glow-card").forEach(el => {
      observer.observe(el);
    });
  }

  // Initialize all interactive modules on DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    initSpotlightAndScroll();
    initHeroAnimations();
    init3DTiltCards();
    initSkillsConstellation();
    initCliTerminal();
    initScrollReveals();
  });

})();
