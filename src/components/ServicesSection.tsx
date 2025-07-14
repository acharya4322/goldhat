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
  Zap,
  Sparkles
} from 'lucide-react';

type ServicesSectionProps = {
  darkMode: boolean;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode }) => {
  const serviceCardStyle = (dark: boolean) =>
    `group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-yellow-500/30 hover:border-yellow-400/60 relative overflow-hidden`;

  return (
    <>
      {/* Google Fonts Import - Same as HeroSection */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <section 
        id="services" 
        className="py-16 sm:py-20 relative overflow-hidden pt-24"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1611 50%, #0f0f0f 100%)'
        }}
      >
        {/* Animated Background Grid - Same as Hero */}
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

        {/* Enhanced background accents with golden theme */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-3/4 left-3/4 w-72 h-72 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight">
              <span 
                className="text-white block"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                Our Golden
              </span>
              <span 
                className="text-black block mt-2 px-8 py-4 transform -rotate-2 relative z-10"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '900',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                  boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4), 0 0 60px rgba(255, 215, 0, 0.3)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  display: 'inline-block'
                }}
              >
                SERVICES
                <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                  <Sparkles className="w-6 h-6" />
                </div>
              </span>
            </h2>
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '400',
                letterSpacing: '0.02em'
              }}
            >
              From digital marketing to cutting-edge development, every service is crafted with precision and designed to make your brand 
              <span 
                className="font-semibold ml-2 relative"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '600',
                  color: '#D4AF37',
                  textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                }}
              >
                absolutely irresistible.
              </span>
            </p>
          </div>

          {/* Main Services Grid - Updated with golden theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Search className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Digital Marketing',
                subtitle: 'Strategic Growth Engine',
                description:
                  'We don\'t just run campaigns – we orchestrate digital symphonies that make your audience fall in love with your brand.',
                features: ['SEO Domination', 'SEM Mastery', 'Lead Generation', 'Funnel Optimization', 'Performance Analytics']
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Social Media Management',
                subtitle: 'Community Building Experts',
                description:
                  'Transform your social presence into a magnetic force that attracts, engages, and converts your ideal customers.',
                features: ['Instagram Growth', 'LinkedIn Strategy', 'YouTube Optimization', 'Twitter Engagement', 'Community Management']
              },
              {
                icon: <Crown className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Branding & Strategy',
                subtitle: 'Identity Architects',
                description:
                  'We craft brand identities so compelling that your competitors will wish they thought of it first.',
                features: ['Brand Identity', 'Visual Design', 'Brand Messaging', 'Market Positioning', 'Brand Guidelines']
              },
              {
                icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Web Development',
                subtitle: 'Digital Experience Creators',
                description:
                  'Build stunning, high-performance websites that convert visitors into customers and leave lasting impressions.',
                features: ['Custom Websites', 'E-commerce Platforms', 'Landing Pages', 'CMS Development', 'Performance Optimization']
              },
              {
                icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'App Development',
                subtitle: 'Mobile Innovation Lab',
                description:
                  'Create powerful mobile applications that engage users and drive business growth across all platforms.',
                features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Optimization']
              },
              {
                icon: <Camera className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: 'Content & Influencer Marketing',
                subtitle: 'Viral Content Creators',
                description:
                  'Create content that doesn\'t just get seen – it gets shared, saved, and talked about for weeks.',
                features: ['Viral Content Creation', 'Influencer Partnerships', 'Video Production', 'Podcast Management', 'Content Strategy']
              }
            ].map((service, index) => (
              <div key={index} className={serviceCardStyle(darkMode)}>
                {/* Golden glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-125 transition-transform duration-500" />
                
                {/* Service icon with golden styling */}
                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10"
                     style={{
                       boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255,255,255,0.1)'
                     }}>
                  {service.icon}
                </div>
                
                {/* Service title with hero typography */}
                <h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-1 relative z-10"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {service.title}
                </h3>
                
                {/* Service subtitle with golden theme */}
                <p 
                  className="font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 relative z-10"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    color: '#D4AF37',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {service.subtitle}
                </p>
                
                {/* Service description */}
                <p 
                  className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base relative z-10"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '400',
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
                
                {/* Features list with golden theme */}
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex-shrink-0"
                           style={{
                             boxShadow: '0 0 8px rgba(212, 175, 55, 0.4)'
                           }} />
                      <span 
                        className="text-gray-300 font-medium text-sm sm:text-base"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Enhanced CTA button with golden theme */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-yellow-500/30 relative z-10">
                  <button 
                    className="font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300 text-sm sm:text-base hover:scale-105"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      color: '#D4AF37',
                      textShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#D4AF37';
                    }}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Highlight - Updated with golden theme */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl text-center mb-12 sm:mb-16 relative overflow-hidden bg-black/80 backdrop-blur-sm border border-yellow-500/30"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.1)'
               }}>
            
            {/* Background accent */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255,255,255,0.1)'
                     }}>
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                Cutting-Edge Technology Stack
              </h3>
              
              <p 
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
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
                    className="p-4 sm:p-6 rounded-xl shadow-lg bg-gray-900/60 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/60 hover:scale-105 transition-all duration-300 group"
                    style={{
                      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                         style={{ color: '#D4AF37' }}>
                      {tech.icon}
                    </div>
                    <h4 
                      className="text-base sm:text-lg font-bold text-white mb-2"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {tech.tech}
                    </h4>
                    <p 
                      className="font-semibold text-xs sm:text-sm"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        color: '#D4AF37'
                      }}
                    >
                      {tech.specialty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ads Highlight Section - Updated with golden theme */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden bg-black/80 backdrop-blur-sm border border-yellow-500/30"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.1)'
               }}>
            
            {/* Background accent */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl"
                     style={{
                       boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(255,255,255,0.2)'
                     }}>
                  <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                Paid Advertising That Pays Off
              </h3>
              
              <p 
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.6'
                }}
              >
                Meta, Google, YouTube – we make every dollar work harder than a 
                <span 
                  className="font-semibold ml-2 relative"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    color: '#D4AF37',
                    textShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
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
                    className="p-4 sm:p-6 rounded-xl shadow-lg bg-gray-900/60 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/60 hover:scale-105 transition-all duration-300 group"
                    style={{
                      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                         style={{ color: '#D4AF37' }}>
                      {ad.icon}
                    </div>
                    <h4 
                      className="text-base sm:text-lg font-bold text-white mb-2"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {ad.platform}
                    </h4>
                    <p 
                      className="font-bold text-lg sm:text-xl"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: '700',
                        color: '#D4AF37',
                        textShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
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

        {/* Custom CSS for animations - Same as Hero */}
        <style jsx>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>
    </>
  );
};

export default ServicesSection;