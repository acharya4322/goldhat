// src/components/ServicesSection.tsx
import React from 'react';
import {
  Search,
  Users,
  Crown,
  Camera,
  ChevronRight,
  Megaphone,
  Facebook,
  Play,
  Code,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

type ServicesSectionProps = {
  darkMode: boolean;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode }) => {
  const serviceCardStyle = (dark: boolean) =>
    `group p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${dark ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} hover:shadow-2xl transition-all duration-500 hover:scale-105 border ${
      dark ? 'border-gray-700/50 hover:border-yellow-500/50' : 'border-gray-200/50 hover:border-yellow-500/50'
    } relative overflow-hidden hover:shadow-yellow-500/20`;

  return (
    <>
      {/* Google Fonts Import - Same as HeroSection */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Bungee&family=Righteous&family=Fredoka+One:wght@400&family=Rubik:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        id="services" 
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for readability */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black bg-opacity-85' 
            : 'bg-white bg-opacity-90'
        }`} />

        {/* Enhanced background accents */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight">
              <span 
                className={`${darkMode ? 'text-white' : 'text-gray-900'} block`}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  textShadow: darkMode ? '3px 3px 6px rgba(0,0,0,0.7)' : '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Our Golden
              </span>
              <span 
                className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent block mt-2"
                style={{ 
                  fontFamily: 'Black Ops One, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.08em',
                  textShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
                  filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.2))'
                }}
              >
                SERVICES
              </span>
            </h2>
            <p 
              className={`text-lg sm:text-xl lg:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.02em'
              }}
            >
              From digital marketing to cutting-edge development, every service is crafted with precision and designed to make your brand 
              <span 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent ml-2"
                style={{ 
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '700'
                }}
              >
                absolutely irresistible.
              </span>
            </p>
          </div>

          {/* Main Services Grid - Enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Search className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Digital Marketing',
                subtitle: 'Strategic Growth Engine',
                description:
                  'We don\'t just run campaigns – we orchestrate digital symphonies that make your audience fall in love with your brand.',
                features: ['SEO Domination', 'SEM Mastery', 'Lead Generation', 'Funnel Optimization', 'Performance Analytics'],
                color: 'from-blue-500 to-purple-600'
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Social Media Management',
                subtitle: 'Community Building Experts',
                description:
                  'Transform your social presence into a magnetic force that attracts, engages, and converts your ideal customers.',
                features: ['Instagram Growth', 'LinkedIn Strategy', 'YouTube Optimization', 'Twitter Engagement', 'Community Management'],
                color: 'from-pink-500 to-red-600'
              },
              {
                icon: <Crown className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Branding & Strategy',
                subtitle: 'Identity Architects',
                description:
                  'We craft brand identities so compelling that your competitors will wish they thought of it first.',
                features: ['Brand Identity', 'Visual Design', 'Brand Messaging', 'Market Positioning', 'Brand Guidelines'],
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Web Development',
                subtitle: 'Digital Experience Creators',
                description:
                  'Build stunning, high-performance websites that convert visitors into customers and leave lasting impressions.',
                features: ['Custom Websites', 'E-commerce Platforms', 'Landing Pages', 'CMS Development', 'Performance Optimization'],
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'App Development',
                subtitle: 'Mobile Innovation Lab',
                description:
                  'Create powerful mobile applications that engage users and drive business growth across all platforms.',
                features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Optimization'],
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: <Camera className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Content & Influencer Marketing',
                subtitle: 'Viral Content Creators',
                description:
                  'Create content that doesn\'t just get seen – it gets shared, saved, and talked about for weeks.',
                features: ['Viral Content Creation', 'Influencer Partnerships', 'Video Production', 'Podcast Management', 'Content Strategy'],
                color: 'from-green-500 to-teal-600'
              }
            ].map((service, index) => (
              <div key={index} className={serviceCardStyle(darkMode)}>
                {/* Animated background accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-125 transition-transform duration-500`}></div>
                
                {/* Service icon with enhanced styling */}
                <div className={`bg-gradient-to-r ${service.color} text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                     style={{
                       boxShadow: '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)'
                     }}>
                  {service.icon}
                </div>
                
                {/* Service title with enhanced typography */}
                <h3 
                  className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '800',
                    letterSpacing: '0.02em',
                    textShadow: darkMode ? '2px 2px 4px rgba(0,0,0,0.5)' : '1px 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  {service.title}
                </h3>
                
                {/* Service subtitle with modern styling */}
                <p 
                  className="text-yellow-500 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
                  }}
                >
                  {service.subtitle}
                </p>
                
                {/* Service description */}
                <p 
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base`}
                  style={{
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '400',
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
                
                {/* Features list with enhanced styling */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex-shrink-0 shadow-lg"
                           style={{
                             boxShadow: '0 0 8px rgba(245, 158, 11, 0.4)'
                           }}></div>
                      <span 
                        className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-sm sm:text-base`}
                        style={{
                          fontFamily: 'Rubik, sans-serif',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Enhanced CTA button */}
                <div className={`mt-4 sm:mt-6 pt-4 sm:pt-6 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <button 
                    className="text-yellow-500 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 text-sm sm:text-base hover:text-yellow-400"
                    style={{
                      fontFamily: 'Rubik, sans-serif',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                      textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Highlight - Enhanced styling */}
          <div className={`p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl text-center mb-12 sm:mb-16 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800/90 to-gray-700/90 border-yellow-500/30' : 'bg-gradient-to-br from-blue-50/90 to-indigo-100/90 border-blue-200/50'} border backdrop-blur-sm`}
               style={{
                 boxShadow: darkMode 
                   ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.1)' 
                   : '0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)'
               }}>
            
            {/* Background accent */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255,255,255,0.1)'
                     }}>
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>
              
              <h3 
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.02em',
                  textShadow: darkMode ? '3px 3px 6px rgba(0,0,0,0.7)' : '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Cutting-Edge Technology Stack
              </h3>
              
              <p 
                className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0`}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}
              >
                We use the latest technologies and frameworks to build scalable, secure, and lightning-fast digital solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { tech: 'React & Next.js', specialty: 'Frontend Excellence', icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { tech: 'Node.js & Python', specialty: 'Backend Power', icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { tech: 'React Native & Flutter', specialty: 'Mobile Apps', icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { tech: 'AWS & Vercel', specialty: 'Cloud Infrastructure', icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> }
                ].map((tech, index) => (
                  <div 
                    key={index} 
                    className={`p-4 sm:p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/50' : 'bg-white/80 backdrop-blur-sm border border-white/50'} hover:scale-105 transition-all duration-300 group`}
                    style={{
                      boxShadow: darkMode 
                        ? '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)' 
                        : '0 10px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(59, 130, 246, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 
                      className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {tech.tech}
                    </h4>
                    <p 
                      className="text-blue-500 font-semibold text-xs sm:text-sm"
                      style={{
                        fontFamily: 'Rubik, sans-serif',
                        fontWeight: '600',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tech.specialty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ads Highlight Section - Enhanced styling */}
          <div className={`p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800/90 to-gray-700/90 border-yellow-500/30' : 'bg-gradient-to-br from-yellow-50/90 to-yellow-100/90 border-yellow-200/50'} border backdrop-blur-sm`}
               style={{
                 boxShadow: '0 25px 50px -12px rgba(245, 158, 11, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.1)'
               }}>
            
            {/* Background accent */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(245, 158, 11, 0.4), 0 0 0 1px rgba(255,255,255,0.2)'
                     }}>
                  <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>
              
              <h3 
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '0.02em',
                  textShadow: darkMode ? '3px 3px 6px rgba(0,0,0,0.7)' : '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Paid Advertising That Pays Off
              </h3>
              
              <p 
                className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0`}
                style={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}
              >
                Meta, Google, YouTube – we make every dollar work harder than a 
                <span 
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent ml-1"
                  style={{ 
                    fontFamily: 'Rubik, sans-serif',
                    fontWeight: '700'
                  }}
                >
                  gold miner in the Klondike.
                </span>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { platform: 'Meta Ads', roas: '500% ROAS', icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { platform: 'Google Ads', roas: '400% ROAS', icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { platform: 'YouTube Ads', roas: '350% ROAS', icon: <Play className="w-5 h-5 sm:w-6 sm:h-6" /> }
                ].map((ad, index) => (
                  <div 
                    key={index} 
                    className={`p-4 sm:p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-700/80 backdrop-blur-sm border border-gray-600/50' : 'bg-white/80 backdrop-blur-sm border border-white/50'} hover:scale-105 transition-all duration-300 group`}
                    style={{
                      boxShadow: darkMode 
                        ? '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)' 
                        : '0 10px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(245, 158, 11, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                      {ad.icon}
                    </div>
                    <h4 
                      className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {ad.platform}
                    </h4>
                    <p 
                      className="text-yellow-500 font-bold text-lg sm:text-xl"
                      style={{
                        fontFamily: 'Fredoka One, sans-serif',
                        fontWeight: '400',
                        textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
                      }}
                    >
                      {ad.roas}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;