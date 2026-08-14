import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare, Mail, Instagram, ArrowLeft, X, Sparkles } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

interface WatermarkBadgeProps {
  isDemo?: boolean;
}

export default function WatermarkBadge({ isDemo = true }: WatermarkBadgeProps) {
  const [collapsed, setCollapsed] = useState(false);

  if (!isDemo) return null;

  return (
    <>
      {/* Sticky Top Watermark Banner */}
      <div className="relative z-[100] bg-gradient-to-r from-red-950 via-[#18080a] to-red-950 border-b border-red-500/30 text-white text-xs py-2 px-4 shadow-lg shadow-red-950/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <Link
              to="/"
              className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <ArrowLeft className="w-3 h-3" />
              Sorix Studio Home
            </Link>
            <span className="hidden sm:inline text-red-200/70">|</span>
            <span className="text-neutral-200 hidden sm:inline">
              Architected by <strong className="text-white font-semibold">{sorixBrand.founder}</strong> ({sorixBrand.role})
            </span>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex items-center gap-2 font-mono text-[11px] overflow-x-auto py-0.5">
            <a
              href={sorixBrand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-md transition-all hover:scale-105"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>{sorixBrand.contact.whatsapp}</span>
            </a>

            <a
              href={sorixBrand.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 px-2.5 py-1 rounded-md transition-all hover:scale-105"
            >
              <Instagram className="w-3 h-3 text-pink-400" />
              <span>{sorixBrand.contact.instagram}</span>
            </a>

            <a
              href={sorixBrand.contact.emailLink}
              className="hidden md:inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/20 px-2.5 py-1 rounded-md transition-all hover:scale-105"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{sorixBrand.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Bottom Watermark Badge */}
      <div className="fixed bottom-4 right-4 z-[99] flex flex-col items-end gap-2">
        {!collapsed ? (
          <div className="bg-[#0f0d0e]/90 border border-red-500/40 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl shadow-red-950/50 text-white max-w-xs transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
            <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-white/10">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  SX
                </div>
                <div>
                  <div className="font-bold text-xs text-white group-hover:text-red-400 transition-colors leading-none">{sorixBrand.name}</div>
                  <div className="text-[10px] text-red-400 font-medium">{sorixBrand.founder} (Founder)</div>
                </div>
              </Link>
              <button
                onClick={() => setCollapsed(true)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Minimize watermark"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-neutral-300 mb-3 leading-snug">
              Want a custom high-performance website like this built for your business?
            </p>

            <div className="flex flex-col gap-1.5 text-[11px]">
              <a
                href={sorixBrand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-1.5 font-medium transition-all shadow-md shadow-emerald-950/40"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  to="/"
                  className="py-1.5 px-2 bg-red-950/80 hover:bg-red-900/80 border border-red-500/30 rounded-lg flex items-center justify-center gap-1 text-red-200 transition-all text-[10px] font-bold"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Main Studio</span>
                </Link>
                <a
                  href={sorixBrand.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2 bg-gradient-to-r from-purple-900/60 to-pink-900/60 hover:from-purple-800/80 hover:to-pink-800/80 border border-pink-500/30 rounded-lg flex items-center justify-center gap-1 text-pink-200 transition-all text-[10px]"
                >
                  <Instagram className="w-3 h-3" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setCollapsed(false)}
            className="group flex items-center gap-2 bg-red-950/90 hover:bg-red-900 border border-red-500/50 backdrop-blur-md px-3 py-2 rounded-full shadow-lg shadow-red-950/50 text-white transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-red-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-semibold">{sorixBrand.name}</span>
          </button>
        )}
      </div>
    </>
  );
}
