import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'cursor-pointer items-center justify-center overflow-hidden rounded-lg font-bold leading-normal tracking-[0.015em] transition-all duration-200';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 ring-2 ring-primary ring-offset-2 ring-offset-background-dark hover:scale-105',
      secondary: 'bg-white/10 text-white hover:bg-white/20 ring-2 ring-white/20 ring-offset-2 ring-offset-background-dark',
      outline: 'border border-primary/50 bg-white/5 text-white hover:border-primary hover:bg-primary/10'
    };
    
    const sizes = {
      sm: 'h-10 px-4 text-sm min-w-[84px]',
      md: 'h-12 px-5 text-base min-w-[84px]',
      lg: 'h-14 px-6 text-lg min-w-[100px]'
    };

    return (
      <button
        className={cn(
          'flex',
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="truncate">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
