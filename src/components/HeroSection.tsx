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
    "Transform",
    "Elevate", 
    "Amplify"
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
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
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

        {/* Bottom Left - START TRANSFORMATION Button */}
        <div className="absolute bottom-6 left-6 z-20">
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-white hover:text-black relative overflow-hidden"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '0.05em'
            }}
          >
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <span>START TRANSFORMATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Bottom Right - Stats */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="text-right space-y-4">
            <div className="text-right">
              <div 
                className="text-white text-3xl sm:text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                5<span className="text-orange-500">+</span>
              </div>
              <div 
                className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em'
                }}
              >
                Projects
              </div>
            </div>
            
            <div className="text-right">
              <div 
                className="text-white text-3xl sm:text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                100<span className="text-orange-500">%</span>
              </div>
              <div 
                className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em'
                }}
              >
                Satisfaction
              </div>
            </div>
            
            <div className="text-right">
              <div 
                className="text-white text-3xl sm:text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                2025
              </div>
              <div 
                className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em'
                }}
              >
                Founded
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main Headline with Mobile-Responsive Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] mb-6 sm:mb-8 leading-tight text-center">
              <span 
                className="block text-white tracking-tight font-black"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '-0.02em'
                }}
              >
                We Don't Just
              </span>
              
              {/* Highlighted rotating word with background */}
              <div className="relative inline-block my-3 sm:my-4 md:my-6">
                <span 
                  className="block text-white font-black tracking-tight bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-8 py-2 sm:py-4 transform -rotate-2 relative z-10 hover:scale-105 transition-transform duration-500"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {textRotation[currentText]}
                </span>
              </div>
              
              <span 
                className="block text-white tracking-tight font-black"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '-0.02em'
                }}
              >
                Your Brand
              </span>
            </h1>

            {/* Enhanced subtitle */}
            <p 
              className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-12 sm:mb-16 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '400'
              }}
            >
              We turn strategy into unstoppable 
              <span 
                className="text-orange-500 font-semibold ml-1 sm:ml-2"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600'
                }}
              > 
                growth.
              </span>
            </p>

            {/* Enhanced scroll indicator */}
            <div 
              className="cursor-pointer group inline-block" 
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-125 animate-bounce"
              />
            </div>
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