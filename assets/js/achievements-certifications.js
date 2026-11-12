/* ==========================================================================
   Achievements & Certifications Comprehensive Data & Logic
   ========================================================================== */
"use strict";

// 1. Featured Achievements Data (Each has its own independent card)
const featuredAchievements = [
  {
    id: "nova-code-challenge",
    title: "9am Nova Code Challenge – Top 5",
    organization: "9am Careers",
    badgeLabel: "Top 5 | ₹10,000",
    badgeType: "badge-gold",
    year: "2026",
    image: "assets/achievements/coding/nova_rank_card.png",
    previewType: "image",
    metricLabel: "Rank & Cash Reward",
    metricValue: "Rank 5 / 2,000+ | ₹10,000",
    description: "Ranked 5th nationally out of 2,000+ competitive coders in the prestigious 9am Nova Code Challenge 2026, winning a ₹10,000 cash prize reward.",
    officialUrl: "https://9am.careers/code-challenges/9amNCCFRESH2026/",
    officialBtnText: "View Official Leaderboard",
    categories: ["all", "competitive-programming", "academic"]
  },
  {
    id: "leetcode-knight",
    title: "LeetCode Knight Badge",
    organization: "LeetCode",
    badgeLabel: "Top 2.5% Worldwide",
    badgeType: "badge-orange",
    year: "Active",
    image: "assets/achievements/leetcode/KnightLC.png",
    previewType: "image",
    metricLabel: "Contest Standing",
    metricValue: "2000+ Rating | 1000+ Solved",
    description: "Earned the elite Knight tier on LeetCode with a contest rating exceeding 2000. Solved over 1000+ algorithmic problems across Data Structures, Dynamic Programming, and Graph Theory.",
    officialUrl: "https://leetcode.com/u/nikhilsiddarthaa21/",
    officialBtnText: "View LeetCode Profile",
    categories: ["all", "competitive-programming"]
  },
  {
    id: "leetcode-300-days",
    title: "LeetCode 300 Days Badge – 2025",
    organization: "LeetCode",
    badgeLabel: "300 Days Streak",
    badgeType: "badge-gold",
    year: "2025",
    image: "assets/achievements/leetcode/300days_2025.gif",
    previewType: "image",
    metricLabel: "Consistency Milestone",
    metricValue: "300+ Days of Active Problem Solving",
    description: "Demonstrated disciplined long-term commitment and engineering rigor with 300 days of consistent competitive coding in 2025 on LeetCode.",
    officialUrl: "https://leetcode.com/u/nikhilsiddarthaa21/",
    officialBtnText: "View LeetCode Profile",
    categories: ["all", "competitive-programming"]
  },
  {
    id: "leetcode-200-days",
    title: "LeetCode 200 Days Badge",
    organization: "LeetCode",
    badgeLabel: "200 Days Streak",
    badgeType: "badge-cyan",
    year: "2025",
    image: "assets/achievements/leetcode/LC200DAYS.png",
    previewType: "image",
    metricLabel: "Consistency Milestone",
    metricValue: "200 Days Daily Challenge Completed",
    description: "Awarded for exceptional coding discipline, maintaining a 200-day daily problem-solving streak across complex algorithmic domains.",
    officialUrl: "https://leetcode.com/u/nikhilsiddarthaa21/",
    officialBtnText: "View LeetCode Profile",
    categories: ["all", "competitive-programming"]
  },
  {
    id: "leetcode-50-days",
    title: "LeetCode 50 Days Badge",
    organization: "LeetCode",
    badgeLabel: "50 Days Streak",
    badgeType: "badge-purple",
    year: "2025",
    image: "assets/achievements/leetcode/lc-50days.png",
    previewType: "image",
    metricLabel: "Consistency Milestone",
    metricValue: "50 Days Daily Challenge Completed",
    description: "Recognized for continuous dedication to technical interview preparation and daily algorithm optimizations on LeetCode.",
    officialUrl: "https://leetcode.com/u/nikhilsiddarthaa21/",
    officialBtnText: "View LeetCode Profile",
    categories: ["all", "competitive-programming"]
  },
  {
    id: "diamond-certified-coder",
    title: "Diamond Certified Coder – Smart Interviews",
    organization: "Smart Interviews",
    badgeLabel: "Diamond Tier",
    badgeType: "badge-cyan",
    year: "Verified",
    image: "assets/achievements/coding/smart_interviews.png",
    previewType: "image",
    metricLabel: "Global Evaluation",
    metricValue: "Rank 249 / 54,565 Coders",
    description: "Attained top-tier Diamond Certification ranking #249 out of 54,565 competitive coders globally, demonstrating high algorithmic speed and optimal solutions.",
    officialUrl: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
    officialBtnText: "View Credential Details",
    categories: ["all", "competitive-programming"]
  },
  {
    id: "nptel-data-science-top1",
    title: "Top 1% – NPTEL Data Science for Engineers",
    organization: "NPTEL & IIT Madras",
    badgeLabel: "Elite + Gold | Top 1%",
    badgeType: "badge-gold",
    year: "2025",
    image: "assets/certificates/thumbnails/thumb_nptel_data_science.png",
    documentUrl: "assets/certificates/featured/NPTEL_Data_Science.pdf",
    previewType: "pdf",
    metricLabel: "Score & Recognition",
    metricValue: "88% Score | Elite + Gold",
    description: "Secured Elite + Gold certification from IIT Madras & NPTEL with an 88% overall score, ranking in the Top 1% nationally among thousands of engineering participants.",
    officialUrl: "assets/certificates/featured/NPTEL_Data_Science.pdf",
    officialBtnText: "View Verified Certificate",
    categories: ["all", "academic", "certifications"]
  },
  {
    id: "code-shuffle-quest",
    title: "Runner-Up – Code Shuffle",
    organization: "JNTU Hyderabad (QUEST 2025)",
    badgeLabel: "2nd Place | ₹1,000",
    badgeType: "badge-purple",
    year: "2025",
    image: "assets/achievements/coding/Code_shuffle.jpg",
    previewType: "image",
    metricLabel: "Prize & Result",
    metricValue: "Runner-Up | ₹1,000 Cash Prize",
    description: "Secured 2nd Place / Runner-up in the high-speed algorithmic Code Shuffle contest at QUEST 2025, JNTUH College of Engineering Hyderabad.",
    officialUrl: "assets/achievements/coding/Code_shuffle.jpg",
    officialBtnText: "View Certificate Photo",
    categories: ["all", "hackathons", "competitive-programming"]
  }
];

