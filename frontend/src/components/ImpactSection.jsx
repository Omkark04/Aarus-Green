import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 19, suffix: '+', label: 'Products', desc: 'Premium agrochemical products' },
  { value: 1000, suffix: '+', label: 'Farmers', desc: 'Across India trust us' },
  { value: 10, suffix: '+', label: 'Crop Solutions', desc: 'For diverse crop types' },
  { value: 4, suffix: '', label: 'Product Lines', desc: 'Complete crop care range' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="py-32 relative overflow-hidden w-full flex justify-center"
      style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)' }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Massive Decorative */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #A5D6A7, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #66BB6A, transparent)' }} />

      <div className="relative z-10 max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        {/* Scaled Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-6 py-2.5 rounded-full text-base font-black mb-6 text-white shadow-lg"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)' }}
          >
            Our National Impact
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Serving Farmers <span style={{ color: '#FFA000' }}>Across India</span>
          </h2>
          <p className="text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed opacity-90">
            From Gujarat to across the nation — Aarus Greentech products are changing
            the way India farms, one field at a time.
          </p>
        </motion.div>

        {/* Scaled Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}
              className="rounded-[3rem] p-12 text-center backdrop-blur-md transition-all border-2 flex flex-col items-center justify-center min-h-[320px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                borderColor: 'rgba(255,255,255,0.15)',
              }}
            >
              <p
                className="text-6xl sm:text-7xl font-black mb-4 leading-none"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#FFA000', textShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} inView={isInView} />
              </p>
              <p className="text-white font-black text-2xl mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.label}
              </p>
              <p className="text-green-100 text-sm font-bold opacity-80 uppercase tracking-widest">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text Scaled */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-6 px-10 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            <span className="text-green-100 text-lg font-black tracking-wide flex items-center gap-2">
              🌾 Quality Manufacturing
            </span>
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-green-100 text-lg font-black tracking-wide flex items-center gap-2">
              🔬 Scientific Protection
            </span>
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-green-100 text-lg font-black tracking-wide flex items-center gap-2">
              🚀 Field Innovation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
