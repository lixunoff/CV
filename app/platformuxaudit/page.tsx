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
      items.push({ text: h2[1], id: toId(h2[1]) });
    }
  }
  return items;
}

function stripToc(markdown: string): string {
  return markdown.replace(/## Table of Contents[\s\S]*?(?=\n---\n\n## )/m, '');
}

function normalizeHeadings(markdown: string): string {
  const lines = markdown.split('\n');

  // Step 1: convert problem h3s (no h4 children) to h4
  // Only in numbered h2 sections; leave h3s in unnumbered sections (e.g. Summary) as-is
  const step1: string[] = [];
  let inNumberedSection = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      inNumberedSection = /^## \d+\./.test(line);
    }

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

  // Step 2: add numbers to unnumbered h4s
  let h2Num = '';
  let h3Num = '';
  let h4Counter = 0;
  const result: string[] = [];

  for (const line of step1) {
    const h2Match = line.match(/^## (\d+)\./);
    const h3Match = line.match(/^### (\d+\.\d+)/);
    const h4Match = line.match(/^#### (.+)$/);

    if (line.startsWith('## ')) {
      h2Num = h2Match ? h2Match[1] : '';
      h3Num = '';
      h4Counter = 0;
      result.push(line);
    } else if (h3Match) {
      h3Num = h3Match[1];
      h4Counter = 0;
      result.push(line);
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
      <h1
        id={toId(getTextContent(children))}
        style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginTop: 0, marginBottom: '2.5rem', scrollMarginTop: '2rem' }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={toId(getTextContent(children))}
        style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#111827', marginTop: '4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', scrollMarginTop: '2rem' }}
      >
        <span style={{ width: 3, height: 16, backgroundColor: '#22c55e', borderRadius: 999, display: 'inline-block', flexShrink: 0 }} />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={toId(getTextContent(children))}
        style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#374151', marginTop: '2rem', marginBottom: '0.75rem', scrollMarginTop: '2rem' }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={toId(getTextContent(children))}
        style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginTop: '1.75rem', marginBottom: '0.5rem', scrollMarginTop: '2rem' }}
      >
        {children}
      </h4>
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
          <a
            href={href}
            style={{ color: '#2563eb', textDecoration: 'none', cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(href.slice(1));
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {children}
          </a>
        );
      }
      return (
        <a href={href} style={{ color: '#2563eb', textDecoration: 'none' }} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
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
        const stripped = stripToc(md);
        const normalized = normalizeHeadings(stripped);
        setContent(normalized);
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
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '4rem 2rem', display: 'flex', gap: '4rem', alignItems: 'flex-start' }}>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ZiCMA Platform</span>
            <div style={{ marginTop: '0.375rem', fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>UX Review 2026</div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Full audit of the ZiCMA Carbon Registry portal — flows, usability issues, and proposed solutions.</p>
          </div>
          <ReactMarkdown components={components}>{content}</ReactMarkdown>
          <div style={{ marginTop: '6rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>ZiCMA UX Review 2026 · Denis Lixunoff</p>
          </div>
        </div>

        <nav style={{ width: 200, flexShrink: 0, position: 'sticky', top: '2rem', maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Contents</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {toc.map(item => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} style={{ marginBottom: '0.125rem' }}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.25rem 0',
                      fontSize: '0.8125rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#111827' : '#2563eb',
                      lineHeight: 1.4,
                      transition: 'color 0.15s, font-weight 0.15s',
                    }}
                  >
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </div>
  );
}
