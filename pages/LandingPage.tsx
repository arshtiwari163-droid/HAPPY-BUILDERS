import React from 'react';
import { motion } from 'framer-motion';
import { Page, Project } from '../types';
import { PROJECTS } from '../constants';

interface LandingPageProps {
  setCurrentPage: (page: Page) => void;
}

const TESTIMONIALS = [
  {
    name: "Suresh Reddy",
    project: "Happy Nest, Madhurawada",
    text: "The 2BHK layout is incredibly space-efficient. As someone who values Vastu, the East-facing entrance was non-negotiable for us. Happy Builders delivered exactly what they promised.",
    rating: 5,
    avatar: "SR"
  },
  {
    name: "Priya Rao",
    project: "Venus Heights, Seethamadhara",
    text: "We've lived here for 2 years now. The build quality is top-notch. Even during heavy monsoons, we've had zero seepage issues. Truly the most reliable builder in Vizag.",
    rating: 5,
    avatar: "PR"
  },
  {
    name: "K. Venkatesh",
    project: "Happy Nivas, Vizag",
    text: "Finding a specialized 2BHK builder who understands modern requirements was tough until we found Happy Builders. The cross-ventilation in our West-facing flat is amazing.",
    rating: 5,
    avatar: "KV"
  },
  {
    name: "Anitha Kumari",
    project: "Happy Kuteer, Madhurawada",
    text: "Transparent documentation and timely delivery. The GVMC water supply and 100% power backup make life so much easier. Highly recommend them for 2BHK buyers.",
    rating: 4,
    avatar: "AK"
  },
  {
    name: "Dr. Rajesh",
    project: "Happy Kuteer, Madhurawada",
    text: "The location and the Vastu compliance were our main priorities. Happy Builders exceeded expectations with their finishing and high-quality materials used in the construction.",
    rating: 5,
    avatar: "DR"
  }
];

