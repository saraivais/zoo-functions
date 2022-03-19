const data = require('../data/zoo_data');

const { species, employees } = data;

// O objetivo dessa função é retornar o objeto desejado do funcionário selecionado, seja por firstName, lastName ou id, ou então jogar um erro, caso não exista este funcionário.
// Caso o parâmetro seja válido, a função captura o objeto do funcionário, depois cria um outro objeto, newObj, que vai ser montado de acordo com o funcionário escolhido e retornado.
// As duas primeiras chaves do newObj são dados de id, firstName e lastName do objeto do employee e as duas últimas chaves são baseadas na chave responsibleFor, que é um array de strings.
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

// Esta função não recebe parâmetros e seu objetivo é retornar um array de objetos baseados nos objetos de cada employee, que são obtidos chamando a função getOneEmployee para cada employee, utilizando sua key firstName;
function getEveryEmployee() {
  return employees.map((eachEmployee) => getOneEmployee(eachEmployee.firstName));
}

// O objetivo desta função é decidir como e qual função será chamada, passando um parâmetro simples (string), com base no parâmetro chosenEmployee, que é um objeto que pode conter as chaves name ou id;
// Se chosenEmployee possuir alguma destas chaves, o valor da chave será passado ao chamar a função getOneEmployee;
// Se não for passado parâmetro, será chamada a função getEveryEmployee.
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
