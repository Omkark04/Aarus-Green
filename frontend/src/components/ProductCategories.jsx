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
    <section
      id="solutions"
      className="py-32 relative overflow-hidden w-full flex justify-center"
      style={{ background: 'linear-gradient(180deg, #F1F8E9 0%, #E8F5E9 100%)' }}
    >
      {/* Massive Decorative blobs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"
        style={{ background: 'radial-gradient(circle, #A5D6A7, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full opacity-25 translate-y-1/2 -translate-x-1/3"
        style={{ background: 'radial-gradient(circle, #66BB6A, transparent)' }} />

      <div className="relative z-10 max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        {/* Scaled Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-6 py-2 rounded-full text-base font-black mb-6 shadow-sm"
            style={{ background: 'rgba(46,125,50,0.15)', color: '#2E7D32', border: '1px solid rgba(46,125,50,0.25)' }}
          >
            Our Professional Solutions
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}
          >
            Complete Crop Care <span style={{ color: '#F57C00' }}>Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From soil health to crop protection, we offer scientifically formulated products
            for every stage of your farming journey.
          </p>
        </motion.div>

        {/* Scaled Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ y: -15, boxShadow: '0 40px 80px rgba(0,0,0,0.14)' }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl cursor-pointer group transition-all duration-300 relative overflow-hidden flex flex-col min-h-[420px]"
            >
              {/* Massive subtle bg watermark */}
              <div
                className="absolute -bottom-8 -right-8 text-[12rem] opacity-[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-500"
                style={{ lineHeight: 1 }}
              >
                {cat.icon}
              </div>

              {/* Scaled Number badge */}
              <div
                className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white shadow-lg"
                style={{ background: cat.color, opacity: 0.9 }}
              >
                0{i + 1}
              </div>

              {/* Scaled Icon */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-[0_15px_30px_rgba(0,0,0,0.08)] group-hover:scale-110 transition-transform duration-300"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>

              {/* Scaled Title */}
              <h3
                className="text-2xl font-black mb-4 pr-10"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
              >
                {cat.title}
              </h3>

              {/* Scaled Desc */}
              <p className="text-gray-500 text-base leading-relaxed mb-8 flex-1 opacity-90">{cat.desc}</p>

              {/* Divider */}
              <div className="h-px w-full mb-6 opacity-30" style={{ background: cat.color }} />

              {/* Scaled Link */}
              <div
                className="flex items-center gap-3 text-lg font-black group-hover:gap-5 transition-all duration-300"
                style={{ color: cat.color }}
              >
                Explore Products <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
