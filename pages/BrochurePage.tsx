import React from 'react';
import { motion } from 'framer-motion';
import { AMENITIES, SPECIFICATIONS } from '../constants';

const BrochurePage: React.FC = () => {
  const floorPlans = [
    { 
      title: 'East Facing - 1000 Sq.Ft', 
      image: '/East_facing.jpg',
      details: ['100% Vastu', '2 Bedroom', '2 Bathroom', 'Morning Sunlight'] 
    },
    { 
      title: 'West Facing - 1000 Sq.Ft', 
      image: '/West_facing.jpg',
      details: ['100% Vastu', 'Spacious Living', 'Ventilation', 'Sunset View'] 
    }
  ];

  return (
    <div className="min-h-screen bg-navy text-white pt-24 pb-20 relative overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-gold font-black text-xs uppercase tracking-[0.5em] block">Digital Brochure</span>
          <h1 className="text-5xl md:text-8xl font-black font-serif text-glow leading-tight">
            Happy <span className="italic text-white hover:text-gold transition-colors duration-500">Kuteer</span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl font-medium tracking-wide">
            Premier 2BHK Residential Project in Madhurawada, Vizag
          </p>
          <div className="w-32 h-2 bg-red mx-auto mt-8 shadow-[0_0_20px_rgba(237,32,36,0.6)]" />
        </motion.div>

        {/* Hero Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mb-24"
        >
          <img 
            src="/Happy_Kuteer.jpg" 
            alt="Happy Kuteer Elevation" 
            className="w-full h-auto object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-2">
              <p className="text-gold font-black text-sm uppercase tracking-widest">Architectural Design</p>
              <h3 className="text-3xl font-bold">Main Elevation</h3>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col items-center">
              <span className="text-gold font-black text-2xl">RERA</span>
              <span className="text-[10px] uppercase font-bold text-white/50">Approved Project</span>
            </div>
          </div>
        </motion.div>

        {/* Floor Plans Section */}
        <div className="space-y-16 mb-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black font-serif">Smart <span className="text-gold">Floor Plans</span></h2>
            <div className="w-24 h-1 bg-red mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {floorPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden flex flex-col"
              >
                <div className="p-10 space-y-6 flex-grow">
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-gold">{plan.title}</h4>
                    <span className="px-4 py-1.5 bg-red text-white text-[10px] font-black uppercase rounded-full">Unit {i + 1}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {plan.details.map((d, di) => (
                      <div key={di} className="flex items-center space-x-2 text-white/60 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-light/20 p-4 border-t border-white/10 overflow-hidden">
                  <img src={plan.image} alt={plan.title} className="w-full h-auto object-contain rounded-2xl group hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black font-serif">Luxury <span className="text-gold">Amenities</span></h2>
            <div className="w-24 h-1 bg-red mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center hover:border-gold/50 transition-all"
              >
                <span className="text-4xl mb-4 block">{amenity.icon}</span>
                <h5 className="font-bold text-white mb-2">{amenity.title}</h5>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
              <h2 className="text-4xl font-black font-serif">Built For <br/><span className="text-gold italic">Generations</span></h2>
              <p className="text-white/60 leading-relaxed">
                Every material used in Happy Kuteer passes through multi-layer quality checks. We believe your home should be as strong and enduring as your happiness.
              </p>
              <div className="space-y-4">
                {SPECIFICATIONS.slice(0, 4).map((spec, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-2xl">{spec.icon}</span>
                    <div>
                      <h6 className="font-bold text-gold">{spec.category}</h6>
                      <p className="text-xs text-white/50">{spec.details[0].substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="relative rounded-[3rem] overflow-hidden border border-white/10">
              <img src="/Happy_Kuteer.jpg" className="w-full h-full object-cover opacity-60" alt="Construction detail" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-navy/60 backdrop-blur-sm">
                <div className="space-y-8">
                  <h4 className="text-4xl font-black font-serif">Visit Our site Today</h4>
                  <p className="text-white/70 italic">Experience the quality and location firsthand. Book a site visit today.</p>
                  <button 
                    onClick={() => window.location.href = '#contact'}
                    className="px-10 py-5 bg-red text-white rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-gold hover:text-navy transition-all"
                  >
                    Get Booking Details
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
