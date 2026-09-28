import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/80 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-200/80 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
};
