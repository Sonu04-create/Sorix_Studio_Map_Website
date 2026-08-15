import type { BusinessData, ServiceItem, TeamMember, GalleryItem, TestimonialItem } from '@/types/business';

const gymDefaultServices = (name: string): ServiceItem[] => [
  {
    title: `Personal Training & Coaching`,
    description: `One-on-one customized workouts, progress tracking, and dedicated coaching tailored for your specific goals at ${name}.`,
    image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80`,
    icon: `UserCheck`,
    price: `From ₹1,500/mo`,
    cta: `Book Session`,
  },
  {
    title: `Weight & Strength Training`,
    description: `Complete access to Olympic barbells, heavy dumbbells, power racks, and specialized strength resistance equipment.`,
    image: `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80`,
    icon: `Dumbbell`,
    price: `Included`,
    cta: `Explore Zone`,
  },
  {
    title: `Group HIIT & Cardio Classes`,
    description: `High-intensity group workouts, spinning, stamina building, and functional endurance training led by dynamic coaches.`,
    image: `https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80`,
    icon: `Flame`,
    price: `Included`,
    cta: `View Schedule`,
  },
  {
    title: `Nutrition & Customized Diet Plans`,
    description: `Scientific body composition analysis, macro tracking, and personalized meal planning to maximize workout results.`,
    image: `https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80`,
    icon: `HeartPulse`,
    price: `Custom Plan`,
    cta: `Consult Expert`,
  },
];

const gymDefaultTeam = (name: string): TeamMember[] => [
  {
    name: `Vikram Singh`,
    role: `Head Strength Coach`,
    photo: `https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&h=800&q=80`,
    description: `Over 12 years of experience in powerlifting, posture correction, and physique transformation at ${name}.`,
    experience: `12+ Years`,
    social: { instagram: `https://instagram.com`, facebook: `https://facebook.com` },
  },
  {
    name: `Ananya Sharma`,
    role: `Lead Nutritionist & Trainer`,
    photo: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80`,
    description: `Certified fitness trainer specializing in weight loss, metabolic conditioning, and sustainable diet design.`,
    experience: `8+ Years`,
    social: { instagram: `https://instagram.com`, linkedin: `https://linkedin.com` },
  },
  {
    name: `Rahul Verma`,
    role: `Bodybuilding & Conditioning Expert`,
    photo: `https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&h=800&q=80`,
    description: `Helps members build lean muscle, overcome fitness plateaus, and optimize heavy lifting safety.`,
    experience: `6+ Years`,
    social: { instagram: `https://instagram.com`, youtube: `https://youtube.com` },
  },
  {
    name: `Priya Patel`,
    role: `Group HIIT & Mobility Instructor`,
    photo: `https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&h=800&q=80`,
    description: `Energetic instructor leading group cardio, flexibility classes, and core stability routines.`,
    experience: `5+ Years`,
    social: { instagram: `https://instagram.com`, facebook: `https://facebook.com` },
  },
];

const gymDefaultGallery = (name: string): GalleryItem[] => [
  {
    image: `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Facility`,
    caption: `${name} Heavy Dumbbell & Free Weights Arena`,
  },
  {
    image: `https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Facility`,
    caption: `Modern Cardio & Treadmills Station`,
  },
  {
    image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Training`,
    caption: `Personal Coaching & Technique Guidance`,
  },
  {
    image: `https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Classes`,
    caption: `High Energy Group Fitness Session`,
  },
  {
    image: `https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Equipment`,
    caption: `Squat Racks & Powerlifting Benches`,
  },
  {
    image: `https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&h=800&q=80`,
    category: `Training`,
    caption: `Functional Kettlebell & Core Zone`,
  },
];

const gymDefaultTestimonials = (name: string): TestimonialItem[] => [
  {
    name: `Amit Deshmukh`,
    review: `Joined ${name} 6 months ago and my fitness transformation has been incredible! Premium machines, spacious floor, and coaches who truly care about your form.`,
    rating: 5,
    image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`,
    isDemo: true,
  },
  {
    name: `Sneha Kulkarni`,
    review: `The group fitness and stamina building sessions are unmatched! Cleanest gym environment with very encouraging instructors. 10/10 recommendation!`,
    rating: 5,
    image: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80`,
    isDemo: true,
  },
  {
    name: `Rajesh Patil`,
    review: `Awesome personal training support and nutrition advice. The weight training floor is fully equipped with top quality Olympic gear. Very happy!`,
    rating: 5,
    image: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80`,
    isDemo: true,
  },
  {
    name: `Neha Sharma`,
    review: `Great atmosphere, modern locker facilities, and friendly staff. It's the highlight of my morning routine every single day!`,
    rating: 5,
    image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,
    isDemo: true,
  },
];

export function enrichBusinessData(business: BusinessData): BusinessData {
  const isGym = business.type === 'gym';
  const name = business.name;

  // Enrich Services if < 4
  let services = [...business.services];
  if (services.length < 4) {
    if (isGym) {
      const defaults = gymDefaultServices(name);
      // Keep existing services, append non-duplicating defaults until length reaches 4+
      const existingTitles = new Set(services.map((s) => s.title.toLowerCase()));
      for (const d of defaults) {
        if (!existingTitles.has(d.title.toLowerCase())) {
          services.push(d);
          existingTitles.add(d.title.toLowerCase());
        }
        if (services.length >= 4) break;
      }
    }
  }

  // Enrich Team if < 4
  let team = [...business.team];
  if (team.length < 4) {
    if (isGym) {
      const defaults = gymDefaultTeam(name);
      const existingNames = new Set(team.map((t) => t.name.toLowerCase()));
      for (const d of defaults) {
        if (!existingNames.has(d.name.toLowerCase())) {
          team.push(d);
          existingNames.add(d.name.toLowerCase());
        }
        if (team.length >= 4) break;
      }
    }
  }

  // Enrich Gallery if < 6
  let gallery = [...business.gallery];
  if (gallery.length < 6) {
    if (isGym) {
      const defaults = gymDefaultGallery(name);
      const existingImages = new Set(gallery.map((g) => g.image));
      for (const d of defaults) {
        if (!existingImages.has(d.image)) {
          gallery.push(d);
          existingImages.add(d.image);
        }
        if (gallery.length >= 6) break;
      }
    }
  }

  // Enrich Testimonials if < 4
  let testimonials = [...business.testimonials];
  if (testimonials.length < 4) {
    if (isGym) {
      const defaults = gymDefaultTestimonials(name);
      const existingReviews = new Set(testimonials.map((t) => t.name.toLowerCase()));
      for (const d of defaults) {
        if (!existingReviews.has(d.name.toLowerCase())) {
          testimonials.push(d);
          existingReviews.add(d.name.toLowerCase());
        }
        if (testimonials.length >= 4) break;
      }
    }
  }

  return {
    ...business,
    services,
    team,
    gallery,
    testimonials,
  };
}
