import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import { FaTimes } from 'react-icons/fa';

import styles from './ThankfulModal.module.css';

const ThankfulModal = () => {
  const { type } = React.useContext(GlobalContext);
  const { setModalIsOpen } = React.useContext(GlobalContext);

  function handleOutSideClick(event) {
    if (event.target === event.currentTarget) setModalIsOpen(false);
  }

  function isClose() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.modal} onClick={handleOutSideClick}>
      <div className={`${styles.modalWapper} ${styles[`modalWapper-${type}`]}`}>
        <div className={`${styles.boxModal} ${styles[`boxModal-${type}`]}`}>
          <button onClick={isClose}>
            <FaTimes />
          </button>
          <h1>Obrigado!!!</h1>
          <p>Você recebeu de volta:</p>
          <span>
            <img
              className="priceImage"
              alt="pokecoin"
              src={'/img/pokecoin.png'}
            />
            {Number(Math.random() * 1000).toFixed(0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThankfulModal;
