import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Form Side */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="space-y-4">
               <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">Get in Touch</span>
               <h1 className="text-5xl md:text-7xl font-black font-serif">Build Your <span className="text-glow italic text-white/90">Happiness</span></h1>
               <div className="w-24 h-2 bg-red"></div>
               <p className="text-white/50 text-xl font-medium max-w-lg mt-6">
                 Schedule a site visit or ask about our RERA-approved 2BHK projects across Visakhapatnam.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="full-name" className="text-[10px] font-black text-gold uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dileep Kumar"
                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-semibold placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-black text-gold uppercase tracking-[0.2em] ml-2">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 90000 00000"
                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-semibold placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="project" className="text-[10px] font-black text-gold uppercase tracking-[0.2em] ml-2">Project Interest</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-semibold appearance-none"
                >
                  <option className="bg-navy text-white">Happy Kuteer</option>
                  <option className="bg-navy text-white">Happy Nest</option>
                  <option className="bg-navy text-white">Venus Heights</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-black text-gold uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I'm interested in the East-facing apartments..."
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-gold focus:bg-white/10 transition-all resize-none font-semibold placeholder:text-white/10"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-red hover:bg-red/90 text-white py-6 rounded-2xl font-black text-sm shadow-[0_20px_40px_rgba(237,32,36,0.3)] uppercase tracking-widest transition-all"
              >
                Connect on WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details Side */}
          <motion.div variants={itemVariants} className="space-y-16">
            <div className="grid gap-12">
              <div className="flex space-x-8 group">
                <div className="w-20 h-20 bg-gold/10 rounded-[2rem] flex items-center justify-center text-gold border border-gold/10 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-white">Corporate Office</h4>
                  <p className="text-white/50 font-medium text-lg leading-relaxed">
                    R983+X4V, Revallapalem Street Number 108, Srinivasa Nagar, <span className="text-white">Madhurawada</span>, Visakhapatnam, Andhra Pradesh 530048
                  </p>
                </div>
              </div>

              <div className="flex space-x-8 group">
                <div className="w-20 h-20 bg-red/10 rounded-[2rem] flex items-center justify-center text-red border border-red/10 group-hover:bg-red group-hover:text-white transition-all duration-500 shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-white">Direct Contacts</h4>
                  <div className="space-y-1">
                    <p className="text-white/50 text-xl font-medium"><span className="text-gold">Builder:</span> +91 90144 20144</p>
                    <p className="text-white/50 text-xl font-medium"><span className="text-gold">Manager:</span> +91 78420 44144</p>
                  </div>
                  <p className="text-white/30 font-black uppercase tracking-widest text-xs pt-2">happybuilders1449@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="relative bg-white/5 rounded-[3rem] p-12 border border-white/10 overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
               <div className="relative z-10 space-y-6">
                 <h4 className="text-3xl font-black text-gold font-serif">Why Madhurawada?</h4>
                 <p className="text-white/60 text-lg leading-relaxed font-medium">
                   Vizag's fastest-growing residential hub. Exceptional proximity to the IT Hill, world-class education, and pristine beaches.
                 </p>
                 <div className="flex flex-wrap gap-3">
                   {['✓ High ROI', '✓ IT Hub Hub', '✓ 4-Lane Access'].map(tag => (
                     <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gold">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;