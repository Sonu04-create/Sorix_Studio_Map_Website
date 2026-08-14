import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import type { BusinessData } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface LocationProps {
  business: BusinessData;
}

export default function Location({ business }: LocationProps) {
  const { ref, visible } = useReveal();
  const { contact, openingHours, location } = business;

  const whatsappLink = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}`
    : undefined;

  const directionsLink = contact.googleMaps
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${contact.address ?? ''} ${contact.city ?? ''} ${contact.state ?? ''}`.trim()
      )}`
    : undefined;

  return (
    <section id="location" ref={ref} className="section-py">
      <div className="container-mx container-px">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Get in Touch</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={location.title ?? 'Visit Us'} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {location.subtitle && <p className="mt-4 text-lg text-muted">{location.subtitle}</p>}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`space-y-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="surface-card p-6 transition-all duration-300 hover:border-[var(--brand-primary)]/20">
              <h3 className="mb-4 text-lg font-bold">Contact Information</h3>

              {contact.address && (
                <div className="mb-4 flex items-start gap-3 group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.1)' }}>
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contact.address}</p>
                    <p className="text-sm text-muted">{[contact.city, contact.state, contact.country].filter(Boolean).join(', ')}</p>
                  </div>
                </div>
              )}

              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="mb-4 flex items-center gap-3 transition-colors hover:text-primary group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.1)' }}>
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{contact.phone}</span>
                </a>
              )}

              {contact.email && (
                <a href={`mailto:${contact.email}`} className="mb-4 flex items-center gap-3 transition-colors hover:text-primary group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.1)' }}>
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">{contact.email}</span>
                </a>
              )}

              {whatsappLink && (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mb-4 flex items-center gap-3 transition-colors hover:text-primary group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.1)' }}>
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              )}
            </div>

            <div className="surface-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Clock className="h-5 w-5 text-primary" />
                Opening Hours
              </h3>
              <div className="space-y-2">
                {openingHours.map((hour, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[var(--brand-surface)] pb-2 text-sm last:border-0">
                    <span className="font-medium">{hour.day}</span>
                    {hour.closed ? (
                      <span className="text-red-400">Closed</span>
                    ) : (
                      <span className="text-muted">{hour.open} – {hour.close}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {whatsappLink && (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary group flex-1 justify-center">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              )}
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="btn-secondary flex-1 justify-center">
                  <Phone className="h-5 w-5" />
                  Call
                </a>
              )}
              {directionsLink && (
                <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 justify-center surface-card">
                  <ExternalLink className="h-5 w-5" />
                  Directions
                </a>
              )}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {location.mapEmbed ? (
              <div className="h-full min-h-[400px] overflow-hidden surface-card" style={{ borderRadius: 'var(--brand-card-radius)' }}>
                <iframe
                  src={location.mapEmbed}
                  className="h-full w-full grayscale-[30%] transition-all duration-500 hover:grayscale-0"
                  style={{ border: 0, minHeight: '400px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex h-full min-h-[400px] items-center justify-center surface-card">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-4 text-muted">{contact.address}, {contact.city}, {contact.state}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
