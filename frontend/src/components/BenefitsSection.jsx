import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSeedling, FaShieldAlt, FaFlask, FaLeaf, FaChartLine, FaWater } from 'react-icons/fa';

const benefits = [
  {
    icon: FaChartLine,
    title: 'Higher Crop Yield',
    desc: 'Proven formulas that boost harvest volume and productivity by up to 30% across all major crops.',
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
    bg: '#E8F5E9',
    stat: 'Up to 30%',
    statLabel: 'yield increase',
  },
  {
    icon: FaSeedling,
    title: 'Stronger Plant Growth',
    desc: 'Advanced growth promoters stimulate robust root development and accelerate plant maturation.',
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
    bg: '#E3F2FD',
    stat: '2x',
    statLabel: 'root strength',
  },
  {
    icon: FaShieldAlt,
    title: 'Disease Resistance',
    desc: 'Multi-action protection formulas that shield crops from fungal, bacterial, and pest attacks.',
    color: '#B71C1C',
    gradient: 'linear-gradient(135deg, #B71C1C, #EF5350)',
    bg: '#FFEBEE',
    stat: '95%',
    statLabel: 'protection rate',
  },
  {
    icon: FaFlask,
    title: 'Nutrient Absorption',
    desc: 'Chelated nutrients and biostimulants that maximize uptake efficiency across all crop types.',
    color: '#6A1B9A',
    gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
    bg: '#F3E5F5',
    stat: '3x',
    statLabel: 'faster absorption',
  },
  {
    icon: FaLeaf,
    title: 'Soil Fertility',
    desc: 'Organic and mineral-based formulas that restore and maintain long-term soil health and vitality.',
    color: '#6D4C41',
    gradient: 'linear-gradient(135deg, #6D4C41, #A1887F)',
    bg: '#EFEBE9',
    stat: '100%',
    statLabel: 'organic-compatible',
  },
  {
    icon: FaWater,
    title: 'Sustainable Farming',
    desc: 'Eco-friendly solutions that protect the environment while securing healthy agricultural yields.',
    color: '#00695C',
    gradient: 'linear-gradient(135deg, #00695C, #26A69A)',
    bg: '#E0F2F1',
    stat: 'Zero',
    statLabel: 'harmful residues',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function BenefitsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="benefits-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="benefit-tag">
            Farmer Benefits
          </span>
          <h2 className="solutions-title">
            Why Farmers <span className="span-accent">Trust Us</span>
          </h2>
          <p className="solutions-subtitle">
            Every product is engineered with the farmer in mind — delivering measurable,
            real-world benefits at every stage of the crop cycle.
          </p>
        </motion.div>

        {/* Benefits Grid / Autoslider */}
        <div className="benefits-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm-grid-cols-2 lg-grid-cols-3 gap-10 benefits-grid"
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`benefit-card ${i === current ? 'mobile-active' : ''}`}
                >
                  {/* Gradient top bar */}
                  <div
                    className="benefit-gradient-bar"
                    style={{ background: b.gradient }}
                  />

                  <div className="benefit-content">
                    {/* Icon + Stat Row */}
                    <div className="benefit-header">
                      <div
                        className="benefit-icon-box"
                        style={{ background: b.bg }}
                      >
                        <Icon size={36} style={{ color: b.color }} />
                      </div>
                      <div className="benefit-stat-box">
                        <p
                          className="benefit-stat-val"
                          style={{ color: b.color }}
                        >
                          {b.stat}
                        </p>
                        <p className="benefit-stat-label">{b.statLabel}</p>
                      </div>
                    </div>

                    <h4 className="benefit-title">
                      {b.title}
                    </h4>
                    <p className="benefit-desc">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Mobile Dots Indicators */}
          <div className="benefits-dots">
            {benefits.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${i === current ? 'active' : ''}`} 
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
