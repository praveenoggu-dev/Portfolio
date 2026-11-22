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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#130B26] border border-[#2C1B4D] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#090514]/85 text-[#A78BFA] hover:text-white border border-[#2C1B4D] flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/9] w-full bg-[#090514] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130B26] via-transparent to-transparent opacity-85" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#090514]/90 text-xs font-semibold text-[#E9D5FF] border border-[rgba(168,85,247,0.4)]">
            {project.category}
          </span>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#A78BFA] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C084FC] mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#1D123A] border border-[#2C1B4D] text-xs font-medium text-white flex items-center gap-1.5"
                >
                  <CheckCircle2 size={13} className="text-[#C084FC]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#2C1B4D]">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="theme-btn-primary flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer"
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
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#150D2A] hover:bg-[#1D123A] border border-[#2C1B4D] hover:border-[#A855F7]/60 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer"
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
