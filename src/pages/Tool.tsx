import React, { useState } from 'react';
import {
  MessageSquare,
  PhoneCall,
  Calendar,
  UserPlus,
  Workflow,
} from 'lucide-react';

interface ToolSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  inputLabel: string;
  valuePrefix: string;
  valueSuffix: string;
  multiplier: number;
  source: string;
}

const Tool: React.FC = () => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const sections: ToolSection[] = [
    {
      title: 'Customer Service AI Agent',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'Calculate potential cost savings with AI-powered customer service',
      inputLabel: 'Current monthly customer service cost ($)',
      valuePrefix: '$',
      valueSuffix: ' monthly savings',
      multiplier: 0.6,
      source: 'Source: Gartner Research - AI in Customer Service Report 2023',
    },
    {
      title: 'Virtual Receptionist',
      icon: <PhoneCall className="w-8 h-8" />,
      description: 'Estimate time saved with AI reception handling',
      inputLabel: 'Current reception hours per week',
      valuePrefix: '',
      valueSuffix: ' hours saved weekly',
      multiplier: 0.75,
      source: 'Source: McKinsey Global Institute - Automation Impact Study',
    },
    {
      title: 'AI Appointment Setter',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Calculate appointment booking efficiency improvements',
      inputLabel: 'Current monthly appointments',
      valuePrefix: '',
      valueSuffix: '% booking efficiency increase',
      multiplier: 0.4,
      source: 'Source: Harvard Business Review - AI Productivity Report',
    },
    {
      title: 'One-Click Onboarding',
      icon: <UserPlus className="w-8 h-8" />,
      description: 'Measure potential reduction in onboarding time',
      inputLabel: 'Current onboarding time (hours)',
      valuePrefix: '',
      valueSuffix: '% time reduction',
      multiplier: 0.65,
      source: 'Source: Deloitte Digital Transformation Study',
    },
    {
      title: 'Workflow Automation',
      icon: <Workflow className="w-8 h-8" />,
      description: 'Estimate productivity gains through automation',
      inputLabel: 'Current manual process hours per week',
      valuePrefix: '',
      valueSuffix: '% productivity increase',
      multiplier: 0.8,
      source: 'Source: Forbes AI Implementation Survey 2023',
    },
  ];

  const handleInputChange = (section: string, value: string) => {
    setValues({ ...values, [section]: value });
  };

  const calculateValue = (input: string, multiplier: number): string => {
    if (!input) return '0';
    const value = parseFloat(input) * multiplier;
    return value.toFixed(2);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          AI Value Assessment Tool
        </h1>
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-purple-600">{section.icon}</div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {section.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {section.inputLabel}
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    value={values[section.title] || ''}
                    onChange={(e) => handleInputChange(section.title, e.target.value)}
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2">Estimated Value</div>
                  <div className="text-2xl text-purple-600">
                    {section.valuePrefix}
                    {calculateValue(values[section.title] || '0', section.multiplier)}
                    {section.valueSuffix}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {section.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;