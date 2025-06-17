// components/providers/app-provider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import enTranslations from '../../locales/en/index.js';
import uaTranslations from '../../locales/ua/index.js';

type Theme = "light" | "dark";
type Language = "en" | "ua";

interface AppContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | any;
}

const translations = {
  en: enTranslations,
  ua: uaTranslations
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("ua");
  const [mounted, setMounted] = useState(false);
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  // Функция для определения текущей системной темы
  const getSystemTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Fallback на случай, если matchMedia недоступен
  };

  // Эффект для первоначальной настройки
  useEffect(() => {
    // Инициализация темы
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    } else {
      const systemPreference = getSystemTheme();
      console.log("System theme detected:", systemPreference);
      setTheme(systemPreference);
    }

    // Инициализация языка
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ua")) {
      setLanguage(savedLanguage);
    } else {
      // Если нет сохраненного языка, используем украинский по умолчанию
      setLanguage("ua");
    }
    
    setMounted(true);
    
    // Имитация задержки загрузки переводов
    const timer = setTimeout(() => {
      setTranslationsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Отдельный эффект для обновления DOM после установки темы
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  // Обновление localStorage при изменении языка
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  // Function to get translation by key
  const t = (key: string): any => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      // Для отладки
      if (process.env.NODE_ENV === 'development') {
        console.log('Key requested:', key);
      }
      
      for (const k of keys) {
        if (!value || typeof value !== 'object' || !(k in value)) {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
        value = value[k];
      }
      
      return value;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  // Предотвращаем проблемы с SSR и ожидаем загрузку переводов
  if (!mounted || !translationsLoaded) {
    // Просто пустой фон без элементов
    return (
      <div className="min-h-screen bg-background dark:bg-background-dark"></div>
    );
  }

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

// Для совместимости с существующим кодом
export function useTheme() {
  const { theme, setTheme } = useApp();
  return { theme, setTheme };
}

export function useLanguage() {
  const { language, setLanguage, t } = useApp();
  return { language, setLanguage, t };
}