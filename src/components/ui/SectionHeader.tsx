import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}) => {
  return (
    <div className={cn(
      'mb-8 flex flex-col',
      centered ? 'items-center text-center' : 'items-start text-left',
      className
    )}>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
