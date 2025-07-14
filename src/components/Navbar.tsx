import React from 'react';
import {
  Menu,
  X,
  Crown,
  Zap,
  Sparkles,
  ChevronDown
} from 'lucide-react';

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrolled: boolean;
  scrollToSection: (id: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  scrollToSection
}) => {
  const navItemClass = `text-gray-300 hover:text-white transition-all duration-300 font-medium px-3 lg:px-4 py-2 rounded-xl relative group`;

  const tickerMessages = [
    "BRAND TRANSFORMATION",
    "DIGITAL MARKETING",
    "WEB DEVELOPMENT",
    "MOBILE APPS",
    "META ADS",
    "GOOGLE ADS",
    "SEO OPTIMIZATION",
    "LEAD GENERATION",
    "SOCIAL MEDIA",
    "GRAPHIC DESIGN",
    "APP DEVELOPMENT",
    "GROWTH HACKING",
    "CONTENT STRATEGY",
    "CONVERSION OPTIMIZATION",
    "BRAND IDENTITY",
    "PERFORMANCE MARKETING",
    "THINK GOLD. ACT BOLD.",
    "SCALING SUCCESS"
  ];
  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      {/* News Ticker */}
      <div className="fixed top-0 w-full z-[60] overflow-hidden"
           style={{
             background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
             height: '32px'
           }}>
        <div className="flex items-center h-full">
          {/* Moving Text Container */}
          <div className="flex-1 overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set of messages */}
              {tickerMessages.map((message, index) => (
                <span
                  key={`first-${index}`}
                  className="inline-block px-8 py-1 text-black font-medium text-sm"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {message}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {tickerMessages.map((message, index) => (
                <span
                  key={`second-${index}`}
                  className="inline-block px-8 py-1 text-black font-medium text-sm"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '500',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {message}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl shadow-2xl border-b border-yellow-500/20' 
          : 'bg-transparent'
      }`}
      style={{
        top: '32px', // Account for ticker height
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 22, 17, 0.95) 50%, rgba(15, 15, 15, 0.95) 100%)'
          : 'transparent'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Enhanced Logo - Hero Section Style */}
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></div>
                <div className="relative p-1.5 sm:p-2 rounded-full shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110"
                     style={{
                       background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                       boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                     }}>
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-bounce" />
              </div>
              <div className="relative">
                <span 
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  GOLDHAT
                </span>
                <div 
                  className="text-xs font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity hidden sm:block"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    color: '#B8860B'
                  }}
                >
                  Think Gold. Act Bold.
                </div>
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #FFD700)'
                  }}
                ></div>
              </div>
            </div>

            {/* Desktop Navigation - Hero Section Style */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((section, index) => (
                <div key={section} className="relative">
                  <button
                    onClick={() => scrollToSection(section)}
                    className={navItemClass}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      letterSpacing: '0.02em'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4AF37';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#D1D5DB';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37, #FFD700)'
                      }}
                    ></div>
                  </button>
                </div>
              ))}
              
              {/* CTA Button - Hero Section Style */}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative text-black px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 group overflow-hidden text-sm lg:text-base"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative z-10 flex items-center space-x-1.5 lg:space-x-2">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Let's Talk</span>
                  <Zap className="w-3 h-3 lg:w-4 lg:h-4 group-hover:animate-bounce" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle - Hero Section Style */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation text-gray-300 hover:text-white"
                style={{
                  background: 'linear-gradient(135deg, rgba(26, 22, 17, 0.8) 0%, rgba(15, 15, 15, 0.8) 100%)',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 rotate-0 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation - Hero Section Style */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t rounded-b-2xl shadow-2xl mx-2 sm:mx-4 backdrop-blur-xl"
                 style={{
                   background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 22, 17, 0.98) 50%, rgba(15, 15, 15, 0.98) 100%)',
                   borderColor: 'rgba(212, 175, 55, 0.3)',
                   boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)'
                 }}>
              <div className="p-4 sm:p-6 space-y-1">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((section, index) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 font-medium transform hover:translate-x-2 active:scale-95 touch-manipulation group"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4AF37';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.4)';
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#D1D5DB';
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-medium">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                      <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: '#B8860B' }} />
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 text-black px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-lg active:scale-95 touch-manipulation group overflow-hidden"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Let's Talk</span>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Custom CSS for ticker animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Navbar;