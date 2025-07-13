import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown
} from 'lucide-react';

type HeroSectionProps = {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textRotation = [
    "TRANSFORM",
    "ELEVATE", 
    "AMPLIFY"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % textRotation.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: '#0a0a0a'
        }}
      >
        {/* Animated 3D Elements */}
        <div className="absolute inset-0 opacity-60">
          {/* Floating ring elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-orange-500 animate-spin-slow opacity-40"
               style={{
                 background: 'linear-gradient(45deg, transparent, rgba(255, 165, 0, 0.1), transparent)',
                 animation: 'spin 20s linear infinite'
               }}
          />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-2 border-red-500 animate-pulse opacity-30"
               style={{
                 background: 'radial-gradient(circle, rgba(255, 0, 0, 0.1), transparent)',
                 animation: 'pulse 3s ease-in-out infinite'
               }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-3 border-yellow-500 opacity-20"
               style={{
                 background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 0, 0.2), transparent)',
                 animation: 'spin 15s linear infinite reverse'
               }}
          />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main Headlines */}
            <div className="text-left max-w-5xl">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none mb-4 sm:mb-6">
                <span 
                  className="block text-white font-black tracking-tight"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em'
                  }}
                >
                  DESIGN
                </span>
                <span 
                  className="block text-white font-black tracking-tight"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em'
                  }}
                >
                  DEVELOP
                </span>
                
                {/* Highlighted word with background */}
                <div className="relative inline-block">
                  <span 
                    className="block text-white font-black tracking-tight bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-8 py-2 sm:py-4 transform -rotate-2 relative z-10"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {textRotation[currentText]}
                  </span>
                </div>
              </h1>

              {/* Subtitle */}
              <div className="max-w-2xl mb-8 sm:mb-12">
                <p 
                  className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400'
                  }}
                >
                  No fluff, no jargon, just clean, elegant code and designs that pop.
                </p>
                <p 
                  className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400'
                  }}
                >
                  Get your own <span className="text-orange-500 font-semibold">custom digital solution</span> right now!
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-12 sm:mb-16">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  <div className="flex items-center justify-center space-x-3 relative z-10">
                    <span>BOOK A CALL</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Stats */}
        <div className="absolute bottom-8 right-8 text-right">
          <div className="mb-6">
            <div className="text-right mb-2">
              <span 
                className="text-white text-sm sm:text-base tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400'
                }}
              >
                You <span className="text-orange-500 font-semibold">think</span> it, we <span className="text-red-500 font-semibold">ship</span> it
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-right">
              <div 
                className="text-white text-4xl sm:text-5xl md:text-6xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                22<span className="text-orange-500">+</span>
              </div>
              <div 
                className="text-gray-400 text-sm sm:text-base tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400'
                }}
              >
                IDEAS SHIPPED
              </div>
            </div>
            
            <div className="text-right">
              <div 
                className="text-white text-4xl sm:text-5xl md:text-6xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                48<span className="text-orange-500">+</span>
              </div>
              <div 
                className="text-gray-400 text-sm sm:text-base tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400'
                }}
              >
                DESIGNS SHIPPED
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div 
            className="cursor-pointer group" 
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown 
              className="w-8 h-8 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-125 animate-bounce"
            />
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;