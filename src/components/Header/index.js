import React, {useState} from 'react';

import {FaShoppingCart} from 'react-icons/fa'
import { ClickAwayListener } from '@material-ui/core';

import Cart from '../Cart'
import Search from '../Search'

import "./styles.css"

const Header = ({pokemonSelected, type, resetCart, filterUpdate}) => {
    
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };

    return (
        <header className={`header header-${type}`}>
            <div className="box-header container">
                <div className="logo-wrapper ">
                    <img className="" alt="Pokebola" src={`/img/pokeball-${type}.svg`} />
                    <p>PokeStore</p>
                </div>
                
                <Search 
                    filterUpdate={filterUpdate}
                />

                <ClickAwayListener onClickAway={handleClickAway}>
                <div className="cart-wrapper">
                <div>
                    <button type="button" className="btn-header-cart" onClick={handleClick}>
                        
                    <FaShoppingCart /><span>{pokemonSelected.length}</span>
                    </button>
                </div>
                {open ? (
                    
                        <Cart 
                            pokemonSelected={pokemonSelected}
                            type={type}
                            resetCart={resetCart}
                            filterUpdate={filterUpdate}
                        />
                    
                ) : null}
                </div>
                </ClickAwayListener>
            </div>  
        </header>
    )
};



export default Header;