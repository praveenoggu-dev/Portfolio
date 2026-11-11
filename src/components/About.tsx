import React from 'react';
import { MapPin, Briefcase, Mail, Download, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutProps {
  data: PortfolioData;
  onDownloadCV: () => void;
}

export const About: React.FC<AboutProps> = ({ data, onDownloadCV }) => {
  return (
    <section id="about" className="py-24 relative bg-transparent overflow-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              <div className="p-4 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">{data.personal.location}</div>
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

              <div className="p-4 rounded-xl bg-[#0E1528] border border-[#1A243D] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] uppercase font-semibold">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[170px] sm:max-w-none" title={data.personal.email}>{data.personal.email}</div>
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

          {/* Right Visual Image & Handwritten note */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#1A243D] glow-card shadow-2xl">
              <img
                src={data.personal.workspaceImage}
                alt="Workspace setup"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
            </div>

            {/* Handwritten "Code Design Create" with Curved Arrow in Warm Amber */}
            <div className="absolute -right-4 -bottom-8 sm:-right-8 sm:-bottom-10 pointer-events-none z-10 flex flex-col items-center">
              <div className="font-handwriting text-2xl sm:text-3xl text-[#FBBF24] font-bold rotate-6 tracking-wide drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)] text-center leading-tight">
                Code<br />
                Design<br />
                Create
              </div>
              {/* Handwritten Arrow SVG */}
              <svg className="w-16 h-14 text-[#F59E0B] -rotate-12 mt-1" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M10 20 C 30 70, 70 70, 85 30" />
                <path d="M70 30 L 85 30 L 85 45" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

