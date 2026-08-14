import type { BusinessData } from '@/types/business';
import ironHouse from './iron-house';
import urbanSpoon from './urban-spoon';
import glowSalon from './glow-salon';

export const businesses: BusinessData[] = [ironHouse, urbanSpoon, glowSalon];

export function getBusinessBySlug(slug: string): BusinessData | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getBusinessSlugs(): string[] {
  return businesses.map((b) => b.slug);
}
