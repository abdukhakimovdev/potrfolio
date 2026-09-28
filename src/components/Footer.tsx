import React from 'react';
import { Send, Instagram, Phone, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-[#070B16] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-black tracking-tight text-slate-900 dark:text-white mb-3"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                {profileData.initials}
              </span>
              <span>{profileData.fullName}</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mb-4">
              {t.footer.roleText}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {profileData.companyName} · {profileData.location}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t.nav.teaching}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <a
                href={profileData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Send className="w-4 h-4 text-sky-500" />
                <span>@{profileData.telegramHandle}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>@{profileData.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={profileData.ilmhubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[9px] font-bold">
                  IH
                </span>
                <span>@{profileData.ilmhubHandle}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`tel:${profileData.phoneRaw}`}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {profileData.fullName}. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <span>Tashkent, Uzbekistan</span>
            <span>·</span>
            <span>IlmHub IT Mentor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
