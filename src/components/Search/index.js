import React from 'react'

import './styles.css'

const Search = ({filterUpdate}) => {

    return (
        <input 
            onChange={(event) => filterUpdate(event.target.value.toLowerCase())}
            type="text"  
            id="search"
            placeholder="Buscar Pokemon..." 
             
        /> 
    )
}

export default Search;