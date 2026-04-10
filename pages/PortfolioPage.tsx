import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project, Page } from '../types';
import { PROJECTS } from '../constants';

interface PortfolioPageProps {
  statusFilter?: 'Current' | 'Upcoming' | 'Completed';
  setCurrentPage: (page: Page) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ statusFilter, setCurrentPage }) => {
  const portfolioProjects = PROJECTS
    .filter(p => !statusFilter || p.status === statusFilter)
    .sort((a, b) => (a.id - b.id)); 

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden pt-20 relative" ref={containerRef}>
      {/* Dynamic Header */}
      <div className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red/5 rounded-full blur-[120px]"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">
              Architectural Legacy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-serif leading-none">
              Our <span className="text-glow italic">Masterpieces</span>
            </h1>
            <div className="w-24 h-2 bg-red mx-auto text-glow"></div>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
              Defining the skyline of Visakhapatnam since 2021 with Vastu-perfect residential projects.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                
                <div className="absolute top-8 right-8">
                  <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl ${
                    project.status === 'Completed' ? 'bg-white text-navy' : 'bg-red text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-3xl font-black text-white group-hover:text-gold transition-colors duration-300">
                     {project.title}
                   </h3>
                   <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mt-1">
                     {project.location}
                   </p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow space-y-6">
                <p className="text-white/60 text-lg leading-relaxed font-medium flex-grow italic">
                  "{project.description}"
                </p>

                <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full border-2 border-navy bg-gold/10 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-gold">2BHK</div>
                    <div className="w-12 h-12 rounded-full border-2 border-navy bg-red/10 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-red">VASTU</div>
                  </div>

                  {project.brochure && (
                    <motion.button
                      onClick={() => setCurrentPage('brochure')}
                      whileHover={{ scale: 1.1, backgroundColor: '#f7d060', color: '#0a0c1a' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 border border-white/10 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-xl cursor-pointer"
                    >
                      View Brochure
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Decorative ID */}
              <div className="absolute top-0 left-0 p-8 text-4xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                {project.id.toString().padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Support */}
      <section className="py-24 bg-gold/5 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-black font-serif">Interested in a <span className="text-gold italic">Site Visit?</span></h2>
          <p className="text-white/50 text-xl font-medium">Experience our construction quality firsthand. We have projects across all major hubs of Vizag.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-navy border border-gold/30 text-gold font-black rounded-2xl shadow-2xl uppercase tracking-widest text-sm"
          >
            Contact Happy Builders
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;