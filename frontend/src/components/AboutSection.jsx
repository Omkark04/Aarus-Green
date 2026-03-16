import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHeartbeat, FaRecycle } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const values = [
  { icon: <FaRocket />, title: 'Innovation', desc: 'Cutting-edge research driving next-gen crop solutions.' },
  { icon: <FaEye />, title: 'Vision', desc: 'A future where every Indian farmer thrives with modern agrochemicals.' },
  { icon: <FaHeartbeat />, title: 'Quality', desc: 'Rigorous testing ensures every product meets the highest standards.' },
  { icon: <FaRecycle />, title: 'Sustainability', desc: 'Eco-conscious practices that protect soil, water, and the environment.' },
];

const highlights = [
  'Gujarat-based world-class manufacturing',
  '19+ premium products across 4 dynamic categories',
  'Serving 1000+ farmers across the Indian landscape',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Upper Part: Story & Image (2 Columns) */}
        <div className="about-top-grid">
          {/* Left: Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-column"
          >
            <div className="about-blob" />
            <div className="about-image-wrap">
              <img
                src="/about-farmer.png"
                alt="Indian farmer inspecting healthy crops"
                className="about-img"
              />
              <div className="about-img-overlay" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="about-year-badge"
            >
              <p className="about-year-val">10+</p>
              <p className="about-year-text">Years of<br/>Innovation</p>
            </motion.div>
          </motion.div>

          {/* Right: Story Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-content-column"
          >
            <motion.div variants={itemVariants}>
              <span className="about-tag">About Aarus Greentech</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="about-title">
              Cultivating a Greener, <br/>
              <span className="about-title-accent">More Productive</span> Future
            </motion.h2>

            <motion.p variants={itemVariants} className="about-text">
              Aarus Greentech LLP is a Gujarat-based agrochemical company dedicated to empowering Indian
              farmers with scientifically advanced crop solutions. We combine deep agricultural expertise
              with modern science to deliver products that truly make a difference in the field.
            </motion.p>

            <motion.ul variants={containerVariants} className="about-checklist">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="about-checklist-item"
                >
                  <FiCheckCircle size={24} className="about-check-icon" />
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Lower Part: Values Grid / Slider */}
        <motion.div 
          className="about-bottom-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-values-container">
            <div className="about-values-grid">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="about-value-card"
                >
                  <div className="about-value-icon">
                    {v.icon}
                  </div>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-desc">{v.desc}</p>
                </motion.div>
              ))}
            </div>
            {/* Mobile Dots Indicators (CSS will control visibility) */}
            <div className="about-slider-dots">
              {values.map((_, i) => (
                <div key={i} className={`dot ${i === 0 ? 'active' : ''}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
