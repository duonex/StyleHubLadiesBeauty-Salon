import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const DIST_DIR = path.resolve('dist');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

const compressibleExtensions = ['.html', '.js', '.css', '.svg', '.json', '.txt', '.xml'];

function compressAssets() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory does not exist!');
    return;
  }

  // Ensure 404.html exists for GitHub Pages SPA routing
  const indexPath = path.join(DIST_DIR, 'index.html');
  const notFoundPath = path.join(DIST_DIR, '404.html');
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Synchronized dist/404.html from dist/index.html for GitHub Pages SPA routing.');
  }

  const allFiles = getFiles(DIST_DIR);
  let totalOrig = 0;
  let totalGz = 0;
  let totalBr = 0;
  let count = 0;

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (compressibleExtensions.includes(ext) && !file.endsWith('.gz') && !file.endsWith('.br')) {
      const content = fs.readFileSync(file);
      totalOrig += content.length;

      // Gzip
      const gzipped = zlib.gzipSync(content, { level: 9 });
      fs.writeFileSync(`${file}.gz`, gzipped);
      totalGz += gzipped.length;

      // Brotli
      const brotlied = zlib.brotliCompressSync(content, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      });
      fs.writeFileSync(`${file}.br`, brotlied);
      totalBr += brotlied.length;
      count++;
    }
  }

  console.log(`\nCompressed ${count} assets for production static serving:`);
  console.log(`Original: ${(totalOrig / 1024).toFixed(1)} kB`);
  console.log(`Gzip:     ${(totalGz / 1024).toFixed(1)} kB (${((1 - totalGz / totalOrig) * 100).toFixed(1)}% reduction)`);
  console.log(`Brotli:   ${(totalBr / 1024).toFixed(1)} kB (${((1 - totalBr / totalOrig) * 100).toFixed(1)}% reduction)\n`);
}

compressAssets();
