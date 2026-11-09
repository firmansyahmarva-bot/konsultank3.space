import fs from 'node:fs';
import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0B2545"/>
  <rect x="0" y="0" width="1200" height="16" fill="#F47C20"/>
  <rect x="100" y="140" width="160" height="44" rx="8" fill="#F47C20"/>
  <text x="180" y="169" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="800" fill="#0B2545" text-anchor="middle">KONSULTASI K3</text>
  <rect x="100" y="215" width="80" height="6" rx="3" fill="#F47C20"/>
  <text x="100" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="76" font-weight="900" fill="#ffffff" letter-spacing="-1">KonsultanK3</text>
  <text x="100" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="500" fill="#e2e8f0">Panduan &amp; Konsultasi K3 untuk Perusahaan Indonesia</text>
  <text x="100" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="#94a3b8">SMK3 PP 50/2012 &#8226; SMKK Konstruksi PUPR &#8226; HIRADC &#8226; P2K3</text>
  <rect x="0" y="618" width="1200" height="12" fill="#F47C20"/>
</svg>
`;

async function generate() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/og-default.png');
  console.log('Generated public/og-default.png (1200x630)');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
