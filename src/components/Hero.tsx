import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  data: PortfolioData;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onNavigate }) => {
  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate('projects');
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight tracking-tight">
                Hi, I'm{' '}
                <span className="shimmer-text inline-block">
                  {data.personal.displayName || data.personal.name}
                </span>
              </h1>

              {/* Constant Subtitle with smooth shimmer animation (No one-by-one typewriter) */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold shimmer-text leading-snug">
                {data.personal.role}
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              {data.personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleViewWork}
                className="theme-btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={handleContact}
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#1F053D]/80 hover:bg-[#2E0859] border border-[#4A1278] hover:border-[#8B5CF6]/70 text-white font-semibold text-sm sm:text-base tracking-wide hover:-translate-y-1 transition-all cursor-pointer backdrop-blur-md shadow-lg shadow-[#8B5CF6]/15"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={data.personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-[#1F053D]/90 border border-[#4A1278] flex items-center justify-center text-[#C4B5FD] hover:text-white hover:border-[#8B5CF6] hover:bg-[#2E0859] hover:scale-115 transition-all shadow-md"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={data.personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#1F053D]/90 border border-[#4A1278] flex items-center justify-center text-[#C4B5FD] hover:text-white hover:border-[#8B5CF6] hover:bg-[#2E0859] hover:scale-115 transition-all shadow-md"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Visual Portrait with Floating Animations */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center animate-float-slow">
              {/* Vibrant Royal Electric Purple Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl -z-10 animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, transparent 70%)',
                }}
              />

              <div
                className="absolute inset-2 rounded-3xl border backdrop-blur-md -rotate-3 transition-transform group-hover:rotate-0"
                style={{
                  borderColor: 'rgba(139, 92, 246, 0.55)',
                  backgroundColor: 'rgba(31, 5, 61, 0.45)',
                }}
              />

              {/* Developer Profile Card */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border-2 shadow-2xl bg-[#120324]"
                style={{
                  borderColor: '#8B5CF6',
                  boxShadow: '0 0 35px rgba(139, 92, 246, 0.35)',
                }}
              >
                <img
                  src={data.personal.heroImage}
                  alt={data.personal.name}
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105 hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070114] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Badge: Turning Ideas into Digital Reality */}
              <div
                className="absolute -bottom-6 -left-6 sm:-left-10 z-20 px-5 py-3 rounded-2xl bg-[#120324]/95 backdrop-blur-xl border shadow-2xl shadow-black/70 hover:scale-105 transition-all animate-float"
                style={{ borderColor: 'rgba(139, 92, 246, 0.6)' }}
              >
                <div className="text-[11px] font-semibold tracking-wider text-[#C084FC] uppercase">
                  Turning Ideas
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Into Digital Reality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
