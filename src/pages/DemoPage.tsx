import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBusinessBySlug } from '@/data/businesses';
import UniversalTemplate from '@/templates/UniversalTemplate';

export default function DemoPage() {
  const { slug } = useParams<{ slug: string }>();
  const business = slug ? getBusinessBySlug(slug) : undefined;

  useEffect(() => {
    if (business) {
      document.title = `${business.name} — ${business.tagline}`;
      const setMeta = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('name', name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };
      const setOg = (property: string, content: string) => {
        let el = document.querySelector(`meta[property="${property}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', property);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMeta('description', business.description);
      setOg('og:title', `${business.name} — ${business.tagline}`);
      setOg('og:description', business.description);
      setOg('og:image', business.hero.image);
      setOg('og:type', 'website');
    }

    return () => {
      document.title = 'Sorix Studio — Demo Factory';
    };
  }, [business]);

  if (!business) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white">
        <h1 className="text-4xl font-bold">Demo Not Found</h1>
        <p className="mt-4 text-neutral-400">The business demo "{slug}" does not exist.</p>
        <Link to="/" className="mt-8 text-[#e63946] hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return <UniversalTemplate business={business} />;
}
