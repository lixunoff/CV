"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage, useTheme } from '../providers/app-provider';
import { Heading2 } from '../ui/typography';
import { cn } from '../../lib/utils';

interface CaseCardProps {
  id: string;
  emoji: string;
  title: string;
  backgroundColor: string;
  darkBackgroundColor?: string;
}

export function CaseCard({ 
  id, 
  emoji, 
  title, 
  backgroundColor,
  darkBackgroundColor
}: CaseCardProps) {
  const { theme } = useTheme();
  
  // Определяем цвет фона в зависимости от темы
  const bgColor = theme === 'dark' && darkBackgroundColor
    ? darkBackgroundColor
    : backgroundColor;
  
  return (
    <Link href={`/cases/${id}`} className="block w-full md:max-w-[326px]">
      <div 
        className={cn(
          "h-[326px] w-full p-6 rounded-[20px] inline-flex flex-col justify-start items-start gap-2.5 transition-transform hover:scale-[1.02]"
        )}
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-[48px] font-semibold leading-[48px]">
          {emoji}
        </div>
        <div className="self-stretch flex-1 inline-flex justify-start items-end gap-2.5">
          <Heading2 className="w-full md:w-[270px]">
            {title}
          </Heading2>
        </div>
      </div>
    </Link>
  );
}