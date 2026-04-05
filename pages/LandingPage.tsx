
import React from 'react';
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
  const upcomingProjects = PROJECTS.filter(p => p.status === 'Upcoming');

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen md:h-[90vh] md:min-h-[600px] overflow-hidden flex items-center py-24 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/Happy_Kuteer.jpg"
            alt="Happy Kuteer - Latest Project"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gold/90 via-gold/40 to-navy/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 md:pt-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-navy text-gold font-bold text-xs tracking-widest uppercase rounded-full">
                Vizag's 2BHK Specialists
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-navy leading-tight font-serif">
                Crafting <span className="text-red">Happy</span> <br />
                <span className="text-white drop-shadow-md">Homes.</span>
              </h1>
              <p className="text-lg md:text-xl text-navy/80 max-w-lg leading-relaxed font-semibold mx-auto md:mx-0">
                Specializing in exclusive 2 BHK flats with East and West facing options.
                Experience 100% Vastu perfection in Visakhapatnam.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button
                  onClick={() => setCurrentPage('portfolio')}
                  className="px-8 py-4 bg-red hover:bg-red/90 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-red/20 w-full sm:w-auto"
                >
                  View Our Projects
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 bg-navy hover:bg-navy/90 text-gold font-bold rounded-lg transition-all shadow-xl w-full sm:w-auto"
                >
                  Book Site Visit
                </button>
              </div>
            </div>

            <div className="relative mt-16 md:mt-0">
              <div className="absolute -inset-4 bg-white rounded-3xl opacity-30 blur-2xl"></div>
              <div className="relative bg-white/10 p-6 rounded-3xl border border-white/40 backdrop-blur-md shadow-2xl">
                <img
                  src="/Happy_Kuteer.jpg"
                  alt="Happy Kuteer - Construction Update"
                  className="rounded-2xl shadow-2xl w-full h-auto object-contain border-4 border-gold animate-pulse-slow"
                />

                <div className="absolute -bottom-10 left-0 md:bottom-12 md:-left-8 bg-gold p-6 rounded-2xl shadow-2xl max-w-[260px] md:max-w-[300px] border-l-8 border-navy z-20">
                  <p className="text-navy font-bold text-lg italic mb-2">"We Build Your Happiness"</p>
                  <p className="text-red font-bold text-sm uppercase tracking-wider">— <span className="happy-builder-font">Happy Builders</span> Vizag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gold py-12 md:py-16 border-y border-white/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-black text-navy">RERA</span>
            <span className="text-[10px] font-bold text-navy/70 uppercase tracking-widest">AP Registered</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-black text-navy">VASTU</span>
            <span className="text-[10px] font-bold text-navy/70 uppercase tracking-widest">100% Compliant</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-black text-navy">2BHK</span>
            <span className="text-[10px] font-bold text-navy/70 uppercase tracking-widest">Expert Specialty</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-black text-navy border-b-2 border-red pb-1">RELIABLE</span>
            <span className="text-[10px] font-bold text-navy/70 uppercase tracking-widest mt-1">Foundations</span>
          </div>
        </div>
      </section>

      {/* RERA and Managing Partner Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Managing Partner Image */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gold/20 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="absolute -inset-6 border-2 border-navy/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white">
                <img
                  src="/mkl.jpeg"
                  alt="Dileep Kumar Garapati"
                  className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy via-navy/60 to-transparent p-8 md:p-12 pt-32">
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">Dileep Kumar Garapati</h3>
                  <div className="flex items-center space-x-3 mt-3">
                    <div className="h-0.5 w-8 bg-gold"></div>
                    <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">Managing Partner</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Builder Details */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-navy font-serif leading-tight">
                  The Visionary <br />
                  <span className="text-red italic">Architect of Trust</span>
                </h2>
                <div className="w-20 h-1.5 bg-gold"></div>
              </div>

              <div className="space-y-6">
                <p className="text-navy/80 text-lg md:text-xl leading-relaxed font-medium">
                  Under the visionary leadership of Mr. Dileep Kumar Garapati, <span className="happy-builder-font">Happy Builders</span> has transformed the 2BHK residential landscape in Visakhapatnam.
                </p>
                <p className="text-navy/60 text-base leading-relaxed">
                  With a legacy built on absolute transparency and 100% Vastu compliance, we don't just build apartments; we craft sanctuaries. Our commitment to using Tier-1 materials like Vizag Steel and Birla Shakti Cement ensures that every <span className="happy-builder-font">Happy Builders</span> home is a fortress of safety and comfort.
                </p>
              </div>

              {/* Trust Pillars */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-navy text-xl">🏆</div>
                  <div>
                    <p className="font-bold text-navy text-sm">GVMC/VMRDA</p>
                    <p className="text-navy/50 text-[10px] uppercase font-bold tracking-wider">Approved Plans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-navy text-xl">🧱</div>
                  <div>
                    <p className="font-bold text-navy text-sm">In-table Bricks</p>
                    <p className="text-navy/50 text-[10px] uppercase font-bold tracking-wider">Structural Integrity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-navy text-xl">⚖️</div>
                  <div>
                    <p className="font-bold text-navy text-sm">Clear Titles</p>
                    <p className="text-navy/50 text-[10px] uppercase font-bold tracking-wider">Hassle-free Loans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-navy text-xl">📍</div>
                  <div>
                    <p className="font-bold text-navy text-sm">Prime Spots</p>
                    <p className="text-navy/50 text-[10px] uppercase font-bold tracking-wider">Madhurawada Experts</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center space-x-4 bg-navy px-8 py-4 rounded-2xl shadow-xl border border-white/10 group cursor-default">
                  <div className="text-left">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">AP RERA Registered</p>
                    <p className="text-gold font-black text-lg tracking-wider">PO3280035440</p>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-red transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/featured_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gold/90 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-serif">Featured 2BHK Projects</h2>
            <div className="w-24 h-1.5 bg-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-navy border-l-4 border-red pl-4">Live Developments</h3>
              <div className="grid gap-6">
                {currentProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {/* Removed Future Landmarks section as per request */}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Scrolling Section */}
      <section className="py-16 md:py-24 overflow-hidden bg-navy relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red/5 rounded-full blur-3xl -mr-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Happy <span className="text-gold">Homeowners</span></h2>
          <p className="text-gray-400 mt-4 font-medium text-sm md:text-base">Hear directly from the families living in our Vastu-compliant 2BHKs.</p>
        </div>

        {/* Scrolling Container */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-scroll hover:pause-scroll space-x-6 md:space-x-8 py-4">
            {/* Duplicated for seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] md:w-[400px] glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-white/10 backdrop-blur-xl hover:border-gold/50 transition-colors shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-2xl flex items-center justify-center font-black text-navy text-lg md:text-xl shadow-lg border-2 border-white/20">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">{t.name}</h4>
                    <p className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.project}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < t.rating ? 'text-gold' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed font-medium text-sm md:text-base">
                  "{t.text.split(/(Happy Builders)/).map((p, i) => p === 'Happy Builders' ? <span key={i} className="happy-builder-font">Happy Builders</span> : p)}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-300px * ${TESTIMONIALS.length} - 1.5rem * ${TESTIMONIALS.length})); }
          }
          @media (min-width: 768px) {
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-400px * ${TESTIMONIALS.length} - 2rem * ${TESTIMONIALS.length})); }
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .pause-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
}; // End of LandingPage component

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => { // ProjectCard moved outside
  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border-white/50">
      <div className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${project.status === 'Current' ? 'bg-red text-white' : 'bg-navy text-gold'
            }`}>
            {project.status}
          </span>
        </div>

      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-navy">{project.title}</h4>
            <div className="flex items-center text-navy/70 text-xs md:text-sm mt-1 font-semibold">
              <svg className="w-4 h-4 mr-2 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {project.location}
            </div>
          </div>
          {project.status === 'Upcoming' && project.expectedDate && (
            <div className="text-left md:text-right">
              <span className="block text-[10px] font-black text-navy/40 uppercase tracking-tighter">Expected Start</span>
              <span className="text-xs font-bold text-red">{project.expectedDate}</span>
            </div>
          )}
          {project.status === 'Current' && project.expectedDate && (
            <div className="text-left md:text-right">
              <span className="block text-[10px] font-black text-navy/40 uppercase tracking-tighter">Completion</span>
              <span className="text-xs font-bold text-navy">{project.expectedDate}</span>
            </div>
          )}
        </div>

        {project.status === 'Current' && (
          <div className="mt-4">
            <p className="text-red font-bold text-sm bg-red/5 p-2 rounded-lg text-center border border-red/10">
              ( Handover: April 2026 )
            </p>
          </div>
        )}

        <p className="text-navy/70 text-sm line-clamp-2 font-medium">{project.description}</p>
        <div className="pt-2">
          {project.title === 'Happy Kuteer' ? (
            <a
              href="/Happy_Kuteer.pdf"
              download="Happy_Kuteer_Brochure.pdf"
              className="text-navy font-bold text-sm group-hover:text-red flex items-center transition-colors cursor-pointer"
            >
              Download Brochure <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          ) : (
            <button className="text-navy font-bold text-sm group-hover:text-red flex items-center transition-colors">
              Explore Details <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
