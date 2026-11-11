import React from 'react';
import { MapPin, Briefcase, Mail, Download, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutProps {
  data: PortfolioData;
  onDownloadCV: () => void;
}

export const About: React.FC<AboutProps> = ({ data, onDownloadCV }) => {
  return (
    <section id="about" className="pt-32 sm:pt-40 pb-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
                GET TO KNOW ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
                About Me
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {data.personal.aboutText}
            </p>

            {/* Quick Details Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 w-full">
              <div className="p-4 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{data.personal.location}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Experience</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{data.personal.experience}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center gap-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Email</div>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#FBBF24] transition-colors break-all"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-2">
              <button
                onClick={onDownloadCV}
                className="theme-btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide cursor-pointer"
              >
                <span>Download CV</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#1A243D] glow-card shadow-2xl">
              <img
                src={data.personal.workspaceImage}
                alt="Workspace setup"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

