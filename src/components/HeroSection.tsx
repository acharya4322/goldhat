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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1611 50%, #0f0f0f 100%)'
        }}
      >
        {/* Desktop Background Elements - Hidden on Mobile */}
        <div className="absolute inset-0 opacity-60 hidden md:block">
          {/* Floating ring elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 opacity-40"
               style={{
                 borderColor: '#D4AF37',
                 background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
                 animation: 'spin 20s linear infinite'
               }}
          />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-2 opacity-30"
               style={{
                 borderColor: '#FFD700',
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1), transparent)',
                 animation: 'pulse 3s ease-in-out infinite'
               }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-3 opacity-20"
               style={{
                 borderColor: '#B8860B',
                 background: 'conic-gradient(from 0deg, transparent, rgba(184, 134, 11, 0.2), transparent)',
                 animation: 'spin 15s linear infinite reverse'
               }}
          />
        </div>

        {/* Mobile Background Elements - Visible only on Mobile */}
        <div className="absolute inset-0 md:hidden">
          {/* Gradient orbs for mobile */}
          <div className="absolute top-20 left-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, rgba(255, 69, 0, 0.4), transparent)',
                 animation: 'pulse 4s ease-in-out infinite'
               }}
          />
          <div className="absolute bottom-32 right-0 w-48 h-48 rounded-full opacity-40 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, rgba(212, 175, 55, 0.5), transparent)',
                 animation: 'pulse 3s ease-in-out infinite reverse'
               }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 blur-xl"
               style={{
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6), transparent)',
                 animation: 'pulse 2s ease-in-out infinite'
               }}
          />
        </div>

        {/* Desktop Bottom Left - START TRANSFORMATION Button */}
        <div className="absolute bottom-6 left-6 z-20 hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-transparent border-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              borderColor: '#D4AF37'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #FFD700)';
              e.currentTarget.style.color = '#0a0a0a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <span>START TRANSFORMATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Desktop Bottom Right - Stats */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:block">
          <div className="text-right space-y-4">
            <div className="text-right">
              <div 
                className="text-white text-3xl sm:text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900'
                }}
              >
                5<span style={{ color: '#D4AF37' }}>+</span>
              </div>
              <div 
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  color: '#B8860B'
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
                100<span style={{ color: '#D4AF37' }}>%</span>
              </div>
              <div 
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  color: '#B8860B'
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
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  color: '#B8860B'
                }}
              >
                Founded
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Desktop Layout */}
            <div className="hidden md:block text-center">
              {/* Main Headline with Desktop Typography */}
              <h1 className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] mb-6 sm:mb-8 leading-tight">
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
                
                {/* Highlighted rotating word with gold background */}
                <div className="relative inline-block my-6">
                  <span 
                    className="block text-black font-black tracking-tight px-8 py-4 transform -rotate-2 relative z-10 hover:scale-105 transition-transform duration-500"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.02em',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                      boxShadow: '0 8px 32px rgba(212, 175, 55, 0.3)'
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

              {/* Desktop subtitle */}
              <p 
                className="text-xl lg:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  color: '#E6E6E6'
                }}
              >
                We turn strategy into unstoppable 
                <span 
                  className="font-semibold ml-2"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    color: '#D4AF37'
                  }}
                > 
                  growth.
                </span>
              </p>

              {/* Desktop scroll indicator */}
              <div 
                className="cursor-pointer group inline-block" 
                onClick={() => scrollToSection('about')}
              >
                <ChevronDown 
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-125 animate-bounce"
                  style={{ 
                    color: '#B8860B',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8860B';
                  }}
                />
              </div>
            </div>

            {/* Mobile Layout - Clean First Impression */}
            <div className="md:hidden text-left px-4 py-8 flex flex-col justify-center min-h-screen">
              {/* Mobile Main Headline - Stacked Design */}
              <div className="mb-8 space-y-2">
                <h1 className="text-5xl sm:text-6xl leading-none font-black tracking-tight">
                  <span 
                    className="block text-white"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    WE DON'T
                  </span>
                  
                  <span 
                    className="block text-white"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    JUST
                  </span>
                  
                  {/* Fixed word "Amplify" with orange background */}
                  <div className="relative inline-block transform -rotate-3 mt-2">
                    <span 
                      className="block text-white font-black tracking-tight px-4 py-2 relative z-10"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C42 100%)',
                        boxShadow: '0 8px 32px rgba(255, 69, 0, 0.4)',
                        fontSize: '3rem'
                      }}
                    >
                      Amplify
                    </span>
                  </div>
                  
                  <span 
                    className="block text-white mt-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    YOUR BRAND
                  </span>
                </h1>
              </div>

              {/* Mobile subtitle */}
              <p 
                className="text-base leading-relaxed max-w-xs opacity-90"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  color: '#E6E6E6'
                }}
              >
                We turn strategy into unstoppable{' '}
                <span 
                  className="font-semibold"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    color: '#FF4500'
                  }}
                >
                  growth.
                </span>
              </p>
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