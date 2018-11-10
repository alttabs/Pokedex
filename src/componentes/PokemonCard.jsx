import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

class PokemonCard extends React.Component{
    state = { 
        foto:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        nome: 'eevee'
        };    
       
    componentDidMount(){
    this.carregarPokemon();
    }

    carregarPokemon = async () => {  
        console.log(this.props.pokemonId);
        const response = await fetch(`api/v2/pokemon/${this.props.pokemonId}/`);
        const data = await response.json();
        const nome = data.name;
        const foto = data.sprites.front_default;
        this.setState({nome, foto});
        };

    componet
    render() {
        const {foto, nome} = this.state;
        console.log('Renderizei');
        return (   
            <Card style={{margin:16}}>        
              <CardHeader
                avatar={ <Avatar style={{ width:64, height:64}} src={foto}/>}         
                
                title={nome}
              />
            </Card>
        )
    }
};

export default PokemonCard; 