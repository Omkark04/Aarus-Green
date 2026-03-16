import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const gradients = [
  'linear-gradient(135deg, #2E7D32, #66BB6A)',
  'linear-gradient(135deg, #1565C0, #42A5F5)',
  'linear-gradient(135deg, #E65100, #FFA726)',
  'linear-gradient(135deg, #4A148C, #AB47BC)',
  'linear-gradient(135deg, #006064, #26C6DA)',
  'linear-gradient(135deg, #BF360C, #FF7043)',
  'linear-gradient(135deg, #1B5E20, #43A047)',
  'linear-gradient(135deg, #0D47A1, #1E88E5)',
];

const allProducts = [...products, ...products];

export default function ProductCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let animId;
    const speed = 0.5;

    const animate = () => {
      if (!paused) {
        pos += speed;
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  return (
    <section className="py-20 bg-white overflow-hidden w-full flex flex-col items-center">
      <div className="container px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-bold mb-2 text-green-800"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Complete{' '}
            <span className="text-orange-500">Product Range</span>
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
            19+ Premium Agrochemical Products
          </p>
        </motion.div>
      </div>

      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 py-4"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {allProducts.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="shrink-0 rounded-2xl flex flex-col items-center justify-center shadow-md cursor-pointer transition-all select-none carousel-item-hover"
              style={{ 
                background: gradients[i % gradients.length],
                width: '12rem',
                height: '9rem'
              }}
            >
              <p
                className="text-white text-sm font-extrabold text-center px-4 leading-tight"
                style={{ 
                  fontFamily: 'var(--font-heading)', 
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)' 
                }}
              >
                {product.name}
              </p>
              <p className="text-white text-xs opacity-80 mt-1-5 text-center px-3 font-bold">
                {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .carousel-item-hover:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .mt-1-5 { margin-top: 0.375rem; }
      ` }} />
    </section>
  );
}
