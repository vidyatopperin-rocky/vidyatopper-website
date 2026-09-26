const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
let totalErrors = 0;

console.log('--- 1. Checking Policy & Core Pages ---');
const corePages = [
  'index.html',
  'about.html',
  'contact.html',
  'privacy-policy.html',
  'terms.html',
  'refund.html',
  'disclaimer.html',
  'editorial-policy.html',
  '404.html',
  'study-materials/index.html'
];

corePages.forEach(file => {
  const p = path.join(baseDir, file);
  if (!fs.existsSync(p)) {
    console.error('❌ Missing core file:', file);
    totalErrors++;
  } else {
    const html = fs.readFileSync(p, 'utf8');
    if (!html.includes('ca-pub-8779731071171821')) {
      console.error('❌ Missing AdSense publisher tag in:', file);
      totalErrors++;
    }
    if (!html.includes('rel="canonical"') && !file.includes('404')) {
      console.error('❌ Missing canonical tag in:', file);
      totalErrors++;
    }
  }
});
console.log(`Core pages verified: ${corePages.length} checked.`);

console.log('\n--- 2. Checking Study Materials Hub Links ---');
const hubHtml = fs.readFileSync(path.join(baseDir, 'study-materials', 'index.html'), 'utf8');
const hubLinkRegex = /href="([a-z0-9_\-\/]+\.html)"/g;
let hubMatch;
let hubMissing = 0;
let hubChecked = 0;

while ((hubMatch = hubLinkRegex.exec(hubHtml)) !== null) {
  const relPath = hubMatch[1];
  const fullPath = path.resolve(baseDir, 'study-materials', relPath);
  hubChecked++;
  if (!fs.existsSync(fullPath)) {
    console.error('❌ Missing from hub:', relPath, '->', fullPath);
    hubMissing++;
    totalErrors++;
  }
}
console.log(`Checked ${hubChecked} links in study-materials/index.html. Missing: ${hubMissing}`);

console.log('\n--- 3. Checking Study Links in index.html ---');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
let idxMissing = 0;
let idxChecked = 0;
const idxRegex = /href="(study-materials\/[a-z0-9_\-\/]+\.html)"/g;
let idxMatch;
while ((idxMatch = idxRegex.exec(indexHtml)) !== null) {
  const relPath = idxMatch[1];
  const fullPath = path.resolve(baseDir, relPath);
  idxChecked++;
  if (!fs.existsSync(fullPath)) {
    console.error('❌ Missing from index.html:', relPath, '->', fullPath);
    idxMissing++;
    totalErrors++;
  }
}
console.log(`Checked ${idxChecked} study links in index.html. Missing: ${idxMissing}`);

console.log('\n--- 4. Checking Images in index.html ---');
let imgMissing = 0;
let imgChecked = 0;
const imgRegex = /src="(assets\/images\/[^"]+)"/g;
let imgMatch;
while ((imgMatch = imgRegex.exec(indexHtml)) !== null) {
  const relPath = imgMatch[1];
  const fullPath = path.resolve(baseDir, relPath);
  imgChecked++;
  if (!fs.existsSync(fullPath)) {
    console.error('❌ Missing image in index:', relPath, '->', fullPath);
    imgMissing++;
    totalErrors++;
  }
}
console.log(`Checked ${imgChecked} images in index.html. Missing: ${imgMissing}`);

console.log('\n--- 5. Checking All 54 Study Material HTML Files ---');
const categories = ['science', 'maths', 'social-science', 'hindi', 'state-boards', 'class-12', 'exam-tips'];
let totalArticles = 0;
let articlesWithAdSense = 0;

categories.forEach(cat => {
  const catDir = path.join(baseDir, 'study-materials', cat);
  if (fs.existsSync(catDir)) {
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.html'));
    files.forEach(f => {
      totalArticles++;
      const p = path.join(catDir, f);
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes('ca-pub-8779731071171821')) {
        articlesWithAdSense++;
      } else {
        console.error('❌ Article missing AdSense tag:', `${cat}/${f}`);
        totalErrors++;
      }
    });
  }
});
console.log(`Verified ${totalArticles} articles. Articles with AdSense tag: ${articlesWithAdSense}/${totalArticles}`);

console.log('\n--- 6. Checking robots.txt and ads.txt ---');
const adsTxtPath = path.join(baseDir, 'ads.txt');
if (fs.existsSync(adsTxtPath)) {
  const adsContent = fs.readFileSync(adsTxtPath, 'utf8');
  if (adsContent.includes('pub-8779731071171821')) {
    console.log('✅ ads.txt contains publisher ID pub-8779731071171821');
  } else {
    console.error('❌ ads.txt missing publisher ID pub-8779731071171821');
    totalErrors++;
  }
} else {
  console.error('❌ ads.txt not found!');
  totalErrors++;
}

const robotsTxtPath = path.join(baseDir, 'robots.txt');
if (fs.existsSync(robotsTxtPath)) {
  const robotsContent = fs.readFileSync(robotsTxtPath, 'utf8');
  if (robotsContent.includes('Mediapartners-Google') && robotsContent.includes('sitemap.xml')) {
    console.log('✅ robots.txt allows Mediapartners-Google and specifies sitemap.xml');
  } else {
    console.error('❌ robots.txt incomplete!');
    totalErrors++;
  }
} else {
  console.error('❌ robots.txt not found!');
  totalErrors++;
}

console.log('\n--- 7. Checking sitemap.xml URLs against filesystem ---');
const sitemapPath = path.join(baseDir, 'sitemap.xml');
let sitemapMissing = 0;
let sitemapCount = 0;
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>https:\/\/vidyatopper\.com\/([^<]*)<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(sitemapContent)) !== null) {
    sitemapCount++;
    let urlPath = locMatch[1];
    let diskPath;
    if (urlPath === '' || urlPath === '/') {
      diskPath = path.join(baseDir, 'index.html');
    } else if (urlPath.endsWith('/')) {
      diskPath = path.join(baseDir, urlPath, 'index.html');
    } else {
      diskPath = path.join(baseDir, urlPath);
    }

    if (!fs.existsSync(diskPath)) {
      console.error('❌ Sitemap URL not found on disk:', locMatch[0], '->', diskPath);
      sitemapMissing++;
      totalErrors++;
    }
  }
}
console.log(`Checked ${sitemapCount} URLs in sitemap.xml. Missing on disk: ${sitemapMissing}`);

console.log('\n=======================================');
if (totalErrors === 0) {
  console.log('🏆 100% COMPLETE: ALL CHECKS PASSED WITH ZERO ERRORS!');
  console.log('Ready for Google AdSense review with maximum confidence.');
} else {
  console.error(`💥 FAILED: Found ${totalErrors} issue(s) that need fixing.`);
  process.exit(1);
}
