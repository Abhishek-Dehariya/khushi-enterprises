/**
 * Development image placeholders.
 *
 * Collects every "/images/..." path referenced in src/ and, for any path that
 * has no file yet, writes a flat navy placeholder PNG. Real company photographs
 * are never touched — existing files are skipped.
 *
 * Usage:  node scripts/generate-image-placeholders.mjs
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { deflateSync } from "node:zlib";

const root = resolve(import.meta.dirname, "..");
const scanRoots = [join(root, "src")];
const publicRoot = join(root, "public");
const imagePattern = /["'`](\/images\/[^"'`\s]+\.(?:png|jpe?g|webp|avif))["'`]/g;

/* ------------------------------------------------------------------ PNG ---- */

const crcTable = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buffer) {
  let crc = -1;
  for (let i = 0; i < buffer.length; i += 1) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buffer[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeAndData = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([length, typeAndData, crc]);
}

function encodePng(width, height, pixelAt) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  let offset = 0;

  for (let y = 0; y < height; y += 1) {
    raw[offset] = 0; // filter: none
    offset += 1;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b] = pixelAt(x, y);
      raw[offset] = r;
      raw[offset + 1] = g;
      raw[offset + 2] = b;
      offset += 3;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: truecolour

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ------------------------------------------------------- placeholder art ---- */

const BASE = [22, 38, 62];
const GRID = [32, 54, 86];
const BAND = [40, 62, 96];

/**
 * Flat navy field with a faint 80px technical grid and a diagonal band — reads
 * clearly as "image goes here" and cannot be mistaken for a photograph.
 */
function placeholderPixel(x, y) {
  const inGrid = x % 80 === 0 || y % 80 === 0;
  const inBand = (x + y) % 760 < 70;
  if (inGrid) return GRID;
  if (inBand) return BAND;
  return BASE;
}

/* --------------------------------------------------------------- runner ---- */

function collectFiles(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectFiles(full, found);
    else if (/\.(tsx?|jsx?)$/.test(full)) found.push(full);
  }
  return found;
}

const referenced = new Set();
for (const scanRoot of scanRoots) {
  for (const file of collectFiles(scanRoot)) {
    const contents = readFileSync(file, "utf8");
    for (const match of contents.matchAll(imagePattern)) referenced.add(match[1]);
  }
}

const paths = [...referenced].sort();
const created = [];
const skipped = [];

for (const publicPath of paths) {
  const target = join(publicRoot, publicPath);
  if (existsSync(target)) {
    skipped.push(publicPath);
    continue;
  }
  mkdirSync(dirname(target), { recursive: true });

  const isHero = publicPath.includes("/hero/");
  const width = isHero ? 2400 : 1600;
  const height = isHero ? 1350 : 1000;

  writeFileSync(target, encodePng(width, height, placeholderPixel));
  created.push(`${publicPath} (${width}×${height})`);
}

console.log(`Referenced image paths: ${paths.length}`);
console.log(`\nCreated ${created.length} placeholder file(s):`);
for (const item of created) console.log(`  + ${item}`);
if (skipped.length) {
  console.log(`\nKept ${skipped.length} existing file(s) untouched:`);
  for (const item of skipped) console.log(`  = ${item}`);
}

const unknownExt = paths.filter((p) => ![".png"].includes(extname(p)));
if (unknownExt.length) {
  console.log(
    `\nNote: ${unknownExt.length} path(s) use a non-PNG extension; placeholders are written as PNG data.`,
  );
}
