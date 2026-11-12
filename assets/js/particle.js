/* ---- particles.js config for modern dark developer theme ---- */

if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#38bdf8", "#818cf8", "#60a5fa", "#3b82f6", "#a855f7"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#fff",
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: 3.5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#38bdf8",
        opacity: 0.25,
        width: 1.2,
      },
      move: {
        enable: true,
        speed: 2.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  });
}

// Animated Text Effect for Rotating Professional Interests
const allElements = document.querySelectorAll(".animated-text");

if (allElements.length > 0) {
  allElements.forEach((element) => {
    const txtElement = element;
    const wordsList = txtElement.getAttribute("data-words");
    if (!wordsList) return;
    const words = wordsList.split(", ");

    let wordsCount = 0;
    entry();

    function entry() {
      if (wordsCount < words.length) {
        let word = words[wordsCount];
        let txtArr = word.split("");
        let count = 0;

        txtElement.textContent = "";

        txtArr.forEach((letter) => {
          let _letter = letter === " " ? "&nbsp;" : letter;
          txtElement.innerHTML += `<span>${_letter}</span>`;
        });

        let spans = txtElement.childNodes;
        const letterInterval = setInterval(activeLetter, 65);

        function activeLetter() {
          if (count < spans.length) {
            spans[count].classList.add("active");
            count++;
          }

          if (count === spans.length) {
            clearInterval(letterInterval);
            setTimeout(() => {
              eraseText();
            }, 1800);
          }
        }

        function eraseText() {
          count--;
          let removeInterval = setInterval(removeLetter, 35);

          function removeLetter() {
            if (count >= 0 && spans[count]) {
              spans[count].classList.remove("active");
              count--;
            }

            if (count === -1) {
              clearInterval(removeInterval);
              wordsCount++;
              entry();
            }
          }
        }
      } else {
        wordsCount = 0;
        entry();
      }
    }
  });
}
