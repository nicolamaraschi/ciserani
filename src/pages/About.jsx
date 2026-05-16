import { motion } from 'framer-motion';
import { History, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">La Nostra Storia</span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">
            Dal 1979, una passione <br /> tramandata tra <span className="italic">generazioni</span>.
          </h1>
        </motion.div>
      </section>

      {/* Story Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center text-slate-300 italic">
          {/* USER: Inserire qui una foto storica o ritratto del Dott. Paolo e Roberto */}
          [Foto Team / Storia]
        </div>
        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
              <History size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Le Origini</h3>
              <p className="text-slate-500 leading-relaxed">
                Era il 1979 quando è nata l’avventura dello Studio Ciserani. Il padre Paolo, dopo anni di lavoro come odontotecnico e raggiunta la laurea in medicina, ha messo a frutto la sua formazione protesica per risolvere le situazioni dentali più complesse.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">La Continuità</h3>
              <p className="text-slate-500 leading-relaxed">
                Il giovane Roberto, già all’età di 13 anni, frequentava il laboratorio e lo studio, apprendendo i primi rudimenti. Nel 1991, con il conseguimento della laurea in odontoiatria, è stata tracciata la via definitiva.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">La Visione Oggi</h3>
              <p className="text-slate-500 leading-relaxed">
                Da allora, corsi, consulenze e aggiornamenti continui: tutto è stato impostato per un solo risultato. L’eccellenza non ammette scuse. Oggi lo studio è un punto di riferimento per l'odontoiatria di alta qualità a Milano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-4xl text-slate-300 font-serif mb-8 block font-bold italic">“</span>
          <h2 className="text-3xl font-serif text-slate-800 leading-snug mb-10 italic">
            L'eccellenza non è un atto, ma un'abitudine. In ogni sorriso che curiamo, mettiamo quarant'anni di esperienza e la tecnologia di domani.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-px bg-slate-200 mb-6"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-900">Dott. Roberto Ciserani</p>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">Titolare dello Studio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
