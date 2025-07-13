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
  ChevronRight
} from 'lucide-react';

type AboutSectionProps = {
  darkMode: boolean;
};

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee&family=Righteous&family=Rubik:wght@300;400;500;600;700;800&family=Montserrat:wght@400;600;700;800&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        ref={aboutRef}
        id="about" 
        className={`relative py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Header */}
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 
              className={`text-4xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              About{' '}
              <span 
                className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
                style={{ fontFamily: 'Black Ops One, sans-serif' }}
              >
                GOLDHAT
              </span>
            </h2>
            
            <p 
              className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-6`}
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Digital alchemists transforming brands into{' '}
              <span className="text-amber-500 font-semibold">golden legends</span>
              {' '}
              <button
                onClick={() => setShowMore(!showMore)}
                className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full border transition-all duration-300 ${
                  darkMode
                    ? 'border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black'
                    : 'border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
              >
                <span>{showMore ? 'Show Less' : 'Learn More'}</span>
                {showMore ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
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
                  className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  We're a team of digital rebels who turn ordinary brands into extraordinary success stories.
                </p>
                <p 
                  className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  Founded on the belief that every brand deserves to shine, we specialize in strategic marketing, 
                  creative design, and cutting-edge development solutions.
                </p>
                <p 
                  className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
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
              className={`text-2xl lg:text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Bungee, sans-serif' }}
            >
              What We Do
            </h3>
            
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h4 
                    className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'Righteous, sans-serif' }}
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
                        className={`w-full flex-shrink-0 p-6 ${
                          darkMode
                            ? 'bg-gray-800'
                            : 'bg-white'
                        } shadow-lg`}
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          {service.icon}
                        </div>
                        <h4 
                          className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}
                          style={{ fontFamily: 'Righteous, sans-serif' }}
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
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                  } shadow-lg`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                  } shadow-lg`}
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
                        ? 'bg-amber-500 scale-125'
                        : darkMode
                          ? 'bg-gray-600 hover:bg-gray-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Simple Stats */}
          <div className={`flex justify-center space-x-12 mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="text-center">
              <div 
                className="text-3xl font-bold text-amber-500 mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                2025
              </div>
              <div 
                className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                Founded
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold text-amber-500 mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                3
              </div>
              <div 
                className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                Team Members
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;