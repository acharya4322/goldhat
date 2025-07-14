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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Google Fonts Import - Modern Tech Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 border border-orange-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 border border-orange-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-sm animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Orange gradient overlay accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/5 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-red-500 to-orange-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main Headline with Modern Tech Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] mb-6 sm:mb-8 leading-tight text-center">
              <span 
                className="block text-gray-100 tracking-tight"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 20px rgba(255,255,255,0.1)'
                }}
              >
                DESIGN
              </span>
              <span 
                className="block text-gray-100 tracking-tight"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 20px rgba(255,255,255,0.1)'
                }}
              >
                DEVELOP
              </span>
              <span 
                className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 relative"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
                  filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))'
                }}
              >
                DEPLOY
                {/* Orange accent box like in reference */}
                <div className="absolute -right-4 sm:-right-8 md:-right-16 top-1/2 -translate-y-1/2 w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16 bg-gradient-to-r from-orange-500 to-red-600 transform rotate-12 opacity-90" />
              </span>
            </h1>

            {/* Modern tech subtitle */}
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0 text-gray-300"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '400',
                letterSpacing: '0.01em'
              }}
            >
              No fluff, no jargon, just clean, elegant code and designs that pop.
              <br className="hidden sm:block" />
              Get your own 
              <span 
                className="text-orange-500 ml-1 sm:ml-2 font-semibold"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600'
                }}
              > 
                custom digital solution
              </span>
              <span className="text-gray-300"> right now !</span>
            </p>

            {/* Modern CTA button */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-5 rounded-lg transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 border border-orange-400/30 relative overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                  letterSpacing: '0.02em',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                  boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(249, 115, 22, 0.2)'
                }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 relative z-10">
                  <span>BOOK A CALL</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Modern stats with tech styling */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 max-w-xs sm:max-w-lg md:max-w-xl mx-auto">
              <div className="text-center group cursor-default">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: '700',
                    textShadow: '0 0 20px rgba(249, 115, 22, 0.4)'
                  }}
                >
                  22+
                </div>
                <div 
                  className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    letterSpacing: '0.1em'
                  }}
                >
                  IDEAS SHIPPED
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: '700',
                    textShadow: '0 0 20px rgba(249, 115, 22, 0.4)'
                  }}
                >
                  48+
                </div>
                <div 
                  className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500',
                    letterSpacing: '0.1em'
                  }}
                >
                  DESIGNS SHIPPED
                </div>
              </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div 
              className="cursor-pointer group inline-block" 
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-125 animate-bounce text-orange-500"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.6))'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;