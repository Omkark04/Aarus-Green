import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiChevronRight, FiMessageSquare, FiSmartphone, FiClock, 
  FiCheckCircle, FiSend, FiUser, FiInfo, FiArrowRight 
} from 'react-icons/fi';
import '../styles/pages/SubPages.css';
import '../styles/pages/FarmerEnquiry.css';
import { FaWhatsapp, FaLeaf } from 'react-icons/fa';

const steps = [
  { 
    title: 'Submit Query', 
    desc: 'Describe your crop issue, attach photos, and tell us about your farm location.' 
  },
  { 
    title: 'Expert Review', 
    desc: 'Our agricultural scientists and field experts review your query and identify the problem.' 
  },
  { 
    title: 'Get Solution', 
    desc: 'Receive a detailed recommendation on the best products and methods to save your crop.' 
  },
];

export default function FarmerEnquiry() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted. An expert will contact you shortly!');
  };

  return (
    <div className="farmer-enquiry-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Direct <span>Expert</span> Support</h1>
            <p className="page-subtitle">
              Facing issues with your crops? Ask our agricultural experts for 
              scientifically backed solutions and guidance to maximize your yield.
            </p>
            <div className="page-breadcrumb">
              <Link to="/">Home</Link> <FiChevronRight /> <span>Farmer Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="page-section bg-white text-center">
        <div className="container">
          <div className="mb-16">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Get Solutions in <span className="text-green-600">3 Easy Steps</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-inner border border-green-100">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden lg:block absolute top-10 left-[75%] w-1/2 h-0.5 border-t-2 border-dashed border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Layout */}
      <section className="page-section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Cards */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-green-600/20">
                  <FiSmartphone />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Our Helpline</h3>
                <p className="text-gray-500 text-sm mb-6">Immediate guidance for agricultural queries.</p>
                <div className="text-2xl font-black text-green-700">+91 91466 73132</div>
                <div className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">Available 9 AM - 6 PM</div>
              </div>

              <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-green-500/20">
                  <FaWhatsapp />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Support</h3>
                <p className="text-gray-500 text-sm mb-6">Send us photos of your pests or crops for faster identification.</p>
                <a href="https://wa.me/919146673132" className="text-green-600 font-bold flex items-center gap-2 hover:underline">
                  Message Experts <FiArrowRight />
                </a>
              </div>

              <div className="p-10 bg-green-900 rounded-[2rem] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <FiClock className="text-4xl text-green-400 mb-6" />
                  <h3 className="text-xl font-bold mb-4">Fast Response Time</h3>
                  <p className="text-green-100/70 text-sm leading-relaxed mb-6">
                    Our team of field researchers is dedicated to answering every farmer's 
                    query within 12-24 working hours.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400">
                    <FiCheckCircle /> 100% Reliable Advice
                  </div>
                </div>
                <FaLeaf className="absolute -bottom-10 -right-10 text-[10rem] text-white/5 rotate-[-25deg]" />
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <FiUser className="text-green-600" /> Full Name
                      </label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800 placeholder:opacity-30"
                        placeholder="Farmer Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <FiSmartphone className="text-green-600" /> Phone Number
                      </label>
                      <input 
                        type="tel" required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800 placeholder:opacity-30"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Crop Type</label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800">
                        <option>Cotton</option>
                        <option>Soybean</option>
                        <option>Wheat</option>
                        <option>Rice</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Village / District</label>
                      <input 
                        type="text" required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800 placeholder:opacity-30"
                        placeholder="Location"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FiInfo className="text-green-600" /> Problem Description
                    </label>
                    <textarea 
                      rows="5" required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-green-600 transition-all font-bold text-gray-800 placeholder:opacity-30"
                      placeholder="Please describe the pest, disease, or growth problem you are facing in detail..."
                    ></textarea>
                  </div>

                  <div className="p-8 bg-yellow-50 rounded-3xl border border-yellow-100 flex items-start gap-4">
                    <FiMessageSquare className="text-yellow-600 text-2xl flex-shrink-0 mt-1" />
                    <p className="text-sm text-yellow-800 font-medium leading-relaxed">
                      <strong>Tip:</strong> You can also send photos or videos of your crop directly 
                      on our WhatsApp number for a more accurate diagnosis by our experts.
                    </p>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full py-5 rounded-2xl justify-center font-black text-lg gap-3"
                    style={{ backgroundColor: '#1B5E20' }}
                  >
                    Send Query to Experts <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="page-section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-8 leading-tight">
              We Stand by India's Farmers, Every <span className="text-green-600">Season</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our expert support isn't just about selling products; it's about 
              the success of your harvest and the health of your soil.
            </p>
            <Link to="/products" className="text-green-600 font-black flex items-center justify-center gap-2 hover:gap-4 transition-all">
              Explore Our Solutions <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
