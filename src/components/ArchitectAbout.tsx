import { Code2, Cpu, Rocket, Shield, Terminal, CheckCircle2, MessageSquare, Instagram, Mail } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

export default function ArchitectAbout() {
  return (
    <section id="architect" className="py-24 bg-[#080607] border-y border-white/5 relative overflow-hidden">
      {/* Subtle Glow Backgrounds */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Avatar Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#180d10] to-[#0f0b0c] p-6 border border-red-500/30 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-red-500/50">
                  <img src={sorixBrand.avatar} alt={sorixBrand.founder} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{sorixBrand.founder}</h3>
                  <p className="text-xs text-red-400 font-mono font-medium">{sorixBrand.role}</p>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">{sorixBrand.name}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs text-neutral-300 leading-relaxed">
                  "At Sorix Studio, every pixel, code structure, and architectural pipeline is custom-engineered to deliver speed, authority, and aesthetic elegance."
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {sorixBrand.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] text-neutral-400 font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">
                Direct Contact
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href={sorixBrand.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[11px] truncate">{sorixBrand.contact.whatsapp}</span>
                </a>
                <a
                  href={sorixBrand.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span className="font-mono text-[11px] truncate">{sorixBrand.contact.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy & Expertise */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-semibold">
                <Terminal className="w-3.5 h-3.5" /> Founder & Lead Architect
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Architecting High-Performance Websites & Custom Systems
              </h2>
              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Led by <strong className="text-white font-semibold">{sorixBrand.founder}</strong>, Sorix Studio specializes in creating powerful web architectures, custom digital platforms, and tailored industry templates for businesses, creators, and agencies worldwide.
              </p>
            </div>

            {/* Core Capability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all">
                <Code2 className="w-6 h-6 text-red-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Full-Stack Development</h4>
                <p className="text-xs text-neutral-400">
                  Clean, modular React, TypeScript & Python backends built for extreme performance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all">
                <Cpu className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">AI & Intelligent Workflows</h4>
                <p className="text-xs text-neutral-400">
                  Embedding smart automation, chatbots, and AI integrations directly into web solutions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all">
                <Rocket className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Industry Templates</h4>
                <p className="text-xs text-neutral-400">
                  Turnkey, high-converting templates tailored for Salons, Gyms, Restaurants & Agencies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all">
                <Shield className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Sorix Watermark Assurance</h4>
                <p className="text-xs text-neutral-400">
                  Every template is verified and backed by Sonu M’s direct architect support.
                </p>
              </div>
            </div>

            {/* List of Skills */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-neutral-400 mb-3">Architect Specializations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-medium">
                {sorixBrand.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
