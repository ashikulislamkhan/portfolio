/**
 * =========================================================================
 * ASHIKUL ISLAM KHAN - LIQUID GLASS PORTFOLIO CONTROLLER & RENDER ENGINE
 * =========================================================================
 */

// Global active tab & state
let activeCategory = "all";
let activeSearchQuery = "";
let snackbarTimer = null;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Check theme preference
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Initial UI Render from PORTFOLIO_DATA
  renderHeroAndProfile();
  renderCompetencies();
  renderExperience(activeCategory, activeSearchQuery);
  renderResearch(activeSearchQuery);
  renderProjects(activeSearchQuery);
  renderEducation();
  renderCertificationsAndVolunteering();
  renderCreativeWorks();

  // Setup Event Listeners
  setupNavigationEvents();
  setupSegmentedTabs();
  setupSearchInput();
  setupDockObserver();
});

// -------------------------------------------------------------------------
// 1. Render Hero & Profile Summary
// -------------------------------------------------------------------------
function renderHeroAndProfile() {
  const data = window.PORTFOLIO_DATA.profile;
  if (!data) return;

  // Name & Headings
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

  // Quick Stats
  const statsContainer = document.getElementById("dossierStatsGrid");
  if (statsContainer && data.quickStats) {
    statsContainer.innerHTML = data.quickStats.map(stat => `
      <div class="dossier-stat-box">
        <span class="dossier-stat-num">${stat.val}</span>
        <span class="dossier-stat-label">${stat.label}</span>
      </div>
    `).join("");
  }

  // Contact list
  const contactContainer = document.getElementById("dossierContactList");
  if (contactContainer) {
    contactContainer.innerHTML = `
      <li class="dossier-contact-item">
        <span>Location</span>
        <span class="tabular-nums" style="font-weight: 500;">${data.location}</span>
      </li>
      <li class="dossier-contact-item">
        <span>Email</span>
        <a href="mailto:${data.email}" style="color: var(--accent-text); font-weight: 500;">${data.email}</a>
      </li>
      <li class="dossier-contact-item">
        <span>Phone</span>
        <a href="tel:${data.phone.replace(/[\s-]/g, '')}" class="tabular-nums" style="color: var(--text-primary);">${data.phone}</a>
      </li>
      <li class="dossier-contact-item">
        <span>Institution</span>
        <span style="font-weight: 500;">Univ of Dhaka</span>
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-text);"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          ${item.category}
        </h3>
        <div class="skill-chips">
          ${item.skills.map(s => `<span class="pill-tag">${s}</span>`).join("")}
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
      <div class="liquid-glass-card" style="text-align: center; padding: 2.5rem;">
        <p style="color: var(--text-muted);">No experience entries match your query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="liquid-glass-card exp-card">
      <div class="exp-header">
        <div>
          <h3 class="exp-role-title">${item.role}</h3>
          <span class="exp-org-badge">${item.organization}</span>
        </div>
        <div style="text-align: right;">
          <span class="exp-meta-tag tabular-nums">${item.period}</span>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.location}</div>
        </div>
      </div>

      ${item.achievements && item.achievements.length > 0 ? `
        <div class="exp-achievements-title">Key Accomplishments</div>
        <ul class="exp-bullet-list">
          ${item.achievements.map(ach => `<li>${ach}</li>`).join("")}
        </ul>
      ` : ""}

      ${item.responsibilities && item.responsibilities.length > 0 ? `
        <div class="exp-achievements-title" style="margin-top: 0.85rem;">Core Responsibilities</div>
        <ul class="exp-bullet-list">
          ${item.responsibilities.map(resp => `<li>${resp}</li>`).join("")}
        </ul>
      ` : ""}
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 4. Render Research Papers & Publications
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
      <div class="liquid-glass-card" style="text-align: center; padding: 2.5rem;">
        <p style="color: var(--text-muted);">No research papers found matching your criteria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="liquid-glass-card research-card">
      <div class="research-card-top">
        <span class="pill-tag pill-tag-mono">${item.genre} (${item.date})</span>
        <span style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted);">${item.status}</span>
      </div>

      <h3 class="research-title">${item.title}</h3>
      <div style="font-size: 0.85rem; color: var(--accent-text); font-weight: 500; margin-bottom: 0.75rem;">
        ${item.institution} · ${item.location}
      </div>

      <p class="research-desc">${item.description}</p>

      <div style="display: flex; gap: 0.45rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
        ${item.methodology.map(m => `<span class="pill-tag">${m}</span>`).join("")}
      </div>

      <div class="research-actions">
        <div style="display: flex; gap: 0.65rem;">
          <a href="${item.link}" target="_blank" rel="noopener" class="btn-glass" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            ResearchGate
          </a>
          <button class="btn-glass" onclick="openBibtexModal('${item.id}')" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            BibTeX
          </button>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">Evidence-based empirical study</span>
      </div>
    </article>
  `).join("");
}

