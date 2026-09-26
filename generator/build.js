// vidyatopper-website-main/generator/build.js
const fs = require('fs');
const path = require('path');
const { generateArticleHtml } = require('./template');

const outputDir = path.resolve(__dirname, '..');
const studyMaterialsDir = path.join(outputDir, 'study-materials');

// Load articles with assigned categorySlugs
const scienceArticles = require('./articles_science').map(a => ({ ...a, categorySlug: 'science' }));
const mathsArticles = require('./articles_maths').map(a => ({ ...a, categorySlug: 'maths' }));
const sstEngArticles = require('./articles_sst_eng').map(a => ({ ...a, categorySlug: 'social-science' }));
const hindiArticles = require('./articles_hindi').map(a => ({ ...a, categorySlug: 'hindi' }));
const stateBoardArticles = require('./articles_state_boards').map(a => ({ ...a, categorySlug: 'state-boards' }));
const class12Articles = require('./articles_class12').map(a => ({ ...a, categorySlug: 'class-12' }));
const strategyArticles = require('./articles_strategy').map(a => ({ ...a, categorySlug: 'exam-tips' }));
const legacyArticles = require('./articles_legacy');

const generatedArticles = [
  ...scienceArticles,
  ...mathsArticles,
  ...sstEngArticles,
  ...hindiArticles,
  ...stateBoardArticles,
  ...class12Articles,
  ...strategyArticles
];

const allArticles = [
  ...generatedArticles,
  ...legacyArticles
];

// Map by slug for related lookups
const allArticlesMap = {};
allArticles.forEach(a => {
  allArticlesMap[a.slug] = a;
});

console.log(`Building 48 generated articles into study-materials/<category>/...`);

// 1. Generate 48 new articles
generatedArticles.forEach(article => {
  const catDir = path.join(studyMaterialsDir, article.categorySlug);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  const html = generateArticleHtml(article, allArticlesMap);
  const filePath = path.join(catDir, `${article.slug}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: study-materials/${article.categorySlug}/${article.slug}.html`);
});

// 2. Process the 6 legacy articles into their subfolders
console.log('Migrating 6 legacy articles into structured category directories...');
legacyArticles.forEach(leg => {
  const catDir = path.join(studyMaterialsDir, leg.categorySlug);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  const rootLegacyPath = path.join(outputDir, `${leg.slug}.html`);
  const targetLegacyPath = path.join(catDir, `${leg.slug}.html`);

  let content = '';
  if (fs.existsSync(rootLegacyPath)) {
    content = fs.readFileSync(rootLegacyPath, 'utf8');
  } else if (fs.existsSync(targetLegacyPath)) {
    content = fs.readFileSync(targetLegacyPath, 'utf8');
  }

  if (content) {
    // Update relative asset and navigation links for depth 2
    content = content
      .replace(/href="style\.css"/g, 'href="../../assets/css/style.css"')
      .replace(/src="script\.js"/g, 'src="../../assets/js/script.js"')
      .replace(/href="logo\.png"/g, 'href="../../assets/images/brand/logo.png"')
      .replace(/src="logo\.png"/g, 'src="../../assets/images/brand/logo.png"')
      .replace(/href="index\.html"/g, 'href="../../index.html"')
      .replace(/href="study-materials\.html"/g, 'href="../../study-materials/index.html"')
      .replace(/href="about\.html"/g, 'href="../../about.html"')
      .replace(/href="contact\.html"/g, 'href="../../contact.html"')
      .replace(/href="privacy-policy\.html"/g, 'href="../../privacy-policy.html"')
      .replace(/href="terms\.html"/g, 'href="../../terms.html"')
      .replace(/href="refund\.html"/g, 'href="../../refund.html"')
      .replace(/https:\/\/vidyatopper\.com\/([a-z0-9\-]+)\.html/g, (match, slug) => {
        const item = allArticlesMap[slug];
        if (item) {
          return `https://vidyatopper.com/study-materials/${item.categorySlug}/${slug}.html`;
        }
        return match;
      });

    fs.writeFileSync(targetLegacyPath, content, 'utf8');
    console.log(`Updated legacy: study-materials/${leg.categorySlug}/${leg.slug}.html`);
  }
});

