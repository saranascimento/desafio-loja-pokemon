import React from 'react';
import { GlobalContext } from '../../GlobalContext';

import styles from './Search.module.css';

const Search = () => {
  const { filterUpdate } = React.useContext(GlobalContext);

  return (
    <input
      type="text"
      id={styles.search}
      placeholder="Buscar Pokemon..."
      onChange={(event) => filterUpdate(event.target.value.toLowerCase())}
    />
  );
};

export default Search;
