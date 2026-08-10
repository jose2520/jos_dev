// cursor.js - Custom cursor with point and ring following the mouse.
// Handles animations and size changes on hover for interactive elements.

(function(){
    // Only initialize on devices that support a fine pointer (mouse/trackpad)
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) return;

    const cursor     = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursor-ring');
    
    // Initialize off-screen
    let mx = -1000, my = -1000;
    let cx = -1000, cy = -1000;
    let rx = -1000, ry = -1000;

    // Track mouse movement
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
    });

    // Smooth animation loop
    function render() {
        // Fast follow for the inner dot
        cx += (mx - cx) * 0.4;
        cy += (my - cy) * 0.4;
        
        // Slower, smooth trailing for the outer ring
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        
        if (cursor) cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        if (cursorRing) cursorRing.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        
        requestAnimationFrame(render);
    }
    render();

    // Add hover states for interactive elements
    function attachHoverHandlers() {
        const els = document.querySelectorAll('a, button, input, textarea, select, .skill-chip, .project-card, [role="button"]');
        els.forEach(el => {
            // Avoid adding multiple listeners if called again
            if(el.dataset.cursorAttached) return;
            el.dataset.cursorAttached = "true";

            el.addEventListener('mouseenter', () => {
                if (cursor) cursor.classList.add('hover');
                if (cursorRing) cursorRing.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                if (cursor) cursor.classList.remove('hover');
                if (cursorRing) cursorRing.classList.remove('hover');
            });
        });
    }

    // Attach initially, and also observe DOM for dynamically added elements
    attachHoverHandlers();
    setTimeout(attachHoverHandlers, 800);
})();

/* ── CURSOR GLOW ──────────────────────────────────────────────── */
(function initCursorGlow() {
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let gx = -1000, gy = -1000;
    let mx = -1000, my = -1000;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
    });

    function renderGlow() {
        // Very slow, smooth trailing for the large glow
        gx += (mx - gx) * 0.08;
        gy += (my - gy) * 0.08;
        glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderGlow);
    }
    renderGlow();
})();

