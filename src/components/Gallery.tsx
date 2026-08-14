import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface GalleryProps {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
}

export default function Gallery({ items, title = 'Gallery', subtitle }: GalleryProps) {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean))) as string[];
  const filtered = filter ? items.filter((i) => i.category === filter) : items;

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? prev : (prev + 1) % filtered.length));
  }, [filtered.length]);
  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? prev : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  const spans = [
    'sm:col-span-2 sm:row-span-2',
    '',
    '',
    'sm:col-span-2',
    '',
    '',
    'sm:col-span-2',
    '',
  ];

  return (
    <section id="gallery" ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Gallery</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </div>

        {categories.length > 1 && (
          <div className={`mb-8 flex flex-wrap justify-center gap-2 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setFilter(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${filter === null ? 'text-white scale-105' : 'surface-card text-muted hover:text-[var(--brand-text)] hover:scale-105'}`}
              style={filter === null ? { backgroundColor: 'var(--brand-primary)' } : undefined}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${filter === cat ? 'text-white scale-105' : 'surface-card text-muted hover:text-[var(--brand-text)] hover:scale-105'}`}
                style={filter === cat ? { backgroundColor: 'var(--brand-primary)' } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`group relative cursor-pointer overflow-hidden transition-all duration-700 ${
                spans[i % spans.length]
              } ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 80}ms`, borderRadius: 'var(--brand-card-radius)' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.image}
                alt={item.caption ?? ''}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{item.caption}</p>
                  {item.category && <p className="text-xs text-white/60">{item.category}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in" onClick={closeLightbox}>
          <button className="absolute top-5 right-5 text-white/80 transition-all hover:scale-110 hover:text-white" onClick={closeLightbox} aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <button className="absolute left-5 text-white/80 transition-all hover:scale-125 hover:text-white" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img
            src={filtered[lightbox].image}
            alt={filtered[lightbox].caption ?? ''}
            className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-5 text-white/80 transition-all hover:scale-125 hover:text-white" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">
            <ChevronRight className="h-10 w-10" />
          </button>
          {filtered[lightbox].caption && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/80 animate-fade-up">{filtered[lightbox].caption}</p>
          )}
        </div>
      )}
    </section>
  );
}
