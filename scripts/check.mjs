import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import * as cheerio from 'cheerio';

const PAGES = [
  {
    file: 'dist/index.html',
    url: 'https://konsultank3.space/',
    path: '/',
    keyword: 'konsultan k3',
    isHome: true
  },
  {
    file: 'dist/biaya-konsultan-k3/index.html',
    url: 'https://konsultank3.space/biaya-konsultan-k3/',
    path: '/biaya-konsultan-k3/',
    keyword: 'biaya jasa konsultan k3'
  },
  {
    file: 'dist/audit-smk3/index.html',
    url: 'https://konsultank3.space/audit-smk3/',
    path: '/audit-smk3/',
    keyword: 'persiapan audit smk3 perusahaan kecil'
  },
  {
    file: 'dist/syarat-sertifikasi-smk3/index.html',
    url: 'https://konsultank3.space/syarat-sertifikasi-smk3/',
    path: '/syarat-sertifikasi-smk3/',
    keyword: 'syarat sertifikat smk3 pp 50 tahun 2012'
  },
  {
    file: 'dist/dokumen-smk3/index.html',
    url: 'https://konsultank3.space/dokumen-smk3/',
    path: '/dokumen-smk3/',
    keyword: 'dokumen smk3 wajib'
  },
  {
    file: 'dist/membentuk-p2k3/index.html',
    url: 'https://konsultank3.space/membentuk-p2k3/',
    path: '/membentuk-p2k3/',
    keyword: 'cara membentuk p2k3'
  },
  {
    file: 'dist/smkk-konstruksi/index.html',
    url: 'https://konsultank3.space/smkk-konstruksi/',
    path: '/smkk-konstruksi/',
    keyword: 'smkk konstruksi kontraktor'
  },
  {
    file: 'dist/contoh-hiradc/index.html',
    url: 'https://konsultank3.space/contoh-hiradc/',
    path: '/contoh-hiradc/',
    keyword: 'contoh hiradc'
  },
  {
    file: 'dist/sanksi-tidak-menerapkan-k3/index.html',
    url: 'https://konsultank3.space/sanksi-tidak-menerapkan-k3/',
    path: '/sanksi-tidak-menerapkan-k3/',
    keyword: 'sanksi perusahaan tidak menerapkan k3'
  },
  {
    file: 'dist/konsultasi-gratis/index.html',
    url: 'https://konsultank3.space/konsultasi-gratis/',
    path: '/konsultasi-gratis/',
    keyword: 'konsultasi k3 gratis'
  }
];

const TARGET_SISTER_HOST = 'pelatihan-k3.co.id';

console.log('=== Step 1: Building the site with Astro ===');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (err) {
  console.error('Build failed!', err);
  process.exit(1);
}

console.log('\n=== Step 2: Validating 10 Pages ===');
let hasError = false;

