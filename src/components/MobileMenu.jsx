import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';  // Hamburguesa y X
import './MobileMenu.scss';

const MobileMenu = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ['Home', 'Locales', 'Mapa', 'Reseñas'];

  return (
    <div className="mobile-menu">
      <button className="mobile-menu__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
      </button>

      {isOpen && (
        <nav className="mobile-menu__nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mobile-menu__item ${activeTab === tab ? 'mobile-menu__item--active' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);  // Cierra el menú al seleccionar
              }}
            >
              {tab}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;