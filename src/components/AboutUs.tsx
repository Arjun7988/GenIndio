import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At GENINDO, we're pioneering the future of business communication through advanced AI solutions. Our mission is to empower businesses with intelligent automation that enhances customer experiences and drives growth.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              With years of expertise in artificial intelligence and machine learning, we deliver cutting-edge solutions that transform how businesses interact with their customers. Our AI-powered tools are designed to be intuitive, efficient, and scalable.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;