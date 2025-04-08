// components/profile/experience-item.tsx
"use client";

import React from 'react';
import { CompanyName, DateText, Paragraph } from '../ui/typography';
import { ArrowRight } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  useArrowIcon?: boolean;
  description: string;
  responsibilities: string[];
}

export function ExperienceItem({ 
    company, 
    position, 
    period, 
    useArrowIcon = false, // По умолчанию false
    description, 
    responsibilities 
  }: ExperienceItemProps) {
    
    // Разделяем period по символу стрелки, если используем иконку
    const [startDate, endDate] = useArrowIcon 
      ? period.split('→').map(date => date.trim()) 
      : [period, ''];

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-4">
      <div className="self-stretch">
        <CompanyName>{company} • {position}<br/></CompanyName>
        <DateText>
          {useArrowIcon ? (
            <>
              {startDate} <ArrowRight size={16} className="inline mx-1 relative -top-[2px]" /> {endDate}
            </>
          ) : (
            period
          )}
        </DateText>
      </div>
      <Paragraph>{description}</Paragraph>
      <ul className="list-disc pl-5 space-y-1 text-muted">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-base font-normal leading-normal">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}