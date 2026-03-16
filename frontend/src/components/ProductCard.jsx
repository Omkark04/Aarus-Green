import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const categoryColors = {
  'Crop Protection': { bg: '#FFF3E0', color: '#E65100', dot: '#F57C00' },
  'Plant Growth Promoter': { bg: '#E8F5E9', color: '#2E7D32', dot: '#4CAF50' },
  'Nutrient Solutions': { bg: '#E3F2FD', color: '#1565C0', dot: '#2196F3' },
  'Soil Health': { bg: '#EFEBE9', color: '#6D4C41', dot: '#8D6E63' },
};

const productGradients = [
  'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
  'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)',
  'linear-gradient(135deg, #E65100 0%, #FFA726 100%)',
  'linear-gradient(135deg, #4A148C 0%, #AB47BC 100%)',
  'linear-gradient(135deg, #006064 0%, #26C6DA 100%)',
  'linear-gradient(135deg, #BF360C 0%, #FF7043 100%)',
];

export default function ProductCard({ product, index }) {
  const catStyle = categoryColors[product.category] || categoryColors['Nutrient Solutions'];
  const gradient = productGradients[index % productGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card"
    >
      {/* Product Image area */}
      <div
        className="product-img-box"
        style={{ background: gradient }}
      >
        {product.badge && (
          <div className="product-badge">
            {product.badge}
          </div>
        )}
        <span className="product-watermark">
          {product.name}
        </span>
        <div className="product-img-content">
          <p className="product-img-name">
            {product.name}
          </p>
          <p className="product-img-brand">Aarus Greentech</p>
        </div>
      </div>

      {/* Content area */}
      <div className="product-info">
        <span
          className="product-cat-tag"
          style={{ background: catStyle.bg, color: catStyle.color }}
        >
          {product.category}
        </span>

        <h4 className="product-name">
          {product.name}
        </h4>

        <p className="product-desc">{product.description}</p>

        {/* CTA button */}
        <button
          className="product-btn"
          style={{ color: catStyle.color }}
        >
          View Product Details <FiArrowRight className="product-btn-icon" />
        </button>
      </div>
    </motion.div>
  );
}
