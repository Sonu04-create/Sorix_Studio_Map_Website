import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--brand-heading-font)', color: 'var(--brand-text)' }}>
          Sorix<span style={{ color: 'var(--brand-primary)' }}>.</span>
        </div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}
