import { motion } from 'framer-motion';
import { FiPhone, FiUserPlus } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section 
      id="contact" 
      className="w-full flex justify-center py-40 overflow-hidden relative" 
      style={{ background: '#F5F5F5' }}
    >
      {/* Full-width container background coverage */}
      <div className="absolute inset-0 w-full h-full bg-white" />
      
      <div className="relative z-10 max-w-[100vw] w-full px-4 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-[4rem] overflow-hidden p-20 lg:p-32 text-center shadow-[0_50px_100px_rgba(27,94,32,0.3)]"
          style={{ 
            background: 'linear-gradient(135deg, #0A3D0F 0%, #1B5E20 50%, #2E7D32 100%)',
          }}
        >
          {/* Huge Decorative elements */}
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[100px]"
            style={{ background: '#66BB6A' }} />
          <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-[120px]"
            style={{ background: '#A5D6A7' }} />

          <div className="relative z-10">
            <motion.span
              className="inline-block px-8 py-3 rounded-full text-lg font-black mb-10 shadow-2xl"
              style={{ 
                background: 'rgba(255,160,0,0.25)', 
                color: '#FFCA28', 
                border: '1px solid rgba(255,160,0,0.4)',
                backdropFilter: 'blur(15px)'
              }}
            >
              Ready to Grow Your Harvest?
            </motion.span>
            
            <h2
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black text-white mb-8 leading-[1.05] tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Need the Perfect <br/>
              <span style={{ color: '#FFA000' }}>Crop Solution?</span>
            </h2>
            
            <p className="text-2xl text-green-50 mb-16 max-w-4xl mx-auto leading-relaxed opacity-90 font-medium">
              Talk to our agricultural experts today. We'll help you choose the right products
              for your specific crops, soil type, and regional farming goals. Join the thousands
              of farmers who have transformed their yields with Aarus Greentech.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <motion.a
                href="tel:+919146373132"
                whileHover={{ scale: 1.06, boxShadow: '0 25px 60px rgba(245,124,0,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-4 px-12 py-7 rounded-[2rem] font-black text-white shadow-2xl transition-all text-2xl"
                style={{
                  background: 'linear-gradient(135deg, #F57C00, #FFA000)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <FiPhone className="text-3xl" /> Call Us Now
              </motion.a>
              <motion.a
                href="mailto:aarusgreentech@gmail.com"
                whileHover={{ scale: 1.06, boxShadow: '0 25px 60px rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-4 px-12 py-7 rounded-[2rem] font-black transition-all border-4 text-2xl shadow-xl"
                style={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.1)',
                  fontFamily: 'Poppins, sans-serif',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <FiUserPlus className="text-3xl" /> Become Distributor
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
