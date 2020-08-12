import React from 'react';
import { API_BASE_URL } from './services/api';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children, typeURL }) => {
  const [pokemonList, setPokemonList] = React.useState(null);
  const [pokemonSelected, setPokemonSelected] = React.useState([]);
  const [type, setType] = React.useState('');
  const [filterPokemon, setFilterPokemon] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [clickedButtons, setClickedButtons] = React.useState([]);

  React.useEffect(() => {
    async function loadPokemons() {
      const response = await fetch(
        `${API_BASE_URL}type/${typeURL.match.params.type}`,
      );
      const data = await response.json();
      setPokemonList(data.pokemon);
      setType(data.name);
    }

    loadPokemons();
  }, [typeURL.match.params.type]);

  const getPokemonSelected = (image, name, price) => {
    const found = pokemonSelected.findIndex((pokemon) => pokemon.name === name);

    if (found === -1) {
      return setPokemonSelected([
        ...pokemonSelected,
        { image, name, price, amount: 1 },
      ]);
    }

    let pokemonsSelectedList = [...pokemonSelected];
    pokemonsSelectedList[found].amount += 1;

    setPokemonSelected(pokemonsSelectedList);
  };

  const filterUpdate = (value) => {
    setFilterPokemon(value);
  };

  const resetCart = () => {
    setClickedButtons([]);
    setPokemonSelected([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokemonList,
        type,
        pokemonSelected,
        getPokemonSelected,
        filterUpdate,
        filterPokemon,
        resetCart,
        modalIsOpen,
        setModalIsOpen,
        clickedButtons,
        setClickedButtons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
