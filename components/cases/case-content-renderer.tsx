"use client";

import React, { useState, useEffect } from 'react';
import { 
  CaseTitle, 
  CaseText, 
  CaseSectionTitle, 
  CaseSection, 
  CaseContainer, 
  CaseBoldText,
  CaseCard,
  CaseTwoColumns,
  CaseColumn,
  CaseLink,
  FigmaPreview,
  CaseIframe
} from './case-page-components';
import { useTheme, useLanguage } from '../providers/app-provider';

interface CaseContentRendererProps {
  sections: any[];
}

export function CaseContentRenderer({ sections }: CaseContentRendererProps) {
  const { theme } = useTheme();
  const { language } = useLanguage(); // Импортируем хук useLanguage
  const [isMobile, setIsMobile] = useState(false);
  
  // Определяем тип устройства при монтировании компонента и при изменении размера окна
  useEffect(() => {
    // Функция для определения мобильного устройства
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем сразу при загрузке
    checkMobile();
    
    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', checkMobile);
    
    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Если нет секций, возвращаем null
  if (!sections || !Array.isArray(sections) || sections.length === 0) return null;

  // Рендерер разных типов компонентов
  const renderComponent = (component: any) => {
    switch (component.type) {
      case 'title':
        return <CaseSectionTitle key={component.id}>{component.content}</CaseSectionTitle>;
      
      case 'text':
        return <CaseText key={component.id}>{component.content}</CaseText>;
      
      case 'richText':
        return (
          <div key={component.id}>
            <CaseText>
              {/* Сам основной текст */}
              <span>{component.content}</span>
              <br />
      
              {component.details?.map((detail: any, index: number) => (
                <React.Fragment key={index}>
                  {/* Подписи жирным */}
                  {detail.label && (
                    <>
                      <br/><CaseBoldText>{detail.label}</CaseBoldText><br/>
                    </>
                  )}
      
                  {/* Обычный текст подписи */}
                  {detail.text && (
                    <>
                    <span className="text-muted">{detail.text}</span>
                    <br />
                  </>
                  )}
                  
                  {/* Списки */}
                  {detail.items && detail.items.length > 0 && (
                    <ul className="list-disc pl-5 mt-2">
                      {detail.items.map((item: string, idx: number) => (
                        <li key={idx} className="text-muted mt-1">{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Ссылки */}
                  {detail.link && (
                    <div className="mt-2">
                      <span className="text-muted">{detail.linkText || ''} </span>
                      <CaseLink href={detail.link.url}>{detail.link.text}</CaseLink>
                    </div>
                  )}
      
                  {/* Figma превью */}
                  {detail.figmaPreview && (
                    <FigmaPreview 
                      url={detail.figmaPreview.url} 
                      title={detail.figmaPreview.title} 
                    />
                  )}
                </React.Fragment>
              ))}
            </CaseText>
          </div>
        );
      
      case 'card':
        // Определяем цвет фона в зависимости от темы
        const cardBgColor = theme === 'dark' && component.darkBackgroundColor
          ? component.darkBackgroundColor
          : component.backgroundColor;
        
        return (
          <div 
            key={component.id}
            className={`p-8 rounded-3xl flex flex-col justify-start h-full ${component.className || ''}`}
            style={{ backgroundColor: cardBgColor }}
          >
            {component.title && (
              <div className="text-foreground text-base font-semibold mb-4">
                {component.title}
              </div>
            )}
            {component.description && (
              <div className="text-muted text-base flex-grow">{component.description}</div>
            )}
            {component.content && component.content}
            
            {/* Для карточек также поддерживаем списки */}
            {component.items && component.items.length > 0 && (
              <ul className="list-disc pl-6 mt-2">
                {component.items.map((item: string, idx: number) => (
                  <li key={idx} className="text-muted mb-1">{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      
      case 'personaCard':
        // Определяем цвет фона для карточки персоны
        const personaBgColor = theme === 'dark' && component.darkBackgroundColor
          ? component.darkBackgroundColor
          : component.backgroundColor;
        
        return (
          <div 
            key={component.id}
            className="p-8 rounded-3xl flex flex-col justify-start h-full"
            style={{ backgroundColor: personaBgColor }}
          >
            <div className="self-stretch inline-flex justify-start items-center gap-6">
              {/* Используем указанное изображение из папки public/images */}
              {component.image ? (
                <img 
                  src={`/images/${component.image}`} 
                  alt={component.name} 
                  className="w-16 h-16 object-cover rounded-[60px]" 
                />
              ) : (
                <div className="w-16 h-16 relative bg-gray-200 rounded-[60px]"></div>
              )}
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch text-foreground text-2xl font-semibold">{component.name}</div>
                <div className="self-stretch text-muted text-base">{component.role}</div>
              </div>
            </div>
            
            <div className="self-stretch text-muted text-base mt-4">
              {component.description}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <CaseBoldText>{component.columns[0].title}</CaseBoldText>
                <ul className="list-disc pl-6 mt-2">
                  {component.columns[0].items.map((item: string, idx: number) => (
                    <li key={idx} className="text-muted mb-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <CaseBoldText>{component.columns[1].title}</CaseBoldText>
                <ul className="list-disc pl-6 mt-2">
                  {component.columns[1].items.map((item: string, idx: number) => (
                    <li key={idx} className="text-muted mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <CaseBoldText>{component.columns[2].title}</CaseBoldText>
                <ul className="list-disc pl-6 mt-2">
                  {component.columns[2].items.map((item: string, idx: number) => (
                    <li key={idx} className="text-muted mb-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <CaseBoldText>{component.columns[3].title}</CaseBoldText>
                <ul className="list-disc pl-6 mt-2">
                  {component.columns[3].items.map((item: string, idx: number) => (
                    <li key={idx} className="text-muted mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'twoColumns':
        // Используем grid для двухколоночной верстки с адаптивностью
        return (
          <div key={component.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full auto-rows-auto">
            {component.columns.map((column: any, index: number) => (
              <div key={`${component.id}-col-${index}`} className="h-full">
                {renderComponent({...column, id: `${component.id}-col-${index}`})}
              </div>
            ))}
          </div>
        );
      
      case 'list':
        return (
          <div key={component.id} className="self-stretch">
            {component.title && <CaseBoldText>{component.title}</CaseBoldText>}
            
            <ul className="list-disc pl-6 mt-2">
              {component.items.map((item: any, index: number) => (
                <li key={index} className="mb-2">
                  {item.title && <CaseBoldText>{item.title}</CaseBoldText>}
                  <span className="text-muted"> {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      
      // Обработка типа iframe - на мобильных показываем ссылку вместо iframe
      case 'iframe':
        if (isMobile) {
          // Для мобильных устройств показываем только ссылку
          // Преобразуем URL embed iframe в обычный URL Figma
          const figmaUrl = component.src.replace('embed.figma.com/proto', 'www.figma.com/proto');
          
          // Мультиязычные тексты
          const langText: {[key: string]: {message: string, button: string}} = {
            en: {
              message: "For mobile devices, the prototype is available at a direct link:",
              button: "Open prototype in Figma"
            },
            ua: {
              message: "Для мобільних пристроїв прототип доступний за прямим посиланням:",
              button: "Відкрити прототип у Figma"
            }
          };
          
          // Получаем текст в зависимости от текущего языка
          const text = langText[language] || langText.en;
          
          return (
            <div key={component.id} className="mt-6 mb-8">
              <div className="text-muted text-sm mb-2">{component.title}</div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-muted mb-4">{text.message}</p>
                <a 
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-80 transition-colors"
                >
                  {text.button}
                </a>
              </div>
            </div>
          );
        } else {
          // Для десктопов показываем iframe как обычно
          return (
            <CaseIframe
              key={component.id}
              title={component.title}
              src={component.src}
            />
          );
        }
      
      // Поддержка для типа custom
      case 'custom':
        return (
          <div key={component.id}>
            {component.component}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <CaseContainer>
      {sections.map(section => (
        <CaseSection key={section.id}>
          {/* Если у секции есть title и это не компонент */}
          {section.title && typeof section.title === 'string' && (
            <CaseSectionTitle>{section.title}</CaseSectionTitle>
          )}
          
          {/* Компоненты секции */}
          {section.components?.map((component: any) => 
            renderComponent(component)
          )}
        </CaseSection>
      ))}
    </CaseContainer>
  );
}