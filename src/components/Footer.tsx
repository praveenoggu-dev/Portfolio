import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  data: PortfolioData;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ data, currentPage, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Skills', page: 'skills' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      const target = document.querySelector(`#${page}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#030611]/90 backdrop-blur-md border-t border-[#172347] pt-12 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1A243D]">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center font-heading font-extrabold text-white text-sm shadow-md shadow-[#F59E0B]/25 group-hover:scale-105 transition-all">
              {data.personal.initials}
            </div>
            <span className="font-heading font-bold text-base text-white group-hover:text-[#FBBF24] transition-colors">
              {data.personal.name}
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#94A3B8]">
            {footerLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`transition-colors cursor-pointer ${
                    isActive ? 'text-[#FBBF24] font-semibold' : 'hover:text-[#FBBF24]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={data.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:scale-110 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={data.personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#0E1528] border border-[#1A243D] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#F59E0B] hover:scale-110 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
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
