
import React, { useState } from 'react';
import { FAQS } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: 'Happy Kuteer',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi Happy Builders, my name is ${formData.name}. I'm interested in ${formData.project}. ${formData.message}`;
    window.open(`https://wa.me/919014420144?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-24 fade-in section-gold">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Form */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-serif">Get in <span className="text-red">Touch</span></h1>
              <p className="text-navy/70 leading-relaxed font-bold uppercase tracking-wider text-xs">
                Vizag's Dream Home Experts
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 rounded-3xl shadow-2xl border-white space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-navy/60 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-4 bg-white/60 border border-gold/30 rounded-xl focus:outline-none focus:border-red transition-all font-semibold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-navy/60 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full p-4 bg-white/60 border border-gold/30 rounded-xl focus:outline-none focus:border-red transition-all font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-navy/60 uppercase">Project of Interest</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full p-4 bg-white/60 border border-gold/30 rounded-xl focus:outline-none focus:border-red transition-all font-semibold"
                >
                  <option className="happy-builder-font">Happy Kuteer</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-navy/60 uppercase">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking for..."
                  className="w-full p-4 bg-white/60 border border-gold/30 rounded-xl focus:outline-none focus:border-red transition-all resize-none font-semibold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy/90 text-gold py-5 rounded-xl font-bold text-lg shadow-2xl shadow-navy/30 transform active:scale-95 transition-all uppercase tracking-widest"
              >
                Connect on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Details & Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-gold shrink-0 shadow-lg mx-auto md:mx-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy">Corporate Office</h4>
                  <p className="text-navy/70 font-semibold mt-1">R983+X4V, Revallapalem Street Number 108, Srinivasa Nagar, Madhurawada, Visakhapatnam, Madhuravada, Andhra Pradesh 530048</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="w-14 h-14 bg-red rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg mx-auto md:mx-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-navy">Contact Numbers</h4>
                  <p className="text-navy/70 font-bold mt-1 text-base md:text-lg">Builder: +91 90144 20144</p>
                  <p className="text-navy/70 font-bold mt-1 text-base md:text-lg">Manager: +91 7842044144</p>
                  <p className="text-navy/60 font-semibold tracking-tighter text-sm md:text-base">happybuilders1449@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border-4 border-gold/30">
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl md:text-3xl font-bold text-gold font-serif">Why Madhurawada?</h4>
                <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
                  Madhurawada is the fastest-growing residential hub in Vizag. With close proximity to the IT Hill, world-class schools, and serene beaches, it offers the best ROI for real estate in Andhra Pradesh.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <span className="bg-gold/10 text-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold/20 text-[10px] md:text-xs font-black uppercase tracking-widest">✓ High Rental Yields</span>
                  <span className="bg-gold/10 text-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold/20 text-[10px] md:text-xs font-black uppercase tracking-widest">✓ IT Hub Proximity</span>
                  <span className="bg-gold/10 text-gold px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold/20 text-[10px] md:text-xs font-black uppercase tracking-widest">✓ 4-Lane Highway Access</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 md:mt-32 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">Property <span className="text-red">FAQs</span></h2>
            <p className="text-navy/70 font-bold uppercase tracking-widest text-xs">Everything you need to know about buying in AP</p>
            <div className="w-16 h-1 bg-navy mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 rounded-[2rem] border-white/60 shadow-lg hover:border-red transition-all group">
                <h4 className="text-lg md:text-xl font-bold text-navy mb-4 flex items-start">
                  <span className="bg-navy text-gold w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mr-4 text-sm group-hover:bg-red group-hover:text-white transition-colors">Q</span>
                  {faq.question}
                </h4>
                <p className="text-navy/70 font-medium leading-relaxed ml-12 whitespace-pre-line text-sm md:text-base">
                  {faq.answer.split(/(Happy Builders)/).map((p, i) => p === 'Happy Builders' ? <span key={i} className="happy-builder-font">Happy Builders</span> : p)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;