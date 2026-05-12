import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { FaBagShopping, FaBoxOpen, FaIdCardClip, FaFileInvoiceDollar, FaRegPenToSquare, FaStamp, FaScissors, FaBookOpen } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Our Services | Al Andalus Printing Press Doha</title>
        <meta name="description" content="Explore our full range of printing services including paper bags, business cards, invoice books, letterheads, and commercial offset printing in Qatar." />
      </Helmet>
      
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">{t('services.title')}</h1>
          <p className="page-subtitle text-gold">{t('services.subtitle')}</p>
        </div>
      </div>

      <section className="section-padding container">
        <div className="services-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
          <ServiceCard icon={<FaBagShopping />} title={t('services.s1Title')} description={t('services.s1Desc')} />
          <ServiceCard icon={<FaBoxOpen />} title={t('services.s2Title')} description={t('services.s2Desc')} />
          <ServiceCard icon={<FaIdCardClip />} title={t('services.s3Title')} description={t('services.s3Desc')} />
          <ServiceCard icon={<FaRegPenToSquare />} title={t('services.s4Title')} description={t('services.s4Desc')} />
          <ServiceCard icon={<FaFileInvoiceDollar />} title={t('services.s5Title')} description={t('services.s5Desc')} />
          <ServiceCard icon={<FaStamp />} title={t('services.s6Title')} description={t('services.s6Desc')} />
          <ServiceCard icon={<FaScissors />} title={t('services.s7Title')} description={t('services.s7Desc')} />
          <ServiceCard icon={<FaBookOpen />} title={t('services.s8Title')} description={t('services.s8Desc')} />
        </div>
      </section>
    </>
  );
};

export default Services;
