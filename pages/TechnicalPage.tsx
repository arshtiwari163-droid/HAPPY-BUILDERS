import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AMENITIES, SPECIFICATIONS } from '../constants';

const TechnicalPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleViewImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-navy text-white pt-32 pb-24 overflow-x-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Amenities Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 md:mb-40"
        >
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">Exclusive Features</span>
            <h1 className="text-5xl md:text-7xl font-black font-serif">Project <span className="text-glow italic text-white/90">Amenities</span></h1>
            <div className="w-24 h-2 bg-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-gold/50 transition-all flex flex-col items-center text-center group relative"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-navy/50 rounded-2xl border border-white/10 group-hover:bg-gold transition-all duration-500 mb-6">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{amenity.icon}</span>
                </div>
                <h4 className="text-xl font-black text-white group-hover:text-gold transition-colors">{amenity.title}</h4>
                <p className="text-sm text-white/50 font-medium mt-3 leading-relaxed">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 md:mb-40"
        >
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">Quality Standards</span>
            <h2 className="text-5xl md:text-7xl font-black font-serif">Technical <span className="text-glow italic text-white/90">Details</span></h2>
            <div className="w-24 h-2 bg-red mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SPECIFICATIONS.map((spec, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:border-red/50 transition-all shadow-2xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl shrink-0">{spec.icon}</div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gold font-serif">
                      {spec.category}
                    </h4>
                    <ul className="space-y-4">
                      {spec.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-white/60 text-base font-medium flex items-start group">
                          <span className="w-2 h-2 bg-red rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blueprints Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">Smart Layouts</span>
            <h2 className="text-5xl md:text-7xl font-black font-serif">2BHK <span className="text-glow italic text-white/90">Plans</span></h2>
            <div className="w-24 h-2 bg-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { title: 'Premium (East)', file: '/East_facing.jpg', features: ['100% Vastu', 'Morning Sun', 'Master Balcony', 'Smart Kitchen'] },
              { title: 'Premium (West)', file: '/West_facing.jpg', features: ['100% Vastu', 'Evening Breeze', 'Spacious Living', 'Dual Veranda'] }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[3.5rem] border border-white/10 shadow-2xl group relative overflow-hidden flex flex-col"
              >
                <div className="mb-8 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-gold transition-colors">{plan.title}</h3>
                    <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mt-1">1000 Sq.Ft Layout</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-black text-lg">
                    {i === 0 ? 'E' : 'W'}
                  </div>
                </div>

                <div 
                  className="bg-navy rounded-[2.5rem] h-[500px] overflow-hidden relative border border-white/10 cursor-pointer shadow-inner"
                  onClick={() => handleViewImage(plan.file)}
                >
                  <img
                    src={plan.file}
                    alt={`${plan.title} Floor Plan`}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-navy to-transparent">
                    <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-navy transition-all">
                      View Full Details
                    </button>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="w-1.5 h-1.5 bg-red rounded-full" />
                      <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full bg-navy rounded-[3rem] shadow-2xl p-8 border border-white/10 flex items-center justify-center" 
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-red text-white rounded-full flex items-center justify-center transition-all z-[110]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <img
                src={selectedImage}
                alt="Floor plan full view"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnicalPage;

