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
  Code,
  Smartphone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

type AboutSectionProps = {
  darkMode: boolean;
};

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee&family=Righteous&family=Fredoka+One:wght@400&family=Rubik:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        ref={aboutRef}
        id="about" 
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black bg-opacity-85' 
            : 'bg-white bg-opacity-90'
        }`} />

        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-full h-full opacity-20"
            style={{
              background: `radial-gradient(circle at 30% 70%, 
                rgba(251, 191, 36, 0.4) 0%, 
                rgba(245, 158, 11, 0.3) 40%, 
                transparent 70%)`,
              filter: 'blur(100px)',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block mb-6">
              <h2 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  textShadow: darkMode ? '4px 4px 8px rgba(0,0,0,0.8)' : '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>About </span>
                <span className="relative">
                  <span 
                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'Black Ops One, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.08em',
                      textShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
                      filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.4))'
                    }}
                  >
                    GOLDHAT
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-yellow-500/30 blur-2xl -z-10 animate-pulse" />
                </span>
              </h2>
              
              <div className="absolute -top-6 -right-6 animate-bounce-slow">
                <Crown 
                  className="w-12 h-12 lg:w-16 lg:h-16 text-amber-400" 
                  style={{ filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))' }}
                />
              </div>
            </div>
            
            <p 
              className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em'
              }}
            >
              We're{' '}
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent font-bold"
                  style={{
                    textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
                  }}
                >
                  digital alchemists
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              </span>
              {' '}who transform ordinary brands into golden legends.
            </p>
          </div>

          {/* Main Content */}
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            
            {/* Story Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h3 
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  style={{
                    fontFamily: 'Bungee, sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.03em'
                  }}
                >
                  Our Story
                </h3>
              </div>
              
              <p 
                className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '400'
                }}
              >
                Founded by digital rebels who refused to accept mediocrity, GOLDHAT transforms brands into 
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent font-bold"> golden legends</span>.
              </p>
              
              {/* Read More Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-4 pt-4">
                  <p 
                    className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: '400'
                    }}
                  >
                    Born from the belief that every brand deserves to shine like gold, we saw too many brilliant 
                    brands hiding in the shadows, waiting for their moment to sparkle.
                  </p>
                  <p 
                    className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: '400'
                    }}
                  >
                    Today, we're the secret weapon behind some of the most talked-about brands in the digital space.
                    From strategic marketing campaigns to cutting-edge web and mobile applications, our mission is 
                    to make every brand we touch absolutely unforgettable.
                  </p>
                </div>
              </div>
              
              {/* Read More Button */}
              <button
                onClick={toggleReadMore}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                  darkMode
                    ? 'border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black'
                    : 'border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'
                } hover:scale-105 transform`}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600'
                }}
              >
                <span>{showMore ? 'Read Less' : 'Read More'}</span>
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className={`text-center p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                    : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                }`}>
                  <div 
                    className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Fredoka One, sans-serif' }}
                  >
                    2025
                  </div>
                  <div 
                    className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}
                  >
                    FOUNDED
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                    : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                }`}>
                  <div 
                    className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Fredoka One, sans-serif' }}
                  >
                    3
                  </div>
                  <div 
                    className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}
                  >
                    GOLD HATTERS
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative">
              <div className={`relative p-8 rounded-3xl backdrop-blur-sm border-2 shadow-2xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/70 to-black/90 border-amber-500/40'
                  : 'bg-gradient-to-br from-white/90 via-gray-50/70 to-amber-50/90 border-amber-400/40'
              }`}>
                
                <div className="absolute -top-4 -right-4 animate-bounce-slow">
                  <Star 
                    className="w-8 h-8 text-amber-400" 
                    style={{ filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))' }}
                  />
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h4 
                    className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    style={{
                      fontFamily: 'Righteous, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.02em'
                    }}
                  >
                    Our Mission
                  </h4>
                </div>
                
                <p 
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg mb-6`}
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '500'
                  }}
                >
                  To transform every brand into a golden legend that captivates, converts, and conquers their market
                  through bold creativity and innovative technology.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full border-3 border-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
                        style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}
                      >
                        <Crown className="w-6 h-6 text-black" />
                      </div>
                    ))}
                  </div>
                  <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div 
                      className="font-bold text-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '800' }}
                    >
                      The Gold Hat Team
                    </div>
                    <div 
                      className="text-sm opacity-80"
                      style={{ fontFamily: 'Rubik, sans-serif', fontWeight: '500' }}
                    >
                      Ready to make you shine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <h3 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 relative inline-block`}
                style={{
                  fontFamily: 'Bungee, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.03em'
                }}
              >
                Our Expertise
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              </h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Strategy', icon: <Target className="w-8 h-8" />, desc: 'Winning game plans' },
                { title: 'Creative', icon: <PenTool className="w-8 h-8" />, desc: 'Visual excellence' },
                { title: 'Growth', icon: <TrendingUp className="w-8 h-8" />, desc: 'Scale & success' },
                { title: 'Analytics', icon: <BarChart3 className="w-8 h-8" />, desc: 'Data insights' },
                { title: 'Development', icon: <Code className="w-8 h-8" />, desc: 'Digital solutions' },
                { title: 'Mobile', icon: <Smartphone className="w-8 h-8" />, desc: 'App innovation' }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm border-2 shadow-lg group hover:scale-105 transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800/60 border-amber-500/30 hover:bg-gray-800/80'
                      : 'bg-white/60 border-amber-400/30 hover:bg-white/80'
                  }`}
                >
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}
                  >
                    {service.icon}
                  </div>
                  
                  <h4 
                    className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 text-center`}
                    style={{ fontFamily: 'Righteous, sans-serif' }}
                  >
                    {service.title}
                  </h4>
                  
                  <p 
                    className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          .animate-bounce-slow { 
            animation: bounce-slow 4s ease-in-out infinite; 
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutSection;