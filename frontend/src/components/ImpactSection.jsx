import { motion } from 'framer-motion';
import { FiGlobe, FiUsers, FiAward, FiShield } from 'react-icons/fi';
import '../styles/components/ImpactSection.css';


const stats = [
  { val: '19+', label: 'Premium Products', desc: 'Tested & proven formulas' },
  { val: '1000+', label: 'Farmers Served', desc: 'Trusted across regions' },
  { val: '5+', label: 'States Covered', desc: 'Growing national presence' },
  { val: '100%', label: 'Quality Assured', desc: 'ISI Certified manufacturing' },
];

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
          <div className="impact-bg-overlay" style={{ backgroundImage: "url('/placeholder.svg')", opacity: 0.2 }} />
      <div className="impact-glow impact-glow-1" />
      <div className="impact-glow impact-glow-2" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Impact</span>
          <h2 className="section-title text-white">
            Making a Real <span className="span-gold" style={{ color: '#FFC947' }}>Difference</span>
          </h2>
          <p className="section-desc text-white-85">
            Numbers that reflect our commitment to Indian agriculture and the farming community.
          </p>
        </motion.div>

        <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: '100%', gap: '1.5rem' }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="stat-val">{s.val}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
