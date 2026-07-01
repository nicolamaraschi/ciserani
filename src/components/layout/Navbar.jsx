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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Specializzazioni', path: '/specializzazioni' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Container */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex-1 flex md:justify-start z-10">
          <Link to="/">
            <img src="/logoScritta.png" alt="Re Smile Logo" className="h-10 md:h-12 w-auto" style={{ filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))' }} />
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
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-xl font-bold ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-500'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:02427289" className="flex items-center justify-center space-x-2 bg-slate-900 text-white py-4 rounded-xl text-lg font-medium">
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
