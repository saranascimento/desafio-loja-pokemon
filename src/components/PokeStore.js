import React from 'react';

import { GlobalStorage } from '../GlobalContext';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';
import Cart from '../components/Cart/Cart';

const PokeStore = (typeURL) => {
  return (
    <GlobalStorage typeURL={typeURL}>
      <Header />
      <div className="store container">
        <div className="main container">
          <Cards />
        </div>
        <Cart />
      </div>
    </GlobalStorage>
  );
};

export default PokeStore;
