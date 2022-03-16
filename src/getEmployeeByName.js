const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const pickedEmployee = employees.find((person) => person.firstName === employeeName
  || person.lastName === employeeName);
  return pickedEmployee;
}

module.exports = getEmployeeByName;
