import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import TechnicalPage from './pages/TechnicalPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BrochurePage from './pages/BrochurePage';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBot from './components/WhatsAppBot';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle page transitions and scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'ongoing':
        return <PortfolioPage statusFilter="Current" setCurrentPage={setCurrentPage} />;
      case 'upcoming':
        return <PortfolioPage statusFilter="Upcoming" setCurrentPage={setCurrentPage} />;
      case 'completed':
        return <PortfolioPage statusFilter="Completed" setCurrentPage={setCurrentPage} />;
      case 'technical':
        return <TechnicalPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'brochure':
        return <BrochurePage setCurrentPage={setCurrentPage} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-navy min-h-screen font-sans selection:bg-gold selection:text-navy">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <ScrollToTop />
      <WhatsAppBot />

      {/* Footer */}
      <footer className="bg-navy-dark py-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="flex justify-center mb-4">
             <img src="/Happy_Builders_Logo.png" alt="Happy Builders" className="h-12 w-auto grayscale brightness-200 opacity-50" />
          </div>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2025 Happy Builders • Vizag's 2BHK Specialists • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
