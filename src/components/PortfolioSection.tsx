// src/components/PortfolioSection.tsx
import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import portfolioItems from '../data/portfolioData';

type PortfolioSectionProps = {
  darkMode: boolean;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  darkMode,
  activeFilter,
  setActiveFilter,
}) => {
  const filteredPortfolio =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className={`py-16 sm:py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Golden </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Every project tells a story of transformation. Here's how we've turned ordinary brands
            into golden legends through marketing, web development, and mobile apps.
          </p>

          {/* Filters - Mobile responsive */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
            {['All', 'Branding', 'Social Media', 'Paid Ads', 'Web Development', 'App Development', 'Influencer Marketing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg scale-105'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } hover:scale-105 active:scale-95`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className={`group rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-white">
                  <div className="bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-yellow-300 text-sm sm:text-base">{item.industry}</p>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm sm:text-base leading-relaxed`}>{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-500">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-bold text-sm sm:text-base">{item.results}</span>
                  </div>
                  <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors text-sm sm:text-base">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;