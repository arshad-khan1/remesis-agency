'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  alt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, alt }) => {
  return (
    <motion.div 
      className="group w-full max-w-[320px] text-center"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Image
          alt={alt}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imageUrl}
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <h3 className="text-xl font-bold gradient-text">{name}</h3>
      <p className="text-sm font-medium text-primary">{role}</p>
    </motion.div>
  );
};

export { TeamMember };