// 2. LeetCode Badges Gallery Data
const leetcodeBadges = [
  {
    title: "Knight Badge",
    meta: "Rating: 2000+ | Top 2.5%",
    desc: "Elite competitive programming tier awarded for consistently scoring high ratings in weekly & biweekly contests.",
    image: "assets/achievements/leetcode/KnightLC.png"
  },
  {
    title: "300 Days Badge",
    meta: "Year 2025 Milestone",
    desc: "Annual endurance badge commemorating 300+ days of continuous problem-solving consistency.",
    image: "assets/achievements/leetcode/300days_2025.gif"
  },
  {
    title: "200 Days Badge",
    meta: "Daily Coding Streak",
    desc: "Earned for solving daily algorithm challenges across 200 calendar days.",
    image: "assets/achievements/leetcode/LC200DAYS.png"
  },
  {
    title: "50 Days Badge",
    meta: "Consistency Milestone",
    desc: "Awarded for 50 days of active participation in LeetCode Daily Coding challenges.",
    image: "assets/achievements/leetcode/lc-50days.png"
  }
];

// 3. HackerRank Certifications (Four Separate Cards)
const hackerrankCertifications = [
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    badge: "Intermediate",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_hackerrank_intermediate.png",
    pdfUrl: "assets/certificates/hackerrank/problem_solving_intermediate_certificate.pdf",
    verifyUrl: "https://www.hackerrank.com/profile/23241a05a7vsn",
    desc: "Covers complex algorithms including Dynamic Programming, Trees, Graph Theory, and advanced problem-solving techniques.",
    categories: ["all", "certifications", "competitive-programming"]
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    badge: "Basic Verified",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_hackerrank_ps_basic.png",
    pdfUrl: "assets/certificates/hackerrank/problem_solving_basic_certificate.pdf",
    verifyUrl: "https://www.hackerrank.com/profile/23241a05a7vsn",
    desc: "Validates proficiency in fundamental data structures, sorting algorithms, searching, and time complexity estimation.",
    categories: ["all", "certifications", "competitive-programming"]
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    badge: "Java Verified",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_hackerrank_java_basic.png",
    pdfUrl: "assets/certificates/hackerrank/java_basic_certificate.pdf",
    verifyUrl: "https://www.hackerrank.com/profile/23241a05a7vsn",
    desc: "Demonstrates core Java mastery, Object-Oriented Programming, Exception Handling, Collections Framework, and Streams.",
    categories: ["all", "certifications"]
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    badge: "Python Verified",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_hackerrank_python_basic.png",
    pdfUrl: "assets/certificates/hackerrank/python_basic_certificate.pdf",
    verifyUrl: "https://www.hackerrank.com/profile/23241a05a7vsn",
    desc: "Verifies Python core competencies including functional idioms, data structures, strings, and OOP implementations.",
    categories: ["all", "certifications"]
  }
];

