import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, Bot, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 flex items-center overflow-hidden bg-grid-subtle"
    >
      {/* Ambient background glow - subtle and restrained */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Single unboxed status kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span>{t.hero.roleBadge}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-400">{t.hero.mentorAt}</span>
            </div>

            {/* Oversized Typographic Statement */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance] mb-6">
              {t.hero.tagline}
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold border border-slate-300 dark:border-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Claim-to-Proof Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-white/10 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  3+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.hero.yearsInIt}
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  250+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.hero.studentsTaught}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                  5+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.about.projectsLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar & Visual Composition */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-dashed border-sky-400/20 pointer-events-none" />
              
              {/* Central Avatar Visual Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center relative border-4 border-white dark:border-slate-900">
                  {!avatarError ? (
                    <img
                      src={profileData.avatarPath}
                      alt={profileData.fullName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                    />
                  ) : null}

                  {/* High-end Monogram Fallback (as required: AZ) */}
                  {avatarError && (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 flex flex-col items-center justify-center text-center p-4">
                      <span className="text-6xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-sky-300 to-white">
                        {profileData.initials}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-slate-400 mt-2 uppercase">
                        {profileData.shortName}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Technology Chips (Micro-cards with hover) */}
              <div className="absolute -top-3 left-4 sm:-top-4 sm:left-0 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Python</span>
              </div>

              <div className="absolute top-1/4 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Cpu className="w-4 h-4 text-sky-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Arduino IDE</span>
              </div>

              <div className="absolute bottom-6 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Bot className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Robotics</span>
              </div>

              <div className="absolute -bottom-4 right-6 sm:bottom-0 sm:right-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">AI & Prompt Eng</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
