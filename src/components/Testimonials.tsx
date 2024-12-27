import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'GENINDO\'s AI solutions have transformed our customer service operations. The results have been outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director, GlobalTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'The AI chatbots have significantly improved our response times and customer satisfaction scores.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'Implementing GENINDO\'s workflow automation has boosted our productivity by 300%.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      content: 'The AI voice agents have revolutionized how we handle customer support calls.',
      rating: 5,
    },
  ];

  return (
    <section 
      className="py-20 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/90 dark:bg-gray-900/95 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-purple-500"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-200 dark:text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-100 dark:text-gray-200">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;