import React, { Component } from 'react';
import Topbar from './componentes/Topbar';
import PokemonCard from './componentes/PokemonCard';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="secondary"/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        
      </div>
    );
  }
}

export default App;