// src/components/BlogSection.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

type BlogSectionProps = {
  darkMode: boolean;
};

const blogPosts = [
  {
    title: 'The Instagram Algorithm Decoded',
    excerpt: "Discover the secret formula to beating Instagram's algorithm and getting your content seen by millions.",
    category: 'Social Media',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: '10 Ad Hacks That Tripled Our ROAS',
    excerpt: 'The exact strategies we use to achieve 500%+ ROAS for our clients across Meta and Google Ads.',
    category: 'Paid Advertising',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Influencer Marketing in 2025',
    excerpt: 'How to find, negotiate with, and manage influencers for maximum brand impact and ROI.',
    category: 'Influencer Marketing',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const BlogSection: React.FC<BlogSectionProps> = ({ darkMode }) => {
  return (
    <section id="blog" className={`py-16 sm:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Golden </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0`}>
            Stay ahead of the curve with our latest insights, trends, and golden nuggets of marketing wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {post.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.readTime}</span>
                  <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors flex items-center space-x-1 text-sm sm:text-base">
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;