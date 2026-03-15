import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHeartbeat, FaRecycle } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const values = [
  { icon: <FaRocket />, title: 'Innovation', desc: 'Cutting-edge research driving next-gen crop solutions.' },
  { icon: <FaEye />, title: 'Vision', desc: 'A future where every Indian farmer thrives with modern agrochemicals.' },
  { icon: <FaHeartbeat />, title: 'Quality', desc: 'Rigorous testing ensures every product meets the highest standards.' },
  { icon: <FaRecycle />, title: 'Sustainability', desc: 'Eco-conscious practices that protect soil, water, and the environment.' },
];

const highlights = [
  'Gujarat-based world-class manufacturing',
  '19+ premium products across 4 dynamic categories',
  'Serving 1000+ farmers across the Indian landscape',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Massive Blob */}
            <div
              className="absolute -top-20 -left-20 w-[35rem] h-[35rem] rounded-full blur-[120px] opacity-20"
              style={{ background: '#A5D6A7' }}
            />

            {/* Scaled Image Container */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white">
              <img
                src="/about-farmer.png"
                alt="Indian farmer inspecting healthy crops"
                className="w-full h-[640px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.4) 100%)' }} />
            </div>

            {/* Scaled Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 z-20 p-10 rounded-[2.5rem] shadow-2xl text-white text-center"
              style={{ background: 'linear-gradient(135deg, #1B5E20, #2E7D32)' }}
            >
              <p className="text-6xl font-black leading-none mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>10+</p>
              <p className="text-lg opacity-90 font-bold uppercase tracking-widest">Years of<br/>Innovation</p>
            </motion.div>

            {/* Scaled Highlight pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-10 -right-10 z-20 px-8 py-4 rounded-full shadow-2xl text-lg font-black"
              style={{ background: '#FFA000', color: '#fff' }}
            >
              🌾 Gujarat's Own Brand
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pl-4"
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-block px-6 py-2.5 rounded-full text-base font-black mb-8 shadow-sm"
                style={{ background: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' }}
              >
                About Aarus Greentech
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}
            >
              Cultivating a Greener,{' '}
              <br/><span style={{ color: '#F57C00' }}>More Productive</span> Future
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed mb-6 opacity-90">
              Aarus Greentech LLP is a Gujarat-based agrochemical company dedicated to empowering Indian
              farmers with scientifically advanced crop solutions. We combine deep agricultural expertise
              with modern science to deliver products that truly make a difference in the field.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed mb-10">
              From plant growth promoters to full-season crop protection, our portfolio of 19+ products
              serves farmers across India — boosting yields, protecting harvests, and ensuring sustainable livelihoods.
            </motion.p>

            {/* Scaled Highlight checklist */}
            <motion.ul variants={containerVariants} className="grid gap-4 mb-12">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 text-lg font-bold text-gray-800 bg-green-50/50 p-4 rounded-2xl border border-green-100"
                >
                  <FiCheckCircle size={26} style={{ color: '#2E7D32', flexShrink: 0 }} />
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            {/* Scaled Values Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(46,125,50,0.15)' }}
                  className="p-8 rounded-3xl border-2 transition-all duration-300"
                  style={{ borderColor: '#E8F5E9', background: '#FAFFF8' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-5 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2E7D32, #66BB6A)' }}
                  >
                    {v.icon}
                  </div>
                  <h4 className="font-black text-lg mb-2 pl-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}>
                    {v.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed pl-1">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
