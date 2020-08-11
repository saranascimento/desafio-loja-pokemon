import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './Cart.module.css';
import { FaCartArrowDown } from 'react-icons/fa';

import ItemCart from './ItemCart';
import ThankfulModal from '../ThankfulModal/ThankfulModal';

const Cart = () => {
  const {
    pokemonSelected,
    resetCart,
    filterUpdate,
    type,
    modalIsOpen,
    setModalIsOpen,
  } = React.useContext(GlobalContext);
  let [activeMobileCart, changeActiveMobileCart] = React.useState(false);

  const updateActive = (activeMobileCart) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      changeActiveMobileCart(!activeMobileCart);
    }
  };

  const handleOpen = () => {
    setModalIsOpen(true);
    filterUpdate('');
    resetCart();
  };

  return (
    <div
      className={`${styles.cart} ${activeMobileCart ? styles.activeCart : ''}`}
      onClick={() => updateActive(activeMobileCart)}
    >
      <div className={styles.cartHeader}>
        <FaCartArrowDown />
        <h1>Carrinho</h1>
      </div>

      <div className={styles.cartBody}>
        {pokemonSelected &&
          pokemonSelected.map((pokemon, index) => (
            <ItemCart key={index} pokemon={pokemon} />
          ))}
      </div>

      <div className={styles.cartFooter}>
        <div className={styles.cartSummary}>
          <div className={styles.cartAmountItems}>
            <span className={styles.cartPrice}>
              {pokemonSelected.reduce((totalPrice, pokemon) => {
                return totalPrice + pokemon.amount;
              }, 0)}{' '}
              Pokemon
            </span>
          </div>

          <div className={styles.cartTotalPrice}>
            <p>Total: </p>
            <div className={styles.cartPrice}>
              <img
                className="priceImage"
                alt="pokecoin"
                src={'/img/pokecoin.png'}
              />
              <span className="price">
                {pokemonSelected.reduce((totalPrice, pokemon) => {
                  return totalPrice + Number(pokemon.price * pokemon.amount);
                }, 0)}
              </span>
            </div>
          </div>
        </div>
        <button
          className={`${styles.cartResetBtn} ${styles[`btn-cart-${type}`]}`}
          href="#"
          onClick={handleOpen}
        >
          Finalizar
        </button>
        {modalIsOpen && <ThankfulModal />}
      </div>
    </div>
  );
};

export default Cart;
