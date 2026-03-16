import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="cta-section">
      {/* Full width background layer */}
      <div className="cta-full-bg" />

      <div className="cta-container-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="cta-card"
        >
          {/* Decorative Glows */}
          <div className="cta-glow-1" />
          <div className="cta-glow-2" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="cta-tag"
          >
            Ready to Transform Your Yield?
          </motion.div>

          <h2 className="cta-title">
            Let's Grow <span>Together</span>
            <br />
            with Aarus Greentech
          </h2>

          <p className="cta-desc">
            Join 1000+ satisfied farmers who have elevated their agricultural
            productivity with our scientifically advanced crop solutions.
          </p>

          <div className="cta-btns">
            <a
              href="#products"
              className="btn-cta-primary"
            >
              Explore Our Catalog <FiArrowRight size={28} />
            </a>
            <a
              href="#contact"
              className="btn-cta-secondary"
            >
              <FiPhone size={28} /> Get Technical Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
