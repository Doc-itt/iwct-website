/**
 * Resize and compress service bar photos for web (max 800px wide, EXIF auto-orient).
 * Run: node scripts/optimize-service-images.mjs
 */
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'public/images/services');
const assetDir = path.join(root, 'src/assets/services');

const files = [
  'exterior-repaint.jpg',
  'interior-repaint.jpg',
  'specialty-finishes.jpg',
  'outdoor-living-pool-deck.jpg',
];

const MAX_WIDTH = 800;

async function optimizeFile(filename) {
  const inputPath = path.join(sourceDir, filename);
  const pipeline = sharp(inputPath).rotate().resize(MAX_WIDTH, null, {
    withoutEnlargement: true,
    fit: 'inside',
  });

  const buffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const meta = await sharp(buffer).metadata();

  await mkdir(assetDir, { recursive: true });
  const assetPath = path.join(assetDir, filename);
  const publicPath = path.join(sourceDir, filename);

  await sharp(buffer).toFile(assetPath);
  await sharp(buffer).toFile(publicPath);

  const { size: bytes } = await stat(assetPath);

  console.log(
    `${filename}: ${meta.width}x${meta.height}, ${(bytes / 1024).toFixed(1)} KB`,
  );
}

for (const file of files) {
  await optimizeFile(file);
}

console.log('Done — optimized files in src/assets/services and public/images/services');
