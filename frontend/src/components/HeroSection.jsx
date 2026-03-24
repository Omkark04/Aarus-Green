import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiPhone } from 'react-icons/fi';
import '../styles/components/HeroSection.css';

import { FaLeaf, FaSeedling, FaFlask } from 'react-icons/fa';
import logo from '../assets/Logo.png';

const badges = [
  { icon: <FaLeaf />, text: '19+ Products' },
  { icon: <FaSeedling />, text: '1000+ Farmers' },
  { icon: <FaFlask />, text: 'Scientifically Proven' },
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-image" style={{ backgroundImage: "url('/hero-home.png')" }} />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-tag"
            >
              <FaLeaf className="hero-tag-icon" />
              India's Trusted Agrochemical Brand
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hero-title"
            >
              Empowering <span className="hero-title-accent">Agriculture</span>
              <br />
              for India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Advanced agrochemicals and crop protection solutions engineered to maximize yield,
              protect your harvest, and sustain the future of Indian farming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-ctas"
            >
              <Link to="/products" className="btn-primary hero-btn">
                Explore Products <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn-secondary hero-btn" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                <FiPhone /> Contact Us
              </Link>
            </motion.div>

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

        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 90L1440 90L1440 35C1200 90 960 10 720 35C480 60 240 5 0 35L0 90Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
