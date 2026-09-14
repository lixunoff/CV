'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

function toId(text: string): string {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-');
}

function getTextContent(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map(child =>
      typeof child === 'string'
        ? child
        : getTextContent((child as React.ReactElement)?.props?.children ?? '')
    )
    .join('');
}

interface TocItem {
  id: string;
  text: string;
}

function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of markdown.split('\n')) {
    const h2 = line.match(/^## (.+)$/);
    if (h2 && !h2[1].toLowerCase().includes('table of contents')) {
      const label = h2[1].replace(/\s*\([^)]+\)/g, '').trim();
      items.push({ text: label, id: toId(h2[1]) });
    }
  }
  return items;
}

function stripToc(markdown: string): string {
  return markdown.replace(/## Table of Contents[\s\S]*?(?=\n---\n\n## )/m, '');
}

function normalizeHeadings(markdown: string): string {
  const lines = markdown.split('\n');
  const step1: string[] = [];
  let inNumberedSection = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ')) inNumberedSection = /^## \d+\./.test(line);
    const h3Match = line.match(/^### (.+)$/);
    if (h3Match && inNumberedSection) {
      let isSubSection = false;
      for (let j = i + 1; j < lines.length; j++) {
        const next = lines[j];
        if (next.startsWith('## ') || next.startsWith('### ')) break;
        if (next.startsWith('#### ')) { isSubSection = true; break; }
      }
      step1.push(isSubSection ? line : '#### ' + h3Match[1]);
    } else {
      step1.push(line);
    }
  }

  let h2Num = '', h3Num = '', h4Counter = 0;
  const result: string[] = [];

  for (const line of step1) {
    const h2Match = line.match(/^## (\d+)\./);
    const h3Match = line.match(/^### (\d+\.\d+)/);
    const h4Match = line.match(/^#### (.+)$/);

    if (line.startsWith('## ')) {
      h2Num = h2Match ? h2Match[1] : ''; h3Num = ''; h4Counter = 0;
      result.push(line);
    } else if (h3Match) {
      h3Num = h3Match[1]; h4Counter = 0; result.push(line);
    } else if (h4Match) {
      const text = h4Match[1];
      if (/^\d/.test(text) || !h2Num) {
        result.push(line);
      } else {
        h4Counter++;
        const prefix = h3Num ? `${h3Num}.${h4Counter}` : `${h2Num}.${h4Counter}`;
        result.push(`#### ${prefix} ${text}`);
      }
    } else {
      result.push(line);
    }
  }

  return result.join('\n');
}

function buildComponents(): Components {
  return {
    h1: ({ children }) => (
      <h1 id={toId(getTextContent(children))} style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginTop: 0, marginBottom: '2.5rem', scrollMarginTop: '2rem' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 id={toId(getTextContent(children))} style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#111827', marginTop: '4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', scrollMarginTop: '2rem' }}>
        <span style={{ width: 3, height: 16, backgroundColor: '#22c55e', borderRadius: 999, display: 'inline-block', flexShrink: 0 }} />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={toId(getTextContent(children))} style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#374151', marginTop: '2rem', marginBottom: '0.75rem', scrollMarginTop: '2rem' }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 id={toId(getTextContent(children))} style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginTop: '1.75rem', marginBottom: '0.5rem', scrollMarginTop: '2rem' }}>{children}</h4>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7, marginTop: 0, marginBottom: '0.625rem' }}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem', marginBottom: '0.75rem', listStyleType: 'disc' }}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: '1.25rem', marginTop: '0.25rem', marginBottom: '0.75rem' }}>{children}</ol>
    ),
    li: ({ children }) => (
      <li style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '0.2rem' }}>{children}</li>
    ),
    strong: ({ children }) => (
      <strong style={{ fontWeight: 600, color: '#1f2937' }}>{children}</strong>
    ),
    a: ({ children, href }) => {
      if (href?.startsWith('#')) {
        return (
          <a href={href} style={{ color: '#2563eb', textDecoration: 'none', cursor: 'pointer' }}
            onClick={(e) => { e.preventDefault(); document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
            {children}
          </a>
        );
      }
      return <a href={href} style={{ color: '#2563eb', textDecoration: 'none' }} target="_blank" rel="noreferrer">{children}</a>;
    },
    hr: () => null,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid #f59e0b', backgroundColor: '#fffbeb', padding: '0.75rem 1rem', borderRadius: '0 0.375rem 0.375rem 0', margin: '1.25rem 0' }}>
        <div style={{ color: '#92400e', fontSize: '0.875rem' }}>{children}</div>
      </blockquote>
    ),
    table: ({ children }) => (
      <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
        <table style={{ width: '100%', fontSize: '0.8125rem', borderCollapse: 'collapse' }}>{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', backgroundColor: '#f9fafb', fontWeight: 600, color: '#374151', borderBottom: '1px solid #e5e7eb' }}>{children}</th>
    ),
    td: ({ children }) => (
      <td style={{ padding: '0.5rem 0.75rem', color: '#4b5563', borderBottom: '1px solid #f3f4f6' }}>{children}</td>
    ),
  };
}

const components = buildComponents();

export default function PlatformUXAudit() {
  const [content, setContent] = useState('');
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetch('/ux-review-master.md')
      .then(r => r.text())
      .then(md => {
        setContent(normalizeHeadings(stripToc(md)));
        setToc(extractToc(md));
      });
  }, []);

  useEffect(() => {
    if (!content) return;
    observerRef.current?.disconnect();
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll('h2[id]');
      if (!headings.length) return;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter(e => e.isIntersecting);
          if (visible.length > 0) setActiveId(visible[0].target.id);
        },
        { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
      );
      headings.forEach(el => observerRef.current!.observe(el));
    }, 300);
    return () => { clearTimeout(timer); observerRef.current?.disconnect(); };
  }, [content]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', display: 'flex' }}>
      <style>{`@media (max-width: 768px) { .ux-nav-col { display: none !important; } .ux-content-col { width: 100% !important; } }`}</style>

      {/* Left 70% — content centered */}
      <div className="ux-content-col" style={{ width: '70%', display: 'flex', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div style={{ width: '100%', maxWidth: 680 }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ZiCMA Platform</span>
            <div style={{ marginTop: '0.375rem', fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>UX Review 2026</div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Full audit of the ZiCMA Carbon Registry portal — flows, usability issues, and proposed solutions.</p>
          </div>
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </div>
      </div>

      {/* Right 30% — nav left-aligned */}
      <div className="ux-nav-col" style={{ width: '30%' }}>
        <nav style={{ padding: '4rem 2rem', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Contents</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {toc.map(item => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} style={{ marginBottom: '0.125rem' }}>
                  <button onClick={() => scrollTo(item.id)} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0', fontSize: '0.8125rem', fontWeight: isActive ? 600 : 400, color: isActive ? '#111827' : '#2563eb', lineHeight: 1.4, transition: 'color 0.15s, font-weight 0.15s' }}>
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Links</p>
            <a
              href="https://www.figma.com/design/Vf3QSoQXIx2I77x5fcPLRH/UX-Audit-2026"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: '#2563eb', textDecoration: 'none', padding: '0.25rem 0' }}
            >
              <svg width="14" height="14" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
              </svg>
              Figma Audit File — UI Issues
            </a>
          </div>
        </nav>
      </div>

    </div>
  );
}
