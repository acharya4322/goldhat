import React, { useState, useEffect, useRef } from 'react';
import { 
  Crown, 
  Sparkles, 
  Target, 
  PenTool, 
  TrendingUp, 
  BarChart3, 
  Code,
  Smartphone,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';

type AboutSectionProps = {
  darkMode: boolean;
};

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [particles, setParticles] = useState([]);
  const aboutRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Strategy', icon: <Target className="w-6 h-6" /> },
    { title: 'Design', icon: <PenTool className="w-6 h-6" /> },
    { title: 'Growth', icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'Analytics', icon: <BarChart3 className="w-6 h-6" /> },
    { title: 'Development', icon: <Code className="w-6 h-6" /> },
    { title: 'Mobile Apps', icon: <Smartphone className="w-6 h-6" /> }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

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

    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 8 + 8
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-sliding effect
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible, services.length]);

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        ref={aboutRef}
        id="about" 
        className="relative py-20 overflow-hidden"
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
                linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'gridMove 25s linear infinite'
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full opacity-40"
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

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-48 h-48 rounded-full border-2 opacity-30"
               style={{
                 borderColor: '#D4AF37',
                 background: 'linear-gradient(45deg, transparent, rgba(212, 175, 55, 0.05), transparent)',
                 animation: 'spin 25s linear infinite',
                 boxShadow: '0 0 60px rgba(212, 175, 55, 0.1)'
               }}
          />
          <div className="absolute bottom-1/4 right-1/6 w-64 h-64 rounded-full border-2 opacity-20"
               style={{
                 borderColor: '#FFD700',
                 background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05), transparent)',
                 animation: 'pulse 4s ease-in-out infinite',
                 boxShadow: '0 0 80px rgba(255, 215, 0, 0.1)'
               }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* Header */}
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 
              className="text-4xl lg:text-6xl font-bold mb-4 text-white"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
              }}
            >
              About{' '}
              <span 
                className="relative inline-block"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                }}
              >
                GOLDHAT
                <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                  <Sparkles className="w-5 h-5" />
                </div>
              </span>
            </h2>
            
            <p 
              className="text-base text-gray-300 max-w-2xl mx-auto mb-6"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '400',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Digital alchemists transforming brands into{' '}
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
                  <Zap className="w-3 h-3" />
                </div>
              </span>
              {' '}
              <button
                onClick={() => setShowMore(!showMore)}
                className="group inline-flex items-center space-x-1 px-4 py-2 rounded-full border-2 transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.8rem',
                  letterSpacing: '0.02em',
                  borderColor: '#D4AF37',
                  color: '#D4AF37',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #FFD700)';
                  e.currentTarget.style.color = '#0a0a0a';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                }}
              >
                <span>{showMore ? 'Show Less' : 'Learn More'}</span>
                {showMore ? <ChevronUp className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" /> : <ChevronDown className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />}
              </button>
            </p>
          </div>

          {/* Main Content */}
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            
            {/* Expandable Content */}
            <div className={`transition-all duration-500 overflow-hidden ${
              showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-4 pt-4">
                <p 
                  className="text-lg text-gray-300 mb-6"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  We're a team of digital rebels who turn ordinary brands into extraordinary success stories.
                </p>
                <p 
                  className="text-gray-400"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Founded on the belief that every brand deserves to shine, we specialize in strategic marketing, 
                  creative design, and cutting-edge development solutions.
                </p>
                <p 
                  className="text-gray-400"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  From web applications to mobile apps, from marketing campaigns to brand transformations - 
                  we make brands unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.4s' }}>
            
            <h3 
              className="text-2xl lg:text-3xl font-bold mb-8 text-white"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                letterSpacing: '-0.01em',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              What We Do
            </h3>
            
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                    e.currentTarget.style.borderColor = '#D4AF37';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                  
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                       style={{
                         background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                         boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                       }}>
                    <div style={{ color: '#0a0a0a' }}>
                      {service.icon}
                    </div>
                  </div>
                  <h4 
                    className="font-bold text-white group-hover:text-yellow-300 transition-colors duration-300"
                    style={{ 
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '600',
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 p-6"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                             style={{
                               background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                               boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                             }}>
                          <div style={{ color: '#0a0a0a' }}>
                            {service.icon}
                          </div>
                        </div>
                        <h4 
                          className="font-bold text-lg text-white"
                          style={{ 
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: '600',
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                          }}
                        >
                          {service.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white"
                  style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.4)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white"
                  style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.4)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'scale-125'
                        : 'hover:scale-110'
                    }`}
                    style={{
                      background: index === currentSlide 
                        ? 'linear-gradient(135deg, #D4AF37, #FFD700)'
                        : 'rgba(212, 175, 55, 0.3)',
                      boxShadow: index === currentSlide 
                        ? '0 0 15px rgba(212, 175, 55, 0.5)'
                        : '0 0 5px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className={`flex justify-center space-x-12 mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="text-center group cursor-pointer">
              <div 
                className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  color: '#D4AF37',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                2025
              </div>
              <div 
                className="text-sm font-semibold text-gray-400 transition-all duration-300 group-hover:text-yellow-400"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                Founded
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div 
                className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: '900',
                  color: '#D4AF37',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                3
              </div>
              <div 
                className="text-sm font-semibold text-gray-400 transition-all duration-300 group-hover:text-yellow-400"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                Team Members
              </div>
            </div>
          </div>

        </div>

        {/* Enhanced Custom CSS for animations */}
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
          
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(40px, 40px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.5; }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutSection;