/* ================================================================
    JOSE.DEV — JavaScript Modular Architecture
    File: typing-effect.js
    Purpose: Typing animations for labels (hero and about).
   ================================================================ */

(function initTypingEffect() {
  "use strict";

  function start() {
    // 1. About section typing label
    const label = document.querySelector('.typing-label');
    if (label) {
      const texts = ['historia.js', 'about.me', 'developer.conf', 'passion.code'];
      let tIdx = 0, cIdx = 0, deleting = false;

      function tickAbout() {
        const current = texts[tIdx];
        
        if (!deleting) {
          label.innerHTML = `<i class="fas fa-terminal"></i> ${current.slice(0, ++cIdx)}<span style="opacity:0.8;color:var(--red)">|</span>`;
          if (cIdx === current.length) {
            deleting = true;
            setTimeout(tickAbout, 1800);
            return;
          }
        } else {
          label.innerHTML = `<i class="fas fa-terminal"></i> ${current.slice(0, --cIdx)}<span style="opacity:0.8;color:var(--red)">|</span>`;
          if (cIdx === 0) {
            deleting = false;
            tIdx = (tIdx + 1) % texts.length;
            setTimeout(tickAbout, 400);
            return;
          }
        }
        setTimeout(tickAbout, deleting ? 60 : 100);
      }
      setTimeout(tickAbout, 1000);
    }

    // 2. Hero section typing label
    const heroTagText = document.querySelector('.hero-tag-text');
    if (heroTagText) {
      const text = heroTagText.getAttribute('data-text') || '';
      heroTagText.innerHTML = '';
      let i = 0;
      function typeHero() {
        if (i < text.length) {
          heroTagText.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeHero, 50); // Speed of typing
        }
      }
      setTimeout(typeHero, 500); // Initial delay
    }
  }

  // Run when modules are dynamically loaded
  document.addEventListener('modulesLoaded', start);

  // Fallback if already loaded
  if (document.querySelector('.hero-tag-text') || document.querySelector('.typing-label')) {
    start();
  }

})();

