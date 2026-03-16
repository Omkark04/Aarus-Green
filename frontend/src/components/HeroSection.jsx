import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaLeaf, FaSeedling, FaFlask } from 'react-icons/fa';

const badges = [
  { icon: <FaLeaf />, text: '19+ Products' },
  { icon: <FaSeedling />, text: '1000+ Farmers' },
  { icon: <FaFlask />, text: 'Scientifically Proven' },
];

const stats = [
  {
    icon: <FaSeedling />,
    value: '19+',
    label: 'Premium Products',
    iconBg: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
    iconColor: '#2E7D32',
    valueColor: '#2E7D32',
  },
  {
    icon: <FaLeaf />,
    value: '1000+',
    label: 'Farmers Served',
    iconBg: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
    iconColor: '#F57C00',
    valueColor: '#F57C00',
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* Background image */}
      <div className="hero-bg-image" style={{ backgroundImage: "url('/hero-bg.png')" }} />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Decorative glows */}
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-content"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-tag"
            >
              <FaLeaf className="hero-tag-icon" />
              India's Trusted Agrochemical Brand
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hero-title"
            >
              Empowering
              <br />
              <span className="hero-title-accent">Agriculture</span>
              <br />
              for India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Advanced agrochemicals and fertilizers engineered to maximize crop
              yield, protect your harvest, and sustain the future of Indian farming.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-ctas"
            >
              <a href="#products" className="btn-primary hero-btn">
                Explore Products <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary hero-btn">
                <FiPhone /> Contact Us
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="hero-badges">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="hero-badge"
                >
                  <span className="hero-badge-icon">{b.icon}</span>
                  {b.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image + Stats ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="hero-visual"
          >
            {/* Image card */}
            <div className="hero-image-card">
              <img
                src="/hero-bg.png"
                alt="Lush green farmland in India"
                className="hero-img"
              />
              {/* Bottom overlay */}
              <div className="hero-img-overlay" />
              <p className="hero-img-caption">
                📍 Ankleshwar, Gujarat — Serving India
              </p>
            </div>

            {/* Stat cards */}
            <div className="hero-stats-grid">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i * 0.5, ease: 'easeInOut' }}
                  className="hero-stat-card"
                >
                  <div className="hero-stat-icon-wrap" style={{ background: s.iconBg }}>
                    <span style={{ color: s.iconColor }}>{s.icon}</span>
                  </div>
                  <div className="hero-stat-info">
                    <p className="hero-stat-value" style={{ color: s.valueColor }}>
                      {s.value}
                    </p>
                    <p className="hero-stat-label">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 90L1440 90L1440 35C1200 90 960 10 720 35C480 60 240 5 0 35L0 90Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}