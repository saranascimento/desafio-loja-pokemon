import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Card.module.css';

const Card = ({ index, image, name, price }) => {
  const {
    type,
    getPokemonSelected,
    clickedButtons,
    setClickedButtons,
  } = React.useContext(GlobalContext);

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
            <span className={styles.price}>{price}</span>
          </div>

          <button
            className={`${styles.btn} ${styles[`btn-${type}`]}
              ${
                clickedButtons.includes(index)
                  ? styles[`adicionado-${type}`]
                  : ''
              }`}
            href="#"
            onClick={() => {
              getPokemonSelected(image, name, price);
              setClickedButtons([...clickedButtons, index]);
            }}
          >
            {clickedButtons.includes(index) ? 'Adicionado' : 'Adicionar +'}
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

// type, image, name, price

export default Card;
