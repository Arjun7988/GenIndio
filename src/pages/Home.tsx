import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import AIAgents from '../components/AIAgents';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AIAgents />
      <AboutUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;