// 4. Featured Professional Certifications (6 Cards)
const featuredCertifications = [
  {
    title: "Agentic AI – Salesforce & GeeksforGeeks",
    issuer: "Salesforce and GeeksforGeeks",
    year: "2025",
    badge: "AI Agents",
    badgeType: "badge-cyan",
    image: "assets/certificates/featured/Ai-Agents(Sales-Force_GFG).png",
    documentUrl: "assets/certificates/featured/Ai-Agents(Sales-Force_GFG).png",
    previewType: "image",
    desc: "Advanced training in building autonomous AI agents, tool integration, multimodal reasoning, and enterprise AI workflows with Salesforce and GFG.",
    categories: ["all", "certifications"]
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    year: "Certified",
    badge: "Intermediate",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_hackerrank_intermediate.png",
    documentUrl: "assets/certificates/featured/problem_solving_intermediate_certificate.pdf",
    previewType: "pdf",
    desc: "Demonstrated advanced algorithmic proficiency, time complexity optimization, and memory-efficient data structures.",
    categories: ["all", "certifications", "competitive-programming"]
  },
  {
    title: "Python 3.4.3 Certification",
    issuer: "IIT Bombay Spoken Tutorial",
    year: "Score: 70%",
    badge: "IIT Bombay",
    badgeType: "badge-purple",
    image: "assets/certificates/thumbnails/thumb_python_iitb.png",
    documentUrl: "assets/certificates/featured/Python-IITB-PVSN.pdf",
    previewType: "pdf",
    desc: "Comprehensive certification by IIT Bombay Spoken Tutorial Project following remote proctored examination.",
    categories: ["all", "certifications", "academic"]
  },
  {
    title: "OCI 2025 Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2025 (Valid to 2027)",
    badge: "OCI Certified",
    badgeType: "badge-orange",
    image: "assets/certificates/thumbnails/thumb_oracle_genai.png",
    documentUrl: "assets/certificates/featured/OracleGENAIProfessional.pdf",
    previewType: "pdf",
    desc: "Professional certification validating LLM architectures, prompt engineering, RAG pipelines, fine-tuning, and OCI GenAI services.",
    categories: ["all", "certifications"]
  },
  {
    title: "Data Science for Engineers – Elite + Gold",
    issuer: "NPTEL & IIT Madras",
    year: "Score: 88% | Top 1%",
    badge: "Top 1% Elite+Gold",
    badgeType: "badge-gold",
    image: "assets/certificates/thumbnails/thumb_nptel_data_science.png",
    documentUrl: "assets/certificates/featured/NPTEL_Data_Science.pdf",
    previewType: "pdf",
    desc: "Secured top 1% national rank in IIT Madras Data Science curriculum covering linear algebra, statistical hypothesis testing, and ML modeling.",
    categories: ["all", "certifications", "academic"]
  },
  {
    title: "Diamond Certified Coder",
    issuer: "Smart Interviews",
    year: "Rank 249 / 54,565",
    badge: "Diamond Tier",
    badgeType: "badge-cyan",
    image: "assets/achievements/coding/smart_interviews.png",
    documentUrl: "assets/achievements/coding/smart_interviews.png",
    previewType: "image",
    desc: "Global rank 249 out of 54,565 participants in Smart Interviews rigorous Data Structures and Algorithms evaluations.",
    categories: ["all", "certifications", "competitive-programming"]
  }
];

