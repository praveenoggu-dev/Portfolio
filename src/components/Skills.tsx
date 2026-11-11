import React from 'react';
import { Skill } from '../data/portfolioData';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Only show the 6 required skills: HTML, CSS, JavaScript, React.js, PHP, MySQL
  const allowedOrder = ['HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'MySQL'];
  
  // Match skills from prop or fall back to standard 6 skills
  const filtered = skills.filter((s) => allowedOrder.includes(s.name));
  const displaySkills = allowedOrder
    .map((name) => filtered.find((s) => s.name === name) || { name, icon: name.toLowerCase().replace(/[^a-z0-9]/g, ''), color: '#F59E0B' });

  // Custom SVG Icons for accurate tech brand badges
  const renderSkillIcon = (name: string, icon: string) => {
    const key = name.toLowerCase();

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

    if (key.includes('javascript') || key === 'js') {
      return (
        <div className="w-9 h-9 rounded-lg bg-[#F7DF1E] flex items-end justify-end p-1 font-black text-black text-sm tracking-tighter leading-none shadow-md">
          JS
        </div>
      );
    }

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

    if (key.includes('php')) {
      return (
        <div className="w-10 h-7 rounded-md bg-[#777BB4] flex items-center justify-center font-bold text-white text-xs tracking-tight shadow-md">
          php
        </div>
      );
    }

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
    <section id="skills" className="py-24 relative bg-[#060B1A]/40 backdrop-blur-sm">
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
            Core technologies and tools I work with to build modern, responsive web applications.
          </p>
        </div>

        {/* Skills Cards Grid - 6 Skills, No Percentages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
