import React from 'react';
import { API_BASE_URL } from './services/api';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children, typeURL }) => {
  const [pokemonList, setPokemonList] = React.useState(null);
  const [selectedPokemon, setSelectedPokemon] = React.useState([
    { id: 0, image: '', name: '', price: 0, amount: 0 },
  ]);
  const [type, setType] = React.useState('');
  const [filterPokemon, setFilterPokemon] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

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

  const getIdFromURL = (url) => {
    let id = parseInt(url.split('/')[6]);
    return id;
  };

  const insertSelectedPokemon = (image, name, id) => {
    const pokemonFound = selectedPokemon.findIndex(
      (pokemon) => pokemon.id === id,
    );

    if (pokemonFound === -1) {
      return setSelectedPokemon([
        ...selectedPokemon,
        { id, image, name, price: id, amount: 1 },
      ]);
    }

    let selectedPokemonList = [...selectedPokemon];
    selectedPokemonList[pokemonFound].amount += 1;

    setSelectedPokemon(selectedPokemonList);
  };

  const filterUpdate = (value) => {
    setFilterPokemon(value);
  };

  const resetCart = () => {
    setSelectedPokemon([{ id: 0, image: '', name: '', price: 0, amount: 0 }]);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokemonList,
        type,
        selectedPokemon,
        insertSelectedPokemon,
        filterUpdate,
        filterPokemon,
        resetCart,
        modalIsOpen,
        setModalIsOpen,
        getIdFromURL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
