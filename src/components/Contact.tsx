import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  data: PortfolioData;
  messagePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ data, messagePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (messagePreset) {
      setFormData((prev) => ({ ...prev, message: messagePreset }));
    }
  }, [messagePreset]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti effect in lavender palette
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#C084FC', '#E9D5FF', '#FFFFFF'],
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="pt-32 sm:pt-40 pb-24 relative bg-transparent overflow-hidden">
      {/* Background ambient lavender glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#A855F7]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-bold tracking-widest text-[#C084FC] uppercase font-heading">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2 mb-3">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-[#A78BFA] max-w-xl leading-relaxed">
            Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#150D2A] border border-[#2C1B4D] flex items-center justify-center text-[#C084FC] shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-[#A78BFA] font-medium">Email</div>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-[#C084FC] transition-colors break-all"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#150D2A] border border-[#2C1B4D] flex items-center justify-center text-[#C084FC] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#A78BFA] font-medium">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {data.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Socials */}
            <div className="pt-4 border-t border-[#2C1B4D]">
              <div className="text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
                Follow Me
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={data.personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-[#150D2A] border border-[#2C1B4D] flex items-center justify-center text-[#A78BFA] hover:text-white hover:border-[#A855F7] hover:bg-[#1D123A] hover:scale-110 transition-all"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={data.personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#150D2A] border border-[#2C1B4D] flex items-center justify-center text-[#A78BFA] hover:text-white hover:border-[#A855F7] hover:bg-[#1D123A] hover:scale-110 transition-all"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Neon Glow Mail Card & Interactive Form */}
          <div className="lg:col-span-7 relative">
            {/* Glowing Lavender Mail Icon Box on Top Right */}
            <div className="absolute -top-10 -right-4 sm:-right-8 w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#9333EA] to-[#A855F7] border border-[#E9D5FF]/60 shadow-2xl shadow-[#A855F7]/40 flex items-center justify-center text-white -rotate-6 z-10 pointer-events-none hidden sm:flex">
              <Mail size={38} className="animate-pulse" />
            </div>

            <div className="glow-card rounded-2xl p-7 sm:p-10 relative">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#A855F7]/20 border border-[#A855F7] flex items-center justify-center text-[#C084FC]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">
                    Thank You!
                  </h4>
                  <p className="text-sm text-[#A78BFA] max-w-sm">
                    Your message has been delivered. I will review it and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0A1E] border border-[#2C1B4D] focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] text-white text-sm outline-none transition-all placeholder:text-[#6D5D8A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0A1E] border border-[#2C1B4D] focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] text-white text-sm outline-none transition-all placeholder:text-[#6D5D8A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0A1E] border border-[#2C1B4D] focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] text-white text-sm outline-none transition-all placeholder:text-[#6D5D8A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="theme-btn-primary w-full py-4 rounded-xl font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
