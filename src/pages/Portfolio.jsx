import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Al Andalus Printing Press</title>
        <meta name="description" content="View the portfolio of Al Andalus Printing Press. See our high-quality work in luxury business cards, paper bags, and offset printing." />
      </Helmet>
      
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">{t('portfolio.title')}</h1>
          <p className="page-subtitle text-gold">{t('portfolio.subtitle')}</p>
        </div>
      </div>

      <section className="section-padding container">
        <div className="portfolio-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px'}}>
          <div className="portfolio-item" style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
            <img src="/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d/premium_business_cards_1778565210019.png" alt="Premium Business Cards" style={{width: '100%', display: 'block'}} />
            <div style={{padding: '20px', backgroundColor: '#fff'}}>
              <h3 style={{color: 'var(--primary-blue)', marginBottom: '5px'}}>{t('portfolio.item2')}</h3>
              <p style={{color: '#777', fontSize: '0.9rem'}}>Design & Printing</p>
            </div>
          </div>

          <div className="portfolio-item" style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
            <img src="/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d/paper_bags_mockup_1778565224065.png" alt="Paper Bags" style={{width: '100%', display: 'block'}} />
            <div style={{padding: '20px', backgroundColor: '#fff'}}>
              <h3 style={{color: 'var(--primary-blue)', marginBottom: '5px'}}>{t('portfolio.item1')}</h3>
              <p style={{color: '#777', fontSize: '0.9rem'}}>Packaging & Offset Printing</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
