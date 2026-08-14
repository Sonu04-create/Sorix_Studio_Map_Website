import { Layout, Code, Bot, Palette, Gauge, PhoneCall, ArrowUpRight } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

const services = [
  {
    icon: Layout,
    title: 'Turnkey Business Templates',
    description: 'Pre-architected, responsive web templates designed for instant deployment across Salons, Gyms, Restaurants, and Professional Services.',
    tag: 'Popular',
    accent: 'from-red-500/20 to-rose-500/20 border-red-500/30 text-red-400'
  },
  {
    icon: Code,
    title: 'Custom Web & Application Development',
    description: 'Bespoke full-stack web application development built with modern tech stacks (React, TypeScript, Python) tailored to your exact business workflow.',
    tag: 'Enterprise',
    accent: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400'
  },
  {
    icon: Bot,
    title: 'AI & Automation Integration',
    description: 'Embedding intelligent AI agents, automated booking workflows, and smart client response engines directly into your website.',
    tag: 'Next-Gen',
    accent: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400'
  },
  {
    icon: Palette,
    title: 'UI/UX & Brand Design Systems',
    description: 'Modern, high-converting aesthetic design systems with vibrant color palettes, glassmorphism, smooth animations, and ultra-responsive layouts.',
    tag: 'Aesthetics',
    accent: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400'
  },
  {
    icon: Gauge,
    title: 'Performance & SEO Architecture',
    description: 'Lightning-fast load speeds, Core Web Vitals optimization, semantic HTML5, and built-in SEO structures for maximum search engine visibility.',
    tag: 'Speed',
    accent: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
  },
  {
    icon: PhoneCall,
    title: '1-on-1 Architect Consulting',
    description: 'Direct technical consultation with Lead Architect Sonu M via WhatsApp or Email to discuss custom projects, system design, and deployment.',
    tag: 'Direct Access',
    accent: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0a0809] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Sorix Studio Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            SOLUTIONS CRAFTED FOR <span className="text-red-500">GROWTH</span>
          </h2>
          <p className="text-base text-neutral-400 font-light">
            Whether you need a high-converting business template or a custom full-stack enterprise web app, Sorix Studio provides end-to-end architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-[#110d0f] border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-red-950/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br border ${service.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">Architect: Sonu M</span>
                  <a
                    href={sorixBrand.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/90 via-[#1a0c0e] to-black border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">Need a custom feature or bespoke web platform?</h4>
            <p className="text-xs text-neutral-300">Contact Lead Architect Sonu M directly to get a custom quote and blueprint within 24 hours.</p>
          </div>
          <a
            href={sorixBrand.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-950/60 transition-all hover:scale-105 flex-shrink-0"
          >
            <span>WhatsApp Sonu (+91 81520 44640)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
