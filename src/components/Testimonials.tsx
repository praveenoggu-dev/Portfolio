import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../data/portfolioData';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="pt-32 sm:pt-40 pb-24 relative bg-[#0A0618]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C084FC] uppercase font-heading">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              What My Clients Say
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C084FC] hover:text-white group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glow-card rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Avatar, Name, Company */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#A855F7]/50 shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#A78BFA]">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#CBD5E1] italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-[#C084FC] pt-2 border-t border-[#2C1B4D]/60">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C084FC" strokeWidth={0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

