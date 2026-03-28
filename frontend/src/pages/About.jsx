import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiShield, FiTarget, FiStar, FiAward, FiArrowRight, FiUsers, FiTrendingUp, FiEye } from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/About.css';

import { FaLeaf, FaFlask, FaHandshake, FaSeedling, FaGlobe, FaCertificate } from 'react-icons/fa';
import founderImg from '../assets/Owner/Sunil Pawar.jpeg';
import aboutHeroBg from '../assets/about-bg.jpeg';

const values = [
  { icon: <FaLeaf />, title: 'Farmer First', desc: 'Every product is built around the practical needs of the Indian farmer.' },
  { icon: <FaFlask />, title: 'Science Backed', desc: 'Rigorous R&D and field testing for every formulation.' },
  { icon: <FaSeedling />, title: 'Sustainability', desc: 'Protecting crops today while preserving the soil for tomorrow.' },
  { icon: <FaHandshake />, title: 'Integrity', desc: 'Transparent business practices and honest relationships.' },
  { icon: <FiAward />, title: 'Quality', desc: 'ISI-certified manufacturing with zero compromise on standards.' },
  { icon: <FiTrendingUp />, title: 'Innovation', desc: 'Continuously evolving our solutions to tackle new pest challenges.' },
];

const milestones = [
  { year: '2020', title: 'The Beginning', desc: 'Aarus Greentech LLP was founded in Ankleshwar, Gujarat with a vision to modernize Indian farming.' },
  { year: '2021', title: 'First 5 Products', desc: 'Launched our core range of plant growth regulators and biostimulants.' },
  { year: '2022', title: 'ISI Certification', desc: 'Achieved prestigious quality benchmarks and expanded our manufacturing facility.' },
  { year: '2023', title: 'Regional Expansion', desc: 'Established a distribution network spanning across 5 major agricultural states.' },
  { year: '2024', title: 'Digital Integration', desc: 'Launched farmer support initiatives and advanced crop protection research.' },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${aboutHeroBg})` }} />
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Our <span>Story</span></h1>
            <p className="page-subtitle">
              At Aarus Greentech, we combine cutting-edge science with deep-rooted 
              agricultural knowledge to empower the heart of India — our farmers.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="content-row">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag" style={{ textAlign: 'left', margin: '0' }}>Since 2020</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '1rem 0 2rem' }}>
                Cultivating Excellence in <span className="text-green-600">Agrochemicals</span>
              </h2>
              <div className="about-narrative-text">
                <p>
                  AARUS GREENTECH LLP is more than just a manufacturer; we are a dedicated partner 
                  in the Indian agricultural journey. Based in the industrial hub of Ankleshwar, 
                  Gujarat, we specialize in the production of high-performance agrochemicals, 
                  pesticides, and specialized seeds.
                </p>
                <p>
                  Our journey began with a simple observation: farmers needed solutions that were 
                  scientifically advanced yet practical for local soil and climate conditions. 
                  By investing heavily in R&D and field testing, we've developed a product range 
                  that consistently delivers higher yields and better crop protection.
                </p>
                <p>
                  Today, we are proud to serve thousands of farmers across the nation, 
                  helping them overcome modern agricultural challenges with sustainable, 
                  reliable, and cost-effective solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="about-image-column"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
                alt="Agricultural Research" 
                className="about-main-img"
              />
              <div className="about-stat-badge">
                <div className="about-stat-val">100%</div>
                <div className="about-stat-label">Farmer Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="page-section bg-gray-50" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="founder-flex-row" style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Image Column */}
            <motion.div 
              style={{ flex: '0 0 300px', width: '100%', maxWidth: '300px' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="founder-image-wrapper">
                <img 
                  src={founderImg} 
                  alt="Sunil Pawar - Founder" 
                  className="founder-main-img"
                  style={{ 
                    width: '100%', 
                    borderRadius: '2rem', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '8px solid white'
                  }}
                />
                <div className="founder-tag-card">
                  <h3 className="text-xl font-black text-gray-900">Sunil Pawar</h3>
                  <p className="text-green-700 font-bold text-sm">Founder / Director</p>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              style={{ flex: '1', minWidth: '350px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="founder-content">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8" style={{ lineHeight: 1.2, marginTop: 0 }}>
                  Sunil <span className="text-green-600">Pawar</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    A visionary leader and the driving force behind our endeavors, brings a unique perspective to the world of business. Born as a farmer's son, Sunil's roots are firmly grounded in the principles of hard work, resilience, and a deep appreciation for the land.
                  </p>
                  <p>
                    His journey from the fields to the boardroom reflects a commitment to bridging the gap between traditional values and modern business practices. Sunil's upbringing has instilled in him a profound understanding of the challenges faced by farmers and a sincere desire to contribute positively to the agricultural community.
                  </p>
                  <p>
                    With a background in the chemical industry, Sunil has garnered years of experience in processes, quality control, and innovation. Now, as we lead Aarus Greentech, his unique background as a farmer's son serves as a guiding light, ensuring that our endeavors are not just about business success but also about fostering sustainable practices, supporting local farmers, and creating products that reflect the authenticity of our agricultural heritage.
                  </p>
                  <p className="font-medium italic border-l-4 border-green-500 pl-6 py-2 bg-green-50 rounded-r-xl">
                    Sunil's commitment to excellence, coupled with his innate understanding of farming, positions him as a leader dedicated to making a meaningful impact in both the business and agricultural realms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="mission-vision-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mv-icon-wrap mv-icon-green">
                <FiTarget />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize Indian agriculture by providing world-class agrochemical solutions 
                that maximize crop yields, promote sustainable farming practices, and ensure 
                the prosperity of every farmer we serve through science and innovation.
              </p>
            </motion.div>
 
            <motion.div 
              className="mission-vision-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mv-icon-wrap mv-icon-blue">
                <FiEye />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted and innovative agrochemical brand, recognized globally 
                for our commitment to agricultural excellence, environmental stewardship, 
                and the sustained growth of the farming community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag">Shared Beliefs</span>
            <h2 className="section-title">The Principles that <span className="text-green-600">Guide Us</span></h2>
          </div>
          <div className="standard-grid">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="value-icon-wrap">{v.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{v.title}</h4>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '5rem 0', background: '#f8faf8' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="text-center mb-16">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Key <span className="text-green-600">Milestones</span></h2>
            <p className="section-desc">Our pursuit of agricultural excellence, year by year</p>
          </div>

          {/* Horizontal Timeline */}
          <div className="timeline-wrapper" style={{ overflowX: 'auto', paddingBottom: '1rem', WebkitOverflowScrolling: 'touch', margin: '0 -1rem', padding: '2rem 1rem' }}>
            <div className="timeline-grid" style={{ position: 'relative', minWidth: '800px' }}>
              {/* Horizontal line */}
              <div style={{
                position: 'absolute',
                top: '2.5rem',
                left: '2%',
                right: '2%',
                height: '3px',
                background: 'linear-gradient(90deg, #C8E6C9, #2E7D32, #C8E6C9)',
                borderRadius: '2px',
                zIndex: 1,
              }} />

              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, gap: '1rem', position: 'relative', zIndex: 2 }}>
                {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  {/* Dot on timeline */}
                  <div style={{
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '50%',
                    background: '#2E7D32',
                    border: '3px solid #fff',
                    boxShadow: '0 0 0 3px #2E7D32',
                    marginBottom: '1.5rem',
                    flexShrink: 0,
                  }} />

                  {/* Vertical connector */}
                  <div style={{
                    width: '2px',
                    height: '2rem',
                    background: '#C8E6C9',
                    marginBottom: '1rem',
                  }} />

                  {/* Card */}
                  <div style={{
                    background: '#fff',
                    borderRadius: '1.25rem',
                    padding: '1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #E8F5E9',
                    width: '100%',
                    transition: 'all 0.3s ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(46,125,50,0.12)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
                  >
                    <div style={{
                      display: 'inline-block',
                      background: '#FFC947',
                      color: '#000',
                      fontWeight: 900,
                      fontSize: '0.875rem',
                      padding: '0.25rem 1rem',
                      borderRadius: '9999px',
                      marginBottom: '0.75rem',
                    }}>{m.year}</div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1B5E20', marginBottom: '0.5rem' }}>{m.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="page-section bg-white text-center">
        <div className="container">
          <div className="mb-12">
            <h3 className="section-title">Accreditations & <span className="text-green-600">Trust</span></h3>
            <p className="section-desc">Our commitment to quality is recognized by leading certification bodies</p>
          </div>
          <div className="trust-badges-wrap">
            <div className="trust-badge-item">
              <FaCertificate className="trust-badge-icon" />
              <span className="font-bold text-gray-500">ISI CERTIFIED</span>
            </div>
            <div className="trust-badge-item">
              <FaGlobe className="trust-badge-icon" />
              <span className="font-bold text-gray-500">ISO 9001:2015</span>
            </div>
            <div className="trust-badge-item">
              <FiCheckCircle className="trust-badge-icon" />
              <span className="font-bold text-gray-500">CIB REGISTERED</span>
            </div>
            <div className="trust-badge-item">
              <FiAward className="trust-badge-icon" />
              <span className="font-bold text-gray-500">MSME REGISTERED</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-gray-50">
        <div className="container">
          <div className="about-cta-banner">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Partner with Aarus?</h2>
              <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
                Join our growing network of distributors or consult our experts for 
                tailored agricultural solutions. Together, we grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-secondary" style={{ backgroundColor: '#ffffff', color: '#1B5E20' }}>
                  Contact Us
                </Link>
                <Link to="/distributor-enquiry" className="btn-primary" style={{ backgroundColor: '#FFC947', color: '#000000', border: 'none' }}>
                  Become a Distributor
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
