import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';
import PokemonCard from '../componentes/PokemonCard';
import Pokemon from './Pokedex';

class Pokemon extends Component {
  render() {
    return (
        <div>
          <Topbar titulo="Pokemon" cor="primary" />
          <div style={{margintop: 71}}>
          <Pokemoncard pokemonId={id} />
          </div>
    );
  }
}       
export default Pokemon;