import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCards';
import TypeSelector from './TypeSelector';
import Style from '../style_module/CardsPokemon.module.css';
import Style2 from '../style_module/Pokemons.module.css';

import { Loading } from '../LoadFound';
import ModalPokemon from './ModalPokemon';
import CountPokemon from './CountPokemon';





const Pokedex = (props) => {
  const [pokemonStats, setPokemonStats] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    pokemons,
    loading,
    types,
     showMore,
     setShowMore,
    setFilterButton,
    fetchPokemons,
    getPokemons,
    totalPages
  } = props;
//console.log(totalPages);
const [currentPage, setCurrentPage] = useState(1);



  // const allPokemons = (event) => {
  //   event.preventDefault();
  //   setShowMore(Number(showMore -10));
  // };
   const nextPage = (event) => {
    event.preventDefault();
  
    
   setShowMore(Number(showMore + 10));
   setCurrentPage(Number(currentPage+1))
  };

 
  const previousPage = (event) => {
    event.preventDefault();
    
   
    setShowMore(Number(showMore -10));
    setCurrentPage(Number(currentPage-1))
  };
  const FilterTypePokemon = (event) => {
    let nameType = event.target.innerHTML;
    if (nameType === 'All') {
      fetchPokemons();
    } else if (nameType !== '') setFilterButton(nameType);
  };
 
  return (
    <>
     
      <main className="pokedex contain">
      
        <TypeSelector
          types={types}
          FilterTypePokemon={FilterTypePokemon}
          fetchPokemons={fetchPokemons}
        />
                
    
        <div className={Style.pokedex_right_wrapper}>
        <CountPokemon></CountPokemon>
          {loading ? (
            <Loading />
          ) : (
            <ul className={Style.pokedex_cardsPokemon}>
              {pokemons &&
                pokemons.map((pokemon, index) => {
                  return (
                    <PokemonCard
                      pokemon={pokemon}
                      key={index}
                      setShowModal={setShowModal}
                      showModal={showModal}
                      setPokemonStats={setPokemonStats}
                    />
                  );
                })}
            </ul>
          )}
         

          {showModal && (
            <ModalPokemon
              setShowModal={setShowModal}
              pokemons={pokemons}
              pokemonStats={pokemonStats}
            />
          )}
          
         
            
         
         
          <div className="contain" id="pagination">
                <button  name='next'
                  onClick={nextPage}
                  className={Style.pokedex_button}
                  id="next"
                >
                  Next Page
                </button>
                <span className={Style2.pokemonCount_text2}>
                    <strong className={Style2.pokemonCount_number}>{currentPage}/{totalPages}</strong>
                    Pages
                  </span>
              <button name='previous' disabled={currentPage==1}
                onClick={previousPage}
                className={Style.pokedex_button}
                id="previous"
              >
                Previous Page
              </button>
             
            
               
                
              
               
             
            
       </div>
         
          
        </div>
      </main>
    </>
  );
};

export default Pokedex;
