import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Copy, Check, Search, Filter, Sparkles, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { businesses } from '@/data/businesses';
import type { BusinessType } from '@/types/business';
import { sorixBrand } from '@/data/contactInfo';

const typeLabels: Record<string, string> = {
  gym: 'Gym & Fitness',
  restaurant: 'Restaurant & Dining',
  salon: 'Salon & Spa',
  clinic: 'Healthcare & Clinic',
  hotel: 'Hotel & Hospitality',
  realestate: 'Real Estate',
  agency: 'Agency & Studio',
};

export default function TemplateGallery() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filtered = businesses.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.type.toLowerCase().includes(search.toLowerCase()) ||
      b.contact.city?.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === null || b.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const types = Array.from(new Set(businesses.map((b) => b.type)));

  const copyUrl = (slug: string) => {
    const url = `${window.location.origin}/demos/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <section id="templates" className="py-24 bg-[#080607] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Sorix Studio Template Library
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              INTERACTIVE DEMO <span className="text-red-500">TEMPLATES</span>
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-light">
              Explore high-performance business website templates architected by Sonu M. Click any template to launch the full live demo.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-2xl">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Watermarked with Sorix Studio Branding</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#120d0f] p-4 rounded-2xl border border-white/10">
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search templates, industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => setTypeFilter(null)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                typeFilter === null
                  ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-950/50'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Templates ({businesses.length})
            </button>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium capitalize transition-all whitespace-nowrap ${
                  typeFilter === t
                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-950/50'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((b) => (
            <div
              key={b.slug}
              className="group relative rounded-3xl bg-[#110c0e] border border-white/10 hover:border-red-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Banner */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-900 to-black">
                <img
                  src={b.hero.imageUrl}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110c0e] via-transparent to-black/40" />

                {/* Industry Tag & Watermark Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neutral-200 font-semibold uppercase tracking-wide">
                    {typeLabels[b.type] || b.type}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                    Sorix Template
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 font-light">
                    {b.tagline || b.about?.description || 'Custom business website template built by Sorix Studio.'}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] text-neutral-400 font-mono">
                  <div className="flex items-center justify-between">
                    <span>City / Target:</span>
                    <span className="text-neutral-200 font-medium">{b.contact.city || 'Global / Flexible'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Architect:</span>
                    <span className="text-red-400 font-semibold">{sorixBrand.founder}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-2">
                  <Link
                    to={`/demos/${b.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all hover:scale-[1.02]"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => copyUrl(b.slug)}
                      className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 flex items-center justify-center gap-1.5 transition-all text-[11px]"
                    >
                      {copiedSlug === b.slug ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-neutral-400" />
                          <span>Copy Demo Link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`${sorixBrand.contact.whatsappLink}&text=Hi%20Sonu%2C%20I%20want%20to%20get%20the%20${encodeURIComponent(b.name)}%20template!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-1.5 transition-all text-[11px] font-medium"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                      <span>Get Template</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-[#110c0e] rounded-3xl border border-white/10 space-y-3">
            <p className="text-base text-neutral-400">No templates found matching "{search}".</p>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter(null);
              }}
              className="text-xs text-red-400 hover:text-red-300 font-semibold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