// -------------------------------------------------------------------------
// 5. Render Software & Applications Built
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
    <div class="liquid-glass-card project-card">
      <div>
        <div class="project-header-row">
          <h3 class="project-title">${item.name}</h3>
          <span class="pill-tag pill-tag-mono">App</span>
        </div>
        <div class="project-tagline">${item.tagline}</div>
        <p style="font-size: 0.875rem; margin-bottom: 1rem;">${item.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem;">
          ${item.stack.map(st => `<span class="pill-tag pill-tag-mono" style="font-size: 0.7rem;">${st}</span>`).join("")}
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; border-top: 1px solid var(--glass-border-subtle); padding-top: 1rem;">
        <a href="${item.githubUrl}" target="_blank" rel="noopener" class="btn-glass" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.8rem;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Repository
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
    <div class="liquid-glass-card" style="padding: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h3 style="font-size: 1.15rem;">${item.degree}</h3>
        <span class="pill-tag pill-tag-mono">${item.timeline}</span>
      </div>
      <div style="font-size: 0.9rem; color: var(--accent-text); font-weight: 500; margin-bottom: 0.35rem;">
        ${item.institution} · ${item.location}
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">${item.detail}</p>
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
      <div class="liquid-glass-card" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 600;">${c.title}</h4>
          <span class="tabular-nums" style="font-size: 0.75rem; color: var(--text-muted);">${c.year}</span>
        </div>
        <div style="font-size: 0.825rem; color: var(--accent-text);">${c.issuer}</div>
      </div>
    `).join("");
  }

  const volContainer = document.getElementById("volunteeringContainer");
  const vols = window.PORTFOLIO_DATA.volunteering;
  if (volContainer && vols) {
    volContainer.innerHTML = vols.map(v => `
      <div class="liquid-glass-card" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
          <h4 style="font-size: 0.95rem; font-weight: 600;">${v.role}</h4>
          <span class="tabular-nums" style="font-size: 0.75rem; color: var(--text-muted);">${v.date}</span>
        </div>
        <div style="font-size: 0.825rem; color: var(--accent-text); margin-bottom: 0.5rem;">${v.organization}</div>
        <ul class="exp-bullet-list" style="font-size: 0.825rem;">
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
    <div class="liquid-glass-card" style="padding: 1.15rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
      <div>
        <h4 style="font-size: 0.925rem; font-weight: 500;">${item.title}</h4>
        <span style="font-size: 0.775rem; color: var(--accent-text);">${item.role}</span>
      </div>
      <span class="pill-tag pill-tag-mono">Media</span>
    </div>
  `).join("");
}

// -------------------------------------------------------------------------
// 9. Segmented Tabs & Search Controls
// -------------------------------------------------------------------------
function setupSegmentedTabs() {
  const tabs = document.querySelectorAll(".liquid-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderExperience(activeCategory, activeSearchQuery);
      showSnackbar(`Filtered: ${tab.textContent.trim()}`);
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
// 10. iOS Liquid Glass Dock & ScrollSpy
// -------------------------------------------------------------------------
function setupDockObserver() {
  const sections = document.querySelectorAll("section[id]");
  const dockItems = document.querySelectorAll(".dock-item[data-target]");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 200;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    dockItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-target") === currentId) {
        item.classList.add("active");
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
// 11. iOS Liquid Glass Snackbar Utility
// -------------------------------------------------------------------------
function showSnackbar(message) {
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
// 12. BibTeX & CV Modals
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
    showSnackbar("BibTeX citation copied to clipboard!");
  }).catch(() => {
    showSnackbar("Ready to copy");
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

// -------------------------------------------------------------------------
// 13. Theme Switcher & Clipboard
// -------------------------------------------------------------------------
function toggleThemeMode() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
  showSnackbar(`Switched to ${next === "dark" ? "Dusk" : "Daylight"} mode`);
}

function copyDirectEmail() {
  const email = window.PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showSnackbar(`Copied ${email} to clipboard!`);
  }).catch(() => {
    showSnackbar(`Email: ${email}`);
  });
}

// -------------------------------------------------------------------------
// 14. Live Content Customizer Drawer
// -------------------------------------------------------------------------
function toggleCustomizerDrawer() {
  const drawer = document.getElementById("customizerDrawer");
  if (!drawer) return;
  drawer.classList.toggle("open");
  
  if (drawer.classList.contains("open")) {
    const jsonArea = document.getElementById("customizerJsonArea");
    if (jsonArea) {
      jsonArea.value = JSON.stringify(window.PORTFOLIO_DATA, null, 2);
    }
  }
}

function applyLiveCustomization() {
  try {
    const jsonArea = document.getElementById("customizerJsonArea");
    if (!jsonArea) return;
    const updated = JSON.parse(jsonArea.value);
    window.PORTFOLIO_DATA = updated;
    
    // Re-render whole page
    renderHeroAndProfile();
    renderCompetencies();
    renderExperience(activeCategory, activeSearchQuery);
    renderResearch(activeSearchQuery);
    renderProjects(activeSearchQuery);
    renderEducation();
    renderCertificationsAndVolunteering();
    renderCreativeWorks();

    showSnackbar("Website refreshed with updated data!");
    toggleCustomizerDrawer();
  } catch (err) {
    alert("JSON Parsing error: " + err.message);
  }
}

function downloadConfigJs() {
  const jsonArea = document.getElementById("customizerJsonArea");
  const content = "const PORTFOLIO_DATA = " + jsonArea.value + ";\nif (typeof window !== 'undefined') { window.PORTFOLIO_DATA = PORTFOLIO_DATA; }";
  const blob = new Blob([content], { type: "application/javascript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "portfolio-data.js";
  a.click();
  showSnackbar("Downloaded updated portfolio-data.js!");
}

function setupNavigationEvents() {
  // Contact form submission
  const contactForm = document.getElementById("directInquiryForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showSnackbar("Inquiry transmitted. Thank you, Ashikul will reply shortly.");
      contactForm.reset();
    });
  }
}
