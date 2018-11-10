import React, { Component } from 'react';
import Topbar from './componentes/Topbar';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="secondary"/>
      </div>
    );
  }
}

export default App;