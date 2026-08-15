import type { BusinessData } from '@/types/business';
import amravatiGyms from './amravati-gyms';
import urbanSpoon from './urban-spoon';
import glowSalon from './glow-salon';

export const businesses: BusinessData[] = [...amravatiGyms, urbanSpoon, glowSalon];

export function getBusinessBySlug(slug: string): BusinessData | undefined {
  if (!slug) return undefined;
  
  // Decode %20 or spaces and sanitize
  const decoded = decodeURIComponent(slug).trim().toLowerCase();
  const normalized = decoded.replace(/[\s_]+/g, '-');
  const cleanDecoded = decoded.replace(/[^\w]/g, '');

  return businesses.find((b) => {
    const bSlug = b.slug.toLowerCase();
    const bName = b.name.toLowerCase();
    const bPhoneDigits = b.contact.phone ? b.contact.phone.replace(/\D/g, '') : '';
    const cleanBSlug = bSlug.replace(/[^\w]/g, '');
    const cleanBName = bName.replace(/[^\w]/g, '');
    const inputDigits = decoded.replace(/\D/g, '');

    return (
      bSlug === normalized ||
      bSlug === decoded ||
      cleanBSlug === cleanDecoded ||
      cleanBName === cleanDecoded ||
      bSlug.replace(/-/g, '') === normalized.replace(/-/g, '') ||
      (inputDigits.length >= 8 && bPhoneDigits.includes(inputDigits))
    );
  });
}

export function getBusinessSlugs(): string[] {
  return businesses.map((b) => b.slug);
}
