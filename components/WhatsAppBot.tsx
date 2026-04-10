import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919014420144";

  const suggestions = [
    "Average price of 2BHK in Vizag",
    "Site visit for Happy Kuteer",
    "RERA Approval & Documentation",
    "Request Brochure & Plans",
  ];

  const openWhatsApp = (msg: string = "") => {
    const encodedMsg = encodeURIComponent(msg || "Hello Happy Builders, I'm interested in your premium projects in Visakhapatnam.");
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[10000] scale-75 md:scale-100 origin-bottom-right">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-navy border border-white/10 rounded-[2.5rem] shadow-2xl mb-6 w-[350px] overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="bg-gold p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center font-black text-gold shadow-xl">H</div>
                <div>
                  <p className="font-black text-navy text-sm uppercase tracking-widest">Happy Concierge</p>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-red rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-navy/60 font-black uppercase tracking-widest">Expert Support</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl rounded-tl-none text-white/80 text-sm leading-relaxed font-medium italic">
                "Welcome to Happy Builders. I'm here to help you find your perfect Vastu-compliant home in Vizag. What are you looking for today?"
              </div>

              <div className="space-y-3">
                <p className="text-[10px] uppercase font-black text-gold tracking-widest ml-1">Popular Queries</p>
                <div className="grid gap-2">
                  {suggestions.map((s, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 5 }}
                      onClick={() => openWhatsApp(s)}
                      className="text-left p-3.5 text-xs bg-white/5 border border-white/5 rounded-xl text-white/60 hover:border-gold hover:text-gold transition-all flex justify-between items-center group"
                    >
                      <span className="font-bold">{s}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-white/5 border-t border-white/5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openWhatsApp()}
                className="w-full bg-red text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.011 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.761.459 3.413 1.264 4.854L2 22l5.318-1.395c1.404.764 2.992 1.201 4.693 1.201 5.506 0 9.969-4.463 9.969-9.969 0-5.506-4.463-9.969-9.969-9.969zm0 18.274c-1.522 0-2.943-.41-4.17-1.12l-.3-.173-3.111.815.829-3.041-.19-.304c-.759-1.214-1.157-2.613-1.157-4.053 0-4.242 3.449-7.69 7.69-7.69 4.242 0 7.69 3.449 7.69 7.69s-3.449 7.69-7.69 7.69zm4.404-6.046c-.24-.12-1.421-.7-1.642-.781-.22-.08-.381-.12-.542.12-.161.24-.622.781-.762.94-.141.16-.281.18-.521.06-.24-.12-1.012-.373-1.926-1.188-.711-.635-1.192-1.419-1.332-1.659-.14-.24-.015-.37.106-.49.109-.108.24-.28.361-.42.12-.14.161-.24.241-.4.08-.16.04-.3-.02-.42-.06-.12-.542-1.31-.742-1.79-.196-.47-.384-.403-.542-.41-.161-.008-.321-.01-.482-.01-.161 0-.422.06-.643.3-.22.24-.843.82-.843 2.01s.863 2.33 1.003 2.51c.141.18 1.696 2.59 4.108 3.63.574.25 1.022.4 1.373.51.573.18 1.094.16 1.507.1.462-.07 1.421-.58 1.622-1.14.201-.56.201-1.04.141-1.14-.06-.1-.221-.18-.462-.3z" />
                </svg>
                <span>Live WhatsApp Chat</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 transition-all duration-500 ${
          isOpen ? 'bg-red border-red/50 text-white' : 'bg-navy border-gold text-gold'
        }`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <div className="w-10 h-10">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.011 2c-5.506 0-9.969 4.463-9.969 9.969 0 1.761.459 3.413 1.264 4.854L2 22l5.318-1.395c1.404.764 2.992 1.201 4.693 1.201 5.506 0 9.969-4.463 9.969-9.969 0-5.506-4.463-9.969-9.969-9.969zm0 18.274c-1.522 0-2.943-.41-4.17-1.12l-.3-.173-3.111.815.829-3.041-.19-.304c-.759-1.214-1.157-2.613-1.157-4.053 0-4.242 3.449-7.69 7.69-7.69 4.242 0 7.69 3.449 7.69 7.69s-3.449 7.69-7.69 7.69zm4.404-6.046c-.24-.12-1.421-.7-1.642-.781-.22-.08-.381-.12-.542.12-.161.24-.622.781-.762.94-.141.16-.281.18-.521.06-.24-.12-1.012-.373-1.926-1.188-.711-.635-1.192-1.419-1.332-1.659-.14-.24-.015-.37.106-.49.109-.108.24-.28.361-.42.12-.14.161-.24.241-.4.08-.16.04-.3-.02-.42-.06-.12-.542-1.31-.742-1.79-.196-.47-.384-.403-.542-.41-.161-.008-.321-.01-.482-.01-.161 0-.422.06-.643.3-.22.24-.843.82-.843 2.01s.863 2.33 1.003 2.51c.141.18 1.696 2.59 4.108 3.63.574.25 1.022.4 1.373.51.573.18 1.094.16 1.507.1.462-.07 1.421-.58 1.622-1.14.201-.56.201-1.04.141-1.14-.06-.1-.221-.18-.462-.3z" />
            </svg>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppBot;

