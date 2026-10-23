/**
 * Safely resolves the public URL of an asset located in the public directory,
 * respecting Vite's base path for GitHub Pages and local development.
 *
 * Examples:
 *   getPublicAssetUrl('images/hero-salon-floor.webp')
 *   -> '/StyleHubLadiesBeauty-Salon/images/hero-salon-floor.webp' (in production)
 *   -> '/images/hero-salon-floor.webp' (in local dev)
 */
export function getPublicAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
