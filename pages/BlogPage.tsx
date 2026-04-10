import React from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-white pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <span className="text-gold font-black text-xs uppercase tracking-[0.4em] block">Vizag Real Estate Guide</span>
          <h1 className="text-4xl md:text-7xl font-black font-serif px-4 text-glow">
            2 BHK Apartments <span className="italic text-white/90">Vizag</span>
          </h1>
          <div className="w-24 h-2 bg-red mx-auto"></div>
          <p className="text-white/50 text-lg md:text-xl font-medium max-w-2xl mx-auto pt-6">
            Everything you need to know about buying affordable property in Madhurawada and finding new flats in Visakhapatnam 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12 md:mt-20">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] border border-white/10 hover:border-red/50 transition-all shadow-2xl group flex flex-col relative"
            >
              <div className="flex space-x-6 mb-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-gold text-navy rounded-full flex items-center justify-center font-black text-lg md:text-xl shrink-0 mt-1">Q</div>
                 <div className="space-y-3">
                  <h4 className="text-lg md:text-2xl font-black text-white group-hover:text-gold transition-colors leading-snug">{faq.question}</h4>
                  <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Articles Section */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-6 md:gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white font-serif">Recent <span className="text-gold italic">Insights</span></h2>
              <div className="w-24 h-1.5 bg-red mx-auto md:mx-0"></div>
            </div>
            <p className="text-white/50 max-w-sm text-center md:text-right font-medium text-sm md:text-base">
              Stay updated with the latest trends in Visakhapatnam real estate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Vizag is the New IT Hub of Andhra Pradesh",
                category: "Growth & Industry",
                excerpt: "Visakhapatnam is emerging as a major tech destination with the new Google Data Center and Adani Data Park.",
                image: "/vizag_it_hub_blog.png"
              },
              {
                title: "The Importance of East & West Facing Homes",
                category: "Vastu Science",
                excerpt: "Understand why orientation matters for your family's prosperity and natural energy flow.",
                image: "/vastu_facing_blog.png"
              },
              {
                title: "Investing in Madhurawada: 2026 Forecast",
                category: "Real Estate Tips",
                excerpt: "Analyzing the appreciation rates and infrastructure growth in Vizag's most premium residential corridor.",
                image: "/madhurawada_investment_blog.png"
              }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 text-left flex flex-col group transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60"></div>
                  <span className="absolute top-6 left-6 px-4 py-2 bg-gold/10 backdrop-blur-md border border-gold/20 text-gold text-[10px] font-black uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-xl font-bold leading-tight group-hover:text-gold transition-colors">{post.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{post.excerpt}</p>
                  <button className="text-white font-black text-[10px] uppercase tracking-widest flex items-center pt-2 group/btn">
                    Read Full Insight 
                    <svg className="w-4 h-4 ml-2 text-red group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
