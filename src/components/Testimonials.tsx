import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../data/portfolioData';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#060B1A]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              What My Clients Say
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#FBBF24] group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View More Testimonials</span>
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
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3882F6]/40 shrink-0">
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
                    <p className="text-xs text-[#94A3B8]">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#94A3B8] italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center gap-1 text-[#FBBF24] pt-2 border-t border-[#1A2645]/40">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" strokeWidth={0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

