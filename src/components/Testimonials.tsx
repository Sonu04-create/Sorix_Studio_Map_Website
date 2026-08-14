import { Star, Quote } from 'lucide-react';
import type { TestimonialItem } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ testimonials, title = 'What People Say', subtitle }: TestimonialsProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" ref={ref} className="section-py" style={{ backgroundColor: 'var(--brand-surface)' }}>
      <div className="noise-overlay" />
      <div className="container-mx container-px relative">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Reviews</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`surface-card group relative p-8 transition-all duration-700 hover:-translate-y-3 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote
                className="absolute top-6 right-6 h-12 w-12 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-10"
                style={{ color: 'var(--brand-primary)' }}
              />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 transition-all duration-300 ${
                      si < t.rating
                        ? 'fill-current text-[var(--brand-accent)]'
                        : 'text-muted/20'
                    }`}
                    style={{ transitionDelay: `${si * 50}ms` }}
                  />
                ))}
              </div>

              <p className="relative text-base leading-relaxed text-muted">"{t.review}"</p>

              <div className="mt-6 flex items-center gap-3">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--brand-primary)]/20" loading="lazy" />
                ) : (
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'var(--brand-primary)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{t.name}</div>
                  {t.isDemo && (
                    <div className="text-xs text-muted/60">Sample review</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.some((t) => t.isDemo) && (
          <p className="mt-8 text-center text-xs text-muted/50">
            Reviews shown are sample content for demonstration purposes.
          </p>
        )}
      </div>
    </section>
  );
}
