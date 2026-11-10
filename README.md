# MD. Ashikul Islam (Ashikul Islam Khan) - Professional Portfolio

> **Economics Undergraduate | Research Enthusiast | Aspiring Data Analyst | Climate Activist**  
> *Department of Economics, University of Dhaka*  
> **Live Site:** [https://ashikulislamkhan.github.io/portfolio/](https://ashikulislamkhan.github.io/portfolio/)

---

## 🌟 Highlights & Design System

- **iOS Liquid Glass Physics**: Translucent frosted surfaces (`backdrop-filter: blur(28px)`), specular hairline boundaries, floating iOS-style bottom dock with active scroll-tracking, springy segmented tabs, and floating liquid snackbars.
- **100% Dynamic & Editable**: The whole site is powered by `portfolio-data.js`. Every segment—from work experience, research papers, apps built, education, to certifications—can be added, modified, or removed in seconds.
- **Live Customizer Drawer**: Click "Edit Data" on the top bar or dock to open the live JSON editor, tweak content right in your browser, and instantly preview changes or export the updated file.
- **Accurate CV Integration**: Pre-populated with your verified 3-page CV, research manuscripts on inflation targeting and the Cuban development puzzle, energy justice publication at CAB, and student leadership across DU clubs.

---

## 📂 Architecture

```
academic-portfolio/
├── portfolio-data.js   # 💡 CENTRAL DATA STORE - Edit all content here!
├── index.html          # Semantic markup, sections, and Liquid Glass layout
├── styles.css          # iOS Liquid Glass design system, dock, tabs, snackbar
├── app.js              # Reactive renderer, live search, filters, modals
├── standalone.html     # Single-file portable bundle (everything inlined)
└── README.md           # Documentation & customization guide
```

---

## 🛠️ How to Customize & Add/Modify Content

### Method 1: Edit `portfolio-data.js` Directly (Recommended)
Open [`portfolio-data.js`](portfolio-data.js) in your editor. You will see clear sections:

1. **Profile & Contact Info**: Change title, email, phone, bio, or links.
2. **Work Experience (`workExperience`)**: Add a new job or internship:
   ```javascript
   {
     id: "new-role",
     role: "Research Associate",
     organization: "New Think Tank",
     location: "Dhaka, Bangladesh",
     period: "2026 – Present",
     type: "Research & Policy",
     achievements: ["Key outcome 1", "Key outcome 2"],
     responsibilities: ["Task 1", "Task 2"]
   }
   ```
3. **Research Manuscripts (`researchWorks`)**: Add working papers with JEL codes, BibTeX, and ResearchGate links.
4. **Software & Apps (`projects`)**: Add new apps, web tools, or repositories.
5. **Certifications, Volunteering & Creative Campaigns**: Add or remove entries from their respective arrays.

### Method 2: Use the In-Browser Live Customizer
1. Click the **"Edit Data"** button on the top-right header or the pen icon on the bottom dock.
2. An iOS Liquid Glass drawer will slide open showing your current data configuration.
3. Edit any text or add items, then click **"Apply Changes"** to see your site update in real-time.
4. Click **"Export File"** to download the new `portfolio-data.js`.

---

## 🚀 Live Deployment to GitHub Pages

To sync changes to your live GitHub Pages site:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
GitHub Pages will automatically build and publish the changes to `https://ashikulislamkhan.github.io/portfolio/`.
