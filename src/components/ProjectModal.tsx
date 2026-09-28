import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Code2 } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Resolve title and descriptions
  const itemKey = project.id === 'arduino-robotic-arm' ? 'robotics' :
                  project.id === 'python-learning-suite' ? 'python' :
                  project.id === 'iot-smart-station' ? 'iot' :
                  project.id === 'mit-edu-mobile-app' ? 'mobile' :
                  project.id === 'ilmhub-student-portal' ? 'portal' : 'ai';

  const projectTrans = (t.projects.items as Record<string, { title: string; desc: string; longDesc: string }>)[itemKey] || {
    title: project.titleKey,
    desc: project.descriptionKey,
    longDesc: project.longDescriptionKey
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
          aria-label={t.projects.closeModal}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-video w-full bg-slate-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={e => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 block">
                {project.category}
              </span>
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-black text-white">
                {projectTrans.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {projectTrans.longDesc}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              {t.projects.techUsed}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t.projects.viewCode}</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>{t.hero.contactMe}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
