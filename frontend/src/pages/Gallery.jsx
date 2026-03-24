import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { galleryImages, galleryCategories } from '../data/gallery';
import { FiChevronRight, FiPlay, FiMaximize2 } from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    return activeCategory === 'All' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Visual <span>Impact</span></h1>
            <p className="page-subtitle">
              Take a closer look at our latest farm visits, product showcases, 
              and events that highlight our journey in Indian agriculture.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="gallery-filter-bar">
        <div className="container">
          <div className="gallery-filter-tabs">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="page-section bg-gray-50">
        <div className="container">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="gallery-grid"
            >
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="gallery-item"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-category">
                      {img.category}
                    </span>
                    <h4 className="gallery-overlay-title">
                      {img.title}
                    </h4>
                    <FiMaximize2 className="gallery-overlay-icon" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Videos Section */}
      <section className="page-section bg-white" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="gallery-video-section">
            <div className="gallery-video-text">
              <span className="section-tag" style={{ textAlign: 'inherit', margin: '0' }}>Testimonials & Demos</span>
              <h2 className="section-title" style={{ textAlign: 'inherit', margin: '1rem 0 2rem' }}>
                See the <span className="text-green-600">Results</span> for Yourself
              </h2>
              <p className="text-gray-500" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
                Watch our field demos and hear directly from successful farmers 
                who have transformed their yields using Aarus Greentech's 
                advanced agrochemical solutions.
              </p>
            </div>
            
            <div className="gallery-video-card">
              <img 
                src="https://images.unsplash.com/photo-1598986646513-93e5bd20f764?auto=format&fit=crop&q=80&w=1000" 
                alt="Video Placeholder"
              />
              <div className="gallery-video-play-overlay">
                <div className="gallery-video-play-btn">
                  <FiPlay style={{ marginLeft: '3px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gallery-bg-blob" />
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-inner">
                <div className="lightbox-img-wrap">
                  <img src={selectedImage.url} alt={selectedImage.title} />
                </div>
                <div className="lightbox-info">
                  <span className="lightbox-category">
                    {selectedImage.category}
                  </span>
                  <h3 className="lightbox-title">{selectedImage.title}</h3>
                  <p className="lightbox-desc">
                    {selectedImage.description}
                  </p>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="btn-primary"
                    style={{ backgroundColor: '#1B5E20' }}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
