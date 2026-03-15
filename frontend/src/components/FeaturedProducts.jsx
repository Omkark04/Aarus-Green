import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const featured = products.filter((p) => p.subcategory === 'featured');

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-32 bg-white w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        {/* Scaled Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-6 py-2.5 rounded-full text-base font-black mb-6 shadow-sm"
            style={{ background: '#FFF3E0', color: '#F57C00', border: '1px solid #FFE0B2' }}
          >
            Product Showcase
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}
          >
            Our <span style={{ color: '#F57C00' }}>Featured</span> Products
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of farmers across India, these products deliver
            proven results in crop yield, health, and protection.
          </p>
        </motion.div>

        {/* Scaled Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Scaled View All Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="#all-products"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(46,125,50,0.3)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-12 py-6 rounded-full font-black text-white text-lg shadow-2xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            View All Products
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
