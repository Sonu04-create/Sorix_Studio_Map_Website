import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: string, duration = 2000, start = false) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!start) return;
    const match = target.match(/[\d,.]+/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const numStr = match[0];
    const prefix = target.substring(0, match.index);
    const suffix = target.substring((match.index ?? 0) + numStr.length);
    const hasComma = numStr.includes(',');
    const hasDecimal = numStr.includes('.');
    const targetNum = parseFloat(numStr.replace(/,/g, ''));

    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;
      let formatted: string;
      if (hasDecimal) {
        formatted = current.toFixed(1);
      } else if (hasComma) {
        formatted = Math.round(current).toLocaleString('en-US');
      } else {
        formatted = Math.round(current).toString();
      }
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return display;
}
