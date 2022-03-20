const data = require('../data/zoo_data');

const { species } = data;

// Esta função recebe como parâmetros uma string, que corresponde ao nome de um animal, e um número, que corresponde a uma idade.
// O objetivo da função é verificar se todos os animais da espécie indicada pelo parâmetro animalName têm idade superior ao número passado pelo parâmetro age.
// O retorno desta função é um valor booleano, sendo true para todos os animais mais velhos que 'age' e false para o contrário.
function getAnimalsOlderThan(animalName, age) {
  const chosenAnimal = species.find((animal) => animal.name === animalName);
  const { residents } = chosenAnimal;
  return residents.every((lilAnimal) => lilAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
