import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import TrustindexWidget from '../components/ui/TrustindexWidget';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/home1.png',
    '/home2.png',
    '/home3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const specializations = [
    {
      title: "Chirurgia Parodontale",
      desc: "Quando le gengive sono infiammate e si ritirano.",
      image: "/Chirurgia Parodontale.png",
      path: "/specializzazioni#chirurgia-parodontale"
    },
    {
      title: "Implantologia e Protesi",
      desc: "Hai perso uno o più denti? Ritorna a sorridere.",
      image: "/Implantologia e Protesi.png",
      path: "/specializzazioni#implantologia-e-protesi"
    },
    {
      title: "Ortodonzia Invisibile",
      desc: "Denti storti? Soluzioni discrete e moderne.",
      image: "/Ortodonzia Invisibile.png",
      path: "/specializzazioni#ortodonzia-invisibile"
    },
    {
      title: "Conservativa Estetica",
      desc: "Ripristiniamo la forma e la struttura del tuo dente.",
      image: "/Conservativa Estetica.png",
      path: "/specializzazioni#conservativa-estetica"
    }
  ];

  const features = [
    {
      title: 'Esperienza',
      description: 'Oltre 40 anni di storia e continua evoluzione tecnologica.',
      image: '/esperienza.png',
      alt: 'Esperienza dello studio'
    },
    {
      title: 'Qualità',
      description: 'Utilizziamo solo i migliori materiali e le tecniche più moderne.',
      image: '/qualita.png',
      alt: 'Qualità dei trattamenti'
    },
    {
      title: 'Paziente al Centro',
      description: 'Piani di cura personalizzati e attenzione al comfort.',
      image: '/paziente-al-centro.png',
      alt: 'Paziente al centro del percorso di cura'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={slides[currentSlide]} 
                alt={`Studio slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-6 bg-white/50 px-4 py-1 rounded-full backdrop-blur-sm">Eccellenza Milanese dal 1979</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-8">
              Ricerca dell’eccellenza <span className="italic text-slate-500">estetica</span>
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Applicata alla salute in ogni branca dell’odontoiatria. Benvenuti in Re Smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contatti" className="btn-primary flex items-center justify-center group">
                Prendi un appuntamento
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/specializzazioni" className="btn-outline flex items-center justify-center backdrop-blur-sm">
                Scopri le specializzazioni
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'bg-slate-900 w-8' : 'bg-slate-400'}`}
            />
          ))}
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-slate-900 mb-6">Specializzazioni in evidenza</h2>
              <p className="text-slate-500">Offriamo trattamenti all'avanguardia con un approccio conservativo e un'attenzione maniacale all'estetica naturale.</p>
            </div>
            <Link to="/specializzazioni" className="text-sm font-bold uppercase tracking-widest text-slate-900 flex items-center group">
              Vedi tutte <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <Link 
                key={index}
                to={spec.path}
                className="group block"
              >
                <motion.div
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="h-full flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={spec.image} 
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                      <Star size={20} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-slate-900 mb-4">{spec.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{spec.desc}</p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      Dettagli <ArrowRight size={12} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* I Nostri Lavori */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-slate-900 mb-6">I nostri lavori</h2>
              <p className="text-slate-500 text-lg">Scopri la differenza prima e dopo i nostri trattamenti d'eccellenza. Il tuo sorriso, trasformato.</p>
            </div>
            <Link to="/i-nostri-lavori" className="text-sm font-bold uppercase tracking-widest text-slate-900 flex items-center group">
              Vedi tutti <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <BeforeAfterSlider beforeImage="/slider1a.png" afterImage="/slider1b.png" />
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <BeforeAfterSlider beforeImage="/slider2a.png" afterImage="/slider2b.png" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invisalign Banner */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-8">Provider Ufficiale</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Invisalign®</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Siamo provider ufficiali per l'ortodonzia invisibile. Raddrizza i tuoi denti in modo discreto, comodo e predicibile con la tecnologia leader nel mondo.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-slate-400" />
                  <span>Mascherine quasi invisibili</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-slate-400" />
                  <span>Nessuna restrizione alimentare</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-slate-400" />
                  <span>Igiene facilitata</span>
                </li>
              </ul>
              <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors">
                Prenota una consulenza gratuita
              </Link>
            </div>
            <div className="flex-1 w-full aspect-square bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              <img src="/invisalign_promo.jpg" alt="Invisalign" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">Testimonianze</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Cosa dicono di noi</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">La soddisfazione dei nostri pazienti è il nostro miglior biglietto da visita.</p>
          </div>
          
          <TrustindexWidget />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-8 overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="h-56 w-full object-cover"
                />
              </div>
              <h4 className="text-xl font-serif mb-4">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
