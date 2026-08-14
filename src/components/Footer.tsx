import { Instagram, Facebook, Youtube, Twitter, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import type { BusinessData } from '@/types/business';

interface FooterProps {
  business: BusinessData;
}

export default function Footer({ business }: FooterProps) {
  const { contact, name, description, logoText, tagline } = business;

  const socials = [
    { icon: Instagram, href: contact.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: contact.social.facebook, label: 'Facebook' },
    { icon: Youtube, href: contact.social.youtube, label: 'YouTube' },
    { icon: Twitter, href: contact.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: contact.social.linkedin, label: 'LinkedIn' },
  ].filter((s) => s.href);

  const navLinks = [
    { label: 'About', href: '#about', show: business.sections.about },
    { label: 'Services', href: '#services', show: business.sections.services },
    { label: 'Team', href: '#team', show: business.sections.team },
    { label: 'Gallery', href: '#gallery', show: business.sections.gallery },
    { label: 'Contact', href: '#location', show: business.sections.location },
  ].filter((l) => l.show);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[var(--brand-surface)] pt-16 pb-8" style={{ backgroundColor: 'var(--brand-bg)' }}>
      <div className="noise-overlay" />
      <div className="container-mx container-px relative">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }} className="group flex items-center gap-2 text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:rotate-12" style={{ backgroundColor: 'var(--brand-primary)' }}>
                {logoText.charAt(0)}
              </span>
              <span className="transition-colors group-hover:text-[var(--brand-primary)]" style={{ fontFamily: 'var(--brand-heading-font)' }}>{logoText}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{description}</p>
            <p className="mt-3 text-sm italic text-primary">{tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-[var(--brand-primary)]"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              {contact.address && (
                <li className="flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{contact.address}, {contact.city}, {contact.state}</span>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone}`} className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--brand-primary)]">
                    <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--brand-primary)]">
                    <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--brand-surface)] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.length > 0 && (
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full surface-card text-muted transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)]"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full surface-card text-muted transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-[var(--brand-primary)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Sorix Studio Watermark Credits Footer Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-muted font-mono">
          <span>Architected & Built by </span>
          <a
            href="/"
            className="font-bold text-red-400 hover:text-red-300 underline"
          >
            Sorix Studio
          </a>
          <span> • Founder & Lead Architect: <strong>Sonu M</strong></span>
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-3 text-[11px]">
            <a href="https://wa.me/918152044640" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              WhatsApp: +91 81520 44640
            </a>
            <span>•</span>
            <a href="https://www.instagram.com/sorixstudio.in/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
              IG: @sorixstudio.in
            </a>
            <span>•</span>
            <a href="mailto:sorixm149@gmail.com" className="text-amber-400 hover:underline">
              Email: sorixm149@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
