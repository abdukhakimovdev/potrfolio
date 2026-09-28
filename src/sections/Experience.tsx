import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.experience.title}
          title={t.experience.subtitle}
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-10 border-l-2 border-blue-500/30 dark:border-blue-500/30 space-y-12">
            
            {/* Timeline Item: Current Role at IlmHub */}
            <div className="relative group">
              {/* Active pulsing timeline node */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-[#0B1020] flex items-center justify-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-blue-500/50 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                      {t.experience.current}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {t.experience.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.experience.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  <span>{profileData.companyName}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t.experience.desc}
                </p>

                {/* Key Achievements Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-white/5">
                  {t.experience.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
