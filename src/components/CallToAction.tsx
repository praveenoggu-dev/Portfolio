import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      {/* Background with Mountain Silhouette & Twilight Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80"
          alt="Mountains horizon"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-125 saturate-150"
        />
        {/* Warm Ambient Horizon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#0E1528]/75 to-[#070B14]" />
        <div className="absolute inset-0 bg-[#F59E0B]/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
          Let's Work Together
        </h2>

        <p className="text-base sm:text-xl text-[#CBD5E1] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Have a project in mind? I'd love to hear from you.
        </p>

        <button
          onClick={scrollToContact}
          className="theme-btn-primary inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-base tracking-wide hover:-translate-y-1 transition-all group cursor-pointer"
        >
          <span>Get In Touch</span>
          <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

