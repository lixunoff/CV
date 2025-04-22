"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/header';
import { ProfileHero } from '../components/profile/profile-hero';
import { NavigationTabs } from '../components/layout/navigation-tabs';
import { ExperienceTab } from '../components/profile/experience-tab';
import { CasesTab } from '../components/cases/cases-tab';
import { Footer } from '../components/layout/footer';
import { useLanguage } from "../components/providers/app-provider";
import { Paragraph } from '../components/ui/typography';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  
  // Получаем tab из URL при первой загрузке и при изменении параметров
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['experience', 'cases', 'blog'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Опционально: обновляем URL при смене таба без перезагрузки страницы
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tabId);
    window.history.pushState({}, '', url);
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <>
            <ExperienceTab />
          </>
        );
      case 'cases':
        return <CasesTab />;
      case 'blog':
        return <div className="py-10 text-center"><Paragraph>Coming soon</Paragraph></div>;
      default:
        return <ExperienceTab />;
    }
  };

  return (
    <main className="w-full px-4 py-10 flex justify-center items-start">
      <div className="flex-1 max-w-[676px] flex flex-col justify-start items-start gap-40">
        <Header />

        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <ProfileHero />
          
          <div className="self-stretch flex flex-col justify-start items-start gap-12">
            <NavigationTabs 
              activeTab={activeTab} 
              onTabChange={handleTabChange}
            />
            
            {renderTabContent()}
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}