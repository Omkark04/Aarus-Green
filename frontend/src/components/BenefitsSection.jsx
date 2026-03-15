import { motion } from 'framer-motion';
import { FaSeedling, FaShieldAlt, FaFlask, FaLeaf, FaChartLine, FaWater } from 'react-icons/fa';

const benefits = [
  {
    icon: FaChartLine,
    title: 'Higher Crop Yield',
    desc: 'Proven formulas that boost harvest volume and productivity by up to 30% across all major crops.',
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
    bg: '#E8F5E9',
    stat: 'Up to 30%',
    statLabel: 'yield increase',
  },
  {
    icon: FaSeedling,
    title: 'Stronger Plant Growth',
    desc: 'Advanced growth promoters stimulate robust root development and accelerate plant maturation.',
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #1565C0, #42A5F5)',
    bg: '#E3F2FD',
    stat: '2x',
    statLabel: 'root strength',
  },
  {
    icon: FaShieldAlt,
    title: 'Disease Resistance',
    desc: 'Multi-action protection formulas that shield crops from fungal, bacterial, and pest attacks.',
    color: '#B71C1C',
    gradient: 'linear-gradient(135deg, #B71C1C, #EF5350)',
    bg: '#FFEBEE',
    stat: '95%',
    statLabel: 'protection rate',
  },
  {
    icon: FaFlask,
    title: 'Nutrient Absorption',
    desc: 'Chelated nutrients and biostimulants that maximize uptake efficiency across all crop types.',
    color: '#6A1B9A',
    gradient: 'linear-gradient(135deg, #6A1B9A, #AB47BC)',
    bg: '#F3E5F5',
    stat: '3x',
    statLabel: 'faster absorption',
  },
  {
    icon: FaLeaf,
    title: 'Soil Fertility',
    desc: 'Organic and mineral-based formulas that restore and maintain long-term soil health and vitality.',
    color: '#6D4C41',
    gradient: 'linear-gradient(135deg, #6D4C41, #A1887F)',
    bg: '#EFEBE9',
    stat: '100%',
    statLabel: 'organic-compatible',
  },
  {
    icon: FaWater,
    title: 'Sustainable Farming',
    desc: 'Eco-friendly solutions that protect the environment while securing healthy agricultural yields.',
    color: '#00695C',
    gradient: 'linear-gradient(135deg, #00695C, #26A69A)',
    bg: '#E0F2F1',
    stat: 'Zero',
    statLabel: 'harmful residues',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function BenefitsSection() {
  return (
    <section className="py-32 w-full flex justify-center" style={{ background: 'linear-gradient(180deg, #fff 0%, #F1F8E9 100%)' }}>
      <div className="max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        {/* Scaled Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-6 py-2.5 rounded-full text-base font-black mb-6 shadow-sm"
            style={{ background: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' }}
          >
            Farmer Benefits
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#1B5E20' }}
          >
            Why Farmers <span style={{ color: '#F57C00' }}>Trust Us</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Every product is engineered with the farmer in mind — delivering measurable,
            real-world benefits at every stage of the crop cycle.
          </p>
        </motion.div>

        {/* Scaled Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border transition-all duration-300 group min-h-[380px] flex flex-col"
                style={{ borderColor: '#F0F0F0' }}
              >
                {/* Scaled Gradient top bar */}
                <div
                  className="h-2.5 w-full"
                  style={{ background: b.gradient }}
                />

                <div className="p-10 flex flex-col flex-1">
                  {/* Scaled Icon + Stat Row */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: b.bg }}
                    >
                      <Icon size={36} style={{ color: b.color }} />
                    </div>
                    <div className="text-right">
                      <p
                        className="text-3xl font-black leading-tight mb-1"
                        style={{ color: b.color, fontFamily: 'Poppins, sans-serif' }}
                      >
                        {b.stat}
                      </p>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-widest">{b.statLabel}</p>
                    </div>
                  </div>

                  <h4
                    className="font-black text-xl mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#1A1A1A' }}
                  >
                    {b.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed flex-1 opacity-90">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
