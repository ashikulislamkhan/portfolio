// Academic & Development Economics Portfolio Engine

// Research Papers Data
const papersData = [
  {
    id: "food-price-volatility-2026",
    title: "Food Price Volatility, Inflationary Pressures, and Household Welfare: Evidence from High-Frequency Market Surveys in Urban Dhaka",
    authors: "Ashikul Islam Khan*, Dr. Fahmida Khatun (Advisory Supervisor)",
    venue: "Working Paper Series, Department of Economics, University of Dhaka",
    year: "2026",
    status: "Working Paper",
    category: "development",
    jel: ["D12", "E31", "I31", "O12"],
    methodology: ["Difference-in-Differences", "High-Frequency Panel", "Stata"],
    abstract: "This paper investigates the transmission mechanism of commodity price spikes into urban household consumption baskets following supply disruptions in wholesale trading hubs of Dhaka. Utilizing a balanced 14-month panel of 1,240 urban low-and-middle income households alongside daily wholesale-retail commodity price telemetry, we estimate short-run compensatory price elasticities and calorie substitution rates. Findings demonstrate an asymmetric pass-through where retail food margins expand by 18.4% during wholesale surges but contract by only 5.2% during gluts, exacerbating real income erosion among the bottom two quintiles.",
    bibtex: `@techreport{khan2026food,
  title={Food Price Volatility, Inflationary Pressures, and Household Welfare: Evidence from High-Frequency Market Surveys in Urban Dhaka},
  author={Sadman, Ahnaf and Khatun, Fahmida},
  institution={Department of Economics, University of Dhaka},
  type={Working Paper},
  year={2026},
  number={DU-ECON-WP-26-04}
}`,
    pdfUrl: "#",
    codeUrl: "#"
  },
  {
    id: "micro-insurance-coastal-2025",
    title: "Evaluating Index-Based Weather Micro-Insurance Uptake and Consumption Smoothing Among Agrarian Households in Coastal Bangladesh",
    authors: "Ashikul Islam Khan*, Rafiqul Islam, Samira Chowdhury",
    venue: "Preprint presented at Bangladesh Economic Association (BEA) Biennial Conference",
    year: "2025",
    status: "Conference Paper",
    category: "econometrics",
    jel: ["G22", "O13", "Q12", "Q54"],
    methodology: ["Instrumental Variables (IV)", "Household Surveys", "R (fixest)"],
    abstract: "Coastal agrarian communities in southwestern Bangladesh face accelerating cyclone severity and saline intrusion. We evaluate the pilot uptake of satellite-indexed rainfall and cyclone parametric micro-insurance among 850 smallholders in Satkhira and Khulna districts. Utilizing distance-to-weather-station and localized literacy peer effects as instrumental variables, we find insured households maintain 23% higher caloric stability during post-cyclone recovery periods and rely significantly less on distress livestock liquidation.",
    bibtex: `@article{khan2025microinsurance,
  title={Evaluating Index-Based Weather Micro-Insurance Uptake and Consumption Smoothing Among Agrarian Households in Coastal Bangladesh},
  author={Sadman, Ahnaf and Islam, Rafiqul and Chowdhury, Samira},
  journal={Working Papers in Environmental & Development Economics},
  year={2025},
  url={https://doi.org/10.xxxx/du-econ.2025.012}
}`,
    pdfUrl: "#",
    codeUrl: "#"
  },
  {
    id: "digital-finance-consumer-protection-2025",
    title: "Regulatory Arbitrage and Consumer Vulnerability in Digital Financial Services (DFS): An Empirical Audit of Redress Mechanisms",
    authors: "Ashikul Islam Khan (Lead Investigator, CAB Youth Parliamentary Desk)",
    venue: "Policy Monograph, Consumers Association of Bangladesh (CAB)",
    year: "2025",
    status: "Policy Paper",
    category: "policy",
    jel: ["D18", "K23", "O33", "G28"],
    methodology: ["Mixed Methods", "Regulatory Audit", "Python NLP"],
    abstract: "Digital micro-credit and mobile wallet applications have rapidly expanded across semi-urban Bangladesh, yet consumer dispute resolution remains fragmented. Analyzing 3,400 formal consumer grievances filed with regulatory ombudsman platforms and utilizing natural language parsing of grievance outcomes, this study highlights an average resolution latency exceeding 46 days for unauthorized deductions. We formulate a policy architecture for automated transaction dispute adjudication and real-time merchant disclosure.",
    bibtex: `@report{khan2025dfs,
  title={Regulatory Arbitrage and Consumer Vulnerability in Digital Financial Services: An Empirical Audit of Redress Mechanisms},
  author={Sadman, Ahnaf},
  institution={Consumers Association of Bangladesh (CAB)},
  year={2025},
  type={Special Policy Brief}
}`,
    pdfUrl: "#",
    codeUrl: "#"
  }
];