for (const page of PAGES) {
  console.log(`\nValidating page: ${page.path} (${page.file})`);
  if (!fs.existsSync(page.file)) {
    console.error(`  [FAIL] File does not exist: ${page.file}`);
    hasError = true;
    continue;
  }

  const html = fs.readFileSync(page.file, 'utf-8');
  const $ = cheerio.load(html);

  // 1. Exactly one h1 containing target keyword
  const h1Elements = $('h1');
  if (h1Elements.length !== 1) {
    console.error(`  [FAIL] Expected exactly 1 <h1>, found ${h1Elements.length}`);
    hasError = true;
  } else {
    const h1Text = h1Elements.text().trim();
    if (!h1Text.toLowerCase().includes(page.keyword.toLowerCase())) {
      console.error(`  [FAIL] <h1> "${h1Text}" does not contain keyword "${page.keyword}"`);
      hasError = true;
    } else {
      console.log(`  [PASS] <h1> contains target keyword: "${h1Text}"`);
    }
  }

  // 2. Title <= 60 chars
  const title = $('title').text().trim();
  if (!title) {
    console.error('  [FAIL] Title is missing');
    hasError = true;
  } else if (title.length > 60) {
    console.error(`  [FAIL] Title length (${title.length}) exceeds 60 chars: "${title}"`);
    hasError = true;
  } else {
    console.log(`  [PASS] Title length ${title.length} <= 60: "${title}"`);
  }

  // 3. Meta description <= 160 chars
  const metaDesc = $('meta[name="description"]').attr('content')?.trim() || '';
  if (!metaDesc) {
    console.error('  [FAIL] Meta description is missing');
    hasError = true;
  } else if (metaDesc.length > 160) {
    console.error(`  [FAIL] Meta description length (${metaDesc.length}) exceeds 160 chars`);
    hasError = true;
  } else {
    console.log(`  [PASS] Meta description length ${metaDesc.length} <= 160`);
  }

  // 4. Canonical URL present
  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical) {
    console.error('  [FAIL] Canonical link missing');
    hasError = true;
  } else if (canonical !== page.url) {
    console.error(`  [FAIL] Canonical URL "${canonical}" does not match expected "${page.url}"`);
    hasError = true;
  } else {
    console.log(`  [PASS] Canonical link correct: ${canonical}`);
  }

  // 5. JSON-LD parses and contains required schemas
  const ldJsonScripts = $('script[type="application/ld+json"]');
  let hasBreadcrumbs = false;
  let hasFaq = false;
  let hasOrg = false;

  ldJsonScripts.each((_, el) => {
    try {
      const raw = $(el).html();
      const parsed = JSON.parse(raw);
      if (parsed['@type'] === 'BreadcrumbList') hasBreadcrumbs = true;
      if (parsed['@type'] === 'FAQPage') hasFaq = true;
      if (parsed['@type'] === 'Organization') hasOrg = true;
    } catch (e) {
      console.error('  [FAIL] Malformed JSON-LD script tag', e);
      hasError = true;
    }
  });

  if (!hasBreadcrumbs) {
    console.error('  [FAIL] BreadcrumbList JSON-LD missing');
    hasError = true;
  } else {
    console.log('  [PASS] BreadcrumbList JSON-LD found');
  }

  if (!hasFaq) {
    console.error('  [FAIL] FAQPage JSON-LD missing');
    hasError = true;
  } else {
    console.log('  [PASS] FAQPage JSON-LD found');
  }

  if (page.isHome && !hasOrg) {
    console.error('  [FAIL] Organization JSON-LD missing on homepage');
    hasError = true;
  } else if (page.isHome) {
    console.log('  [PASS] Organization JSON-LD found on homepage');
  }

  // 6. 3+ internal links to other pillar pages with descriptive anchors
  const mainEl = $('main');
  const internalLinks = [];
  mainEl.find('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    const anchorText = $(el).text().trim();
    // Check if points to any of the 10 pages (different from this page)
    const matchingPage = PAGES.find(p => (href === p.path || href === p.url || href === p.path.slice(0, -1)) && p.path !== page.path);
    if (matchingPage && anchorText.length > 2) {
      internalLinks.push({ href, anchorText });
    }
  });

  if (internalLinks.length < 3) {
    console.error(`  [FAIL] Found only ${internalLinks.length} internal links to other pillars (minimum 3 required)`);
    hasError = true;
  } else {
    console.log(`  [PASS] Found ${internalLinks.length} descriptive internal pillar links`);
  }

  // 7. Exactly ONE contextual outbound link to sister site
  const sisterLinks = [];
  mainEl.find('a[href*="' + TARGET_SISTER_HOST + '"]').each((_, el) => {
    sisterLinks.push({
      href: $(el).attr('href'),
      text: $(el).text().trim()
    });
  });

  // Also check if any sister links exist outside main (e.g. footer/nav)
  const allSisterLinks = [];
  $('a[href*="' + TARGET_SISTER_HOST + '"]').each((_, el) => {
    allSisterLinks.push({
      href: $(el).attr('href'),
      text: $(el).text().trim()
    });
  });

  if (sisterLinks.length !== 1 || allSisterLinks.length !== 1) {
    console.error(`  [FAIL] Expected exactly 1 sister-site link on page, found in main: ${sisterLinks.length}, total: ${allSisterLinks.length}`);
    hasError = true;
  } else {
    console.log(`  [PASS] Exactly 1 sister-site link found: "${sisterLinks[0].text}" -> ${sisterLinks[0].href}`);
  }

  // 8. Word count >= 1200
  // Clean main text: remove script, style, noscript, svg
  const clone = $('main').clone();
  clone.find('script, style, noscript, svg, form').remove();
  const rawText = clone.text().replace(/\s+/g, ' ').trim();
  const words = rawText.split(' ').filter(w => w.length > 0);
  const wordCount = words.length;

  if (wordCount < 1200) {
    console.error(`  [FAIL] Word count is ${wordCount}, which is less than 1200 words`);
    hasError = true;
  } else {
    console.log(`  [PASS] Word count is ${wordCount} (>= 1200 words)`);
  }
}

console.log('\n=== Step 3: Checking sitemap.xml and robots.txt ===');
const sitemapFile = 'dist/sitemap.xml';
if (!fs.existsSync(sitemapFile)) {
  console.error('[FAIL] dist/sitemap.xml does not exist');
  hasError = true;
} else {
  const sitemapContent = fs.readFileSync(sitemapFile, 'utf-8');
  for (const page of PAGES) {
    if (!sitemapContent.includes(page.url)) {
      console.error(`  [FAIL] Sitemap missing URL: ${page.url}`);
      hasError = true;
    }
  }
  console.log('  [PASS] All 10 URLs are present in sitemap.xml');
}

const robotsFile = 'dist/robots.txt';
if (!fs.existsSync(robotsFile)) {
  console.error('[FAIL] dist/robots.txt does not exist');
  hasError = true;
} else {
  const robotsContent = fs.readFileSync(robotsFile, 'utf-8');
  if (!robotsContent.includes('sitemap.xml')) {
    console.error('  [FAIL] robots.txt does not reference sitemap.xml');
    hasError = true;
  } else {
    console.log('  [PASS] robots.txt references sitemap.xml');
  }
}

const error404File = 'dist/404.html';
if (!fs.existsSync(error404File)) {
  console.error('[FAIL] dist/404.html does not exist');
  hasError = true;
} else {
  console.log('  [PASS] dist/404.html exists');
}

console.log('\n=== Step 4: Scanning dist/ for lorem or TODO ===');
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.xml') || entry.name.endsWith('.txt'))) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (/lorem\s+ipsum/i.test(content) || /\btodo\b/i.test(content)) {
        console.error(`  [FAIL] Prohibited text ("lorem ipsum" or "TODO") found in ${fullPath}`);
        hasError = true;
      }
    }
  }
}

scanDir('dist');

if (hasError) {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
} else {
  console.log('\n>>> ALL CHECKS PASSED SUCCESSFULLY! <<<');
  process.exit(0);
}
