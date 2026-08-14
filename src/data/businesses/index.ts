import type { BusinessData } from '@/types/business';
import ironHouse from './iron-house';
import urbanSpoon from './urban-spoon';
import glowSalon from './glow-salon';

export const businesses: BusinessData[] = [ironHouse, urbanSpoon, glowSalon];

export function getBusinessBySlug(slug: string): BusinessData | undefined {
  if (!slug) return undefined;
  
  // Decode %20 or spaces and sanitize
  const decoded = decodeURIComponent(slug).trim().toLowerCase();
  const normalized = decoded.replace(/[\s_]+/g, '-');

  return businesses.find((b) => {
    const bSlug = b.slug.toLowerCase();
    return (
      bSlug === normalized ||
      bSlug === decoded ||
      bSlug.replace(/-/g, '') === normalized.replace(/-/g, '')
    );
  });
}

export function getBusinessSlugs(): string[] {
  return businesses.map((b) => b.slug);
}
