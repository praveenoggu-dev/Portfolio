import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onViewAllProjects,
}) => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#F59E0B] uppercase font-heading">
              MY SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              Featured Projects
            </h2>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-[#FBBF24] group transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
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

                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#070B14]/85 backdrop-blur-md text-[11px] font-semibold tracking-wide text-[#FDE68A] border border-[rgba(245,158,11,0.3)]">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Tech Tags */}
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

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* View Project Link at bottom */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] group-hover:text-[#FBBF24]">
                <span>View Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

