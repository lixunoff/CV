// components/layout/footer.tsx
"use client";

import React from 'react';
import { FooterText } from '../ui/typography';
import { useTheme, useLanguage } from "../providers/app-provider";

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <div className="self-stretch inline-flex justify-between items-center">
      <FooterText>{currentYear}</FooterText>
      <div className="flex justify-start items-center gap-10">
        <a 
          href="mailto:lixunoff@gmail.com" 
          className={`transition-colors hover:underline ${theme === 'light' ? 'text-muted' : 'text-muted'}`}
        >
          <FooterText>{t('footer.email')}</FooterText>
        </a>
        <a 
          href="https://t.me/lixunoff" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`transition-colors hover:underline ${theme === 'light' ? 'text-muted' : 'text-muted'}`}
        >
          <FooterText>{t('footer.telegram')}</FooterText>
        </a>
        <a 
          href="https://linkedin.com/in/lixunoff" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`transition-colors hover:underline ${theme === 'light' ? 'text-muted' : 'text-muted'}`}
        >
          <FooterText>{t('footer.linkedin')}</FooterText>
        </a>
      </div>
    </div>
  );
}