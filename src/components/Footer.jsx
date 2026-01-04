import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Fortanell Service</h3>
          <p className="footer__text">
            Reparación exprés de celulares y laptops con técnicos especializados.
          </p>
          <p className="footer__copyright">
            © 2026 Fortanell. Todos los derechos reservados.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Contacto</h4>
          <p className="footer__text">Teléfono: 833-312-3911</p>
          
          <p className="footer__text">Tampico, Tamaulipas</p>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Síguenos</h4>
          <div className="footer__social">
            <a 
              href="https://www.facebook.com/profile.php?id=61551948944716&locale=es_LA" 
              className="footer__link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a 
              href="https://wa.me/8334116097" 
              className="footer__link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;