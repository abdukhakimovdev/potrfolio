import React, { useState } from 'react';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  // Map item key
  const itemKey = project.id === 'arduino-robotic-arm' ? 'robotics' :
                  project.id === 'python-learning-suite' ? 'python' :
                  project.id === 'iot-smart-station' ? 'iot' :
                  project.id === 'mit-edu-mobile-app' ? 'mobile' :
                  project.id === 'ilmhub-student-portal' ? 'portal' : 'ai';

  const projectTrans = (t.projects.items as Record<string, { title: string; desc: string; longDesc: string }>)[itemKey] || {
    title: project.titleKey,
    desc: project.descriptionKey
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 shadow-xs hover:shadow-xl hover:shadow-blue-500/5"
    >
      {/* Image container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-gradient-to-br from-slate-800 to-slate-900">
            <Code2 className="w-10 h-10 mb-2 text-blue-400" />
            <span className="text-xs font-semibold">{projectTrans.title}</span>
          </div>
        )}

        {/* Category tag overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Quick view button overlay */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {projectTrans.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {projectTrans.desc}
          </p>
        </div>

        {/* Tech tags and footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="text-[11px] text-slate-500 dark:text-slate-400"
              >
                {tech} ·
              </span>
            ))}
          </div>

          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>{t.projects.viewDetails}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
