import { useEffect, useState } from 'react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import type { HeroData } from '@/types/business';

interface HeroProps {
  hero: HeroData;
  primaryCtaHref: string;
}

export default function Hero({ hero, primaryCtaHref }: HeroProps) {
  const isCenter = hero.align === 'center';
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0003})`,
          transition: 'transform 0.05s linear',
        }}
      >
        <img
          src={hero.image}
          alt=""
          className="h-[120%] w-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${isCenter ? 'hero-overlay-center' : 'hero-overlay'}`} />
        <div className="noise-overlay" />
      </div>

      {/* Content */}
      <div className="container-mx container-px relative z-10 flex min-h-screen flex-col justify-center">
        <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
          {hero.badge && (
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-md transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.1s' }}
          >
              <Star className="h-3.5 w-3.5 text-[var(--brand-accent)]" />
              <span className="text-white/90">{hero.badge}</span>
            </div>
          )}

          <h1
            className={`text-shadow-hero text-4xl font-bold leading-[1.05] tracking-tight transition-all duration-1000 sm:text-5xl lg:text-6xl xl:text-7xl ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {hero.heading.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span
                  className="inline-block transition-all duration-700"
                  style={{
                    transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                    transitionDelay: `${0.3 + i * 0.08}s`,
                  }}
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </h1>

          <p
            className={`text-shadow-hero mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {hero.description}
          </p>

          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } ${isCenter ? 'justify-center' : ''}`}
            style={{ transitionDelay: '0.8s' }}
          >
            <a href={primaryCtaHref} className="btn-primary text-base group">
              {hero.primaryCta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            {hero.secondaryCta && (
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-base border-white/30 text-white hover:border-white"
              >
                {hero.secondaryCta}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce text-white/40" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--brand-bg)] to-transparent" />
    </section>
  );
}
