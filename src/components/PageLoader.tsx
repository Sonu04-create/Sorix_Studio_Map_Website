import { useEffect, useState } from 'react';

interface PageLoaderProps {
  businessName?: string;
}

export default function PageLoader({ businessName }: PageLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div
          className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white drop-shadow-md"
          style={{ fontFamily: 'var(--brand-heading-font)', color: 'var(--brand-text)' }}
        >
          {businessName ? (
            <>
              {businessName}
              <span style={{ color: 'var(--brand-primary)' }}>.</span>
            </>
          ) : (
            <>
              Sorix<span style={{ color: 'var(--brand-primary)' }}>.</span>
            </>
          )}
        </div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}
