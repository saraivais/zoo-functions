const data = require('../data/zoo_data');

const { employees } = data;

// Esta função recebe como parâmetro uma string (id) e retorna um booleano, se este id for pertencente a algum manager.
// O id é determinado manager ou não se estiver presente em algum array 'managers' de outro funcionário.
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// Esta função recebe um id. Se este id não for de um manager, a função lança um erro.
// Se o id for de um manager, a função retorna um array de strings contendo os nomes completos (firstName, lastName) de todos os employees que este manager gerencia.
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
