import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { products, productCategories } from '../data/products';
import { FiArrowRight, FiSearch, FiChevronRight, FiFilter, FiSmile } from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/Products.css';
import '../styles/components/FeaturedProducts.css';

const allCategories = ['All', ...productCategories.map(c => c.title)];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(
    allCategories.includes(categoryParam) ? categoryParam : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if URL param changes
  useEffect(() => {
    if (categoryParam && allCategories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/hero-products.png')" }} />
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Product <span>Catalog</span></h1>
            <p className="page-subtitle">
              Explore our comprehensive range of high-performance agrochemicals, 
              designed to protect your crops and maximize your harvest.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Products</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="products-filter-bar">
        <div className="container">
          <div className="filter-controls-wrap">
            {/* Category Tabs */}
            <div className="category-tabs-wrapper">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cat-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="page-section bg-gray-50 min-h-[60vh]">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <FiFilter className="text-green-600" /> 
              {activeCategory} Products
              <span className="text-sm font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full ml-2">
                {filteredProducts.length}
              </span>
            </h2>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="standard-grid"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="product-card group"
                  >
                    <div className={`product-img-card ${product.image ? 'has-image' : ''}`}>
                      {product.image ? (
                        <img src={product.image} alt={product.name} />
                      ) : (
                        <>
                          <div className="product-watermark">Aarus</div>
                          <div className="product-img-content">
                            <h4 className="product-img-name">{product.name}</h4>
                            <span className="product-img-brand">{product.packing || 'Pro Series'}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="product-bottom-info">
                      <span className="product-cat-tag">
                        {product.category}
                      </span>
                      <h3 className="product-name">
                        {product.name}
                      </h3>
                      <p className="product-desc line-clamp-2 hidden md:block">
                        {product.description}
                      </p>
                      <Link 
                        to={`/products/${product.id}`} 
                        className="btn-primary view-details-btn"
                      >
                        View Details <FiArrowRight />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="products-empty-state"
              >
                <div className="empty-state-icon-box">
                  <FiSmile />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-6 text-green-600 font-bold underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Support Banner */}
      <section className="page-section bg-white pt-0">
        <div className="container">
          <div className="products-cta-banner">
            <div className="relative z-10 max-w-xl">
              <h2 className="products-cta-title">Need Expert Advice?</h2>
              <p className="products-cta-desc">
                Not sure which product is right for your crop? Our agricultural experts 
                are here to help you choose the best solution for your farm.
              </p>
            </div>
            <div className="products-cta-btns">
              <Link to="/farmer-enquiry" className="btn-primary" style={{ backgroundColor: '#FFC947', color: '#000000', border: 'none' }}>
                Ask An Expert
              </Link>
              <a href="tel:+919146673132" className="btn-secondary" style={{ color: '#ffffff' }}>
                Call Us
              </a>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
