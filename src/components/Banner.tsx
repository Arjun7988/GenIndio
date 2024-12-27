import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative h-screen">
      <Slider {...settings}>
        {/* AI Voice Agents Slide */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="text-white px-4">
                <h2 className="text-5xl font-bold mb-4">AI Voice Agents</h2>
                <p className="text-xl">Revolutionize your customer service with intelligent voice solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom AI Solutions Slide */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="text-white px-4">
                <h2 className="text-5xl font-bold mb-4">Custom AI Solutions</h2>
                <p className="text-xl">Tailored artificial intelligence solutions for your business needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Automation Slide */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="text-white px-4">
                <h2 className="text-5xl font-bold mb-4">Workflow Automation</h2>
                <p className="text-xl">Streamline your business processes with intelligent automation</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Marketing Automation Slide */}
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="text-white px-4">
                <h2 className="text-5xl font-bold mb-4">AI Marketing Automation</h2>
                <p className="text-xl">Transform your marketing with intelligent automation</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Banner;