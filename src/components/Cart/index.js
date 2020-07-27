import React from 'react';

import './styles.css'

const Cart = ({pokemonSelected, type}) => {
    return (
        <div className="cart">
            <div className=" cart-header">
                <h1>Carrinho</h1>
            </div>
            <div className="cart-body">

                {pokemonSelected.map((pokemon) => (
                    
                    <div className="item">
                        <img className="item_pokemon-image" alt="image pokemon" src={pokemon.image}/>
                        <strong className="item_pokemon-name">{pokemon.name}</strong>
                        <div className="price">
                            <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                            <span className="item__pokemon-price">{pokemon.price}</span>
                        </div>
                    </div>
                ))}
                
            </div>    
                
            <div className="cart-footer">
                
                    <div className="item_total-price">
                        <p>Total: </p>
                        <div className="price">
                            <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                            <span className="card_pokemon-price">{pokemonSelected.reduce((totalPrice, pokemon) => {
                                console.log(totalPrice, Number(pokemon.price))
                                return totalPrice + Number(pokemon.price)
                            },0)}</span>
                        </div>
                    </div> 
                    
                <button className={`item_cart-button btn-cart-${type}`} href="#">Finalizar</button>
            </div>

        </div>
        
    )
};

export default Cart;