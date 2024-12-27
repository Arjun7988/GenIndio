import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-purple-500/20">
        {/* Icon container with pulse effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:animate-pulse"></div>
          <div className="relative text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AgentCard;