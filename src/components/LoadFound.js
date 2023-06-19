import React from 'react';
import Style from './style_module/LoadFound.module.css';
import loading from '../img/loading.gif';
import notFound from '../img/notfound.png';

export const Loading = () => {
  return (
    <>
      <div className={Style.loading_wrapper}>
        <img src={loading} alt="pikachu" className={Style.loading_gif} />
        <h2>Loading...</h2>
      </div>
    </>
  );
};

export const NotFound = () => {
  return (
    <>
      <div className={Style.notFound_wrapper}>
        <img
          src={notFound}
          alt="pokemon not found"
          className={Style.notFound_imagem}
        />
        <h2>Pokémon not found</h2>
      </div>
    </>
  );
};
