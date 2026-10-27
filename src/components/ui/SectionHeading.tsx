import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === 'center' ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div className={cn(
        "inline-flex items-center gap-2 mb-3 text-xs tracking-widest font-mono text-accent-violet uppercase",
        align === 'center' && "justify-center"
      )}>
        <span className="w-2 h-2 rounded-full bg-accent-violet/80 inline-block animate-pulse-subtle"></span>
        <span>{label}</span>
      </div>

      <h2 className="text-section-headline font-display font-bold text-content-primary mb-4 tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="text-content-secondary text-base md:text-lg leading-relaxed font-sans font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
