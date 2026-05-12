import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      <Link to="/services" className="service-link">
        Learn More <FiArrowRight className="arrow-icon" />
      </Link>
    </div>
  );
};

export default ServiceCard;
