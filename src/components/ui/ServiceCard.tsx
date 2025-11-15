import React from 'react';
import { Card } from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card variant="service" className="flex flex-col justify-between gap-3 h-[300px] py-6 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]">
      <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[radial-gradient(circle_at_center,rgba(20,10,40,0)_0%,rgba(20,10,40,0.55)_70%,rgba(20,10,40,0.85)_100%)] ring-1 ring-inset ring-[#140A28]/80 shadow-[0_18px_38px_-18px_rgba(20,10,40,0.9)] shadow-[#140A28]/30 text-[#8C5CF6]">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="gradient-text text-3xl font-bold leading-tight text-white">
          {title}
        </h3>
        <p className="text-md font-normal leading-normal text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  );
};

export { ServiceCard };