// 3. Generate updated study-materials/index.html
console.log('Generating study-materials/index.html directory hub...');

const categories = [
  { name: 'All', filter: 'All' },
  { name: 'Science 🔬', filter: 'science' },
  { name: 'Maths 📐', filter: 'maths' },
  { name: 'Hindi Vyakaran ✍️', filter: 'hindi' },
  { name: 'Social Science 🌍', filter: 'social-science' },
  { name: 'State Boards 🇮🇳', filter: 'state-boards' },
  { name: 'Class 12 ⚡', filter: 'class-12' },
  { name: 'Exam Strategy 🏆', filter: 'exam-tips' }
];

function getCategoryIcon(catSlug) {
  if (catSlug === 'science') return '🔬';
  if (catSlug === 'maths') return '📐';
  if (catSlug === 'hindi') return '✍️';
  if (catSlug === 'social-science') return '🌍';
  if (catSlug === 'state-boards') return '🏛️';
  if (catSlug === 'class-12') return '⚡';
  if (catSlug === 'exam-tips') return '🏆';
  return '📚';
}

const articlesCardsHtml = allArticles.map(a => {
  const catSlug = a.categorySlug || 'science';
  const icon = getCategoryIcon(catSlug);
  const badgeText = a.badge || a.category;
  return `
    <div class="study-article-card" data-category="${catSlug}" data-title="${a.title.toLowerCase()} ${a.description.toLowerCase()}" style="background:var(--card-bg); border:1.5px solid var(--bdr); border-radius:16px; padding:24px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.25s ease, border-color 0.25s ease; box-shadow:var(--shadow);" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='var(--p)';" onmouseout="this.style.transform='none'; this.style.borderColor='var(--bdr)';">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <span style="font-size:1.8rem;">${icon}</span>
          <span style="background:var(--p-light); color:var(--p); font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:999px; text-transform:uppercase;">${badgeText}</span>
        </div>
        <h3 style="font-size:1.15rem; font-weight:800; color:var(--text); line-height:1.45; margin-bottom:10px;">${a.title}</h3>
        <p style="font-size:0.9rem; color:var(--sub); line-height:1.6; margin-bottom:16px;">${a.description}</p>
      </div>
      <a href="${catSlug}/${a.slug}.html" class="btn-main" style="text-align:center; padding:10px 16px; font-size:0.9rem; text-decoration:none; display:inline-block; border-radius:10px; font-weight:700; background:linear-gradient(135deg, var(--p) 0%, var(--s) 100%); color:#fff;">Read Full Guide →</a>
    </div>
  `;
}).join('\n');

const studyMaterialsHubHtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Free Study Materials Hub (50+ Board Guides) – Vidya Topper | NCERT, CBSE &amp; State Boards</title>
  <meta name="description"
    content="Browse 50+ free NCERT study guides, chapter-wise revision notes, master formula handbooks, solved previous year papers, and board blueprints for CBSE, UP Board, Bihar Board, MP Board, RBSE, and Class 12." />
  <meta name="keywords"
    content="NCERT study materials, Class 10 science notes, CBSE formula handbook, UP Board model papers, Bihar Board matric notes, MP Board exam prep, Class 12 physics notes, free educational guides" />
  <meta name="author" content="Vidya Topper Educational Research Team" />
  <link rel="canonical" href="https://vidyatopper.com/study-materials/" />

  <!-- Google AdSense Official Script -->
  <meta name="google-adsense-account" content="ca-pub-8779731071171821" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8779731071171821"
    crossorigin="anonymous"></script>

  <link rel="icon" type="image/png" href="../assets/images/brand/logo.png" />
  <link rel="apple-touch-icon" href="../assets/images/brand/logo.png" />
  <meta name="theme-color" content="#4F46E5" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/style.css" />
  <script src="../assets/js/script.js" defer></script>
</head>

