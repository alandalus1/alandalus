import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Contact Us | Al Andalus Printing Press</title>
        <meta name="description" content="Contact Al Andalus Printing Press in Doha, Qatar. Get a quote for your printing needs via WhatsApp, phone, or visit our Salwa Road location." />
      </Helmet>
      
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">{t('contact.title')}</h1>
          <p className="page-subtitle text-gold">{t('contact.subtitle')}</p>
        </div>
      </div>

      <section className="section-padding container">
        <div className="showcase-grid" style={{alignItems: 'start'}}>
          <div>
            <h2 className="section-title">{t('contact.infoTitle')}</h2>
            <div className="divider" style={{margin: '0 0 30px 0'}}></div>
            <p style={{color: '#555', marginBottom: '40px', fontSize: '1.1rem'}}>
              {t('contact.infoDesc')}
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <div style={{width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', color: 'var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'}}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 style={{marginBottom: '5px', color: 'var(--primary-blue)'}}>{t('contact.location')}</h4>
                  <p style={{color: '#555'}}>Salwa Road, Doha, Qatar</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <div style={{width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', color: 'var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'}}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 style={{marginBottom: '5px', color: 'var(--primary-blue)'}}>{t('contact.phone')}</h4>
                  <p style={{color: '#555'}}>+974 5585 8730</p>
                </div>
              </div>

              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <div style={{width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', color: 'var(--accent-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'}}>
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 style={{marginBottom: '5px', color: 'var(--primary-blue)'}}>WhatsApp</h4>
                  <p style={{color: '#555'}}>
                    <a href="https://wa.me/97455858730" target="_blank" rel="noopener noreferrer" style={{color: '#25d366', fontWeight: '600'}}>Click to Chat: +974 5585 8730</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
            <h3 style={{marginBottom: '20px', color: 'var(--primary-blue)'}}>{t('contact.formTitle')}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500'}}>{t('contact.name')}</label>
                <input type="text" placeholder={t('contact.name')} style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit'}} />
              </div>
              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500'}}>{t('contact.emailLabel')}</label>
                <input type="email" placeholder={t('contact.emailLabel')} style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit'}} />
              </div>
              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#555', fontWeight: '500'}}>{t('contact.messageLabel')}</label>
                <textarea placeholder="..." rows="5" style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical'}}></textarea>
              </div>
              <button type="submit" className="btn btn-gold" style={{width: '100%'}}>{t('contact.sendButton')}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
