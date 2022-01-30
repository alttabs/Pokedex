import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import posed from "react-pose";
import { Typography } from '@material-ui/core';


const EaseOne = [0.25, 0.1, 0.25, 1.0];

const Content = posed.div({
    closed: { height: 0, delay: 100, staggerChildren: 100, delayChildren: 0 },
    open: {
        height: "auto",
        staggerChildren: 1000,
        delayChildren: 320,
        transition: {
            duration: 300,
            ease: EaseOne
        }
    }
});

class PokemonCard extends React.Component {
    state = { open: true }
    state = {
        data: []
    };


    componentDidMount() {
        this.carregarPokemon();
    }

    carregarPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonId}/`);
        const data = await response.json();
        const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const foto = data.sprites.front_default;
        const skills = data.moves.map(item => ' ' + item.move.name).toString();
        const type = data.types.map(item => ' ' + item.type.name).toString();
        const weight = data.weight / 10;
        const height = data.height / 10;

        this.setState({ nome, foto, skills, type, weight, height });


    };

    component
    render() {
        const { foto, nome, type, skills, weight, height } = this.state;
        const { open } = this.state;


        return (
            <Card style={{ margin: 15, Width: 275, maxWidth: 275, minWidth: 275 }}>
                <CardHeader
                    avatar={<Avatar style={{ width: 64, height: 64 }} src={foto} />}
                    title={nome}
                    onClick={() => this.setState({ open: open === "closed" ? false : "closed" })}
                />
                <Content
                    className="content"
                    pose={open === "closed" ? "open" : "closed"}>
                    <Typography style={{ margin: 12 }}>Type: {type}</Typography>
                    <Typography style={{ margin: 12 }} variant="body2" component="p">
                        Weight: {weight}Kg
                        Height: {height}m
                    </Typography>
                    <Typography style={{ margin: 12 }} variant="body2" color="textSecondary" component="p" >Skills: {skills}</Typography >
                </Content>
            </Card>
        )
    }
};

export default PokemonCard;