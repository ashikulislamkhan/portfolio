/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - PORTFOLIO INTERACTION ENGINE
 * Tomasz Gajda Architecture + Light/Dark Theme Controller
 * =========================================================================
 */

let activePortfolioFilter = "all";
let toastTimer = null;
let currentBibtexContent = "";

// Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme (Daylight vs Dusk)
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // 2. Render Dynamic Components from PORTFOLIO_DATA
  renderHeroProfile();
  renderCompetencies();
  renderExperience();
  renderPortfolio("all");

  // 3. Setup Scroll Observers for Active Nav Link
  setupNavScrollObserver();

  // 4. Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBibtexModal();
  });
});

// -------------------------------------------------------------------------
// 1. Theme Toggle Controller (Top Right Icon)
// -------------------------------------------------------------------------
function toggleThemeMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme === "dark" ? "Dark Mode" : "Light Mode"}`);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  
  if (theme === "dark") {
    // Moon Icon for Dark mode
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    btn.setAttribute("title", "Switch to Light Mode");
  } else {
    // Sun Icon for Light mode
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    btn.setAttribute("title", "Switch to Dark Mode");
  }
}

// -------------------------------------------------------------------------
// 2. Mobile Nav Drawer Toggle
// -------------------------------------------------------------------------
function toggleMobileNav() {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Close mobile nav when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu) menu.classList.remove("active");
  });
});

// -------------------------------------------------------------------------
// 3. Render Hero & Profile Data
// -------------------------------------------------------------------------
function renderHeroProfile() {
  const data = window.PORTFOLIO_DATA.profile;
  if (!data) return;

  const heroName = document.getElementById("heroFullName");
  const heroTagline = document.getElementById("heroTagline");
  const heroBio = document.getElementById("heroBio");
  const navBrand = document.getElementById("navBrandName");

  if (heroName) heroName.textContent = data.fullName;
  if (heroTagline) heroTagline.textContent = data.headline;
  if (heroBio) heroBio.textContent = data.summary;
  if (navBrand) navBrand.textContent = data.fullName;

  // Render Stats Grid
  const statsContainer = document.getElementById("heroStatsGrid");
  if (statsContainer && data.quickStats) {
    statsContainer.innerHTML = data.quickStats.map(stat => `
      <div class="stat-item">
        <span class="stat-number">${stat.val}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join("");
  }
}

