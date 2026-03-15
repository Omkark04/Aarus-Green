import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaLeaf, FaSeedling, FaFlask } from 'react-icons/fa';

const badges = [
  { icon: <FaLeaf />, text: '19+ Products' },
  { icon: <FaSeedling />, text: '1000+ Farmers' },
  { icon: <FaFlask />, text: 'Scientifically Proven' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full py-20"
      style={{
        background: 'linear-gradient(135deg, #0A3D0F 0%, #1B5E20 35%, #2E7D32 70%, #388E3C 100%)',
      }}
    >
      {/* Full-bleed BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')", opacity: 0.22 }}
      />

      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(10,61,15,0.92) 0%, rgba(27,94,32,0.65) 55%, rgba(56,142,60,0.15) 100%)',
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-24 right-20 w-[30rem] h-[30rem] rounded-full blur-[100px] opacity-20"
        style={{ background: '#66BB6A' }} />
      <div className="absolute bottom-10 left-10 w-[25rem] h-[25rem] rounded-full blur-[100px] opacity-15"
        style={{ background: '#A5D6A7' }} />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-bold mb-10 shadow-2xl"
              style={{
                background: 'rgba(255,160,0,0.2)',
                color: '#FFC947',
                border: '1px solid rgba(255,160,0,0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <FaLeaf className="text-sm" />
              India's Trusted Agrochemical Brand
            </motion.div>

            <h1
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] mb-8"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-2px' }}
            >
              Empowering
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #FFC947, #FFA000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Agriculture
              </span>
              <br />
              for India
            </h1>

            <p className="text-xl sm:text-2xl text-green-50 mb-12 leading-relaxed max-w-xl opacity-95">
              Advanced agrochemicals and fertilizers engineered to maximize crop yield,
              protect your harvest, and sustain the future of Indian farming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 mb-16">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(245,124,0,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-white shadow-2xl transition-all text-lg"
                style={{
                  background: 'linear-gradient(135deg, #E65100, #FFA000)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Explore Products <FiArrowRight className="text-xl" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black transition-all border-2 text-lg shadow-xl"
                style={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  background: 'rgba(255,255,255,0.12)',
                  fontFamily: 'Poppins, sans-serif',
                  backdropFilter: 'blur(15px)',
                }}
              >
                <FiPhone className="text-xl" /> Contact Us
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl text-base font-bold shadow-lg"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#FFF',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-xl" style={{ color: '#69F0AE' }}>{b.icon}</span>
                  {b.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-8 rounded-[3.5rem] opacity-30 blur-[60px]"
              style={{ background: 'linear-gradient(135deg, #A5D6A7, #66BB6A)' }}
            />

            {/* Main image */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-4"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <img
                src="/hero-bg.png"
                alt="Lush green farmland in India"
                className="w-full h-[580px] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)' }} />
              <p className="absolute bottom-8 left-8 text-white text-lg font-black opacity-90 tracking-wide">
                📍 Ankleshwar, Gujarat — Serving India
              </p>
            </div>

            {/* Floating stat cards - Scaled Up */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-12 z-20 px-10 py-7 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex items-center gap-6"
              style={{ background: '#fff' }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner"
                style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)' }}>
                <FaSeedling style={{ color: '#2E7D32', fontSize: 32 }} />
              </div>
              <div>
                <p className="text-4xl font-black leading-none mb-1" style={{ color: '#2E7D32', fontFamily: 'Poppins, sans-serif' }}>19+</p>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Premium Products</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 z-20 px-10 py-7 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex items-center gap-6"
              style={{ background: '#fff' }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner"
                style={{ background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)' }}>
                <FaLeaf style={{ color: '#F57C00', fontSize: 32 }} />
              </div>
              <div>
                <p className="text-4xl font-black leading-none mb-1" style={{ color: '#F57C00', fontFamily: 'Poppins, sans-serif' }}>1000+</p>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Farmers Served</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom SVG wave - Adjusted for scale */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L1440 120L1440 45C1200 120 960 15 720 45C480 75 240 5 0 45L0 120Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
