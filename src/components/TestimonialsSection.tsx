// src/components/TestimonialsSection.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

type TestimonialsSectionProps = {
  darkMode: boolean;
};

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, DigiBoost',
    content:
      'GOLDHAT helped us scale from a local startup to a national brand in just months. Their strategies are on point and rooted in real market understanding.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Priya Sharma',
    role: 'CMO, DesiCart',
    content:
      'From zero traction to trending across social media—GOLDHAT transformed our digital presence. Couldn’t ask for a better partner.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Rajiv Nair',
    role: 'VP Marketing, BharatWear',
    content:
      'We saw a 300% increase in online sales after working with GOLDHAT. Their team understands the Indian consumer like no one else.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  return (
    <section id="testimonials" className={`py-16 sm:py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Golden </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto px-4 sm:px-0`}>
            Don’t just take our word for it – hear from India’s top brands we’ve helped grow into legends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 will-change-transform ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500/30" aria-hidden="true" />
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" aria-label={`Star ${i + 1}`} />
                ))}
              </div>
              <blockquote className={`mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                “{testimonial.content}”
              </blockquote>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</div>
                  <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
