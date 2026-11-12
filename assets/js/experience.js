AOS.init();

//  Professional Internship Experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI Developer Intern",
    cardImage: "assets/images/experience-page/swecha.png",
    place: "Swecha, Telangana",
    time: "(June 2025 – July 2025)",
    desp: "<li>Worked with Machine Learning, Natural Language Processing (NLP), and Computer Vision concepts.</li><li>Performed extensive data preprocessing, feature engineering, and model evaluation on practical datasets.</li><li>Explored AI model integration with scalable backend REST APIs for real-time inference.</li><li>Collaborated with engineering teams on open-source AI/ML development workflows and practical software delivery.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image" alt="${title}"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading font-weight-bold" style="color: #64ffda;">${place}</span><br>
              <span class="author" style="color: #a8b2d1;">${time}</span>
            </p>
            <ul style="padding-left: 20px; line-height: 1.8;">
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  if (experiencecards) experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Mentoring and Leadership Experience Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Student Mentor – Smart Interviews",
    cardImage: "assets/images/experience-page/smart_interviews.png",
    description:
      "Mentored and supported 1000+ students through intensive technical training. Guided learners through Data Structures, Algorithms, problem-solving techniques, and competitive programming fundamentals.",
  },
  {
    title: "Technical Trainer – X-Kernel, GRIET",
    cardImage: "assets/images/experience-page/xkernel.png",
    description:
      "Trained 50+ students in foundational and intermediate programming. Led hands-on coding sessions, problem-solving workshops, and supported technical events including the Tech Doctor contest platform.",
  },
  {
    title: "DSA & CP Mentor – Peer Learning",
    cardImage: "assets/images/achievements/knight_leetcode.png",
    description:
      "Conducted algorithmic problem-solving sessions, guided juniors through LeetCode contest strategies, dynamic programming, graph algorithms, and competitive coding optimization.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: auto; min-height: 440px; width: 340px; margin: 15px; background: #0a192f; border: 1px solid rgba(100, 255, 218, 0.2); border-radius: 12px; box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);">
        <img src="${cardImage}" height="180" width="100%" class="card-img" style="border-radius: 10px 10px 0 0; object-fit: cover;" alt="${title}">
        <div class="content" style="padding: 1.2rem; text-align: left; z-index: 1;">
          <h2 class="volunteerTitle" style="font-size: 1.15rem; line-height: 1.4; padding-bottom: 10px; transform: none; color: #64ffda; font-weight: 700;">${title}</h2>
          <p class="copy" style="font-size: 0.92rem; font-style: normal; line-height: 1.6; padding-bottom: 10px; color: #cbd5e1;">${description}</p>
        </div>
      </div>
      `)
  );
  if (volunteership) volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Competitive Programming and Hackathons Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "QUEST 2025 Code Shuffle",
    subtitle: "Runner-Up | JNTU Hyderabad | ₹1,000 Cash Prize",
    image: "assets/images/achievements/code_shuffle.jpg",
    desp: "Secured 2nd Place / Runner-up in the prestigious 'Code Shuffle' competitive programming contest organized at QUEST 2025, JNTUH, competing against top university coders.",
    href: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
  },
  {
    title: "Nova Code Challenge 2025",
    subtitle: "5th Place / 2,000+ Participants | ₹10,000 Cash Prize",
    image: "assets/images/achievements/nova_rank_card.png",
    desp: "Achieved 5th rank nationally out of 2,000+ competitive programmers in Nova Code Challenge 2025, solving complex DSA problems under strict time constraints.",
    href: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
  },
  {
    title: "LeetCode Knight Badge",
    subtitle: "Rating: 2000+ | Top 2.5% Worldwide | 1,000+ Solved",
    image: "assets/images/achievements/knight_leetcode.png",
    desp: "Earned the prestigious LeetCode Knight badge with a 2000+ contest rating and over 1,000 algorithmic problems solved across trees, graphs, and dynamic programming.",
    href: "https://leetcode.com/u/nikhilsiddarthaa21/",
  },
  {
    title: "Smart Interviews Diamond Coder",
    subtitle: "Rank 249 / 54,565 Coders Worldwide",
    image: "assets/images/experience-page/smart_interviews.png",
    desp: "Achieved the highest tier Diamond Certification at Smart Interviews with a global rank of 249 among 54,500+ competitive coders, demonstrating high algorithmic speed and precision.",
    href: "https://www.linkedin.com/in/nikhil-siddartha-7347b532b/",
  },
  {
    title: "HackerRank Problem Solving",
    subtitle: "Intermediate Certified & 5-Star Gold Badge",
    image: "assets/images/certificates/hackerrank_problem_solving.png",
    desp: "Demonstrated advanced proficiency in data structures, algorithms, time complexity optimization, and memory management on HackerRank.",
    href: "https://www.hackerrank.com/profile/23241a05a7vsn",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="${title}">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title" style="color: #64ffda;">${title}</div>
          <span class="blog-slider__code" style="color: #38bdf8; font-weight: 600;">${subtitle}</span>
          <div class="blog-slider__text" style="color: #cbd5e1; line-height: 1.6;">${desp}</div>
          <a href="${href}" target="_blank" rel="noopener noreferrer" class="blog-slider__button" style="background: linear-gradient(135deg, #0284c7, #2563eb); color: white; border-radius: 25px; padding: 10px 24px; text-decoration: none; font-weight: 600; display: inline-block;">View Profile / Proof</a>   
        </div>
      </div>
      `)
  );
  if (hackathonsection) hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
