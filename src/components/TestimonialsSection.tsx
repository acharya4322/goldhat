// src/components/TestimonialsSection.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';

type TestimonialsSectionProps = {
  darkMode: boolean;
};

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVision',
    content:
      "GOLDHAT didn't just improve our marketing – they completely revolutionized how we think about our brand. The results speak for themselves: 400% growth in 6 months.",
    rating: 5,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, GrowthLab',
    content:
      'These guys are absolute wizards. They took our struggling social media presence and turned it into our biggest lead generation channel. Pure gold!',
    rating: 5,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Emma Thompson',
    role: 'Marketing Director, StyleCo',
    content:
      'Working with GOLDHAT was like having a team of marketing superheroes. They delivered results we never thought possible. Absolutely recommend!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=100'
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
            Don't just take our word for it – hear from the brands we've transformed into golden legends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500/30" />
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className={`mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-base sm:text-lg">{testimonial.name.charAt(0)}</span>
                </div>
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