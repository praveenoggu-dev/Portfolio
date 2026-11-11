import React from 'react';
import { Skill } from '../data/portfolioData';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Ordered logically: Core Programming Languages -> Frontend Web -> Backend & Database
  const allowedOrder = [
    'C',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'PHP',
    'MySQL',
  ];

  // Match skills from prop or fall back to standard 9 skills
  const filtered = skills.filter((s) => allowedOrder.includes(s.name));
  const displaySkills = allowedOrder.map(
    (name) =>
      filtered.find((s) => s.name === name) || {
        name,
        icon: name.toLowerCase().replace(/[^a-z0-9]/g, ''),
        color: '#F59E0B',
      }
  );

  // Custom SVG Icons for accurate tech brand badges
  const renderSkillIcon = (name: string, icon: string) => {
    const key = name.toLowerCase();

    // 1. C Language
    if (key === 'c') {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00599C] to-[#004482] border border-[#00599C]/60 flex items-center justify-center font-black text-white text-lg tracking-tighter shadow-md">
          C
        </div>
      );
    }

    // 2. Java
    if (key.includes('java') && !key.includes('script')) {
      return (
        <svg className="w-9 h-9" viewBox="0 0 128 128">
          <path
            d="M46.7 91.2c-9.5-2.5-12.8-5.3-7.5-7.7 7.7-3.5 21.2-2.5 35.5-.2 12.8 2.1 22.8 1.1 24.6-.9 2.5-2.7-3.1-6.1-13.7-8.1-15.6-3-37-2.3-48.4 2.8-10.9 4.8-10.3 10.7 2 13.7 2.4.6 5 .9 7.5.4zm3.8 12c-11.2-2.8-15.1-6.2-8.8-9 9.1-4.1 24.9-2.9 41.7-.2 15 2.5 26.8 1.3 28.9-1 2.9-3.2-3.6-7.2-16.1-9.5-18.3-3.5-43.5-2.7-56.9 3.3-12.8 5.6-12.1 12.6 2.3 16.1 2.9.7 5.9 1 8.9.3zm-17.6 12.7c15.8 4 47.9 4.3 67.9-.6 5.8-1.4 10.4-3.5 9-6-1.9-3.4-10.4-4-19.4-4-7.5 0-15.2.4-23.2.7-18.1.7-33.1.2-40.4-2.8-4.2-1.7-6.2-1.7-6.9 1.1-.9 3.5 3.3 8.3 13 11.6zm22.4-78.5c4.7 4.9 2.5 9.7-.8 14.5-4 5.9-8.4 12.2-6.5 17.5 2.5 6.9 10.5 9.7 17.5 7.6 4.9-1.5 7.3-5.2 6.5-10.6-.7-4.8-3.9-9.1-6.7-13.4-3.9-6-7.2-11.5-6.5-17.3 1-8.2 8.7-14.7 15.6-20.7 2.6-2.3 4.9-4.8 5.7-7.9-12.5 6.6-23.7 16-24.8 30.3z"
            fill="#EA2D2E"
          />
          <path
            d="M83.4 57.6c4.2 3.6 2.2 7.1-.7 10.6-3.6 4.3-7.5 8.9-5.8 12.8 2.2 5 9.4 7.1 15.6 5.5 4.4-1.1 6.5-3.8 5.8-7.7-.6-3.5-3.5-6.6-6-9.8-3.5-4.4-6.4-8.4-5.8-12.6.9-6 7.8-10.7 13.9-15.1 2.3-1.7 4.4-3.5 5.1-5.8-11.2 4.8-21.2 11.7-22.1 22.1z"
            fill="#007396"
          />
        </svg>
      );
    }

    // 3. Python
    if (key.includes('python')) {
      return (
        <svg className="w-9 h-9" viewBox="0 0 128 128">
          <path
            d="M63.2 7.1c-14.9 0-24.8 3.3-29.2 5.5-8.4 4.1-13.9 11.8-13.9 22.8v10.4h28.5v3.6H19.9C8.9 49.4 0 58.6 0 71.3c0 14.7 9.8 24.3 23.9 24.3h8.3v-11.7c0-12.3 10.6-22.4 23.3-22.4h28.3c10.3 0 18.7-8.7 18.7-19.1V23.7c0-10.8-8.8-16.6-20.3-16.6zm-11 9.8c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8z"
            fill="#387EB8"
          />
          <path
            d="M64.8 120.9c14.9 0 24.8-3.3 29.2-5.5 8.4-4.1 13.9-11.8 13.9-22.8V82.2H79.4v-3.6h28.7c11 0 19.9-9.2 19.9-21.9 0-14.7-9.8-24.3-23.9-24.3h-8.3v11.7c0 12.3-10.6 22.4-23.3 22.4H44.2c-10.3 0-18.7 8.7-18.7 19.1v18.7c0 10.8 8.8 16.6 20.3 16.6zm11-9.8c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"
            fill="#FFE052"
          />
        </svg>
      );
    }

    // 4. HTML
    if (key.includes('html')) {
      return (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#E34F26" />
          <path d="M12 4.6V19.6L16.9 18.2L18.2 4.6H12Z" fill="#EF652A" />
          <path d="M12 8.3H8.3L8.6 11.5H12V8.3ZM12 14.5H9L9.2 16.4L12 17.2V14.5Z" fill="#EBEBEB" />
          <path d="M12 8.3V11.5H15.4L15.1 14.5L12 15.4V17.2L14.9 16.4L15.7 8.3H12Z" fill="#FFFFFF" />
        </svg>
      );
    }

    // 5. CSS
    if (key.includes('css')) {
      return (
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#1572B6" />
          <path d="M12 4.6V19.6L16.9 18.2L18.2 4.6H12Z" fill="#33A9DC" />
          <path d="M12 8.3H8.3L8.6 11.5H12V8.3ZM12 14.5H9L9.2 16.4L12 17.2V14.5Z" fill="#EBEBEB" />
          <path d="M12 8.3V11.5H15.4L15.1 14.5L12 15.4V17.2L14.9 16.4L15.7 8.3H12Z" fill="#FFFFFF" />
        </svg>
      );
    }

    // 6. JavaScript
    if (key.includes('javascript') || key === 'js') {
      return (
        <div className="w-9 h-9 rounded-lg bg-[#F7DF1E] flex items-end justify-end p-1 font-black text-black text-sm tracking-tighter leading-none shadow-md">
          JS
        </div>
      );
    }

    // 7. React.js
    if (key.includes('react')) {
      return (
        <svg className="w-9 h-9" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    }

    // 8. PHP
    if (key.includes('php')) {
      return (
        <div className="w-10 h-7 rounded-md bg-[#777BB4] flex items-center justify-center font-bold text-white text-xs tracking-tight shadow-md">
          php
        </div>
      );
    }

    // 9. MySQL
    if (key.includes('mysql') || key.includes('sql')) {
      return (
        <div className="w-10 h-8 rounded-lg bg-[#00618A] flex flex-col items-center justify-center font-black text-white text-[11px] leading-tight shadow-md">
          <span className="text-[9px] text-[#F29111] font-extrabold -mb-0.5">My</span>
          <span>SQL</span>
        </div>
      );
    }

    return (
      <div className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-white font-bold text-xs">
        {icon.slice(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <section id="skills" className="pt-32 sm:pt-40 pb-24 relative bg-[#060B1A]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
            My Skills
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Core programming languages, web technologies, and databases I work with.
          </p>
        </div>

        {/* Skills Cards Grid - 9 Skills in 3x3 Layout, No Percentages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {displaySkills.map((skill) => (
            <div
              key={skill.name}
              className="glow-card rounded-2xl p-6 flex flex-col items-center justify-center text-center relative group hover:-translate-y-1.5 transition-all duration-300 min-h-[160px]"
            >
              {/* Skill Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#080D1D] border border-[#1A243D] flex items-center justify-center mb-4 group-hover:border-[#F59E0B]/60 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all shadow-inner">
                {renderSkillIcon(skill.name, skill.icon)}
              </div>

              {/* Skill Name */}
              <h3 className="font-heading font-bold text-white text-base tracking-wide group-hover:text-[#FBBF24] transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
