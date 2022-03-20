const data = require('../data/zoo_data');

const { species } = data;

// Esta função recebe como parâmetro strings que representam o id dos animais a serem buscados. A quantidade de parâmetros pode variar, por isso o uso do parâmetro rest.
// A função getSpeciesByIds retorna um array. O array pode ser vazio, caso não seja recebido nenhum parâmetro, ou contendo objetos correspondentes a cada animal cujo id foi recebido.
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((animal) => animal.id === id));
}

// Código antigo:
/*
  const chosenSpecies = [];
  ids.forEach((id) => {
    chosenSpecies.push(species.find((animal) => animal.id === id));
  });
  return chosenSpecies;
*/

module.exports = getSpeciesByIds;
