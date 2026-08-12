# 🚀 Jose.dev — Personal Portfolio

> _"I don't just write code, I tell stories through vibrant interfaces."_

Personal portfolio of **Jose Diaz**, Junior Developer & Imagineer.
Built 100% with **HTML · pure CSS · vanilla JavaScript** — no frameworks, no dependencies, no build step.

**Organized modular architecture** with clear separation between styles, logic, and dynamic HTML components for maximum maintainability and scalability.

---

## 📋 Table of contents

- [Live Demo](#-live-demo)
- [Preview](#-preview)
- [Technologies](#-technologies)
- [Project structure](#-project-structure)
- [HTML modules](#-html-modules)
- [Features](#-features)
- [Performance and architecture](#-performance-and-architecture)
- [How to run](#-how-to-run)
- [Development](#-development)
- [Customization](#-customization)
- [EmailJS Integration](#-emailjs-integration)
- [Author](#-author)

---

## 🌐 Live Demo

[View Live Site](https://jose2520.github.io/)

---

## 🖼 Preview

|                 Dark mode                 |               Light mode                |
| :-----------------------------------------: | :-------------------------------------: |
| Black background with red accents and canvas node grid | White background with lilac accents and consistent theme styling |

---

## 🛠 Technologies

| Layer        | Technology                                    | Details                                      |
| ------------ | --------------------------------------------- | --------------------------------------------- |
| Structure    | Semantic HTML5                                | 9 dynamic modules loaded via asynchronous `fetch` |
| Styling      | Pure CSS3 (variables, animations, grid, flex) | Modular architecture across 17 files in 5 layers |
| Logic        | Vanilla JavaScript ES6+                        | Modular code across 12 files in 3 layers (core/features/utils) |
| Icons        | Font Awesome 6.5.1 + Devicon + Simple Icons    | Vector iconography for tech stack and UI      |
| Fonts        | Space Grotesk + Fira Code + Outfit + Orbitron  | Google Fonts for typography & futuristic aesthetics |
| Dev server   | Live Server / npx serve / Python HTTP Server   | Local deployment without complex build toolchains |

> ⚠️ **No React · No Tailwind · No jQuery · No Webpack/Vite build required.**

---

## 📁 Project structure

```
jose.dev/ 🎯 Root
├── 🌐 index.html              (Main entry point & module container)
├── 🧪 test-orbit3.html        (Experimental orbit/animation test page)
├── 📖 README.md               (Project documentation)
├── 📦 public/                 (Static public assets)
│   └── 🖼️  img/
│       ├── 👤 profile/        (Profile images, favicon, avatars)
│       ├── 🎨 proyect/        (Project screenshots)
│       └── 📋 borrador/       (Drafts & 404 templates)
│
├── 🎨 src/                    (Source code)
│   ├── 🎭 css/
│   │   ├── 🔌 base/           (Reset and base styles)
│   │   │   ├── 🔄 reset.css
│   │   │   └── 🎯 base.css
│   │   ├── 🌈 themes/         (CSS variables - colors and themes)
│   │   │   └── 🎨 variables.css
│   │   ├── 🧩 components/     (Section-specific styles)
│   │   │   ├── 📱 navbar.css
│   │   │   ├── ✨ hero.css
│   │   │   ├── 👋 about.css
│   │   │   ├── 🛠️  tools.css
│   │   │   ├── 📂 projects.css
│   │   │   ├── 💬 contact.css
│   │   │   ├── 🔗 footer.css
│   │   │   ├── 🚧 maintenance-modal.css
│   │   │   └── ❌ 404.css
│   │   ├── ⚡ utilities/      (Utility classes)
│   │   │   ├── 🎯 utilities.css
│   │   │   └── ✨ effects.css
│   │   └── 🎬 animations/     (Animations and responsive design)
│   │       ├── 🌊 animations.css
│   │       ├── 🎪 cursor.css
│   │       └── 📱 responsive.css
│   │
│   ├── 📄 view/               (HTML modules - loaded dynamically via fetch)
│   │   ├── 🚧 mod-maintenance.html (Maintenance overlay modal)
│   │   ├── 🌐 mod-background.html  (Canvas node grid & particles)
│   │   ├── 📱 mod-nav.html         (Navbar & mobile dropdown)
│   │   ├── 🔺 mod-hero.html        (Hero section & avatars)
│   │   ├── 👤 mod-about.html       (About me story & traits)
│   │   ├── 🛠️  mod-tools.html      (Tech stack & toy box)
│   │   ├── 📂 mod-projects.html    (Featured projects showcase)
│   │   ├── 💬 mod-contact.html     (Contact info & validated form)
│   │   └── 🔗 mod-footer.html      (Footer layout & social links)
│   │
│   └── ⚙️  js/                (JavaScript modular logic)
│       ├── 🔥 core/           (Core functionality)
│       │   ├── 🎯 core.js     (Scroll reveal & stat counters)
│       │   ├── 🖱️  interactions.js (User event handlers)
│       │   └── 🧩 modules.js  (Dynamic module loader via fetch)
│       ├── 🎪 features/       (Feature-specific logic)
│       │   ├── 🎨 canvas.js   (Node grid canvas background)
│       │   ├── ✨ decorations.js (Floating particles)
│       │   ├── 🚧 maintenance.js (Maintenance modal controller)
│       │   ├── 🔄 smooth-nav.js (Smooth scrolling & section active states)
│       │   ├── 🌙 theme.js    (Dark/Light mode switcher with localStorage)
│       │   └── ⌨️  typing-effect.js (Dynamic typing effect)
│       └── 🔧 utils/          (Utilities & helpers)
│           ├── 🎪 cursor.js   (Custom cursor ring & glow)
│           └── 📝 forms.js    (Contact form validation & submission)
```

### 🏗 Architecture overview

- **CSS organized in 5 distinct layers (17 files):**
  - `base/` → Reset and base typography/body settings.
  - `themes/` → CSS custom properties (`--bg`, `--text`, `--accent`, etc.) supporting dark/light switching.
  - `components/` → Isolated styles for each modular section (Navbar, Hero, About, Tools, Projects, Contact, Footer, Maintenance modal, 404).
  - `utilities/` → Helper classes and visual effects.
  - `animations/` → Keyframes, custom cursor animations, and media queries for responsiveness.

- **JavaScript organized in 3 layers (12 files):**
  - `core/` → Core initializations, IntersectionObserver scroll reveals, animated statistics counters, and dynamic HTML module injection.
  - `features/` → Canvas background animations, floating particle decorations, maintenance modal triggers, smooth navigation, dark/light mode state, and typing effects.
  - `utils/` → Custom cursor tracking and interactive form validation.

- **Dynamic Modular HTML:**
  - Components are stored in `src/view/` and injected asynchronously by `modules.js` in strict priority order (Maintenance → Background → Navbar → Hero → About → Tools → Projects → Contact → Footer).

---

## 🧩 HTML modules

The application is structured around **9 dynamically injected modules**:

1. **Maintenance Modal (`mod-maintenance.html`)** — Initial greeting/renovation overlay with interactive canvas and dismiss trigger.
2. **Background Layers (`mod-background.html`)** — Global interactive node grid canvas and floating code particles.
3. **Navigation Bar (`mod-nav.html`)** — Desktop navigation bar and mobile hamburger dropdown menu with theme toggle.
4. **Hero Section (`mod-hero.html`)** — Introduction, glitch typography, call-to-action buttons, animated statistics, and orbital avatar badge.
5. **About Section (`mod-about.html`)** — Personal story, background, and specialty trait chips with animated borders.
6. **Tools Section (`mod-tools.html`)** — Categorized technical stack (Languages, Frameworks, Databases, Tools).
7. **Projects Section (`mod-projects.html`)** — Feature cards showcasing real-world projects with interactive tilt and links.
8. **Contact Section (`mod-contact.html`)** — Contact channels and fully validated contact form.
9. **Footer (`mod-footer.html`)** — Copyright notices, branding, and social links.

---

## ✨ Features

### Artistic & Interactive Animations
- **Canvas Node Grid** — Dynamic interconnected particle network rendered on HTML5 canvas.
- **Floating Particles** — Code snippet particles drifting across the background.
- **Glitch Effect** — Cyberpunk flickering title effect on load/hover.
- **Orbit Rings & Shimmer** — Rotating tech orbit around the avatar and conic gradient glowing borders.
- **Scroll Reveal** — Staggered element entrance using `IntersectionObserver`.
- **3D Tilt Cards** — Interactive mouse-move tilt effect on project cards.
- **Custom Cursor** — Smooth glowing dual-ring cursor tracking pointer movement.
- **Typing Effect** — Real-time typing and deleting text animation.
- **Animated Counters** — Statistics counting up dynamically upon viewport intersection.

### Theme Management
- Real-time **Dark / Light mode** toggle (☀️ / 🌙) via navbar.
- Dynamic swapping of CSS variables using `[data-theme]` attribute.
- Persistent user choice saved in browser `localStorage`.

### Accessibility & Semantics
- Semantic HTML5 landmark elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- Proper ARIA attributes (`aria-label`, `aria-modal`, `aria-expanded`, `aria-live`).

---

## ▶️ How to run

### Option 1 — Live Server (VS Code) ⭐ Recommended
1. Install the **Live Server** extension (`ritwickdey.liveserver`) in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. Visit `http://127.0.0.1:5500`.

### Option 2 — Node.js serve
```bash
npx serve . -l 3000
# Open http://localhost:3000
```

### Option 3 — Python HTTP Server
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 4 — Direct File Opening
Double-click `index.html` to open directly in your web browser (note: dynamic module fetching via `fetch()` may be restricted by local CORS policies in some browsers without a local server).

---

## 🛠️ Development

### File Count Verification
```bash
# Count source files
find src/css -name "*.css" | wc -l    # Expected: 17
find src/js -name "*.js" | wc -l     # Expected: 12
find src/view -name "*.html" | wc -l # Expected: 9
```

### Useful Development Commands
```bash
# Start local Python server
python3 -m http.server 8000

# Test availability
curl -I http://localhost:8000/index.html
```

---

## 🎨 Customization

### Updating Theme Colors
Edit CSS variables in `src/css/themes/variables.css`:
```css
:root {
  --red: #e63946;       /* Primary accent */
  --red-dark: #c1121f;  /* Accent hover / active */
  --bg: #0b0b0f;        /* Background color */
  --text: #f0f0f8;      /* Primary text color */
}
```

### Adding a New Section
1. Create stylesheet at `src/css/components/new-section.css` and link it in `index.html`.
2. Create HTML module at `src/view/mod-new-section.html`.
3. Register the module in `src/js/core/modules.js` with appropriate priority.
4. Add corresponding container `<div id="mod-new-section"></div>` in `index.html`.

---

## 📬 Contact Form & EmailJS

The contact form in `src/js/utils/forms.js` can be connected to [EmailJS](https://www.emailjs.com/) for serverless form submissions:
1. Create a free EmailJS account and service (e.g., Gmail).
2. Create a notification template with variables (`name`, `reply_to`, `message`).
3. Update credentials and IDs in `src/js/utils/forms.js`.

---

## 👤 Author

**Jose Diaz** — Junior Developer & Imagineer

- 📧 **Email:** josedelcarmen_diaz@outlook.com
- 📍 **Location:** Barranquilla, Colombia 🇨🇴
- 💼 **LinkedIn:** [jose-de-carmen-d-901b39a4](https://www.linkedin.com/in/jose-de-carmen-d-901b39a4/)
- 🐙 **GitHub:** [@jose2520](https://github.com/jose2520)

---

<div align="center">
  <sub>Made with ❤️ and lots of ☕ in Colombia · 2026</sub>
</div>
