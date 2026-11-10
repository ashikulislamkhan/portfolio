# Academic & Economics Researcher Portfolio

A clean, high-craft academic portfolio website designed specifically for an **Economics Undergraduate at University of Dhaka**, **Development Economics & Policy Researcher**, **Aspiring Data Analyst**, **Youth Parliamentarian at CAB**, and **Vice President at Economics Cultural Club**.

Built according to strict **Quiet Chrome & High Craft (Unslop)** design standards:
- **No Vibecoded Slop**: Zero purple/violet gradients, no blurry background blobs, no glowing shadows, and no decorative emojis.
- **Editorial Typography**: Rich scholarly typography (`Newsreader` serif for headings, `Inter` for crisp body text, and `JetBrains Mono` for tabular metrics, JEL classification codes, and BibTeX snippets).
- **One Bright Focus**: An interactive, publication-quality Chart.js data lab visualizing high-frequency macroeconomic & household welfare telemetry in Bangladesh.
- **Hairline Restraint**: Subtle borders (6–8% opacity) and calm neutral surfaces for maximum reading comfort and scholarly authority.

---

## 📁 Project Structure

```
academic-portfolio/
├── index.html        # Main semantic markup, sections, modals, and CV view
├── styles.css        # Academic design tokens, quiet chrome styling, responsive layout, print styles
├── app.js            # Chart.js telemetry engine, paper filters, search, BibTeX copy & toast notifications
└── README.md         # Instructions for customization and deployment
```

---

## ⚡ Quick Start & Local Preview

### Option 1: Open Directly
Double-click `index.html` in your file explorer to open it in any web browser. Everything is self-contained with CDN assets.

### Option 2: Run a Local Dev Server
If you prefer running a local server:

Using Node / npx:
```bash
npx serve C:\Users\Admin\.gemini\antigravity\scratch\academic-portfolio
```

Or using Python:
```bash
cd C:\Users\Admin\.gemini\antigravity\scratch\academic-portfolio
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 🛠️ Personalization & Customization Guide

1. **Your Name & Bio**:
   - Open `index.html` and edit lines in `<h1 class="hero-title">` to display your personal name (e.g. `Ahnaf Sadman | Economics Researcher & Data Analyst`).
   - Update the contact email in `copyEmailAddress()` inside `app.js` and in the contact section of `index.html`.

2. **Publications & Working Papers**:
   - Open `app.js` and modify `papersData` to include your own research papers, conference presentations, term papers, or policy monographs with your preferred JEL codes and methodology tags.

3. **Data Lab & Visualizations**:
   - Update `chartDatasets` in `app.js` with your own empirical datasets, macro indicators, or survey findings.

4. **Curriculum Vitae (CV)**:
   - The site includes an integrated interactive CV modal with a built-in "Print / Save PDF" feature. You can customize the coursework, awards, and credentials directly in `index.html`.

---

## 🚀 Free Hosting & Deployment

### Deploy to GitHub Pages (Recommended)
1. Initialize a git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a new repository on GitHub (e.g., `username.github.io` or `portfolio`).
3. Push your code and enable **GitHub Pages** under `Settings > Pages > Branch: main`.

### Deploy to Netlify or Vercel
- Simply drag and drop the `academic-portfolio` folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard for an instant live URL with free SSL.
