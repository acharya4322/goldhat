// src/App.tsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-900 text-white">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        scrollToSection={scrollToSection}
      />
      <HeroSection darkMode={true} scrollToSection={scrollToSection} />
      <AboutSection darkMode={true} />
      <ServicesSection darkMode={true} />
      <PortfolioSection darkMode={true} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ContactSection darkMode={true} />
      <Footer darkMode={true} />
    </div>
  );
}

export default App
