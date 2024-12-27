import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, Icon }) => {
  return (
    <div className="relative group">
      <div className="absolute -top-6 left-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
        {number}
      </div>
      
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 pt-12 border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:translate-y-[-4px]">
        <div className="text-purple-500 mb-6">
          <Icon className="w-12 h-12" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;