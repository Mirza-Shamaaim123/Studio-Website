import React from 'react';
import ServicesLineComponent from './ServicesLineComponent';

interface ServicesHeroSectionProps {
  backgroundImageUrl: string;
  title: string;
}

const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  backgroundImageUrl,
  title,
}) => {
  return (
    <div
      className="services-hero-section" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="services-hero-overlay" />
      <div className="services-hero-content">
        <h1 className="services-hero-title">{title}</h1>
      </div>
      <ServicesLineComponent/>
    </div >
  );
};

export default ServicesHeroSection;
