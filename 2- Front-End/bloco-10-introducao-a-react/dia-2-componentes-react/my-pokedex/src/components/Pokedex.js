import React, {Component} from "react";
import Pokemon from "./Pokemon";
import pokemons from '../data';

class Pokedex extends Component {
    render (){
        const mapPokemons = pokemons.map((poke) => {
            return <Pokemon name={poke.name} image={poke.image} type={poke.type}
            weight={poke.averageWeight.value} measurementUnit={poke.averageWeight.measurementUnit}
            />
        })

        return (
        <div className='pokedex'>
                {mapPokemons}
        </div>)
    }
}

export default Pokedex;