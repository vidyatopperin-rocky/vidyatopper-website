const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const hubHtml = fs.readFileSync(path.join(baseDir, 'study-materials', 'index.html'), 'utf8');

const regex = /href="([a-z0-9_\-\/]+\.html)"/g;
let match;
let missing = 0;
let checked = 0;

while ((match = regex.exec(hubHtml)) !== null) {
  const relPath = match[1];
  const fullPath = path.resolve(baseDir, 'study-materials', relPath);
  checked++;
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING from hub:', relPath, '->', fullPath);
    missing++;
  }
}

console.log(`Checked ${checked} links in study-materials/index.html. Missing: ${missing}`);

// Check index.html links
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
let idxMissing = 0;
let idxChecked = 0;
const idxRegex = /href="(study-materials\/[a-z0-9_\-\/]+\.html)"/g;
while ((match = idxRegex.exec(indexHtml)) !== null) {
  const relPath = match[1];
  const fullPath = path.resolve(baseDir, relPath);
  idxChecked++;
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING from index:', relPath, '->', fullPath);
    idxMissing++;
  }
}

console.log(`Checked ${idxChecked} study links in index.html. Missing: ${idxMissing}`);

// Check screenshots in index.html
let imgMissing = 0;
let imgChecked = 0;
const imgRegex = /src="(assets\/images\/[^"]+)"/g;
while ((match = imgRegex.exec(indexHtml)) !== null) {
  const relPath = match[1];
  const fullPath = path.resolve(baseDir, relPath);
  imgChecked++;
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING image in index:', relPath, '->', fullPath);
    imgMissing++;
  }
}
console.log(`Checked ${imgChecked} images in index.html. Missing: ${imgMissing}`);

if (missing === 0 && idxMissing === 0 && imgMissing === 0) {
  console.log('✅ ALL LINKS AND IMAGES ARE 100% VALID AND VERIFIED!');
} else {
  process.exit(1);
}
