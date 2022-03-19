const data = require('../data/zoo_data');

const { species, employees } = data;

// Esta função recebe como parâmetro o id de um funcionário e retorna um array, contendo os valores do objeto do animal residente com maior idade entre os da mesma espécie, da primeira espécie pela qual o funcionário é responsável.
function getOldestFromFirstSpecies(id) {
  const thisEmployee = employees.find((employee) => employee.id === id);
  const idFirstAnimal = thisEmployee.responsibleFor[0];
  const firstAnimal = species.find((animal) => animal.id === idFirstAnimal);
  const animalResidents = firstAnimal.residents;

  const oldestAnimal = animalResidents
    .reduce((acc, animal) => (acc.age > animal.age ? acc : animal));
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
