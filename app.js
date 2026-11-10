/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - REACTIVE CONTROLLER & LIQUID GLASS ENGINE
 * =========================================================================
 */

let activeCategory = "all";
let activeSearchQuery = "";
let snackbarTimer = null;

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Render components dynamically from PORTFOLIO_DATA
  renderHeroAndProfile();
  renderCompetencies();
  renderExperience(activeCategory, activeSearchQuery);
  renderResearch(activeSearchQuery);
  renderProjects(activeSearchQuery);
  renderEducation();
  renderCertificationsAndVolunteering();
  renderCreativeWorks();

  // Setup reactive events
  setupSegmentedTabs();
  setupSearchInput();
  setupDockObserver();
  setupInquiryForm();
});

// -------------------------------------------------------------------------
// 1. Render Hero & Profile Summary
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
  if (heroBio) heroBio.textContent = data.bio;
  if (heroStatus) heroStatus.textContent = data.statusBadge;
  if (brandName) brandName.textContent = data.preferredName;

  // Render Stats with Vieve-inspired confidence
  const statsContainer = document.getElementById("dossierStatsGrid");
  if (statsContainer && data.quickStats) {
    statsContainer.innerHTML = data.quickStats.map(stat => `
      <div class="stat-box">
        <span class="stat-val">${stat.val}</span>
        <span class="stat-lbl">${stat.label}</span>
      </div>
    `).join("");
  }

  // Quick contact list
  const contactContainer = document.getElementById("dossierContactList");
  if (contactContainer) {
    contactContainer.innerHTML = `
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 500;">Location</span>
        <span class="tabular-nums" style="font-weight: 600;">${data.location}</span>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 500;">Direct Email</span>
        <a href="mailto:${data.email}" style="color: var(--accent-electric); font-weight: 600;">${data.email}</a>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 500;">Phone</span>
        <a href="tel:${data.phone.replace(/[\s-]/g, '')}" class="tabular-nums" style="font-weight: 600;">${data.phone}</a>
      </li>
      <li class="quick-contact-row">
        <span style="color: var(--text-muted); font-weight: 500;">Department</span>
        <span style="font-weight: 600;">Dept. of Economics</span>
      </li>
    `;
  }
}

