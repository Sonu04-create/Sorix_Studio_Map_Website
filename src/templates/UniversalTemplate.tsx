import { useEffect } from 'react';
import type { BusinessData } from '@/types/business';
import { useBranding } from '@/utils/theme';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Featured from '@/components/Featured';
import Team from '@/components/Team';
import Plans from '@/components/Plans';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import DemoBadge from '@/components/DemoBadge';
import CustomCursor from '@/components/CustomCursor';
import PageLoader from '@/components/PageLoader';
import ScrollProgress from '@/components/ScrollProgress';

import WatermarkBadge from '@/components/WatermarkBadge';

interface UniversalTemplateProps {
  business: BusinessData;
}

export default function UniversalTemplate({ business }: UniversalTemplateProps) {
  useBranding(business.branding);

  useEffect(() => {
    document.documentElement.setAttribute('data-lightscheme', business.branding.darkMode ? 'dark' : 'light');
  }, [business.branding.darkMode]);

  const { sections: s, contact, cta } = business;
  const whatsappLink = contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : undefined;
  const primaryCtaHref = whatsappLink ?? (contact.phone ? `tel:${contact.phone}` : '#location');

  return (
    <div className="min-h-screen bg-brand">
      <WatermarkBadge isDemo={true} />
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar business={business} />

      {s.hero && <Hero hero={business.hero} primaryCtaHref={primaryCtaHref} />}
      {s.stats && business.stats.length > 0 && <Stats stats={business.stats} />}
      {s.about && <About about={business.about} />}
      {s.services && business.services.length > 0 && <Services services={business.services} />}
      {s.featured && business.featured && <Featured featured={business.featured} />}
      {s.team && business.team.length > 0 && <Team team={business.team} />}
      {s.plans && business.plans && <Plans plans={business.plans} />}
      {s.gallery && business.gallery.length > 0 && <Gallery items={business.gallery} />}
      {s.testimonials && business.testimonials.length > 0 && (
        <Testimonials testimonials={business.testimonials} />
      )}
      {s.location && <Location business={business} />}
      {s.cta && <CTA cta={cta} whatsappLink={whatsappLink} phone={contact.phone} />}

      <Footer business={business} />
      <DemoBadge visible={business.demoMode} />
    </div>
  );
}
