import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Blogs', id: 'blog' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-navy/80 backdrop-blur-lg border-b border-white/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Brand */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="relative">
              <img src="/Happy_Builders_Logo.png" alt="Happy Builders Logo" className="h-10 md:h-12 w-auto object-contain" />
              <div className="absolute inset-0 bg-gold/20 blur-xl group-hover:bg-gold/40 transition-colors rounded-full -z-10" />
            </div>
            <span className="text-lg md:text-2xl font-black tracking-widest text-gold uppercase ml-2 md:ml-4 drop-shadow-lg happy-builder-font">
              Happy <span className="hidden sm:inline">Builders</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => setCurrentPage(link.id as Page)}
                className={`relative text-sm font-bold uppercase tracking-widest transition-all hover:text-gold ${
                  currentPage === link.id ? 'text-gold' : 'text-gray-200'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red shadow-[0_0_8px_rgba(237,32,36,0.6)]"
                  />
                )}
              </button>
            ))}

            {/* Projects Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button 
                className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors hover:text-gold py-4 ${
                  ['portfolio', 'ongoing', 'upcoming', 'completed'].includes(currentPage) ? 'text-gold' : 'text-gray-200'
                }`}
              >
                Projects
                <motion.svg 
                  animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full -left-4 w-64 bg-navy/95 backdrop-blur-2xl border-t-2 border-red shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-2xl overflow-hidden"
                  >
                    <div className="py-2">
                      {['ongoing', 'completed'].map((type) => (
                        <button 
                          key={type}
                          onClick={() => setCurrentPage(type as Page)}
                          className="w-full text-left px-6 py-4 text-sm font-semibold text-gray-300 hover:bg-white/5 hover:text-gold transition-all flex items-center group/item"
                        >
                          <span className="happy-builder-font italic text-lg mr-3 group-hover/item:text-red transition-colors capitalize">{type}</span> 
                          Projects
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(237,32,36,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="bg-red text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-xl transition-all"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white p-2 relative z-50"
            >
              <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-navy/95 backdrop-blur-3xl z-40 md:hidden flex flex-col justify-center px-8 py-20"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] opacity-50">Navigation</p>
              <button 
                onClick={() => { setCurrentPage('home'); setIsOpen(false); }} 
                className="block w-full text-left text-4xl font-bold uppercase text-white hover:text-gold transition-colors"
              >
                Home
              </button>

              
              <div className="pt-8 space-y-4">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Projects</p>
                {['ongoing', 'completed'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => { setCurrentPage(type as Page); setIsOpen(false); }} 
                    className="block w-full text-left text-2xl font-semibold text-gray-300 hover:text-gold transition-colors happy-builder-font italic capitalize"
                  >
                    {type} Projects
                  </button>
                ))}
              </div>

              <button 
                onClick={() => { setCurrentPage('blog'); setIsOpen(false); }} 
                className="block w-full text-left text-4xl font-bold uppercase text-white hover:text-gold transition-colors"
              >
                Blogs
              </button>
              
              <button 
                onClick={() => { setCurrentPage('contact'); setIsOpen(false); }} 
                className="block w-full bg-red text-white py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl mt-8"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
