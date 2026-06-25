import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { writeFileSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const logoPath = join(root, 'public', 'niggli-logo.png')

// Quadratisches Icon: Navy-Hintergrund (CD) mit zentriertem Logo, damit das
// goldene Emblem im Browser-Tab klar sichtbar ist (statt goldener Linien auf
// transparentem Grund, die auf hellen Tabs verschwinden).
async function iconBuffer(size) {
  const pad = Math.round(size * 0.08)
  const inner = size - pad * 2
  const logo = await sharp(logoPath)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()

  const radius = Math.round(size * 0.18)
  const bg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#0C1B2E"/>
  </svg>`

  return sharp(Buffer.from(bg))
    .composite([{ input: logo, left: pad, top: pad }])
    .png()
    .toBuffer()
}

// PNG-Buffer in eine ICO-Datei verpacken (PNG-in-ICO, von allen modernen Browsern unterstützt).
function pngsToIco(entries) {
  const count = entries.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type = icon
  header.writeUInt16LE(count, 4)

  const dir = Buffer.alloc(16 * count)
  let offset = 6 + 16 * count
  const dataParts = []

  entries.forEach((e, i) => {
    const base = i * 16
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, base + 0) // width (0 = 256)
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, base + 1) // height
    dir.writeUInt8(0, base + 2) // palette
    dir.writeUInt8(0, base + 3) // reserved
    dir.writeUInt16LE(1, base + 4) // color planes
    dir.writeUInt16LE(32, base + 6) // bits per pixel
    dir.writeUInt32LE(e.buf.length, base + 8) // size of image data
    dir.writeUInt32LE(offset, base + 12) // offset
    offset += e.buf.length
    dataParts.push(e.buf)
  })

  return Buffer.concat([header, dir, ...dataParts])
}

const sizes = [16, 32, 48, 256]
const entries = []
for (const size of sizes) {
  entries.push({ size, buf: await iconBuffer(size) })
}
writeFileSync(join(root, 'app', 'favicon.ico'), pngsToIco(entries))
console.log('app/favicon.ico geschrieben (', sizes.join(', '), ')')

// Moderne Icons für hochauflösende Tabs und iOS-Homescreen
writeFileSync(join(root, 'app', 'icon.png'), await iconBuffer(512))
writeFileSync(join(root, 'app', 'apple-icon.png'), await iconBuffer(180))
console.log('app/icon.png + app/apple-icon.png geschrieben')
