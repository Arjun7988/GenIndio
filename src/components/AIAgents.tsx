import React from 'react';
import { Bot, BrainCircuit, Network } from 'lucide-react';
import AgentCard from './AgentCard';

const AIAgents: React.FC = () => {
  const agents = [
    {
      icon: Bot,
      title: 'Customer Service Agents',
      description: 'AI-powered chatbots that provide 24/7 customer support, handle inquiries, and resolve issues efficiently.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Integration For Businesses',
      description: 'Seamless integration of AI technologies into your existing business processes for enhanced efficiency and automation.',
    },
    {
      icon: Network,
      title: 'Smart Virtual Assistants',
      description: 'Advanced AI assistants that learn from interactions and provide personalized support to your customers.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900 animate-gradient"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${-Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4 relative">
              AI Agents
              <div className="absolute -inset-1 bg-purple-500/20 blur-xl -z-10"></div>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our intelligent AI agents are designed to enhance your business operations and customer experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <AgentCard
                icon={agent.icon}
                title={agent.title}
                description={agent.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;