import { useEffect } from 'react';

/**
 * GoogleTranslate component — uses Google Translate's free website translator widget.
 * Place this component anywhere (e.g., in Navbar or Layout) to add a language dropdown.
 * 
 * Usage: <GoogleTranslate />
 */
export default function GoogleTranslate() {
  useEffect(() => {
    // Prevent duplicate initialization
    if (window.googleTranslateElementInit) return;

    // Define the init function Google Translate expects
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,mr,te,ta,kn,gu,bn,pa,ur',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        display: 'inline-block',
      }}
    />
  );
}
