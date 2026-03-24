import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
} from 'react-icons/fa';
import { FiClock, FiShield } from 'react-icons/fi';
import '../styles/components/Footer.css';

import logo from '../assets/Logo.png';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Products', to: '/products' },
  { name: 'Blog', to: '/blog' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Privacy Policy', to: '/privacy-policy' },
  { name: 'Contact Us', to: '/contact' },
];

const enquiryLinks = [
  { name: 'Farmer Enquiry', to: '/farmer-enquiry' },
  { name: 'Distributor Enquiry', to: '/distributor-enquiry' },
  { name: 'Product Details', to: '/products' },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/919146673132', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-column">
            <img src={logo} alt="Aarus Greentech Logo" className="footer-logo" />
            <p className="footer-brand-desc">
              Dedicated to agricultural innovation and excellence. Empowering farmers across India
              with world-class agrochemical solutions.
            </p>
            <div className="footer-socials">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="footer-social-link" aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-list">
              {quickLinks.map((l) => (
                <Link key={l.name} to={l.to} className="footer-link">{l.name}</Link>
              ))}
            </div>
          </div>

          {/* Enquiries */}
          <div className="footer-column">
            <h4 className="footer-heading">Enquiries</h4>
            <div className="footer-links-list">
              {enquiryLinks.map((l) => (
                <Link key={l.name} to={l.to} className="footer-link">{l.name}</Link>
              ))}
            </div>
            <h4 className="footer-heading" style={{ marginTop: '1.5rem' }}>Product Range</h4>
            <div className="footer-links-list">
              <a className="footer-link">Crop Protection</a>
              <a className="footer-link">Growth Promoters</a>
              <a className="footer-link">Soil Health</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Location</span>
                110, Anmol Plaza-2, Nr. Decent Hotel,<br />Ankleshvar, Dist. Bharuch, Gujarat
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaPhoneAlt /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Call Us</span>
                <a href="tel:+919146673132" style={{ color: 'inherit' }}>+91 91466 73132</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Email Us</span>
                <a href="mailto:info@aarusgreentech.in" style={{ color: 'inherit' }}>
                  info@aarusgreentech.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Aarus Greentech LLP. All rights reserved.
            </p>
            <div className="footer-badges">
              <div className="footer-badge"><FiShield /> <span>ISI Certified</span></div>
              <div className="footer-badge"><FiClock /> <span>24/7 Support</span></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
