import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Zap
} from 'lucide-react';

type HeroSectionProps = {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [particles, setParticles] = useState([]);

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

    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1611 50%, #0f0f0f 100%)'
        }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full opacity-60"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: 'radial-gradient(circle, #D4AF37, transparent)',
                animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`
              }}
            />
          ))}
        </div>

        {/* Desktop Background Elements - Enhanced */}
        <div className="absolute inset-0 opacity-60 hidden md:block">
          {/* Larger animated rings with glow */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 opacity-40"
               style={{
                 borderColor: '#D4AF37',
                 background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
                 animation: 'spin 20s linear infinite',
                 boxShadow: '0 0 100px rgba(212, 175, 55, 0.3)'
               }}
          />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full border-2 opacity-30"
               style={{
                 borderColor: '#FFD700',
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1), transparent)',
                 animation: 'pulse 3s ease-in-out infinite',
                 boxShadow: '0 0 80px rgba(255, 215, 0, 0.2)'
               }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full border-3 opacity-20"
               style={{
                 borderColor: '#B8860B',
                 background: 'conic-gradient(from 0deg, transparent, rgba(184, 134, 11, 0.2), transparent)',
                 animation: 'spin 15s linear infinite reverse',
                 boxShadow: '0 0 120px rgba(184, 134, 11, 0.2)'
               }}
          />
        </div>

        {/* Mobile Background Elements - Enhanced */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute top-20 left-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
               style={{
                 background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent)',
                 animation: 'pulse 4s ease-in-out infinite'
               }}
          />
          <div className="absolute bottom-32 right-0 w-48 h-48 rounded-full opacity-40 blur-2xl"
               style={{
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5), transparent)',
                 animation: 'pulse 3s ease-in-out infinite reverse'
               }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 blur-xl"
               style={{
                 background: 'radial-gradient(circle, rgba(184, 134, 11, 0.6), transparent)',
                 animation: 'pulse 2s ease-in-out infinite'
               }}
          />
        </div>

        {/* Desktop Bottom Left - Enhanced START TRANSFORMATION Button */}
        <div className="absolute bottom-6 left-6 z-20 hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative bg-transparent border-2 text-white px-8 py-4 rounded-full transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              borderColor: '#D4AF37',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #FFD700)';
              e.currentTarget.style.color = '#0a0a0a';
              e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.2)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>START TRANSFORMATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Desktop Bottom Right - Enhanced Stats */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:block">
          <div className="text-right space-y-6">
            <div className="text-right group cursor-pointer">
              <div 
                className="text-white text-5xl font-black transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                5<span style={{ color: '#D4AF37' }}>+</span>
              </div>
              <div 
                className="text-sm uppercase tracking-wider transition-all duration-300 group-hover:text-yellow-400"
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
            
            <div className="text-right group cursor-pointer">
              <div 
                className="text-white text-5xl font-black transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                100<span style={{ color: '#D4AF37' }}>%</span>
              </div>
              <div 
                className="text-sm uppercase tracking-wider transition-all duration-300 group-hover:text-yellow-400"
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
            
            <div className="text-right group cursor-pointer">
              <div 
                className="text-white text-5xl font-black transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                2025
              </div>
              <div 
                className="text-sm uppercase tracking-wider transition-all duration-300 group-hover:text-yellow-400"
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

        {/* Mobile Bottom Elements - NEW */}
        <div className="absolute bottom-6 left-4 right-4 z-20 md:hidden">
          <div className="flex justify-between items-end">
            {/* Mobile START TRANSFORMATION Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-transparent border-2 text-white px-5 py-3 rounded-full transform active:scale-95 transition-all duration-300 overflow-hidden flex-shrink-0"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                borderColor: '#D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #FFD700)';
                e.currentTarget.style.color = '#0a0a0a';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                }, 100);
              }}
            >
              <div className="flex items-center justify-center space-x-2 relative z-10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Mobile Stats - Horizontal Layout */}
            <div className="flex space-x-3 text-center">
              <div className="text-center group cursor-pointer min-w-0">
                <div 
                  className="text-white text-xl font-black transition-all duration-300 group-active:scale-110 leading-tight"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: '900',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  5<span style={{ color: '#D4AF37' }}>+</span>
                </div>
                <div 
                  className="text-xs uppercase tracking-wider leading-tight"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.05em',
                    color: '#B8860B'
                  }}
                >
                  Projects
                </div>
              </div>
              
              <div className="text-center group cursor-pointer min-w-0">
                <div 
                  className="text-white text-xl font-black transition-all duration-300 group-active:scale-110 leading-tight"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: '900',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  100<span style={{ color: '#D4AF37' }}>%</span>
                </div>
                <div 
                  className="text-xs uppercase tracking-wider leading-tight"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.05em',
                    color: '#B8860B'
                  }}
                >
                  Satisfaction
                </div>
              </div>
              
              <div className="text-center group cursor-pointer min-w-0">
                <div 
                  className="text-white text-xl font-black transition-all duration-300 group-active:scale-110 leading-tight"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: '900',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  2025
                </div>
                <div 
                  className="text-xs uppercase tracking-wider leading-tight"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.05em',
                    color: '#B8860B'
                  }}
                >
                  Founded
                </div>
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
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  We Don't Just
                </span>
                
                {/* Enhanced rotating word with better effects */}
                <div className="relative inline-block my-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-xl opacity-30 animate-pulse" />
                  <span 
                    className="block text-black font-black tracking-tight px-8 py-4 transform -rotate-2 relative z-10 transition-all duration-500 hover:scale-105 hover:rotate-1"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.02em',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                      boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 60px rgba(255, 215, 0, 0.3)',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {textRotation[currentText]}
                  </span>
                  <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                
                <span 
                  className="block text-white tracking-tight font-black"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Your Brand
                </span>
              </h1>

              {/* Enhanced Desktop subtitle */}
              <p 
                className="text-xl lg:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  color: '#B8B8B8',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                We turn strategy into unstoppable 
                <span 
                  className="font-semibold ml-2 relative"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    color: '#D4AF37',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                > 
                  growth.
                  <div className="absolute -top-1 -right-1 text-yellow-400 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </span>
              </p>

              {/* Enhanced Desktop scroll indicator */}
              <div 
                className="cursor-pointer group inline-block relative" 
                onClick={() => scrollToSection('about')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-2 border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300">
                  <ChevronDown 
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-125 animate-bounce"
                    style={{ 
                      color: '#B8860B',
                      filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))'
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
            </div>

            {/* Enhanced Mobile Layout */}
            <div className="md:hidden text-center px-4 py-8 flex flex-col justify-center items-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
              <div className="mb-8 space-y-2">
                <h1 className="text-6xl sm:text-7xl leading-none font-black tracking-tight">
                  <span 
                    className="block text-white"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    WE DON'T
                  </span>
                  
                  <span 
                    className="block text-white"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    JUST
                  </span>
                  
                  {/* Enhanced mobile word */}
                  <div className="relative inline-block transform -rotate-3 mt-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-xl opacity-30 animate-pulse" />
                    <span 
                      className="block text-black font-black tracking-tight px-6 py-3 relative z-10"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                        boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 40px rgba(255, 215, 0, 0.3)',
                        fontSize: '3.5rem',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {textRotation[currentText]}
                    </span>
                  </div>
                  
                  <span 
                    className="block text-white mt-2"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    YOUR BRAND
                  </span>
                </h1>
              </div>

              {/* Enhanced Mobile subtitle */}
              <p 
                className="text-lg sm:text-xl leading-relaxed max-w-md mx-auto opacity-90 text-center mb-12"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  color: '#B8B8B8',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                We turn strategy into unstoppable{' '}
                <span 
                  className="font-semibold relative"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    color: '#D4AF37',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  growth.
                </span>
              </p>

              {/* Mobile scroll indicator */}
              <div 
                className="cursor-pointer group inline-block relative" 
                onClick={() => scrollToSection('about')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-20 group-active:opacity-40 transition-opacity duration-300" />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-2 border border-yellow-400/30 group-active:border-yellow-400/60 transition-all duration-300">
                  <ChevronDown 
                    className="w-6 h-6 transition-all duration-300 group-active:scale-125 animate-bounce"
                    style={{ 
                      color: '#B8860B',
                      filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Custom CSS for animations */}
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;