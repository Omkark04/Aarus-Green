import { useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import {
  FiArrowLeft, FiArrowRight, FiInfo, FiBox, FiDroplet,
  FiShield, FiCheckCircle, FiChevronRight, FiPhone, FiMessageSquare
} from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(id));
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500 mt-4">The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="btn-primary mt-8 inline-flex items-center gap-2">
          <FiArrowLeft /> Back to Catalog
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/919146673132?text=${encodeURIComponent(`Hello Aarus Greentech, I am interested in knowing more about your product: ${product.name}. Please provide more details.`)}`;

  return (
    <div className="product-detail-page">
      {/* Modern Product Section */}
      <section className="page-section bg-white" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Visuals */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                <div className="product-img-display-v2">
                  {product.image ? (
                    <div className="aspect-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '400px', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.1))' }}
                      />
                    </div>
                  ) : (
                    <div className="aspect-square" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: 'linear-gradient(135deg, #2E7D32, #1B5E20)' }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.04, color: '#fff', transform: 'rotate(-12deg)' }}>
                        <span style={{ fontSize: '8rem', fontWeight: 900, textTransform: 'uppercase' }}>AARUS</span>
                      </div>
                      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', padding: '1.5rem' }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '1rem' }}>{product.name}</h2>
                        <span style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)' }}>
                          {product.packing || 'Pack'}
                        </span>
                      </div>
                    </div>
                  )}

                  {product.badge && (
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'var(--accent-orange)', color: '#fff', padding: '0.375rem 1rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: 'var(--shadow-lg)' }}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Quick Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1.5rem' }}>
                  {[
                    { icon: <FiBox />, label: 'Packing', value: product.packing || 'Standard', color: '#16a34a' },
                    { icon: <FiDroplet />, label: 'Dosage', value: product.dose || 'See Guide', color: '#3b82f6' },
                    { icon: <FiShield />, label: 'Type', value: 'Organic', color: '#f97316' },
                  ].map((spec, i) => (
                    <div key={i} style={{ backgroundColor: '#fff', border: '1px solid var(--gray-100)', borderRadius: '1rem', padding: '1rem', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                      <div style={{ fontSize: '1.25rem', color: spec.color, display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>{spec.icon}</div>
                      <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 900, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.25rem' }}>{spec.label}</span>
                      <span className="line-clamp-1" style={{ fontWeight: 700, color: 'var(--gray-800)', fontSize: '0.85rem' }} title={spec.value}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Info Area */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Breadcrumbs */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: 'var(--gray-50)', padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid var(--gray-100)' }}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                  <FiChevronRight style={{ color: '#d1d5db' }} />
                  <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
                  <FiChevronRight style={{ color: '#d1d5db' }} />
                  <span style={{ color: '#16a34a' }}>{product.name}</span>
                </div>

                {/* Title & Category */}
                <div style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--gray-100)' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#15803d', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                    <FiInfo style={{ fontSize: '1.125rem' }} /> {product.category}
                  </div>
                  <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--gray-900)', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {product.name}
                  </h1>
                  <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#9ca3af', lineHeight: 1.4 }}>
                    {product.tagline || `High-performance ${product.category.toLowerCase()} solution.`}
                  </p>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  {product.description} Our advanced formulation ensures maximum efficiency
                  and crop safety, making it an essential part of your agricultural toolkit.
                </p>

                {/* Benefits Panel */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem', backgroundColor: '#f0fdf4', borderRadius: '1.5rem', padding: '1.5rem 2rem', border: '1px solid #dcfce7' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#fff', color: '#16a34a', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                      <FiCheckCircle />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Key Benefits</h4>
                      <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.875rem' }}>Promotes healthy growth, improves immunity, and dramatically increases total harvest yield while protecting against environmental stress.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', backgroundColor: '#fff', color: '#3b82f6', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                      <FiDroplet />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Application Method</h4>
                      <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '0.875rem' }}>Best applied during the growth stage via foliar spray or drip irrigation as per recommended dose.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="product-enq-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '1.15rem 2rem', flex: 1, justifyContent: 'center', boxShadow: '0 8px 24px rgba(22,163,74,0.25)', whiteSpace: 'nowrap' }}
                  >
                    Enquire on WhatsApp <FiArrowRight />
                  </a>
                  <a href="tel:+919146673132" className="btn-secondary" style={{ padding: '1.15rem 2rem', flex: 1, justifyContent: 'center', whiteSpace: 'nowrap' }}>
                    Speak to Expert
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications — Card Grid */}
      <section className="page-section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-tag">Product Info</span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mt-3">
                Technical <span className="text-green-600">Specifications</span>
              </h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: <FiBox style={{ fontSize: '1.5rem' }} />, label: 'Recommended Crops', value: 'All types of horticulture, ornamentals, and field crops.', bg: '#f0fdf4', border: '#bbf7d0', iconBg: '#dcfce7', iconColor: '#16a34a' },
                { icon: <FiShield style={{ fontSize: '1.5rem' }} />, label: 'Target Pests/Issues', value: product.tagline || 'Growth optimization and protection.', bg: '#fff7ed', border: '#fed7aa', iconBg: '#ffedd5', iconColor: '#ea580c' },
                { icon: <FiDroplet style={{ fontSize: '1.5rem' }} />, label: 'Available Packing', value: product.packing || 'Standard range', bg: '#eff6ff', border: '#bfdbfe', iconBg: '#dbeafe', iconColor: '#2563eb' },
                { icon: <FiCheckCircle style={{ fontSize: '1.5rem' }} />, label: 'Recommended Dose', value: product.dose || 'As per crop guide', bg: '#faf5ff', border: '#e9d5ff', iconBg: '#f3e8ff', iconColor: '#9333ea' },
                { icon: <FiInfo style={{ fontSize: '1.5rem' }} />, label: 'Usage Stage', value: 'Vegetative and Flowering Stage', bg: '#f0fdfa', border: '#99f6e4', iconBg: '#ccfbf1', iconColor: '#0d9488' },
                { icon: <FiArrowRight style={{ fontSize: '1.5rem' }} />, label: 'Mode of Action', value: 'Systemic and Contact', bg: '#fff1f2', border: '#fecdd3', iconBg: '#ffe4e6', iconColor: '#e11d48' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: '1.5rem', padding: '1.5rem', transition: 'all 0.3s ease', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: item.iconBg, color: item.iconColor, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.label}</span>
                  <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '1rem', lineHeight: 1.6 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white" style={{ padding: '2rem 0 6rem' }}>
          <div className="container">
            <div className="related-title-box">
              <div>
                <span className="section-tag" style={{ textAlign: 'left', margin: '0' }}>You might also like</span>
                <h2 className="section-title" style={{ textAlign: 'left', margin: '0.5rem 0 0' }}>Related <span className="text-green-600">Solutions</span></h2>
              </div>
              <Link to="/products" className="btn-secondary view-all-btn">
                View All <FiArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="product-card group">
                  <div className="product-img-box bg-gradient-to-br from-green-50 to-green-100/50">
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <>
                        <div className="product-watermark">Aarus</div>
                        <div className="product-img-content">
                          <h4 className="product-img-name">{p.name}</h4>
                          <span className="product-img-brand">{p.packing || 'Pro Series'}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="product-info border-t border-gray-50">
                    <span className="product-cat-tag" style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                      {p.category}
                    </span>
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-desc line-clamp-2 text-sm text-gray-500 mb-4 hidden md:block">{p.description || `Experience superior nutrition and protection with ${p.name}.`}</p>
                    <Link 
                      to={`/products/${p.id}`} 
                      className="btn-primary view-details-btn"
                    >
                      View Details <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="distributor-cta-banner">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Become a Distributor</h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              Partner with Aarus Greentech and bring world-class agrochemical solutions
              to your region. Join our mission to empower farmers.
            </p>
            <div className="distributor-cta-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/distributor-enquiry" className="btn-primary flex-1 sm:flex-none justify-center" style={{ backgroundColor: '#FFC947', color: '#000000', border: 'none' }}>
                Partner With Us
              </Link>
              <Link to="/contact" className="btn-secondary flex-1 sm:flex-none justify-center" style={{ color: '#ffffff' }}>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .related-title-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
        }
        .view-all-btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .related-title-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .view-all-btn {
            width: 100%;
            justify-content: center;
          }
          .product-enq-btns {
            flex-direction: column;
            gap: 1rem;
          }
          .product-enq-btns > a {
            width: 100% !important;
            flex: none !important;
          }
          .distributor-cta-btns {
            flex-direction: column;
          }
          .distributor-cta-btns > a {
            width: 100% !important;
          }
        }
      `}} />
    </div>
  );
}