// -------------------------------------------------------------------------
// 4. Render Core Competencies (Tomasz Gajda Grid)
// -------------------------------------------------------------------------
function renderCompetencies() {
  const container = document.getElementById("competenciesContainer");
  const compList = window.PORTFOLIO_DATA.competencies;
  if (!container || !compList) return;

  // Icon mapping for each competency
  const iconMap = {
    "trending-up": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    "cpu": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    "film": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`,
    "award": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
  };

  container.innerHTML = compList.map(cat => `
    <div class="skill-category-card">
      <div class="skill-card-header">
        <div class="skill-header-icon">
          ${iconMap[cat.icon] || iconMap["award"]}
        </div>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.skills.map(s => `
          <span class="skill-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            ${s}
          </span>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 5. Render Experience (Professional & Leadership)
// -------------------------------------------------------------------------
function renderExperience() {
  // Professional Experience
  const wpContainer = document.getElementById("workplacesContainer");
  const workList = window.PORTFOLIO_DATA.workExperience;
  if (wpContainer && workList) {
    wpContainer.innerHTML = workList.map(item => `
      <div class="timeline-item">
        <div class="item-top-row">
          <h4 class="item-role-title">${item.role}</h4>
          <span class="item-period-badge">${item.period}</span>
        </div>
        <div class="item-organization">${item.organization} · ${item.location}</div>
        <ul class="item-bullets">
          ${item.responsibilities.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  // Leadership Experience
  const leadContainer = document.getElementById("leadershipContainer");
  const leadList = window.PORTFOLIO_DATA.leadershipExperience;
  if (leadContainer && leadList) {
    leadContainer.innerHTML = leadList.map(item => `
      <div class="timeline-item">
        <div class="item-top-row">
          <h4 class="item-role-title">${item.role}</h4>
          <span class="item-period-badge">${item.period}</span>
        </div>
        <div class="item-organization">${item.organization} · ${item.location}</div>
        ${item.tagline ? `<div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; font-style: italic;">${item.tagline}</div>` : ""}
        <ul class="item-bullets">
          ${item.responsibilities.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }
}

// -------------------------------------------------------------------------
// 6. Portfolio Filter & Render Controller
// -------------------------------------------------------------------------
function filterPortfolio(filterKey) {
  activePortfolioFilter = filterKey;

  // Update filter buttons UI
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const clickedBtn = Array.from(document.querySelectorAll(".filter-btn")).find(
    btn => btn.getAttribute("onclick")?.includes(filterKey)
  );
  if (clickedBtn) clickedBtn.classList.add("active");

  renderPortfolio(filterKey);
}

function renderPortfolio(filterKey) {
  const container = document.getElementById("portfolioGridContainer");
  if (!container) return;

  const research = window.PORTFOLIO_DATA.researchWorks || [];
  const projects = window.PORTFOLIO_DATA.projects || [];
  const media = window.PORTFOLIO_DATA.creativeWorks || [];

  let cardsHtml = [];

  // 1. Research Papers
  if (filterKey === "all" || filterKey === "research") {
    research.forEach(item => {
      cardsHtml.push(`
        <article class="project-card">
          <div class="project-card-header">
            <span class="project-tag">Research Paper</span>
            <span class="project-status">${item.status}</span>
          </div>
          <div class="project-card-body">
            <h3 class="project-title">${item.title}</h3>
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.75rem;">
              ${item.genre}
            </div>
            <p class="project-desc">${item.description}</p>
            <div class="project-tech-stack">
              <span class="tech-tag">Econometrics</span>
              <span class="tech-tag">Policy Research</span>
              <span class="tech-tag">Univ of Dhaka</span>
            </div>
            <div class="project-card-actions">
              <a href="${item.link}" target="_blank" rel="noopener" class="btn-card-action btn-accent" title="Read paper on ResearchGate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>ResearchGate</span>
              </a>
              <button onclick="openBibtexModal('${item.id}')" class="btn-card-action" title="View & Copy BibTeX citation">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                <span>BibTeX</span>
              </button>
            </div>
          </div>
        </article>
      `);
    });
  }

  // 2. Software Applications
  if (filterKey === "all" || filterKey === "projects") {
    projects.forEach(item => {
      cardsHtml.push(`
        <article class="project-card">
          <div class="project-card-header">
            <span class="project-tag">Software / App</span>
            <span class="project-status">Open Source</span>
          </div>
          <div class="project-card-body">
            <h3 class="project-title">${item.name}</h3>
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-electric); margin-bottom: 0.75rem;">
              ${item.tagline}
            </div>
            <p class="project-desc">${item.description}</p>
            <div class="project-tech-stack">
              ${item.stack.map(st => `<span class="tech-tag">${st}</span>`).join("")}
            </div>
            <div class="project-card-actions">
              <a href="${item.githubUrl}" target="_blank" rel="noopener" class="btn-card-action btn-accent" style="width: 100%;" title="View Source on GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </article>
      `);
    });
  }

  // 3. Creative & Media Works
  if (filterKey === "all" || filterKey === "media") {
    media.forEach(item => {
      cardsHtml.push(`
        <article class="project-card">
          <div class="project-card-header">
            <span class="project-tag">Creative & Media</span>
            <span class="project-status">${item.year}</span>
          </div>
          <div class="project-card-body">
            <h3 class="project-title">${item.title}</h3>
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 0.75rem;">
              ${item.role}
            </div>
            <p class="project-desc">Produced visual storytelling, motion direction, and cinematic video editing for major university and institutional summit campaigns.</p>
            <div class="project-tech-stack">
              <span class="tech-tag">Video Editing</span>
              <span class="tech-tag">Cinematography</span>
              <span class="tech-tag">Visual Storytelling</span>
            </div>
            <div class="project-card-actions">
              <a href="https://linkedin.com/in/ashikul-islam-khan" target="_blank" rel="noopener" class="btn-card-action" style="width: 100%;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"></path><rect x="3" y="6" width="12" height="12" rx="2"></rect></svg>
                <span>Campaign Portfolio</span>
              </a>
            </div>
          </div>
        </article>
      `);
    });
  }

  container.innerHTML = cardsHtml.join("");
}

// -------------------------------------------------------------------------
// 7. BibTeX Modal Controller
// -------------------------------------------------------------------------
function openBibtexModal(paperId) {
  const papers = window.PORTFOLIO_DATA.researchWorks || [];
  const paper = papers.find(p => p.id === paperId);
  if (!paper) return;

  currentBibtexContent = paper.bibtex;

  const modal = document.getElementById("bibtexModal");
  const title = document.getElementById("bibtexModalTitle");
  const codeBlock = document.getElementById("bibtexCodeBlock");

  if (title) title.textContent = `BibTeX: ${paper.title}`;
  if (codeBlock) codeBlock.textContent = paper.bibtex;
  if (modal) modal.classList.add("active");
}

function closeBibtexModal(event) {
  const modal = document.getElementById("bibtexModal");
  if (modal) modal.classList.remove("active");
}

function copyBibtexFromModal() {
  if (!currentBibtexContent) return;

  navigator.clipboard.writeText(currentBibtexContent).then(() => {
    showToast("BibTeX citation copied to clipboard!");
    closeBibtexModal();
  }).catch(() => {
    showToast("Copied citation.");
    closeBibtexModal();
  });
}

// -------------------------------------------------------------------------
// 8. Contact Form Handler
// -------------------------------------------------------------------------
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("senderName")?.value || "";
  const email = document.getElementById("senderEmail")?.value || "";
  const subject = document.getElementById("msgSubject")?.value || "";
  const content = document.getElementById("msgContent")?.value || "";

  // Prepare mailto link as fallback
  const mailtoUrl = `mailto:inboxashikulislam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + content)}`;
  
  // Show toast notification
  showToast("Preparing your message dispatch...");
  
  // Open mail client
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 400);

  // Reset form
  const form = document.getElementById("contactForm");
  if (form) form.reset();
}

// -------------------------------------------------------------------------
// 9. Toast Notification System
// -------------------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById("liquidToast");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// -------------------------------------------------------------------------
// 10. Nav Scroll Observer (Active Section Highlight)
// -------------------------------------------------------------------------
function setupNavScrollObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}
