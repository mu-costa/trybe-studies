const newEmployees = () => {
    const employees = {
      id1: newUser('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: newUser('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: newUser('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//criar uma função que irá retornar um objeto { nomeCompleto, email }
//a função receberá um parametro nome 

const newUser = (str) => {
    return {
        name: str,
        email: `${str.replace(' ', '_').toLowerCase()}@trybe.com`
    }
}

console.table(newEmployees());