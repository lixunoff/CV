// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { AppProvider } from '../components/providers/app-provider';

export const metadata: Metadata = {
  title: 'Denis Liksunov - Portfolio',
  description: 'Product UI/UX Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}