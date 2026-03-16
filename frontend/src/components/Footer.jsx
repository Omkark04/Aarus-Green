import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { FiClock, FiShield } from 'react-icons/fi';

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Products', href: '#products' },
  { name: 'Farmer Solutions', href: '#solutions' },
  { name: 'Contact Us', href: '#contact' },
];

const productLinks = [
  { name: 'Crop Protection', href: '#products' },
  { name: 'Growth Promoters', href: '#products' },
  { name: 'Nutrient Solutions', href: '#products' },
  { name: 'Soil Health', href: '#products' },
  { name: 'Organic Series', href: '#products' },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-column">
            <h3 className="footer-brand-title">
              Aarus <span>Greentech</span>
            </h3>
            <p className="footer-brand-desc">
              Dedicated to agricultural innovation and excellence. Empowering
              farmers across India with world-class agrochemical solutions
              since years.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Navigation</h4>
            <div className="footer-links-list">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4 className="footer-heading">Our Range</h4>
            <div className="footer-links-list">
              {productLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Location</span>
                Sector-D, Ankleshwar,
                <br />
                Gujarat, India 393002
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Call Support</span>
                +91 98765 43210
                <br />
                +91 02646 123456
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Email Us</span>
                info@aarusgreentech.com
                <br />
                support@aarus.in
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Aarus Greentech LLP. All rights
              reserved.
            </p>
            <div className="footer-badges">
              <div className="footer-badge">
                <FiShield /> <span>ISI Certified</span>
              </div>
              <div className="footer-badge">
                <FiClock /> <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
