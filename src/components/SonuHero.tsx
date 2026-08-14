import { ArrowRight, MessageSquare, Instagram, Mail, ShieldCheck, Zap, Cpu, Code, Sparkles, Terminal } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

export default function SonuHero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0a0809]">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headlines & Contact Badges */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Founder Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950/80 via-red-900/40 to-neutral-900 border border-red-500/40 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-semibold text-red-300 uppercase tracking-widest">
                Sorix Studio • Official Portfolio
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
                WE DESIGN <br />
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                  DIGITAL MASTERY.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                Hi, I’m <strong className="text-white font-semibold">{sorixBrand.founder}</strong> — Founder & Lead Architect at <span className="text-red-400 font-bold">{sorixBrand.name}</span>. I craft bespoke web applications, high-converting digital templates, and cutting-edge software solutions.
              </p>
            </div>

            {/* Core Tech Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <Code className="w-3.5 h-3.5 text-blue-400" /> Python & Full-Stack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <Cpu className="w-3.5 h-3.5 text-amber-400" /> AI Systems Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <Zap className="w-3.5 h-3.5 text-yellow-400" /> Custom Business Templates
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={sorixBrand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp ({sorixBrand.contact.whatsapp})</span>
              </a>

              <a
                href="#templates"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base flex items-center justify-center gap-2 transition-all hover:border-red-500/40"
              >
                <span>View Templates</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </a>
            </div>

            {/* Live Contact Quick-Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <a
                href={sorixBrand.contact.emailLink}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-amber-500/30 transition-all group"
              >
                <div className="text-[10px] uppercase font-mono text-neutral-400 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-amber-400" /> Email Direct
                </div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-amber-300 truncate">
                  {sorixBrand.contact.email}
                </div>
              </a>

              <a
                href={sorixBrand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="text-[10px] uppercase font-mono text-neutral-400 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-emerald-400" /> WhatsApp
                </div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-emerald-300">
                  {sorixBrand.contact.whatsapp}
                </div>
              </a>

              <a
                href={sorixBrand.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-pink-500/30 transition-all group"
              >
                <div className="text-[10px] uppercase font-mono text-neutral-400 flex items-center gap-1">
                  <Instagram className="w-3 h-3 text-pink-400" /> Instagram
                </div>
                <div className="text-xs font-semibold text-neutral-200 group-hover:text-pink-300">
                  {sorixBrand.contact.instagram}
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Sonu M's Graphic Image with Stylized Framing */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Red Glow Backdrop Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 opacity-60 blur-xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-red-500/50 bg-[#12080a] shadow-2xl shadow-red-950/80 group">
                <img
                  src={sorixBrand.avatar}
                  alt={`${sorixBrand.founder} - ${sorixBrand.role}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-red-500/40 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{sorixBrand.founder}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-red-950/90 to-black/90 backdrop-blur-md border border-red-500/50 px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs text-white shadow-xl">
                  <ShieldCheck className="w-4 h-4 text-red-400" />
                  <div>
                    <div className="font-bold text-white leading-none">SORIX STUDIO</div>
                    <div className="text-[10px] text-red-300 font-mono">Lead Architect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
