import React from 'react';

export type LogoStyle = 'code-brackets' | 'cyber-hex' | 'terminal' | 'infinity-loop';

interface LogoProps {
  name?: string;
  role?: string;
  style?: LogoStyle;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  name = 'Praveen Oggu',
  style = 'code-brackets',
  size = 'md',
  className = '',
}) => {
  const iconDimensions = {
    sm: { box: 'w-8 h-8', svg: 24, font: 'text-sm' },
    md: { box: 'w-10 h-10', svg: 28, font: 'text-lg' },
    lg: { box: 'w-12 h-12', svg: 34, font: 'text-xl' },
  }[size];

  // Render the chosen SVG emblem based on style
  const renderEmblem = () => {
    switch (style) {
      case 'cyber-hex':
        // Geometric Hexagon with interconnected P & O circuit
        return (
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full p-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E9D5FF" />
              </linearGradient>
            </defs>
            {/* Hexagon Frame */}
            <polygon
              points="20,2 36,11 36,29 20,38 4,29 4,11"
              stroke="url(#hexGrad)"
              strokeWidth="2.2"
              strokeLinejoin="round"
              className="group-hover:stroke-[#E9D5FF] transition-all"
            />
            {/* Inner P & O geometry */}
            {/* P Stem */}
            <path
              d="M13 11V29"
              stroke="url(#lineGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* P Loop connects to O */}
            <path
              d="M13 11H20C22.7 11 24.5 12.8 24.5 15.5C24.5 18.2 22.7 20 20 20H13"
              stroke="url(#lineGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* O Ring */}
            <circle
              cx="26"
              cy="23"
              r="4.5"
              stroke="#C084FC"
              strokeWidth="2.2"
            />
            {/* Tech Node Dots */}
            <circle cx="20" cy="2" r="1.5" fill="#E9D5FF" />
            <circle cx="20" cy="38" r="1.5" fill="#E9D5FF" />
          </svg>
        );

      case 'terminal':
        // Mini Developer Terminal window >_ PO
        return (
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full p-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="termGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#6B21A8" />
              </linearGradient>
            </defs>
            {/* Window Outline */}
            <rect
              x="3"
              y="5"
              width="34"
              height="30"
              rx="7"
              fill="#100722"
              stroke="url(#termGrad)"
              strokeWidth="2"
            />
            {/* Window Dots */}
            <circle cx="8" cy="11" r="1.5" fill="#EF4444" />
            <circle cx="13" cy="11" r="1.5" fill="#F59E0B" />
            <circle cx="18" cy="11" r="1.5" fill="#10B981" />
            {/* Prompt > */}
            <path
              d="M9 22L14 26L9 30"
              stroke="#C084FC"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* PO Monogram in Terminal */}
            <text
              x="17"
              y="28"
              fill="#FFFFFF"
              fontSize="10"
              fontWeight="800"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              PO
            </text>
            {/* Cursor */}
            <rect
              x="32"
              y="22"
              width="2"
              height="7"
              fill="#A855F7"
              className="animate-pulse"
            />
          </svg>
        );

      case 'infinity-loop':
        // Continuous Infinity Loop (P connected seamlessly to O)
        return (
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#67E8F9" />
              </linearGradient>
            </defs>
            {/* Glowing background circle */}
            <rect
              x="4"
              y="4"
              width="32"
              height="32"
              rx="10"
              fill="#120A24"
              stroke="#2C1B4D"
              strokeWidth="1.5"
            />
            {/* Infinity / Flowing P & O Curves */}
            {/* Left loop (P) */}
            <path
              d="M13 28V12C13 12 17 12 19 14C21 16 21 19 19 21C17 23 13 23 13 23"
              stroke="url(#infGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right loop (O) */}
            <circle
              cx="25.5"
              cy="20"
              r="5.5"
              stroke="url(#infGrad)"
              strokeWidth="2.5"
            />
            {/* Radiant center accent */}
            <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
          </svg>
        );

      case 'code-brackets':
      default:
        // Modern Developer Monogram: < P O /> with Glowing Brackets & Violet Tech Core
        return (
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bracketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
              <linearGradient id="badgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A1647" />
                <stop offset="100%" stopColor="#140927" />
              </linearGradient>
            </defs>
            {/* Modern squircle badge background */}
            <rect
              x="2"
              y="2"
              width="36"
              height="36"
              rx="11"
              fill="url(#badgeBg)"
              stroke="#3F2370"
              strokeWidth="1.5"
              className="group-hover:stroke-[#A855F7] transition-all"
            />
            {/* Left Bracket < */}
            <path
              d="M9 15L5 20L9 25"
              stroke="#A855F7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            {/* Stylized 'P' */}
            <path
              d="M13.5 13.5V26.5"
              stroke="url(#bracketGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M13.5 13.5H18C19.8 13.5 21.2 14.8 21.2 16.6C21.2 18.4 19.8 19.7 18 19.7H13.5"
              stroke="url(#bracketGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Stylized 'O' */}
            <circle
              cx="25.5"
              cy="20"
              r="4.2"
              stroke="url(#bracketGrad)"
              strokeWidth="2.4"
            />
            {/* Right Closing Bracket / Slash > */}
            <path
              d="M31 15L35 20L31 25"
              stroke="#C084FC"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </svg>
        );
    }
  };

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Logo Icon Container */}
      <div
        className={`${iconDimensions.box} relative rounded-xl flex items-center justify-center shadow-lg shadow-[#A855F7]/25 group-hover:shadow-[#C084FC]/40 group-hover:scale-105 transition-all duration-300`}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#9333EA] to-[#C084FC] opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
        
        {/* Vector SVG Emblem */}
        <div className="relative w-full h-full z-10 flex items-center justify-center">
          {renderEmblem()}
        </div>
      </div>

      {/* Brand Name */}
      <span
        className={`font-heading font-extrabold ${iconDimensions.font} tracking-wide text-white group-hover:text-[#C084FC] transition-colors`}
      >
        {name}
      </span>
    </div>
  );
};
