import { useState, useMemo } from 'react';
import { Menu, X, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BusinessData } from '@/types/business';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavItem {
  label: string;
  href: string;
  key: string;
}

interface NavbarProps {
  business: BusinessData;
}

export default function Navbar({ business }: NavbarProps) {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(() => [
    { label: 'Home', href: '#home', key: 'home' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Services', href: '#services', key: 'services' },
    { label: 'Featured', href: '#featured', key: 'featured' },
    { label: 'Team', href: '#team', key: 'team' },
    { label: 'Plans', href: '#plans', key: 'plans' },
    { label: 'Gallery', href: '#gallery', key: 'gallery' },
    { label: 'Reviews', href: '#testimonials', key: 'testimonials' },
    { label: 'Contact', href: '#location', key: 'location' },
  ].filter((item) => {
    if (item.key === 'about') return business.sections.about;
    if (item.key === 'services') return business.sections.services;
    if (item.key === 'featured') return business.sections.featured;
    if (item.key === 'team') return business.sections.team;
    if (item.key === 'plans') return business.sections.plans;
    if (item.key === 'gallery') return business.sections.gallery;
    if (item.key === 'testimonials') return business.sections.testimonials;
    if (item.key === 'location') return business.sections.location;
    return true;
  }), [business.sections]);

  const sectionIds = navItems.map((n) => n.href.replace('#', ''));
  const active = useActiveSection(sectionIds);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 shadow-2xl backdrop-blur-xl'
          : 'py-5 bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'rgba(var(--brand-secondary-rgb), 0.85)' } : undefined}
    >
      <nav className="container-mx container-px flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Back to Main Home Button */}
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
            title="Return to Main Home Page"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Main Home</span>
          </Link>

          {/* Business Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--brand-heading-font)' }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:rotate-12"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              {business.logoText.charAt(0)}
            </span>
            <span className="transition-colors group-hover:text-[var(--brand-primary)]">{business.logoText}</span>
          </a>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                active === item.href.replace('#', '')
                  ? 'text-[var(--brand-text)]'
                  : 'text-muted hover:text-[var(--brand-text)]'
              }`}
            >
              {item.label}
              {active === item.href.replace('#', '') && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={business.contact.phone ? `tel:${business.contact.phone}` : '#contact'}
            className="btn-primary text-sm"
          >
            <Phone className="h-4 w-4" />
            {business.hero.primaryCta}
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="relative h-6 w-6">
            <span className={`absolute left-0 top-1 h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'top-3 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-5 h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'top-3 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-mx container-px mt-4">
          <div className="glass-card flex flex-col gap-1 rounded-2xl p-4">
            <Link
              to="/"
              className="rounded-lg px-4 py-3 text-sm font-bold text-red-400 bg-red-950/40 border border-red-500/30 flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>← Back to Sorix Studio Home</span>
            </Link>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-[var(--brand-surface)] hover:text-[var(--brand-text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={business.contact.phone ? `tel:${business.contact.phone}` : '#contact'}
              className="btn-primary mt-2 text-sm"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              {business.hero.primaryCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
