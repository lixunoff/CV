"use client";

import React from 'react';
import { cn } from '../../lib/utils';
import Link from 'next/link';
import { useTheme } from '../providers/app-provider';
import { getColorByIndex, getColorClassByIndex } from '../../lib/color-utils';

// Typography components for case pages
export const CaseTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="self-stretch text-foreground text-[32px] font-semibold leading-10 mb-12">
      {children}
    </h1>
  );
};

export const CaseSectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="self-stretch text-foreground text-2xl font-semibold leading-loose">
      {children}
    </h2>
  );
};

export const CaseText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="self-stretch text-muted text-base font-normal leading-normal">
      {children}
    </div>
  );
};

export const CaseBoldText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-foreground text-base font-semibold leading-normal">
      {children}
    </span>
  );
};

// Container components
export const CaseSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("self-stretch flex flex-col justify-start items-start gap-6", className)}>
      {children}
    </div>
  );
};

export const CaseContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-12">
      {children}
    </div>
  );
};

// Special components
export const CaseLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
      <a 
        href={href} 
        className="text-accent underline text-base font-normal leading-normal hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
};

export const FigmaPreview = ({ url, title }: { url: string, title?: string }) => {
    // Проверяем тип ссылки Figma (файл или борда)
    const isFigmaBoard = url.includes('/board/');
    
    // Создаем URL для встраивания
    let embedUrl = '';
    
    if (isFigmaBoard) {
      // Для Figma Board
      const boardId = url.match(/\/board\/([^/?]+)/)?.[1] || '';
      const nodeId = url.match(/node-id=([^&]+)/)?.[1] || '';
      embedUrl = `https://embed.figma.com/board/${boardId}/${url.split('?')[0].split('/').pop()}?node-id=${nodeId}&embed-host=share`;
    } else {
      // Для обычных Figma файлов
      const fileId = url.match(/file\/([^/?]+)/)?.[1] || '';
      const nodeId = url.match(/node-id=([^&]+)/)?.[1] || '';
      embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileId}?node-id=${nodeId}`;
    }
    
    return (
      <div className="mt-4 mb-8 w-full">
        {title && <div className="text-muted text-sm mb-2">{title}</div>}
        <div className="w-full h-[250px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
            width="100%" 
            height="100%" 
            src={embedUrl}
            allowFullScreen
            title={title || "Figma Preview"}
          />
        </div>
      </div>
    );
}; 

export const CaseEmoji = ({ emoji, size = "8xl" }: { emoji: string, size?: "8xl" | "6xl" | "4xl" }) => {
  const sizeClasses = {
    "8xl": "text-8xl",
    "6xl": "text-6xl",
    "4xl": "text-4xl"
  };

  return (
    <div className={`justify-start text-foreground ${sizeClasses[size]} font-semibold leading-[96px]`}>
      {emoji}
    </div>
  );
};

// Статический ID для первого цвета (можно менять для разных проектов)
const DEFAULT_COLOR_INDEX = 0;

export const CaseEmojiContainer = ({ 
  children, 
  className, 
  backgroundColor, 
  colorIndex = DEFAULT_COLOR_INDEX // Используем цвет по индексу или дефолтный
}: { 
  children: React.ReactNode, 
  className?: string,
  backgroundColor?: string,
  colorIndex?: number
}) => {
  // Получаем класс Tailwind для цвета из пула
  const colorClass = getColorClassByIndex(colorIndex);
  
  return (
    <div className={cn(`self-stretch py-12 rounded-3xl inline-flex justify-center items-center gap-6 ${colorClass}`, className)}>
      {children}
    </div>
  );
};

// Card components with different background colors
interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  darkBackgroundColor?: string;
  className?: string;
  colorIndex?: number;
}

export const CaseCard = ({ 
  children, 
  backgroundColor, 
  darkBackgroundColor, 
  className,
  colorIndex = DEFAULT_COLOR_INDEX
}: CardProps) => {
  const { theme } = useTheme();
  
  // Если указаны пользовательские цвета, используем их через inline стили
  if (backgroundColor || darkBackgroundColor) {
    const bgColorLight = backgroundColor || getColorByIndex(colorIndex).hex.light;
    const bgColorDark = darkBackgroundColor || getColorByIndex(colorIndex).hex.dark;
    
    return (
      <div 
        className={cn(`self-stretch p-8 rounded-3xl flex flex-col justify-start items-start gap-6`, className)}
        style={{ backgroundColor: theme === 'dark' ? bgColorDark : bgColorLight }}
      >
        {children}
      </div>
    );
  }
  
  // Иначе используем стандартный класс Tailwind из пула цветов
  const colorClass = getColorClassByIndex(colorIndex);
  
  return (
    <div className={cn(`self-stretch p-8 rounded-3xl flex flex-col justify-start items-start gap-6 ${colorClass}`, className)}>
      {children}
    </div>
  );
};

// Two-column layout
export const CaseTwoColumns = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="self-stretch inline-flex justify-start items-start gap-6 flex-col md:flex-row">
      {children}
    </div>
  );
};

export const CaseColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 justify-start">
      {children}
    </div>
  );
};

// Markdown renderer for case content
export const CaseMarkdown = ({ content }: { content: string }) => {
  // Простая реализация рендеринга markdown
  // В реальном проекте лучше использовать библиотеку типа react-markdown
  const formattedContent = content
    .replace(/## (.*?)$/gm, '<h2 class="text-foreground text-2xl font-semibold leading-loose">$1</h2>')
    .replace(/- (.*?)$/gm, '<li class="text-muted text-base">$1</li>')
    .replace(/\n\n/g, '<p class="mb-4"></p>');

  return (
    <div 
      className="case-markdown text-muted text-base leading-normal" 
      dangerouslySetInnerHTML={{ __html: formattedContent }} 
    />
  );
};