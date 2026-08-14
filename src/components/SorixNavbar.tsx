import { useState, useEffect } from 'react';
import { MessageSquare, Instagram, Mail, Menu, X, Sparkles, Code2, Phone } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

export default function SorixNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0809]/90 border-b border-red-500/20 backdrop-blur-xl py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-500 text-white font-black text-xl shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-mono tracking-tighter">SX</span>
              <div className="absolute -inset-1 rounded-xl bg-red-600/20 blur-sm group-hover:bg-red-600/40 transition-all -z-10" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                SORIX<span className="text-red-500">STUDIO</span>
              </span>
              <span className="block text-[10px] text-neutral-400 tracking-widest uppercase font-mono">
                Sonu M • Lead Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#hero" className="hover:text-red-400 transition-colors">
              Home
            </a>
            <a href="#architect" className="hover:text-red-400 transition-colors">
              Architect
            </a>
            <a href="#services" className="hover:text-red-400 transition-colors">
              Services
            </a>
            <a href="#templates" className="hover:text-red-400 transition-colors">
              Templates & Demos
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Direct Contact CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={sorixBrand.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 text-pink-400 transition-all hover:scale-105"
              title="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={sorixBrand.contact.emailLink}
              className="p-2 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-amber-400 transition-all hover:scale-105"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={sorixBrand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Sonu</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a0b] border-b border-red-500/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3 font-medium text-neutral-300 text-base">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-400 py-1 transition-colors"
            >
              Home
            </a>
            <a
              href="#architect"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-400 py-1 transition-colors"
            >
              Architect (Sonu M)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-400 py-1 transition-colors"
            >
              Services
            </a>
            <a
              href="#templates"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-400 py-1 transition-colors"
            >
              Templates & Demos
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-400 py-1 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href={sorixBrand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {sorixBrand.contact.whatsapp}</span>
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={sorixBrand.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 border border-white/10 text-pink-400 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{sorixBrand.contact.instagram}</span>
              </a>
              <a
                href={sorixBrand.contact.emailLink}
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 border border-white/10 text-amber-400 font-medium truncate"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">Email Sonu</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
