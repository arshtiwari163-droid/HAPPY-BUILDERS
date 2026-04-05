
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <img src="/Happy_Builders_Logo.png" alt="Happy Builders Logo" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="text-xl md:text-2xl font-black tracking-widest text-gold uppercase ml-2 shadow-sm drop-shadow-md happy-builder-font">Happy Builders</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => setCurrentPage('blog')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-gold ${currentPage === 'blog' ? 'text-gold' : 'text-gray-200'}`}
            >
              Blogs
            </button>

            {/* Projects Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button 
                className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors hover:text-gold py-8 ${
                  ['portfolio', 'ongoing', 'upcoming', 'completed'].includes(currentPage) ? 'text-gold' : 'text-gray-200'
                }`}
              >
                Projects
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {/* Designer Dropdown Menu */}
              <div className={`absolute top-[80px] -left-4 w-64 bg-navy/95 backdrop-blur-xl border-t-4 border-red shadow-2xl transform transition-all duration-300 origin-top overflow-hidden ${
                isProjectsOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}>
                <div className="py-2">
                  <button 
                    onClick={() => setCurrentPage('ongoing')}
                    className="w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-gold transition-colors flex items-center group/item"
                  >
                    <span className="happy-builder-font italic text-lg mr-3 group-hover/item:text-red transition-colors">On-Going</span> Projects
                  </button>
                  <button 
                    onClick={() => setCurrentPage('upcoming')}
                    className="w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-gold transition-colors flex items-center group/item"
                  >
                    <span className="happy-builder-font italic text-lg mr-3 group-hover/item:text-red transition-colors">Upcoming</span> Projects
                  </button>
                  <button 
                    onClick={() => setCurrentPage('completed')}
                    className="w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-gold transition-colors flex items-center group/item"
                  >
                    <span className="happy-builder-font italic text-lg mr-3 group-hover/item:text-red transition-colors">Completed</span> Projects
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('technical')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-gold ${currentPage === 'technical' ? 'text-gold' : 'text-gray-200'}`}
            >
              Amenities
            </button>

            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-red hover:bg-red-dark text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg shadow-red/20 transform transition-all hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>
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

      {/* Mobile Menu (simplified for space) */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 animate-slide-in-left absolute w-full left-0 shadow-2xl">
          <div className="px-4 py-8 space-y-4">
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-4">Navigation</p>
            <button onClick={() => { setCurrentPage('blog'); setIsOpen(false); }} className="block w-full text-left text-xl font-bold uppercase py-2">Blogs</button>
            <button onClick={() => { setCurrentPage('home'); setIsOpen(false); }} className="block w-full text-left text-xl font-bold uppercase py-2">Home</button>
            
            <div className="pt-4 border-t border-white/5 space-y-2">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Projects</p>
              <button onClick={() => { setCurrentPage('ongoing'); setIsOpen(false); }} className="block w-full text-left text-lg font-semibold py-2 happy-builder-font italic">On-Going Projects</button>
              <button onClick={() => { setCurrentPage('upcoming'); setIsOpen(false); }} className="block w-full text-left text-lg font-semibold py-2 happy-builder-font italic">Upcoming Projects</button>
              <button onClick={() => { setCurrentPage('completed'); setIsOpen(false); }} className="block w-full text-left text-lg font-semibold py-2 happy-builder-font italic">Completed Projects</button>
            </div>

            <button onClick={() => { setCurrentPage('technical'); setIsOpen(false); }} className="block w-full text-left text-xl font-bold uppercase py-2 pt-4 border-t border-white/5">Amenities</button>
            <button onClick={() => { setCurrentPage('contact'); setIsOpen(false); }} className="block w-full text-center bg-red text-white py-4 mt-6 rounded-xl font-black uppercase tracking-widest">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
