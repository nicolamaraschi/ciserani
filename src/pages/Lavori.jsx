import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';

const Lavori = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const lavori = [
    {
      id: 1,
      type: 'slider',
      title: "Ricostruzione Estetica Completa",
      description: "Ripristino del sorriso naturale con materiali biocompatibili e tecniche minimamente invasive.",
      before: "/slider1a.png",
      after: "/slider1b.png"
    },
    {
      id: 2,
      type: 'slider',
      title: "Riallineamento e Faccette",
      description: "Correzione di asimmetrie e discromie per un risultato armonioso e luminoso.",
      before: "/slider2a.png",
      after: "/slider2b.png"
    },
    {
      id: 3,
      type: 'image',
      title: "Riabilitazione Funzionale",
      description: "Intervento mirato per ristabilire la corretta masticazione e donare un aspetto sano alle gengive.",
      image: "/primaDopo1.jpg"
    },
    {
      id: 4,
      type: 'image',
      title: "Trattamento Ortodontico",
      description: "Allineamento dentale perfetto e chiusura degli spazi per valorizzare la bellezza del sorriso.",
      image: "/primaDopo2.jpg"
    },
    {
      id: 5,
      type: 'image',
      title: "Estetica Dentale Avanzata",
      description: "Rifacimento completo del sorriso con attenzione scrupolosa ai dettagli estetici.",
      image: "/primaDopo3.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 bg-slate-200/50 px-4 py-1 rounded-full">Prima e Dopo</span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-8">
            I Nostri <span className="italic text-slate-500">Lavori</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Scopri i risultati dei nostri trattamenti. L'eccellenza estetica e la salute del paziente sono sempre al centro di ogni nostro piano di cura.
          </p>
        </motion.div>

        <div className="space-y-32">
          {lavori.map((lavoro, index) => (
            <motion.div 
              key={lavoro.id}
              {...fadeIn}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 w-full">
                {lavoro.type === 'slider' ? (
                  <BeforeAfterSlider beforeImage={lavoro.before} afterImage={lavoro.after} />
                ) : (
                  <div className="relative w-full rounded-[2rem] overflow-hidden shadow-xl bg-white">
                    <img src={lavoro.image} alt={lavoro.title} className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
              <div className="flex-1 lg:max-w-md w-full">
                <h2 className="text-3xl font-serif text-slate-900 mb-4">{lavoro.title}</h2>
                <div className="w-12 h-0.5 bg-slate-200 mb-6"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {lavoro.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lavori;
