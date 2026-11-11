import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Websites' | 'UI/UX'>('All');

  const tabs: Array<'All' | 'Websites' | 'UI/UX'> = [
    'All',
    'Websites',
    'UI/UX',
  ];

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2 mb-4">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Here are some of my recent projects. Each project is crafted with attention to detail and a focus on performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'theme-btn-primary shadow-md'
                  : 'bg-[#0E1528] text-[#94A3B8] hover:text-white border border-[#1A243D] hover:border-[#F59E0B]/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glow-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0F1E] border-b border-[#1A243D]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1528] via-transparent to-transparent opacity-60" />

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#070B14]/85 backdrop-blur-md text-[11px] font-semibold tracking-wide text-[#FDE68A] border border-[rgba(245,158,11,0.3)]">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#121A30] border border-[#1A243D] text-[11px] font-medium text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-[#F59E0B] group-hover:text-[#FBBF24]">
                <span className="flex items-center gap-1.5">
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <ExternalLink size={14} className="opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

