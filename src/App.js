import React, { Component }from 'react';
import api from '../src/services/api'

import "./styles.css"

import Header from './components/Header';
import Main from './components/Main';



export default class App  extends Component { 
  state = {
    pokemonList: [],
    pokemonSelected: [],
    type: "",
    };

    componentDidMount() {
        this.loadPokemons();
    };

    loadPokemons = async () => {
        const response = await api.get(`type/12`)
        this.setState({ pokemonList: response.data.pokemon, type: response.data.name})
    };

    setPokemonSelected = (image, name, price) => {
      this.setState({pokemonSelected: [...this.state.pokemonSelected, {image, name, price}]})    
    }

  render () {
    const { pokemonList, type, pokemonSelected } = this.state
    return  (
      <div className="App">
          <Header 
          pokemonSelected={pokemonSelected}
          />
          <div className="store">
            <Main 
              pokemonList={pokemonList}
              type={type}
              setPokemonSelected={this.setPokemonSelected}
            />
        
          </div>
        
      </div>
    )
    
  }
    
}


