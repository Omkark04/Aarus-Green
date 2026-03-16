import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { productCategories } from '../data/products';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProductCategories() {
  return (
    <section id="solutions" className="solutions-section">
      {/* Decorative blobs */}
      <div className="solutions-blob-1" />
      <div className="solutions-blob-2" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="solutions-tag">
            Our Professional Solutions
          </span>
          <h2 className="solutions-title">
            Complete Crop Care <span className="span-accent">Solutions</span>
          </h2>
          <p className="solutions-subtitle">
            From soil health to crop protection, we offer scientifically formulated products
            for every stage of your farming journey.
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm-grid-cols-2 lg-grid-cols-4 gap-8 solutions-grid"
        >
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              className="category-card"
            >
              {/* Massive subtle bg watermark */}
              <div
                className="category-watermark"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>

              {/* Number badge */}
              <div
                className="category-number"
                style={{ background: cat.color }}
              >
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="category-icon-box"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="category-title">
                {cat.title}
              </h3>

              {/* Desc */}
              <p className="category-desc">{cat.desc}</p>

              {/* Divider */}
              <div className="category-divider" style={{ background: cat.color }} />

              {/* Link */}
              <div
                className="category-link"
                style={{ color: cat.color }}
              >
                Explore Products <FiArrowRight className="category-link-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
