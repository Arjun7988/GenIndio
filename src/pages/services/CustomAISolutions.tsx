import React from 'react';
import { BrainCircuit, Bot, Network, Code } from 'lucide-react';

const CustomAISolutions: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'Machine Learning Models',
      description: 'Custom ML models designed for your specific business needs and data requirements.',
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Smart automation solutions powered by advanced AI algorithms.',
    },
    {
      icon: Network,
      title: 'Neural Networks',
      description: 'Deep learning solutions for complex pattern recognition and prediction.',
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with existing systems and third-party platforms.',
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
              Custom AI Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tailored artificial intelligence solutions to transform your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="text-purple-500 mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Development Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Understanding your business challenges and identifying AI opportunities.',
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Creating a custom AI architecture tailored to your needs.',
                },
                {
                  step: '03',
                  title: 'Development & Training',
                  description: 'Building and training AI models with your specific data.',
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Implementing the solution and continuously improving performance.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAISolutions;