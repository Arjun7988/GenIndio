import React from 'react';
import { Bot, Cpu, Network, Workflow, BrainCircuit, MessageSquare } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'AI Customer Service Platform',
      category: 'Chatbot Development',
      description: 'An intelligent customer service platform handling 10,000+ inquiries daily with 98% satisfaction rate.',
      icon: Bot,
      metrics: ['24/7 Support', '98% Satisfaction', '60% Cost Reduction'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    },
    {
      title: 'Smart Voice Assistant',
      category: 'Voice AI',
      description: 'Advanced voice AI system for a leading telecom provider, processing 50,000+ calls monthly.',
      icon: Cpu,
      metrics: ['95% Accuracy', '40% Faster Resolution', '30% Higher NPS'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    },
    {
      title: 'Enterprise Workflow Automation',
      category: 'Process Automation',
      description: 'End-to-end automation solution reducing manual processes by 80% for a Fortune 500 company.',
      icon: Workflow,
      metrics: ['80% Time Saved', '65% Cost Reduction', '99.9% Accuracy'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    },
    {
      title: 'Neural Network Analytics',
      category: 'AI Analytics',
      description: 'Predictive analytics platform for retail inventory management with 95% accuracy.',
      icon: Network,
      metrics: ['95% Accuracy', '40% Less Stockouts', '25% Revenue Increase'],
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Intelligent Document Processing',
      category: 'Document AI',
      description: 'AI-powered document processing system handling millions of pages monthly.',
      icon: BrainCircuit,
      metrics: ['99% Accuracy', '90% Faster Processing', '75% Cost Savings'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Multilingual Support Bot',
      category: 'NLP',
      description: 'Advanced chatbot supporting 20+ languages for a global e-commerce platform.',
      icon: MessageSquare,
      metrics: ['20+ Languages', '24/7 Support', '45% Support Cost Reduction'],
      image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how we've helped businesses transform with cutting-edge AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-purple-500/20 backdrop-blur-sm rounded-full p-2 z-20">
                    <project.icon className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;