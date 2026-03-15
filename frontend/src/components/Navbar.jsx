import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full flex justify-center ${
        scrolled ? 'bg-white shadow-xl py-4' : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            A
          </div>
          <div>
            <span className={`text-2xl font-extrabold block leading-none tracking-tight ${scrolled ? 'text-green-800' : 'text-white'}`}>
              Aarus Greentech
            </span>
            <span className={`text-xs font-black block tracking-[0.3em] ${scrolled ? 'text-orange-600' : 'text-orange-400'}`}>
              LLP
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-bold transition-all relative group ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-current rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-green-600 text-white text-base font-black hover:bg-green-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-3xl p-2 rounded-xl border-2 ${scrolled ? 'text-gray-800 border-gray-100' : 'text-white border-white/20'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white shadow-2xl overflow-hidden rounded-b-[2rem] border-t"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors border-b border-gray-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center py-5 bg-green-600 text-white rounded-2xl font-black text-lg shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
