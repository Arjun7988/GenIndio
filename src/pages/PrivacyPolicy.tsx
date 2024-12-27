import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information Collection',
      content: `We collect information that you provide directly to us, including:
        • Personal information (name, email, phone number)
        • Business information
        • Usage data and analytics
        • Communication records`
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: `We implement appropriate security measures to protect your information:
        • Encryption of sensitive data
        • Regular security assessments
        • Access controls and authentication
        • Secure data storage practices`
    },
    {
      icon: Eye,
      title: 'Information Usage',
      content: `Your information is used for:
        • Providing and improving our services
        • Communication and support
        • Analytics and service optimization
        • Legal compliance`
    },
    {
      icon: FileText,
      title: 'Data Sharing',
      content: `We may share your information with:
        • Service providers and partners
        • Legal authorities when required
        • Business transfers
        • With your consent`
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
              Privacy Policy
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
              At GENINDO, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
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
                If you have any questions about our Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc list-inside">
                <li>Email: privacy@genindo.com</li>
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

export default PrivacyPolicy;