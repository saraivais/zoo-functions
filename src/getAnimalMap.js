const data = require('../data/zoo_data');

// const { species } = data;

// function generalMap() {
//   const objectToReturn = {};
//   species.forEach(({ name, location }) => {
//     // console.log(name, location);
//     if (!objectToReturn[location]) {
//       objectToReturn[location] = [];
//       objectToReturn[location].push(name);
//     } else {
//       objectToReturn[location].push(name);
//     }
//   });
//   return objectToReturn;
// }

// function mapWithNamesNoFilter() {
//   const objectToReturn = {};
//   species.forEach(({ name, location, residents }) => {
//     const allNames = residents.map((animalzinho) => animalzinho.name);
//     const obj = {
//       [name]: allNames,
//     };
//     // console.log(name, location);
//     if (!objectToReturn[location]) {
//       objectToReturn[location] = [];
//       objectToReturn[location].push(obj);
//     } else {
//       objectToReturn[location].push(obj);
//     }
//   });
//   return objectToReturn;
// }

// function mapWithNamesAndSex() {
//   const objectToReturn = {};
//   species.forEach(({ name, location, residents }) => {
//     const allNames = residents.map((animalzinho) => animalzinho.name);
//     const obj = {
//       [name]: allNames,
//     };
//     // console.log(name, location);
//     if (!objectToReturn[location]) {
//       objectToReturn[location] = [];
//       objectToReturn[location].push(obj);
//     } else {
//       objectToReturn[location].push(obj);
//     }
//   });
//   return objectToReturn;
// }

// tranformar a string em um objeto, com a string sendo chave e o valor sendo um array com o nome da galera;

// !options ~ retorna nomes das espécies por location, dentro de um array que é o value;
// !includeNames ~ mesma coisa de !options
// com includeNames ~ pega o name dos resudents, um array pra cada animal;

function getAnimalMap(options) {
  // if (!options || !options.includeNames) {
  //   return generalMap();
  // }
  // if (options.includeNames === true && !options.sex) {
  //   return mapWithNamesNoFilter();
  // }
  // if (options.includeNames && options.sex) {
  //   mapWithNamesAndSex();
  // }
}

// return objectToReturn;

console.log(getAnimalMap());
console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
