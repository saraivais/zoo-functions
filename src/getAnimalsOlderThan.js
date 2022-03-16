const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function getAnimalsOlderThan(animalName, age) {
  // pegar o objeto pelo name, que é uma string
  // avaliar o array de objetos residents, por age, se é maior que o parametro age;
  const chosenAnimal = species.find((animal) => animal.name === animalName);
  const { residents } = chosenAnimal;
  return residents.every((lilAnimal) => lilAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