<body>

  <!-- ════ SCROLL PROGRESS BAR ════ -->
  <div id="scroll-progress" class="scroll-progress-bar"></div>

  <!-- ════ NAVBAR ════ -->
  <nav class="glass" id="navbar">
    <div class="ni">
      <a href="../index.html" class="logo">
        <img src="../assets/images/brand/logo.png" alt="Vidya Topper Logo" style="height: 40px; border-radius: 8px;">
        Vidya Topper
      </a>

      <ul class="nav-links">
        <li><a href="../index.html" class="nav-item">Home</a></li>
        <li><a href="index.html" class="nav-item active">Study Hub 📚</a></li>
        <li><a href="../about.html" class="nav-item">About Us</a></li>
        <li><a href="../contact.html" class="nav-item">Contact</a></li>
        <li><a href="../privacy-policy.html" class="nav-item">Privacy</a></li>
        <li>
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke-width="2" />
              <path stroke-linecap="round" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </li>
        <li class="magnetic-btn">
          <a href="https://app.vidyatopper.com" target="_blank" class="nav-cta"
            style="background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);">Launch Web App 🚀</a>
        </li>
      </ul>

      <button class="mobile-menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer Menu -->
  <div class="mobile-menu-overlay" id="mobile-menu">
    <ul class="mobile-menu-links">
      <li><a href="../index.html" class="mobile-nav-item">Home</a></li>
      <li><a href="index.html" class="mobile-nav-item active">Study Hub 📚</a></li>
      <li><a href="../about.html" class="mobile-nav-item">About Us</a></li>
      <li><a href="../contact.html" class="mobile-nav-item">Contact</a></li>
      <li><a href="../privacy-policy.html" class="mobile-nav-item">Privacy Policy</a></li>
      <li><a href="https://app.vidyatopper.com" target="_blank" class="nav-cta"
          style="display: block; text-align: center; margin-top: 15px; background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);">Launch Web App 🚀</a></li>
    </ul>
  </div>

  <!-- ════ HEADER BANNER ════ -->
  <header class="legal-header">
    <div class="wrap">
      <span class="legal-badge">📚 Free Board Exam Study Library</span>
      <h1>NCERT &amp; State Board Study Materials Hub</h1>
      <p>54+ In-Depth Chapter Notes, Formula Sheets, Hindi Vyakaran, and Solved Model Papers for Class 10 &amp; 12.</p>
      <span class="legal-updated">Updated for Academic Session 2025–2026 | Dual English &amp; Hindi Medium</span>
    </div>
  </header>

  <!-- ════ MAIN DIRECTORY WITH FILTER & SEARCH ════ -->
  <main class="legal-content">

    <!-- Search & Filter Controls -->
    <div style="background:var(--card-bg); border:1.5px solid var(--bdr); border-radius:18px; padding:24px; margin-bottom:32px; box-shadow:var(--shadow);">
      <div style="display:flex; flex-direction:column; gap:16px;">
        
        <!-- Live Instant Search Bar -->
        <div style="position:relative;">
          <input type="text" id="article-search" placeholder="🔍 Search chapter, subject, formula, or exam (e.g. trigonometry, chemical reactions, samas, bihar board)..."
            style="width:100%; padding:14px 20px; font-size:1rem; border:1.5px solid var(--bdr); border-radius:12px; background:var(--bg); color:var(--text); outline:none; transition:border-color 0.2s;"
            oninput="filterArticles()" onfocus="this.style.borderColor='var(--p)'" onblur="this.style.borderColor='var(--bdr)'" />
        </div>

        <!-- Category Pills -->
        <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;" id="category-pills">
          <span style="font-size:0.85rem; font-weight:700; color:var(--sub); margin-right:4px;">Filter:</span>
          ${categories.map((c, i) => `
            <button class="filter-pill" onclick="setCategory('${c.filter}', this)" style="border:1px solid ${i === 0 ? 'var(--p)' : 'var(--bdr)'}; background:${i === 0 ? 'var(--p)' : 'var(--bg)'}; color:${i === 0 ? '#fff' : 'var(--sub)'}; padding:8px 16px; border-radius:999px; font-size:0.85rem; font-weight:700; cursor:pointer; transition:all 0.2s;">${c.name}</button>
          `).join('')}
        </div>

      </div>
    </div>

    <!-- Active Count Display -->
    <div style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
      <p style="color:var(--sub); font-size:0.95rem; margin:0;">
        Showing <strong id="article-count" style="color:var(--text);">${allArticles.length}</strong> verified study guides &amp; notes
      </p>
    </div>

    <!-- Articles Grid -->
    <div id="articles-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:24px;">
      ${articlesCardsHtml}
    </div>

    <!-- No results message -->
    <div id="no-results" style="display:none; text-align:center; padding:60px 20px; background:var(--card-bg); border-radius:16px; border:1px solid var(--bdr); margin-top:20px;">
      <div style="font-size:3rem; margin-bottom:12px;">🔍</div>
      <h3 style="font-size:1.3rem; color:var(--text); margin-bottom:8px;">No matching study guides found</h3>
      <p style="color:var(--sub); font-size:0.95rem;">Try searching for another keyword or select another category filter above.</p>
    </div>

  </main>

  <script>
    let activeCategory = 'All';

    function setCategory(cat, btn) {
      activeCategory = cat;
      const pills = document.querySelectorAll('.filter-pill');
      pills.forEach(p => {
        p.style.background = 'var(--bg)';
        p.style.color = 'var(--sub)';
        p.style.borderColor = 'var(--bdr)';
      });
      btn.style.background = 'var(--p)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--p)';
      filterArticles();
    }

    function filterArticles() {
      const query = document.getElementById('article-search').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.study-article-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const text = card.getAttribute('data-title');

        const matchesCat = (activeCategory === 'All') ||
          (cat === activeCategory) ||
          (activeCategory === 'class-12' && cat === 'class-12');

        const matchesQuery = !query || text.includes(query);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      document.getElementById('article-count').innerText = visibleCount;
      document.getElementById('no-results').style.display = visibleCount === 0 ? 'block' : 'none';
    }

    // Auto-select filter from URL query params (e.g. ?category=science)
    window.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('category');
      if (catParam) {
        const catMap = {
          'science': 'science',
          'maths': 'maths',
          'mathematics': 'maths',
          'sst': 'social-science',
          'social-science': 'social-science',
          'hindi': 'hindi',
          'state_boards': 'state-boards',
          'state-boards': 'state-boards',
          'class12': 'class-12',
          'class-12': 'class-12',
          'strategy': 'exam-tips',
          'exam-tips': 'exam-tips',
          'all': 'All'
        };
        const target = catMap[catParam.toLowerCase()] || catParam;
        const pills = document.querySelectorAll('.filter-pill');
        for (const pill of pills) {
          const onclickAttr = pill.getAttribute('onclick') || '';
          if (onclickAttr.includes("'" + target + "'")) {
            setCategory(target, pill);
            break;
          }
        }
      }
    });
  </script>

  <!-- ════ FOOTER ════ -->
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="fl" style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
            <img src="../assets/images/brand/logo.png" alt="Vidya Topper Logo" style="height: 32px; border-radius: 6px;">
            Vidya Topper
          </div>
          <p>A free mobile study app for Indian students — NCERT, Board Exams, and Government Exam preparation all in one place.</p>
          <div class="footer-social-links" aria-label="Official Social Media Links">
            <a href="https://youtube.com/@vidyatopperofficial" target="_blank" rel="noopener noreferrer" class="social-icon-btn youtube" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="https://www.instagram.com/vidyatopperofficial" target="_blank" rel="noopener noreferrer" class="social-icon-btn instagram" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://www.facebook.com/share/19QM7ARDFe/" target="_blank" rel="noopener noreferrer" class="social-icon-btn facebook" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="https://www.linkedin.com/in/vidya-topper-42b757434/" target="_blank" rel="noopener noreferrer" class="social-icon-btn linkedin" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="https://x.com/vidyatopper" target="_blank" rel="noopener noreferrer" class="social-icon-btn twitter" aria-label="Twitter"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          </div>
        </div>
        <div class="footer-links-col">
          <h4>Study Hub</h4>
          <ul>
            <li><a href="index.html">All 50+ Study Guides 📚</a></li>
            <li><a href="science/cbse-class-10-science-important-questions.html">Class 10 Science Notes</a></li>
            <li><a href="maths/cbse-class-10-maths-formula-sheet.html">Maths Formula Sheet</a></li>
            <li><a href="https://app.vidyatopper.com" target="_blank">Student Web App 🚀</a></li>
          </ul>
        </div>
        <div class="footer-links-col">
          <h4>Legal &amp; About</h4>
          <ul>
            <li><a href="../about.html">About Us</a></li>
            <li><a href="../privacy-policy.html">Privacy Policy</a></li>
            <li><a href="../terms.html">Terms of Service</a></li>
            <li><a href="../refund.html">Refund Policy</a></li>
          </ul>
        </div>
        <div class="footer-links-col">
          <h4>Support</h4>
          <ul>
            <li><a href="../contact.html">Contact Us</a></li>
            <li><a href="mailto:vidyatopper.in@gmail.com">vidyatopper.in@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span id="copyright-text">© 2026 Vidya Topper. All rights reserved.</span>
        <span>Democratizing Free Education Across India 🇮🇳</span>
      </div>
    </div>
  </footer>

