import React from 'react';
import { MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const infoStats = [
    { value: `${profileData.age}`, label: t.about.ageLabel },
    { value: profileData.experienceYears, label: t.about.experienceLabel },
    { value: profileData.studentsCount, label: t.about.studentsLabel },
    { value: profileData.projectsCount, label: t.about.projectsLabel }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.about.title}
          title={t.about.subtitle}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-2xl shadow-md">
                  {profileData.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {profileData.fullName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {t.hero.roleBadge}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-blue-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">{t.about.workplaceLabel}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{profileData.companyName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">{t.about.locationLabel}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{profileData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">{t.about.studentsLabel}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">250+ O‘quvchi ta’lim olgan</span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.hero.statusAvailable}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Numerical Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* 4 Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {infoStats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5"
                >
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
                    {item.value}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
