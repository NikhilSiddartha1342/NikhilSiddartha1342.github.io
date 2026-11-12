AOS.init();

// Verified Technical Certifications and MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Salesforce & GFG: Agentic AI",
    issuer: "Salesforce & GeeksforGeeks",
    date: "2025",
    cardImage: "assets/images/certificates/ai_agents_salesforce.png",
    moocLink: "assets/images/certificates/ai_agents_salesforce.png",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Certified",
    cardImage: "assets/images/certificates/hackerrank_problem_solving.png",
    moocLink: "https://www.hackerrank.com/profile/23241a05a7vsn",
  },
  {
    title: "Python 3.4.3 Certification",
    issuer: "IIT Bombay Spoken Tutorial",
    date: "Verified",
    cardImage: "assets/images/certificates/python_iit_bombay.png",
    moocLink: "assets/images/certificates/python_iit_bombay.png",
  },
  {
    title: "OCI 2025 GenAI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    cardImage: "assets/images/certificates/oracle_genai.png",
    moocLink: "assets/images/certificates/oracle_genai.png",
  },
  {
    title: "Data Science for Engineers (Top 1%)",
    issuer: "NPTEL & IIT Madras",
    date: "Score: 88% (Elite + Gold)",
    cardImage: "assets/images/certificates/nptel_data_science.png",
    moocLink: "assets/images/certificates/nptel_data_science.png",
  },
  {
    title: "Diamond Certified Coder",
    issuer: "Smart Interviews",
    date: "Rank 249 / 54,565",
    cardImage: "assets/images/experience-page/smart_interviews.png",
    moocLink: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, issuer, date, cardImage, moocLink }) =>
      (output += `        
        <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="200">  
            <div class="card h-100 shadow-sm" style="background: #0a192f; border: 1px solid rgba(100, 255, 218, 0.2); border-radius: 12px; overflow: hidden; transition: transform 0.3s ease, border-color 0.3s ease;">
               <div style="height: 200px; overflow: hidden; background: #020c1b; display: flex; align-items: center; justify-content: center; position: relative;">
                  <img src="${cardImage}" alt="${title}" style="width: 100%; height: 100%; object-fit: contain; padding: 6px;">
                  <a href="${moocLink}" target="_blank" rel="noopener noreferrer" style="position: absolute; right: 12px; top: 12px; background: rgba(10, 25, 47, 0.85); color: #64ffda; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid #64ffda;" title="View Certificate">
                    <i class="fas fa-external-link-alt" style="font-size: 14px;"></i>
                  </a>
               </div>
               <div class="card-body p-3 text-left">
                  <h6 class="font-weight-bold mb-1" style="color: #f1f5f9; font-size: 1.05rem;">${title}</h6>
                  <p class="mb-1" style="color: #64ffda; font-size: 0.88rem; font-weight: 500;"><i class="fas fa-award mr-1"></i> ${issuer}</p>
                  <p class="mb-2 text-muted" style="font-size: 0.82rem;"><i class="far fa-calendar-alt mr-1"></i> ${date}</p>
                  <a href="${moocLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-info w-100" style="border-color: #64ffda; color: #64ffda; font-weight: 500; border-radius: 6px;">
                    Verify Credential
                  </a>
               </div>
            </div>
        </div>        
      `)
  );
  if (moocs) moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Timeline Section Animations */

$(function () {
  if (typeof ScrollReveal !== "undefined") {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
      if ($(".timeline-content").hasClass("js--fadeInLeft")) {
        $(".timeline-content")
          .removeClass("js--fadeInLeft")
          .addClass("js--fadeInRight");
      }

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    }
  }
});
