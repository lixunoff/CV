"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Footer } from '../../../components/layout/footer';
import { Header } from '../../../components/layout/header';
import { useLanguage, useTheme } from '../../../components/providers/app-provider';
import { Heading1, Paragraph } from '../../../components/ui/typography';
import { 
  CaseTitle, 
  CaseText, 
  CaseSection, 
  CaseContainer, 
  CaseMarkdown
} from '../../../components/cases/case-page-components';
import { CaseContentRenderer } from '../../../components/cases/case-content-renderer';
import { getColorByIndex, getColorClassByIndex } from '../../../lib/color-utils';

// Определяем интерфейс для типа кейса
interface CaseItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  backgroundColor?: string;
  darkBackgroundColor?: string;
  content?: string;
  sections?: any[];
  colorIndex?: number; // Добавляем индекс цвета, если он есть в данных кейса
}

export default function CasePage() {
  const params = useParams();
  const id = params?.id as string;
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [caseData, setCaseData] = useState<CaseItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Получаем данные кейса из локализации
    if (id) {
      try {
        const cases = t('cases.items');
        
        if (cases && Array.isArray(cases)) {
          // Находим текущий кейс и его индекс в массиве
          let currentCaseIndex = -1;
          const currentCase = cases.find((item, index) => {
            if (item.id === id) {
              currentCaseIndex = index;
              return true;
            }
            return false;
          });
          
          if (currentCase) {
            // Добавляем индекс цвета, если его нет
            if (currentCase.colorIndex === undefined) {
              currentCase.colorIndex = currentCaseIndex;
            }
            setCaseData(currentCase as CaseItem);
          }
        }
      } catch (error) {
        console.error('Error loading case:', error);
      }
      
      setLoading(false);
    }
  }, [id, t, language]);

  if (loading) {
    return (
      <div className="w-full px-4 py-10 flex justify-center">
        <div className="flex-1 max-w-[676px]">
          <Header />
          <div className="my-40 text-center">
            <Paragraph>Loading...</Paragraph>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="w-full px-4 py-10 flex justify-center">
        <div className="flex-1 max-w-[676px]">
          <Header />
          
          <div className="my-20">
            <Heading1 className="mb-4">Case not found</Heading1>
            <Paragraph>Sorry, the case you're looking for doesn't exist or may have been removed.</Paragraph>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  }
  
  // Определяем, будет ли отображаться несколько эмодзи для veterinary-app
  const multipleEmojis = id === 'veterinary-app';
  
  // Получаем класс Tailwind для цвета из пула цветов, используя индекс кейса
  const colorIndex = caseData.colorIndex !== undefined ? caseData.colorIndex : 0;
  const colorClass = getColorClassByIndex(colorIndex);
  
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="flex-1 max-w-[676px]">
        <Header />
        
        <div className="my-40">
          {/* Emoji Header */}
          {/* Используем класс Tailwind из пула цветов */}
          <div 
            className={`w-full h-[200px] rounded-[20px] flex items-center justify-center mb-12 ${colorClass}`}
          >
            {multipleEmojis ? (
              <>
                <span className="text-[80px] mx-4">🐶</span>
                <span className="text-[80px] mx-4">🐹</span>
                <span className="text-[80px] mx-4">🐱</span>
              </>
            ) : (
              <span className="text-[80px] mx-4">{caseData.emoji}</span>
            )}
          </div>
          
          {/* Title and Description */}
          <CaseSection>
            <CaseTitle>{caseData.title}</CaseTitle>
          </CaseSection>
          
          {/* Теперь вместо выбора между content и fullContent
              используем новую структуру sections */}
          {caseData.sections && caseData.sections.length > 0 ? (
            <CaseContentRenderer sections={caseData.sections} />
          ) : caseData.content ? (
            <CaseSection>
              <CaseMarkdown content={caseData.content} />
            </CaseSection>
          ) : null}
        </div>
        
        <Footer />
      </div>
    </div>
  );
}