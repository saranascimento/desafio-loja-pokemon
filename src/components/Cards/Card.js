import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Card.module.css';

const Card = ({ index, image, name, id }) => {
  const { type, insertSelectedPokemon, selectedPokemon } = React.useContext(
    GlobalContext,
  );

  const findPokemonById = (id) => {
    return selectedPokemon.find((pokemon) => pokemon.id === id);
  };

  return (
    <article key={index} className={`${styles.card} ${styles[`card-${type}`]}`}>
      <figure className={styles[`figure-card-${type}`]}>
        <img className={styles.pokemonImage} alt={type} src={image} />
        <figcaption>
          <strong className={styles.pokemonName}>{name}</strong>
          <div className={styles.priceWrapper}>
            <img
              className="priceImage"
              alt="pokecoin"
              src={'/img/pokecoin.png'}
            />
            <span className={styles.price}>{id}</span>
          </div>

          <button
            className={`${styles.btn} ${styles[`btn-${type}`]}
              ${findPokemonById(id) ? styles[`adicionado-${type}`] : ''}`}
            href="#"
            onClick={() => {
              insertSelectedPokemon(image, name, id);
            }}
          >
            {findPokemonById(id) ? 'Adicionado' : 'Adicionar +'}
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

export default Card;
