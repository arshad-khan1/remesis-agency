import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  alt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, alt }) => {
  return (
    <div className="group text-center">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Image
          alt={alt}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
    </div>
  );
};

export { TeamMember };
