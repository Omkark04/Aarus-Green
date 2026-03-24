import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiTrendingUp, FiShield, FiGlobe, FiCheckCircle, FiSend, FiAward, FiSettings, FiBriefcase } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import '../styles/pages/SubPages.css';
import '../styles/pages/DistributorEnquiry.css';

const benefits = [
  { 
    icon: <FiTrendingUp />, 
    title: 'High Growth Potential', 
    desc: 'Join a rapidly expanding brand in the Indian agrochemical sector with increasing demand.' 
  },
  { 
    icon: <FiAward />, 
    title: 'Premium Quality', 
    desc: 'Distribute ISI-certified, scientifically proven products that farmers trust and return for.' 
  },
  { 
    icon: <FiSettings />, 
    title: 'Marketing Support', 
    desc: 'Receive comprehensive marketing materials, technical training, and on-ground support.' 
  },
  { 
    icon: <FiBriefcase />, 
    title: 'Lucrative Margins', 
    desc: 'Benefit from competitive pricing and rewarding profit margins for our valued partners.' 
  },
];

export default function DistributorEnquiry() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    alert('Thank you for your enquiry. Our team will contact you soon!');
  };

  return (
    <div className="distributor-enquiry-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Grow Your <span>Business</span></h1>
            <p className="page-subtitle">
              Partner with Aarus Greentech and bring world-class agrochemical solutions 
              to your region. Join our mission to empower farmers together.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Become a Distributor</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag">Why Partner With Us?</span>
            <h2 className="section-title">A Partnership Designed for <span className="text-green-600">Success</span></h2>
          </div>
          <div className="standard-grid">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-green-100 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {b.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{b.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="page-section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            {/* Form Info Sidebar */}
            <div className="md:w-1/3 bg-green-700 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Partnership Enquiry</h3>
                <p className="text-green-100 mb-8 text-sm leading-relaxed">
                  Please fill out the form with your business details, and our regional sales 
                  manager will get in touch to discuss potential dealership opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <FiCheckCircle className="text-green-400" /> Professional Support
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <FiCheckCircle className="text-green-400" /> Ethical Trading
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <FiCheckCircle className="text-green-400" /> Growth Assurance
                  </div>
                </div>
              </div>
              <div className="mt-12 opacity-50 relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest mb-1">Response Time</div>
                <div className="text-sm font-bold">Within 24-48 Hours</div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 blur-xl" />
            </div>

            {/* Main Form */}
            <div className="md:w-2/3 p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      type="text" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Business Name</label>
                    <input 
                      type="text" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="ABC Agro Agencies"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      type="tel" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="contact@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">City/District</label>
                    <input 
                      type="text" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                      placeholder="Ankleshwar"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">State</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800">
                      <option>Gujarat</option>
                      <option>Maharashtra</option>
                      <option>Rajasthan</option>
                      <option>Madhya Pradesh</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Current Business Type</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                    placeholder="e.g. Pesticide Retailer, Fertilizer Distributor"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Brief Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800"
                    placeholder="Tell us about your coverage area and why you want to partner with Aarus..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="btn-primary w-full py-5 rounded-2xl justify-center font-black text-lg gap-3"
                  style={{ backgroundColor: '#1B5E20' }}
                >
                  Submit Partnership Enquiry <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="page-section bg-white text-center pb-0">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black italic text-gray-400 leading-relaxed">
              "Aarus Greentech success is built on the strength of our partners. 
              Join us in shaping the future of Indian agriculture."
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full" />
              <div className="text-left">
                <div className="font-bold text-gray-800">Founder & Managing Partner</div>
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">Aarus Greentech LLP</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
