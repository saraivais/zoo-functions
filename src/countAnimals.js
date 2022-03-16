const data = require('../data/zoo_data');

const { species } = data;

const returnAllAnimals = () => {
  const obj = {};
  species.forEach((eachAnimal) => {
    obj[eachAnimal.name] = eachAnimal.residents.length;
  });
  return obj;
};

function countAnimals(animal) {
  if (!animal) {
    return returnAllAnimals();
  }

  const selectedSpecie = animal.specie;
  const selectedSpecies = species.find((specie) => specie.name === selectedSpecie);
  const { residents } = selectedSpecies;

  if (animal.sex) {
    const selectedSex = animal.sex;
    const filteredResidents = residents.filter((eachAnimal) => eachAnimal.sex === selectedSex);
    return filteredResidents.length;
  }
  return residents.length;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
