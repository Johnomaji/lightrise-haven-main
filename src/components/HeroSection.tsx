
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          className="min-h-full min-w-full absolute object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-sunrise-over-the-horizon-1689-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Animated city sunrise image */}
      <div className={`absolute inset-0 w-full h-full z-1 transition-opacity duration-1000 ${animationComplete ? 'opacity-40' : 'opacity-0'}`}>
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
          alt="City Sunrise" 
          className="min-h-full min-w-full absolute object-cover"
        />
      </div>
      
      {/* Updated overlay gradients to use Microsoft-inspired colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4] to-[#002050] opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#FFB900]/20 via-transparent to-transparent opacity-80"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Strategic Technology Support for Businesses that want to make an Impact
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Working directly with you to drive positive business transformation through Copilot Enabled Microsoft Cloud solutions, Personalized people-centred technology consulting, and dedicated support throughout your journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-[#E74C3C] hover:bg-[#C0392B] text-white font-medium py-2 px-6 rounded-lg" size="lg" asChild>
              <a href="#services">Explore Our Approach</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-2 px-6 rounded-lg" size="lg" asChild>
              <a href="#contact">Schedule a Chat</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
