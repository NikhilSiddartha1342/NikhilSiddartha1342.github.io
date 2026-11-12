$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    {
      title: "Tech Doctor Platform Demo – Anokha, GRIET",
      image: "assets/images/event/anokha_tech_doctor.jpg",
    },
    {
      title: "QUEST 2025 Code Shuffle Runner-Up – JNTU Hyderabad",
      image: "assets/images/event/code_shuffle_jntu.jpg",
    },
    {
      title: "Nova Code Challenge 2025 – 5th Place Nationally",
      image: "assets/images/event/nova_challenge.png",
    },
    {
      title: "Competitive Programming Contest – Anokha GRIET",
      image: "assets/images/event/anokha_contest.jpg",
    },
    {
      title: "Technical Training & Mentorship Workshop – GRIET",
      image: "assets/images/event/anokha_hall.jpg",
    },
  ];

  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
      <div class="img-container">
        <img src="${event[x].image}" alt="${event[x].title}" class="img-fluid" style="border-radius: 12px; max-height: 480px; object-fit: contain; margin: 0 auto; display: block;" />
      </div>
      <div class="container arrow_contain">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="wrapper">
              <div class="content">
                <div class="title">
                  <div class="text-wrapper">
                    <div class="text-inner" style="font-size: 1.15rem; color: #64ffda; font-weight: 600; text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
                    ${event[x].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div> 
        </div>
      </div>
    </div>`;
    }
    if (eventswiper) eventswiper.innerHTML = output;
  }
  fillData();

  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 25,
      depth: 25,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".next-ctrl",
      prevEl: ".prev-ctrl",
    },
  };

  const parallaxSlider = new Swiper(".image-slider", parallaxSliderOptions);
  $(window).on("resize", function () {
    parallaxSlider.update();
  });
});