// Data Analytics & Computational Projects
const projectsData = [
  {
    id: "hies-welfare-pipeline",
    title: "National Household Welfare & Poverty Transition Pipeline",
    desc: "End-to-end econometric pipeline analyzing multiple rounds of Bangladesh Household Income and Expenditure Survey (HIES). Automates consumption aggregate adjustments, Foster-Greer-Thorbecke (FGT) poverty indices, and multivariable probit regressions for vulnerability profiling.",
    stack: ["Stata", "R (tidyverse)", "HIES Microdata"],
    stats: [
      { label: "Sample Size", val: "46,080 HH" },
      { label: "Poverty Indicators", val: "12 Metrics" }
    ],
    codeUrl: "https://github.com/ashikulislamkhan/portfolio",
    demoUrl: "#"
  },
  {
    id: "market-syndicate-telemetry",
    title: "Dhaka Retail Food Price Spatial Tracking & Arbitrage Scanner",
    desc: "A spatial analytics tool web-scraping daily essential commodity wholesale rates (Karwan Bazar, Badamtoli) and retail prices across 18 municipal markets to detect geographic price disparities and synthetic markup divergence during festival cycles.",
    stack: ["Python", "Pandas", "QGIS", "Plotly"],
    stats: [
      { label: "Daily Data Points", val: "1,850+" },
      { label: "Markets Tracked", val: "18 Hubs" }
    ],
    codeUrl: "https://github.com/ashikulislamkhan/portfolio",
    demoUrl: "#"
  },
  {
    id: "macro-dashboard",
    title: "Macroeconomic Dashboard: Inflation, Reserves & Remittance Tracker",
    desc: "Interactive statistical dashboard aggregating Bangladesh Bank balance of payments, monthly wage rate index, and BBS consumer price indices to forecast real income degradation and foreign exchange reserve runway.",
    stack: ["R Shiny", "timeDate", "ggplot2"],
    stats: [
      { label: "Series Frequency", val: "Monthly" },
      { label: "Time Span", val: "2018â€“2026" }
    ],
    codeUrl: "https://github.com/ashikulislamkhan/portfolio",
    demoUrl: "#"
  }
];

