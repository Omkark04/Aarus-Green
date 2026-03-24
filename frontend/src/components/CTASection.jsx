import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import '../styles/components/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container-inner">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-glow-1" />
          <div className="cta-glow-2" />

          <div className="cta-content relative z-20 text-center">
            <span className="section-tag" style={{ background: 'rgba(255,160,0,0.2)', color: '#FFC947', borderColor: 'rgba(255,160,0,0.3)' }}>Ready to Grow?</span>
            <h2 className="section-title text-white">
              Partner With <span style={{ color: '#FFC947' }}>Aarus Greentech</span>
            </h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
              Speak to our agrochemical experts, explore our full product range,
              or become a distributor — we're here to help you succeed every season.
            </p>
            <div className="cta-btns">
              <Link to="/contact" className="btn-primary" style={{ backgroundColor: '#FFC947', color: '#000', border: 'none', padding: '1.25rem 2.5rem', fontWeight: 900 }}>
                Get In Touch <FiArrowRight />
              </Link>
              <a href="tel:+919146673132" className="btn-secondary" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', padding: '1.25rem 2.5rem' }}>
                <FiPhone /> +91 91466 73132
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
