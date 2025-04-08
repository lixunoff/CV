// components/profile/social-links.tsx
"use client";

import React from 'react';
import { useTheme, useLanguage } from "../providers/app-provider";

export function SocialLinks() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-start items-center gap-4">
        <a 
            href="mailto:lixunoff@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2.5 ${theme === 'light' ? 'bg-[#efefef]' : 'bg-[#111111]'} rounded-xl flex justify-start items-center gap-2.5 transition-all hover:bg-opacity-90 group`}
            >
            <div className="w-5 h-5 relative overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200">
                <path 
                d="M16.6667 3.33337H3.33341C2.41675 3.33337 1.67508 4.08337 1.67508 5.00004L1.66675 15C1.66675 15.9167 2.41675 16.6667 3.33341 16.6667H16.6667C17.5834 16.6667 18.3334 15.9167 18.3334 15V5.00004C18.3334 4.08337 17.5834 3.33337 16.6667 3.33337ZM16.6667 6.66671L10.0001 10.8334L3.33341 6.66671V5.00004L10.0001 9.16671L16.6667 5.00004V6.66671Z" 
                className={`group-hover:fill-accent ${theme === 'light' ? 'fill-black' : 'fill-white'}`}
                />
            </svg>
            </div>
        </a>
        <a 
            href="https://t.me/lixunoff" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2.5 ${theme === 'light' ? 'bg-[#efefef]' : 'bg-[#111111]'} rounded-xl flex justify-start items-center gap-2.5 transition-all hover:bg-opacity-90 group`}
            >
            <div className="w-5 h-5 relative overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M1.23244 9.46938C6.06328 7.35919 9.27924 5.95703 10.8941 5.27678C15.4903 3.34707 16.4565 3.01388 17.0776 3C17.2156 3 17.5193 3.02777 17.7263 3.19436C17.8919 3.33319 17.9334 3.51366 17.961 3.65249C17.9886 3.79132 18.0162 4.08286 17.9886 4.30498C17.7401 6.94271 16.6635 13.3427 16.1114 16.2858C15.8768 17.5353 15.4213 17.9518 14.9796 17.9934C14.0135 18.0767 13.2819 17.3548 12.3572 16.744C10.8941 15.786 10.0798 15.1891 8.65813 14.2451C7.01565 13.1622 8.07843 12.5652 9.017 11.5934C9.26544 11.3436 13.5028 7.45637 13.5856 7.1093C13.5994 7.06766 13.5994 6.90106 13.5028 6.81776C13.4062 6.73447 13.2681 6.76223 13.1577 6.79C13.0059 6.81777 10.6871 8.37264 6.1737 11.4407C5.51118 11.8989 4.91768 12.121 4.37939 12.1071C3.78588 12.0932 2.65409 11.7739 1.79834 11.4963C0.763154 11.1631 -0.0649904 10.9826 0.00402163 10.3995C0.0454289 10.0941 0.459501 9.78868 1.23244 9.46938Z" 
                className={`group-hover:fill-accent ${theme === 'light' ? 'fill-black' : 'fill-white'}`}
                />
            </svg>
            </div>
        </a>
        <a 
            href="https://www.linkedin.com/in/lixunoff/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2.5 ${theme === 'light' ? 'bg-[#efefef]' : 'bg-[#111111]'} rounded-xl flex justify-start items-center gap-2.5 transition-all hover:bg-opacity-90 group`}
            >
            <div className="w-5 h-5 relative overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-200">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M18 17H14.7125V11.4006C14.7125 9.86546 14.1292 9.00754 12.9141 9.00754C11.5922 9.00754 10.9016 9.90033 10.9016 11.4006V17H7.73333V6.33333H10.9016V7.77013C10.9016 7.77013 11.8542 6.00745 14.1177 6.00745C16.3802 6.00745 18 7.38906 18 10.2465V17ZM3.95364 4.93662C2.87448 4.93662 2 4.05528 2 2.96831C2 1.88134 2.87448 1 3.95364 1C5.03281 1 5.90677 1.88134 5.90677 2.96831C5.90677 4.05528 5.03281 4.93662 3.95364 4.93662ZM2.31771 17H5.62135V6.33333H2.31771V17Z" 
                className={`group-hover:fill-accent ${theme === 'light' ? 'fill-black' : 'fill-white'}`}
                />
            </svg>
            </div>
        </a>
    </div>
  );
}