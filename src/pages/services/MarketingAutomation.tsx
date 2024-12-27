import React from 'react';
import { BarChart, Target, Mail, Megaphone } from 'lucide-react';

const MarketingAutomation: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-powered analytics to predict customer behavior and optimize marketing campaigns.',
    },
    {
      icon: Target,
      title: 'Personalization Engine',
      description: 'Dynamic content personalization based on user behavior and preferences.',
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Intelligent email marketing with smart segmentation and timing optimization.',
    },
    {
      icon: Megaphone,
      title: 'Multi-Channel Campaigns',
      description: 'Automated campaign management across multiple marketing channels.',
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
              AI Marketing Automation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your marketing with intelligent automation and data-driven insights
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

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Increased ROI',
                value: '45%',
                description: 'Higher return on marketing investments',
              },
              {
                title: 'Time Saved',
                value: '70%',
                description: 'Reduction in campaign management time',
              },
              {
                title: 'Conversion Rate',
                value: '35%',
                description: 'Improvement in conversion rates',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAutomation;