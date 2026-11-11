import React from 'react';
import { Globe, Layout, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Service } from '../data/portfolioData';

interface ServicesProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={24} className="text-[#F59E0B]" />;
      case 'Layout':
        return <Layout size={24} className="text-[#F59E0B]" />;
      case 'Smartphone':
        return <Smartphone size={24} className="text-[#F59E0B]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} className="text-[#F59E0B]" />;
      default:
        return <Globe size={24} className="text-[#F59E0B]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#060B1A]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
            WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
            Services
          </h2>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="glow-card rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:border-[#F59E0B]/60 transition-all duration-300"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#080D1D] border border-[#1A243D] flex items-center justify-center mb-6 group-hover:border-[#F59E0B]/60 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#F59E0B]/20 transition-all">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#FBBF24] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-4 border-t border-[#1A243D]/50 flex items-center justify-between text-xs font-semibold text-[#94A3B8] group-hover:text-[#F59E0B] transition-colors">
                <span>Learn more</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
