import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const categoryColors = {
  'Crop Protection': { bg: '#FFF3E0', color: '#E65100', dot: '#F57C00' },
  'Plant Growth Promoter': { bg: '#E8F5E9', color: '#2E7D32', dot: '#4CAF50' },
  'Nutrient Solutions': { bg: '#E3F2FD', color: '#1565C0', dot: '#2196F3' },
  'Soil Health': { bg: '#EFEBE9', color: '#6D4C41', dot: '#8D6E63' },
};

const productGradients = [
  'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
  'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)',
  'linear-gradient(135deg, #E65100 0%, #FFA726 100%)',
  'linear-gradient(135deg, #4A148C 0%, #AB47BC 100%)',
  'linear-gradient(135deg, #006064 0%, #26C6DA 100%)',
  'linear-gradient(135deg, #BF360C 0%, #FF7043 100%)',
];

export default function ProductCard({ product, index }) {
  const catStyle = categoryColors[product.category] || categoryColors['Nutrient Solutions'];
  const gradient = productGradients[index % productGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden group cursor-pointer flex flex-col transition-all duration-300 border-2 border-transparent hover:border-green-100"
    >
      {/* Scaled Product Image area */}
      <div
        className="h-64 flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        {product.badge && (
          <div
            className="absolute top-5 right-5 px-5 py-2 rounded-full text-sm font-black text-white"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}
          >
            {product.badge}
          </div>
        )}
        <span
          className="text-white text-5xl font-black opacity-15 absolute select-none tracking-tighter"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </span>
        <div className="text-center z-10 px-6">
          <p
            className="text-white text-3xl font-black leading-tight mb-1"
            style={{ fontFamily: 'Poppins, sans-serif', textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
          >
            {product.name}
          </p>
          <p className="text-white text-xs font-black uppercase tracking-[0.2em] opacity-80">Aarus Greentech</p>
        </div>
      </div>

      {/* Scaled Content area */}
      <div className="p-8 flex flex-col flex-1">
        <span
          className="inline-block px-5 py-2 rounded-full text-sm font-black mb-5 self-start shadow-sm"
          style={{ background: catStyle.bg, color: catStyle.color }}
        >
          {product.category}
        </span>

        <h4
          className="font-black text-xl mb-3 text-gray-800"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </h4>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 opacity-90 mb-6">{product.description}</p>

        {/* Scaled CTA button */}
        <button
          className="flex items-center gap-3 text-base font-black transition-all group-hover:gap-4 py-2"
          style={{ color: catStyle.color }}
        >
          View Product Details <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