const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  const currentProjects = PROJECTS.filter(p => p.status === 'Current');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/Happy_Kuteer.jpg"
            alt="Happy Kuteer - Latest Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
                <span className="text-gold font-black text-xs tracking-[0.3em] uppercase">
                  Vizag's 2BHK Specialists
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-8xl font-black text-white leading-tight font-serif">
                Crafting <span className="text-gold text-glow italic">Happy</span> <br />
                <span className="text-white">Homes.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-lg leading-relaxed font-medium">
                Premier <span className="text-white">2 BHK apartments in Vizag under 50 lakhs</span>. Specializing in East and West facing flats for sale in Madhurawada Visakhapatnam.
                <span className="text-gold block mt-2">100% Vastu perfection near the IT hub & Kommadi.</span>
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('technical')}
                  className="px-10 py-4 md:py-5 bg-red text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(237,32,36,0.3)] hover:shadow-[0_25px_50px_rgba(237,32,36,0.4)] transition-all uppercase tracking-widest text-sm"
                >
                  View Amenities & Plans
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-4 md:py-5 bg-navy/50 backdrop-blur-md border border-white/10 text-gold font-black rounded-2xl hover:bg-navy/70 transition-all uppercase tracking-widest text-sm"
                >
                  Book Site Visit
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gold rounded-[3rem] opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/10 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="relative bg-navy/40 backdrop-blur-xl p-4 rounded-[2.5rem] border border-white/20 shadow-2xl">
                  <img
                    src="/Happy_Kuteer.jpg"
                    alt="Happy Kuteer"
                    className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
                  />
                  <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl border border-white/20">
                    <p className="happy-builder-font text-white text-3xl italic">"We Build Your Happiness"</p>
                    <div className="h-0.5 w-12 bg-gold mt-4"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-navy border-y border-white/5 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { label: 'RERA', sub: 'AP Registered' },
            { label: 'VASTU', sub: '100% Compliant' },
            { label: '2BHK', sub: 'Expert Specialty' },
            { label: 'TRUST', sub: 'Solid Foundations' }
          ].map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white/5 transition-colors group"
            >
              <span className="text-xl sm:text-2xl md:text-5xl font-black text-gold group-hover:scale-110 transition-transform duration-500">{badge.label}</span>
              <span className="text-[7px] sm:text-[8px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2">{badge.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visionary Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gold/20 rounded-[4rem] rotate-3"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
                 <img
                  src="/mkl.jpeg"
                  alt="Dileep Kumar Garapati"
                  className="w-full h-[400px] sm:h-[500px] md:h-[800px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h3 className="text-4xl font-bold text-white font-serif">Dileep Kumar Garapati</h3>
                  <p className="text-gold font-black uppercase tracking-widest text-xs mt-2">Managing Partner</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-navy font-serif leading-tight">
                  Visionary <br />
                  <span className="text-red italic">Architect of Trust</span>
                </h2>
                <div className="w-24 h-2 bg-gold"></div>
              </div>

              <p className="text-xl text-navy/80 leading-relaxed font-medium">
                Under the visionary leadership of Mr. Dileep Kumar Garapati, <span className="happy-builder-font">Happy Builders</span> has transformed the 2BHK residential landscape in Visakhapatnam.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: '🏆', title: 'GVMC/VMRDA', desc: 'Approved Plans' },
                  { icon: '🧱', title: 'In-table Bricks', desc: 'Structural Integrity' },
                  { icon: '⚖️', title: 'Clear Titles', desc: 'Hassle-free Loans' },
                  { icon: '📍', title: 'Prime Spots', desc: 'Madhurawada Experts' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-navy/5 border border-navy/5 hover:border-gold/50 transition-all">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="font-bold text-navy text-sm">{item.title}</p>
                      <p className="text-navy/50 text-[10px] uppercase font-bold tracking-wider">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center space-x-6 bg-navy px-10 py-6 rounded-[2rem] shadow-2xl border border-white/5">
                  <div className="text-left">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">AP RERA Registered</p>
                    <p className="text-gold font-black text-2xl tracking-wider">PO3280035440</p>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div className="w-12 h-12 bg-red/20 rounded-full flex items-center justify-center text-red">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-navy relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
                2 BHK Flats in <span className="text-gold italic">Madhurawada</span>
              </h2>
              <div className="w-24 h-1.5 bg-red"></div>
            </div>
            <p className="text-white/50 max-w-sm text-center md:text-right font-medium text-sm md:text-base">
              Explore buy flat Visakhapatnam options and affordable property in Madhurawada near Kommadi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {currentProjects.map(project => (
              <ProjectCard key={project.id} project={project} setCurrentPage={setCurrentPage} />
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-navy font-serif">Happy <span className="text-white drop-shadow-sm italic">Homeowners</span></h2>
            <div className="w-24 h-1.5 bg-navy mx-auto mt-4"></div>
          </div>

          <div className="flex overflow-hidden group pb-10">
            <div className="flex animate-scroll hover:pause-scroll space-x-8">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div key={idx} className="flex-shrink-0 w-[400px] bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gold-dark/20 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center font-black text-gold text-xl">
                        {t.avatar}
                      </div>
                      <div>
                        <h4 className="text-navy font-black text-lg">{t.name}</h4>
                        <p className="text-red text-[10px] font-bold uppercase tracking-widest">{t.project}</p>
                      </div>
                    </div>
                    <p className="text-navy/70 italic text-lg leading-relaxed font-medium">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex mt-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'text-gold-dark' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; setCurrentPage: (page: Page) => void }> = ({ project, setCurrentPage }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-navy-light/30 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group flex flex-col h-full relative"
    >
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-6 left-6">
          <span className="px-5 py-2 bg-red text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-10 space-y-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h4 className="text-3xl font-black text-white">{project.title}</h4>
            <div className="flex items-center text-gold font-bold text-xs uppercase tracking-widest">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {project.location}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-tighter">Handover</p>
            <p className="text-lg font-black text-gold">2026</p>
          </div>
        </div>
        
        <p className="text-white/60 text-base leading-relaxed font-medium flex-grow">
          {project.description}
        </p>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <motion.button 
              whileHover={{ x: 5 }}
              onClick={() => setCurrentPage('technical')}
              className="text-sm md:text-xs text-white font-black uppercase tracking-[0.2em] flex items-center group/btn py-2"
            >
              Explore Plan 
              <svg className="w-5 h-5 ml-2 text-red group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </motion.button>

            {project.brochure && (
              <motion.button
                onClick={() => setCurrentPage('brochure')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-gold hover:text-navy px-5 py-3 md:px-4 md:py-2 rounded-xl text-xs md:text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                Explore Brochure
              </motion.button>
            )}
          </div>
          <div className="flex -space-x-3">
             <div className="w-10 h-10 rounded-full border-2 border-navy bg-gold/20 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-gold">2BHK</div>
             <div className="w-10 h-10 rounded-full border-2 border-navy bg-red/20 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-red">RERA</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
