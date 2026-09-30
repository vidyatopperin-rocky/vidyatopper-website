// vidyatopper-website-main/generator/template.js
const fs = require('fs');
const path = require('path');

function generateArticleHtml(article, allArticlesMap = {}) {
  const lang = article.lang || 'en';
  const categorySlug = article.categorySlug || 'science';
  const canonicalUrl = `https://vidyatopper.com/study-materials/${categorySlug}/${article.slug}.html`;

  // FAQ schema if present
  let faqSchema = '';
  if (article.faq && article.faq.length > 0) {
    const faqEntities = article.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }));
    faqSchema = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqEntities
    });
  }

  // Related articles links
  let relatedHtml = '';
  if (article.relatedSlugs && article.relatedSlugs.length > 0) {
    const cards = article.relatedSlugs.map(slug => {
      const rel = allArticlesMap[slug];
      if (!rel) return '';
      const relCat = rel.categorySlug || 'science';
      return `
        <a href="../../study-materials/${relCat}/${slug}.html" style="text-decoration:none; display:block; padding:16px; background:var(--bg); border:1px solid var(--bdr); border-radius:12px; transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--p)'" onmouseout="this.style.borderColor='var(--bdr)'">
          <div style="font-size:0.8rem; font-weight:700; color:var(--p); text-transform:uppercase; margin-bottom:4px;">${rel.badge || 'Study Guide'}</div>
          <div style="font-size:0.98rem; font-weight:700; color:var(--text); line-height:1.4;">${rel.title}</div>
          <div style="font-size:0.85rem; color:var(--sub); margin-top:6px; line-height:1.4;">${rel.description ? rel.description.substring(0, 100) + '...' : ''}</div>
        </a>
      `;
    }).filter(Boolean).join('');

    if (cards) {
      relatedHtml = `
        <div class="legal-card" style="margin-top:28px;">
          <h2>📚 Related Study Guides &amp; Notes</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-top:16px;">
            ${cards}
          </div>
        </div>
      `;
    }
  }

  // Table of Contents HTML
  let tocHtml = '';
  if (article.sections && article.sections.length > 1) {
    const tocList = article.sections.map((sec, idx) => `
      <li style="margin-bottom:8px;"><a href="#sec-${idx+1}" style="color:var(--p); text-decoration:none; font-weight:600;">${sec.h2}</a></li>
    `).join('');

    tocHtml = `
      <div class="legal-card" style="background:var(--bg); border:1.5px solid var(--bdr); margin-bottom:24px;">
        <h3 style="font-size:1.1rem; font-weight:800; color:var(--text); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
          <span>📑</span> In This Chapter Guide (Table of Contents)
        </h3>
        <ol style="margin:0; padding-left:22px; line-height:1.75; font-size:0.94rem;">
          ${tocList}
          ${article.faq && article.faq.length > 0 ? '<li style="margin-bottom:8px;"><a href="#faq-section" style="color:var(--p); text-decoration:none; font-weight:600;">💡 Frequently Asked Questions (FAQ)</a></li>' : ''}
        </ol>
      </div>
    `;
  }

  // FAQ HTML
  let faqCardHtml = '';
  if (article.faq && article.faq.length > 0) {
    const faqItems = article.faq.map((item, idx) => `
      <div style="margin-bottom:18px; padding-bottom:14px; border-bottom:1px solid var(--bdr);">
        <h3 style="font-size:1.05rem; font-weight:700; color:var(--text); margin-bottom:6px;">❓ ${item.question}</h3>
        <p style="color:var(--sub); line-height:1.65; margin:0;">${item.answer}</p>
      </div>
    `).join('');

    faqCardHtml = `
      <div class="legal-card" id="faq-section">
        <h2>💡 Frequently Asked Questions (FAQ)</h2>
        <div style="margin-top:16px;">
          ${faqItems}
        </div>
      </div>
    `;
  }

  // Render sections with unique anchor IDs
  const sectionsHtml = (article.sections || []).map((sec, idx) => `
    <div class="legal-card" id="sec-${idx+1}">
      <h2>${sec.h2}</h2>
      ${sec.contentHtml}
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${article.title} – Vidya Topper</title>
  <meta name="description" content="${article.description}" />
  <meta name="keywords" content="${article.keywords}" />
  <meta name="author" content="Vidya Topper Educational Research Team" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Google AdSense Official Verification -->
  <meta name="google-adsense-account" content="ca-pub-8779731071171821" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8779731071171821"
    crossorigin="anonymous"></script>

  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:site_name" content="Vidya Topper" />
  <meta property="og:title" content="${article.title} – Vidya Topper" />
  <meta property="og:description" content="${article.description}" />
  <meta property="og:image" content="https://vidyatopper.com/assets/images/brand/feature-graphic.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@vidyatopper" />
  <meta name="twitter:title" content="${article.title} – Vidya Topper" />
  <meta name="twitter:description" content="${article.description}" />
  <meta name="twitter:image" content="https://vidyatopper.com/assets/images/brand/feature-graphic.png" />

  <link rel="icon" type="image/png" href="../../assets/images/brand/logo.png" />
  <link rel="apple-touch-icon" href="../../assets/images/brand/logo.png" />
  <meta name="theme-color" content="#4F46E5" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <script src="../../assets/js/script.js" defer></script>

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "${article.title.replace(/"/g, '\\"')}",
        "description": "${article.description.replace(/"/g, '\\"')}",
        "image": "https://vidyatopper.com/assets/images/brand/feature-graphic.png",
        "author": {
          "@type": "Organization",
          "name": "Vidya Topper Educational Research Team",
          "url": "https://vidyatopper.com/about.html"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vidya Topper",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vidyatopper.com/assets/images/brand/logo.png"
          }
        },
        "mainEntityOfPage": "${canonicalUrl}"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vidyatopper.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Study Materials",
            "item": "https://vidyatopper.com/study-materials/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${article.category || 'Guide'}",
            "item": "https://vidyatopper.com/study-materials/?category=${categorySlug}"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "${(article.shortTitle || article.title).replace(/"/g, '\\"')}",
            "item": "${canonicalUrl}"
          }
        ]
      }
      ${faqSchema ? ',' + faqSchema : ''}
    ]
  }
  </script>
</head>

<body>

  <!-- ════ SCROLL PROGRESS BAR ════ -->
  <div id="scroll-progress" class="scroll-progress-bar"></div>

  <!-- ════ NAVBAR ════ -->
  <nav class="glass" id="navbar">
    <div class="ni">
      <a href="../../index.html" class="logo">
        <img src="../../assets/images/brand/logo.png" alt="Vidya Topper Logo" style="height: 40px; border-radius: 8px;">
        Vidya Topper
      </a>

      <ul class="nav-links">
        <li><a href="../../index.html" class="nav-item">Home</a></li>
        <li><a href="../../study-materials/index.html" class="nav-item active">Study Materials 📚</a></li>
        <li><a href="../../about.html" class="nav-item">About Us</a></li>
        <li><a href="../../contact.html" class="nav-item">Contact</a></li>
        <li><a href="../../privacy-policy.html" class="nav-item">Privacy</a></li>
        <li>
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke-width="2" />
              <path stroke-linecap="round" stroke-width="2"
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
      <li><a href="../../index.html" class="mobile-nav-item">Home</a></li>
      <li><a href="../../study-materials/index.html" class="mobile-nav-item active">Study Materials 📚</a></li>
      <li><a href="../../about.html" class="mobile-nav-item">About Us</a></li>
      <li><a href="../../contact.html" class="mobile-nav-item">Contact</a></li>
      <li><a href="../../privacy-policy.html" class="mobile-nav-item">Privacy Policy</a></li>
      <li><a href="../../disclaimer.html" class="mobile-nav-item">Disclaimer</a></li>
      <li><a href="../../editorial-policy.html" class="mobile-nav-item">Editorial Standards</a></li>
      <li><a href="https://app.vidyatopper.com" target="_blank" class="nav-cta"
          style="display: block; text-align: center; margin-top: 15px; background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);">Launch Web App 🚀</a></li>
    </ul>
  </div>

  <!-- ════ HEADER BANNER ════ -->
  <header class="legal-header">
    <div class="wrap">
      <span class="legal-badge">${article.badge || 'Curriculum Guide'}</span>
      <h1>${article.h1 || article.title}</h1>
      <p>${article.subtitle || article.description}</p>
      <span class="legal-updated">${article.updated || 'Academic Session 2025–2026 | 100% Free Access'}</span>
    </div>
  </header>

  <!-- ════ MAIN CONTENT ════ -->
  <main class="legal-content">

    <!-- Breadcrumb bar -->
    <div style="font-size:0.85rem; color:var(--sub); margin-bottom:20px; display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
      <a href="../../index.html" style="color:var(--sub); text-decoration:none;">Home</a>
      <span>›</span>
      <a href="../../study-materials/index.html" style="color:var(--p); text-decoration:none; font-weight:600;">Study Materials Hub</a>
      <span>›</span>
      <a href="../../study-materials/index.html?category=${categorySlug}" style="color:var(--sub); text-decoration:none;">${article.category || 'Guide'}</a>
      <span>›</span>
      <span style="color:var(--text);">${article.shortTitle || article.title}</span>
    </div>

    <!-- E-E-A-T Academic Verification Card -->
    <div style="background:var(--card-bg); border:1.5px solid var(--bdr); border-radius:14px; padding:16px 20px; margin-bottom:24px; box-shadow:var(--shadow); display:flex; gap:16px; align-items:center;">
      <div style="font-size:2.4rem; line-height:1;">🎓</div>
      <div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:4px;">
          <span style="font-size:0.75rem; font-weight:800; background:rgba(34, 197, 94, 0.12); color:#16a34a; border:1px solid rgba(34, 197, 94, 0.3); padding:3px 10px; border-radius:999px; text-transform:uppercase;">Fact-Checked &amp; Verified</span>
          <span style="font-size:0.8rem; color:var(--sub);">Academic Session 2025–2026</span>
        </div>
        <div style="font-size:0.95rem; font-weight:700; color:var(--text);">Reviewed by Vidya Topper Senior Academic Board</div>
        <p style="font-size:0.82rem; color:var(--sub); margin:3px 0 0; line-height:1.4;">
          Authored by subject matter experts. Content strictly validated against latest NCERT rationalized curriculum and official Board Marking Schemes.
        </p>
      </div>
    </div>

    ${article.highlight ? `
    <div class="legal-highlight">
      ${article.highlight}
    </div>` : ''}

    ${tocHtml}

    ${sectionsHtml}

    ${faqCardHtml}

    ${relatedHtml}

    <!-- Author & Editorial Credentials Card -->
    <div class="legal-card" style="background:var(--bg); border:1px solid var(--bdr); margin-top:30px;">
      <div style="display:flex; gap:16px; align-items:flex-start;">
        <div style="font-size:2rem;">✍️</div>
        <div>
          <h4 style="font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">About Vidya Topper Academic Research Team</h4>
          <p style="font-size:0.85rem; color:var(--sub); line-height:1.5; margin:0 0 8px 0;">
            Our educational publishing team consists of experienced CBSE educators, state board toppers, and IIT/NIT alumni dedicated to providing 100% free, high-yield study materials, formula handbooks, and step-by-step NCERT solutions for students across India.
          </p>
          <div style="font-size:0.82rem; display:flex; gap:14px; flex-wrap:wrap;">
            <a href="../../editorial-policy.html" style="color:var(--p); font-weight:700; text-decoration:none;">Editorial Standards &amp; Review Board →</a>
            <a href="../../disclaimer.html" style="color:var(--sub); text-decoration:none;">Educational Disclaimer →</a>
            <a href="../../contact.html" style="color:var(--sub); text-decoration:none;">Report Errata / Typo →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom App CTA -->
    <div class="legal-card" style="text-align:center; background:var(--p-light); margin-top:24px;">
      <h3>🚀 Test Your Mastery with Free Interactive MCQs</h3>
      <p style="margin:12px 0;">Solve chapter-wise quizzes, track your All-India percentile, and get instant explanations on Vidya Topper Web &amp; Android Apps.</p>
      <a href="https://app.vidyatopper.com" target="_blank" class="btn-main" style="display:inline-block; text-decoration:none; background:linear-gradient(135deg, #6366f1 0%, #4338ca 100%); color:#fff; padding:12px 28px; border-radius:999px; font-weight:700;">Open Free Web App 💻</a>
    </div>

  </main>

  <!-- ════ FOOTER ════ -->
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="fl" style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
            <img src="../../assets/images/brand/logo.png" alt="Vidya Topper Logo" style="height: 32px; border-radius: 6px;">
            Vidya Topper
          </div>
          <p>India's premier free educational platform for Class 6–12, CBSE, State Boards, and Competitive Entrance Exams.</p>
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
            <li><a href="../../study-materials/index.html">All 50+ Study Guides 📚</a></li>
            <li><a href="../../study-materials/science/cbse-class-10-science-important-questions.html">Class 10 Science Notes</a></li>
            <li><a href="../../study-materials/maths/cbse-class-10-maths-formula-sheet.html">Maths Formula Sheet</a></li>
            <li><a href="https://app.vidyatopper.com" target="_blank">Student Web App 🚀</a></li>
          </ul>
        </div>
        <div class="footer-links-col">
          <h4>Legal &amp; Policy</h4>
          <ul>
            <li><a href="../../about.html">About Us</a></li>
            <li><a href="../../privacy-policy.html">Privacy Policy</a></li>
            <li><a href="../../terms.html">Terms of Service</a></li>
            <li><a href="../../disclaimer.html">Disclaimer</a></li>
            <li><a href="../../editorial-policy.html">Editorial Standards</a></li>
            <li><a href="../../refund.html">Refund Policy</a></li>
          </ul>
        </div>
        <div class="footer-links-col">
          <h4>Help &amp; Support</h4>
          <ul>
            <li><a href="../../contact.html">Contact Support</a></li>
            <li><a href="mailto:vidyatopper.in@gmail.com">vidyatopper.in@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div
        style="margin: 32px 0 24px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05);">
        <p style="color: #fff; font-weight: 700; margin-bottom: 6px;">Trademark &amp; Statutory Disclaimer</p>
        <p style="color: #f59e0b; font-weight: 600; font-size: 0.82rem; margin-bottom: 10px; line-height: 1.5;">
          ⚖️ "VIDYA TOPPER" is a legally registered device trademark of Arti Devi, trading as Vidya Topper (Government of India Trade Marks Registry, Application Nos. 8031351 in Class 9 and 8031352 in Class 41). Any unauthorized reproduction, deceptive imitation, or unauthorized use is strictly actionable under the Trade Marks Act, 1999.
        </p>
        <p style="opacity: 0.7; line-height: 1.6; margin-bottom: 10px;">Vidya Topper™ is an independent educational platform and is NOT affiliated with, authorized by, or endorsed by any government entity. All government information provided is sourced from publicly available official portals.</p>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="../../disclaimer.html" style="color: #818cf8; text-decoration: none;">Full Disclaimer →</a>
          <a href="../../editorial-policy.html" style="color: #818cf8; text-decoration: none;">Editorial Standards →</a>
          <a href="../../terms.html" style="color: #818cf8; text-decoration: none;">Terms of Service →</a>
          <a href="../../privacy-policy.html" style="color: #818cf8; text-decoration: none;">Privacy Policy →</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span id="copyright-text">© 2026 Vidya Topper™. All rights reserved.</span>
        <span>Democratizing Free Education Across India 🇮🇳</span>
      </div>
    </div>
  </footer>

</body>
</html>`;
}

module.exports = { generateArticleHtml };
