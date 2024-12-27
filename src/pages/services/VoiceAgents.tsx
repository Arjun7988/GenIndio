import React from 'react';
import { Mic, BrainCircuit, Languages, VolumeX, Zap, Phone, Headphones, BarChart2, Bot, MessageSquare } from 'lucide-react';

const VoiceAgents: React.FC = () => {
  const coreTechnologies = [
    {
      icon: BrainCircuit,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding context, intent, and sentiment in real-time conversations.',
      features: ['Context Understanding', 'Intent Recognition', 'Sentiment Analysis']
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Support for multiple languages and dialects with real-time translation capabilities.',
      features: ['40+ Languages', 'Dialect Recognition', 'Real-time Translation']
    },
    {
      icon: VolumeX,
      title: 'Voice Recognition',
      description: 'High-accuracy voice recognition with noise cancellation and accent adaptation.',
      features: ['99.9% Accuracy', 'Noise Reduction', 'Accent Recognition']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing for natural, fluid conversations without delays.',
      features: ['<100ms Latency', 'Parallel Processing', 'Dynamic Scaling']
    }
  ];

  const applications = [
    {
      icon: Phone,
      title: 'Customer Service',
      description: 'Handle customer inquiries 24/7 with intelligent voice agents that understand and resolve issues efficiently.',
      metrics: ['60% Cost Reduction', '24/7 Availability', '90% Resolution Rate']
    },
    {
      icon: Headphones,
      title: 'Healthcare',
      description: 'Provide medical information, schedule appointments, and offer preliminary symptom assessment.',
      metrics: ['HIPAA Compliant', 'Appointment Scheduling', 'Medical Transcription']
    },
    {
      icon: Bot,
      title: 'Smart Home',
      description: 'Voice-controlled home automation with natural language understanding and contextual awareness.',
      metrics: ['IoT Integration', 'Context Awareness', 'Custom Commands']
    },
    {
      icon: MessageSquare,
      title: 'Business Operations',
      description: 'Automate internal processes and enhance productivity with voice-enabled workflows.',
      metrics: ['Process Automation', 'Meeting Transcription', 'Task Management']
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate your needs and identify optimal voice agent implementation strategies.'
    },
    {
      step: '02',
      title: 'Customization',
      description: 'Tailor the voice agent to your specific requirements and industry standards.'
    },
    {
      step: '03',
      title: 'Integration',
      description: 'Seamlessly integrate with your existing systems and workflows.'
    },
    {
      step: '04',
      title: 'Training',
      description: 'Train the AI with your data and fine-tune for optimal performance.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launch your voice agent with comprehensive testing and monitoring.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AI Voice Agents
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Next-generation voice interaction powered by advanced artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTechnologies.map((tech, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 group-hover:translate-y-[-4px]">
                  <div className="text-purple-400 mb-4">
                    <tech.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-1">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-purple-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 relative bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="text-purple-500 mb-6">
                  <app.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Implementation Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Experience the future of voice interaction with our advanced AI solutions
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAgents;