import React from 'react';
import {
  Menu,
  X,
  Crown,
  Zap,
  Sun,
  Moon,
  Sparkles,
  ChevronDown
} from 'lucide-react';

type NavbarProps = {
  darkMode: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  toggleDarkMode: () => void;
  scrolled: boolean;
  scrollToSection: (id: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
  toggleDarkMode,
  scrolled,
  scrollToSection
}) => {
  const navItemClass = `${
    darkMode 
      ? 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10' 
      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-500/5'
  } transition-all duration-300 font-medium px-3 lg:px-4 py-2 rounded-xl relative group`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-yellow-500/30' 
          : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-yellow-500/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Enhanced Logo - Better mobile sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-1.5 sm:p-2 rounded-full shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-bounce" />
            </div>
            <div className="relative">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                GOLDHAT
              </span>
              <div className="text-xs text-yellow-500 font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity hidden sm:block">
                Think Gold. Act Bold.
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {['home', 'about', 'services', 'portfolio', 'testimonials', 'blog'].map((section, index) => (
              <div key={section} className="relative">
                <button
                  onClick={() => scrollToSection(section)}
                  className={navItemClass}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-3/4 transition-all duration-300"></div>
                </button>
              </div>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className={`relative p-2.5 lg:p-3 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 shadow-lg shadow-yellow-500/20' 
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600 shadow-lg'
              } hover:scale-110 transition-all duration-300 group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {darkMode ? (
                  <Sun className="w-4 h-4 lg:w-5 lg:h-5 rotate-0 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-4 h-4 lg:w-5 lg:h-5 rotate-0 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group overflow-hidden text-sm lg:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative z-10 flex items-center space-x-1.5 lg:space-x-2">
                <span>Let's Talk</span>
                <Zap className="w-3 h-3 lg:w-4 lg:h-4 group-hover:animate-bounce" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle - Enhanced touch targets */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 sm:p-2.5 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400' 
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600'
              } transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation`}
            >
              {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation ${
                darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 rotate-0 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation - Better spacing and touch targets */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${
            darkMode 
              ? 'bg-gradient-to-br from-gray-900/98 to-gray-800/98 border-gray-700/50' 
              : 'bg-gradient-to-br from-white/98 to-gray-50/98 border-gray-200/50'
          } backdrop-blur-xl border-t rounded-b-2xl shadow-2xl mx-2 sm:mx-4`}>
            <div className="p-4 sm:p-6 space-y-1">
              {['home', 'about', 'services', 'portfolio', 'testimonials', 'blog'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-xl ${navItemClass} transform hover:translate-x-2 active:scale-95 touch-manipulation`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-medium">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-lg active:scale-95 touch-manipulation"
              >
                <span>Let's Talk</span>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;