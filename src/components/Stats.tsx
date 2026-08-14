import {
  Award, Users, Dumbbell, Star, Wine, UtensilsCrossed,
  Heart, Scissors, Sparkles, Flame, HeartPulse, UserCheck,
  Palette, Brush, Clock, TrendingUp, type LucideIcon,
} from 'lucide-react';
import type { StatItem } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';

const iconMap: Record<string, LucideIcon> = {
  Award, Users, Dumbbell, Star, Wine, UtensilsCrossed,
  Heart, Scissors, Sparkles, Flame, HeartPulse, UserCheck,
  Palette, Brush, Clock, TrendingUp,
};

function StatCard({ stat, index, visible }: { stat: StatItem; index: number; visible: boolean }) {
  const Icon = stat.icon ? iconMap[stat.icon] : null;
  const display = useCountUp(stat.value, 2000, visible);

  return (
    <div
      className={`group relative flex flex-col items-center gap-2 p-8 text-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {Icon && (
        <div
          className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.1)' }}
        >
          <Icon className="h-7 w-7 text-primary" />
        </div>
      )}
      <div
        className="text-4xl font-bold lg:text-5xl"
        style={{ fontFamily: 'var(--brand-heading-font)' }}
      >
        {display}
      </div>
      <div className="text-sm text-muted">{stat.label}</div>
    </div>
  );
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative z-10 -mt-16 mb-8">
      <div className="container-mx container-px">
        <div
          className="surface-card grid grid-cols-2 overflow-hidden lg:grid-cols-4"
          style={{ borderRadius: 'var(--brand-card-radius)' }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
