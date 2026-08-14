export type BusinessType =
  | 'gym'
  | 'restaurant'
  | 'bar'
  | 'cafe'
  | 'salon'
  | 'clinic'
  | 'hotel'
  | 'realestate'
  | 'coaching'
  | 'agency'
  | 'shop'
  | 'photographer'
  | 'cardetailing'
  | 'spa'
  | 'local';

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
  linkedin?: string;
  tiktok?: string;
}

export interface ContactInfo {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  website?: string;
  googleMaps?: string;
  social: SocialLinks;
}

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  textMutedColor: string;
  headingFont?: string;
  bodyFont?: string;
  buttonRadius?: string;
  cardRadius?: string;
  darkMode?: boolean;
}

export interface HeroData {
  image: string;
  video?: string;
  badge?: string;
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
  align?: 'left' | 'center';
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}

export interface AboutData {
  image: string;
  heading: string;
  description: string;
  stats?: StatItem[];
  cta?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  price?: string;
  cta?: string;
}

export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  price?: string;
  cta?: string;
}

export interface FeaturedSection {
  title: string;
  subtitle?: string;
  items: FeaturedItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  description?: string;
  experience?: string;
  social?: SocialLinks;
}

export interface PlanItem {
  name: string;
  price: string;
  duration?: string;
  description?: string;
  features: string[];
  cta?: string;
  popular?: boolean;
}

export interface PlansSection {
  title: string;
  subtitle?: string;
  plans: PlanItem[];
}

export interface GalleryItem {
  image: string;
  category?: string;
  caption?: string;
}

export interface TestimonialItem {
  name: string;
  review: string;
  rating: number;
  image?: string;
  isDemo?: boolean;
}

export interface OpeningHour {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
}

export interface LocationSection {
  title?: string;
  subtitle?: string;
  mapEmbed?: string;
}

export interface CTASection {
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
}

export interface SectionConfig {
  hero: boolean;
  stats: boolean;
  about: boolean;
  services: boolean;
  featured: boolean;
  team: boolean;
  plans: boolean;
  gallery: boolean;
  testimonials: boolean;
  location: boolean;
  cta: boolean;
}

export interface BusinessData {
  id: string;
  slug: string;
  name: string;
  type: BusinessType;
  tagline: string;
  description: string;
  logoText: string;
  contact: ContactInfo;
  branding: Branding;
  hero: HeroData;
  stats: StatItem[];
  about: AboutData;
  services: ServiceItem[];
  featured?: FeaturedSection;
  team: TeamMember[];
  plans?: PlansSection;
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  openingHours: OpeningHour[];
  location: LocationSection;
  cta: CTASection;
  sections: SectionConfig;
  demoMode: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}
