const data = require('../data/zoo_data');

const { species } = data;

function generalMap() {
  const objectToReturn = {};
  species.forEach(({ name, location }) => {
    // console.log(name, location);
    if (!objectToReturn[location]) {
      objectToReturn[location] = [];
      objectToReturn[location].push(name);
    } else {
      objectToReturn[location].push(name);
    }
  });
  return objectToReturn;
}

function getAnimalMap(options) {
  // !options ~ retorna nomes das espécies por location, dentro de um array que é o value;
  // !includeNames ~ mesma coisa de !options
  // com includeNames ~ pega o name dos resudents, um array pra cada animal;
  const objectToReturn = {};
  if (!options || !options.includeNames) {
    return generalMap();
  }
  if (options.includeNames === true) {
    // criadas chaves do objeto com as localizaçoes
    species.forEach(({ name, location, residents }) => {
      if (!objectToReturn[location]) {
        objectToReturn[location] = [];
      }
      if (!objectToReturn[location].includes(name)) {
        objectToReturn[location].push({[name]: []});
      }
    });
  }

  return objectToReturn;
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
