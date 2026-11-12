/*Reference Details Table*/
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1: "AI Lead – Swecha Telangana",
    designation1: "Industry Mentor & Technical Lead",
    image1: "assets/images/experience-page/swecha.png",
    message1:
      "Nikhil demonstrated exceptional grasping skills in computer vision and machine learning workflows during his AI Developer Internship. His diligence, solid fundamentals, and algorithmic problem-solving abilities are outstanding.",

    sl2: 2,
    name2: "Lead Instructor – Smart Interviews",
    designation2: "Technical Training & Mentorship Lead",
    image2: "assets/images/experience-page/smart_interviews.png",
    message2:
      "Nikhil is an exceptional mentor who guided over 1000+ students in Data Structures and Algorithms with patience, deep technical clarity, and passion. He helps learners strengthen core programming fundamentals effectively.",
  },

  {
    sl1: 3,
    name1: "Technical Lead – X-Kernel, GRIET",
    designation1: "Technical Committee & Platform Advisor",
    image1: "assets/images/experience-page/xkernel.png",
    message1:
      "Nikhil's leadership during the Tech Doctor platform deployment and hands-on coding workshops inspired dozens of junior engineers. He combines solid full-stack engineering skills with dedication.",

    sl2: 4,
    name2: "Competitive Programming Peer",
    designation2: "Fellow Contest Coder & Collaborator",
    image2: "assets/images/achievements/knight_leetcode.png",
    message2:
      "Nikhil tackles complex graph algorithms, dynamic programming, and systems design problems with speed and precision. His 2000+ LeetCode rating and contest podium finishes reflect his true dedication to the craft.",
  },
];

AOS.init();
const fillData = () => {
  if (!referenceTable) return;
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
    }) =>
      (output += `
      <tr>
        <td class="referCol" data-aos="zoom-in-right">
          <div class="row referRow">
            <div class="col-md-3 text-center">
              <img src="${image1}" class="img-fluid rounded-circle shadow" style="width: 90px; height: 90px; object-fit: cover; border: 2px solid #64ffda;" alt="${name1}">
            </div>
            <div class="col-md-9 referDetails">
              <h5 class="referName" style="color: #64ffda; font-weight: 700;">${name1}</h5>
              <p class="referDesignation" style="color: #38bdf8; font-weight: 500;">${designation1}</p>
              <p class="referMessage" style="color: #cbd5e1; line-height: 1.6;">"${message1}"</p>
            </div>
          </div>
        </td>
        <td class="referCol" data-aos="zoom-in-left">
          <div class="row referRow">
            <div class="col-md-3 text-center">
              <img src="${image2}" class="img-fluid rounded-circle shadow" style="width: 90px; height: 90px; object-fit: cover; border: 2px solid #64ffda;" alt="${name2}">
            </div>
            <div class="col-md-9 referDetails">
              <h5 class="referName" style="color: #64ffda; font-weight: 700;">${name2}</h5>
              <p class="referDesignation" style="color: #38bdf8; font-weight: 500;">${designation2}</p>
              <p class="referMessage" style="color: #cbd5e1; line-height: 1.6;">"${message2}"</p>
            </div>
          </div>
        </td>
      </tr>
      `)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
