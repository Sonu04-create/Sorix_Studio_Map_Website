import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface DemoBadgeProps {
  visible: boolean;
}

export default function DemoBadge({ visible }: DemoBadgeProps) {
  const [dismissed, setDismissed] = useState(false);
  if (!visible || dismissed) return null;

  return (
    <div className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs backdrop-blur-md transition-all duration-300 hover:scale-105">
      <Sparkles className="h-3.5 w-3.5 text-[var(--brand-accent)]" />
      <span className="text-white/70">Concept by Sorix Studio</span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-1 text-white/30 transition-colors hover:text-white/70"
        aria-label="Dismiss"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
