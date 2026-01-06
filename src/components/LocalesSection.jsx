import React from 'react';
import './LocalesSection.scss';

const locales = [
  {
    id: 1,
    nombre: 'Fortanell Local 355 (Plaza de la Tecnología)',
    direccion: 'Plaza de la Tecnología, Benito Juárez 304, Local 255, Zona Centro, 89000 Tampico, Tamps.',
    fotoLocal: '/local355.jpeg',  // Tu foto del local en public/
    telefono: '528336831800',  // Cambia por el real
  },
  {
    id: 2,
    nombre: 'Fortanell Local 168 (Plaza de la Tecnología)',
    direccion: 'Plaza de la Tecnología, Benito Juárez 304, Local 168, Zona Centro, 89000 Tampico, Tamps.',
    fotoLocal: '/local168.jpeg',
    telefono: '528334116097',
  },
  {
    id: 3,
    nombre: 'Tecnocenter (Afuera)',
    direccion: 'Francisco I. Madero 401-C, Zona Centro, 89000 Tampico, Tamps.',
    fotoLocal: '/tecnocenter.jpg',
    telefono: '528336831800',
  },
];

const LocalesSection = () => {
  return (
    <section className="locales">
      {/* Mapa sin pines */}
      <div className="locales__map-container">
        <img 
          src="/mapa.jpg" 
          alt="Mapa de locales" 
          className="locales__map-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/1200x600?text=Mapa+de+Locales";
          }}
        />
      </div>

      {/* Tarjetas de locales */}
      <div className="locales__cards">
        {locales.map((local) => (
          <div key={local.id} className="locales__card">
            <img 
              src={local.fotoLocal} 
              alt={local.nombre} 
              className="locales__card-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x200?text=Foto+del+Local";
              }}
            />
            <h3 className="locales__card-title">{local.nombre}</h3>
            <p className="locales__card-address">📍 {local.direccion}</p>

            {/* Botones */}
            <div className="locales__card-buttons">
              <a
                href={`https://wa.me/${local.telefono}?text=Hola, quiero una cotización desde Fortanell Service`}
                className="locales__button locales__button--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                📞 WhatsApp
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(local.direccion)}`}
                className="locales__button locales__button--map"
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺️ Ver en Mapa
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalesSection;