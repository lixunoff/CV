// app/page.tsx
"use client";

import React, { useState } from 'react';
import { Header } from '../components/layout/header';
import { ProfileHero } from '../components/profile/profile-hero';
import { NavigationTabs } from '../components/layout/navigation-tabs';
import { ExperienceTab } from '../components/profile/experience-tab';
import { Footer } from '../components/layout/footer';
import { useTheme, useLanguage } from "../components/providers/app-provider";
import { Paragraph } from '../components/ui/typography';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');
  const { t } = useLanguage();
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'experience':
        return <ExperienceTab />;
      case 'cases':
        return <div className="py-10"><Paragraph>Раздел "Кейсы" в разработке</Paragraph></div>;
      case 'blog':
        return <div className="py-10"><Paragraph>Раздел "Блог" в разработке</Paragraph></div>;
      default:
        return <ExperienceTab />;
    }
  };

  return (
    <main className="w-full px-4 py-10 flex justify-center items-start">
      <div className="flex-1 max-w-[676px] flex flex-col justify-start items-start gap-40">
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <Header />
          <ProfileHero />
          
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <NavigationTabs 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
            />
            
            {renderTabContent()}
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}