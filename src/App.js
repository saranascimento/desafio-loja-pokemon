import React, { Component }from 'react';
import api from '../src/services/api'

import "./styles.css"

import Header from './components/Header';
import Cards from './components/Cards';
import Cart from './components/Cart';



export default class App  extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      pokemonList: [],
      pokemonSelected: [],
      type: "",
      filterPokemon: "",
    };

    this.filterUpdate = this.filterUpdate.bind(this);
  }

    componentDidMount() {
        this.loadPokemons();
    };

    getPokemonThemeFromUrl = () => {
      return window.location.pathname.split("/")[1] === "fire" ? "fire" : "grass"
    }

    loadPokemons = async () => {
      let pokemonType = this.getPokemonThemeFromUrl()
      const response = await api.get(`type/${pokemonType}`)
      this.setState({ pokemonList: response.data.pokemon, type: response.data.name})
    };

    resetCart = () => {
      return this.setState({pokemonSelected: []})
    }

    setPokemonSelected = (image, name, price) => {

      const found = this.state.pokemonSelected.findIndex(pokemon => pokemon.name === name ) 

      if(found === -1) {
        return this.setState({pokemonSelected: [...this.state.pokemonSelected, {image, name, price, amount: 1 }]})  
      }

      let pokemonsSelectedList = [...this.state.pokemonSelected] 
      
      pokemonsSelectedList[found].amount += 1

      this.setState({pokemonSelected: pokemonsSelectedList})

        
    }

    filterUpdate(value) {
      this.setState({
        filterPokemon: value
      })
    }

  render () {
    const { pokemonList, type, pokemonSelected, filterPokemon } = this.state
   
    return  (
      <div className="App">
          <Header 
            pokemonSelected={pokemonSelected}
            type={type}
            resetCart={this.resetCart}
            filterUpdate={this.filterUpdate}
          />
          <div className="store container">
            <Cards 
              pokemonList={pokemonList}
              type={type}
              setPokemonSelected={this.setPokemonSelected}
              filterPokemon={filterPokemon}
            />
            <Cart 
            pokemonSelected={pokemonSelected} 
            type={type} 
            resetCart={this.resetCart} 
            filterUpdate={this.filterUpdate}
            />
          </div>
        
      </div>
    )
    
  }
    
}


