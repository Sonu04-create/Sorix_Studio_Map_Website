import { ArrowRight } from 'lucide-react';
import type { FeaturedSection } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface FeaturedProps {
  featured: FeaturedSection;
}

export default function Featured({ featured }: FeaturedProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="featured" ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Highlights</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={featured.title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {featured.subtitle && <p className="mt-4 text-lg text-muted">{featured.subtitle}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.items.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden transition-all duration-700 hover:-translate-y-3 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 120}ms`, borderRadius: 'var(--brand-card-radius)' }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">{item.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  {item.price && (
                    <span className="text-lg font-bold text-[var(--brand-accent)]">{item.price}</span>
                  )}
                  {item.cta && (
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-all hover:gap-2"
                    >
                      {item.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
