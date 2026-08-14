/* ================================================================
    JOSE.DEV — JavaScript Modular Architecture
    File: scroll-reveal.js
    Purpose: Dynamic futuristic scroll animations that invert on reverse scroll.
   ================================================================ */

(function initScrollReveal() {
  "use strict";

  let scrollObserver = null;
  // Keep track of elements we've already observed to avoid duplicate observation
  const observedElements = new WeakSet();

  function setupObserver() {
    // Select all sections and explicitly marked reveal elements
    const revealElements = document.querySelectorAll('.reveal, section');

    // Add .reveal to sections that don't have it yet for consistent behavior
    revealElements.forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });

    // Initialize the observer only once
    if (!scrollObserver) {
      const observerOptions = {
        root: null,
        rootMargin: '30% 0px 90% 0px', // Trigger extremely early to ensure sections are visible almost instantly
        threshold: 0
      };

      scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // Element is scrolling into view
            el.classList.add('visible');
            el.classList.remove('hidden-up');
          } else {
            // Element is scrolling out of view
            el.classList.remove('visible');

            // Check direction: if bounding top is above viewport (y < 0) -> scrolled down past it
            // Use boundingClientRect.top for more reliable positioning cross-browser
            if (entry.boundingClientRect.top < 0) {
              el.classList.add('hidden-up');
            } else {
              // It scrolled back down below viewport -> reset to default hidden down state
              el.classList.remove('hidden-up');
            }
          }
        });
      }, observerOptions);
    }

    // Only observe elements that haven't been observed yet
    revealElements.forEach(el => {
      if (!observedElements.has(el)) {
        scrollObserver.observe(el);
        observedElements.add(el);
      }
    });
  }

  // Setup immediately if elements exist, otherwise wait for dynamic load
  document.addEventListener('modulesLoaded', setupObserver);
  document.addEventListener('DOMContentLoaded', setupObserver);

  // Call once immediately in case scripts are loaded after DOMContentLoaded
  setupObserver();
})();