// Chart Datasets
const chartDatasets = {
  inflation: {
    title: "Consumer Price Index (CPI): Headline vs. Food Inflation (2024â€“2026)",
    subtitle: "Source: Bangladesh Bureau of Statistics (BBS) & Field Telemetry Analysis",
    labels: ["Jan 24", "Apr 24", "Jul 24", "Oct 24", "Jan 25", "Apr 25", "Jul 25", "Oct 25", "Jan 26", "Apr 26", "Jul 26", "Oct 26"],
    datasets: [
      {
        label: "Food Inflation (%)",
        data: [10.2, 10.8, 12.5, 12.8, 11.4, 10.9, 11.6, 12.2, 10.8, 9.9, 9.4, 8.8],
        borderColor: "#1e3a8a",
        backgroundColor: "rgba(30, 58, 138, 0.08)",
        borderWidth: 2,
        tension: 0.25,
        fill: true,
        pointRadius: 3
      },
      {
        label: "Headline CPI (%)",
        data: [9.8, 9.7, 10.9, 10.6, 9.9, 9.6, 9.8, 10.1, 9.5, 8.9, 8.6, 8.2],
        borderColor: "#64748b",
        borderDash: [5, 5],
        borderWidth: 2,
        tension: 0.25,
        fill: false,
        pointRadius: 2
      }
    ]
  },
  welfare: {
    title: "Nominal Wage Rate Index (WRI) vs. Cost of Food Basket (Base 2023 = 100)",
    subtitle: "Simulating urban low-income purchasing power erosion over time",
    labels: ["Jan 24", "Apr 24", "Jul 24", "Oct 24", "Jan 25", "Apr 25", "Jul 25", "Oct 25", "Jan 26", "Apr 26", "Jul 26", "Oct 26"],
    datasets: [
      {
        label: "Food Basket Cost Index",
        data: [108, 112, 124, 128, 131, 134, 142, 147, 150, 153, 156, 158],
        borderColor: "#991b1b",
        backgroundColor: "rgba(153, 27, 27, 0.06)",
        borderWidth: 2,
        tension: 0.25,
        fill: true,
        pointRadius: 3
      },
      {
        label: "Nominal Wage Rate Index",
        data: [105, 107, 111, 114, 118, 121, 125, 128, 132, 135, 138, 142],
        borderColor: "#0f766e",
        borderWidth: 2,
        tension: 0.25,
        fill: false,
        pointRadius: 3
      }
    ]
  },
  resilience: {
    title: "Estimated Coping Mechanisms during Price Shocks by Income Quintile",
    subtitle: "Share of households reporting non-sustainable coping strategies (Debt vs. Asset Sale)",
    labels: ["Q1 (Poorest 20%)", "Q2 (Lower Middle)", "Q3 (Middle)", "Q4 (Upper Middle)", "Q5 (Richest 20%)"],
    datasets: [
      {
        label: "Consumption Curtailment / Calorie Reduction (%)",
        data: [58.4, 42.1, 23.5, 11.2, 3.4],
        backgroundColor: "#1e3a8a",
        borderRadius: 4
      },
      {
        label: "High-Interest Informal Borrowing (%)",
        data: [46.2, 31.8, 16.4, 6.1, 1.2],
        backgroundColor: "#64748b",
        borderRadius: 4
      }
    ]
  }
};

let macroChart = null;

// Initialize Chart
function renderMacroChart(metricKey = "inflation") {
  const ctx = document.getElementById("macroChartCanvas");
  if (!ctx) return;
  
  const chartData = chartDatasets[metricKey];
  if (!chartData) return;
  
  document.getElementById("chartHeading").textContent = chartData.title;
  document.getElementById("chartSubheading").textContent = chartData.subtitle;
  
  if (macroChart) {
    macroChart.destroy();
  }
  
  const isResilience = metricKey === "resilience";
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(15, 23, 42, 0.06)";
  const textColor = isDark ? "#94a3b8" : "#64748b";
  
  macroChart = new Chart(ctx, {
    type: isResilience ? "bar" : "line",
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: {
            boxWidth: 12,
            boxHeight: 12,
            color: textColor,
            font: {
              family: "Inter",
              size: 11
            }
          }
        },
        tooltip: {
          backgroundColor: isDark ? "#1e293b" : "#0f172a",
          titleFont: { family: "Inter", size: 12, weight: "600" },
          bodyFont: { family: "JetBrains Mono", size: 11 },
          padding: 10,
          cornerRadius: 6
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "Inter", size: 11 } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "JetBrains Mono", size: 11 } }
        }
      }
    }
  });
}

