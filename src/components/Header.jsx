import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img 
            src="/logo.png" 
            alt="Al Andalus Printing Press" 
            className="header-logo" 
            style={{ height: '50px', width: 'auto' }}
          />
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>{t('nav.services')}</Link></li>
            <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>{t('nav.portfolio')}</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button onClick={toggleLanguage} className="lang-toggle-btn" style={{ background: 'none', border: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: '500' }}>
            <FiGlobe /> {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="https://wa.me/97455858730?text=Hello%20Al%20Andalus%20Printing%20Press,%20I%20would%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-header">
            <FaWhatsapp className="icon" /> {t('nav.getQuote')}
          </a>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
