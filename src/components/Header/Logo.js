import React from 'react';

import styles from './Logo.module.css';

const Logo = ({ type }) => {
  return (
    <div className={styles.logoWrapper}>
      {/* <img alt="Pokebola" src={`/assets/img/pokeball-${'grass'}.svg`} /> */}
      <img alt="Pokebola" src={`/img/pokeball-${type}.svg`} />
      <p>PokeStore</p>
    </div>
  );
};

export default Logo;
