import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StatConfig {
  id: string;
  target: number;
  suffix: string;
  titleKey: 'years' | 'students' | 'projects' | 'mentor';
  subKey: 'yearsSub' | 'studentsSub' | 'projectsSub' | 'mentorSub';
}

const statsData: StatConfig[] = [
  { id: 'years', target: 3, suffix: '+', titleKey: 'years', subKey: 'yearsSub' },
  { id: 'students', target: 250, suffix: '+', titleKey: 'students', subKey: 'studentsSub' },
  { id: 'projects', target: 5, suffix: '+', titleKey: 'projects', subKey: 'projectsSub' },
  { id: 'mentor', target: 1, suffix: '', titleKey: 'mentor', subKey: 'mentorSub' }
];

export const Stats: React.FC = () => {
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({
    years: 0,
    students: 0,
    projects: 0,
    mentor: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.round(3 * easeOutProgress),
              students: Math.round(250 * easeOutProgress),
              projects: Math.round(5 * easeOutProgress),
              mentor: Math.round(1 * easeOutProgress)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10">
          {statsData.map(stat => (
            <div key={stat.id} className="pt-6 sm:pt-0 sm:px-6 first:pt-0 first:pl-0 text-center sm:text-left">
              <p className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
                {counts[stat.id]}
                <span className="text-blue-600 dark:text-blue-400">{stat.suffix}</span>
              </p>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-2">
                {t.stats[stat.titleKey]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t.stats[stat.subKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
