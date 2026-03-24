import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiShield, FiTrendingUp, FiGlobe, FiUsers } from 'react-icons/fi';
import { FaShieldAlt, FaLeaf, FaMicroscope, FaTractor, FaStar, FaShieldAlt as FaShield } from 'react-icons/fa';
import '../styles/components/BenefitsSection.css';


const benefits = [
  {
    icon: <FaShield />,
    title: 'Advanced R&D',
    desc: 'Our research team continuously innovates to bring the most effective agrochemical formulations to market.',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safety Certified',
    desc: 'All products undergo rigorous safety testing and comply with CIB (Central Insecticides Board) regulations.',
    color: '#2E7D32',
    bg: '#E8F5E9',
  },
  {
    icon: <FaLeaf />,
    title: 'Eco-Friendly',
    desc: 'Formulations designed to minimize environmental footprint while maximizing crop protection efficacy.',
    color: '#E65100',
    bg: '#FFF3E0',
  },
  {
    icon: <FaMicroscope />,
    title: 'Scientifically Proven',
    desc: 'Field-tested across multiple crop varieties and Indian climatic conditions for reliable, repeatable results.',
    color: '#7B1FA2',
    bg: '#F3E5F5',
  },
  {
    icon: <FaTractor />,
    title: 'Easy Application',
    desc: 'Simple dosage instructions and versatile application methods — spray, drip, or injection — for every farm setup.',
    color: '#00695C',
    bg: '#E0F2F1',
  },
  {
    icon: <FaStar />,
    title: 'Trusted by 1000+',
    desc: 'Over a thousand farmers across India rely on Aarus Greentech products every season with outstanding results.',
    color: '#F57C00',
    bg: '#FFF8E1',
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Why Aarus Greentech</span>
          <h2 className="section-title">
            The Aarus <span className="text-green-600">Advantage</span>
          </h2>
          <p className="section-desc">
            Backed by science, trusted by farmers, and built for India's diverse agricultural landscape.
          </p>
        </motion.div>

        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ width: '100%', maxWidth: '380px', margin: '0 auto' }}
            >
              <div className="benefit-content">
                <div className="benefit-header">
                  <div className="benefit-icon-box" style={{ background: b.bg, color: b.color, fontSize: '2rem' }}>
                    {b.icon}
                  </div>
                </div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
              <div className="benefit-gradient-bar" style={{ background: b.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
