import { Mail, Phone, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

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

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Contact Form */}
        <div className="lg:col-span-6 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-2">Inviaci un messaggio</h3>
            <p className="text-sm text-slate-500 mb-8">Ti risponderemo il prima possibile per confermare la tua richiesta.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Nome</label>
                  <input type="text" placeholder="Il tuo nome" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Email</label>
                  <input type="email" placeholder="la-tua@email.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Intervento di interesse</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all appearance-none">
                  <option>Seleziona un'opzione</option>
                  <option>Chirurgia parodontale</option>
                  <option>Implantologia e protesi</option>
                  <option>Ortodonzia invisibile (Invisalign® / Spark™)</option>
                  <option>Conservativa estetica</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Messaggio</label>
                <textarea placeholder="Come possiamo aiutarti?" rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-colors group">
                <span>Invia Richiesta</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Card 1: Indirizzo & Contatti */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-[2rem] p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                <MapPin size={14} className="text-slate-400" />
                <span>Indirizzo</span>
              </div>
              <p className="text-lg text-slate-900 leading-relaxed font-serif mb-3">
                Re Smile S.r.l.<br />
                Via degli Zuccaro, 5<br />
                20146 Milano
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+degli+Zuccaro+5,+20146+Milano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border-b border-slate-300 pb-0.5 transition-colors"
              >
                <span>Apri su Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                  <Phone size={14} className="text-slate-400" />
                  <span>Contatti Diretti</span>
                </div>
                <a href="tel:02427289" className="text-2xl text-slate-900 hover:text-slate-600 transition-colors font-serif block mb-2">
                  02.427289
                </a>
                <a href="mailto:info@studiociserani.it" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Mail size={14} className="text-slate-400 shrink-0" />
                  <span className="border-b border-slate-200 hover:border-slate-500 pb-0.5">info@studiociserani.it</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Come Raggiungerci (con Metro M4) */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">Come Raggiungerci</h4>

            {/* Metro M4 Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#004c97] text-white flex items-center justify-center font-bold text-xs tracking-tight shrink-0">
                  M4
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#004c97] font-bold uppercase tracking-wider">Metro Blu</span>
                  <span className="text-slate-900 font-semibold text-sm">Frattini</span>
                  <span className="text-[11px] text-slate-400">3 min a piedi</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#004c97] text-white flex items-center justify-center font-bold text-xs tracking-tight shrink-0">
                  M4
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#004c97] font-bold uppercase tracking-wider">Metro Blu</span>
                  <span className="text-slate-900 font-semibold text-sm">Tolstoj</span>
                  <span className="text-[11px] text-slate-400">4 min a piedi</span>
                </div>
              </div>
            </div>

            {/* Mezzi di superficie */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 bg-white/70 px-3.5 py-2.5 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0">
                  <span className="text-slate-900 font-bold text-xs">50</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest">Bus</span>
                  <span className="text-slate-800 font-medium text-xs truncate">P.zza Frattini</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 px-3.5 py-2.5 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0">
                  <span className="text-slate-900 font-bold text-xs">61</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest">Bus</span>
                  <span className="text-slate-800 font-medium text-xs truncate">L.go Giambellino</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/70 px-3.5 py-2.5 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0">
                  <span className="text-slate-900 font-bold text-xs">14</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest">Tram</span>
                  <span className="text-slate-800 font-medium text-xs truncate">Lorenteggio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Orari Studio */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-[2rem] p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                <Clock size={14} className="text-slate-400" />
                <span>Orari Studio</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Lunedì – Venerdì</span>
                  <span className="text-slate-900 font-semibold text-base">14.00 – 19.30</span>
                </div>
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Martedì – Giovedì</span>
                  <span className="text-slate-900 font-semibold text-base">9.00 – 12.30 · 14.00 – 19.30</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] pt-6 mt-6 border-t border-slate-100">
              P.IVA 10663200151 | Ordine Medici Milano n. 1660
            </div>
          </div>
        </div>
      </section>

      {/* Mappa Grande Full-Width */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block mb-2">Dove Siamo</span>
            <h2 className="text-3xl font-serif text-slate-900">Via degli Zuccaro, 5 — Milano</h2>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Via+degli+Zuccaro+5,+20146+Milano"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors self-start sm:self-auto"
          >
            <span>Ottieni indicazioni</span>
            <ExternalLink size={14} />
          </a>
        </div>
        <div className="w-full h-[460px] md:h-[560px] rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100">
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
      </section>
    </div>
  );
};

export default Contact;
