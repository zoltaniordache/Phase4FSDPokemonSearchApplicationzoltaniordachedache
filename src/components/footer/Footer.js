import React from 'react';
import StyleFooter from '../style_module/Footer.module.css';
import ImageLogo from '../../img/logo.svg';
import ImagePokeball from '../../img/img-pokeball.png';

export default function Footer() {
  return (
    <>
      <footer>
        <div className={StyleFooter.footer_wrapper}>
          <div className={StyleFooter.footer_logo}>
            <img src={ImageLogo} alt="logo" />
            <img
              src={ImagePokeball}
              alt="pokeball"
              className={StyleFooter.footer_pokeball}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
