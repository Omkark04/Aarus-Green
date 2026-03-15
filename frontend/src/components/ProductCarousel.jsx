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
    <section className="py-16 bg-white overflow-hidden w-full flex justify-center flex-col items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}
          >
            Our Complete{' '}
            <span style={{ color: '#F57C00' }}>Product Range</span>
          </h2>
          <p className="text-gray-400 text-sm">19+ Premium Agrochemical Products</p>
        </motion.div>
      </div>

      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-5"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {allProducts.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-shrink-0 w-48 h-36 rounded-2xl flex flex-col items-center justify-center shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 select-none"
              style={{ background: gradients[i % gradients.length] }}
            >
              <p
                className="text-white text-sm font-bold text-center px-3 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif', textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
              >
                {product.name}
              </p>
              <p className="text-white text-xs opacity-70 mt-1 text-center px-2">
                {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
