import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export { FeatureCard };
