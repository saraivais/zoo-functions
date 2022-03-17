const data = require('../data/zoo_data');

const { species, employees } = data;
console.log(species, employees);
// recebe nome ou id, dentro de um objeto~
// cata o employee;
// tem que devolver o employee com id, fullname (name + lastname), species (responsiblefor - pega nome com id~), locations (responsiblefor - pega location com id~);

function getEveryEmployee() {

}

function getOneEmployee() {

}

// sem parâmetro ~ retorna tudo de todo mundo~
function getEmployeesCoverage(chosenEmployee) {
  if (!chosenEmployee) {
    getEveryEmployee();
  } else if (chosenEmployee.id) {
    getOneEmployee();
  } else if (chosenEmployee.name) {
    getOneEmployee();
  }
}

module.exports = getEmployeesCoverage;
