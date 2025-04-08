// components/profile/profile-hero.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useTheme, useLanguage } from "../providers/app-provider";
import { Heading1, Subtitle } from '../ui/typography';
import { SocialLinks } from './social-links';

export function ProfileHero() {
  const { t } = useLanguage();

  return (
    <div className="self-stretch inline-flex justify-between items-start">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        <div className="w-24 h-24 relative">
          <Image
            src="/images/avatar.jpg"
            alt={t('profile.name')}
            fill
            className="rounded-[60px] object-cover"
            sizes="96px"
            priority
          />
        </div>
        <div className="self-stretch flex flex-col md:flex-row justify-start items-start md:items-center gap-6">
            <div className="flex-1 flex flex-col justify-start items-start gap-0">
                <Heading1>{t('profile.name')}</Heading1>
                <Subtitle>{t('profile.position')}</Subtitle>
            </div>
            <SocialLinks />
        </div>
      </div>
    </div>
  );
}