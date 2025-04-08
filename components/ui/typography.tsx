import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-[32px] font-semibold font-Inter", className)}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-2xl font-semibold font-Inter leading-loose", className)}>
      {children}
    </h2>
  );
}

export function Subtitle({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-muted text-base font-normal font-Inter", className)}>
      {children}
    </div>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-muted text-base font-normal font-Inter leading-normal", className)}>
      {children}
    </p>
  );
}

export function LeadText({ children, className }: TypographyProps) {
    return (
      <div className={cn(
        "text-muted text-base font-normal font-Inter leading-normal",
        className
      )}>
        {children}
      </div>
    );
}

export function TabText({ children, className, active = false }: TypographyProps & { active?: boolean }) {
    return (
      <div className={cn(
        "text-sm font-semibold font-Inter uppercase transition-colors duration-200",
        active 
          ? "text-accent dark:text-accent-dark" 
          : "text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark",
        className
      )}>
        {children}
      </div>
    );
}

export function CompanyName({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-base font-semibold font-Inter leading-normal", className)}>
      {children}
    </span>
  );
}

export function DateText({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-muted text-base font-normal font-Inter leading-normal", className)}>
      {children}
    </span>
  );
}

export function FooterText({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-muted text-sm font-normal font-Inter leading-normal", className)}>
      {children}
    </div>
  );
}