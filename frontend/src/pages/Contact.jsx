import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiChevronRight, FiMail, FiPhone, FiMapPin, 
  FiClock, FiSend, FiGlobe, FiFacebook, FiInstagram, FiTwitter 
} from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/Contact.css';
import SEO from '../components/SEO';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. Our team will get back to you shortly!');
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Reach out to Aarus Greentech LLP in Ankleshwar, Gujarat for product support, farmer advice, or dealership opportunities. We're here to help you grow."
        keywords="contact Aarus Greentech, agrochemical dealer Gujarat, farmer support Ankleshwar, pesticide company contact"
        canonical="/contact"
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/hero-contact.png')" }} />
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Contact <span>Us</span></h1>
            <p className="page-subtitle">
              Have questions or need support? Reach out to our team of experts 
              and we'll help you find the right solutions for your farm.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="section-tag" style={{ textAlign: 'left', margin: '0' }}>Get in Touch</span>
                <h2 className="section-title" style={{ textAlign: 'left', margin: '1rem 0 2rem' }}>
                  We'd Love to Hear <span className="text-green-600">From You</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-10">
                  Whether you're a farmer looking for advice, a distributor wanting to 
                  partner, or just have a general question, our team is ready to assist.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-sm border border-green-100">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Our Office</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      110, Anmol Plaza-2, Nr. Decent Hotel,<br />
                      Ankleshvar, Dist. Bharuch, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-sm border border-blue-100">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Call Us</h4>
                    <p className="text-gray-500 text-sm mb-1">+91 91466 73132</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-sm border border-orange-100">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Email Us</h4>
                    <p className="text-gray-500 text-sm mb-1">info@aarusgreentech.in</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-10 border-t border-gray-100">
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[<FiFacebook />, <FiInstagram />, <FiTwitter />, <FiGlobe />].map((icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center text-xl hover:bg-green-600 hover:text-white transition-all shadow-sm">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                        placeholder="Farmer/Partner Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                      <input 
                        type="tel" required
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                    <select className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800">
                      <option>General Inquiry</option>
                      <option>Product Support</option>
                      <option>Dealership Opportunity</option>
                      <option>Farmer Advice</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Your Message</label>
                    <textarea 
                      rows="6" required
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="Talk to us..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full py-5 rounded-2xl justify-center font-black text-lg gap-3"
                    style={{ backgroundColor: '#1B5E20' }}
                  >
                    Send Message <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 h-[500px] relative overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118934.33230325988!2d72.9304326190875!3d21.61331776785196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0208197777777%3A0x7777777777777777!2sAnkleshwar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
        <div className="absolute top-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 max-w-xs pointer-events-none">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><FiMapPin className="text-green-600" /> Visit Our Hub</h4>
          <p className="text-gray-500 text-xs leading-relaxed font-medium">Located in the heart of GIDC Ankleshwar, the industrial powerhouse of Gujarat.</p>
        </div>
      </section>

      {/* Trust Quote Footer */}
      <section className="page-section text-center" style={{ background: 'linear-gradient(135deg, #0A3D0F 0%, #1B5E20 50%, #2E7D32 100%)', padding: '5rem 0' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-8" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFC947' }}>
              <FiClock />
            </div>
            <h2 className="text-3xl font-black mb-6" style={{ color: '#ffffff' }}>Always Available</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Our support doesn't end with a sale. Whether you're in the field or in 
              the boardroom, Aarus Greentech is always just a call or click away.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/products" className="font-black uppercase tracking-widest text-sm" style={{ color: '#FFC947' }}>Explore Products</Link>
              <Link to="/about" className="font-black uppercase tracking-widest text-sm" style={{ color: '#FFC947' }}>Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
