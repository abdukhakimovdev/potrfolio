import React from 'react';
import {
  Code2,
  Layout,
  FileCode2,
  Palette,
  Cpu,
  Bot,
  Blocks,
  Gamepad2,
  Smartphone,
  Tablet,
  Brain,
  Sparkles,
  Monitor,
  Settings2,
  LucideIcon
} from 'lucide-react';
import { Skill } from '../types';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  FileCode2,
  Palette,
  Cpu,
  Bot,
  Blocks,
  Gamepad2,
  Smartphone,
  Tablet,
  Brain,
  Sparkles,
  Monitor,
  Settings2
};

export const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { t } = useLanguage();
  const IconComponent = iconMap[skill.iconName] || Code2;

  // Resolve proficiency text
  const levelKey = skill.proficiencyKey.split('.').pop() as 'practical' | 'experienced' | 'teaching' | 'working';
  const levelText = t.skills.levels[levelKey] || 'Practical';

  // Resolve description
  const itemKey = skill.id === 'mit-app-inventor' ? 'mit' : 
                   skill.id === 'prompt-eng' ? 'prompt' : 
                   skill.id === 'ai-tools' ? 'aitools' : 
                   skill.id === 'computer-literacy' ? 'literacy' : 
                   skill.id === 'digital-tools' ? 'digitaltools' : 
                   skill.id === 'android-dev' ? 'android' : skill.id;
                   
  const descText = (t.skills.items as Record<string, { desc: string }>)[itemKey]?.desc || '';

  return (
    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-lg hover:shadow-blue-500/5">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Clean unboxed metadata separator */}
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {levelText}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {skill.name}
      </h3>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {descText}
      </p>
    </div>
  );
};
