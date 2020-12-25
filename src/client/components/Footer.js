import React from 'react';
import BetaTag from './BetaTag';

const FontAwesome = require('react-fontawesome');

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__details">
          <ul className="footer__details__list">
            <li className="footer__details__list__items">
              <a href="/contact-us" className="footer__details__list__items__item">
                Contact us
              </a>
            </li>
            <li className="footer__details__list__items">
              <a href="/privacy-policy" className="footer__details__list__items__item">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__info">
          <h3>
            Made with
            <span role="img" aria-label="love-emoji">
              {' '}
              ❤️{' '}
            </span>
            in India
          </h3>
        </div>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/virgintutor"
            className="footer__social__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesome className="footer__social__link__item" name="facebook-square" />
          </a>
          <a
            href="https://www.instagram.com/virgintutor/"
            className="footer__social__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesome className="footer__social__link__item" name="instagram" />
          </a>
          <a
            href="https://wa.me/918072937581"
            className="footer__social__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesome className="footer__social__link__item" name="whatsapp" />
          </a>
        </div>
      </div>

      {/* <BetaTag /> */}
    </footer>
  );
};

export default Footer;
