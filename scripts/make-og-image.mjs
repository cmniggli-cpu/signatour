import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const W = 1200
const H = 630

// Premium dunkler Navy-Hintergrund mit dezentem Gold-Schein, Gold-Akzentlinie und Verkaufs-Claim.
const bg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F2238"/>
      <stop offset="55%" stop-color="#0C1B2E"/>
      <stop offset="100%" stop-color="#08131F"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="82%" r="60%">
      <stop offset="0%" stop-color="#C89630" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#C89630" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#navy)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- feiner Goldrahmen -->
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="14"
        fill="none" stroke="#C89630" stroke-opacity="0.45" stroke-width="2"/>

  <!-- Textblock rechts neben dem Logo -->
  <text x="472" y="228" font-family="Georgia, 'Times New Roman', serif" font-size="27"
        fill="#E5C080" letter-spacing="4">NIGGLI · 360° SIGNATURE TOURS</text>

  <text x="468" y="318" font-family="Georgia, 'Times New Roman', serif" font-size="74"
        font-weight="700" fill="#F7F5F0">360°-Touren,</text>
  <text x="468" y="402" font-family="Georgia, 'Times New Roman', serif" font-size="74"
        font-weight="700" font-style="italic" fill="#D4A550">die verkaufen.</text>

  <text x="470" y="468" font-family="Arial, Helvetica, sans-serif" font-size="25"
        fill="#B8C2CE">Premium-Rundgänge für Hotels, Spa, Gastro &amp; Immobilien.</text>

  <!-- Gold-Akzentlinie -->
  <rect x="472" y="498" width="64" height="3" fill="#C89630"/>

  <text x="472" y="542" font-family="Arial, Helvetica, sans-serif" font-size="24"
        fill="#E5C080" letter-spacing="1">Schweizer Anbieter · Einmalpreis statt Abo</text>
</svg>`

const logoSize = 360
const logo = await sharp(join(root, 'public', 'niggli-logo.png'))
  .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer()

await sharp(Buffer.from(bg))
  .composite([{ input: logo, left: 70, top: Math.round((H - logoSize) / 2) }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(join(root, 'public', 'og-image.jpg'))

console.log('og-image.jpg geschrieben')
