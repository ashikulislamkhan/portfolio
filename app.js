/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - REACTIVE CONTROLLER & LIQUID GLASS ENGINE
 * =========================================================================
 */

let snackbarTimer = null;

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme preference
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Render components dynamically from PORTFOLIO_DATA
  renderHeroAndProfile();
  renderCompetencies();
  renderWorkplaces();
  renderLeadership();
  renderResearch();
  renderProjects();
  renderCreativeWorks();
  renderEducation();
  renderCertificationsAndVolunteering();

  // Setup Dock and Form Observers
  setupDockObserver();
  setupInquiryForm();
});

// -------------------------------------------------------------------------
// 1. Theme Toggle (Top Right Switcher Icon)
// -------------------------------------------------------------------------
function toggleThemeMode() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
  updateThemeIcon(next);
  showLiquidSnackbar(`Switched to ${next === "dark" ? "Dusk (Dark)" : "Daylight (Light)"} mode`);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  if (theme === "dark") {
    // Show Moon / Dusk icon
    btn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    // Show Sun / Daylight icon
    btn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

// -------------------------------------------------------------------------
// 2. Render Hero & Profile Summary
// -------------------------------------------------------------------------
function renderHeroAndProfile() {
  const data = window.PORTFOLIO_DATA.profile;
  if (!data) return;

  const heroName = document.getElementById("heroFullName");
  const heroTagline = document.getElementById("heroTagline");
  const heroBio = document.getElementById("heroBio");
  const heroStatus = document.getElementById("heroStatusText");
  const brandName = document.getElementById("brandNameText");

  if (heroName) heroName.textContent = data.fullName;
  if (heroTagline) heroTagline.textContent = data.headline;
  if (heroBio) heroBio.textContent = data.summary;
  if (heroStatus) heroStatus.textContent = data.statusBadge;
  if (brandName) brandName.textContent = data.fullName;

  // Stats Grid
  const statsContainer = document.getElementById("dossierStatsGrid");
  if (statsContainer && data.quickStats) {
    statsContainer.innerHTML = data.quickStats.map(stat => `
      <div class="stat-counter-box">
        <span class="stat-val-text">${stat.val}</span>
        <span class="stat-lbl-text">${stat.label}</span>
      </div>
    `).join("");
  }

  // Quick contact list
  const contactContainer = document.getElementById("dossierContactList");
  if (contactContainer) {
    contactContainer.innerHTML = `
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 600;">Location</span>
        <span class="tabular-nums" style="font-weight: 700;">${data.location}</span>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 600;">Direct Email</span>
        <a href="mailto:${data.email}" style="color: var(--accent-electric); font-weight: 700;">${data.email}</a>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 600;">Phone</span>
        <a href="tel:${data.phone.replace(/[\s-]/g, '')}" class="tabular-nums" style="font-weight: 700;">${data.phone}</a>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 600;">Department</span>
        <span style="font-weight: 700;">Univ of Dhaka</span>
      </li>
    `;
  }
}

// -------------------------------------------------------------------------
// 3. Render Core Competencies
// -------------------------------------------------------------------------
function renderCompetencies() {
  const container = document.getElementById("competenciesContainer");
  const list = window.PORTFOLIO_DATA.competencies;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card" style="padding: 2rem;">
      <h3 style="font-size: 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.65rem;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-electric);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        ${item.category}
      </h3>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${item.skills.map(s => `<span class="pill-badge">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 4. Render Workplaces (Professional Experience)
// -------------------------------------------------------------------------
function renderWorkplaces() {
  const container = document.getElementById("workplacesContainer");
  const list = window.PORTFOLIO_DATA.workExperience;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <article class="liquid-glass-card workplace-card">
      <div class="workplace-top-row">
        <div>
          <h3 class="workplace-role-title">${item.role}</h3>
          <span class="workplace-org-badge">${item.organization}</span>
        </div>
        <div style="text-align: right;">
          <span class="pill-badge pill-badge-emerald tabular-nums">${item.period}</span>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${item.location}</div>
        </div>
      </div>

      ${item.achievements && item.achievements.length > 0 ? `
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-top: 1rem;">
          Achievements
        </div>
        <ul class="workplace-bullet-list">
          ${item.achievements.map(ach => `<li>${ach}</li>`).join("")}
        </ul>
      ` : ""}

      ${item.responsibilities && item.responsibilities.length > 0 ? `
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-top: 1rem;">
          Responsibilities
        </div>
        <ul class="workplace-bullet-list">
          ${item.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      ` : ""}
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 5. Render Leadership Experience
// -------------------------------------------------------------------------
function renderLeadership() {
  const container = document.getElementById("leadershipContainer");
  const list = window.PORTFOLIO_DATA.leadershipExperience;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <article class="liquid-glass-card workplace-card">
      <div class="workplace-top-row">
        <div>
          <h3 class="workplace-role-title">${item.role}</h3>
          <span class="workplace-org-badge">${item.organization}</span>
          ${item.tagline ? `<div style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.15rem;">${item.tagline}</div>` : ""}
        </div>
        <div style="text-align: right;">
          <span class="pill-badge tabular-nums">${item.period}</span>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${item.location}</div>
        </div>
      </div>

      <ul class="workplace-bullet-list">
        ${item.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 6. Render Research Works & Publications
// -------------------------------------------------------------------------
function renderResearch() {
  const container = document.getElementById("researchContainer");
  const list = window.PORTFOLIO_DATA.researchWorks;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <article class="liquid-glass-card research-card">
      <div class="research-meta-bar">
        <span class="pill-badge pill-badge-amber">${item.genre}</span>
        <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">${item.status}</span>
      </div>

      <h3 class="research-title-text">${item.title}</h3>
      <div style="font-size: 0.95rem; color: var(--accent-electric); font-weight: 700; margin-bottom: 0.85rem;">
        ${item.institution} · ${item.location}
      </div>

      <p style="font-size: 1.025rem; color: var(--text-sub); line-height: 1.65; margin-bottom: 1.25rem;">
        ${item.description}
      </p>

      <div class="research-action-footer">
        <div style="display: flex; gap: 0.75rem;">
          <a href="${item.link}" target="_blank" rel="noopener" class="btn-glass" style="padding: 0.5rem 1.15rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            ResearchGate
          </a>
          <button class="btn-glass" onclick="openBibtexModal('${item.id}')" style="padding: 0.5rem 1.15rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            BibTeX Citation
          </button>
        </div>
        <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">Empirical Econometric Analysis</span>
      </div>
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 7. Render Applications Built
// -------------------------------------------------------------------------
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  const list = window.PORTFOLIO_DATA.projects;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card app-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <h3 class="workplace-role-title">${item.name}</h3>
          <span class="pill-badge pill-badge-emerald">Live Platform</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-electric); font-weight: 700; margin-bottom: 0.85rem;">
          ${item.tagline}
        </div>
        <p style="font-size: 0.925rem; color: var(--text-sub); margin-bottom: 1.25rem;">
          ${item.description}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.5rem;">
          ${item.stack.map(st => `<span class="pill-badge" style="font-size: 0.75rem;">${st}</span>`).join("")}
        </div>
      </div>
      <div style="border-top: 1px solid var(--glass-border-subtle); padding-top: 1.25rem;">
        <a href="${item.githubUrl}" target="_blank" rel="noopener" class="btn-glass" style="width: 100%; font-size: 0.85rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Inspect GitHub Repository
        </a>
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 8. Render Creative Direction & Video Campaigns (Canva Style)
// -------------------------------------------------------------------------
function renderCreativeWorks() {
  const container = document.getElementById("creativeWorksContainer");
  const list = window.PORTFOLIO_DATA.creativeWorks;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <span class="pill-badge pill-badge-amber">Summit Video</span>
          <span class="tabular-nums" style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${item.year}</span>
        </div>
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">${item.title}</h4>
        <div style="font-size: 0.85rem; color: var(--accent-electric); font-weight: 600;">${item.role}</div>
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 9. Render Education
// -------------------------------------------------------------------------
function renderEducation() {
  const container = document.getElementById("educationContainer");
  const list = window.PORTFOLIO_DATA.education;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card" style="padding: 1.85rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="font-size: 1.25rem;">${item.degree}</h3>
        <span class="pill-badge pill-badge-emerald">${item.timeline}</span>
      </div>
      <div style="font-size: 1rem; color: var(--accent-electric); font-weight: 700; margin-bottom: 0.35rem;">
        ${item.institution}
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">${item.location}</div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 10. Render Certifications & Volunteering
// -------------------------------------------------------------------------
function renderCertificationsAndVolunteering() {
  const certContainer = document.getElementById("certificationsContainer");
  const certs = window.PORTFOLIO_DATA.certifications;
  if (certContainer && certs) {
    certContainer.innerHTML = certs.map(c => `
      <div class="liquid-glass-card" style="padding: 1.35rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700;">${c.title}</h4>
          <span class="pill-badge tabular-nums">${c.year}</span>
        </div>
        <div style="font-size: 0.875rem; color: var(--accent-electric); font-weight: 600;">${c.issuer}</div>
      </div>
    `).join("");
  }

  const volContainer = document.getElementById("volunteeringContainer");
  const vols = window.PORTFOLIO_DATA.volunteering;
  if (volContainer && vols) {
    volContainer.innerHTML = vols.map(v => `
      <div class="liquid-glass-card" style="padding: 1.35rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem;">${v.role}</h4>
        <div style="font-size: 0.875rem; color: var(--accent-electric); font-weight: 600; margin-bottom: 0.35rem;">${v.organization}</div>
        <p style="font-size: 0.875rem; color: var(--text-sub);">${v.description}</p>
      </div>
    `).join("");
  }
}

// -------------------------------------------------------------------------
// 11. Dock Observer (Active Section Highlighting)
// -------------------------------------------------------------------------
function setupDockObserver() {
  const sections = document.querySelectorAll("section[id]");
  const dockBtns = document.querySelectorAll(".dock-action-btn[data-target]");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 220;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    dockBtns.forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-target") === currentId) {
        btn.classList.add("active");
      }
    });
  }, { passive: true });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// -------------------------------------------------------------------------
// 12. Highly Transparent iOS Liquid Glass Snackbar
// -------------------------------------------------------------------------
function showLiquidSnackbar(message) {
  const bar = document.getElementById("liquidSnackbar");
  const text = document.getElementById("snackbarText");
  if (!bar || !text) return;

  text.textContent = message;
  bar.classList.add("show");

  if (snackbarTimer) clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() => {
    bar.classList.remove("show");
  }, 2600);
}

// -------------------------------------------------------------------------
// 13. BibTeX Modal
// -------------------------------------------------------------------------
function openBibtexModal(paperId) {
  const papers = window.PORTFOLIO_DATA.researchWorks || [];
  const paper = papers.find(p => p.id === paperId);
  if (!paper) return;

  const modal = document.getElementById("bibtexModalBackdrop");
  const codeBox = document.getElementById("bibtexCodeSnippet");
  const title = document.getElementById("bibtexPaperTitle");

  if (title) title.textContent = paper.title;
  if (codeBox) codeBox.textContent = paper.bibtex;
  if (modal) modal.classList.add("active");
}

function closeBibtexModal() {
  const modal = document.getElementById("bibtexModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function copyBibtexSnippet() {
  const codeBox = document.getElementById("bibtexCodeSnippet");
  if (!codeBox) return;

  navigator.clipboard.writeText(codeBox.textContent).then(() => {
    showLiquidSnackbar("BibTeX citation copied to clipboard!");
  }).catch(() => {
    showLiquidSnackbar("Ready to copy");
  });
}

// -------------------------------------------------------------------------
// 14. Email & Inquiry Form
// -------------------------------------------------------------------------
function copyDirectEmail() {
  const email = window.PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showLiquidSnackbar(`Copied ${email} to clipboard!`);
  }).catch(() => {
    showLiquidSnackbar(`Email: ${email}`);
  });
}

function setupInquiryForm() {
  const contactForm = document.getElementById("directInquiryForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showLiquidSnackbar("Inquiry transmitted. Ashikul will respond shortly.");
      contactForm.reset();
    });
  }
}
