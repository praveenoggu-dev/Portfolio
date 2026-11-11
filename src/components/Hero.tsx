import React from 'react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

interface HeroProps {
  data: PortfolioData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Welcome Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1528]/90 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg"
              style={{
                border: '1px solid rgba(245, 158, 11, 0.4)',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              <span className="text-[#FDE68A]">{data.personal.badge}</span>
            </div>

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
                onClick={() => scrollTo('projects')}
                className="theme-btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#0E1528]/80 hover:bg-[#131D36] border border-[#1A243D] hover:border-[#F59E0B]/60 text-white font-semibold text-sm sm:text-base tracking-wide hover:-translate-y-1 transition-all cursor-pointer backdrop-blur-md"
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
                className="w-11 h-11 rounded-full bg-[#0E1528]/90 border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-115 transition-all shadow-md"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={data.personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#0E1528]/90 border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-115 transition-all shadow-md"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={data.personal.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-[#0E1528]/90 border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-115 transition-all shadow-md"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={data.personal.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-11 h-11 rounded-full bg-[#0E1528]/90 border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:bg-[#131D36] hover:scale-115 transition-all shadow-md"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Right Visual Portrait with Floating Animations */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center animate-float-slow">
              {/* Warm Amber Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl -z-10 animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, transparent 70%)',
                }}
              />

              <div
                className="absolute inset-2 rounded-3xl border backdrop-blur-md -rotate-3 transition-transform group-hover:rotate-0"
                style={{
                  borderColor: 'rgba(245, 158, 11, 0.45)',
                  backgroundColor: 'rgba(14, 21, 40, 0.4)',
                }}
              />

              {/* Developer Profile Card */}
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border-2 shadow-2xl bg-[#0B101E]"
                style={{
                  borderColor: '#F59E0B',
                  boxShadow: '0 0 35px rgba(245, 158, 11, 0.2)',
                }}
              >
                <img
                  src={data.personal.heroImage}
                  alt={data.personal.name}
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105 hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Badge: </> Turning Ideas into Digital Reality */}
              <div
                className="absolute -bottom-6 -left-6 sm:-left-10 z-20 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0B101E]/95 backdrop-blur-xl border shadow-2xl shadow-black/60 hover:scale-105 transition-all animate-float"
                style={{ borderColor: 'rgba(245, 158, 11, 0.5)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center text-white shadow-md shadow-[#F59E0B]/30">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                    Turning Ideas
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Into Digital Reality</span>
                    <Sparkles size={13} className="text-[#FBBF24]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
