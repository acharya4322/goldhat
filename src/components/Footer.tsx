// src/components/Footer.tsx
import React from 'react';
import {
  Crown,
  Instagram,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

type FooterProps = {
  darkMode: boolean;
};

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              <div>
                <span className="text-xl sm:text-2xl font-bold font-serif bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  GOLDHAT
                </span>
                <div className="text-xs text-yellow-500 font-medium">Think Gold. Act Bold.</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming brands into golden legends through bold creativity, strategic brilliance, and innovative technology solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-yellow-500">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              {['Digital Marketing', 'Social Media Management', 'Branding & Strategy', 'Web Development', 'App Development', 'Content Marketing', 'Paid Advertising'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-500 transition-colors text-sm sm:text-base">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-yellow-500">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-500 transition-colors text-sm sm:text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-yellow-500">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              {['Blog', 'Gold Drops', 'Free Tools', 'Marketing Guide', 'Development Guide', 'Industry Reports'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-500 transition-colors text-sm sm:text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} GOLDHAT Agency. All rights reserved. |{' '}
            <a href="#" className="text-yellow-500 hover:text-yellow-400">Privacy Policy</a> |{' '}
            <a href="#" className="text-yellow-500 hover:text-yellow-400">Terms of Service</a>
          </p>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">
            Made with ✨ and a lot of ☕ by the GOLDHAT team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;