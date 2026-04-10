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
        <div className="text-center mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-black text-xs uppercase tracking-[0.4em]"
          >
            Support Hub
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black font-serif leading-none"
          >
            Property <span className="text-glow italic text-white/90">FAQs</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            className="h-2 bg-red mx-auto mt-6"
          />
          <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto pt-6">
            Expert insights and answers to all your real estate and property queries in Visakhapatnam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-20">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:border-red/50 transition-all shadow-2xl group flex flex-col"
            >
              <div className="flex space-x-6 mb-6">
                 <div className="w-12 h-12 bg-navy border border-white/10 rounded-2xl flex items-center justify-center shrink-0 text-gold font-black group-hover:bg-red group-hover:text-white transition-colors duration-500">Q</div>
                 <h4 className="text-2xl font-black text-white leading-tight">{faq.question}</h4>
              </div>
              <p className="text-white/50 text-lg leading-relaxed font-medium pl-18">
                 {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Blog Articles Section */}
        <div className="mt-32 pt-24 border-t border-white/5">
           <div className="text-center space-y-8">
             <motion.h2 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-4xl md:text-6xl font-black font-serif"
             >
               Recent <span className="text-gold italic">Insights</span>
             </motion.h2>
             <div className="grid md:grid-cols-3 gap-8 mt-16">
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
    </div>
  );
};

export default BlogPage;
