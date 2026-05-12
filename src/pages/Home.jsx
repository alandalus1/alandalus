import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPrint, FaBook, FaBoxOpen, FaRegIdCard, FaCheckCircle } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Premium Offset Printing Services in Doha | Al Andalus Printing Press</title>
        <meta name="description" content="Al Andalus Printing Press offers high-quality commercial printing solutions in Doha, Qatar. Paper bags, business cards, invoice books, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img 
          src="/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d/hero_printing_press_1778565195487.png" 
          alt="Offset Printing Machine Doha" 
          className="hero-bg" 
        />
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('home.heroTitle') }}></h1>
          <p className="hero-subtitle">
            {t('home.heroSubtitle')}
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/97455858730" target="_blank" rel="noopener noreferrer" className="btn btn-gold">{t('home.getInstantQuote')}</a>
            <a href="/services" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>{t('home.exploreServices')}</a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights container section-padding">
        <div className="section-header text-center">
          <h2 className="section-title">{t('home.ourPremiumServices')}</h2>
          <div className="divider"></div>
          <p className="section-desc">{t('home.ourPremiumServicesDesc')}</p>
        </div>

        <div className="services-grid">
          <ServiceCard 
            icon={<FaBoxOpen />} 
            title={t('services.s1Title')} 
            description={t('services.s1Desc')}
          />
          <ServiceCard 
            icon={<FaRegIdCard />} 
            title={t('services.s3Title')} 
            description={t('services.s3Desc')}
          />
          <ServiceCard 
            icon={<FaBook />} 
            title={t('services.s5Title')} 
            description={t('services.s5Desc')}
          />
          <ServiceCard 
            icon={<FaPrint />} 
            title={t('services.title')} 
            description={t('services.subtitle')}
          />
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="showcase bg-dark section-padding">
        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-text">
              <h2 className="section-title text-white">{t('home.craftedForExcellence')}</h2>
              <div className="divider" style={{ backgroundColor: 'var(--accent-gold)' }}></div>
              <p className="showcase-desc">
                {t('home.craftedDesc')}
              </p>
              <ul className="feature-list">
                <li><FaCheckCircle className="text-gold" /> {t('home.feature1')}</li>
                <li><FaCheckCircle className="text-gold" /> {t('home.feature2')}</li>
                <li><FaCheckCircle className="text-gold" /> {t('home.feature3')}</li>
                <li><FaCheckCircle className="text-gold" /> {t('home.feature4')}</li>
              </ul>
            </div>
            <div className="showcase-image-wrapper">
               <img src="/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d/premium_business_cards_1778565210019.png" alt="Premium Business Cards Qatar" className="showcase-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container section-padding text-center">
          <h2 className="section-title">{t('home.findUs')}</h2>
          <div className="divider"></div>
          <p className="section-desc mb-4">{t('home.findUsDesc')}</p>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115421.36511116634!2d51.46465495!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Andalus Printing Press Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
