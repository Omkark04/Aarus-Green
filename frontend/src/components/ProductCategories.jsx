import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiChevronRight } from 'react-icons/fi';
import '../styles/components/ProductCategories.css';


const categories = [
  {
    id: 1,
    title: 'Plant Growth Promoter',
    icon: '🌱',
    description: 'Boost cell division, root development, and flowering for maximum yield potential.',
    color: '#2E7D32',
    bg: '#E8F5E9',
  },
  {
    id: 2,
    title: 'Crop Protection',
    icon: '🛡️',
    description: 'Comprehensive solutions against pests, fungi, and diseases to safeguard your harvest.',
    color: '#E65100',
    bg: '#FFF3E0',
  },
  {
    id: 3,
    title: 'Nutrient Solutions',
    icon: '🔬',
    description: 'Targeted control of thrips, mites, whitefly, aphids, and other harmful insects.',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    id: 4,
    title: 'Soil Health',
    icon: '🌍',
    description: 'Organic and mineral products to restore, enrich, and sustain soil vitality.',
    color: '#6D4C41',
    bg: '#EFEBE9',
  },
];

export default function ProductCategories() {
  return (
    <section className="solutions-section" id="categories">
      <div className="solutions-blob-1" />
      <div className="solutions-blob-2" />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Product Range</span>
          <h2 className="section-title">
            Our <span className="text-green-600">Solutions</span>
          </h2>
          <p className="section-desc">
            Four powerful categories covering everything from growth promotion to pest management —
            engineered specifically for Indian farming conditions.
          </p>
        </motion.div>

        <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="category-watermark">{cat.id}</div>
              <div className="category-number" style={{ background: cat.bg, color: cat.color }}>0{cat.id}</div>
              <div className="category-icon-box" style={{ background: cat.bg, color: cat.color }}>
                {cat.icon}
              </div>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.description}</p>
              <div className="category-divider" style={{ background: cat.color }} />
              <Link to={`/products?category=${encodeURIComponent(cat.title)}`} className="category-link" style={{ color: cat.color }}>
                View Products <FiArrowRight className="category-link-icon" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
