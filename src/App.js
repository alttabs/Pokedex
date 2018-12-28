import React, { Component } from 'react';
import Topbar from './componentes/Topbar';
import PokemonCard from './componentes/PokemonCard';

const listaPokemons = () => [1, 2, 3, 10, 88, 100 ,700,345, 500].map(id => 
{return<PokemonCard key={id} pokemonId={id}/>;
});

class App extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="primary"/>
        <div style={{marginTop: 72}}>
        {listaPokemons()}</div>
        </div>
    );
  }
}

export default App;
