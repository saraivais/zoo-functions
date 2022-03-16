const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // Recebe um array de objetos representando pessoas ~
  // Retorna um objeto com 3 keys~ adult, child, senior ~
  const entryCounter = { adult: 0, child: 0, senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) {
      entryCounter.child += 1;
    } else if (person.age < 50) {
      entryCounter.adult += 1;
    } else {
      entryCounter.senior += 1;
    }
  });
  return entryCounter;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  const factors = [prices];

  factors.push(entries);
  const resultado = factors
    .reduce(((a, b) => a.child * b.child + a.adult * b.adult + a.senior * b.senior));
  return resultado;
}

module.exports = { calculateEntry, countEntrants };
