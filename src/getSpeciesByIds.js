const data = require('../data/zoo_data');

// console.log(Object.keys(data));
// const { species, employees, hours, prices } = data;
// console.log(species, employees, hours, prices);
// console.log(species);
const { species } = data;
// console.log(species);
// console.log(species[0].id);

// Tem que receber parâmetro rest, para poder receber mais de um Id;
function getSpeciesByIds(...ids) {
  const chosenSpecies = [];
  ids.forEach((id) => {
    chosenSpecies.push(species.find((animal) => animal.id === id));
  });
  return chosenSpecies;
}

module.exports = getSpeciesByIds;
