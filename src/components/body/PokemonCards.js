import React, { useEffect, useState } from 'react';
import Style from '../style_module/CardsPokemon.module.css';

const PokemonCard = (props) => {
  const { pokemon, setShowModal, showModal, setPokemonStats } = props;

  const styleBackground = pokemon.types[0].type.name;

  let imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  function handleClick(pokeProps) {
    setShowModal(!showModal);
    setPokemonStats(pokeProps);
  }

   if (pokemon.id < 650) {
    return (
      <>
        <li className={styleBackground} onClick={() => handleClick(pokemon)}>
          <div className="imagePokemon">
            <img src={imagePokemon} alt={pokemon.name} />
          </div>
          <div className={Style.pokemonCard_info_wrapper}>
            <div>
              <span className={Style.pokemonCard_id}>
                {pokemon.id < 10
                  ? `#00${pokemon.id}`
                  : pokemon.id >= 10 && pokemon.id < 100
                  ? `#0${pokemon.id}`
                  : pokemon.id >= 100
                  ? `#${pokemon.id}`
                  : null}
              </span>
              <strong className={Style.pokemonCard_text}>{pokemon.name}</strong>
            </div>
            <div className={Style.pokemonCard_icoType}>
              {pokemon.types.map((types, index) => {
                return (
                  <div key={index}>
                    <img
                      src={`https://codeboost.com.br/projetos/pokeapi/img/${types.type.name}.svg`}
                      alt={types.type.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      </>
    );
   }
};

export default PokemonCard;
