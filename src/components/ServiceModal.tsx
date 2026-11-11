import React from 'react';
import { X, CheckCircle2, ArrowRight, Globe, Layout, Smartphone, ShieldCheck } from 'lucide-react';
import { Service } from '../data/portfolioData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectServiceForContact: (service: Service) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe size={32} className="text-[#F59E0B]" />;
      case 'Layout':
        return <Layout size={32} className="text-[#F59E0B]" />;
      case 'Smartphone':
        return <Smartphone size={32} className="text-[#F59E0B]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={32} className="text-[#F59E0B]" />;
      default:
        return <Globe size={32} className="text-[#F59E0B]" />;
    }
  };

  const handleInquire = () => {
    onSelectServiceForContact(service);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0D1322] border border-[#1A243D] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#070B14]/80 text-[#94A3B8] hover:text-white border border-[#1A243D] flex items-center justify-center transition-all hover:scale-105"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#1A243D] flex items-start gap-5 bg-gradient-to-r from-[#0E1528] to-[#0D1322]">
          <div className="w-16 h-16 rounded-2xl bg-[#070B14] border border-[#F59E0B]/40 flex items-center justify-center shrink-0 shadow-lg shadow-[#F59E0B]/20">
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
              SERVICE DETAILS
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Deliverables */}
          {service.features && service.features.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">
                What's Included
              </h4>
              <div className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#070B14]/60 border border-[#1A243D]"
                  >
                    <CheckCircle2 size={16} className="text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#E2E8F0]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {service.technologies && service.technologies.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2.5">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#121A30] border border-[#1A243D] text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#1A243D] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#94A3B8]">
              Ready to start your project? Let's discuss your requirements.
            </div>
            <button
              onClick={handleInquire}
              className="theme-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              <span>Inquire About This Service</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
