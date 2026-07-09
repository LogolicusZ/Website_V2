import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const BLOG_DIR = new URL("../static/assets/img/blog/", import.meta.url)
  .pathname;

const TO_CONVERT = [
  "Gehirn-article/Gehirn1.jpeg",
  "Gehirn-article/Gehirn2.jpeg",
  "Gehirn-article/Gehirn13.jpg",
  "noodle/noodle7.jpg",
  "noodle/noodle8.jpg",
  "noodle/noodle16.jpg",
  "noodle/noodle18.jpg",
  "protagonist-article/protagonist-1.jpg",
  "protagonist-article/protagonist-2.jpg",
  "protagonist-article/protagonist-4.jpg",
  "protagonist-article/protagonist-5.jpg",
  "protagonist-article/protagonist-12.jpg",
  "protagonist-article/protagonist-13.jpg",
  "protagonist-article/protagonist-14.jpg",
  "rascals/MTNU-1.jpeg",
  "rascals/MTNU-2.jpeg",
  "rascals/MTNU-5.jpeg",
  "sixtyfive-article/SixtyFive3.jpg",
  "sixtyfive-article/SixtyFive4.jpg",
  "sixtyfive-article/SixtyFive6.jpg",
  "spyder-article/Spyder5.jpeg",
  "spyder-article/Spyder6.jpg",
  "spyder-article/car1.jpg",
];

for (const rel of TO_CONVERT) {
  const src = path.join(BLOG_DIR, rel);
  const dest = src.replace(/\.(jpe?g)$/i, ".avif");
  const image = sharp(src);
  const { width, height } = await image.metadata();
  await image.avif({ quality: 60, effort: 4 }).toFile(dest);
  console.log(`${rel} -> ${path.basename(dest)} (${width}x${height})`);
}
