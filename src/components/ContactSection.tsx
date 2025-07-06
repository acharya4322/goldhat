// src/components/ContactSection.tsx
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  Zap,
  Crown,
  Sparkles,
  Send
} from 'lucide-react';

type ContactSectionProps = {
  darkMode: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 text-white relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
      }`}
    >
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6">
            Ready to Go{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Golden?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's turn your brand into the golden legend it was meant to be. Every great transformation starts with a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info - Mobile responsive */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center space-x-3">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              <span>Let's Talk Strategy</span>
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@goldhat.agency' },
                { icon: Phone, label: 'Phone', value: '+1 (555) GOLD-HAT' },
                { icon: MapPin, label: 'Office', value: '123 Golden Street, Creative District, CD 12345' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">{item.label}</div>
                    <div className="text-gray-300 text-sm sm:text-base break-all">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center space-x-2">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span>Follow The Gold</span>
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {[Instagram, Linkedin, Twitter, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-yellow-500/30">
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <span>Book a Free Strategy Call</span>
              </h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Get a personalized 30-minute consultation where we'll analyze your current marketing and show you exactly how to achieve golden results.
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Schedule Now
              </button>
            </div>
          </div>

          {/* Right Column - Contact Form - Mobile responsive */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {['First Name', 'Last Name'].map((label, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-bold mb-2 text-yellow-500">{label}</label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                      placeholder={label === 'First Name' ? 'John' : 'Doe'}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Email</label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Company</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your Amazing Company"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">What's Your Goal?</label>
                <select className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white transition-all duration-300 text-sm sm:text-base">
                  <option className="bg-gray-800">Select your primary goal</option>
                  <option className="bg-gray-800">Increase Brand Awareness</option>
                  <option className="bg-gray-800">Generate More Leads</option>
                  <option className="bg-gray-800">Grow Social Media</option>
                  <option className="bg-gray-800">Boost Sales</option>
                  <option className="bg-gray-800">Web Development</option>
                  <option className="bg-gray-800">App Development</option>
                  <option className="bg-gray-800">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-yellow-500">Tell Us About Your Vision</label>
                <textarea
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 resize-none transition-all duration-300 text-sm sm:text-base"
                  placeholder="Describe your dream outcome. What would success look like for your brand?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 group"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                <span>Start My Golden Journey</span>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-spin" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;