import React, { useEffect, useState } from 'react';
import Style from '../style_module/Pokemons.module.css';
import ImgPokeball from '../../img/icon-poke-red.svg';

export default function CountPokemon(props) {
  const { getPokemons, getFilterTypesPokemons, filterButton } = props;
  
  const [count, setCount] = useState(1281);
  const [pageCount, setPageCount] = useState(0);
  const fetchTypeCount = async () => {
    try {
      const data = await getFilterTypesPokemons(filterButton);
      const countPokemon = data.pokemon.length;
      setCount(countPokemon);
    } catch (error) {
      console.log('countType', error);
    }
  };

  const fetchCount = async () => {
    try {
      const data = await getPokemons();
      const countPokemon = data.count;
   
      setCount(countPokemon);
      setPageCount(pageCount);
    } catch (error) {
      console.log('count', error);
    }
  };

  useEffect(() => {
    if (filterButton && filterButton.length !== 0) {
      fetchTypeCount();
    }
  }, [filterButton]);

  return (
    <>
      <div className={Style.pokemonCount_wrapper}>
        <div>
          <div className={Style.pokemonCount_top}>
            <img src={ImgPokeball} alt="Pokeball" />
            <span className={Style.pokemonCount_text}>
              <strong className={Style.pokemonCount_number}>{count}</strong>
              Pokemons
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
