import SorixNavbar from '@/components/SorixNavbar';
import SonuHero from '@/components/SonuHero';
import ArchitectAbout from '@/components/ArchitectAbout';
import ServicesSection from '@/components/ServicesSection';
import TemplateGallery from '@/components/TemplateGallery';
import ContactHub from '@/components/ContactHub';
import { sorixBrand } from '@/data/contactInfo';
import { ArrowUp, Instagram, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0a0809] text-white selection:bg-red-600 selection:text-white font-sans">
      {/* Sticky Main Header */}
      <SorixNavbar />

      <main>
        {/* Hero Section featuring Sonu M */}
        <SonuHero />

        {/* Architect Profile & Philosophy */}
        <ArchitectAbout />

        {/* Core Agency Services */}
        <ServicesSection />

        {/* Interactive Business Template Gallery */}
        <TemplateGallery />

        {/* Contact Hub & Form */}
        <ContactHub />
      </main>

      {/* Main Home Footer */}
      <footer className="bg-[#060405] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-xs">
                  SX
                </div>
                <span className="text-xl font-black tracking-wider uppercase text-white">
                  SORIX<span className="text-red-500">STUDIO</span>
                </span>
              </div>
              <p className="text-xs text-neutral-400 max-w-md">
                Architecting Next-Gen Web Applications, Custom Business Systems & High-Converting Digital Templates.
              </p>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={sorixBrand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition-all hover:scale-105"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={sorixBrand.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 transition-all hover:scale-105"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={sorixBrand.contact.emailLink}
                className="p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 transition-all hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Copyright & Watermark Notice */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
            <div>
              &copy; {new Date().getFullYear()} <strong className="text-white">{sorixBrand.name}</strong>. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-red-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Lead Architect: {sorixBrand.founder}
              </span>
              <span>•</span>
              <a href={sorixBrand.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-400">
                {sorixBrand.contact.whatsapp}
              </a>
              <span>•</span>
              <a href={sorixBrand.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:underline text-pink-400">
                {sorixBrand.contact.instagram}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
