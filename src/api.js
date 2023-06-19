export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('searchPokemon', error);
  }
};





export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    console.log(url);
    return await response.json();
  } catch (error) {
    console.log('getPokemon', error);
  }
};



export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('getPokemon', error);
  }
};

export const getTypesPokemons = async () => {
  try {
    let urlType = 'https://pokeapi.co/api/v2/type/';
    const response = await fetch(urlType);
    return await response.json();
  } catch (error) {
    console.log('getPokemon', error);
  }
};

export const getFilterTypesPokemons = async (type = '') => {
  try {
    let urlType = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(urlType);
    return await response.json();
  } catch (error) {
    console.log('getPokemon', error);
  }
};
