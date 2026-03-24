import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/components/FeaturedProducts.css';

import { products } from '../data/products';

const featured = products.slice(0, 8);

const badgeColor = {
  Bestseller: { bg: 'rgba(230, 81, 0, 0.9)' },
  Popular: { bg: 'rgba(21, 101, 192, 0.9)' },
  New: { bg: 'rgba(46, 125, 50, 0.9)' },
  Recommended: { bg: 'rgba(123, 31, 162, 0.9)' },
};

export default function FeaturedProducts() {
  return (
    <section className="featured-section" id="products" style={{ padding: '8rem 0', background: '#F8FAFC' }}>
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Best Sellers</span>
          <h2 className="section-title">
            Our <span className="text-green-600">Featured</span> Products
          </h2>
          <p className="section-desc">
            Trusted by thousands of farmers across India — our most effective and widely used solutions
            for crop protection, growth, and nutrition.
          </p>
        </motion.div>

        <div className="featured-grid user-requested-grid" style={{ display: 'grid', gap: '2rem' }}>
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="product-img-box w-full relative" style={{ height: '300px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
                {product.image ? (
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <div className="product-watermark">Aarus</div>
                    <div className="product-img-content">
                      <h4 className="product-img-name">{product.name}</h4>
                      <span className="product-img-brand">{product.packing || 'Pro Series'}</span>
                    </div>
                  </>
                )}
                {product.badge && (
                  <div className="product-badge absolute top-4 right-4" style={{ background: badgeColor[product.badge]?.bg || '#2E7D32' }}>
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="product-info">
                <span className="product-cat-tag" style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                  {product.category}
                </span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc line-clamp-2 text-sm text-gray-500 mb-4 hidden md:block">{product.description}</p>
                <Link 
                  to={`/products/${product.id}`} 
                  className="btn-primary view-details-btn"
                >
                  View Details <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="featured-cta-wrap flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/products" className="btn-green-outline">
            View All Products <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
