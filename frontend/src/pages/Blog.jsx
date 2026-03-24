import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';
import { FiChevronRight, FiCalendar, FiArrowRight, FiMail, FiClock } from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/Blog.css';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return activeCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Knowledge <span>Center</span></h1>
            <p className="page-subtitle">
              Expert agricultural tips, latest pest alerts, and company news 
              to keep you ahead in every farming season.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Blog</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && (
        <section className="page-section bg-white" style={{ paddingBottom: 0 }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="blog-featured-overlay"
            >
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
              />
              <div className="blog-gradient-overlay" />
              
              <div className="blog-featured-body">
                <span className="blog-featured-tag">
                  Featured Article
                </span>
                <h2 className="text-3xl font-black" style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  {featuredPost.title}
                </h2>
                <div className="blog-card-meta" style={{ marginBottom: '2rem', opacity: 0.8 }}>
                  <span className="flex items-center gap-2"><FiCalendar /> {featuredPost.date}</span>
                  <span className="text-yellow-400">#{featuredPost.category}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="btn-primary" style={{ backgroundColor: '#FFC947', color: '#000', border: 'none' }}>
                  Read Full Story <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="blog-filter-bar">
        <div className="container">
          <div className="blog-filter-tabs">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="page-section bg-gray-50">
        <div className="container">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="blog-grid"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="blog-card"
                >
                  <div className="blog-card-img-wrap">
                    <img 
                      src={post.image} 
                      alt={post.title}
                    />
                    <div className="blog-card-category">
                      {post.category}
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                      <span className="flex items-center gap-1"><FiClock /> 4 min read</span>
                    </div>
                    <h3 className="blog-card-title">
                      {post.title}
                    </h3>
                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="blog-card-link"
                    >
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="page-section bg-white" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-newsletter">
            <div className="blog-newsletter-content">
              <h2 className="text-3xl font-black text-white" style={{ marginBottom: '1.5rem' }}>Stay Informed</h2>
              <p className="text-green-50" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                Join our newsletter to receive the latest crop tips, seasonal alerts, 
                and product updates directly in your inbox every month.
              </p>
            </div>
            
            <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="blog-newsletter-input-wrap">
                <div style={{ position: 'relative', flex: 1 }}>
                  <FiMail className="input-icon" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#2E7D32', fontSize: '1.25rem' }} />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                  />
                </div>
                <button type="submit">
                  Subscribe
                </button>
              </div>
              <p className="blog-newsletter-note">
                We respect your privacy. No spam, only knowledge.
              </p>
            </form>

            <div className="blog-newsletter-glow" />
          </div>
        </div>
      </section>
    </div>
  );
}
