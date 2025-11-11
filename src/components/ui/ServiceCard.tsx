import React from 'react';
import { Card } from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card variant="service" className="flex flex-col gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold leading-tight text-white">
          {title}
        </h3>
        <p className="text-sm font-normal leading-normal text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  );
};

export { ServiceCard };
