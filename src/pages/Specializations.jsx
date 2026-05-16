import { motion } from 'framer-motion';
import { Shield, Sparkles, Smile, Scissors, Heart, Activity, Layers, Crosshair } from 'lucide-react';

const Specializations = () => {
  const specs = [
    {
      icon: <Shield size={28} />,
      title: "Chirurgia Parodontale",
      image: "/Chirurgia Parodontale.png",
      content: "Quando le gengive sono infiammate e si ritirano, i denti perdono stabilità e rischiano di cadere. La chirurgia parodontale consente di riavere e mantenere il sorriso sano e naturale a lungo negli anni."
    },
    {
      icon: <Layers size={28} />,
      title: "Implantologia e Protesi",
      image: "/Implantologia e Protesi.png",
      content: "Hai perso uno o più denti? L’implantologia e la protesi estetica ti ridoneranno la tua voglia di sorridere con soluzioni fisse o mobili ad altissimo mimetismo."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Ortodonzia Invisibile",
      image: "/Ortodonzia Invisibile.png",
      content: "Grazie all’ortodonzia invisibile puoi finalmente avere il sorriso che hai sempre sognato senza rinunce, utilizzando allineatori trasparenti e rimovibili."
    },
    {
      icon: <Smile size={28} />,
      title: "Conservativa Estetica",
      image: "/%20Conservativa%20Estetica.png",
      content: "Tecniche e materiali sempre più evoluti consentono di ripristinare quell’opera d’arte che è il tuo dente, allungandone la vita e migliorandone l’estetica."
    },
    {
      icon: <Activity size={28} />,
      title: "Igiene e Sbiancamento",
      image: "/Igiene e Sbiancamento.png",
      content: "La prevenzione è la base della medicina moderna. Lo sbiancamento è una tecnica sicura eseguita in studio che dà risultati sorprendenti."
    },
    {
      icon: <Heart size={28} />,
      title: "Endodonzia",
      image: "/Endodonzia.png",
      content: "Cura del dente quando il processo carioso ne compromette la vitalità. Tecniche evolute che rasentano l'opera d'arte per salvare il dente naturale."
    },
    {
      icon: <Crosshair size={28} />,
      title: "Protesi Dentaria",
      image: "/%20Protesi%20Dentaria.png",
      content: "Ripristino della struttura anatomica compromessa. Risultati molto mimetici per ristabilire la funzione con un’ottima estetica anche in bocche compromesse."
    },
    {
      icon: <Scissors size={28} />,
      title: "Chirurgia Orale",
      image: "/Chirurgia Orale.png",
      content: "Interventi in ambiente sicuro e confortevole: ottavi inclusi, denti sovranumerari, apicectomie e cisti."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">I Nostri Servizi</span>
          <h1 className="text-5xl font-serif text-slate-900 mb-8">Specializzazioni <span className="italic text-slate-400">Cliniche</span></h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            La prevenzione è la base della medicina moderna e l’odontoiatria non fa eccezione. Nel nostro studio applichiamo le tecnologie più avanzate per garantirti il miglior risultato possibile.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col h-full rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 overflow-hidden"
          >
            <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
              <img 
                src={spec.image} 
                alt={spec.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="absolute inset-0 hidden items-center justify-center bg-slate-50 text-slate-200 italic text-xs">
                [Immagine {spec.title}]
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 mb-8">
                {spec.icon}
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-6">{spec.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {spec.content}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 max-w-2xl mx-auto">Hai bisogno di una consulenza specialistica?</h2>
            <p className="text-slate-400 mb-12 max-w-lg mx-auto">Siamo a tua disposizione per valutare il tuo caso e proporti la soluzione più adatta alle tue esigenze.</p>
            <a href="/contatti" className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Prenota una visita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specializations;
