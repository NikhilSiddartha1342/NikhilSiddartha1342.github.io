/* Custom cursor controller */
(function () {
  var dot     = document.querySelector(".cursor-dot");
  var outline = document.querySelector(".cursor-dot-outline");

  if (!dot || !outline) return; // Guard: bail if elements missing

  var delay   = 7;
  var _x = 0, _y = 0;
  var endX = window.innerWidth  / 2;
  var endY = window.innerHeight / 2;
  var cursorVisible = false;

  /* Position dot immediately on mouse move (clientX = fixed coords) */
  document.addEventListener("mousemove", function (e) {
    if (!cursorVisible) {
      dot.style.opacity     = "1";
      outline.style.opacity = "1";
      cursorVisible = true;
    }
    endX = e.clientX;
    endY = e.clientY;
    dot.style.left = endX + "px";
    dot.style.top  = endY + "px";
  });

  /* Hide when cursor leaves the browser window */
  document.addEventListener("mouseleave", function () {
    dot.style.opacity     = "0";
    outline.style.opacity = "0";
    cursorVisible = false;
  });

  document.addEventListener("mouseenter", function () {
    dot.style.opacity     = "1";
    outline.style.opacity = "1";
    cursorVisible = true;
  });

  /* Shrink dot on click */
  document.addEventListener("mousedown", function () {
    dot.style.transform = "translate(-50%, -50%) scale(0.6)";
  });
  document.addEventListener("mouseup", function () {
    dot.style.transform = "translate(-50%, -50%) scale(1)";
  });

  /* Delegated mouseover/mouseout: Works reliably for dynamically injected elements (navbar, footer, cards) */
  var interactiveSelector = "a, button, .btn, .hero-btn, .nav-link, .navbar-brand, .dark_toggler, .featured-project-card, .project-card-custom, .achievement-mini-card, .achievement-full-card, .certificate-card, input, textarea, label, .interest-badge, .stat-card";

  document.addEventListener("mouseover", function (e) {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      outline.classList.add("hovered");
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      outline.classList.remove("hovered");
    }
  });

  /* Smooth-follow animation for the outline ring */
  function animate() {
    _x += (endX - _x) / delay;
    _y += (endY - _y) / delay;
    outline.style.left = _x + "px";
    outline.style.top  = _y + "px";
    requestAnimationFrame(animate);
  }
  animate();
})();
