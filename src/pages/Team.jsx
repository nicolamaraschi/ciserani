import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Dott. Roberto Ciserani",
      role: "Titolare & Odontoiatra",
      image: "/STUDIO_CISERANI_ROBERTO.jpg",
      bio: "Laureato in Odontoiatria e Protesi Dentaria all’Università di Milano nel 1991. Ha frequentato la clinica Odontoiatrica di Milano fino al 1997 nei reparti di Chirurgia, piccola Chirurgia e Narcosi. Si è perfezionato in Endodonzia con il Dott. F. Gorni e in Conservativa con il Dott. Lorenzo Vanini. Prosegue costantemente la formazione con i più importanti corsi nazionali e internazionali."
    },
    {
      name: "Anna Avenia",
      role: "Igienista Dentale",
      image: "/STUDIO_CISERANI_ANNA.jpg",
      bio: "Laureata in Igiene dentale presso l’Università Bicocca di Milano. Diplomata come odontotecnica, ha frequentato l’ospedale San Gerardo di Monza e l’Università Bicocca per consolidare il proprio percorso formativo e garantire protocolli di prevenzione all'avanguardia."
    },
    {
      name: "Ana Iobidze",
      role: "Assistente alla Poltrona",
      image: "/ANA-IOBIDZE.jpg",
      bio: "Punto di riferimento e supporto fondamentale delle figure cliniche. Svolge un ruolo cruciale nel garantire che tutte le procedure dentali vengano eseguite in modo efficiente, fluido e nel massimo rispetto degli standard di sicurezza per il paziente."
    },
    {
      name: "Francesca Maraschi",
      role: "Segreteria & Amministrazione",
      image: "/FRANCESCA.jpg",
      bio: "Elemento portante del team, si occupa di front office, marketing e gestione amministrativa. Grazie al suo solido background culturale e professionale, coordina l'accoglienza e l'organizzazione dello studio con estrema cura e precisione."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Professionalità & Passione</span>
        <h1 className="text-5xl font-serif text-slate-900 mb-8">Il Nostro <span className="italic">Team</span></h1>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
          Un gruppo coeso di professionisti che unisce esperienza clinica, innovazione e calore umano per offrirti un'esperienza di cura d'eccellenza.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden mb-10 relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center bg-slate-50 text-slate-300 italic text-sm">
                [Immagine di {member.name}]
              </div>
            </div>
            <div className="max-w-md">
              <h3 className="text-3xl font-serif text-slate-900 mb-2">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">{member.role}</p>
              <p className="text-slate-500 leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mt-40 pt-32 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-10 leading-tight">La nostra forza è la <span className="italic text-slate-400">collaborazione</span>.</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Ogni membro del nostro team svolge un ruolo fondamentale per garantire la salute del tuo sorriso. Dalla prima accoglienza in segreteria alla precisione della fase clinica, lavoriamo in armonia per farti sentire a casa.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-serif text-slate-900">40+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Anni di Esperienza</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-slate-900">10k+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Sorrisi Curati</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 aspect-video rounded-[3rem] overflow-hidden">
            <img 
              src="/team.png" 
              alt="Team Re Smile" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hidden items-center justify-center h-full text-slate-300 italic">
              [Foto di Gruppo dello Studio]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
