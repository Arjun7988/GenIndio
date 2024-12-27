import React from 'react';
import { MessageSquare, Mic, Workflow, BarChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      number: 1,
      icon: Mic,
      title: 'AI Voice Agents',
      description: 'Advanced voice recognition and natural language processing solutions that enable seamless human-like interactions. Our AI voice agents handle customer inquiries, process requests, and provide support 24/7.',
    },
    {
      number: 2,
      icon: MessageSquare,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed to meet your specific business needs. From predictive analytics to intelligent automation, we create custom AI systems that drive innovation and efficiency.',
    },
    {
      number: 3,
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Transform your business operations with intelligent automation. Our AI-powered solutions streamline processes, reduce manual tasks, and increase efficiency across your organization.',
    },
    {
      number: 4,
      icon: BarChart,
      title: 'AI Marketing Automation',
      description: 'Revolutionize your marketing strategies with AI-driven automation. From personalized customer experiences to predictive analytics, our solutions help you achieve better marketing results.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with next-generation AI solutions that drive growth, efficiency, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;