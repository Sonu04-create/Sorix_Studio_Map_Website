import { ArrowRight } from 'lucide-react';
import type { CTASection as CTAData } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface CTAProps {
  cta: CTAData;
  whatsappLink?: string;
  phone?: string;
}

export default function CTA({ cta, whatsappLink, phone }: CTAProps) {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div
          className={`relative overflow-hidden p-12 text-center transition-all duration-1000 lg:p-24 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            borderRadius: 'var(--brand-card-radius)',
            background: `linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))`,
          }}
        >
          {/* Animated dot pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="noise-overlay" />

          {/* Floating glow orbs */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full opacity-20 blur-3xl animate-float" style={{ backgroundColor: 'var(--brand-accent)' }} />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full opacity-20 blur-3xl animate-float" style={{ backgroundColor: 'var(--brand-primary)', animationDelay: '2s' }} />

          <div className="relative z-10 mx-auto max-w-2xl">
            <WordReveal text={cta.heading} as="h2" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl" />
            <p className="mt-5 text-lg text-white/80">{cta.description}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {whatsappLink ? (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 font-semibold text-[var(--brand-primary)] transition-all duration-300 hover:scale-[1.05] active:scale-95" style={{ borderRadius: 'var(--brand-btn-radius)' }}>
                  {cta.primaryCta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              ) : phone ? (
                <a href={`tel:${phone}`} className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 font-semibold text-[var(--brand-primary)] transition-all duration-300 hover:scale-[1.05] active:scale-95" style={{ borderRadius: 'var(--brand-btn-radius)' }}>
                  {cta.primaryCta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              ) : null}
              {cta.secondaryCta && phone && (
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-white hover:scale-[1.05]" style={{ borderRadius: 'var(--brand-btn-radius)' }}>
                  {cta.secondaryCta}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
