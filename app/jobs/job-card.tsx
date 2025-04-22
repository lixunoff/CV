import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heading2, Paragraph } from '../../components/ui/typography';
import { useTheme } from '../../components/providers/app-provider';

interface JobCardProps {
  title: string;
  company: string;
  logo?: string;
  date: string;
  link: string;
  color: string;
}

// Маппинг цветов для темной темы
const darkModeColors: Record<string, string> = {
  'bg-[#d3e1ff]': 'dark:bg-blue-900/70',
  'bg-[#ffd4d4]': 'dark:bg-red-900/70',
  'bg-[#c7f8c1]': 'dark:bg-green-900/70', 
  'bg-[#fff1d4]': 'dark:bg-yellow-900/70',
  'bg-[#ffddf5]': 'dark:bg-pink-900/70',
  'bg-[#ddf9ff]': 'dark:bg-cyan-900/70',
  'bg-[#ecdcff]': 'dark:bg-purple-900/70'
};

const JobCard: React.FC<JobCardProps> = ({ title, company, logo, date, link, color }) => {
  // Получаем соответствующий цвет для темной темы
  const darkColor = darkModeColors[color] || 'dark:bg-gray-800';
  
  return (
    <Link 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-[318px] w-full md:max-w-[326px] p-6 ${color} ${darkColor} rounded-[20px] inline-flex flex-col justify-start items-start gap-2.5 transition-transform hover:scale-[1.02]`}
    >
      <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        {logo ? (
          <div className="w-20 h-9 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-md flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-auto h-auto max-w-full max-h-full object-contain dark:brightness-125"
              width={80}
              height={36}
            />
          </div>
        ) : (
          <div className="w-20 h-9 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-md flex items-center justify-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Logo</span>
          </div>
        )}
        <Paragraph className="text-[#606060] dark:text-gray-300">{company}</Paragraph>
      </div>
      <div className="self-stretch flex-1 inline-flex justify-start items-end gap-2.5">
        <div className="flex-1 inline-flex flex-col justify-end items-start gap-2.5">
          <Heading2 className="w-full md:w-[270px] text-black dark:text-white">{title}</Heading2>
          <Paragraph className="text-[#606060] dark:text-gray-300">{date}</Paragraph>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;