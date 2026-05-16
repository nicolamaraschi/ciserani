import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: "26 Aprile 2023",
      title: "Regala un bel sorriso! Trattamento sbiancante",
      excerpt: "Lo sbiancamento è una tecnica sicura eseguita presso lo studio odontoiatrico e dà risultati sorprendenti."
    },
    {
      date: "14 Marzo 2023",
      title: "Invisalign - Studio Dentistico Ciserani",
      excerpt: "Scopri come raddrizzare i tuoi denti in modo invisibile con il sistema Invisalign, di cui siamo provider ufficiali."
    },
    {
      date: "16 Maggio 2019",
      title: "L’innovazione di BlancOne®",
      excerpt: "Lo sbiancamento efficace e sicuro che rispetta i tuoi denti. Risultati immediati e duraturi."
    },
    {
      date: "4 Giugno 2019",
      title: "I disegni dei nostri piccoli pazienti",
      excerpt: "Lo Studio Dentistico Ciserani ha chiesto ai nostri piccoli pazienti di realizzare un disegno per decorare lo studio."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50/50">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Aggiornamenti</span>
        <h1 className="text-5xl font-serif text-slate-900 mb-8">News & <span className="italic">Approfondimenti</span></h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group cursor-pointer"
          >
            <div className="flex items-center space-x-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Calendar size={14} />
              <span>{item.date}</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-8">{item.excerpt}</p>
            <div className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 group-hover:gap-2 transition-all">
              <span>Leggi di più</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default News;
