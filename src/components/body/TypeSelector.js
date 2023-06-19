import React, { useState } from 'react';
import Style from '../style_module/Pokemons.module.css';
import All from '../../img/poke-type/icon-all.svg';
import ListTypePokemon from './ListTypePokemon';

export default function TypeSelector(props) {
  const buttonDisplay = document.getElementById('showMorePokemon');

  function handleButtonDisplay() {
    buttonDisplay.style.display = 'block';
  }

  const type = props.types;
  const { FilterTypePokemon } = props;
  return (
    <>
      <div className={Style.pokedex_left_wrapper}>
        <ul>
          <li className={'all'} onClick={handleButtonDisplay}>
            <button
              className={Style.pokedex_typePokemon}
              onClick={FilterTypePokemon}
            >
              <img
                src={All}
                alt="all"
                className={Style.pokedex_typePokemon_icon}
              />
              <span className={`${Style.pokedex_typePokemon_text} all`}>
                All
              </span>
            </button>
          </li>
          {type.map((type, key) => {
            return (
              <ListTypePokemon
                type={type}
                key={key}
                FilterTypePokemon={FilterTypePokemon}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