// 5. Additional Verified Certifications (Selectively Curated & Inspected)
const additionalCertifications = [
  {
    title: "OCI AI Foundations Associate 2025",
    issuer: "Oracle Cloud Infrastructure",
    year: "July 2025",
    badge: "OCI Associate",
    badgeType: "badge-orange",
    image: "assets/certificates/thumbnails/thumb_oracle_ai_foundations.png",
    pdfUrl: "assets/certificates/oracle/OracleAIFOUNDATIONSassociate.pdf",
    desc: "Foundational AI/ML concepts, computer vision, natural language processing, and automated machine learning on Oracle Cloud."
  },
  {
    title: "OCI 2025 Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "October 2025",
    badge: "OCI Professional",
    badgeType: "badge-orange",
    image: "assets/certificates/thumbnails/thumb_oracle_data_science.png",
    pdfUrl: "assets/certificates/oracle/Data_Science_Professional.pdf",
    desc: "End-to-end data science lifecycle, OCI Data Science service, model cataloging, deployment, and MLOps practices."
  },
  {
    title: "NPTEL Data Analytics with Python",
    issuer: "NPTEL & IIT",
    year: "Score: 84% (12 Weeks)",
    badge: "NPTEL Certified",
    badgeType: "badge-gold",
    image: "assets/certificates/thumbnails/thumb_nptel_data_analytics.png",
    pdfUrl: "assets/certificates/nptel/NPTEL_Data_Analytics.pdf",
    desc: "12-week comprehensive program covering exploratory data analysis, Pandas, NumPy, statistical inferences, and regression."
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "May 2026",
    badge: "Cisco Certified",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_data_analytics.png",
    pdfUrl: "assets/certificates/cisco/Cisco_Data_Analytics_Essentials.pdf",
    desc: "Data collection, statistical analysis, visualization, and data-driven decision making pipelines."
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "Verified",
    badge: "Cisco AI",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_modern_ai.png",
    pdfUrl: "assets/certificates/cisco/Cisco_Introduction_to_Modern_AI.pdf",
    desc: "Modern AI paradigms, neural networks, ethics in artificial intelligence, and applied intelligent systems."
  },
  {
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco Networking Academy",
    year: "Verified",
    badge: "Applied AI",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_apply_ai.png",
    pdfUrl: "assets/certificates/cisco/Cisco_Apply_AI_Analyze_Customer_Reviews.pdf",
    desc: "Applied natural language processing and sentiment analysis to extract intelligence from unstructured consumer feedback."
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "Verified",
    badge: "Python Certified",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_python_1.png",
    pdfUrl: "assets/certificates/cisco/Cisco_Python_Essentials_1.pdf",
    desc: "Fundamentals of computer programming, variables, control flow, functions, lists, and algorithm logic in Python."
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "Verified",
    badge: "Python Advanced",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_python_2.png",
    pdfUrl: "assets/certificates/cisco/Cisco_Python_Essentials_2.pdf",
    desc: "Advanced modules, packages, string methods, object-oriented programming, and file stream handling."
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "Networking",
    badge: "Cisco CCNA",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_ccna1.png",
    pdfUrl: "assets/certificates/cisco/Cisco_CCNA_Introduction_to_Networks.pdf",
    desc: "Network architecture, IP addressing schemes (IPv4/IPv6), Ethernet, and foundational transport layer protocols."
  },
  {
    title: "CCNA: Switching, Routing & Wireless",
    issuer: "Cisco Networking Academy",
    year: "Networking",
    badge: "Cisco CCNA",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_ccna2.png",
    pdfUrl: "assets/certificates/cisco/Cisco_CCNA_Switching_Routing_and_Wireless_Essentials.pdf",
    desc: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCP, SLAAC, and wireless LAN configuration."
  },
  {
    title: "CCNA: Enterprise Networking & Security",
    issuer: "Cisco Networking Academy",
    year: "Networking",
    badge: "Cisco CCNA",
    badgeType: "badge-cyan",
    image: "assets/certificates/thumbnails/thumb_cisco_ccna3.png",
    pdfUrl: "assets/certificates/cisco/Cisco_CCNA_Enterprise_Networking_Security_and_Automation.pdf",
    desc: "OSPFv2, network security concepts, ACLs, NAT, VPNs, QoS, network virtualization, and automation."
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "Dec 2023",
    badge: "AWS Graduate",
    badgeType: "badge-orange",
    image: "assets/certificates/thumbnails/thumb_aws_foundations.png",
    pdfUrl: "assets/certificates/aws/AWS_Academy_Cloud_Foundations.pdf",
    desc: "Detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support."
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    year: "Dec 2023",
    badge: "AWS Architect",
    badgeType: "badge-orange",
    image: "assets/certificates/thumbnails/thumb_aws_architecting.png",
    pdfUrl: "assets/certificates/aws/AWS_Academy_Cloud_Architecting.pdf",
    desc: "Architecting resilient, high-performing, secure, and cost-optimized infrastructure on AWS."
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    year: "Jan 2026 (Valid 2027)",
    badge: "Google Certified",
    badgeType: "badge-gold",
    image: "assets/certificates/thumbnails/thumb_google_analytics.png",
    pdfUrl: "assets/certificates/other/Google_Analytics_Certification.pdf",
    desc: "Official certification in Google Analytics 4 (GA4) covering web tracking, audience segmentation, and attribution models."
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "Nov 2025",
    badge: "Deloitte",
    badgeType: "badge-green",
    image: "assets/certificates/thumbnails/thumb_deloitte_cyber.png",
    pdfUrl: "assets/certificates/other/Deloitte_Cybersecurity_Job_Simulation.pdf",
    desc: "Practical simulation tackling security assessments, vulnerability remediation, and enterprise threat analysis."
  },
  {
    title: "ServiceNow Virtual Internship",
    issuer: "ServiceNow & AICTE",
    year: "April 2026",
    badge: "ServiceNow",
    badgeType: "badge-purple",
    image: "assets/certificates/thumbnails/thumb_servicenow.png",
    pdfUrl: "assets/certificates/other/ServiceNow_Virtual_Internship.pdf",
    desc: "Hands-on virtual internship in ServiceNow platform administration, flows, Automated Test Framework (ATF), and Agentic AI."
  }
];

