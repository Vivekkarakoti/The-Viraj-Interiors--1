import { ArrowRight, Eye, Quote, ShieldCheck, Wallet, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="bg-surface text-primary font-body min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white font-headline uppercase tracking-[0.15em] text-[0.75rem] flex justify-between items-center px-6 md:px-12 py-6">
        <div className="font-headline text-xl md:text-2xl tracking-widest text-white">THE VIRAJ INTERIORS</div>
        <div className="hidden md:flex gap-8">
          <a className="text-white border-b border-white pb-1 transition-colors duration-300" href="#">SERVICES</a>
          <a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">PROJECTS</a>
          <a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">MATERIALS</a>
          <a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">PRICING</a>
          <a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">ABOUT</a>
          <a className="text-gray-400 hover:text-white transition-colors duration-300" href="#">CONTACT</a>
        </div>
        <button className="bg-white text-black px-4 md:px-6 py-2 tracking-widest font-bold hover:bg-gray-200 transition-all active:scale-95 duration-200">WHATSAPP</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover" 
          alt="ultra-modern luxury living room" 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-6 max-w-5xl mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-headline text-5xl md:text-[5.5rem] leading-[1.1] text-white mb-8">Because Every Home Deserves a Soul</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body font-light text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            End-to-end interior design and renovation solutions across Delhi-NCR — crafted with emotion, elegance, and precision. Designed for apartments, builder floors, and luxury homes — with complete control over design, materials, and budget.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 font-label text-xs tracking-[0.2em] uppercase font-bold hover:bg-gray-200 transition-colors">Book Free Consultation</button>
            <button className="bg-transparent border border-white text-white px-8 py-4 font-label text-xs tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all">WhatsApp Us</button>
            <button className="bg-transparent border border-white text-white px-8 py-4 font-label text-xs tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all">Call Now</button>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-black py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-col md:flex-row items-center gap-4 text-white text-center md:text-left">
            <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
            <span className="font-label text-[10px] md:text-xs tracking-widest uppercase">Waterproof Materials</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col md:flex-row items-center gap-4 text-white text-center md:text-left">
            <Eye className="w-6 h-6" strokeWidth={1.5} />
            <span className="font-label text-[10px] md:text-xs tracking-widest uppercase">Transparent Pricing</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col md:flex-row items-center gap-4 text-white text-center md:text-left">
            <Zap className="w-6 h-6" strokeWidth={1.5} />
            <span className="font-label text-[10px] md:text-xs tracking-widest uppercase">Fast Execution</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col md:flex-row items-center gap-4 text-white text-center md:text-left">
            <Wallet className="w-6 h-6" strokeWidth={1.5} />
            <span className="font-label text-[10px] md:text-xs tracking-widest uppercase">Designed for Every Budget</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <h2 className="font-headline text-4xl md:text-5xl italic">Our Work, Built with Precision</h2>
          <div className="w-24 h-[1px] bg-black mb-2 md:mb-4"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          <div className="group relative h-[400px] md:h-[800px] overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="contemporary minimalist dining area" 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2906&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 md:p-12">
              <div className="text-white">
                <p className="font-label text-xs tracking-[0.15em] mb-2 uppercase">RESIDENTIAL | GURGAON</p>
                <h3 className="text-2xl md:text-3xl font-headline italic">The Monolith Residence</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="group relative h-[300px] md:h-[384px] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="luxury master bedroom" 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2960&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="group relative h-[300px] md:h-[384px] overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="sleek modern kitchen" 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2960&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Horizontal Scroll */}
      <section className="py-20 md:py-32 bg-surface-container overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12 mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl">Interior Solutions, Designed Around You</h2>
        </motion.div>
        <div className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 no-scrollbar pb-8 snap-x">
          {/* Modular Kitchen */}
          <div className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] group relative overflow-hidden bg-black snap-center">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" 
              alt="ultra-modern minimalist kitchen" 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-headline mb-2">Modular Kitchen</h3>
              <p className="text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Precision Engineering</p>
            </div>
          </div>
          {/* Wardrobes */}
          <div className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] group relative overflow-hidden bg-black snap-center">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" 
              alt="luxury walk-in closet" 
              src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2874&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-headline mb-2">Wardrobes</h3>
              <p className="text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Curated Storage</p>
            </div>
          </div>
          {/* Master Bedroom */}
          <div className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] group relative overflow-hidden bg-black snap-center">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" 
              alt="elegant master bedroom" 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2918&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-headline mb-2">Master Bedroom</h3>
              <p className="text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Sanctuary Design</p>
            </div>
          </div>
          {/* Full Home Interiors */}
          <div className="min-w-[300px] md:min-w-[400px] h-[400px] md:h-[500px] group relative overflow-hidden bg-black snap-center">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" 
              alt="complete luxury home interior" 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-headline mb-2">Full Home Interiors</h3>
              <p className="text-xs font-label uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Total Transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-surface">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12 mb-16 md:mb-20 text-center">
          <h2 className="font-headline text-4xl md:text-5xl">The Architectural Journey</h2>
        </motion.div>
        <div className="px-6 md:px-12 flex flex-wrap lg:flex-nowrap justify-start lg:justify-between gap-8 md:gap-12 overflow-x-auto no-scrollbar snap-x">
          {[
            { num: '01', label: 'Consultation' },
            { num: '02', label: 'Site Survey' },
            { num: '03', label: 'Concept Design' },
            { num: '04', label: 'Material Selection' },
            { num: '05', label: 'Execution' },
            { num: '06', label: 'Quality Check' },
            { num: '07', label: 'Handover' },
          ].map((step) => (
            <div key={step.num} className="min-w-[150px] md:min-w-[200px] text-center snap-center">
              <span className="text-5xl md:text-7xl font-headline text-surface-container font-bold block mb-4">{step.num}</span>
              <p className="font-label text-[10px] md:text-xs uppercase tracking-widest">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[400px] lg:h-auto lg:min-h-[600px] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover" 
            alt="architect's desk with blueprint rolls" 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-20 flex flex-col justify-center">
          <h2 className="font-headline text-3xl md:text-4xl italic mb-8 md:mb-12">The Viraj Edge</h2>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {[
              { title: 'Emotion-First Design', desc: "We don't just fill spaces; we create atmospheres that resonate with your personality." },
              { title: 'Unmatched Materials', desc: 'Direct sourcing from top manufacturers ensures premium quality without the middleman markup.' },
              { title: 'Fixed Budgets', desc: 'What we quote is what you pay. No hidden costs or mid-project escalations.' },
              { title: 'In-House Production', desc: 'Our factory-finished modules ensure millimeter precision and superior durability.' },
              { title: 'Warranty Assurance', desc: 'Up to 10 years of warranty on our signature woodworks and structural solutions.' },
              { title: 'Dedicated Manager', desc: 'One point of contact from your first visit to the final key handover.' },
            ].map((feature, idx) => (
              <div key={idx} className="border-b border-black/10 pb-4">
                <h4 className="font-label text-xs tracking-widest uppercase mb-2 font-bold">{feature.title}</h4>
                <p className="text-secondary text-sm md:text-base font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-headline text-4xl md:text-5xl text-center mb-16 md:mb-20">Investment Tiers</motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="border border-outline-variant p-8 md:p-12 text-center hover:bg-black hover:text-white transition-all duration-500 group">
            <h3 className="font-headline text-2xl md:text-3xl mb-4">The Gourmet Kitchen</h3>
            <p className="font-label text-[10px] md:text-xs uppercase tracking-widest mb-8 opacity-60">Modular & Functional</p>
            <div className="text-4xl md:text-5xl font-headline mb-8 italic">₹1.8L+</div>
            <ul className="text-left space-y-4 mb-12 text-sm font-light">
              <li>- Marine Grade Plywood</li>
              <li>- Soft Close German Hardware</li>
              <li>- Choice of Laminates</li>
              <li>- 45-Day Delivery</li>
            </ul>
            <button className="w-full py-4 border border-current font-bold uppercase tracking-widest text-[0.6rem] hover:bg-white hover:text-black transition-colors">Inquire</button>
          </div>
          
          <div className="border border-black p-8 md:p-12 text-center bg-black text-white transform lg:scale-105 shadow-xl relative mt-8 lg:mt-0">
            <div className="bg-white text-black text-[0.6rem] py-1 px-3 inline-block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-widest font-bold">MOST POPULAR</div>
            <h3 className="font-headline text-2xl md:text-3xl mb-4">Complete 2BHK</h3>
            <p className="font-label text-[10px] md:text-xs uppercase tracking-widest mb-8 opacity-60">Signature Full Home</p>
            <div className="text-4xl md:text-5xl font-headline mb-8 italic">₹8.5L+</div>
            <ul className="text-left space-y-4 mb-12 text-sm font-light">
              <li>- Kitchen, Wardrobes, TV Unit</li>
              <li>- False Ceiling & Lighting</li>
              <li>- Premium Wall Finishes</li>
              <li>- Complete Site Management</li>
            </ul>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-[0.6rem] hover:bg-gray-200 transition-colors">Get Estimate</button>
          </div>
          
          <div className="border border-outline-variant p-8 md:p-12 text-center hover:bg-black hover:text-white transition-all duration-500 group mt-8 lg:mt-0">
            <h3 className="font-headline text-2xl md:text-3xl mb-4">Bespoke Suite</h3>
            <p className="font-label text-[10px] md:text-xs uppercase tracking-widest mb-8 opacity-60">Luxury Master Wardrobes</p>
            <div className="text-4xl md:text-5xl font-headline mb-8 italic">₹1.2L+</div>
            <ul className="text-left space-y-4 mb-12 text-sm font-light">
              <li>- Floor-to-Ceiling Design</li>
              <li>- Integrated LED Profiles</li>
              <li>- Glass & Metal Accents</li>
              <li>- Custom Internal Organizers</li>
            </ul>
            <button className="w-full py-4 border border-current font-bold uppercase tracking-widest text-[0.6rem] hover:bg-white hover:text-black transition-colors">Inquire</button>
          </div>
        </motion.div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-headline text-4xl md:text-5xl italic mb-12 md:mb-16">Serving Delhi-NCR</motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Delhi architecture" 
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2940&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-headline text-3xl italic">Delhi</span>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden group lg:translate-y-12">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Gurgaon skyline" 
              src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=2952&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-headline text-3xl italic">Gurgaon</span>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Noida architecture" 
              src="https://images.unsplash.com/photo-1622194993926-1801586d460f?q=80&w=2940&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-headline text-3xl italic">Noida</span>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden group lg:translate-y-12">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Ghaziabad architecture" 
              src="https://images.unsplash.com/photo-1566324881097-f0a996bd1f30?q=80&w=2940&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-headline text-3xl italic">Ghaziabad</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-surface">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-16 h-16 text-surface-container mx-auto mb-8" strokeWidth={1} />
          <p className="font-headline text-2xl md:text-4xl italic leading-relaxed mb-12 text-primary">
            "The Viraj Interiors transformed our 3BHK into a space that feels like a quiet sanctuary. Their attention to detail in the modular kitchen and the subtle lighting in our bedroom is simply world-class. Professional, timely, and worth every penny."
          </p>
          <div className="flex flex-col items-center">
            <span className="font-label text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Mr. Ankit Sharma</span>
            <span className="text-secondary text-xs md:text-sm mt-1">DLF Kings Court, GK II</span>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-outline-variant"></div>
            <div className="w-2 h-2 bg-outline-variant"></div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-24 md:py-32 px-6 md:px-12 text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover" 
            alt="abstract architectural textures" 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl mb-6 md:mb-8">Let's Design Your Space</h2>
          <p className="font-body text-lg md:text-xl font-light mb-10 md:mb-12 max-w-2xl mx-auto opacity-80">Start your journey toward a more beautiful home today with a complimentary design consultation.</p>
          <button className="bg-white text-black px-8 md:px-12 py-4 md:py-5 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-[10px] md:text-xs">Book Free Consultation</button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white font-body font-light text-sm tracking-wide w-full border-t border-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-16 md:py-20 max-w-full">
          <div className="col-span-1">
            <div className="font-headline text-2xl md:text-3xl text-white mb-6 md:mb-8">THE VIRAJ INTERIORS</div>
            <p className="text-gray-500 max-w-xs leading-relaxed text-xs md:text-sm">Defining structural elegance and interior innovation across the heart of India's capital region.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 md:mb-8 uppercase tracking-widest text-[0.65rem]">Services</h5>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
              <li><a className="hover:text-white transition-opacity" href="#">RESIDENTIAL</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">COMMERCIAL</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">HOSPITALITY</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">RENOVATION</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 md:mb-8 uppercase tracking-widest text-[0.65rem]">Locations</h5>
            <ul className="space-y-3 md:space-y-4 text-gray-500 text-xs md:text-sm">
              <li><a className="hover:text-white transition-opacity" href="#">SOUTH DELHI</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">GURGAON</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">NOIDA</a></li>
              <li><a className="hover:text-white transition-opacity" href="#">FARIDABAD</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 md:mb-8 uppercase tracking-widest text-[0.65rem]">Newsletter</h5>
            <p className="text-gray-500 mb-6 text-xs md:text-sm">Receive architectural insights and project updates.</p>
            <div className="flex border-b border-gray-800 pb-2">
              <input className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-gray-700 text-[10px] md:text-xs uppercase tracking-widest outline-none" placeholder="Email Address" type="email" />
              <button className="text-white hover:text-gray-300 transition-colors"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 py-6 md:py-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest text-gray-600">
          <span className="text-center md:text-left">© THE VIRAJ INTERIORS. ARCHITECTURAL INTEGRITY.</span>
          <div className="flex gap-6 md:gap-8">
            <a className="hover:text-white transition-colors" href="#">INSTAGRAM</a>
            <a className="hover:text-white transition-colors" href="#">PINTEREST</a>
            <a className="hover:text-white transition-colors" href="#">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
