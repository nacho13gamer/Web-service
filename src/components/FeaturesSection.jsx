import React from 'react';
import './FeaturesSection.scss';

const features = [
  {
    title: 'Reparaciones en 30 minutos',
    description: 'Hacemos reparaciones exprés de teléfonos: baterías, centros de carga y pantallas.',
    image: '/reparacion-express.webp',  // Pon este archivo en public/reparacion-express.jpg
  },
  {
    title: 'Cotizaciones rápidas',
    description: 'Te damos cotizaciones claras y sin compromiso para cualquier reparación.',
    image: '/cotizacion.webp',  // public/cotizacion.jpg
  },
  {
    title: 'Servicio confiable',
    description: 'Técnicos especializados con años de experiencia y garantía en cada reparación.',
    image: '/tecnico.jpg',  // public/tecnico.jpg
  },
  // Agrega más si quieres
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features__container">
        {features.map((feature, index) => (
          <div key={index} className="features__card">
            <img src={feature.image} alt={feature.title} className="features__image" />
            <div className="features__content">
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;