import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Card.module.css';

const Card = ({ index, image, name, price }) => {
  const { type, getPokemonSelected } = React.useContext(GlobalContext);

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
          {/* <Button type={type} image={image} id={id} name={name} price={price} /> */}
          <button
            className={`${styles.btn} ${styles[`btn-${type}`]}`}
            href="#"
            onClick={() => {
              getPokemonSelected(image, name, price);
            }}
          >
            Adicionar +
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

// type, image, name, price

export default Card;
