import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillsList } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: t.skills.tabs.all },
    { id: 'programming', label: t.skills.tabs.programming },
    { id: 'robotics', label: t.skills.tabs.robotics },
    { id: 'appdev', label: t.skills.tabs.appdev },
    { id: 'ai', label: t.skills.tabs.ai },
    { id: 'digital', label: t.skills.tabs.digital }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.skills.title}
          title={t.skills.subtitle}
          align="center"
        />

        {/* Filter buttons / tabs (functional segmented control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
