import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeMetaMap, DOMAIN } from '../src/routeMeta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('🚀 Starting Qubere SSG Prerendering script...');

// Read base template
const templatePath = path.resolve(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('❌ Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

// Generate static HTML for each route
for (const [routePath, meta] of Object.entries(routeMetaMap)) {
  let html = baseTemplate;

  // 1. Replace Title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${meta.title}</title>`
  );

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // 3. Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // 4. Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );

  // 5. Replace / Inject JSON-LD
  const schemaJson = JSON.stringify(meta.schema, null, 2);
  const scriptTag = `<script type="application/ld+json">\n${schemaJson}\n    </script>`;
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    scriptTag
  );

  // Determine output directory & file path
  let targetDir = distDir;
  let targetFile = path.resolve(distDir, 'index.html');

  if (routePath !== '/') {
    targetDir = path.resolve(distDir, routePath.replace(/^\//, ''));
    fs.mkdirSync(targetDir, { recursive: true });
    targetFile = path.resolve(targetDir, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`  ✓ Pre-rendered: ${routePath} -> ${path.relative(rootDir, targetFile)}`);
}

// Generate RSS Feed (feed.xml)
console.log('📡 Generating RSS 2.0 Feed...');
const blogRoutes = Object.entries(routeMetaMap).filter(([p]) => p.startsWith('/blog/'));

const rssItems = blogRoutes.map(([routePath, meta]) => {
  return `    <item>
      <title><![CDATA[${meta.title}]]></title>
      <link>${meta.canonical}</link>
      <guid>${meta.canonical}</guid>
      <description><![CDATA[${meta.description}]]></description>
      <pubDate>${new Date(meta.publishedDate || '2026-08-05').toUTCString()}</pubDate>
      <author>${Array.isArray(meta.authors) ? meta.authors.join(', ') : meta.authors}</author>
    </item>`;
}).join('\n');

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Qubere Engineering &amp; Research Blog</title>
    <link>${DOMAIN}/blog</link>
    <description>Technical whitepapers, trade knowledge graph research, and regulatory AI engineering breakdowns from Qubere.</description>
    <language>en-us</language>
    <atom:link href="${DOMAIN}/feed.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

fs.writeFileSync(path.resolve(distDir, 'feed.xml'), rssXml, 'utf8');
fs.writeFileSync(path.resolve(rootDir, 'public/feed.xml'), rssXml, 'utf8');
console.log('  ✓ Generated: dist/feed.xml and public/feed.xml');

console.log('🎉 SSG Prerendering complete!');
