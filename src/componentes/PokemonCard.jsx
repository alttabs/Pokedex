import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import posed from "react-pose";

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

const InnerForm = posed.div({
    open: { opacity: 1 },
    closed: { opacity: 0 }
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
        console.log(this.props.pokemonId);
        const response = await fetch(`api/v2/pokemon/${this.props.pokemonId}/`);
        const data = await response.json();
        const nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const foto = data.sprites.front_default;
        this.setState({ nome, foto });


    };

    component
    render() {
        const { foto, nome } = this.state;
        const { open } = this.state;


        return (
            <Card style={{ margin: 16 }}>
                <CardHeader
                    avatar={<Avatar style={{ width: 64, height: 64 }} src={foto} />}
                    title={nome}
                    onClick={() => this.setState({ open: open === "closed" ? false : "closed" })}
                />
                <Content
                    className="content"
                    pose={open === "closed" ? "open" : "closed"}>
                    oi
                </Content>
            </Card>
        )
    }
};

export default PokemonCard;