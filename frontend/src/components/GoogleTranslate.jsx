import { useEffect, useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Robust Custom Google Translate Component
 * Uses a fully styled custom dropdown to control the hidden Google Translate API.
 */
export default function GoogleTranslate({ id = 'google_translate_element', isMobile = false }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'Hindi (हिंदी)', short: 'HI' },
    { code: 'mr', label: 'Marathi (मराठी)', short: 'MR' },
  ];

  useEffect(() => {
    // Check current language from cookie
    const getLangCookie = () => {
      const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
      if (match) {
        const parts = match[2].split('/');
        return parts[parts.length - 1]; // e.g., /en/hi -> hi
      }
      return 'en';
    };
    setCurrentLang(getLangCookie());

    // Only set up the API once globally
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,mr',
            autoDisplay: false,
          },
          id
        );
      };

      const existingScript = document.getElementById('google-translate-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      } else if (window.google && window.google.translate) {
        setTimeout(() => window.googleTranslateElementInit(), 100);
      }
    }

    // Close dropdown on click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [id]);

  const handleLanguageChange = (code) => {
    setCurrentLang(code);
    setIsOpen(false);

    // Find the hidden Google translate select element
    const gtSelect = document.querySelector('.goog-te-combo');
    if (gtSelect) {
      gtSelect.value = code;
      gtSelect.dispatchEvent(new Event('change'));
    } else {
      // Fallback: set cookie and reload if the widget failed to attach
      document.cookie = `googtrans=/en/${code}; path=/`;
      document.cookie = `googtrans=/en/${code}; domain=.${location.hostname}; path=/`;
      window.location.reload();
    }
  };

  const currentLangLabel = languages.find(l => l.code === currentLang)?.[isMobile ? 'short' : 'label'] || (isMobile ? 'EN' : 'English');

  return (
    <div className="relative" ref={dropdownRef}>
      {/* The hidden container where Google will actually inject its iframe/widget */}
      <div id={id} style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }} />

      {/* Our beautifully styled custom UI */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-1 transition-all duration-200"
        style={{
          backgroundColor: '#E8F5E9',
          color: '#1B5E20',
          borderRadius: '2rem',
          padding: isMobile ? '0.35rem 0.6rem' : '0.5rem 1rem',
          border: '1.5px solid #2E7D32',
          fontWeight: '700',
          fontSize: isMobile ? '0.75rem' : '0.9rem',
          minWidth: isMobile ? '60px' : '110px',
        }}
      >
        <span>{currentLangLabel}</span>
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={isMobile ? 14 : 16} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[100] mt-2 right-0 shadow-xl border overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              minWidth: isMobile ? '120px' : '160px',
              borderColor: '#E2E8F0',
            }}
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full text-left px-4 py-3 hover:bg-[#F1F8F2] transition-colors duration-200 flex items-center justify-between"
                  style={{
                    color: currentLang === lang.code ? '#2E7D32' : '#475569',
                    fontWeight: currentLang === lang.code ? '700' : '500',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  <span>{lang.label}</span>
                  {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
