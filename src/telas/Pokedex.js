import React, { Component } from 'react';
import Topbar from '../telas/Topbar';
import PokemonCard from '../telas/PokemonCard';

const listaPokemons = () => [1, 2, 3, 10, 88, 100,700,345, 500].map(id => 
  {
    return(
      <div 
      style={{ margin: 16, cursor: 'pointer'}}
      key={id}
      onClick={() => checkPropTypes.history.push(`/pokemon`/pokemon/${id})}
      >
      <PokemonCard pokemonId={id}/>;
      </div>
    );  
  });  

  class Pokedex extends Component {
    render() {
      return (
        <div>
          <Topbar titulo="Pokedex" cor="blue-light "/>
          <div style={{marginTop: 72}}> {listaPokemons(this.props)}</div>
        </div>
      );
    }
  }     
   
export default Pokedex;