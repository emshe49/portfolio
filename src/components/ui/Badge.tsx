import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'violet' | 'mint' | 'muted' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'muted',
  className,
  size = 'sm'
}) => {
  const variantStyles = {
    violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/30",
    mint: "bg-accent-mint/10 text-accent-mint border-accent-mint/30",
    muted: "bg-surface-elevated text-content-secondary border-surface-border",
    outline: "bg-transparent text-content-secondary border-surface-border/60"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded border transition-colors duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
