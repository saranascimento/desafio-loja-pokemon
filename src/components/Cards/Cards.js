import React from 'react';

import Card from './Card';

import { GlobalContext } from '../../GlobalContext';
import styles from './Cards.module.css';

const Cards = () => {
  const { pokemonList, filterPokemon, getIdFromURL } = React.useContext(
    GlobalContext,
  );

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
            index={index}
            image={`https://pokeres.bastionbot.org/images/pokemon/${getIdFromURL(
              pokemon.pokemon.url,
            )}.png`}
            name={pokemon.pokemon.name}
            id={getIdFromURL(pokemon.pokemon.url)}
          />
        ))}
    </div>
  );
};

export default Cards;
