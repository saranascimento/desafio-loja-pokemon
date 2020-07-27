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

    getPokemonThemeFromUrl(){
      return window.location.pathname.split("/")[1] === "fire" ? "fire" : "grass"
    }

    loadPokemons = async () => {
      let pokemonType = this.getPokemonThemeFromUrl()
      const response = await api.get(`type/${pokemonType}`)
      this.setState({ pokemonList: response.data.pokemon, type: response.data.name})
    };

    setPokemonSelected = (image, name, price) => {

      // findIndex - retorna -1 se não encontrar ou o index do elemento encontrado
      const found = this.state.pokemonSelected.findIndex(element => element.name === name ) 

      if(found === -1) {
        return this.setState({pokemonSelected: [...this.state.pokemonSelected, {image, name, price}]})  
      }

      let pokemonsSelectedList = [...this.state.pokemonSelected] 

      pokemonsSelectedList[found].price += price

      this.setState({pokemonSelected: pokemonsSelectedList})

        
    }

  render () {
    const { pokemonList, type, pokemonSelected } = this.state
    return  (
      <div className="App">
          <Header 
            pokemonSelected={pokemonSelected}
            type={type}
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


