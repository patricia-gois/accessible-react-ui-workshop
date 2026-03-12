🚀 Accessible React UI Workshop

A collection of high-fidelity React components built with a "People-First" mindset. This project demonstrates the intersection of modern frontend development, UI/UX precision, and WCAG accessibility standards.

🛠️ The Challenges:

    1. Inclusive Navigation
    Problem: Most navigation menus are inaccessible to keyboard-only users and screen readers.

    Solution: Built a responsive Navbar with a Focus Trap for mobile, ARIA dynamic states, and a Skip Link to improve the experience for power users and those with motor disabilities.

    Key Tech: useState, useEffect (Event Listeners), Semantic HTML5.

    2. Empathetic Forms (Validation)
    Problem: Forms that only use color to show errors or lack clear labels are frustrating and exclusionary.

    Solution: Implemented a real-time validation system using aria-live for instant audio feedback and aria-describedby to link error messages to inputs.

    Key Tech: useRef (Focus management), RegEx validation, ARIA Live Regions.

    3. Theme-Aware Design System
    Problem: Hardcoded themes often ignore user system preferences and fail color contrast audits.

    Solution: A robust theme engine using React Context API and CSS Custom Properties. It automatically detects prefers-color-scheme and ensures WCAG AA compliance in both Light and Dark modes.

########

    Key Tech: Context API, Local Storage, CSS Variables.

    ♿ Accessibility Features (WCAG 2.1 Focus)
    Keyboard Navigable: Fully operable via Tab, Enter, and Esc.

    Screen Reader Optimized: Strategic use of aria-expanded, aria-invalid, and landmark roles.

    Visual Clarity: Custom :focus-visible indicators and contrast-safe color palettes.

    Respectful UI: Respects "Reduced Motion" and "Dark Mode" system settings.

########

💻 Tech Stack:

    Framework: React 18 (Vite)

    Icons: Lucide React

    Styling: CSS3 (BEM Methodology & Design Tokens)

    Tooling: Axe DevTools, Lighthouse

########

🚀 Getting Started:

    Clone the repo:

    Bash
    git clone https://github.com/your-username/accessible-nav.git
    Install dependencies:

    Bash
    npm install
    Run the development server:

    Bash
    npm run dev

########

👤 About the Author:

    I am a Frontend Developer & UI/UX Enthusiast passionate about building digital products that everyone can use. With a background in community leadership and design, I believe empathy is the most important tool in a developer's kit.