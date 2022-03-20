const data = require('../data/zoo_data');

const { species } = data;

// Esta função não recebe parâmetros e é invocada quando a função countAnimals não recebe parâmetros. Ela cria, dentro de um objeto vazio já declarado, entries (conjunto chave e valor) cujas chaves são os nomes das espécies e os valores são as quantidades de residentes de cada espécie.
const returnAllAnimals = () => {
  const obj = {};
  species.forEach((eachAnimal) => {
    obj[eachAnimal.name] = eachAnimal.residents.length;
  });
  return obj;
};

// Esta função recebe como parâmetro um objeto, que pode conter as keys specie e sex. Se receber parâmetro, ela deve retornar o número de residentes de acordo com as chaves do objeto passado (animal), filtrados por espécie e sexo.
// Se esta função não receber parâmetros, deve retornar um objeto cujas chaves são os nomes das espécies e os valores são as quantidades de residentes de cada espécie no zoológico.
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

module.exports = countAnimals;
