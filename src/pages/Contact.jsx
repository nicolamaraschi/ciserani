import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 block">Contatti</span>
          <h1 className="text-5xl font-serif text-slate-900 mb-8">Prenota la tua <span className="italic text-slate-400">visita</span>.</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Siamo a Milano, in Via degli Zuccaro 5. Compila il modulo o chiamaci per fissare un appuntamento o richiedere informazioni.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Form */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem]">
          <h3 className="text-2xl font-serif mb-8">Inviaci un messaggio</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Nome</label>
                <input type="text" placeholder="Il tuo nome" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Email</label>
                <input type="email" placeholder="la-tua@email.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Intervento di interesse</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all appearance-none">
                <option>Seleziona un'opzione</option>
                <option>Chirurgia parodontale</option>
                <option>Implantologia e protesi</option>
                <option>Ortodonzia invisibile</option>
                <option>Conservativa estetica</option>
                <option>Altro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Messaggio</label>
              <textarea placeholder="Come possiamo aiutarti?" rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-colors group">
              <span>Invia Richiesta</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="space-y-12">
          {/* Mappa */}
          <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 relative group shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=Via+degli+Zuccaro+5,+Milano&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Re Smile"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          {/* Come Raggiungerci (Key Points) */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Come Raggiungerci & Orari</h4>
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg">
              <div>
                <h5 className="font-bold text-sm mb-5 flex items-center gap-2">
                  <MapPin size={18} className="text-slate-400" /> Fermate più vicine
                </h5>
                <ul className="text-sm text-slate-300 space-y-4">
                  <li className="flex items-center gap-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider">BUS 50</span>
                    <span>Piazza Frattini</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider">BUS 61</span>
                    <span>Piazza Napoli / Tolstoj</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider">TRAM 14</span>
                    <span>Giambellino / Tolstoj</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-slate-400" /> Orari Studio
                </h5>
                <ul className="text-sm text-slate-300 space-y-4">
                  <li className="flex flex-col">
                    <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Lunedì – Venerdì</span>
                    <span className="font-medium">14.00 – 19.30</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Martedì – Giovedì</span>
                    <span className="font-medium">9.00 – 12.30 / 14.00 – 19.30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Indirizzo e Contatti */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 bg-slate-50 p-8 rounded-3xl">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Indirizzo</h4>
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-slate-900 shrink-0" />
                <p className="text-slate-600 leading-relaxed">
                  Re Smile S.r.l.<br />
                  Via degli Zuccaro, 5<br />
                  20146 Milano
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Contatti Diretti</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Phone size={20} className="text-slate-900 shrink-0" />
                  <a href="tel:02427289" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">02.427289</a>
                </li>
                <li className="flex items-center space-x-4">
                  <Mail size={20} className="text-slate-900 shrink-0" />
                  <a href="mailto:info@studiociserani.it" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">info@studiociserani.it</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center pt-4">
            P.IVA 10663200151 | Ordine Medici Milano n. 1660
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
