const data = require('../data/zoo_data');

const { species } = data;

// Esta função não recebe parâmetros e cria e retorna um objeto básico, contendo somente as localizações como chaves e arrays vazios como valores.
function createBasicMap() {
  const basicMap = {};
  species.forEach((animal) => {
    if (!basicMap[animal.location]) {
      basicMap[animal.location] = [];
    }
  });
  return basicMap;
}

// Esta função não recebe parâmetros e cria um objeto, gerado inicialmente 'vazio' com a função acima createBasicMap(), que é preenchido (o array, que é o valor) pelos nomes das espécies presentes nas localizações que já estão no objeto como keys.
function addsSpeciesNames() {
  const mapWithSpecies = createBasicMap();
  species.forEach((animal) => {
    mapWithSpecies[animal.location].push(animal.name);
  });
  return mapWithSpecies;
}

// Esta função recebe como parâmetro o mesmo objeto que getAnimalMap() e retorna um objeto, com chaves de localizações, contendo arrays de objetos, com chaves de nomes de espécies e valores de arrays de strings, com nomes de cada animal individual daquela espécie.
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

// Esta função recebe como parâmetro o mesmo objeto que getAnimalMap() e retorna um objeto, com chaves de localizações, contendo arrays de objetos, com chaves de nomes de espécies e valores de arrays de strings, com nomes de animais individuais da espécie, filtrados por sexo.
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

// Esta função recebe como parâmetro o mesmo objeto que a função getAnimalMap, mas somente quando a chave incluideNames existe, e tem como objetivo chamar funções específicas para quando há ou não a opções de filtrar por sexo.
function sortsFilters(options) {
  if (options.sex) {
    return filterBySex(options);
  }
  if (options.includeNames) {
    return allResidentsNames(options);
  }
}

// Esta função recebe como parâmetro um objeto, que pode ter como keys includeNames, sex e sorted, e retorna um objeto com as localizações (NE, NW, SE e SW) como keys e, a depender dos parâmetros passados, somente os nomes das espécies ou objetos para cada espécie, com nome dos residentes em um array de strings.
// Se a função não receber parâmetros ou receber parâmetros que não possuirem includeNames, deve retornar um objeto com chaves no formato 'localizaçao: [especie, especie ...]'.
// Se a função receber parâmetros com a chave includeNames === true, invoca uma segunda função cujo objeto é organizar as chaves e valores recebidas como parâmetro e retornar o objeto de acordo com o que foi passado.
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return addsSpeciesNames();
  }
  return sortsFilters(options);
}

module.exports = getAnimalMap;
