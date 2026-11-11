import React, { useState, useEffect } from 'react';
import { Menu, X, Download, SlidersHorizontal } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface NavbarProps {
  data: PortfolioData;
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenCustomize: () => void;
  onDownloadCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  currentPage,
  onNavigate,
  onOpenCustomize,
  onDownloadCV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Skills', page: 'skills' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090514]/95 backdrop-blur-md border-b border-[#2C1B4D] py-3.5 shadow-xl shadow-black/60'
          : 'bg-[#090514]/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9333EA] to-[#A855F7] flex items-center justify-center font-heading font-extrabold text-white text-base tracking-tight shadow-md shadow-[#A855F7]/30 group-hover:scale-105 transition-all">
            {data.personal.initials}
          </div>
          <span className="font-heading font-bold text-lg text-white tracking-wide group-hover:text-[#C084FC] transition-colors">
            {data.personal.name}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#0F0A1E]/90 p-1.5 rounded-full border border-[#2C1B4D]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9333EA] to-[#A855F7] text-white shadow-md shadow-[#A855F7]/30'
                    : 'text-[#A78BFA] hover:text-white hover:bg-[#1D123A]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Medium Screen Nav (for tablet 768px - 1024px) */}
        <nav className="hidden md:flex lg:hidden items-center gap-4">
          {navLinks.slice(0, 5).map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`text-xs font-semibold py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#C084FC] border-b-2 border-[#A855F7]'
                    : 'text-[#A78BFA] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA and Customizer Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCustomize}
            title="Customize your portfolio details"
            className="p-2.5 rounded-xl text-[#A78BFA] hover:text-white hover:bg-[#150D2A] border border-[#2C1B4D] hover:border-[#A855F7]/50 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={17} />
          </button>

          <button
            onClick={onDownloadCV}
            className="theme-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-wide hover:-translate-y-0.5 transition-all cursor-pointer shadow-md"
          >
            <Download size={14} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCustomize}
            className="p-2 rounded-lg text-[#A78BFA] hover:text-white bg-[#150D2A] border border-[#2C1B4D] cursor-pointer"
          >
            <SlidersHorizontal size={17} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white bg-[#150D2A] border border-[#2C1B4D] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#150D2A]/98 backdrop-blur-2xl border-b border-[#2C1B4D] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`flex items-center justify-between text-left font-medium text-sm py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#9333EA]/90 to-[#A855F7]/90 font-bold shadow-md'
                      : 'text-[#A78BFA] hover:text-white hover:bg-[#1D123A]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
            <div className="pt-3 mt-1 border-t border-[#2C1B4D] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadCV();
                }}
                className="theme-btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm shadow-md cursor-pointer"
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
