
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Amenities', value: 'technical' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            {/* Visual representation of the logo based on user upload */}
            <img src="/Happy_Builders_Logo.png" alt="Happy Builders Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="text-xl md:text-2xl font-black tracking-widest text-gold uppercase font-serif ml-2 shadow-sm drop-shadow-md">Happy Builders</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-gold ${currentPage === item.value ? 'text-gold border-b-2 border-gold' : 'text-gray-300'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#15182d] border-t border-gray-700 animate-slide-in-left absolute w-full left-0 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setCurrentPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 text-lg font-bold uppercase tracking-wider transition-all rounded-lg ${currentPage === item.value ? 'bg-gold/10 text-gold border-l-4 border-gold' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
