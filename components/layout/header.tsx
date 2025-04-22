"use client";

import React from 'react';
import { ThemeSwitch } from '../ui/theme-switch';
import { LanguageSwitch } from '../ui/language-switch';
import { useLanguage } from '../providers/app-provider';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  
  // Проверяем, находимся ли мы на странице кейса
  const isCasePage = pathname?.startsWith('/cases/');
  const isJobsPage = pathname === '/jobs';
  
  return (
    <div className="self-stretch inline-flex justify-between items-center w-full">
      {/* Левая часть хедера */}
      <div>
        {/* Если мы на странице кейса, показываем кнопку "Back to Portfolio" с query param для активации таба cases */}
        {isCasePage ? (
          <Link href="/?tab=cases" className="inline-flex items-center text-muted hover:text-accent">
            <ArrowLeft size={16} className="mr-2" />
            {t('nav.backToPortfolio')}
          </Link>
        ) : isJobsPage ? (
          /* Если мы на странице вакансий, показываем кнопку "Back to Home" */
          <Link href="/" className="inline-flex items-center text-muted hover:text-accent">
            <ArrowLeft size={16} className="mr-2" />
            {language === 'en' ? 'Home' : 'Додому'}
          </Link>
        ) : (
          /* На главной странице показываем ссылку на вакансии */
          <Link href="/jobs" className="text-muted hover:text-accent">
            {language === 'en' ? 'Vacancies' : 'Вакансії'}
          </Link>
        )}
      </div>
      
      {/* Правая часть хедера */}
      <div className="flex justify-end items-start gap-2 sm:gap-4">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </div>
  );
}