</body>
</html>`;

fs.writeFileSync(path.join(studyMaterialsDir, 'index.html'), studyMaterialsHubHtml, 'utf8');
console.log('Successfully wrote study-materials/index.html!');

// 4. Create root study-materials.html as a redirect to /study-materials/
const rootStudyRedirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/study-materials/">
  <link rel="canonical" href="https://vidyatopper.com/study-materials/" />
  <title>Redirecting to Study Materials Hub – Vidya Topper</title>
</head>
<body>
  <p>Redirecting to <a href="/study-materials/">Study Materials Hub</a>...</p>
</body>
</html>`;
fs.writeFileSync(path.join(outputDir, 'study-materials.html'), rootStudyRedirectHtml, 'utf8');

// 5. Generate updated sitemap.xml
console.log('Generating updated sitemap.xml...');

const sitemapUrls = [
  { loc: 'https://vidyatopper.com/', priority: '1.0', changefreq: 'daily' },
  { loc: 'https://vidyatopper.com/study-materials/', priority: '0.9', changefreq: 'daily' },
  { loc: 'https://vidyatopper.com/about.html', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://vidyatopper.com/contact.html', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://vidyatopper.com/privacy-policy.html', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://vidyatopper.com/terms.html', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://vidyatopper.com/refund.html', priority: '0.5', changefreq: 'monthly' },
  { loc: 'https://vidyatopper.com/share.html', priority: '0.6', changefreq: 'monthly' },
  ...allArticles.map(a => ({
    loc: `https://vidyatopper.com/study-materials/${a.categorySlug}/${a.slug}.html`,
    priority: '0.8',
    changefreq: 'weekly'
  }))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>2026-09-26</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Updated sitemap.xml with ${sitemapUrls.length} total URLs.`);

// 6. Generate _redirects file for Cloudflare Pages backwards compatibility
console.log('Generating _redirects file...');
const redirects = [
  `/study-materials.html /study-materials/ 301`,
  ...allArticles.map(a => `/${a.slug}.html /study-materials/${a.categorySlug}/${a.slug}.html 301`)
];
fs.writeFileSync(path.join(outputDir, '_redirects'), redirects.join('\n') + '\n', 'utf8');
console.log('Successfully wrote _redirects file!');

// 7. Clean up root loose article html files
console.log('Cleaning up loose root HTML article files...');
allArticles.forEach(a => {
  const rootFile = path.join(outputDir, `${a.slug}.html`);
  if (fs.existsSync(rootFile)) {
    fs.unlinkSync(rootFile);
    console.log(`Cleaned up loose root file: ${a.slug}.html`);
  }
});

console.log('All articles built and codebase organized successfully!');
