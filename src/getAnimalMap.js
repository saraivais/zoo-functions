const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

// recebe um objeto, que pode ter como keys:
// includeNames, sex, sorted;

// uma função cria o objeto com as localizações;
// uma função, que só vai ser chamada com includeNames, cria a lista de nomes. Daí, se tiver sorted ou algum filtro, filtra e depois taca lá~

// createBasicMap retorna um objeto com chaves de locations, com um array vazio dentro~
function createBasicMap() {
  const basicMap = {};
  species.forEach((animal) => {
    if (!basicMap[animal.location]) {
      basicMap[animal.location] = [];
    }
  });
  return basicMap;
}

function addsSpeciesNames(emptyMap) {
  const mapWithSpecies = createBasicMap();
  species.forEach((animal) => {
    mapWithSpecies[animal.location].push(animal.name);
  });
  return mapWithSpecies;
}

function allResidentsNames(options) {
  const allNamesMap = createBasicMap();
  species.forEach((animal) => {
    const myResidents = animal.residents;
    const allNames = myResidents
      .map((animalResident) => animalResident.name);
    let newNames;
    if (options.sorted === true) {
      newNames = allNames.sort();
    } else {
      newNames = allNames;
    }
    const animalObject = {
      [animal.name]: newNames,
    };
    allNamesMap[animal.location].push(animalObject);
  });
  return allNamesMap;
}

function filterBySex(options) {
  const genderedMap = createBasicMap();
  species.forEach((animal) => {
    const myResidents = animal.residents;
    const genderedNames = myResidents
      .filter((resident) => resident.sex === options.sex)
      .map((animalResident) => animalResident.name);
    let newNames;
    if (options.sorted === true) {
      newNames = genderedNames.sort();
    } else {
      newNames = genderedNames;
    }
    const animalObject = {
      [animal.name]: newNames,
    };
    genderedMap[animal.location].push(animalObject);
  });
  return genderedMap;
}

function sortsFilters(options) {
  if (options.sex) {
    return filterBySex(options);
  }
  if (options.includeNames) {
    return allResidentsNames(options);
  }
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return addsSpeciesNames();
  }
  return sortsFilters(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
