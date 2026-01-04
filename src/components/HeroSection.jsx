import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
 return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">Fortanell Service</h1>
          <p className="hero__subtitle">
            Encuentra el mejor técnico para reparar tu celular o laptop cerca de ti
          </p>
          <p className="hero__description">
            Contacto directo por WhatsApp • Precios claros • Locales verificados
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;