import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <h3 className="footer-logo">Al Andalus<span className="text-gold">.</span></h3>
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/97455858730" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/portfolio">{t('nav.portfolio')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t('footer.services')}</h4>
            <ul className="footer-links">
              <li><Link to="/services">{t('services.s1Title')}</Link></li>
              <li><Link to="/services">{t('services.s3Title')}</Link></li>
              <li><Link to="/services">{t('services.s5Title')}</Link></li>
              <li><Link to="/services">{t('services.title')}</Link></li>
              <li><Link to="/services">{t('services.s7Title')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t('footer.contact')}</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="icon text-gold" />
                <span>Salwa Road, Doha, Qatar</span>
              </li>
              <li>
                <FaPhoneAlt className="icon text-gold" />
                <span>+974 5585 8730</span>
              </li>
              <li>
                <FaEnvelope className="icon text-gold" />
                <span>info@alandalusprinting.qa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Al Andalus Printing Press. {t('footer.rights')} | SEO optimized for <span className="text-gold">Printing Press Doha</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
