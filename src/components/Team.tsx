import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import type { TeamMember } from '@/types/business';
import { useReveal } from '@/hooks/useReveal';
import WordReveal from '@/components/WordReveal';

interface TeamProps {
  team: TeamMember[];
  title?: string;
  subtitle?: string;
}

export default function Team({ team, title = 'Meet Our Team', subtitle }: TeamProps) {
  const { ref, visible } = useReveal();

  return (
    <section id="team" ref={ref} className="section-py" style={{ backgroundColor: 'var(--brand-surface)' }}>
      <div className="noise-overlay" />
      <div className="container-mx container-px relative">
        <div className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4 justify-center">
            <span className="section-label-line" />
            <span>Our People</span>
            <span className="section-label-line" />
          </div>
          <WordReveal text={title} as="h2" className="text-3xl font-bold sm:text-4xl lg:text-5xl" />
          {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={i}
              className={`group surface-card overflow-hidden transition-all duration-700 hover:-translate-y-3 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="img-reveal relative h-80 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {member.experience && (
                  <div
                    className="absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(var(--brand-primary-rgb), 0.9)', color: 'white' }}
                  >
                    {member.experience}
                  </div>
                )}
                {/* Social icons slide up on hover */}
                {member.social && (
                  <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-3 bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:bg-[var(--brand-primary)]">
                        <Instagram className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:bg-[var(--brand-primary)]">
                        <Facebook className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:bg-[var(--brand-primary)]">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.youtube && (
                      <a href={member.social.youtube} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:bg-[var(--brand-primary)]">
                        <Youtube className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold transition-colors group-hover:text-[var(--brand-primary)]">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                {member.description && (
                  <p className="mt-3 text-xs leading-relaxed text-muted">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
