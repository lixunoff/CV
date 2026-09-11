'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function PlatformUXAudit() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/ux-review-master.md')
      .then(r => r.text())
      .then(setContent);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">ZiCMA Platform</span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">UX Review 2026</h1>
          <p className="mt-3 text-gray-500 text-sm">Full audit of the ZiCMA Carbon Registry portal — flows, usability issues, and proposed solutions.</p>
        </div>

        <div
          className="prose prose-gray max-w-none
            prose-h1:text-2xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mt-0 prose-h1:mb-8
            prose-h2:text-xl prose-h2:font-semibold prose-h2:text-gray-900 prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
            prose-h3:text-base prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-sm prose-h4:font-semibold prose-h4:text-gray-700 prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-sm
            prose-li:text-gray-600 prose-li:text-sm
            prose-strong:text-gray-800 prose-strong:font-semibold
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-hr:border-gray-100 prose-hr:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50 prose-blockquote:px-4 prose-blockquote:py-3 prose-blockquote:rounded-r prose-blockquote:not-italic
            prose-blockquote:text-amber-800 prose-blockquote:text-sm
            prose-table:text-sm
            prose-th:text-gray-700 prose-th:font-semibold prose-th:bg-gray-50
            prose-td:text-gray-600
            prose-code:text-xs prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded"
        >
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-gray-900 mt-12 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-1 h-5 bg-green-500 rounded-full inline-block flex-shrink-0" />
                  {children}
                </h2>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">ZiCMA UX Review 2026 · Denis Lixunoff</p>
        </div>
      </div>
    </div>
  );
}
