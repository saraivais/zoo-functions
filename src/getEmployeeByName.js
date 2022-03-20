const data = require('../data/zoo_data');

const { employees } = data;

// Esta função recebe como parâmetro uma string e tem como objetivo buscar o objeto de um funcionário pelo seu nome, firstName ou lastName, e retorná-lo.
// Se a função não recebe parâmetros, deve retornar um objeto vazio.
function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const pickedEmployee = employees
    .find((person) => person.firstName === employeeName || person.lastName === employeeName);
  return pickedEmployee;
}

module.exports = getEmployeeByName;
