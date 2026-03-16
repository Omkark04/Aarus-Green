import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 19, suffix: '+', label: 'Products', desc: 'Premium agrochemical products' },
  { value: 1000, suffix: '+', label: 'Farmers', desc: 'Across India trust us' },
  { value: 10, suffix: '+', label: 'Crop Solutions', desc: 'For diverse crop types' },
  { value: 4, suffix: '', label: 'Product Lines', desc: 'Complete crop care range' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="impact-section">
      {/* Background image overlay */}
      <div className="impact-bg-overlay" style={{ backgroundImage: "url('/hero-bg.png')" }} />

      {/* Decorative glows */}
      <div className="impact-glow impact-glow-1" />
      <div className="impact-glow impact-glow-2" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="impact-tag">
            Our National Impact
          </span>
          <h2 className="impact-title">
            Serving Farmers <span className="span-gold">Across India</span>
          </h2>
          <p className="impact-subtitle">
            From Gujarat to across the nation — Aarus Greentech products are changing
            the way India farms, one field at a time.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="stat-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="stat-card"
            >
              <p className="stat-val">
                <CountUp target={stat.value} suffix={stat.suffix} inView={isInView} />
              </p>
              <p className="stat-label">
                {stat.label}
              </p>
              <p className="stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="impact-footer"
        >
        </motion.div>
      </div>
    </section>
  );
}
