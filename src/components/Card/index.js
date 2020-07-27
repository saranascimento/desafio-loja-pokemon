import React from 'react'

import './styles.css'

const Card = ({id, type, image, name, price, setPokemonSelected}) => {

    return (

        <article className={`card card-${type}`} key={id}>
            <figure className={`figure-card-${type}`}>
                <img className="card_pokemon-image" alt={type} src={image}/>
                <figcaption>
                    <strong className="card_pokemon-name " >{name}</strong>
                    <div className="card_pokemon-price-wrapper">
                        <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                        <span className="card_pokemon-price">{price}</span>
                    </div>
                    <button className={`card_pokemon-button card-btn-${type}`} href="#" onClick={() => setPokemonSelected(image, name, price)}>adicionar +</button>
                </figcaption>
            </figure>                        
        </article>
    )
}

export default Card