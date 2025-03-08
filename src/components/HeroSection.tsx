
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Stars Background */}
      <div className="stars-bg"></div>
      
      {/* Background Planet */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full bg-cosmic-blue/10 border border-cosmic-blue/20 animate-rotate-slow"
        style={{
          bottom: `-400px`,
          right: `-200px`,
          filter: 'blur(30px)',
          transform: `translateY(${parallaxOffset * 0.2}px)`
        }}
      ></div>
      
      {/* Floating Planet */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cosmic-purple/30 to-cosmic-blue/30 animate-float"
        style={{
          top: '15%',
          right: '10%',
          filter: 'blur(10px)',
          transform: `translateY(${-parallaxOffset * 0.4}px)`
        }}
      ></div>
      
      {/* Floating Star */}
      <div 
        className="absolute w-8 h-8 bg-white rounded-full animate-pulse-glow"
        style={{
          top: '25%',
          left: '15%',
          boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.3)',
          transform: `translateY(${-parallaxOffset * 0.5}px)`
        }}
      ></div>

      {/* Content */}
      <div 
        className="container relative z-10 text-center px-4"
        style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-white">JOURNEY TO THE </span>
          <span className="text-cosmic-purple">STARS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Experience the ultimate cosmic adventure with our luxury space travel packages. Book your voyage to the stars today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-cosmic-purple hover:bg-cosmic-purple/80 text-lg px-8 py-6"
            onClick={() => scrollToSection('booking-section')}
          >
            BOOK YOUR TRIP
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10 text-lg px-8 py-6"
            onClick={() => scrollToSection('destinations-section')}
          >
            EXPLORE DESTINATIONS
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
