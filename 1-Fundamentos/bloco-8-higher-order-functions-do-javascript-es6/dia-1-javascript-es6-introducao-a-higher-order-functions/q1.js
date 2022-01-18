/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

//HoF que vai receber a função hiredPeople como parametro

const newEmployees = (namePerson) => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    
    if (namePerson === 'Pedro Guerra'){
      employees['id1'] = hiredPeople(namePerson);
    } else if (namePerson === 'Luiza Drumond'){
      employees['id2'] = hiredPeople(namePerson);
    } else if (namePerson === 'Carla Paiva'){
      employees['id3'] = hiredPeople(namePerson);
    }

    return Object.entries(employees);
  };

//função que vai receber o nome completo e retorno um objeto com o nome e o email
  const hiredPeople = (name) => {
    const people = {
      nomeCompleto : name,
      email: `${name.split(' ').join('_').toLowerCase()}@trybe.com`
    }
    return Object.values(people);
  }
  
  console.log(newEmployees('Luiza Drumond'));
