const fs = require('fs');
const path = require('path');

const dataContent = fs.readFileSync(path.join(__dirname, 'src', 'data.js'), 'utf8')
  .replace(/export\s+const\s+/g, 'const ');

const appContent = fs.readFileSync(path.join(__dirname, 'src', 'app.js'), 'utf8')
  .replace(/import\s+\{[\s\S]*?\}\s*from\s+['"].*?['"];?/g, '')
  .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
  .replace(/export\s+function\s+/g, 'function ')
  .replace(/export\s+class\s+/g, 'class ')
  .replace(/export\s+\{[^}]*\};?/g, '');

const bundledCode = `// Standalone WTI Application & Data Bundle
(function() {
'use strict';
${dataContent}

${appContent}
})();
`;

fs.writeFileSync(path.join(__dirname, 'src', 'bundle.js'), bundledCode);
const distSrc = path.join(__dirname, 'dist', 'src');
if (!fs.existsSync(distSrc)) fs.mkdirSync(distSrc, { recursive: true });
fs.writeFileSync(path.join(distSrc, 'bundle.js'), bundledCode);
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(__dirname, 'dist', 'index.html'));
fs.copyFileSync(path.join(__dirname, 'style.css'), path.join(__dirname, 'dist', 'style.css'));
const logoSrc = path.join(__dirname, 'wti-logo.png');
if (fs.existsSync(logoSrc)) fs.copyFileSync(logoSrc, path.join(__dirname, 'dist', 'wti-logo.png'));
console.log('✅ Bundle rebuilt and dist/ updated!');
