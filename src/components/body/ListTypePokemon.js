import React from 'react';
import Style from '../style_module/Pokemons.module.css';

const ListTypePokemon = (props) => {
  const { FilterTypePokemon } = props;
  const { type } = props;

  let url = `https://codeboost.com.br/projetos/pokeapi/img/${type}.svg`;

  const buttonDisplay = document.getElementById('showMorePokemon');

  function handleButtonDisplay() {
    buttonDisplay.style.display = 'none';
  }

  if (type !== 'shadow' && type !== 'unknown') {
    return (
      <>
        <li className={type} onClick={handleButtonDisplay}>
          <button
            type="button"
            className={Style.pokedex_typePokemon}
            onClick={FilterTypePokemon}
          >
            <img
              src={url}
              alt={type}
              className={Style.pokedex_typePokemon_icon}
            />
            <span className={`${Style.pokedex_typePokemon_text}`}>{type}</span>
          </button>
        </li>
      </>
    );
  }
};

export default ListTypePokemon;
