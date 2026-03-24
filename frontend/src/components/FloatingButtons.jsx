import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';
import '../styles/components/FloatingButtons.css';


export default function FloatingButtons() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="floating-btns">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919146673132"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-btn-whatsapp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="float-btn-label">WhatsApp</span>
      </motion.a>

      {/* Contact Button */}
      <motion.button
        className="float-btn float-btn-contact"
        onClick={() => setContactOpen((o) => !o)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        aria-label="Contact Us"
      >
        {contactOpen ? <FaTimes /> : <FaPhone style={{ transform: 'scaleX(-1)' }} />}
        <span className="float-btn-label">{contactOpen ? 'Close' : 'Contact'}</span>
      </motion.button>

      {/* Contact Overlay Card */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="float-contact-card"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="float-contact-header">
              <span>Contact Us</span>
              <button onClick={() => setContactOpen(false)} className="float-close-btn">
                <FaTimes />
              </button>
            </div>
            <a href="tel:+919146673132" className="float-contact-row">
              <div className="float-contact-icon-wrap float-icon-phone">
                <FaPhone style={{ transform: 'scaleX(-1)' }} />
              </div>
              <div>
                <p className="float-contact-type">Call Us</p>
                <p className="float-contact-value">+91 91466 73132</p>
              </div>
            </a>
            <a href="mailto:info@aarusgreentech.in" className="float-contact-row">
              <div className="float-contact-icon-wrap float-icon-email">
                <FaEnvelope />
              </div>
              <div>
                <p className="float-contact-type">Email Us</p>
                <p className="float-contact-value">info@aarusgreentech.in</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
