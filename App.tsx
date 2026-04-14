import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/10 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 fade-in">
        {/* Logo or Icon */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-red blur-2xl opacity-20 animate-pulse-slow"></div>
            <img 
              src="/Happy_Builders_Logo.png" 
              alt="Happy Builders" 
              className="h-20 w-auto relative z-10 grayscale brightness-200"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
             Access <span className="text-red text-glow-red">Restricted</span>
          </h1>

        </div>

        {/* Detailed Info */}
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl space-y-3">
          <div className="flex items-center justify-center space-x-2 text-red/80 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse"></span>
            <span>System Status: Locked</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            This digital asset has been temporarily disabled. Normal services will resume upon settlement of outstanding dues.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-700 text-[10px] font-sans tracking-[0.5em] uppercase whitespace-nowrap">
        Happy Builders • Visakhapatnam • 2025
      </div>
    </div>
  );
};

export default App;
