import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import '../styles/components/Navbar.css';
import GoogleTranslate from './GoogleTranslate';


const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { 
    name: 'Products', 
    to: '/products',
    dropdown: [
      { name: 'Plant Growth Promoter', to: '/products?category=Plant%20Growth%20Promoter' },
      { name: 'Crop Protection', to: '/products?category=Crop%20Protection' },
      { name: 'Nutrient Solutions', to: '/products?category=Nutrient%20Solutions' },
      { name: 'Soil Health', to: '/products?category=Soil%20Health' },
    ]
  },
  { name: 'Blog', to: '/blog' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Privacy Policy', to: '/privacy-policy' },
  {
    name: 'Contact Us',
    to: '/contact',
    dropdown: [
      { name: 'Farmer Inquiry', to: '/farmer-enquiry' },
      { name: 'Distributor Inquiry', to: '/distributor-enquiry' },
    ],
  },
];

import logo from '../assets/Logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`nav-standard ${scrolled ? 'nav-scrolled' : 'shadow-sm'}`} style={{ backgroundColor: '#ffffff' }}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Aarus Greentech Logo" style={{ height: '5.5rem', width: 'auto' }} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden-md md-flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <Link
                    to={link.to}
                    className={`nav-link flex items-center gap-1 cursor-pointer ${
                      location.pathname.startsWith(link.to) ? 'text-green-600 font-bold' : 'text-gray-800 font-semibold'
                    }`}
                  >
                    {link.name} <FiChevronDown />
                  </Link>
                ) : (
                  <Link
                    to={link.to}
                    className={`nav-link flex items-center gap-1 ${location.pathname === link.to ? 'text-green-600 font-bold' : 'text-gray-800 font-semibold'}`}
                  >
                    {link.name}
                  </Link>
                )}

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
                          <Link key={sub.name} to={sub.to} className="nav-dropdown-item">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
          <GoogleTranslate />
        </div>

        {/* Mobile Toggle */}
        <button
          className="hidden-show-md p-2 rounded-lg text-gray-800"
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
                <div key={link.name} className="flex flex-col">
                  <Link
                    to={link.to}
                    onClick={() => !link.dropdown && setIsMenuOpen(false)}
                    className="nav-mobile-link text-gray-800"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="bg-gray-50 py-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="nav-mobile-link text-gray-600 block pl-8"
                          style={{ fontSize: '0.875rem' }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
