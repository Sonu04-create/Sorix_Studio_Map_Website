import { Check, ArrowRight } from 'lucide-react';
import type { PlansSection } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface PlansProps {
  plans: PlansSection;
}

export default function Plans({ plans }: PlansProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="plans" ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Pricing</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={plans.title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {plans.subtitle && <p className="mt-4 text-lg text-muted">{plans.subtitle}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative surface-card p-8 transition-all duration-700 hover:-translate-y-3 ${
                plan.popular ? 'lg:scale-105' : ''
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{
                transitionDelay: `${i * 120}ms`,
                ...(plan.popular ? {
                  boxShadow: '0 25px 60px -15px rgba(var(--brand-primary-rgb), 0.5)',
                  borderColor: 'var(--brand-primary)',
                  animation: 'pulseGlow 3s ease-in-out infinite',
                } : {}),
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              {plan.description && <p className="mt-2 text-sm text-muted">{plan.description}</p>}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                {plan.duration && <span className="text-sm text-muted">{plan.duration}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className={`flex items-start gap-2 text-sm transition-all duration-500 ${
                      visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                    style={{ transitionDelay: `${300 + fi * 60}ms` }}
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} group justify-center`}
              >
                {plan.cta ?? 'Get Started'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
