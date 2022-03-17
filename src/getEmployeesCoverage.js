const data = require('../data/zoo_data');

const { species, employees } = data;
// console.log(species, employees);
// recebe nome ou id, dentro de um objeto~
// cata o employee;
// tem que devolver o employee com id, fullname (name + lastname), species (responsiblefor - pega nome com id~), locations (responsiblefor - pega location com id~);

// new Set()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set;
function getEveryEmployee() {
  const allEmployees = employees.map((eachEmployee) => {
    const newObj = {
      id: eachEmployee.id,
      fullName: `${eachEmployee.firstName} ${eachEmployee.lastName}`,
      species: eachEmployee.responsibleFor.map((id) => species
        .find((animal) => animal.id === id).name),
      locations: eachEmployee.responsibleFor.map((id) => species
        .find((animal) => animal.id === id).location),
    };
    return newObj;
  });
  return allEmployees;
}

function getOneEmployee(nameOrId) {
  const thisEmployee = employees
    .find((eachEmployee) => eachEmployee.firstName === nameOrId
    || eachEmployee.lastName === nameOrId || eachEmployee.id === nameOrId);
  if (!thisEmployee) {
    throw new Error('Informações inválidas');
  }
  const newObj = {
    id: thisEmployee.id,
    fullName: `${thisEmployee.firstName} ${thisEmployee.lastName}`,
    species: thisEmployee.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: thisEmployee.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  };
  return newObj;
}

// sem parâmetro ~ retorna tudo de todo mundo~
function getEmployeesCoverage(chosenEmployee) {
  if (!chosenEmployee) {
    return getEveryEmployee();
  }
  if (chosenEmployee.id) {
    return getOneEmployee(chosenEmployee.id);
  }
  if (chosenEmployee.name) {
    return getOneEmployee(chosenEmployee.name);
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
