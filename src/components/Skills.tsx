import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Skill } from '../data/portfolioData';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [showAll, setShowAll] = useState(false);

  // Core 5 skills as shown in the mockup
  const coreSkills = skills.slice(0, 5);
  const displaySkills = showAll ? skills : coreSkills;

  // Custom SVG Icons for accurate tech brand badges
  const renderSkillIcon = (icon: string) => {
    switch (icon) {
      case 'html5':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#E34F26" />
            <path d="M12 4.6V19.6L16.9 18.2L18.2 4.6H12Z" fill="#EF652A" />
            <path d="M12 8.3H8.3L8.6 11.5H12V8.3ZM12 14.5H9L9.2 16.4L12 17.2V14.5Z" fill="#EBEBEB" />
            <path d="M12 8.3V11.5H15.4L15.1 14.5L12 15.4V17.2L14.9 16.4L15.7 8.3H12Z" fill="#FFFFFF" />
          </svg>
        );
      case 'css3':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#1572B6" />
            <path d="M12 4.6V19.6L16.9 18.2L18.2 4.6H12Z" fill="#33A9DC" />
            <path d="M12 8.3H8.3L8.6 11.5H12V8.3ZM12 14.5H9L9.2 16.4L12 17.2V14.5Z" fill="#EBEBEB" />
            <path d="M12 8.3V11.5H15.4L15.1 14.5L12 15.4V17.2L14.9 16.4L15.7 8.3H12Z" fill="#FFFFFF" />
          </svg>
        );
      case 'javascript':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] flex items-center justify-center font-bold text-black text-sm tracking-tighter">
            JS
          </div>
        );
      case 'php':
        return (
          <div className="w-9 h-7 rounded-md bg-[#777BB4] flex items-center justify-center font-bold text-white text-xs tracking-tight">
            php
          </div>
        );
      case 'mysql':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#00618A] flex items-center justify-center font-bold text-white text-[11px] tracking-tight">
            SQL
          </div>
        );
      case 'react':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#20232A] flex items-center justify-center text-[#61DAFB] font-bold text-xs">
            ⚛
          </div>
        );
      case 'nodejs':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#333333] flex items-center justify-center text-[#68A063] font-bold text-xs">
            Node
          </div>
        );
      case 'typescript':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#3178C6] flex items-center justify-center font-bold text-white text-xs">
            TS
          </div>
        );
      case 'tailwind':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-[#38BDF8] font-bold text-xs">
            TW
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center text-white font-bold text-xs">
            {icon.slice(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#060B1A]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
              TECHNICAL SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              My Skills
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#FBBF24] group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>{showAll ? 'Show Core Skills' : 'View All Skills'}</span>
            {showAll ? (
              <ChevronUp size={16} />
            ) : (
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {displaySkills.map((skill) => (
            <div
              key={skill.name}
              className="glow-card rounded-2xl p-6 flex flex-col items-center justify-between text-center relative group"
            >
              {/* Skill Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#080D1D] border border-[#1A243D] flex items-center justify-center mb-5 group-hover:border-[#F59E0B]/60 group-hover:scale-110 transition-all shadow-inner">
                {renderSkillIcon(skill.icon)}
              </div>

              {/* Skill Name */}
              <h3 className="font-heading font-bold text-white text-base mb-4 tracking-wide">
                {skill.name}
              </h3>

              {/* Progress Bar Container */}
              <div className="w-full space-y-2">
                <div className="w-full h-2 rounded-full bg-[#080D1D] border border-[#1A243D] overflow-hidden p-[1px]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#D97706] to-[#FBBF24] transition-all duration-1000 ease-out shadow-sm shadow-[#F59E0B]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                {/* Level Percentage */}
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#FBBF24]">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

