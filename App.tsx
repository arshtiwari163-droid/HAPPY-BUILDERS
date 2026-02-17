
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WhatsAppBot from './components/WhatsAppBot';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import TechnicalPage from './pages/TechnicalPage';
import ContactPage from './pages/ContactPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'technical':
        return <TechnicalPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* WhatsApp Chatbot */}
      <WhatsAppBot />

      {/* Footer */}
      <footer className="bg-navy text-white py-12 md:py-20 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <img src="/Happy_Builders_Logo.png" alt="Happy Builders Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Vizag's trusted 2BHK specialists, offering premium quality homes at reasonable prices. We are committed to timely delivery and excellence in every square foot we build.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/1QTVaWwD2h/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/happybuildersvizag?igsh=MTdxMjAyYmVjODdzNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://youtube.com/@happybuildersvizag?si=FER6t5sa188BIPRn" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red transition-all duration-300 group">
                <svg className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold">Quick Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-red transition-colors">Home Landing</button></li>
              <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-red transition-colors">Project Portfolio</button></li>
              <li><button onClick={() => setCurrentPage('technical')} className="hover:text-red transition-colors">Amenities</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-red transition-colors">Contact & FAQs</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gold">Prime Locations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Madhurawada IT SEZ</li>
              <li>Yendada Beach Road</li>
              <li>MVP Colony Premium</li>
              <li>Rushikonda Hills</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            &copy; 2025 Happy Builders Visakhapatnam. "We Build Your Happiness" ©. All projects RERA/VMRDA Approved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
