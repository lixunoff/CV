"use client";

import React from 'react';
import { useTheme, useLanguage } from "../providers/app-provider";
import { Heading2 } from '../ui/typography';
import { ExperienceItem } from './experience-item';
import { Paragraph } from '../ui/typography';
import { LeadText } from '../ui/typography';

export function ExperienceTab() {
  const { t, language } = useLanguage();
  
  // Получение данных об опыте работы
  const workTitle = t('work.title');
  const experienceItems = t('work.experience');

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-12">
      <LeadText>{t('profile.bio')}</LeadText>

      <Heading2>{workTitle}</Heading2>
      
      {Array.isArray(experienceItems) ? (
        experienceItems.map((item, index) => (
          <ExperienceItem
            key={index}
            company={item.company}
            position={item.position}
            period={item.period}
            useArrowIcon={item.useArrowIcon}
            description={item.description}
            responsibilities={item.responsibilities}
          />
        ))
      ) : (
        // Запасной вариант, если данные не загрузились
        <ExperienceItem
          company="InspireX (WDevs)"
          position="Product Designer (NDA)"
          period="Mar 2018 → Feb 2024"
          description="Development of a B2B SaaS telehealth platform."
          responsibilities={[
            "Creating and implementing design strategies for web/mobile/OS/admin applications.",
            "Designing and maintaining a comprehensive design system."
          ]}
        />
      )}
    </div>
  );
}