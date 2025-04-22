// components/layout/navigation-tabs.tsx
"use client";

import React from 'react';
import { useTheme, useLanguage } from "../providers/app-provider";
import { TabText } from '../ui/typography';

interface Tab {
  id: string;
  label: string;
}

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const { t } = useLanguage();

  const tabs: Tab[] = [
    { id: 'experience', label: t('nav.experience') },
    { id: 'cases', label: t('nav.cases') },
    { id: 'blog', label: t('nav.blog') }
  ];

  return (
    <div className="self-stretch border-b border-border inline-flex justify-start items-start gap-10">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="relative flex flex-col items-center cursor-pointer pb-4"
          onClick={() => onTabChange(tab.id)}
        >
          <TabText active={activeTab === tab.id}>{tab.label}</TabText>
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
          )}
        </div>
      ))}
    </div>
  );
}