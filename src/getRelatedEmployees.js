const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);

function isManager(id) {
  // retorna true se esse id estiver contido em [managers] de algum outro funcionário;
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const underManager = employees
      .filter(({ managers }) => managers.includes(managerId));
    const employeeName = underManager.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return employeeName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
