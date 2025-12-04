import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond, Hammer, MapPin, Instagram, Sparkles, ShoppingBag, Menu, X, Phone, Mail, Clock, Star, Plus, Check } from 'lucide-react';
import { ARTISTS, PRODUCTS, TIMELINE, SOCIAL_POSTS } from './constants';

// --- Variants for Animation ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } }
};

// --- Custom Components ---

const DiamondShowcase = () => {
  return (
    <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-12 perspective-1000 z-10 opacity-60">
      <motion.div
        className="w-full h-full preserve-3d relative"
        animate={{ rotateY: 360, rotateX: 10 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {/* Central Glowing Core */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
           <div className="w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Main Diamond Outline (Front) */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d" style={{ transform: "translateZ(30px)" }}>
          <Diamond size={160} strokeWidth={0.8} className="text-yellow-400/70 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
        </div>
        
        {/* Main Diamond Outline (Back) */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d" style={{ transform: "rotateY(180deg) translateZ(30px)" }}>
          <Diamond size={160} strokeWidth={0.8} className="text-yellow-600/50 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]" />
        </div>

        {/* Cross Planes (Structure) */}
        <div className="absolute inset-0 flex items-center justify-center preserve-3d" style={{ transform: "rotateY(90deg)" }}>
           <div className="w-36 h-36 border border-yellow-500/20 rotate-45"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center preserve-3d" style={{ transform: "rotateX(90deg)" }}>
           <div className="w-36 h-36 border border-yellow-500/20 rounded-full"></div>
        </div>
        
        {/* Orbiting Particles */}
        <div className="absolute inset-0 preserve-3d animate-[spin_5s_linear_infinite_reverse]">
           <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/60 rounded-full shadow-[0_0_5px_white]"></div>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Listen to custom event for adding to cart
  useEffect(() => {
    const handleAddToCart = () => setCartCount(prev => prev + 1);
    window.addEventListener('addToCart', handleAddToCart);
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('addToCart', handleAddToCart);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl tracking-wide text-white leading-none"><span className="font-script">Lucky</span> <span className="font-anton uppercase text-xl md:text-2xl">THE JEWELER</span></span>
          <span className="text-[10px] text-yellow-500 uppercase tracking-[0.2em] font-bold">x Parbo Goud</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold tracking-widest uppercase">
          <a href="#about" className="hover:text-yellow-500 transition-colors">Onze Roots</a>
          <a href="#artists" className="hover:text-yellow-500 transition-colors">De Scene</a>
          <a href="#shop" className="hover:text-yellow-500 transition-colors">Webshop</a>
          <a href="#custom" className="px-6 py-2 bg-yellow-500 text-black font-anton tracking-wider hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(234,179,8,0.4)]">
            Maak Afspraak
          </a>
          <div className="relative cursor-pointer hover:text-yellow-500 transition-colors group">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Toggle & Cart */}
        <div className="flex items-center gap-5 md:hidden text-white">
          <div className="relative">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-500">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="font-anton text-4xl text-white uppercase hover:text-yellow-500">Onze Roots</a>
            <a href="#artists" onClick={() => setIsOpen(false)} className="font-anton text-4xl text-white uppercase hover:text-yellow-500">De Scene</a>
            <a href="#shop" onClick={() => setIsOpen(false)} className="font-anton text-4xl text-white uppercase hover:text-yellow-500">Webshop</a>
            <a href="#custom" onClick={() => setIsOpen(false)} className="font-anton text-4xl text-yellow-500 uppercase border-b-2 border-yellow-500 pb-1">Maak Afspraak</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-texture pt-24 md:pt-0 pb-32 md:pb-40">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center content-z">
        {/* Changed from whileInView to animate="visible" to ensure visibility on load */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn}>
             <DiamondShowcase />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-3 px-4 py-2 border border-yellow-500/30 bg-black/60 backdrop-blur-md rounded-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-xs md:text-sm text-yellow-500 tracking-widest uppercase font-bold">Rotterdam • Den Haag • Sinds 1993</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl tracking-tight mb-6 text-white drop-shadow-2xl leading-[0.9]">
            <span className="font-script">Lucky</span> <span className="gold-text-gradient block md:inline relative font-anton uppercase text-6xl md:text-8xl">THE JEWELER</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Van <span className="text-white font-bold">Parbo Goud</span> legacy naar de <span className="text-white font-bold">#1 Hip-Hop Juwelier</span> van Nederland. 
            Echt goud. Echte customs. <span className="text-yellow-500">Geen plated onzin.</span>
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto md:max-w-none">
            <a href="#shop" className="w-full md:w-auto px-12 py-5 bg-white text-black font-anton text-xl uppercase tracking-wider hover:bg-zinc-200 transition-transform transform hover:-translate-y-1 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              <ShoppingBag size={20} /> Shop Collectie
            </a>
            <a href="#custom" className="w-full md:w-auto px-12 py-5 border-2 border-yellow-500 bg-yellow-500/10 text-yellow-500 font-anton text-xl uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition-all backdrop-blur-sm flex items-center justify-center gap-2">
              <Hammer size={20} /> Custom Aanvraag
            </a>
          </motion.div>
        </motion.div>
      </div>
      
       {/* Infinite Marquee - Bottom of Hero */}
       <div className="absolute bottom-0 w-full bg-black/80 border-t border-zinc-800 py-3 overflow-hidden backdrop-blur-sm z-20">
          <div className="flex whitespace-nowrap animate-marquee">
             {[...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-8">
                   <span className="text-zinc-500 font-anton uppercase text-xl tracking-widest opacity-50">ZEFANIO</span>
                   <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                   <span className="text-zinc-500 font-anton uppercase text-xl tracking-widest opacity-50">DOPEBWOY</span>
                   <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                   <span className="text-zinc-500 font-anton uppercase text-xl tracking-widest opacity-50">RONNIE FLEX</span>
                   <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                   <span className="text-zinc-500 font-anton uppercase text-xl tracking-widest opacity-50">VIBEZ KARTEL</span>
                   <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                   <span className="text-zinc-500 font-anton uppercase text-xl tracking-widest opacity-50">JOSYLVIO</span>
                   <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                </div>
             ))}
          </div>
       </div>
       <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="about" className="py-24 bg-stone-texture border-t border-zinc-900">
      <div className="container mx-auto px-6 content-z">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">De Origin Story</h2>
            <h3 className="text-5xl md:text-7xl font-anton text-white mb-8 leading-none">
              VAN PARAMARIBO TOT<br /> <span className="text-zinc-600">ROTTERDAM-WEST</span>
            </h3>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Geen boardroom business. Wij begonnen op <strong className="text-white">Grote Visserijstraat 39</strong>. 
              Mijn opa's brachten de ambacht mee uit Suriname, en mijn vader bouwde <strong className="text-white">Parbo Goud</strong> steen voor steen op.
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Ik groeide op in de winkel, tussen het goud en de verhalen. Maar ik hoorde de straat. Shows als 
              <em> Pimp My Ride</em> en de US rap scene inspireerden me. Ik wilde die shine naar hier halen.
            </p>
            <div className="p-6 bg-zinc-900 border border-zinc-800 border-l-4 border-l-yellow-500">
              <p className="text-lg text-zinc-300 leading-relaxed font-medium italic">
                "Samen met een gepensioneerde tandtechnicus uit de buurt ontwikkelde ik het geheime recept voor massieve gouden grillz. Geen dunne plaatjes. Massief goud."
              </p>
            </div>
          </motion.div>

          {/* Timeline UI */}
          <div className="relative border-l-2 border-zinc-800 ml-4 lg:ml-0 space-y-12 pl-8 lg:pl-12 py-4">
             {TIMELINE.map((event, index) => (
               <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
               >
                 <span className="absolute -left-[43px] lg:-left-[59px] top-1 h-5 w-5 rotate-45 border-4 border-zinc-950 bg-zinc-800 group-hover:bg-yellow-500 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.8)] transition-all duration-300"></span>
                 <span className="text-yellow-500 font-anton text-3xl block mb-1 drop-shadow-md">{event.year}</span>
                 <h4 className="text-white font-bold text-xl mb-2 font-anton uppercase tracking-wide">{event.title}</h4>
                 <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{event.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DualBrandSection = () => {
  return (
    <section className="py-24 bg-stone-texture border-t border-zinc-900">
      <div className="container mx-auto px-6 content-z">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-anton text-white uppercase tracking-wide">Eén Familie. Twee Styles.</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Parbo Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-zinc-900 border border-zinc-800 p-10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-700/10 rounded-full blur-3xl group-hover:bg-zinc-600/20 transition-all"></div>
            <div className="relative z-10">
              <div className="mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center transform -rotate-6 shadow-lg border border-zinc-700">
                <Hammer className="text-zinc-400" size={32} />
              </div>
              <h3 className="text-4xl font-anton text-white mb-2 tracking-wide">PARBO GOUD</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6 font-bold">Sinds 1993 • Heritage</p>
              <p className="text-zinc-400 mb-8 leading-relaxed h-24">
                De vertrouwde juwelier voor de familie. Voor bruiloften, geboortes en de Surinaamse/Hindoestaanse community. 
                Eerlijk goud, eerlijke prijzen.
              </p>
              <a href="#shop" className="inline-block bg-zinc-800 text-white font-anton py-3 px-6 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors">
                Naar de Shop
              </a>
            </div>
          </motion.div>

          {/* Lucky Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-black border border-yellow-900/40 p-10 overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.05)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="mb-6 bg-yellow-900/20 w-16 h-16 flex items-center justify-center transform rotate-6 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                <Diamond className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-4xl font-anton text-white mb-2 tracking-wide">LUCKY THE JEWELER</h3>
              <p className="text-yellow-600 text-sm uppercase tracking-widest mb-6 font-bold">Custom • Grillz • VVS</p>
              <p className="text-zinc-400 mb-8 leading-relaxed h-24">
                De #1 Hip-Hop Juwelier van NL. Waar artiesten komen om te flexen. 
                Custom pendants, massieve gouden grillz en VVS settings die anders hitten.
              </p>
              <a href="#custom" className="inline-block bg-yellow-500 text-black font-anton py-3 px-6 uppercase tracking-wider text-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Start Custom Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArtistWall = () => {
  return (
    <section id="artists" className="pt-32 pb-24 bg-black bg-stone-texture border-t border-zinc-900">
      <div className="container mx-auto px-6 content-z">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase mb-2">Social Proof</h2>
            <h3 className="text-5xl md:text-7xl font-anton text-white uppercase tracking-tight leading-none">
              Gedragen Door<br/>De Scene
            </h3>
          </motion.div>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-zinc-500 max-w-md text-right hidden md:block mt-4 md:mt-0 font-medium"
          >
            Organische liefde. Geen betaalde promo. <br/>De cultuur kiest ons omdat de kwaliteit spreekt.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {ARTISTS.map((artist) => (
            <motion.div 
              key={artist.id}
              variants={scaleIn}
              className="group relative aspect-square bg-zinc-900 overflow-hidden flex flex-col justify-end p-6 border border-zinc-800 hover:border-yellow-500/50 transition-all cursor-default"
            >
              {/* Abstract Gradient Placeholder mimicking a moody album cover style */}
              <div className={`absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-80 group-hover:scale-110 transition-transform duration-700`}></div>
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90`}></div>
              
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] uppercase font-bold tracking-wider mb-3 border border-yellow-500/20 backdrop-blur-md">
                  {artist.type}
                </span>
                <h4 className="text-2xl md:text-3xl font-anton text-white uppercase leading-none mb-1 tracking-wide">{artist.name}</h4>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{artist.piece}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ShopSection = () => {
  const [activeCategory, setActiveCategory] = useState("Alles");

  const triggerAddToCart = () => {
    window.dispatchEvent(new Event('addToCart'));
  };

  return (
    <section id="shop" className="py-24 bg-stone-texture border-t border-zinc-900">
      <div className="container mx-auto px-6 content-z">
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-[0.2em] text-sm font-bold">Webshop</span>
          <h2 className="text-5xl md:text-7xl font-anton text-white uppercase mt-2 mb-6">Parbo Collectie</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Alles", "Chains", "Rings", "Pendants"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm uppercase font-bold tracking-wider border transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <p className="text-zinc-400 max-w-xl mx-auto font-medium">
            Ready-to-wear pieces direct uit voorraad. Vandaag besteld, snel in huis of ophalen in Rotterdam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                {product.tag && (
                  <div className="absolute top-3 left-3 z-20 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-lg">
                    {product.tag}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover w-full h-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all"></div>
                
                {/* Add to Cart Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                  <button 
                    onClick={triggerAddToCart}
                    className="w-full bg-white text-black font-anton uppercase py-3 text-sm hover:bg-yellow-500 hover:text-black transition-colors flex items-center justify-center gap-2 shadow-xl active:scale-95 transform duration-100"
                  >
                    <Plus size={16} /> In Winkelwagen
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-anton text-white uppercase tracking-wide mb-1 leading-tight group-hover:text-yellow-500 transition-colors">{product.title}</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Op voorraad</p>
                </div>
                <span className="text-white font-anton text-lg">€{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button className="px-12 py-4 border-2 border-zinc-800 text-white font-anton uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all text-lg">
                Bekijk Alle Producten
            </button>
        </div>
      </div>
    </section>
  );
};

const CustomSection = () => {
  return (
    <section id="custom" className="py-24 relative overflow-hidden bg-black border-y border-zinc-900">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 content-z">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
             <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-yellow-500 animate-pulse" size={24} />
                <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm">Lucky The Jeweler Customs</span>
             </div>
             <h2 className="text-6xl md:text-8xl font-anton text-white uppercase leading-[0.85] mb-8">
               Custom Only.<br/> No Copies.
             </h2>
             <p className="text-xl text-zinc-400 mb-10 leading-relaxed border-l-4 border-yellow-500 pl-6 bg-zinc-900/30 py-4 pr-4">
               Ik verkoop geen cultuur in een doosje. Elke custom piece, grill of hanger wordt 1-op-1 ontworpen. 
               Daarom vind je hier geen "Koop Nu" knop voor mijn art.
             </p>

             <div className="space-y-8 mb-12">
               {[
                 { title: "Vision Call / DM", desc: "We bespreken je budget, idee en references. Jij hebt de vision, ik fix de executie." },
                 { title: "Design & Wax", desc: "Ik maak een 3D mold of wax model. We passen aan totdat het perfect is." },
                 { title: "Set, Polish, Bless", desc: "Gieten in 14k/18k goud. Hand-setting VVS diamonds. Ophalen in Rotterdam." }
               ].map((step, idx) => (
                 <div key={idx} className="flex gap-6 group">
                   <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-yellow-500 font-bold font-anton text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                     {idx + 1}
                   </div>
                   <div>
                     <h4 className="text-white font-bold uppercase font-anton tracking-wide text-xl mb-1 group-hover:text-yellow-500 transition-colors">{step.title}</h4>
                     <p className="text-zinc-500 text-sm font-medium">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
               <button className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-anton uppercase tracking-wider hover:bg-[#1dbf57] transition-all rounded-sm shadow-[0_0_25px_rgba(37,211,102,0.2)] text-lg">
                 <Phone size={22} /> WhatsApp Aanvraag
               </button>
               <button className="flex items-center justify-center gap-3 px-8 py-5 border border-zinc-700 text-zinc-300 font-anton uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all rounded-sm text-lg">
                 <Mail size={22} /> Email Mij
               </button>
             </div>
          </motion.div>

          {/* Visual Showcase Block */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[600px] bg-zinc-900/50 border border-zinc-800 flex items-center justify-center overflow-hidden group"
          >
             {/* Stylized placeholder for a hero product shot */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black/80 to-black"></div>
             
             {/* Animated Rings/Circles */}
             <div className="absolute w-[500px] h-[500px] border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
             <div className="absolute w-[350px] h-[350px] border border-dashed border-yellow-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
             
             <div className="text-center z-10 p-8 transform group-hover:scale-105 transition-transform duration-700">
               <Diamond size={120} strokeWidth={0.5} className="text-yellow-500 mx-auto mb-8 drop-shadow-[0_0_40px_rgba(234,179,8,0.4)] animate-pulse" />
               <h3 className="text-5xl font-anton text-white uppercase tracking-widest mb-4">The "Lucky 7" Standard</h3>
               <div className="flex justify-center gap-4 text-xs font-anton text-yellow-500 uppercase tracking-widest mt-6">
                 <span className="border border-yellow-500/30 bg-yellow-500/5 px-4 py-2">VVS Clarity</span>
                 <span className="border border-yellow-500/30 bg-yellow-500/5 px-4 py-2">G-Color</span>
                 <span className="border border-yellow-500/30 bg-yellow-500/5 px-4 py-2">18K Solid</span>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Socials = () => {
  return (
    <section className="py-16 bg-stone-texture border-y border-zinc-900">
      <div className="container mx-auto px-6 mb-10 flex flex-col md:flex-row justify-between items-center content-z">
        <div className="mb-6 md:mb-0 text-center md:text-left">
           <h2 className="text-3xl font-anton text-white uppercase tracking-wide">Live Uit De Shop</h2>
           <p className="text-zinc-500 text-sm font-medium">Volg het proces <span className="text-yellow-500">@luckythejeweler</span></p>
        </div>
        <div className="flex gap-4">
           <a href="#" className="p-4 bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition-colors rounded-sm"><Instagram size={24} /></a>
           <a href="#" className="px-6 py-2 bg-zinc-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center rounded-sm">TikTok</a>
           <a href="#" className="px-6 py-2 bg-zinc-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center rounded-sm">Snapchat</a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 content-z">
        {SOCIAL_POSTS.map((post) => (
          <div key={post.id} className="bg-zinc-900 border border-zinc-800 p-4 hover:border-zinc-600 transition-colors cursor-pointer">
             <div className="aspect-square bg-zinc-800 mb-4 overflow-hidden relative group">
               <img src={post.image} alt="Social post" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
               <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-xs text-white flex items-center gap-1 font-bold tracking-wide backdrop-blur-md">
                 <Star size={12} className="fill-yellow-500 text-yellow-500" /> {post.likes}
               </div>
             </div>
             <p className="text-zinc-300 text-sm font-medium leading-snug">{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-10 border-t border-zinc-900 bg-stone-texture">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 content-z">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-anton text-white uppercase mb-6 tracking-wide leading-none">LUCKY THE JEWELER <span className="text-zinc-700">/</span> PARBO GOUD</h2>
          <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed font-medium">
            Van Paramaribo roots naar Rotterdam streets. Als het op je vision board staat, kunnen wij het in goud maken.
          </p>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-wider border border-yellow-500/20 bg-yellow-500/5 px-4 py-2">
               <Star size={14} className="fill-yellow-500" /> Google Rated 4.8/5
             </div>
             <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider border border-zinc-800 bg-zinc-900 px-4 py-2">
               <Check size={14} className="text-green-500" /> 33+ Jaar Ervaring
             </div>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-white font-anton uppercase tracking-wide text-xl mb-6 flex items-center gap-3"><MapPin size={24} className="text-yellow-500" /> Locaties</h4>
          <ul className="space-y-8 border-l border-zinc-800 pl-6">
            <li className="group cursor-pointer">
              <span className="text-yellow-500 font-anton block text-lg uppercase tracking-wide group-hover:text-white transition-colors">Rotterdam (HQ)</span>
              <span className="text-zinc-300 block font-medium mt-1">Grote Visserijstraat 39</span>
              <span className="text-zinc-600 text-xs uppercase font-bold tracking-widest mt-1 block">Delfshaven</span>
            </li>
            <li className="group cursor-pointer">
              <span className="text-white font-anton block text-lg uppercase tracking-wide group-hover:text-yellow-500 transition-colors">Den Haag</span>
              <span className="text-zinc-300 block font-medium mt-1">Hoefkade 820</span>
              <span className="text-zinc-600 text-xs uppercase font-bold tracking-widest mt-1 block">Schilderswijk</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white font-anton uppercase tracking-wide text-xl mb-6 flex items-center gap-3"><Clock size={24} className="text-zinc-500" /> Openingstijden</h4>
          <ul className="space-y-4 text-zinc-400 text-sm font-medium">
            <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Ma:</span> <span className="text-white">13:00 - 18:00</span></li>
            <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Di - Vr:</span> <span className="text-white">10:00 - 18:00</span></li>
            <li className="flex justify-between border-b border-zinc-900 pb-2"><span>Za:</span> <span className="text-white">10:00 - 17:00</span></li>
            <li className="flex justify-between text-zinc-600 pt-1"><span>Zo:</span> <span>Gesloten</span></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest font-bold content-z">
        <p>&copy; {new Date().getFullYear()} Parbo-Goud Cachet. Alle rechten voorbehouden.</p>
        <p>Jeweler of the scene. Family of the city.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-white selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <StorySection />
      <DualBrandSection />
      <ArtistWall />
      <ShopSection />
      <CustomSection />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;