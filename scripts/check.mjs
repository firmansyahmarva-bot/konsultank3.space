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
let hasError = false;

console.log('=== Step 1: Building the site with Astro ===');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (err) {
  console.error('Build failed!', err);
  process.exit(1);
}

console.log('\n=== Step 2: Validating 10 Pages ===');
const paragraphMap = new Map();

for (const page of PAGES) {
  console.log(`\nValidating page: ${page.path} (${page.file})`);
  if (!fs.existsSync(page.file)) {
    console.error(`  [FAIL] File does not exist: ${page.file}`);
    hasError = true;
    continue;
  }

  const html = fs.readFileSync(page.file, 'utf-8');
  const $ = cheerio.load(html);

  // 1. Exactly one h1 containing target keyword & no h1 contains "Resmi"
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

    if (/resmi/i.test(h1Text)) {
      console.error(`  [FAIL] <h1> contains "Resmi": "${h1Text}"`);
      hasError = true;
    } else {
      console.log(`  [PASS] <h1> does not contain "Resmi"`);
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
      if (parsed['@type'] === 'Organization') {
        hasOrg = true;
        // Check Organization fields
        if (parsed.name !== 'KonsultanK3') {
          console.error(`  [FAIL] Organization name is not "KonsultanK3": "${parsed.name}"`);
          hasError = true;
        }
        if (parsed.legalName !== 'PT. Bina Katiga Sejahtera') {
          console.error(`  [FAIL] Organization legalName is not "PT. Bina Katiga Sejahtera": "${parsed.legalName}"`);
          hasError = true;
        }
        if (!parsed.address || parsed.address.addressLocality !== 'Jakarta Selatan' || parsed.address.addressRegion !== 'DKI Jakarta' || parsed.address.addressCountry !== 'ID') {
          console.error(`  [FAIL] Organization address does not match PostalAddress requirements`);
          hasError = true;
        } else {
          console.log('  [PASS] Organization PostalAddress schema verified');
        }
      }
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

  // 9. Check WhatsApp links on page
  $('a[href*="wa.me"]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (!href.startsWith('https://wa.me/6281233367191')) {
      console.error(`  [FAIL] WhatsApp link does not start with https://wa.me/6281233367191: "${href}"`);
      hasError = true;
    }
    const match = href.match(/[?&]text=([^&]+)/);
    if (match) {
      const decoded = decodeURIComponent(match[1]).toLowerCase();
      if (decoded.includes('konsultank3') || decoded.includes('bina katiga')) {
        console.error(`  [FAIL] WhatsApp prefilled text contains brand or company name: "${decoded}"`);
        hasError = true;
      }
    }
  });

  // 10. Check Lead form action starts with https://formsubmit.co/
  $('form').each((_, el) => {
    const action = $(el).attr('action') || '';
    if (!action.startsWith('https://formsubmit.co/')) {
      console.error(`  [FAIL] Form action does not start with https://formsubmit.co/: "${action}"`);
      hasError = true;
    }
  });

  // 11. Footer contains "Pejaten Barat"
  const footerText = $('footer').text();
  if (!footerText.includes('Pejaten Barat')) {
    console.error(`  [FAIL] Footer on page ${page.path} does not contain "Pejaten Barat"`);
    hasError = true;
  } else {
    console.log(`  [PASS] Footer contains "Pejaten Barat"`);
  }

  // 12. Collect all <p> longer than 80 chars
  $('p').each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text.length > 80) {
      if (!paragraphMap.has(text)) {
        paragraphMap.set(text, new Set());
      }
      paragraphMap.get(text).add(page.path);
    }
  });
}

// Check paragraph duplicates > 80 chars
console.log('\n=== Checking Paragraph Uniqueness (> 80 chars) ===');
let dupesCount = 0;
for (const [text, pagesSet] of paragraphMap.entries()) {
  if (pagesSet.size > 1) {
    console.error(`  [FAIL] Duplicate paragraph (>80 chars) across [${Array.from(pagesSet).join(', ')}]:\n    "${text.slice(0, 90)}..."`);
    dupesCount++;
    hasError = true;
  }
}
if (dupesCount === 0) {
  console.log('  [PASS] No duplicate paragraph longer than 80 chars found across pages');
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

console.log('\n=== Step 4: Scanning dist/ for prohibited strings & mailto ===');
const FORBIDDEN_STRINGS = [
  '6281234567890',
  '81234567890',
  'api.konsultank3.space',
  'kontak@konsultank3.space'
];

function scanDist(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDist(fullPath);
    } else if (entry.isFile()) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      // Prohibited terms
      if (/lorem\s+ipsum/i.test(content) || /\btodo\b/i.test(content)) {
        console.error(`  [FAIL] Prohibited text ("lorem ipsum" or "TODO") found in ${fullPath}`);
        hasError = true;
      }

      // Check mailto:
      if (content.includes('mailto:')) {
        console.error(`  [FAIL] Prohibited "mailto:" link found in ${fullPath}`);
        hasError = true;
      }

      // Check forbidden strings
      for (const forbidden of FORBIDDEN_STRINGS) {
        if (content.includes(forbidden)) {
          console.error(`  [FAIL] Forbidden string "${forbidden}" found in ${fullPath}`);
          hasError = true;
        }
      }
    }
  }
}

scanDist('dist');
console.log('  [PASS] No prohibited strings or mailto links found in dist/');

console.log('\n=== Step 5: Checking git ls-files for dist/ ===');
try {
  const gitDist = execSync('git ls-files dist', { encoding: 'utf-8' }).trim();
  if (gitDist.length > 0) {
    console.error(`  [FAIL] git ls-files lists files under dist/:\n${gitDist}`);
    hasError = true;
  } else {
    console.log('  [PASS] git ls-files lists nothing under dist/');
  }
} catch (e) {
  console.error('  [FAIL] Failed to run git ls-files', e);
  hasError = true;
}

if (hasError) {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
} else {
  console.log('\n>>> ALL CHECKS PASSED SUCCESSFULLY! <<<');
  process.exit(0);
}
