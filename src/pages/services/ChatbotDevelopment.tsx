import React from 'react';
import { MessageSquare, Bot, BrainCircuit, Code } from 'lucide-react';

const ChatbotDevelopment: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Custom Chatbot Solutions',
      description: 'Tailored chatbots designed specifically for your business needs and industry requirements.',
    },
    {
      icon: BrainCircuit,
      title: 'NLP Integration',
      description: 'Advanced natural language processing for human-like conversations and understanding.',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Deploy chatbots across websites, mobile apps, and messaging platforms.',
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with your existing systems and third-party applications.',
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
              Chatbot Development
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build intelligent conversational interfaces that transform customer engagement
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
            Our Development Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Requirements Analysis',
                  description: 'Understanding your business needs and defining chatbot objectives.',
                },
                {
                  step: '02',
                  title: 'Design & Architecture',
                  description: 'Creating conversation flows and designing the chatbot architecture.',
                },
                {
                  step: '03',
                  title: 'Development & Training',
                  description: 'Building and training the chatbot with your business data.',
                },
                {
                  step: '04',
                  title: 'Testing & Deployment',
                  description: 'Rigorous testing and seamless deployment across channels.',
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

export default ChatbotDevelopment;