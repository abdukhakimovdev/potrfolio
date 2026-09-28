import React from 'react';
import { Sparkles, Users, Award, BookOpen, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export const Teaching: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="teaching" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.teaching.title}
          title={t.teaching.subtitle}
          align="center"
        />

        {/* Central Quote Callout */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed [text-wrap:balance]">
            {t.teaching.quote}
          </blockquote>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            — Abduhakimov Azizbek · IT Mentor
          </p>
        </div>

        {/* Visual Mentorship Flow: Mentor -> Student -> Real Project */}
        <div className="mb-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            
            {/* Step 1: IT Mentor */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {t.teaching.flowMentor}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
                3+ yillik bilim va laboratoriya tajribasi
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden md:flex items-center justify-center text-slate-300 dark:text-slate-700">
              <ArrowRight className="w-6 h-6 animate-pulse text-blue-500" />
            </div>

            {/* Step 2: Student */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {t.teaching.flowStudent}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
                250+ o‘quvchilar: bolalar va yangi boshlovchilar
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="hidden md:flex items-center justify-center text-slate-300 dark:text-slate-700">
              <ArrowRight className="w-6 h-6 animate-pulse text-blue-500" />
            </div>

            {/* Step 3: Real Project */}
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {t.teaching.flowProject}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
                Haqiqiy robotlar, ilovalar va dasturlar
              </p>
            </div>

          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t.teaching.pillar1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.teaching.pillar1Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t.teaching.pillar2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.teaching.pillar2Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t.teaching.pillar3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.teaching.pillar3Desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
