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
      {/* Google Fonts Import - Bold, Heavy Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee&family=Righteous&family=Fredoka+One:wght@400&family=Rubik:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/a6/13/ba/a613ba05bbc10439ccd0d1850657da0d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for readability */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black bg-opacity-80' 
            : 'bg-white bg-opacity-85'
        }`} />

        {/* Enhanced background accents - Mobile optimized */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-amber-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                className={`block ${darkMode ? 'text-white' : 'text-gray-900'} tracking-wide`}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                We Don't Just
              </span>
              <span 
                className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent my-3 sm:my-4 md:my-6 transform hover:scale-105 transition-transform duration-500"
                style={{ 
                  fontFamily: 'Black Ops One, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.08em',
                  textShadow: '0 0 10px rgba(245, 158, 11, 0.2)',
                  filter: 'drop-shadow(0 0 5px rgba(245, 158, 11, 0.3))'
                }}
              >
                {textRotation[currentText]}
              </span>
              <span 
                className={`block ${darkMode ? 'text-white' : 'text-gray-900'} tracking-wide`}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Your Brand
              </span>
            </h1>

            {/* Enhanced subtitle with mobile typography */}
            <p 
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: '600',
                letterSpacing: '0.03em'
              }}
            >
              We turn strategy into unstoppable 
              <span 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent ml-1 sm:ml-2"
                style={{ 
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '800',
                  textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
                }}
              > 
                growth.
              </span>
            </p>

            {/* Enhanced CTA button - Mobile optimized */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-lg sm:rounded-xl transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 border-2 border-amber-400 relative overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
                style={{
                  fontFamily: 'Bungee, sans-serif',
                  fontWeight: '400',
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
                  letterSpacing: '0.05em',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                  boxShadow: '0 15px 35px -12px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(245, 158, 11, 0.5), 0 0 20px rgba(245, 158, 11, 0.3)'
                }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 relative z-10">
                  <span className="drop-shadow-lg">START TRANSFORMATION</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg" />
                </div>
              </button>
            </div>

            {/* Enhanced stats with mobile typography */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
              <div className="text-center group cursor-default">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: 'Fredoka One, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  5+
                </div>
                <div 
                  className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '0.1em'
                  }}
                >
                  Projects
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: 'Fredoka One, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  100%
                </div>
                <div 
                  className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '0.1em'
                  }}
                >
                  Satisfaction
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: 'Fredoka One, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  2025
                </div>
                <div 
                  className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '0.1em'
                  }}
                >
                  Founded
                </div>
              </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div 
              className="cursor-pointer group inline-block" 
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown 
                className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300 group-hover:scale-125 animate-bounce ${
                  darkMode ? 'text-amber-400' : 'text-amber-600'
                }`}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6))'
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