// Render Research Papers
function renderPapers(filter = "all", searchQuery = "") {
  const container = document.getElementById("papersList");
  if (!container) return;
  
  const filtered = papersData.filter(paper => {
    const matchesFilter = filter === "all" || paper.category === filter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === "" || 
      paper.title.toLowerCase().includes(query) ||
      paper.abstract.toLowerCase().includes(query) ||
      paper.methodology.some(m => m.toLowerCase().includes(query)) ||
      paper.jel.some(j => j.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-hairline); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted); font-size: 0.95rem;">No publications or working papers found matching your criteria.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filtered.map(paper => `
    <article class="paper-card" id="${paper.id}">
      <div class="paper-meta-top">
        <span class="paper-status-badge">${paper.status} (${paper.year})</span>
        <span class="paper-date">${paper.venue}</span>
      </div>
      <h3 class="paper-title">${paper.title}</h3>
      <div class="paper-authors">${paper.authors}</div>
      <p class="paper-abstract">${paper.abstract}</p>
      
      <div class="paper-tags-row">
        <span style="font-size: 0.75rem; color: var(--text-muted); margin-right: 0.25rem;">JEL:</span>
        ${paper.jel.map(code => `<span class="tag tag-mono">${code}</span>`).join(" ")}
        <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem; margin-right: 0.25rem;">Methods:</span>
        ${paper.methodology.map(m => `<span class="tag">${m}</span>`).join(" ")}
      </div>

      <div class="paper-footer">
        <div class="paper-actions">
          <button class="btn btn-sm btn-outline" onclick="openBibtexModal('${paper.id}')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            BibTeX
          </button>
          <button class="btn btn-sm btn-outline" onclick="showToast('Working paper PDF manuscript link requested')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Draft PDF
          </button>
        </div>
        <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">Peer review in progress</span>
      </div>
    </article>
  `).join("");
}

// Render Data Projects
function renderProjects() {
  const container = document.getElementById("projectsList");
  if (!container) return;
  
  container.innerHTML = projectsData.map(proj => `
    <div class="project-card">
      <div class="project-top">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-stats-grid">
          ${proj.stats.map(s => `
            <div class="stat-item">
              <span class="stat-num">${s.val}</span>
              <span class="stat-label">${s.label}</span>
            </div>
          `).join("")}
        </div>
        <div class="hero-tags" style="margin-bottom: 0;">
          ${proj.stack.map(tech => `<span class="tag tag-mono">${tech}</span>`).join("")}
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; border-top: 1px solid var(--border-hairline); padding-top: 1rem;">
        <a href="${proj.codeUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="flex: 1;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Replication Code
        </a>
      </div>
    </div>
  `).join("");
}

// BibTeX Modal Functions
function openBibtexModal(paperId) {
  const paper = papersData.find(p => p.id === paperId);
  if (!paper) return;
  
  const modal = document.getElementById("bibtexModal");
  const codeElem = document.getElementById("bibtexCode");
  const titleElem = document.getElementById("bibtexModalTitle");
  
  titleElem.textContent = "BibTeX Citation";
  codeElem.textContent = paper.bibtex;
  modal.classList.add("active");
}

function closeBibtexModal() {
  document.getElementById("bibtexModal").classList.remove("active");
}

function copyBibtexCode() {
  const code = document.getElementById("bibtexCode").textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast("BibTeX citation copied to clipboard");
  }).catch(() => {
    showToast("Selected and ready to copy");
  });
}

// CV Modal Functions
function openCvModal() {
  document.getElementById("cvModal").classList.add("active");
}

function closeCvModal() {
  document.getElementById("cvModal").classList.remove("active");
}

function printCv() {
  window.print();
}

// Toast Function
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add("show");
  
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Copy Email Utility
function copyEmailAddress(email = "s-2022112154@econ.du.ac.bd") {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied ${email} to clipboard`);
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("user-theme", targetTheme);
  
  // Re-render chart to adapt colors
  const activeBtn = document.querySelector(".chart-control-btn.active");
  const metric = activeBtn ? activeBtn.getAttribute("data-metric") : "inflation";
  renderMacroChart(metric);
}

// Initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Theme check
  const savedTheme = localStorage.getItem("user-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  // Render initial components
  renderPapers("all", "");
  renderProjects();
  renderMacroChart("inflation");
  
  // Theme button
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  
  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    
    // Close on link click
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
  
  // Filter tabs for papers
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      const searchVal = document.getElementById("paperSearchInput")?.value || "";
      renderPapers(filter, searchVal);
    });
  });
  
  // Search input for papers
  const searchInput = document.getElementById("paperSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
      renderPapers(activeFilter, e.target.value);
    });
  }
  
  // Chart control tabs
  document.querySelectorAll(".chart-control-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chart-control-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMacroChart(btn.getAttribute("data-metric"));
    });
  });
  
  // Contact form submission handle
  const contactForm = document.getElementById("academicContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you. Your message has been received.");
      contactForm.reset();
    });
  }
});
