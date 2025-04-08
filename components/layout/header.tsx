// components/layout/header.tsx
"use client";

import React from 'react';
import { ThemeSwitch } from '../ui/theme-switch';
import { LanguageSwitch } from '../ui/language-switch';

export function Header() {
  return (
    <div className="self-stretch inline-flex justify-end items-start gap-4">
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}