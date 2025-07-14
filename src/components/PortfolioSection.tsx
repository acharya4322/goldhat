// src/components/PortfolioSection.tsx
import React from 'react';
import { TrendingUp, ExternalLink, Sparkles, Zap } from 'lucide-react';
import portfolioItems from '../data/portfolioData';

type PortfolioSectionProps = {
  darkMode: boolean;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  darkMode,
  activeFilter,
  setActiveFilter,
}) => {
  const filteredPortfolio =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        id="portfolio" 
        className="py-16 sm:py-20 relative overflow-hidden pt-24"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1611 50%, #0f0f0f 100%)'
        }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'gridMove 25s linear infinite'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: 'radial-gradient(circle, #D4AF37, transparent)',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 opacity-20"
               style={{
                 borderColor: '#D4AF37',
                 background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.05), transparent)',
                 animation: 'spin 30s linear infinite',
                 boxShadow: '0 0 80px rgba(212, 175, 55, 0.15)'
               }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full border-2 opacity-15"
               style={{
                 borderColor: '#FFD700',
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08), transparent)',
                 animation: 'pulse 4s ease-in-out infinite',
                 boxShadow: '0 0 60px rgba(255, 215, 0, 0.1)'
               }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            {/* Enhanced Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight">
              <span 
                className="text-white tracking-tight"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                Golden{' '}
              </span>
              <div className="relative inline-block transform -rotate-1 my-2">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur-xl opacity-30 animate-pulse" />
                <span 
                  className="text-black font-black tracking-tight px-6 py-3 relative z-10"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 60px rgba(255, 215, 0, 0.3)',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Portfolio
                </span>
                <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </h2>
            
            {/* Enhanced Description */}
            <p
              className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '400',
                color: '#B8B8B8',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Every project tells a story of transformation. Here's how we've turned ordinary brands
              into{' '}
              <span 
                className="font-semibold relative"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600',
                  color: '#D4AF37',
                  textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                }}
              >
                golden legends
                <div className="absolute -top-1 -right-1 text-yellow-400 animate-pulse">
                  <Zap className="w-4 h-4" />
                </div>
              </span>
              {' '}through marketing, web development, and mobile apps.
            </p>

            {/* Enhanced Filters */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              {['All', 'Branding', 'Social Media', 'Paid Ads', 'Web Development', 'App Development', 'Influencer Marketing'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`group relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap overflow-hidden ${
                    activeFilter === filter
                      ? 'text-black transform scale-105'
                      : 'text-white hover:text-black'
                  }`}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    letterSpacing: '0.02em',
                    background: activeFilter === filter 
                      ? 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: activeFilter === filter 
                      ? '2px solid #D4AF37'
                      : '2px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: activeFilter === filter 
                      ? '0 0 30px rgba(212, 175, 55, 0.4)'
                      : '0 0 10px rgba(212, 175, 55, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                  <span className="relative z-10">{filter}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(212, 175, 55, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                }}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Enhanced overlay content */}
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-white">
                    <div 
                      className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                        color: '#000',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                      }}
                    >
                      <span className="relative z-10">{item.category}</span>
                    </div>
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-1"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '700',
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm sm:text-base"
                      style={{
                        color: '#D4AF37',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '500',
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {item.industry}
                    </p>
                  </div>
                  
                  {/* Enhanced external link icon */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="relative p-2 rounded-full bg-black/30 backdrop-blur-sm border border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ExternalLink 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" 
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))'
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced card content */}
                <div className="p-4 sm:p-6">
                  <p 
                    className="mb-4 text-sm sm:text-base leading-relaxed"
                    style={{
                      color: '#B8B8B8',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '400'
                    }}
                  >
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded-full bg-green-500/20">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      </div>
                      <span 
                        className="font-bold text-sm sm:text-base text-green-400"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          fontWeight: '700',
                          textShadow: '0 0 10px rgba(34, 197, 94, 0.3)'
                        }}
                      >
                        {item.results}
                      </span>
                    </div>
                    
                    <button 
                      className="group relative font-semibold transition-all duration-300 text-sm sm:text-base overflow-hidden px-3 py-1 rounded-full"
                      style={{
                        color: '#D4AF37',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '600',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        background: 'rgba(212, 175, 55, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #FFD700)';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.transform = 'translateX(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                        e.currentTarget.style.color = '#D4AF37';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span className="relative z-10">View Case Study →</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Custom CSS for animations */}
        <style jsx>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(40px, 40px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.05); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    </>
  );
};

export default PortfolioSection;