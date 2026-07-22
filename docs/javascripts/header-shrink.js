/* Shrinks the header once you scroll down, and expands it again at the top.
   Toggles the `md-header--shrunk` class; the sizing/transition lives in the
   stylesheet. Written to survive Material's instant navigation (the window
   listener is only ever attached once). */
(function () {
  var THRESHOLD = 60; // pixels scrolled before the header condenses

  function update() {
    var header = document.querySelector(".md-header");
    if (!header) return;
    header.classList.toggle("md-header--shrunk", window.scrollY > THRESHOLD);
  }

  if (!window.__nwmHeaderShrinkInit) {
    window.__nwmHeaderShrinkInit = true;
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    // Re-check after each instant page load, if Material's observable is around
    if (typeof document$ !== "undefined" && document$.subscribe) {
      document$.subscribe(function () { update(); });
    }
  }

  update();
})();
