import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/components/FeaturedProducts.css';

export default function ProductCarousel() {
  return (
    <section className="carousel-section" id="all-products" style={{ padding: '0', margin: '0' }}>
      <div className="carousel-track-wrap" style={{ padding: '0.75rem 0' }}>
        <div className="carousel-track">
          {[...products, ...products].map((p, i) => (
            <Link to={`/products/${p.id}`} key={`${p.id}-${i}`} className="carousel-chip" style={{ borderRadius: '0.75rem' }}>
              {p.image ? (
                <img 
                  src={p.image} 
                  alt={p.name} 
                  style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    objectFit: 'contain', 
                    borderRadius: '0.5rem',
                    flexShrink: 0 
                  }} 
                />
              ) : (
                <span className="carousel-chip-icon">🌿</span>
              )}
              <span className="carousel-chip-name">{p.name}</span>
              <span className="carousel-chip-cat">{p.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
