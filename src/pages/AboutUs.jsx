import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>About Us | Al Andalus Printing Press</title>
        <meta name="description" content="Learn about Al Andalus Printing Press, Qatar's leading offset printing company located on Salwa Road, Doha." />
      </Helmet>
      
      <div className="page-header bg-dark">
        <div className="container">
          <h1 className="page-title text-white">{t('about.title')}</h1>
          <p className="page-subtitle text-gold">{t('about.subtitle')}</p>
        </div>
      </div>

      <section className="section-padding container">
        <div className="showcase-grid">
          <div>
             <img src="/Users/macintoshhd/.gemini/antigravity/brain/b63f5f1d-e76b-4392-8ade-9478dc714b5d/hero_printing_press_1778565195487.png" alt="Printing Press Facility" style={{width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
          </div>
          <div>
            <h2 className="section-title">{t('about.ourStory')}</h2>
            <div className="divider" style={{margin: '0 0 20px 0'}}></div>
            <p style={{fontSize: '1.1rem', color: '#555', marginBottom: '20px'}}>
              {t('about.p1')}
            </p>
            <p style={{fontSize: '1.1rem', color: '#555', marginBottom: '20px'}}>
              {t('about.p2')}
            </p>
            <h3 style={{fontFamily: 'var(--font-sans)', marginTop: '30px', marginBottom: '15px', color: 'var(--primary-blue)'}}>{t('about.ourMission')}</h3>
            <p style={{fontSize: '1.1rem', color: '#555'}}>
              {t('about.missionDesc')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
