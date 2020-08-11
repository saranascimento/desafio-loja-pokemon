import React from 'react';

import Card from './Card';

import { GlobalContext } from '../../GlobalContext';
import styles from './Cards.module.css';

const Cards = () => {
  const { pokemonList } = React.useContext(GlobalContext);
  const { filterPokemon } = React.useContext(GlobalContext);

  const getIdFromURL = (url) => {
    let id = parseInt(url.split('/')[6]);
    return id;
  };
  if (pokemonList === null) return null;
  return (
    <div className={styles.cardsList}>
      {pokemonList
        .slice(0, 35)
        .filter((pokemon) => {
          return pokemon.pokemon.name.indexOf(filterPokemon) >= 0;
        })
        .map((pokemon, index) => (
          <Card
            key={index}
            image={`https://pokeres.bastionbot.org/images/pokemon/${getIdFromURL(
              pokemon.pokemon.url,
            )}.png`}
            name={pokemon.pokemon.name}
            price={getIdFromURL(pokemon.pokemon.url)}
            // insideCart={false}
          />
        ))}
    </div>
  );
};

export default Cards;
