import React from 'react';
import styles from './ItemCart.module.css';

const ItemCart = ({ pokemon, index }) => {
  return (
    <section key={index} className={styles.item}>
      <img className={styles.itemImage} alt="pokemon" src={pokemon.image} />
      <strong className={styles.itemName}>
        {pokemon.name}
        <span>{`(x${pokemon.amount})`}</span>
      </strong>
      <div className={styles.itemPrice}>
        <img className="priceImage" alt="pokecoin" src={'/img/pokecoin.png'} />
        <span>{pokemon.id * pokemon.amount}</span>
      </div>
    </section>
  );
};

export default ItemCart;
