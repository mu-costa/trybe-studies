const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

//função para tratar o erro
const errorHandle = (error, response) => {
  if(error === null){
    console.log(response);
  }else{
    console.log(error);
  }
}; 
// função que recebe duas funções 
// uma parametro do find e outra callback
function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find((filter));

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
};

const findPokemon = nome => (( { name } ) => name === nome);

getPokemonDetails(findPokemon('Murilo'), errorHandle);

module.exports = {
  getPokemonDetails,
};