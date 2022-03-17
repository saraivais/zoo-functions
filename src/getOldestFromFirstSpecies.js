const data = require('../data/zoo_data');

const { species, employees } = data;
// console.log(employees);
// console.log(species);

function getOldestFromFirstSpecies(id) {
  // receber Id do funcionário, vou pegar o responsible for~ primeiro;
  const thisEmployee = employees.find((employee) => employee.id === id);
  // console.log(thisEmployee);
  const idFirstAnimal = thisEmployee.responsibleFor[0];
  // console.log(idFirstAnimal);
  const firstAnimal = species.find((animal) => animal.id === idFirstAnimal);
  // console.log(firstAnimal);
  const animalResidents = firstAnimal.residents;

  const oldestAnimal = animalResidents.reduce((acc, animal) => acc.age > animal.age ? acc : animal);
  return Object.values(oldestAnimal);

  // pegar o animal com o id que eu tenho;
  // dps fazer um reduce pra pegar o animal mais velho~ 


}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
