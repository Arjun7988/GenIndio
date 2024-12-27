import React from 'react';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Agreement to Terms',
      content: `By accessing or using GENINDO's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.`
    },
    {
      icon: Scale,
      title: 'Use License',
      content: `We grant you a limited, non-exclusive, non-transferable license to:
        • Access and use our services
        • Store, process, and use data in accordance with these terms
        • Integrate our services with your authorized applications`
    },
    {
      icon: Shield,
      title: 'Your Responsibilities',
      content: `You are responsible for:
        • Maintaining the confidentiality of your account
        • All activities under your account
        • Ensuring data accuracy and legality
        • Compliance with applicable laws and regulations`
    },
    {
      icon: AlertCircle,
      title: 'Restrictions',
      content: `You may not:
        • Use our services for illegal purposes
        • Infringe upon intellectual property rights
        • Attempt to gain unauthorized access
        • Resell or redistribute our services without authorization`
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-gray-300 leading-relaxed">
              Please read these Terms of Service carefully before using GENINDO's services. These terms govern your use of our website, products, and services.
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  
                  <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-purple-400">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    <div className="text-gray-300 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-gray-300 space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Terms of Service, please contact us at:
              </p>
              <ul className="list-disc list-inside">
                <li>Email: legal@genindo.com</li>
                <li>Phone: +1 (945) 900 6161</li>
                <li>Address: Irving, Texas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;