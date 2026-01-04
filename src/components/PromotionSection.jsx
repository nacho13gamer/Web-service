import React from 'react';
import './PromotionSection.scss';

const PromotionSection = () => {
  return (
    <section className="promotion">
      <div className="promotion__overlay"></div>
      <div className="promotion__content">
        <h2 className="promotion__title">¿Ya se te mojó tu celular???</h2>
        <div className="promotion__badges">
          <span className="promotion__badge">Revisión SIN COSTO</span>
          <span className="promotion__badge">Cambio de pantalla con mic de regalo</span>
          <span className="promotion__badge">Garantía de 30 días</span>
        </div>
        <p className="promotion__text">Promoción solo hoy</p>
        <p className="promotion__contact">
          Tel: 833-410-0007 • 833 683 1800<br />
          Plaza de la Tecnología Locales 355,168
        </p>
      </div>
    </section>
  );
};

export default PromotionSection;