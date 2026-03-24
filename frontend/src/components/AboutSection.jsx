import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiAward, FiGlobe, FiUsers, FiCpu } from 'react-icons/fi';
import { FaLeaf, FaFlask, FaHandshake, FaSeedling } from 'react-icons/fa';
import '../styles/components/AboutSection.css';


const values = [
  {
    icon: <FaLeaf />,
    title: 'Farmer First',
    desc: 'Every product we create is built around the needs of the Indian farmer — practical, affordable, and effective.',
    color: '#2E7D32',
    bg: '#E8F5E9',
  },
  {
    icon: <FaFlask />,
    title: 'Science Backed',
    desc: 'Our R&D team formulates cutting-edge agrochemical solutions backed by rigorous field testing and research.',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    icon: <FaSeedling />,
    title: 'Sustainability',
    desc: 'We develop eco-friendly formulations that protect crops today while preserving the environment for tomorrow.',
    color: '#E65100',
    bg: '#FFF3E0',
  },
  {
    icon: <FaHandshake />,
    title: 'Quality Assured',
    desc: 'ISI-certified manufacturing with end-to-end quality control — from raw material sourcing to final packaging.',
    color: '#6D4C41',
    bg: '#EFEBE9',
  },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            Driven by <span className="text-green-600">Innovation</span>,<br />
            Built for Farmers
          </h2>
          <p className="section-desc">
            At <strong>AARUS GREENTECH LLP</strong>, we are dedicated to innovation and excellence
            in the manufacturing of agrochemicals, pesticides, and seeds. With a steadfast commitment
            to enhancing agricultural productivity, we empower farmers across India with world-class solutions.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="about-values-grid">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="about-value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="about-value-icon" style={{ background: v.bg, color: v.color }}>
                {v.icon}
              </div>
              <h3 className="about-value-title" style={{ color: v.color }}>{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/about" className="btn-green-outline">
            Learn Our Full Story <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
