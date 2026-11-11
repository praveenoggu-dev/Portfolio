import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030611]/85 backdrop-blur-md border-t border-[#172347] pt-14 pb-12 relative overflow-hidden">
      {/* Decorative Handwritten text in Warm Amber */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-end">
        <div className="flex flex-col items-end pr-2 sm:pr-8">
          <div className="font-handwriting text-2xl sm:text-3xl text-[#FBBF24] font-bold tracking-wide -rotate-3 drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]">
            Your Next Project Starts Here ♡
          </div>
          <svg className="w-16 h-8 text-[#F59E0B] mr-6 mt-1" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M10 15 Q 50 45 80 15" />
            <path d="M65 15 L 80 15 L 80 30" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1A243D]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center font-heading font-extrabold text-white text-sm shadow-md shadow-[#F59E0B]/25">
              {data.personal.initials}
            </div>
            <span className="font-heading font-bold text-base text-white">
              {data.personal.name}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#94A3B8]">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#FBBF24] transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#FBBF24] transition-colors">
              About
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-[#FBBF24] transition-colors">
              Services
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-[#FBBF24] transition-colors">
              Projects
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#FBBF24] transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={data.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={data.personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={data.personal.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
              aria-label="Twitter / X"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href={data.personal.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[#94A3B8] hover:text-white hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-[#64748B]">
          © {currentYear} {data.personal.name}. All rights reserved. Built with precision and modern UI/UX design.
        </div>
      </div>
    </footer>
  );
};
