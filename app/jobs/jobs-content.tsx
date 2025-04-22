"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../components/providers/app-provider';
import JobCard from './job-card';
import { Heading2, Paragraph } from '../../components/ui/typography';
import { getColorByIndex } from '../../lib/color-utils';

interface Job {
  id: string;
  title: string;
  company: string;
  logo?: string;
  date: string;
  link: string;
  color?: string;
}

export default function JobsContent() {
  const { language } = useLanguage();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        
        // Делаем запрос к нашему API для получения вакансий
        const response = await fetch('/api/jobs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        
        const data = await response.json();
        
        // Добавляем цвета к полученным вакансиям
        const jobsWithColors = data.map((job: Job, index: number) => ({
          ...job,
          color: getColorByIndex(index).light
        }));
        
        setJobs(jobsWithColors);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load job opportunities. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-20">
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <Heading2>
          {language === 'en' ? 'Jobs' : 'Вакансії'}
        </Heading2>
        <Paragraph className="dark:text-gray-300">
          {language === 'en' 
            ? 'Here you can find a selection of design job opportunities from leading Ukrainian digital product companies. This collection is automatically updated with the latest designer positions available on DOU.ua, helping you discover your next career move in the design field.'
            : 'Тут зібрані вакансії для дизайнерів від провідних українських продуктових діджитал компаній. Ця колекція автоматично оновлюється з останніми дизайнерськими позиціями, доступними на DOU.ua, допомагаючи вам знайти свій наступний карʼєрний крок у сфері дизайну.'}
        </Paragraph>
      </div>

      {loading ? (
        <div className="w-full text-center py-12">
          <Paragraph className="dark:text-gray-300">
            {language === 'en' ? 'Loading jobs...' : 'Завантаження вакансій...'}
          </Paragraph>
        </div>
      ) : error ? (
        <div className="w-full text-center py-12">
          <Paragraph className="text-red-500 dark:text-red-400">
            {error}
          </Paragraph>
        </div>
      ) : (
        <div className="self-stretch w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="flex justify-center">
                <JobCard
                  title={job.title}
                  company={job.company}
                  logo={job.logo}
                  date={job.date}
                  link={job.link}
                  color={job.color || ''}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full w-full text-center py-12">
              <Paragraph className="dark:text-gray-300">
                {language === 'en' 
                  ? 'No design jobs found at the moment. Check back later!' 
                  : 'Наразі дизайнерських вакансій не знайдено. Перевірте пізніше!'}
              </Paragraph>
            </div>
          )}
        </div>
      )}
    </div>
  );
}