// Helper to open the Modal Lightbox
function openCertModal(title, previewUrl, originalUrl, isPdf = false) {
  const modal = document.getElementById("certInspectionModal");
  if (!modal) return;
  
  const modalTitle = document.getElementById("certModalTitle");
  const modalImg = document.getElementById("certModalImage");
  const modalDownloadBtn = document.getElementById("certModalDownloadBtn");
  const modalNewTabBtn = document.getElementById("certModalNewTabBtn");
  const modalMeta = document.getElementById("certModalMeta");

  if (modalTitle) modalTitle.innerText = title;
  if (modalImg) {
    modalImg.src = previewUrl;
    modalImg.alt = title;
  }
  if (modalDownloadBtn) {
    modalDownloadBtn.href = originalUrl;
    modalDownloadBtn.setAttribute("download", "");
  }
  if (modalNewTabBtn) {
    modalNewTabBtn.href = originalUrl;
  }
  if (modalMeta) {
    modalMeta.innerText = isPdf ? "Original Document: High-Resolution PDF" : "Original Document: High-Resolution Image";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Modal
function closeCertModal() {
  const modal = document.getElementById("certInspectionModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Render Functions
function renderFeaturedAchievements(filter = "all") {
  const container = document.getElementById("featuredAchievementsGrid");
  if (!container) return;

  const filtered = filter === "all" ? featuredAchievements : featuredAchievements.filter(a => a.categories.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-4 text-muted">No achievements found for this filter.</div>`;
    return;
  }

  let html = "";
  filtered.forEach(item => {
    const isDocPdf = item.previewType === "pdf";
    const previewTarget = isDocPdf ? item.image : item.image;
    const docTarget = isDocPdf ? item.documentUrl : item.officialUrl;

    html += `
      <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
        <div class="premium-card">
          <div class="card-media-wrapper" onclick="openCertModal('${item.title.replace(/'/g, "\\'")}', '${previewTarget}', '${docTarget}', ${isDocPdf})">
            <span class="media-badge-pill ${item.badgeType}">${item.badgeLabel}</span>
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="card-details-body">
            <div>
              <div class="card-issuer-row">
                <span class="card-issuer-name"><i class="fas fa-trophy mr-1"></i>${item.organization}</span>
                <span class="card-year-meta">${item.year}</span>
              </div>
              <div class="card-details-header">
                <h5>${item.title}</h5>
              </div>
              <div class="highlight-metric-banner">
                <span class="metric-label">${item.metricLabel}</span>
                <span class="metric-value">${item.metricValue}</span>
              </div>
              <p class="card-description-text">${item.description}</p>
            </div>
            <div class="card-action-btn-group">
              <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-primary">
                <i class="fas fa-external-link-alt"></i> ${item.officialBtnText}
              </a>
              <button type="button" class="btn-card-action btn-card-outline" onclick="openCertModal('${item.title.replace(/'/g, "\\'")}', '${previewTarget}', '${docTarget}', ${isDocPdf})" title="Inspect Proof">
                <i class="fas fa-search-plus"></i> Inspect
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderLeetcodeBadges() {
  const container = document.getElementById("leetcodeBadgesGrid");
  if (!container) return;

  let html = "";
  leetcodeBadges.forEach(badge => {
    html += `
      <div class="col-12 col-sm-6 col-lg-3 mb-4" data-aos="fade-up">
        <div class="leetcode-badge-card">
          <div class="leetcode-badge-img-wrapper">
            <img src="${badge.image}" alt="${badge.title}" loading="lazy">
          </div>
          <div>
            <div class="leetcode-badge-title">${badge.title}</div>
            <div class="leetcode-badge-meta">${badge.meta}</div>
            <p class="leetcode-badge-desc">${badge.desc}</p>
          </div>
          <a href="https://leetcode.com/u/nikhilsiddarthaa21/" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-outline w-100">
            <i class="fas fa-external-link-alt mr-1"></i> LeetCode Profile
          </a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderHackerRankCertifications(filter = "all") {
  const container = document.getElementById("hackerRankGrid");
  if (!container) return;

  const filtered = filter === "all" ? hackerrankCertifications : hackerrankCertifications.filter(c => c.categories.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-4 text-muted">No HackerRank certificates for this category.</div>`;
    return;
  }

  let html = "";
  filtered.forEach(c => {
    html += `
      <div class="col-12 col-md-6 col-lg-3 mb-4" data-aos="fade-up">
        <div class="premium-card">
          <div class="card-media-wrapper" onclick="openCertModal('${c.title.replace(/'/g, "\\'")}', '${c.image}', '${c.pdfUrl}', true)">
            <span class="media-badge-pill ${c.badgeType}">${c.badge}</span>
            <img src="${c.image}" alt="${c.title}" loading="lazy">
          </div>
          <div class="card-details-body">
            <div>
              <div class="card-issuer-row">
                <span class="card-issuer-name"><i class="fab fa-hackerrank mr-1"></i>${c.issuer}</span>
                <span class="badge badge-dark" style="background:#1e293b; color:#10b981;">Verified</span>
              </div>
              <div class="card-details-header">
                <h5>${c.title}</h5>
              </div>
              <p class="card-description-text">${c.desc}</p>
            </div>
            <div class="card-action-btn-group">
              <a href="${c.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-primary">
                <i class="fas fa-file-pdf"></i> View PDF
              </a>
              <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-outline" title="Verify on HackerRank">
                <i class="fas fa-check-circle"></i> Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderFeaturedCertifications(filter = "all") {
  const container = document.getElementById("featuredCertificationsGrid");
  if (!container) return;

  const filtered = filter === "all" ? featuredCertifications : featuredCertifications.filter(c => c.categories.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-4 text-muted">No featured certificates for this category.</div>`;
    return;
  }

  let html = "";
  filtered.forEach(c => {
    const isDocPdf = c.previewType === "pdf";
    html += `
      <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
        <div class="premium-card">
          <div class="card-media-wrapper" onclick="openCertModal('${c.title.replace(/'/g, "\\'")}', '${c.image}', '${c.documentUrl}', ${isDocPdf})">
            <span class="media-badge-pill ${c.badgeType}">${c.badge}</span>
            <img src="${c.image}" alt="${c.title}" loading="lazy">
          </div>
          <div class="card-details-body">
            <div>
              <div class="card-issuer-row">
                <span class="card-issuer-name"><i class="fas fa-certificate mr-1"></i>${c.issuer}</span>
                <span class="card-year-meta">${c.year}</span>
              </div>
              <div class="card-details-header">
                <h5>${c.title}</h5>
              </div>
              <p class="card-description-text">${c.desc}</p>
            </div>
            <div class="card-action-btn-group">
              <a href="${c.documentUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-primary">
                <i class="${isDocPdf ? 'fas fa-file-pdf' : 'fas fa-eye'}"></i> ${isDocPdf ? 'Open PDF' : 'Open Image'}
              </a>
              <button type="button" class="btn-card-action btn-card-outline" onclick="openCertModal('${c.title.replace(/'/g, "\\'")}', '${c.image}', '${c.documentUrl}', ${isDocPdf})">
                <i class="fas fa-search-plus"></i> Inspect
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderAdditionalCertifications() {
  const container = document.getElementById("additionalCertificationsGrid");
  if (!container) return;

  let html = "";
  additionalCertifications.forEach(c => {
    html += `
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="premium-card">
          <div class="card-media-wrapper" onclick="openCertModal('${c.title.replace(/'/g, "\\'")}', '${c.image}', '${c.pdfUrl}', true)">
            <span class="media-badge-pill ${c.badgeType}">${c.badge}</span>
            <img src="${c.image}" alt="${c.title}" loading="lazy">
          </div>
          <div class="card-details-body">
            <div>
              <div class="card-issuer-row">
                <span class="card-issuer-name"><i class="fas fa-award mr-1"></i>${c.issuer}</span>
                <span class="card-year-meta">${c.year}</span>
              </div>
              <div class="card-details-header">
                <h5 style="font-size: 1rem;">${c.title}</h5>
              </div>
              <p class="card-description-text" style="font-size: 0.82rem; margin-bottom: 12px;">${c.desc}</p>
            </div>
            <div class="card-action-btn-group">
              <a href="${c.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-primary">
                <i class="fas fa-file-pdf"></i> View PDF
              </a>
              <button type="button" class="btn-card-action btn-card-outline" onclick="openCertModal('${c.title.replace(/'/g, "\\'")}', '${c.image}', '${c.pdfUrl}', true)">
                <i class="fas fa-search-plus"></i> Inspect
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Toggle Additional Certifications Collapse
function toggleAdditionalCerts() {
  const wrapper = document.getElementById("additionalCertsCollapse");
  const btn = document.getElementById("toggleAdditionalCertsBtn");
  if (!wrapper || !btn) return;

  if (wrapper.classList.contains("expanded")) {
    wrapper.classList.remove("expanded");
    btn.innerHTML = `<i class="fas fa-chevron-down mr-2"></i> View All 16 Additional Verified Certifications`;
  } else {
    wrapper.classList.add("expanded");
    btn.innerHTML = `<i class="fas fa-chevron-up mr-2"></i> Collapse Additional Certifications`;
  }
}

// Global Filter Handler
function filterShowcase(category, el) {
  // Update active pill
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  if (el) el.classList.add("active");

  renderFeaturedAchievements(category);
  renderHackerRankCertifications(category);
  renderFeaturedCertifications(category);

  // Manage section visibility for clean filtered views
  const leetcodeSection = document.getElementById("leetcodeBadgesSection");
  if (leetcodeSection) {
    if (category === "all" || category === "competitive-programming") {
      leetcodeSection.style.display = "block";
    } else {
      leetcodeSection.style.display = "none";
    }
  }

  const additionalSection = document.getElementById("additionalCertificationsSection");
  if (additionalSection) {
    if (category === "all" || category === "certifications") {
      additionalSection.style.display = "block";
    } else {
      additionalSection.style.display = "none";
    }
  }

  const hackerrankSection = document.getElementById("hackerRankSection");
  if (hackerrankSection) {
    if (category === "all" || category === "certifications" || category === "competitive-programming") {
      hackerrankSection.style.display = "block";
    } else {
      hackerrankSection.style.display = "none";
    }
  }
}

// Close modal on click outside
document.addEventListener("click", function(e) {
  const modal = document.getElementById("certInspectionModal");
  if (modal && e.target === modal) {
    closeCertModal();
  }
});

// Close modal on ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeCertModal();
  }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", function() {
  renderFeaturedAchievements("all");
  renderLeetcodeBadges();
  renderHackerRankCertifications("all");
  renderFeaturedCertifications("all");
  renderAdditionalCertifications();
});

