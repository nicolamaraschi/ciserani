import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Social */}
        <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex flex-col items-center md:items-start gap-1">
            <img src="/logo.png" alt="Re Smile Logo" className="h-56 md:h-64 w-auto" />
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Ricerca dell’eccellenza estetica applicata alla salute in ogni branca dell’odontoiatria dal 1979.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.instagram.com/studio_drciserani/" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/ciseraniroberto/?locale=it_IT" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Navigazione</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/chi-siamo" className="hover:text-slate-900 transition-colors">Chi Siamo</Link></li>
            <li><Link to="/specializzazioni" className="hover:text-slate-900 transition-colors">Specializzazioni</Link></li>
            <li><Link to="/team" className="hover:text-slate-900 transition-colors">Team</Link></li>
            <li><Link to="/news" className="hover:text-slate-900 transition-colors">News</Link></li>
            <li><Link to="/contatti" className="hover:text-slate-900 transition-colors">Contatti</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Contatti</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-slate-400 mt-0.5 shrink-0" />
              <span>Via degli Zuccaro, 5<br />20146 Milano</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-slate-400 shrink-0" />
              <a href="tel:02427289" className="hover:text-slate-900 transition-colors">02.427289</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-slate-400 shrink-0" />
              <a href="mailto:info@studiociserani.it" className="hover:text-slate-900 transition-colors">info@studiociserani.it</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">Orari Studio</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p>Lun – Ven: 14.00 – 19.30</p>
                <p>Mar – Gio: 9.00 – 12.30 / 14.00 – 19.30</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 uppercase tracking-widest gap-4">
        <p>© {new Date().getFullYear()} Re Smile S.r.l. – P.IVA 10663200151</p>
        <p>Iscrizione Ordine Provinciale Medici e Odontoiatri n. 1660</p>
      </div>
    </footer>
  );
};

export default Footer;
