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
  
  const filterPokemon = ({ name }) => name === 'Squirtle';
  const printsMessage = (error, message) => error === null ? console.log(message) : console.log(error);

  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
      
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails(filterPokemon, printsMessage);
  
  module.exports = {
    getPokemonDetails,
  };