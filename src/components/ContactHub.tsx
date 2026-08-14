import { useState } from 'react';
import { Mail, MessageSquare, Instagram, Send, Phone, MapPin, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { sorixBrand } from '@/data/contactInfo';

export default function ContactHub() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Prepare WhatsApp message URL as fallback dispatch
    const text = `Hi Sonu (Sorix Studio)! My name is ${form.name}. Email: ${form.email}, Phone: ${form.phone}. Project Type: ${form.service}. Message: ${form.message}`;
    const waUrl = `https://wa.me/${sorixBrand.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0809] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Contact Lead Architect
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                LET'S BUILD YOUR <span className="text-red-500">VISION</span>
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Reach out directly to <strong className="text-white font-semibold">{sorixBrand.founder}</strong> for website development, custom business templates, or technical consulting.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={sorixBrand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#120d0e] border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">WhatsApp (Instant Response)</div>
                    <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {sorixBrand.contact.whatsapp}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Chat Now &rarr;
                </span>
              </a>

              {/* Email */}
              <a
                href={sorixBrand.contact.emailLink}
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#120d0e] border border-amber-500/30 hover:border-amber-500/60 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/15 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">Official Email</div>
                    <div className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {sorixBrand.contact.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                  Send Email &rarr;
                </span>
              </a>

              {/* Instagram */}
              <a
                href={sorixBrand.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#120d0e] border border-pink-500/30 hover:border-pink-500/60 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-pink-500/15 text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">Instagram Official</div>
                    <div className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      {sorixBrand.contact.instagram}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-pink-400 group-hover:translate-x-1 transition-transform">
                  Follow & DM &rarr;
                </span>
              </a>
            </div>

            {/* Location & Response Guarantee */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3 text-xs text-neutral-300">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white">Location:</span> {sorixBrand.contact.location} (Serving global clients). Guaranteed response within 2-4 hours.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#120c0e] border border-red-500/30 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">Start Your Project Inquiry</h3>
                <p className="text-xs text-neutral-400">Fill out this quick form to send a direct request to Sonu M.</p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Dispatched!</h4>
                  <p className="text-xs text-neutral-300">
                    Your request has been prepared and opened in WhatsApp for instant delivery to Sonu M ({sorixBrand.contact.whatsapp}).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-400 underline font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="text"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Project Category</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#181113] border border-white/10 text-white text-xs focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        <option value="Custom Business Template">Custom Business Template</option>
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="AI Integration">AI & Automation</option>
                        <option value="UI/UX & Branding">UI/UX Redesign</option>
                        <option value="Technical Consulting">Technical Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">Project Details / Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your business, goals, and desired features..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-red-950/60 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sonu M</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
