import React, { useState, useEffect } from 'react';
import { Menu, X, Download, SlidersHorizontal } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface NavbarProps {
  data: PortfolioData;
  onOpenCustomize: () => void;
  onDownloadCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-[#1A243D] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center font-heading font-extrabold text-white text-base tracking-tight shadow-md shadow-[#F59E0B]/25 group-hover:scale-105 transition-all">
            {data.personal.initials}
          </div>
          <span className="font-heading font-bold text-lg text-white tracking-wide group-hover:text-[#FBBF24] transition-colors">
            {data.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#94A3B8] hover:text-white font-medium text-sm transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F59E0B] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA and Customizer Actions (No color selector dropdown!) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCustomize}
            title="Customize your portfolio details"
            className="p-2.5 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#0E1528] border border-[#1A243D] hover:border-[#F59E0B]/50 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={17} />
          </button>

          <button
            onClick={onDownloadCV}
            className="theme-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Download size={15} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCustomize}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white bg-[#0E1528] border border-[#1A243D]"
          >
            <SlidersHorizontal size={17} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white bg-[#0E1528] border border-[#1A243D] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E1528]/95 backdrop-blur-xl border-b border-[#1A243D] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#94A3B8] hover:text-white font-medium text-base py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1A243D] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadCV();
                }}
                className="theme-btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold shadow-md"
              >
                <Download size={17} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
