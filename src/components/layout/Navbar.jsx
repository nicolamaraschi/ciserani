import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Specializzazioni', path: '/specializzazioni' },
    { name: 'I Nostri Lavori', path: '/i-nostri-lavori' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl w-full mx-auto px-6 min-h-[70px] flex justify-between items-center relative">
        {/* Logo Container */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 flex-1 flex md:justify-start z-10">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-cropped.png" 
              alt="Re Smile Logo" 
              className={`w-auto object-contain transition-all duration-300 ${scrolled || isOpen ? 'h-12' : 'h-14 md:h-16'} p-1`} 
              style={{ filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))' }} 
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-serif text-[17px] font-bold tracking-wide transition-colors hover:text-slate-900 ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action - Right aligned on Desktop */}
        <div className="hidden md:flex flex-1 justify-end">
          <a href="tel:02427289" className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-slate-800 transition-all">
            <Phone size={16} />
            <span>02.427289</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 ml-auto z-20 p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-xl font-bold transition-colors ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:02427289" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-slate-900 text-white py-3.5 px-6 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all shadow-sm mt-2"
              >
                <Phone size={20} />
                <span>Chiama ora</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
