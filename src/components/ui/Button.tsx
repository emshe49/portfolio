import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'mint' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  external,
  download,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono font-medium transition-all duration-300 rounded-lg group select-none relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-violet focus:ring-offset-2 focus:ring-offset-dark-400";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5"
  };

  const variantStyles = {
    primary: "bg-accent-violet text-dark-900 font-semibold hover:bg-[#9d90ff] shadow-glow-violet active:scale-[0.98]",
    secondary: "bg-surface-elevated/80 hover:bg-surface-elevated text-content-primary border border-surface-border hover:border-accent-violet/50 active:scale-[0.98]",
    mint: "bg-accent-mint text-dark-900 font-semibold hover:bg-[#68e2cf] shadow-glow-mint active:scale-[0.98]",
    outline: "bg-transparent text-content-primary border border-surface-border hover:border-accent-violet hover:text-white hover:bg-accent-violet/10 active:scale-[0.98]",
    ghost: "bg-transparent text-content-secondary hover:text-content-primary hover:bg-white/5 active:scale-[0.98]"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
