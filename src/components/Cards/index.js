import React, { Component } from 'react';


import Card from '../Card'

import "./styles.css"

export default class Cards extends Component {
    

    getIdFromURL = (url) => {
        let id = parseInt(url.split("/")[6])

        return id
    }


    render() {
        let {pokemonList, type, setPokemonSelected, filterPokemon} = this.props
  
        return (
            <div className="pokemon-list container">
            
                {pokemonList.slice(0,32)
                .filter(pokemon => {
                    return pokemon.pokemon.name.indexOf(filterPokemon) >= 0
                })
                .map((pokemon, index) => ( 
                    <Card
                        id={index}
                        type={type}
                        image={`https://pokeres.bastionbot.org/images/pokemon/${this.getIdFromURL(pokemon.pokemon.url)}.png`}
                        name={pokemon.pokemon.name}
                        price={this.getIdFromURL(pokemon.pokemon.url)}
                        setPokemonSelected={setPokemonSelected}
                        insideCart={false}
                    />      
                   
                ))}
            </div>
            
        )
    }
}