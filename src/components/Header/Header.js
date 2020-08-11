import React from 'react';
import { GlobalContext } from '../../GlobalContext';

import styles from './Header.module.css';

import Search from './Search';
import Logo from './Logo';

const Header = () => {
  const { type } = React.useContext(GlobalContext);

  return (
    <header className={`${styles.header} ${styles[`header-${type}`]} `}>
      <div className={`${styles.boxHeader} container`}>
        <Logo type={type} />
        <Search />
      </div>
    </header>
  );
};

export default Header;
