// src/components/AboutSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Crown, 
  Sparkles, 
  Target, 
  PenTool, 
  TrendingUp, 
  BarChart3, 
  Star,
  Zap,
  Award,
  Users,
  Code,
  Smartphone
} from 'lucide-react';

type AboutSectionProps = {
  darkMode: boolean;
};

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for mobile
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Google Fonts Import - Same as HeroSection */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee&family=Righteous&family=Fredoka+One:wght@400&family=Rubik:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        ref={aboutRef}
        id="about" 
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Remove fixed attachment for mobile performance
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        {/* Dark overlay for readability over background image */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black bg-opacity-85' 
            : 'bg-white bg-opacity-90'
        }`} />

        {/* Enhanced Background Effects - Optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-full h-full opacity-15 sm:opacity-20"
            style={{
              background: `radial-gradient(circle at 30% 70%, 
                rgba(251, 191, 36, 0.4) 0%, 
                rgba(245, 158, 11, 0.3) 40%, 
                transparent 70%)`,
              filter: 'blur(60px) sm:blur(100px)',
            }}
          />

          <div className="absolute inset-0 opacity-10 sm:opacity-15">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(251, 191, 36, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(251, 191, 36, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px sm:40px 40px',
              }}
            />
          </div>

          {/* Floating accent elements - Reduced for mobile */}
          <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-amber-400 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-25 animate-pulse" />
          <div className="absolute bottom-20 right-8 sm:bottom-32 sm:right-16 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-400 rounded-full blur-2xl sm:blur-3xl opacity-15 sm:opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-orange-400 rounded-full blur-2xl sm:blur-3xl opacity-10 sm:opacity-15 animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          {/* Enhanced Header with Bold Typography - Mobile Optimized */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
              <h2 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.02em sm:0.05em',
                  textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.8) sm:4px 4px 8px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3) sm:2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>About </span>
                <span className="relative block xs:inline">
                  <span 
                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Black Ops One, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.05em sm:0.08em',
                      textShadow: '0 0 15px rgba(245, 158, 11, 0.3) sm:0 0 20px rgba(245, 158, 11, 0.3)',
                      filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4)) sm:drop-shadow(0 0 10px rgba(245, 158, 11, 0.4))'
                    }}
                  >
                    GOLDHAT
                  </span>
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 sm:from-amber-400/30 sm:to-yellow-500/30 blur-xl sm:blur-2xl -z-10 animate-pulse" />
                </span>
              </h2>
              
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 animate-bounce-slow">
                <Crown 
                  className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-amber-400" 
                  style={{ filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.6)) sm:drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))' }}
                />
              </div>
            </div>
            
            <p 
              className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto px-2 sm:px-4 lg:px-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.01em sm:0.02em'
              }}
            >
              We're not your typical agency. We're{' '}
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '800',
                    textShadow: '0 0 8px rgba(245, 158, 11, 0.3) sm:0 0 10px rgba(245, 158, 11, 0.3)'
                  }}
                >
                  digital alchemists
                </span>
                <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              </span>
              {' '}who transform ordinary brands into golden legends through marketing excellence and cutting-edge development.
            </p>
          </div>

          {/* Enhanced Story Section - Mobile Optimized */}
          <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="order-2 lg:order-1">
              <h3 
                className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6 lg:mb-8 relative`}
                style={{
                  fontFamily: 'Bungee, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.03em sm:0.05em',
                  textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.7) sm:3px 3px 6px rgba(0,0,0,0.7)' : '1px 1px 2px rgba(0,0,0,0.2) sm:2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Our Story
                <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                <Sparkles 
                  className="absolute -top-1 -right-6 sm:-top-2 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 text-amber-400 animate-bounce-slow" 
                  style={{ filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6)) sm:drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))' }}
                />
              </h3>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <p 
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm xs:text-base sm:text-lg lg:text-xl`}
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.01em'
                  }}
                >
                  Born from the belief that every brand deserves to shine like gold, GOLDHAT was founded by a team of
                  digital rebels who refused to accept mediocrity. We saw too many brilliant brands hiding in the shadows,
                  waiting for their moment to sparkle.
                </p>
                <p 
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm xs:text-base sm:text-lg lg:text-xl`}
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.01em'
                  }}
                >
                  Today, we're the secret weapon behind some of the most talked-about brands in the digital space.
                  From strategic marketing campaigns to cutting-edge web and mobile applications, our mission is to make 
                  every brand we touch absolutely <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent font-bold">unforgettable</span>.
                </p>
              </div>

              {/* Enhanced Stats with Bold Typography - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
                <div className={`text-center p-3 xs:p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 sm:hover:scale-110 transform ${
                  darkMode
                    ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                    : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                } hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-500/30`}>
                  <div 
                    className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Fredoka One, sans-serif',
                      fontWeight: '400',
                      textShadow: '0 0 15px rgba(245, 158, 11, 0.4) sm:0 0 20px rgba(245, 158, 11, 0.4)'
                    }}
                  >
                    2024
                  </div>
                  <div 
                    className={`font-bold text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '700',
                      letterSpacing: '0.05em sm:0.1em'
                    }}
                  >
                    FOUNDED
                  </div>
                </div>
                
                <div className={`text-center p-3 xs:p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 sm:hover:scale-110 transform ${
                  darkMode
                    ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                    : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                } hover:shadow-xl sm:hover:shadow-2xl hover:shadow-amber-500/30`}>
                  <div 
                    className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Fredoka One, sans-serif',
                      fontWeight: '400',
                      textShadow: '0 0 15px rgba(245, 158, 11, 0.4) sm:0 0 20px rgba(245, 158, 11, 0.4)'
                    }}
                  >
                    3
                  </div>
                  <div 
                    className={`font-bold text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '700',
                      letterSpacing: '0.05em sm:0.1em'
                    }}
                  >
                    GOLD HATTERS
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Mission Card - Mobile Optimized */}
            <div className="relative order-1 lg:order-2">
              <div className={`relative p-4 xs:p-5 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border-2 sm:border-3 shadow-xl sm:shadow-2xl transition-all duration-500 hover:scale-102 sm:hover:scale-105 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/70 to-black/90 border-amber-500/40'
                  : 'bg-gradient-to-br from-white/90 via-gray-50/70 to-amber-50/90 border-amber-400/40'
              } hover:shadow-amber-500/30`}>
                
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-bounce-slow">
                  <Sparkles 
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-amber-400" 
                    style={{ filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8)) sm:drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))' }}
                  />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <Star 
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-yellow-400" 
                    style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8)) sm:drop-shadow(0 0 12px rgba(250, 204, 21, 0.8))' }}
                  />
                </div>
                
                <h4 
                  className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6 lg:mb-8 relative`}
                  style={{
                    fontFamily: 'Righteous, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.02em sm:0.03em',
                    textShadow: darkMode ? '1px 1px 2px rgba(0,0,0,0.6) sm:2px 2px 4px rgba(0,0,0,0.6)' : '1px 1px 2px rgba(0,0,0,0.2)'
                  }}
                >
                  Our Mission
                  <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                </h4>
                
                <p 
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm xs:text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8`}
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '500',
                    letterSpacing: '0.01em'
                  }}
                >
                  To transform every brand into a golden legend that captivates, converts, and conquers their market
                  through bold creativity, strategic brilliance, and innovative technology solutions.
                </p>
                
                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="flex -space-x-1.5 sm:-space-x-2 lg:-space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full border-2 sm:border-3 border-white flex items-center justify-center shadow-lg sm:shadow-xl transform hover:scale-110 sm:hover:scale-125 transition-all duration-300"
                        style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.5) sm:0 0 20px rgba(245, 158, 11, 0.5)' }}
                      >
                        <Crown className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-black" />
                      </div>
                    ))}
                  </div>
                  <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div 
                      className="font-bold text-sm xs:text-base sm:text-lg lg:text-xl"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '800',
                        letterSpacing: '0.01em sm:0.02em'
                      }}
                    >
                      The Gold Hat Team
                    </div>
                    <div 
                      className="text-xs sm:text-sm lg:text-base opacity-80"
                      style={{
                        fontFamily: 'Rubik, sans-serif',
                        fontWeight: '500'
                      }}
                    >
                      Ready to make you shine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hat Collection with Bold Typography - Mobile Optimized */}
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h3 
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4 lg:mb-6 relative inline-block`}
                style={{
                  fontFamily: 'Bungee, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.02em sm:0.03em',
                  textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.8) sm:4px 4px 8px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3) sm:2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Meet The Hat Collection
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                <Zap 
                  className="absolute -top-4 -right-8 sm:-top-6 sm:-right-12 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-amber-400 animate-bounce-slow" 
                  style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.6)) sm:drop-shadow(0 0 12px rgba(245, 158, 11, 0.6))' }}
                />
              </h3>
              <p 
                className={`text-sm xs:text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto px-2 sm:px-4 lg:px-0`}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '500',
                  letterSpacing: '0.01em'
                }}
              >
                Each hat represents a unique expertise that contributes to your brand's golden transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                { hat: 'Strategist Hat', icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'Master Planners', desc: 'Crafting winning strategies' },
                { hat: 'Creative Hat', icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'Visual Wizards', desc: 'Designing magical experiences' },
                { hat: 'Growth Hat', icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'Scale Specialists', desc: 'Accelerating your success' },
                { hat: 'Analytics Hat', icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'Data Detectives', desc: 'Uncovering golden insights' },
                { hat: 'Developer Hat', icon: <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'Code Architects', desc: 'Building digital excellence' },
                { hat: 'Mobile Hat', icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />, role: 'App Innovators', desc: 'Creating mobile magic' }
              ].map((team, index) => (
                <div
                  key={index}
                  className={`relative p-4 xs:p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm border-2 shadow-xl sm:shadow-2xl group hover:scale-105 sm:hover:scale-110 transition-all duration-500 ${
                    darkMode
                      ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                      : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                  } hover:shadow-2xl hover:shadow-amber-500/30`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black p-3 xs:p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl w-fit mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:animate-bounce shadow-xl sm:shadow-2xl transform group-hover:scale-110 sm:group-hover:scale-125 transition-all duration-500"
                    style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.6) sm:0 0 30px rgba(245, 158, 11, 0.6)' }}
                  >
                    {team.icon}
                  </div>
                  
                  <h4 
                    className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1.5 sm:mb-2 lg:mb-3`}
                    style={{
                      fontFamily: 'Righteous, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.01em sm:0.02em',
                      textShadow: darkMode ? '1px 1px 2px rgba(0,0,0,0.5)' : '1px 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {team.hat}
                  </h4>
                  
                  <p 
                    className="font-bold text-amber-500 mb-1.5 sm:mb-2 text-xs xs:text-sm sm:text-base lg:text-lg"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '700',
                      letterSpacing: '0.03em sm:0.05em'
                    }}
                  >
                    {team.role}
                  </p>
                  
                  <p 
                    className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: '500'
                    }}
                  >
                    {team.desc}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-bounce-slow { 
            animation: bounce-slow 3s ease-in-out infinite; 
          }
          
          @media (min-width: 640px) {
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            
            .animate-bounce-slow { 
              animation: bounce-slow 4s ease-in-out infinite; 
            }
          }
          
          /* Custom breakpoint for very small devices */
          @media (min-width: 360px) {
            .xs\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .xs\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
            .xs\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
            .xs\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
            .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .xs\\:p-4 { padding: 1rem; }
            .xs\\:p-5 { padding: 1.25rem; }
            .xs\\:w-10 { width: 2.5rem; }
            .xs\\:h-10 { height: 2.5rem; }
            .xs\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          
          /* Touch-friendly hover states for mobile */
          @media (hover: none) and (pointer: coarse) {
            .group:active .group-hover\\:animate-bounce {
              animation: bounce-slow 0.5s ease-in-out;
            }
            
            .group:active .group-hover\\:scale-110 {
              transform: scale(1.05);
            }
            
            .group:active .group-hover\\:scale-125 {
              transform: scale(1.1);
            }
            
            .hover\\:scale-105:active {
              transform: scale(1.02);
            }
            
            .hover\\:scale-110:active {
              transform: scale(1.05);
            }
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .animate-bounce-slow,
            .animate-pulse {
              animation: none;
            }
            
            .transition-all {
              transition: none;
            }
          }
          
          /* Improved focus states for accessibility */
          .focus\\:outline-none:focus {
            outline: 2px solid rgba(251, 191, 36, 0.8);
            outline-offset: 2px;
          }
        `}</style>
      </section>
    </>
  );
}

export default AboutSection;