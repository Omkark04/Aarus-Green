import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const featured = products.filter((p) => p.subcategory === 'featured');

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-32 bg-white flex justify-center">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="featured-tag">
            Product Showcase
          </span>
          <h2 className="solutions-title">
            Our <span className="span-accent">Featured</span> Products
          </h2>
          <p className="solutions-subtitle">
            Trusted by thousands of farmers across India, these products deliver
            proven results in crop yield, health, and protection.
          </p>
        </motion.div>

        {/* Products Grid / Horizontal Scroll */}
        <div className="featured-container">
          <div className="grid sm-grid-cols-2 lg-grid-cols-3 gap-10 featured-grid">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          {/* Mobile Dots Indicators (CSS controlled) */}
          <div className="featured-dots">
            {featured.slice(0, Math.ceil(featured.length / 3)).map((_, i) => (
              <div key={i} className={`dot ${i === 0 ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="featured-cta-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#all-products"
            className="btn-all-products"
          >
            View All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
