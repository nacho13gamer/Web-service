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
       
      </div>
    </section>
  );
};

export default PromotionSection;