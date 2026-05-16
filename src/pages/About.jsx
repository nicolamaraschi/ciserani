import { motion } from 'framer-motion';
import { History, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">La Nostra Storia</span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">
            Dal 1979, una passione <br /> tramandata tra <span className="italic text-slate-500">generazioni</span>.
          </h1>
        </motion.div>
      </section>

      {/* Story Content with 9:16 Image on the side */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
        
        {/* Prominent Side Image (9:16 aspect ratio) */}
        <div className="w-full aspect-[9/16] bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 relative group md:sticky md:top-32">
          <img 
            src="/studio ciserani.png" 
            alt="Studio Ciserani Storia e Team" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          <div className="absolute inset-0 hidden items-center justify-center bg-slate-100 text-slate-400 italic">
            [Immagine Studio Ciserani]
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-16 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900">
              <History size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">Le Origini</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                Era il 1979 quando è nata l’avventura dello Studio Ciserani. Il padre Paolo, dopo anni di lavoro come odontotecnico e raggiunta la laurea in medicina, ha messo a frutto la sua formazione protesica per risolvere le situazioni dentali più complesse, diventando presto un punto di riferimento nel quartiere.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900">
              <Award size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">La Continuità</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                Il giovane Roberto, già all’età di 13 anni, frequentava il laboratorio e lo studio, apprendendo i primi rudimenti, imparando l'importanza del dettaglio e dell'accoglienza al paziente. Nel 1991, con il conseguimento della laurea in odontoiatria, è stata tracciata la via definitiva per la seconda generazione dello studio.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-slate-900">La Visione Oggi</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                Da allora, corsi, consulenze e aggiornamenti continui: tutto è stato impostato per un solo risultato. L’eccellenza non ammette scuse. Oggi lo studio unisce la profonda esperienza di ieri alle tecnologie più avanzate di oggi, garantendo cure di altissimo livello.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-slate-900 text-white py-32 rounded-[3rem] mx-6 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-6xl text-white/20 font-serif mb-8 block font-bold italic">“</span>
          <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-12 italic">
            L'eccellenza non è un atto, ma un'abitudine. In ogni sorriso che curiamo, mettiamo quarant'anni di esperienza e la tecnologia di domani.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-px bg-white/20 mb-6"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">Dott. Roberto Ciserani</p>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">Titolare dello Studio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
