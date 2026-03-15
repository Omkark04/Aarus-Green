import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi';

const footerLinks = [
  { 
    title: 'Quick Navigation', 
    links: [
      { name: 'Home', href: '#home' }, 
      { name: 'About Company', href: '#about' }, 
      { name: 'Product Catalog', href: '#products' }, 
      { name: 'Crop Solutions', href: '#solutions' }, 
      { name: 'Contact Us', href: '#contact' }
    ] 
  },
  { 
    title: 'Product Categories', 
    links: [
      { name: 'Plant Growth Promoters', href: '#products' }, 
      { name: 'Crop Protection Solutions', href: '#products' }, 
      { name: 'Advanced Nutrients', href: '#products' }, 
      { name: 'Soil Health Vitalizers', href: '#products' },
      { name: 'Seed Treatment', href: '#products' }
    ] 
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A260D] text-white pt-32 pb-16 w-full overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand - Scaled Up */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl">A</div>
              <div>
                <span className="text-3xl font-black block leading-none tracking-tight">Aarus Greentech</span>
                <span className="text-xs font-black block tracking-[0.4em] text-orange-400 mt-1 uppercase">LLP</span>
              </div>
            </div>
            <p className="text-green-100/70 text-lg leading-relaxed mb-10 opacity-80 font-medium">
              Empowering Indian farmers with innovative, science-backed agrochemical solutions
              designed for a sustainable and more productive agricultural future across the nation.
            </p>
            {/* Scaled Socials */}
            <div className="flex gap-5">
              {[
                { icon: <FaFacebook />, color: '#1877F2' },
                { icon: <FaWhatsapp />, color: '#25D366' },
                { icon: <FaInstagram />, color: '#E4405F' },
                { icon: <FaLinkedin />, color: '#0A66C2' },
                { icon: <FaYoutube />, color: '#FF0000' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -8, scale: 1.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl hover:text-white transition-all border border-white/10 hover:border-white/30"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links - Scaled Up */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-black text-orange-400 mb-10 uppercase tracking-[0.2em] text-sm flex items-center gap-2">
                <div className="w-6 h-1 bg-orange-400/30 rounded-full" />
                {col.title}
              </h4>
              <ul className="space-y-6">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-green-100/60 hover:text-white text-lg font-bold transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-green-500 transition-all group-hover:w-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact - Scaled Up */}
          <div>
            <h4 className="font-black text-orange-400 mb-10 uppercase tracking-[0.2em] text-sm flex items-center gap-2">
              <div className="w-6 h-1 bg-orange-400/30 rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl text-orange-400 border border-white/10 shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-white font-black text-lg mb-1">Our Location</p>
                  <span className="text-green-100/60 text-base font-medium leading-snug block italic">Ankleshwar, Gujarat, <br/>India - 393002</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl text-orange-400 border border-white/10 shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-white font-black text-lg mb-1">Phone Support</p>
                  <a href="tel:+919146373132" className="text-green-100/60 hover:text-white text-base font-bold transition-all">+91 91463 73132</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl text-orange-400 border border-white/10 shrink-0">
                  <FiMail />
                </div>
                <div>
                  <p className="text-white font-black text-lg mb-1">Email Inquiry</p>
                  <a href="mailto:aarusgreentech@gmail.com" className="text-green-100/60 hover:text-white text-base font-bold transition-all">aarusgreentech@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - Scaled Up */}
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-green-100/30 text-sm font-bold tracking-widest uppercase mb-1">© 2024 Aarus Greentech LLP</p>
            <p className="text-green-100/20 text-xs font-medium">Excellence in Agricultural Innovation & Distribution License #GJ-3920</p>
          </div>
          
          <div className="flex items-center gap-10">
            <p className="text-green-100/40 text-sm font-black flex items-center gap-2">
              Made with <span className="text-green-500 animate-pulse text-xl">🌱</span> for Indian Farmers
            </p>
            {/* Extra footer badges */}
            <div className="hidden sm:flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black text-green-100/40 uppercase tracking-widest">
              <span>ISO Certified</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
