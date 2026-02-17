
import React, { useState } from 'react';

const WhatsAppBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919014420144";

  const suggestions = [
    "Ask about 2BHK price in Vizag",
    "Schedule a site visit in Madhurawada",
    "Query about RERA approval",
    "Get floor plans",
  ];

  const openWhatsApp = (msg: string = "") => {
    const encodedMsg = encodeURIComponent(msg || "Hello Happy Builders, I'm interested in your projects in Vizag.");
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl mb-4 w-80 overflow-hidden border border-gold/20 fade-in">
          <div className="bg-navy p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-navy">H</div>
              <div>
                <p className="font-bold text-sm">Happy Bot</p>
                <p className="text-xs text-gold">Online to Assist</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto bg-gold-light/20">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-navy/80">
              Hello! We build your happiness. How can I help you today with your dream home in Vizag?
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-navy/40 ml-1">Quick Links</p>
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => openWhatsApp(s)}
                  className="block w-full text-left p-2 text-xs bg-white border border-gray-100 rounded-lg hover:border-red hover:text-red transition-all shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3 bg-white">
            <button
              onClick={() => openWhatsApp()}
              className="w-full bg-red hover:bg-red-dark text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-colors shadow-lg"
            >
              <span>Instant Chat</span>
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-gold shadow-2xl hover:scale-110 transition-transform focus:outline-none border-4 border-gold"
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
      </button>
    </div>
  );
};

export default WhatsAppBot;
