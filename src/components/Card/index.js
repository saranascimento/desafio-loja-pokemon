import React from 'react'

import './styles.css'

const Card = ({id, type, image, name, price, setPokemonSelected}) => {
    const handleClick = (event) => {
        console.log("")
    }

    return (

        <article className="card" key={id}>
            <figure>
                <img className="card_pokemon-image" alt={type} src={image}/>
                <figcaption>
                    <strong className="card_pokemon-name">{name}</strong>
                    <div className="card_pokemon-price-wrapper">
                        <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                        <span className="card_pokemon-price">{price}</span>
                    </div>
                    <button className="card_pokemon-button" href="#" onClick={() => setPokemonSelected(image, name, price)}>add</button>
                </figcaption>
            </figure>                        
        </article>
    )
}

export default Card