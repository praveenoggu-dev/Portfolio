import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0D152B] border border-[#1A2645] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#081028]/80 text-[#94A3B8] hover:text-white border border-[#1A2645] flex items-center justify-center transition-all hover:scale-105"
        >
          <X size={18} />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/9] w-full bg-[#081028] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D152B] via-transparent to-transparent opacity-80" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070B14]/90 text-xs font-semibold text-[#FDE68A] border border-[rgba(245,158,11,0.3)]">
            {project.category}
          </span>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#121A30] border border-[#1A243D] text-xs font-medium text-white flex items-center gap-1.5"
                >
                  <CheckCircle2 size={13} className="text-[#F59E0B]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1A243D]">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="theme-btn-primary flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md"
              >
                <span>Live Preview</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0E1528] hover:bg-[#131D36] border border-[#1A243D] hover:border-[#F59E0B]/50 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all"
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
