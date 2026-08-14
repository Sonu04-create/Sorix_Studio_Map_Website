import { ArrowRight } from 'lucide-react';
import type { AboutData } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface AboutProps {
  about: AboutData;
}

export default function About({ about }: AboutProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image with reveal + floating accent */}
          <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="img-reveal relative overflow-hidden" style={{ borderRadius: 'var(--brand-card-radius)' }}>
              <img
                src={about.image}
                alt={about.heading}
                className={`aspect-[4/3] w-full object-cover transition-all duration-1000 ${visible ? 'scale-100' : 'scale-110'}`}
                loading="lazy"
              />
              <div className="noise-overlay" />
            </div>
            {/* Floating accent card */}
            <div
              className="absolute -bottom-6 -right-6 hidden h-36 w-36 animate-float items-center justify-center rounded-2xl p-6 text-center shadow-2xl sm:flex"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              <div>
                <div className="text-3xl font-bold text-white">Est.</div>
                <div className="text-xl text-white/80">2012</div>
              </div>
            </div>
            {/* Decorative border accent */}
            <div
              className="absolute -top-3 -left-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2"
              style={{ borderColor: 'var(--brand-primary)' }}
            />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="section-label mb-4">
              <span className="section-label-line" />
              <span>About Us</span>
            </div>
            <WordReveal text={about.heading} as="h2" className="text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl" delay={200} />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {about.description}
            </p>

            {about.stats && about.stats.length > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-4">
                {about.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`surface-card p-4 text-center transition-all duration-700 hover:-translate-y-1 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {about.cta && (
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary group mt-8"
              >
                {about.cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