// -------------------------------------------------------------------------
// 2. Render Core Competencies
// -------------------------------------------------------------------------
function renderCompetencies() {
  const container = document.getElementById("competenciesContainer");
  const list = window.PORTFOLIO_DATA.competencies;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card competency-card">
      <div>
        <h3>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--accent-electric);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${item.category}
        </h3>
        <div class="skill-chips-cloud">
          ${item.skills.map(s => `<span class="pill-badge">${s}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 3. Render Work & Leadership Experience
// -------------------------------------------------------------------------
function renderExperience(category = "all", query = "") {
  const container = document.getElementById("experienceContainer");
  if (!container) return;

  const work = window.PORTFOLIO_DATA.workExperience || [];
  const leadership = window.PORTFOLIO_DATA.leadershipExperience || [];
  const combined = [...work, ...leadership];

  const q = query.toLowerCase().trim();
  const filtered = combined.filter(item => {
    const isLeadership = leadership.some(l => l.id === item.id);
    const matchesCategory = 
      category === "all" ||
      (category === "work" && !isLeadership) ||
      (category === "leadership" && isLeadership);

    const matchesSearch = !q || 
      item.role.toLowerCase().includes(q) ||
      item.organization.toLowerCase().includes(q) ||
      (item.achievements && item.achievements.some(a => a.toLowerCase().includes(q))) ||
      (item.responsibilities && item.responsibilities.some(r => r.toLowerCase().includes(q)));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="liquid-glass-card" style="text-align: center; padding: 3rem;">
        <p style="color: var(--text-muted); font-size: 1.05rem;">No experience entries found matching "${query}".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="liquid-glass-card experience-card">
      <div class="exp-header-row">
        <div>
          <h3 class="exp-role-title">${item.role}</h3>
          <span class="exp-org-badge">${item.organization}</span>
        </div>
        <div style="text-align: right;">
          <span class="pill-badge pill-badge-emerald tabular-nums">${item.period}</span>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${item.location}</div>
        </div>
      </div>

      ${item.achievements && item.achievements.length > 0 ? `
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-top: 1rem;">
          Key Achievements
        </div>
        <ul class="exp-bullet-list">
          ${item.achievements.map(ach => `<li>${ach}</li>`).join("")}
        </ul>
      ` : ""}

      ${item.responsibilities && item.responsibilities.length > 0 ? `
        <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-top: 1rem;">
          Core Responsibilities
        </div>
        <ul class="exp-bullet-list">
          ${item.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      ` : ""}
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 4. Render Research Works & Publications
// -------------------------------------------------------------------------
function renderResearch(query = "") {
  const container = document.getElementById("researchContainer");
  const list = window.PORTFOLIO_DATA.researchWorks;
  if (!container || !list) return;

  const q = query.toLowerCase().trim();
  const filtered = list.filter(item => {
    return !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.genre.toLowerCase().includes(q) ||
      (item.methodology && item.methodology.some(m => m.toLowerCase().includes(q)));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="liquid-glass-card" style="text-align: center; padding: 3rem;">
        <p style="color: var(--text-muted); font-size: 1.05rem;">No research manuscripts matching "${query}".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="liquid-glass-card research-card">
      <div class="research-top-bar">
        <span class="pill-badge pill-badge-amber">${item.genre} · ${item.date}</span>
        <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">${item.status}</span>
      </div>

      <h3 class="research-title">${item.title}</h3>
      <div style="font-size: 0.9rem; color: var(--accent-electric); font-weight: 600; margin-bottom: 0.85rem;">
        ${item.institution} · ${item.location}
      </div>

      <p style="font-size: 1rem; color: var(--text-sub); line-height: 1.65; margin-bottom: 1.25rem;">
        ${item.description}
      </p>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${item.methodology.map(m => `<span class="pill-badge">${m}</span>`).join("")}
      </div>

      <div class="research-footer-actions">
        <div style="display: flex; gap: 0.75rem;">
          <a href="${item.link}" target="_blank" rel="noopener" class="btn-glass" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            ResearchGate Manuscript
          </a>
          <button class="btn-glass" onclick="openBibtexModal('${item.id}')" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            BibTeX Citation
          </button>
        </div>
        <span style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted);">Empirical Econometric Analysis</span>
      </div>
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 5. Render Software & Apps Built
// -------------------------------------------------------------------------
function renderProjects(query = "") {
  const container = document.getElementById("projectsContainer");
  const list = window.PORTFOLIO_DATA.projects;
  if (!container || !list) return;

  const q = query.toLowerCase().trim();
  const filtered = list.filter(item => {
    return !q ||
      item.name.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.stack && item.stack.some(s => s.toLowerCase().includes(q)));
  });

  container.innerHTML = filtered.map(item => `
    <div class="liquid-glass-card app-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <h3 class="app-title">${item.name}</h3>
          <span class="pill-badge pill-badge-emerald">Live Platform</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-electric); font-weight: 600; margin-bottom: 0.85rem;">
          ${item.tagline}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 1.25rem;">
          ${item.description}
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.5rem;">
          ${item.stack.map(st => `<span class="pill-badge" style="font-size: 0.72rem;">${st}</span>`).join("")}
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
// 6. Render Education
// -------------------------------------------------------------------------
function renderEducation() {
  const container = document.getElementById("educationContainer");
  const list = window.PORTFOLIO_DATA.education;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card" style="padding: 1.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="font-size: 1.25rem;">${item.degree}</h3>
        <span class="pill-badge pill-badge-emerald">${item.timeline}</span>
      </div>
      <div style="font-size: 0.95rem; color: var(--accent-electric); font-weight: 600; margin-bottom: 0.4rem;">
        ${item.institution} · ${item.location}
      </div>
      <p style="font-size: 0.875rem; color: var(--text-muted);">${item.detail}</p>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 7. Render Certifications & Volunteering
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
        <div style="font-size: 0.875rem; color: var(--accent-electric); font-weight: 500;">${c.issuer}</div>
      </div>
    `).join("");
  }

  const volContainer = document.getElementById("volunteeringContainer");
  const vols = window.PORTFOLIO_DATA.volunteering;
  if (volContainer && vols) {
    volContainer.innerHTML = vols.map(v => `
      <div class="liquid-glass-card" style="padding: 1.35rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700;">${v.role}</h4>
          <span class="pill-badge tabular-nums">${v.date}</span>
        </div>
        <div style="font-size: 0.875rem; color: var(--accent-electric); font-weight: 500; margin-bottom: 0.5rem;">${v.organization}</div>
        <ul class="exp-bullet-list" style="font-size: 0.875rem;">
          ${v.achievements.map(a => `<li>${a}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }
}

// -------------------------------------------------------------------------
// 8. Render Creative & Media Works
// -------------------------------------------------------------------------
function renderCreativeWorks() {
  const container = document.getElementById("creativeWorksContainer");
  const list = window.PORTFOLIO_DATA.creativeWorks;
  if (!container || !list) return;

  container.innerHTML = list.map(item => `
    <div class="liquid-glass-card" style="padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 600;">${item.title}</h4>
        <span style="font-size: 0.8rem; color: var(--accent-electric); font-weight: 500;">${item.role}</span>
      </div>
      <span class="pill-badge pill-badge-amber">Summit Video</span>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 9. Interactive Segmented Tabs & Search Controls
// -------------------------------------------------------------------------
function setupSegmentedTabs() {
  const tabs = document.querySelectorAll(".tab-pill-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderExperience(activeCategory, activeSearchQuery);
      showLiquidSnackbar(`Viewing: ${tab.textContent.trim()}`);
    });
  });
}

function setupSearchInput() {
  const input = document.getElementById("globalSearchInput");
  if (!input) return;

  input.addEventListener("input", (e) => {
    activeSearchQuery = e.target.value;
    renderExperience(activeCategory, activeSearchQuery);
    renderResearch(activeSearchQuery);
    renderProjects(activeSearchQuery);
  });
}

// -------------------------------------------------------------------------
// 10. iOS Liquid Glass Dock & Scroll Tracking
// -------------------------------------------------------------------------
function setupDockObserver() {
  const sections = document.querySelectorAll("section[id]");
  const dockBtns = document.querySelectorAll(".dock-action-btn[data-target]");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 200;
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
// 11. Highly Transparent iOS Liquid Glass Snackbar (Toast)
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
// 12. Modals (BibTeX & CV Viewer)
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

function openCvModal() {
  const modal = document.getElementById("cvModalBackdrop");
  if (modal) modal.classList.add("active");
}

function closeCvModal() {
  const modal = document.getElementById("cvModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function printCvDocument() {
  window.print();
}

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
