import React from 'react';
import { Users, Target, Lightbulb, Award, Rocket, Shield, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Target, value: '98%', label: 'Success Rate' },
    { icon: Lightbulb, value: '150+', label: 'AI Solutions' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
  ];

  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pioneering AI solutions that push the boundaries of what\'s possible.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful change in how businesses operate globally.',
    },
    {
      icon: Cpu,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every solution we provide.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-purple-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${-Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
              About GENINDO
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Pioneering the future of business through innovative AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 h-full">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Our Journey
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Founded in 2020, GENINDO emerged from a vision to revolutionize how businesses interact with artificial intelligence. What began as a small team of AI enthusiasts has grown into a leading force in the AI solutions industry, serving clients across the globe.</p>
                  <p>Through years of dedicated research and development, we've pioneered breakthrough technologies in natural language processing, machine learning, and automation. Our commitment to innovation has earned us recognition as a trusted partner for businesses seeking to embrace the AI revolution.</p>
                  <p>Today, GENINDO stands at the forefront of AI innovation, with a track record of successful implementations across various industries. Our solutions have helped countless businesses achieve unprecedented levels of efficiency, productivity, and customer satisfaction.</p>
                  <p>As we look to the future, we remain committed to pushing the boundaries of what's possible with AI, continuously evolving our solutions to meet the changing needs of businesses in an increasingly digital world.</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 h-full">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>At GENINDO, we specialize in developing cutting-edge AI solutions that address real-world business challenges. Our team of expert engineers, data scientists, and AI researchers brings together decades of combined experience in artificial intelligence and machine learning.</p>
                  <p>We take pride in our ability to understand complex business requirements and translate them into effective AI solutions. Our expertise spans across various domains, including natural language processing, computer vision, predictive analytics, and automation.</p>
                  <p>Through continuous learning and adaptation, we stay ahead of the latest developments in AI technology, ensuring our clients always benefit from state-of-the-art solutions. Our commitment to excellence is reflected in every project we undertake.</p>
                  <p>Our collaborative approach means we work closely with our clients throughout the development process, ensuring solutions are tailored to their specific needs and objectives. This partnership-driven methodology has been key to our success and our clients' satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 group-hover:translate-y-[-4px] text-center">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 group-hover:translate-y-[-4px]">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
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
              Join us in shaping the future of business with innovative AI solutions
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;