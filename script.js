:root {
  --navy: #1d3557;
  --navy-dark: #122742;
  --red: #e63946b;
  --red-dark: #ba2a38;
  --soft-white: #f1faee;
  --cream: #fffaf3;
  --text: #1c1f26;
  --muted: #5a6473;
  --white: #ffffff;
  --shadow: 0 10px 25px rgba(19, 32, 51, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--white);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(29, 53, 87, 0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 1rem;
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.02em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.88);
  font-weight: 600;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  transition: 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255, 255, 255, 0.12);
  color: var(--white);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: var(--white);
}

.hero {
  background: linear-gradient(120deg, rgba(17, 35, 57, 0.84), rgba(29, 53, 87, 0.8)),
    url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  color: var(--white);
  padding: 6rem 0;
}

.hero-inner {
  display: flex;
  align-items: center;
  min-height: 420px;
}

.hero-copy {
  max-width: 680px;
}

.eyebrow {
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--navy);
}

.eyebrow.accent {
  color: var(--red-dark);
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.3rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.hero-copy p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--red);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--red-dark);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  color: var(--white);
}

.section {
  padding: 5rem 0;
}

.section-light {
  background: var(--soft-white);
}

.section-accent {
  background: linear-gradient(135deg, #eef5ff, #fff0f3);
}

.section-heading {
  text-align: center;
  margin-bottom: 2.5rem;
}

.left-align {
  text-align: left;
}

.two-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  align-items: center;
}

.info-card,
.service-card,
.quote-box,
.contact-box {
  background: var(--white);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

.info-card ul,
.hours-list {
  margin: 0;
  padding-left: 1.2rem;
}

.card-grid,
.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.service-card {
  border: 1px solid rgba(29, 53, 87, 0.08);
}

.quote-box {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
}

.cta-section {
  padding-top: 0;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: var(--navy);
  color: var(--white);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  box-shadow: var(--shadow);
}

.page-hero {
  background: var(--navy);
  color: var(--white);
  padding: 5rem 0 4rem;
}

.contact-list {
  display: grid;
  gap: 0.75rem;
}

.contact-list a {
  color: var(--red-dark);
  font-weight: 700;
}

.site-footer {
  background: var(--navy-dark);
  color: rgba(255, 255, 255, 0.9);
  padding: 2rem 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
}

@media (max-width: 760px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    background: var(--navy);
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .nav-menu.open {
    display: flex;
  }

  .two-column,
  .cta-box,
  .footer-inner {
    grid-template-columns: 1fr;
    display: grid;
    text-align: center;
  }

  .hero {
    padding: 4rem 0;
  }

  .section {
    padding: 4rem 0;
  }
}
