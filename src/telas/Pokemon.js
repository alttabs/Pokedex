import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';

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