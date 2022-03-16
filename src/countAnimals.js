const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function countAnimals(animal) {
  // se !animal, retorna um objeto com entries ('stringNomeAnimal' : quantidadeAnimals);
  const obj = {};
  if (!animal) {
    species.forEach((eachAnimal) => {
      obj[eachAnimal.name] = eachAnimal.residents.length;
    });
    return obj;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
