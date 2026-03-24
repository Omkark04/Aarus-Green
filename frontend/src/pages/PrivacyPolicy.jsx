import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiShield, FiLock, FiEye, FiFileText } from 'react-icons/fi';
import '../styles/pages/SubPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page" style={{ backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)', padding: '10rem 0 6rem' }}>
        <div className="container page-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Privacy <span style={{ color: '#FFC947' }}>Policy</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '40rem', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Your trust is our most valuable asset. Learn how we protect and manage your data with transparency.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(0,0,0,0.2)', padding: '0.5rem 1rem', borderRadius: '9999px', backdropFilter: 'blur(10px)' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> <FiChevronRight /> <span style={{ color: '#FFC947' }}>Privacy Policy</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <FiShield />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>Information Collection</h2>
                </div>
                <div style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  <p style={{ marginBottom: '1rem' }}>
                    Aarus Greentech LLP collects information to provide better services to our users. We collect information in the following ways:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>•</span>
                      <span>Information you give us (e.g., name, email, phone number via contact forms).</span>
                    </li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>•</span>
                      <span>Information we get from your use of our services (e.g., device information, log information, location information).</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#eff6ff', color: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <FiEye />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>How we use Information</h2>
                </div>
                <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Aarus Greentech and our users. We also use this information to offer you tailored content – like giving you more relevant product information and updates.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#fff7ed', color: '#ea580c', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <FiLock />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>Information Security</h2>
                </div>
                <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We work hard to protect Aarus Greentech and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#fdf2f8', color: '#db2777', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <FiFileText />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937' }}>Compliance and Cooperation</h2>
                </div>
                <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We regularly review our compliance with our Privacy Policy. We also adhere to several self-regulatory frameworks. When we receive formal written complaints, we will contact the person who made the complaint to follow up.
                </p>
              </motion.div>

            </div>

            <div style={{ marginTop: '6rem', padding: '3rem', backgroundColor: '#fff', borderRadius: '2rem', border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1f2937', marginBottom: '1rem' }}>Questions about our policy?</h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Our team is here to help with any concerns about your data privacy.</p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 2.5rem' }}>
                Contact Support
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
