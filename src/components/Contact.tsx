import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

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

      // Trigger Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3882F6', '#60A5FA', '#38BDF8', '#FFFFFF'],
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#3882F6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2 mb-3">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
            Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Email</div>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-[#FBBF24] transition-colors"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Phone</div>
                    <a
                      href={`tel:${data.personal.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#FBBF24] transition-colors"
                    >
                    {data.personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#F59E0B] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] font-medium">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {data.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Socials */}
            <div className="pt-4 border-t border-[#1A243D]">
              <div className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-4">
                Follow Me
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={data.personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-110 transition-all"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={data.personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-110 transition-all"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={data.personal.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-110 transition-all"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href={data.personal.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-110 transition-all"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Neon Glow Mail Card & Interactive Form */}
          <div className="lg:col-span-7 relative">
            {/* Glowing Amber Mail Icon Box on Top Right */}
            <div className="absolute -top-10 -right-4 sm:-right-8 w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] border border-[#FDE68A]/60 shadow-2xl shadow-[#F59E0B]/40 flex items-center justify-center text-white -rotate-6 z-10 pointer-events-none hidden sm:flex">
              <Mail size={38} className="animate-pulse" />
            </div>

            <div className="glow-card rounded-2xl p-7 sm:p-10 relative">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B] flex items-center justify-center text-[#FBBF24]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">
                    Thank You!
                  </h4>
                  <p className="text-sm text-[#94A3B8] max-w-sm">
                    Your message has been delivered. I will review it and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#1A243D] focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] text-white text-sm outline-none transition-all placeholder:text-[#475569]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#1A243D] focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] text-white text-sm outline-none transition-all placeholder:text-[#475569]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080D1D] border border-[#1A243D] focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] text-white text-sm outline-none transition-all placeholder:text-[#475569] resize-none"
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
