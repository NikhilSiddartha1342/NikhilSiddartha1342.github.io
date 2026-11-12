/*Research and Technical Interests Details*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "PrivaStram: Enterprise-Grade Real-Time Multimodal Privacy Shield (Ongoing Research)",
    authors: "Pinninti Varaha Siddartha Nikhil",
    conferences: "Research & Applied Engineering Prototype | Privacy-Preserving AI",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/project-page/privastram.png",
    citation: {
      vancouver:
        "Nikhil Siddartha. PrivaStram: Enterprise-Grade Real-Time Multimodal Privacy Shield via Temporal Stabilization and Multimodal Deep Learning. Technical Research Prototype, 2025.",
    },
    abstract:
      "<strong>Project Status: Ongoing Research Prototype</strong><br>PrivaStram explores real-time multimodal anonymization across live video streams and conversational audio. Implemented features include high-fps facial landmark detection, license plate identification, OCR-based sensitive document detection, and adaptive blurring. Planned and ongoing research focuses on end-to-end temporal mask stabilization and low-latency acoustic PII scrubbing.",
    absbox: "absPopup1",
  },
  {
    title: "Real-Time Driver Fatigue Monitoring via Temporal Facial Landmark Metrics (AwareOn)",
    authors: "Pinninti Varaha Siddartha Nikhil",
    conferences: "Computer Vision & Edge Safety Systems",
    researchYr: 2025,
    citebox: "popup2",
    image: "assets/images/project-page/awareon.png",
    citation: {
      vancouver:
        "Nikhil Siddartha. AwareOn: Real-Time Drowsiness and Driver Fatigue Detection Using Eye/Mouth Aspect Ratios and Weighted Fatigue Scoring. Technical System Paper, 2025.",
    },
    abstract:
      "Explores lightweight, safety-critical edge computer vision for real-time driver fatigue monitoring. Evaluates Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), and cumulative PERCLOS metrics powered by MediaPipe 468-point 3D facial mesh models on resource-constrained edge hardware with audio-visual alert dispatching.",
    absbox: "absPopup2",
  },
  {
    title: "Autonomous Agentic AI & Generative Multimodal Reasoning Architectures",
    authors: "Pinninti Varaha Siddartha Nikhil",
    conferences: "Technical Research & Exploration | Agentic Systems",
    researchYr: 2025,
    citebox: "popup3",
    image: "assets/images/certificates/ai_agents_salesforce.png",
    citation: {
      vancouver:
        "Nikhil Siddartha. Autonomous Agentic AI Architectures: Tool-Use, Multistep Reasoning, and Grounded Context Retrieval. Technical Study, 2025.",
    },
    abstract:
      "Exploration of autonomous AI agents utilizing tool retrieval, reflection loops, dynamic planning, and LLM reasoning primitives. Examines applications across automated code reviews, business intelligence tools, and real-time domain decisioning systems.",
    absbox: "absPopup3",
  },
];

AOS.init();
const fillData = () => {
  if (!researchTable) return;
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg" alt="${title}" style="border-radius: 8px; width: 140px; height: 110px; object-fit: cover;"></td>
                <td class="researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes" alt="${title}">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle" style="color: #64ffda; font-weight: 700; font-size: 1.15rem;"> ${title} </a> 
                    <div class="authors" style="color: #cbd5e1; font-size: 0.92rem;"> ${authors} </div> 
                    
                    <div class="rConferences" style="color: #38bdf8; font-weight: 500;"> ${conferences} 
                        <div class="researchY" style="color: #94a3b8;">${researchYr}</div>
                    </div>
                    
                    <!--CITE & ABSTRACT BUTTONS-->
                    <div class="d-flex my-2" style="gap: 10px;">
                        <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}" style="background: rgba(100, 255, 218, 0.15); border: 1px solid #64ffda; color: #64ffda; padding: 4px 14px; border-radius: 6px; font-weight: 600;">
                            OVERVIEW & STATUS
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract" type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}" style="background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; padding: 4px 14px; border-radius: 6px; font-weight: 600;">
                            CITATION
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse mt-2" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body p-3" style="background: #0a192f; border: 1px solid rgba(100, 255, 218, 0.2); border-radius: 8px; color: #cbd5e1; line-height: 1.6;">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse mt-2" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body p-3 font-italic" style="background: #0a192f; border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; color: #cbd5e1; font-size: 0.9rem;">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
