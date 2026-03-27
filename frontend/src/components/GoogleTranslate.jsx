import { useEffect, useState } from 'react';

/**
 * Robust Custom Google Translate Component
 * Uses a native React dropdown to control the hidden Google Translate API.
 */
export default function GoogleTranslate({ id = 'google_translate_element', isMobile = false }) {
  const [currentLang, setCurrentLang] = useState('en');

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
  }, []);

  const handleLanguageChange = (e) => {
    const code = e.target.value;
    setCurrentLang(code);

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

  return (
    <>
      {/* The hidden container where Google will actually inject its iframe/widget */}
      <div id={id} style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }} />

      {/* Our beautifully styled custom UI */}
      <div 
        className={`flex items-center gap-2 ${isMobile ? 'w-full' : ''}`}
        style={{
          backgroundColor: '#E8F5E9',
          borderRadius: '0.5rem',
          padding: '0.35rem 0.5rem',
          border: '1px solid #2E7D32',
        }}
      >
        <select
          value={currentLang}
          onChange={handleLanguageChange}
          style={{
            backgroundColor: 'transparent',
            color: '#1B5E20',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          <option value="en">English</option>
          <option value="hi">Hindi (हिंदी)</option>
          <option value="mr">Marathi (मराठी)</option>
        </select>
      </div>
    </>
  );
}
