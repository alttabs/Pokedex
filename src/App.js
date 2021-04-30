import React, { Component } from 'react';
import Topbar from './componentes/Topbar';
import PokemonCard from './componentes/PokemonCard';

const listaPokemons = () => Array.from({length: 150}, (_, i) => i + 1)
.map(id => 
{return<PokemonCard key={id} pokemonId={id}/>;
});

class App extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="primary"/>
        <div className="cards" style={{marginTop: 72}}>
        {listaPokemons()}</div>
        </div>
    );
  }
}

export default App;
