import React from 'react';
import { Workflow, Zap, BarChart, Clock } from 'lucide-react';

const WorkflowAutomation: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business processes.',
    },
    {
      icon: Zap,
      title: 'Intelligent Routing',
      description: 'Smart task distribution and workflow management.',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and performance tracking.',
    },
    {
      icon: Clock,
      title: 'Time Optimization',
      description: 'Reduce process completion time and improve efficiency.',
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
              Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Streamline your business processes with intelligent automation solutions
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

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Common Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Document Processing',
                description: 'Automated document handling, classification, and data extraction.',
              },
              {
                title: 'Customer Onboarding',
                description: 'Streamlined customer registration and verification processes.',
              },
              {
                title: 'Invoice Processing',
                description: 'Automated invoice handling and payment processing.',
              },
              {
                title: 'HR Workflows',
                description: 'Employee onboarding, leave management, and performance reviews.',
              },
              {
                title: 'Supply Chain',
                description: 'Inventory management and order processing automation.',
              },
              {
                title: 'Compliance',
                description: 'Automated compliance checks and reporting.',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowAutomation;