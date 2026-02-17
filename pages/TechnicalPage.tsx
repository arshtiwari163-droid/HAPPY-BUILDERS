
import React from 'react';
import { MATERIALS, AMENITIES, SPECIFICATIONS } from '../constants';

const TechnicalPage: React.FC = () => {

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleViewImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  return (
    <div className="min-h-screen py-24 fade-in relative">
      <div className="max-w-7xl mx-auto px-4">



        {/* Premium Specifications Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">Project <span className="text-red">Amenities</span></h2>
            <p className="text-navy/70 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px]">Premium features for modern 2BHK living</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="flex items-center p-6 bg-white rounded-2xl shadow-lg border border-gold/20 hover:border-red transition-all hover:scale-105 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-navy/5 rounded-full mr-4 group-hover:bg-navy group-hover:text-gold transition-colors shrink-0">
                  <span className="text-2xl md:text-3xl">{amenity.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy leading-tight group-hover:text-red transition-colors">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-navy/60 font-medium mt-1">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">Technical <span className="text-red">Specifications</span></h2>
            <p className="text-navy/70 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px]">Detailed construction standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {SPECIFICATIONS.map((spec, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl md:text-4xl shrink-0 mt-1">{spec.icon}</div>
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-bold text-navy border-b border-red/20 pb-2 mb-2 inline-block">
                      {spec.category}
                    </h4>
                    <ul className="space-y-2">
                      {spec.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-navy/70 text-sm font-medium flex items-start">
                          <span className="w-1.5 h-1.5 bg-red rounded-full mt-1.5 mr-2 shrink-0"></span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprints Section - Exclusive 2BHK East/West */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-navy font-serif">2BHK Floor Plans</h2>
            <p className="text-navy/60 font-medium text-sm md:text-base">We offer two perfect orientations: East Facing and West Facing.</p>
            <div className="w-16 h-1 bg-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* 2BHK East Plan */}
            <div className="glass-card p-6 rounded-3xl shadow-xl border border-white/40 group relative overflow-hidden">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy">Premium 2BHK (East)</h3>
                <span className="bg-navy text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">1000 Sq.Ft</span>
              </div>
              <div className="bg-white/40 rounded-2xl h-64 md:h-80 overflow-hidden relative border border-white/20 cursor-pointer" onClick={() => handleViewImage('/East_facing.jpg')}>
                <img
                  src="/East_facing.jpg"
                  alt="2BHK East Plan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-white/90 text-navy px-6 py-2 rounded-full font-bold shadow-lg flex items-center space-x-2 transform hover:scale-110 transition-all backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    <span>View Plan</span>
                  </button>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-xs md:text-sm text-navy/70 font-semibold">
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> 100% Vastu</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Morning Sun</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Master Balcony</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Smart Kitchen</li>
              </ul>
            </div>

            {/* 2BHK West Plan */}
            <div className="glass-card p-6 rounded-3xl shadow-xl border border-white/40 group relative overflow-hidden">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy">Premium 2BHK (West)</h3>
                <span className="bg-navy text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">1000 Sq.Ft</span>
              </div>
              <div className="bg-white/40 rounded-2xl h-64 md:h-80 overflow-hidden relative border border-white/20 cursor-pointer" onClick={() => handleViewImage('/West_facing.jpg')}>
                <img
                  src="/West_facing.jpg"
                  alt="2BHK West Plan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-white/90 text-navy px-6 py-2 rounded-full font-bold shadow-lg flex items-center space-x-2 transform hover:scale-110 transition-all backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    <span>View Plan</span>
                  </button>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-xs md:text-sm text-navy/70 font-semibold">
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> 100% Vastu</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Evening Breeze</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Spacious Living</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red rounded-full mr-2"></span> Dual Veranda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-scaleIn flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-red/80 text-navy hover:text-white rounded-full p-2 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <img
              src={selectedImage}
              alt="Floor plan full view"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalPage;
