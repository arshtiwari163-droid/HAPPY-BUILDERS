
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';

const PortfolioPage: React.FC = () => {
  // Show all projects except upcoming ones unless user wants them
  // Assuming user wants 1, 2, 3, 4 (which are Current and Completed)
  const portfolioProjects = PROJECTS.filter(p => p.status !== 'Upcoming').sort((a, b) => (a.id - b.id)); // Sort by ID ascending

  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-off-white text-navy overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden" ref={headerRef}>
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-navy/5 pattern-grid-lg"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-bold font-serif mb-6">
              Our <span className="text-red relative inline-block">
                Masterpieces
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-gold/30 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.span>
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-navy/70 font-light max-w-2xl mx-auto leading-relaxed">
              Crafting landmarks that define the skyline of Visakhapatnam since 2021.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-navy/50 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">

        {/* Previous Works Grid */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">Project Portfolio</h2>
              <div className="w-24 h-1 bg-red mx-auto mt-4"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl h-[500px] md:h-[600px] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500 z-10 pointer-events-none"></div>

                <div className="h-[55%] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-navy shadow-sm z-20">
                    {project.status === 'Completed' ? 'Completed' : 'Current'}
                  </div>
                </div>

                <div className="h-[45%] p-6 md:p-8 flex flex-col justify-between relative bg-white">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-navy mb-2 font-serif group-hover:text-red transition-colors">{project.title}</h4>
                    <p className="text-gold font-bold text-xs uppercase tracking-widest mb-4">{project.location}</p>
                    <p className="text-sm text-navy/60 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-navy/5 flex justify-between items-center">
                    <span className="text-xs font-bold text-navy/40">ID: {project.id.toString().padStart(2, '0')}</span>
                    <button className="bg-navy text-white px-5 py-2 rounded-full text-sm font-bold flex items-center shadow-lg hover:bg-red hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                      View Details <span className="ml-2 text-lg">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;