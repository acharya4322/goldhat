import React, { useState, useEffect } from 'react';
import { Crown, Sparkles } from 'lucide-react';

type SplashScreenProps = {
  onComplete: () => void;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500);
    const timer3 = setTimeout(() => setAnimationPhase(3), 2500);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-60"
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

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
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
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Logo Animation */}
          <div className={`mb-8 transition-all duration-1000 ${
            animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full shadow-lg">
                  <Crown className="w-12 h-12 text-black" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
            
            <h1 
              className="text-6xl md:text-8xl font-black mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #FFA500 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
                filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
              }}
            >
              GOLDHAT
            </h1>
          </div>

          {/* Tagline Animation */}
          <div className={`transition-all duration-1000 delay-500 ${
            animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p 
              className="text-2xl md:text-3xl text-white mb-8"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              Think Gold. Act Bold.
            </p>
          </div>

          {/* Loading Animation */}
          <div className={`transition-all duration-1000 delay-1000 ${
            animationPhase >= 3 ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p 
              className="text-yellow-400 text-lg"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '500',
                letterSpacing: '0.1em'
              }}
            >
              Loading Excellence...
            </p>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
        `}</style>
      </div>
    </>
  );
};

export default SplashScreen;