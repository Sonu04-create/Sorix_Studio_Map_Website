import { useEffect } from 'react';
import type { Branding } from '@/types/business';

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

export function applyBranding(branding: Branding) {
  const root = document.documentElement;
  root.style.setProperty('--brand-primary', branding.primaryColor);
  root.style.setProperty('--brand-primary-rgb', hexToRgb(branding.primaryColor));
  root.style.setProperty('--brand-secondary', branding.secondaryColor);
  root.style.setProperty('--brand-secondary-rgb', hexToRgb(branding.secondaryColor));
  root.style.setProperty('--brand-accent', branding.accentColor);
  root.style.setProperty('--brand-accent-rgb', hexToRgb(branding.accentColor));
  root.style.setProperty('--brand-bg', branding.backgroundColor);
  root.style.setProperty('--brand-surface', branding.surfaceColor);
  root.style.setProperty('--brand-text', branding.textColor);
  root.style.setProperty('--brand-text-muted', branding.textMutedColor);
  root.style.setProperty('--brand-btn-radius', branding.buttonRadius ?? '8px');
  root.style.setProperty('--brand-card-radius', branding.cardRadius ?? '12px');
  if (branding.headingFont) {
    root.style.setProperty('--brand-heading-font', branding.headingFont);
  }
  if (branding.bodyFont) {
    root.style.setProperty('--brand-body-font', branding.bodyFont);
  }
  root.style.colorScheme = branding.darkMode ? 'dark' : 'light';
}

export function useBranding(branding: Branding) {
  useEffect(() => {
    applyBranding(branding);
  }, [branding]);
}
