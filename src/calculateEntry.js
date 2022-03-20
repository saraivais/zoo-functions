const data = require('../data/zoo_data');

const { prices } = data;

// Esta função recebe como parâmetro um array de objetos representando pessoas, com nome e idade (name, age) como chaves. Ela retorna outro objeto, com chaves adult, child e senior, que devem ter como valores números que representam a quantidade de pessoas de cada faixa etária que existiam no array de objetos.
function countEntrants(entrants) {
  const entryCounter = { adult: 0, senior: 0, child: 0 };
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

// Esta função recebe como parâmetro um array de objetos representando pessoas e devolve um número que representa o preço total a pagar por todas as pessoas do array.
// A função countEntrants é chamada e seu retorno é empurrado num array que já contém um objeto com a mesma estrutura (child, adult e senior), mas cujos valores representam os preços das entradas por faixa etária.
// Com o array factors contendo dois valores (objetos), é realizado um reduce, para multiplicar as propriedades de mesmo nome das duas posições do array e somar todos os três resultados de multiplicação, cujo resultado é retornado pela função.
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
