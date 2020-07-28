import React from 'react'
import './styles.css'

const ItemCart = ({pokemon}) => {
    return (
        <div className="item">
            <img className="item_pokemon-image" alt="image pokemon" src={pokemon.image}/>
            <strong className="item_pokemon-name">{pokemon.name}<span>{` (x${pokemon.amount})`}</span></strong>
            <div className="price">
                <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                <span>{pokemon.price * pokemon.amount}</span>
            </div>
        </div>
    )
}

export default ItemCart