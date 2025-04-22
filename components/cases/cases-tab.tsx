"use client";

import React from 'react';
import { useLanguage } from '../providers/app-provider';
import { CaseCard } from './case-card';
import { getColorByIndex } from '../../lib/color-utils';

export function CasesTab() {
  const { t } = useLanguage();
  const cases = t('cases.items');
  
  return (
    <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.isArray(cases) && cases.map((caseItem, index) => {
        // Получаем цвет из пула по индексу
        const color = getColorByIndex(index);
        
        // Используем указанные в кейсе цвета или автоматически назначенные
        const backgroundColor = caseItem.backgroundColor || color.hex.light;
        const darkBackgroundColor = caseItem.darkBackgroundColor || color.hex.dark;
        
        return (
          <div key={caseItem.id || index} className="flex justify-center">
            <CaseCard
              id={caseItem.id}
              emoji={caseItem.emoji}
              title={caseItem.title}
              backgroundColor={backgroundColor}
              darkBackgroundColor={darkBackgroundColor}
            />
          </div>
        );
      })}
    </div>
  );
}