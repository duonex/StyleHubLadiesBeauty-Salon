import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import potrace from 'potrace';

const inputImagePath = 'C:/Users/admin/.gemini/antigravity-ide/brain/9d0012b6-f1af-464c-962e-cd560f8d5853/.user_uploaded/media_1791302956553.jpg';
const outputDir = 'c:/Users/admin/OneDrive/Documents/GitHub/Stylehubbeauty-salon/public';
const srcAssetsDir = 'c:/Users/admin/OneDrive/Documents/GitHub/Stylehubbeauty-salon/src/assets';

async function processLogo() {
  console.log('Reading input image...');
  const image = sharp(inputImagePath);
  const metadata = await image.metadata();
  console.log(`Dimensions: ${metadata.width}x${metadata.height}`);

  // Invert greyscale image so white shape becomes black (foreground) and black bg becomes white (background)
  const invertedBuffer = await image
    .greyscale()
    .negate() // invert: white becomes black, black becomes white
    .toBuffer();

  potrace.trace(invertedBuffer, {
    threshold: 128,
    color: 'currentColor',
    background: 'transparent',
    optCurve: true,
    optTolerance: 0.15,
    turdSize: 3,
    turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY
  }, async (err, svg) => {
    if (err) {
      console.error('Error tracing SVG:', err);
      return;
    }

    console.log('SVG traced successfully without bounding box!');

    // Extract path from svg
    const pathMatch = svg.match(/<path\s+d="([^"]+)"/);
    const pathData = pathMatch ? pathMatch[1] : '';

    // Create a standalone SVG with gradient support
    const goldGradientSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="shGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E7C4" />
      <stop offset="35%" stop-color="#DFC085" />
      <stop offset="70%" stop-color="#C5A059" />
      <stop offset="100%" stop-color="#9B783E" />
    </linearGradient>
    <linearGradient id="shGoldShimmer" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#DFC085" />
      <stop offset="50%" stop-color="#FFF3D6" />
      <stop offset="100%" stop-color="#C5A059" />
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#C5A059" flood-opacity="0.35" />
    </filter>
  </defs>
  <path d="${pathData}" fill="url(#shGoldGrad)" />
</svg>`;

    const cleanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%">
  <path d="${pathData}" fill="currentColor" />
</svg>`;

    fs.writeFileSync(path.join(outputDir, 'logo.svg'), goldGradientSvg);
    fs.writeFileSync(path.join(outputDir, 'logo-monochrome.svg'), cleanSvg);
    fs.writeFileSync(path.join(srcAssetsDir, 'logo.svg'), goldGradientSvg);

    // Create React component with the path embedded for instantaneous rendering without network requests
    const reactComponent = `import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'gold' | 'white' | 'dark' | 'current';
  showGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-10 h-10',
  size,
  variant = 'gold',
  showGlow = false,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  let fillValue = 'url(#shLogoGoldGradient)';
  if (variant === 'white') fillValue = '#FFFFFF';
  if (variant === 'dark') fillValue = '#121316';
  if (variant === 'current') fillValue = 'currentColor';

  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Style Hub Logo"
      role="img"
    >
      <defs>
        <linearGradient id="shLogoGoldGradient" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#F5E4BE" />
          <stop offset="30%" stopColor="#DFC085" />
          <stop offset="70%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#967132" />
        </linearGradient>
        {showGlow && (
          <filter id="shLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#C5A059" floodOpacity="0.45" />
          </filter>
        )}
      </defs>
      <path
        d="${pathData}"
        fill={fillValue}
        filter={showGlow ? 'url(#shLogoGlow)' : undefined}
      />
    </svg>
  );
};

export default Logo;
`;

    fs.writeFileSync('c:/Users/admin/OneDrive/Documents/GitHub/Stylehubbeauty-salon/src/components/common/Logo.tsx', reactComponent);

    // Generate high-res transparent PNGs
    const { data, info } = await sharp(inputImagePath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const channels = info.channels;

    const whiteTransparent = Buffer.alloc(width * height * 4);
    const goldTransparent = Buffer.alloc(width * height * 4);
    const darkTransparent = Buffer.alloc(width * height * 4);

    for (let i = 0; i < width * height; i++) {
      const r = data[i * channels];
      const g = data[i * channels + 1];
      const b = data[i * channels + 2];
      const lum = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

      let alpha = 0;
      if (lum > 22) {
        alpha = Math.min(255, Math.round(Math.pow((lum - 22) / (255 - 22), 1.05) * 255));
      }

      // White logo
      whiteTransparent[i * 4] = 255;
      whiteTransparent[i * 4 + 1] = 255;
      whiteTransparent[i * 4 + 2] = 255;
      whiteTransparent[i * 4 + 3] = alpha;

      // Gold logo with luxury metallic tonal gradient
      const y = Math.floor(i / width);
      const gradientFactor = y / height;
      const goldR = Math.round(230 - gradientFactor * (230 - 165));
      const goldG = Math.round(198 - gradientFactor * (198 - 125));
      const goldB = Math.round(140 - gradientFactor * (140 - 55));

      goldTransparent[i * 4] = goldR;
      goldTransparent[i * 4 + 1] = goldG;
      goldTransparent[i * 4 + 2] = goldB;
      goldTransparent[i * 4 + 3] = alpha;

      // Dark charcoal logo
      darkTransparent[i * 4] = 18;
      darkTransparent[i * 4 + 1] = 19;
      darkTransparent[i * 4 + 2] = 22;
      darkTransparent[i * 4 + 3] = alpha;
    }

    await sharp(whiteTransparent, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(outputDir, 'logo-white.png'));

    await sharp(goldTransparent, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(outputDir, 'logo-gold.png'));

    await sharp(goldTransparent, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(srcAssetsDir, 'logo-gold.png'));

    await sharp(darkTransparent, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(path.join(outputDir, 'logo-dark.png'));

    // Favicon SVG and PNG
    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1F24" />
      <stop offset="100%" stop-color="#0E0F12" />
    </linearGradient>
    <linearGradient id="goldFavicon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E4BE" />
      <stop offset="50%" stop-color="#DFC085" />
      <stop offset="100%" stop-color="#C5A059" />
    </linearGradient>
  </defs>
  <circle cx="512" cy="512" r="500" fill="url(#bgGrad)" stroke="#C5A059" stroke-width="16" />
  <g transform="scale(0.8) translate(128, 128)">
    <path d="${pathData}" fill="url(#goldFavicon)" />
  </g>
</svg>`;

    fs.writeFileSync(path.join(outputDir, 'favicon.svg'), faviconSvg);

    // Also render circular icon badge for apple-touch-icon / pwa / metadata
    const circleBadge = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18191E" />
      <stop offset="100%" stop-color="#0B0C0E" />
    </linearGradient>
    <linearGradient id="goldFavicon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E4BE" />
      <stop offset="50%" stop-color="#DFC085" />
      <stop offset="100%" stop-color="#C5A059" />
    </linearGradient>
  </defs>
  <circle cx="512" cy="512" r="500" fill="url(#bgGrad)" stroke="#C5A059" stroke-width="16" />
  <g transform="scale(0.82) translate(112, 112)">
    <path d="${pathData}" fill="url(#goldFavicon)" />
  </g>
</svg>`;

    await sharp(Buffer.from(circleBadge))
      .resize(192, 192)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    await sharp(Buffer.from(circleBadge))
      .resize(512, 512)
      .png()
      .toFile(path.join(outputDir, 'logo-badge-512.png'));

    console.log('All SVG and PNG assets created successfully!');
  });
}

processLogo().catch(console.error);
