import React from 'react';
import { HiPhone } from 'react-icons/hi';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <HiPhone className="header__icon" />
        <h1 className="header__title">Fortanell</h1>
      </div>

      <div className="header__subtitle">
        Reparación de Dispositivos
      </div>
    </header>
  );
};

export default Header;