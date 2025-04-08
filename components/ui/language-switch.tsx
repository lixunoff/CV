"use client";

import React from "react";
import { useTheme, useLanguage } from "../providers/app-provider";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`p-[3px] rounded-[10px] flex justify-start items-start gap-1 ${
      theme === "light" ? "bg-[#efefef]" : "bg-[#111111]"
    }`}>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1.5 rounded-lg flex justify-center items-center gap-2.5 ${
          language === "en" ? (theme === "light" ? "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" : "bg-[#292929] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]") : ""
        }`}
      >
        <div className={`justify-start text-xs font-normal uppercase leading-4 ${
          language === "en" ? (theme === "light" ? "text-[#ff0000]" : "text-[#ff6363]") : (theme === "light" ? "text-black" : "text-white")
        }`}>
          ENG
        </div>
      </button>
      <button
        onClick={() => setLanguage("ua")}
        className={`px-2 py-1.5 rounded-lg flex justify-center items-center gap-2.5 ${
            language === "ua" ? (theme === "light" ? "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" : "bg-[#292929] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]") : ""
        }`}
      >
        <div className={`justify-start text-xs font-normal uppercase leading-4 ${
            language === "ua" ? (theme === "light" ? "text-[#ff0000]" : "text-[#ff6363]") : (theme === "light" ? "text-black" : "text-white")
        }`}>
            УКР
        </div>
      </button>
    </div>
  );
}