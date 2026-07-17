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
        <div className="flex flex-col h-full">
          {/* Mappa Grande */}
          <div className="w-full h-[320px] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 mb-12">
            <iframe
              src="https://www.google.com/maps?q=Via+degli+Zuccaro+5,+Milano&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Re Smile"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Colonna Sinistra Info */}
            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Indirizzo</h4>
                <p className="text-lg text-slate-900 leading-relaxed font-serif">
                  Re Smile S.r.l.<br />
                  Via degli Zuccaro, 5<br />
                  20146 Milano
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Come Raggiungerci</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="text-slate-900 font-bold text-xs">50</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">Bus</span>
                      <span className="text-slate-900 font-medium text-sm">Piazza Frattini</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="text-slate-900 font-bold text-xs">61</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">Bus</span>
                      <span className="text-slate-900 font-medium text-sm">Largo Giambellino</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="text-slate-900 font-bold text-xs">14</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">Tram</span>
                      <span className="text-slate-900 font-medium text-sm">Lorenteggio</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Colonna Destra Info */}
            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Contatti</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:02427289" className="text-xl text-slate-900 hover:text-slate-500 transition-colors font-serif block">02.427289</a>
                  </li>
                  <li>
                    <a href="mailto:info@studiociserani.it" className="text-[15px] text-slate-900 hover:text-slate-500 transition-colors border-b border-slate-200 hover:border-slate-500 pb-1">info@studiociserani.it</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Orari Studio</h4>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Lunedì – Venerdì</span>
                    <span className="text-slate-900 font-medium text-sm">14.00 – 19.30</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Martedì – Giovedì</span>
                    <span className="text-slate-900 font-medium text-sm">9.00 – 12.30<br/>14.00 – 19.30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-[10px] text-slate-300 uppercase tracking-[0.2em] mt-auto pt-12">
            P.IVA 10663200151 | Ordine Medici Milano n. 1660
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
