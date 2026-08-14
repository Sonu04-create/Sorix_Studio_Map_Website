import {
  Dumbbell, UserCheck, Flame, HeartPulse,
  UtensilsCrossed, Users, Wine, Utensils,
  Scissors, Palette, Sparkles, Brush,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import type { ServiceItem } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

const iconMap: Record<string, LucideIcon> = {
  Dumbbell, UserCheck, Flame, HeartPulse,
  UtensilsCrossed, Users, Wine, Utensils,
  Scissors, Palette, Sparkles, Brush,
};

interface ServicesProps {
  services: ServiceItem[];
  title?: string;
  subtitle?: string;
}

export default function Services({ services, title = 'Our Services', subtitle }: ServicesProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="services" ref={ref} className="section-py" style={{ backgroundColor: 'var(--brand-surface)' }}>
      <div className="noise-overlay" />
      <div className="container-mx container-px relative">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>What We Offer</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon ? iconMap[service.icon] : null;
            return (
              <div
                key={i}
                className={`group surface-card tilt-card overflow-hidden transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {service.image && (
                  <div className="img-reveal relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {Icon && (
                      <div
                        className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.9)' }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-[var(--brand-primary)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    {service.price ? (
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    ) : (
                      <span />
                    )}
                    {service.cta && (
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                      >
                        {service.cta}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
