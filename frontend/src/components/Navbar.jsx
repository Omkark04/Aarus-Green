import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/Logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { 
    name: 'Products', 
    href: '#products',
    dropdown: [
      { name: 'All Products', href: '#products' },
      { name: 'Insecticides', href: '#insecticides' },
      { name: 'Herbicides', href: '#herbicides' },
      { name: 'Fungicides', href: '#fungicides' },
      { name: 'Plant Growth Regulators', href: '#pgr' },
      { name: 'Bio Sens', href: '#bio-sens' },
    ]
  },
  { 
    name: 'Solutions', 
    href: '#solutions',
    dropdown: [
      { name: 'Crop Solutions', href: '#crop-solutions' },
      { name: 'Soil Health', href: '#soil-health' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Integrated Pest Management', href: '#ipm' },
    ]
  },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-standard ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="nav-logo-box">
            <img src={logo} alt="Aarus Greentech Logo" className="nav-logo-img" />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="md-flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="nav-item-wrap"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`nav-link ${scrolled ? 'nav-link-scrolled' : 'nav-link-transparent'}`}
              >
                {link.name}
                {link.dropdown && <FiChevronDown className="nav-caret" />}
                <span className="nav-link-line" />
              </a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="nav-dropdown"
                  >
                    <div className="nav-dropdown-inner">
                      {link.dropdown.map((sub) => (
                        <a key={sub.name} href={sub.href} className="nav-dropdown-item">
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a
            href="#contact"
            className={`btn-super px-6 py-2.5 text-sm font-bold transition-all shadow-md hover-translate-y active:scale-95 ${
              scrolled
                ? 'bg-green-600 text-white shadow-xl'
                : 'bg-white-15 text-white border-white-30'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`hidden-show-md p-2 rounded-lg transition-all ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="nav-mobile-menu"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMenuOpen(false)}
                    className="nav-mobile-link"
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="bg-gray-50 py-2">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="nav-mobile-link"
                          style={{ paddingLeft: '2.5rem', fontSize: '0.875rem', opacity: 0.8 }}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="nav-mobile-btn"
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