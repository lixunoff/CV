"use client";

import React from 'react';
import { Header } from '../../components/layout/header';
import JobsContent from '../jobs/jobs-content';
import { Footer } from '../../components/layout/footer';

export default function JobsPage() {
  return (
    <main className="w-full px-4 py-10 flex justify-center items-start">
      <div className="flex-1 max-w-[676px] flex flex-col justify-start items-start gap-40">
        <Header />
        
        <div className="self-stretch flex flex-col justify-start items-center gap-20">
          <JobsContent />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}