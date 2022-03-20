const data = require('../data/zoo_data');

const { species, hours } = data;

// Foram criados arrays de strings contendo os dias da semana e os nomes dos animais, para futura comparação de parâmetros;
const weekDays = Object.keys(hours);
const animalNames = species.map((animal) => animal.name);

// Esta função recebe o nome de um animal e retorna um array de strings com os dias nos quais este animal está disponível.
function animalSchedule(animalName) {
  const selectedAnimal = species.find((animal) => animal.name === animalName);
  return selectedAnimal.availability;
}

// Esta função não recebe parâmetros e retorna um objeto padronizado, específico para as segundas.
function itsMonday() {
  const wholeSchedule = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return wholeSchedule;
}

// Esta função recebe o nome de um dia da semana e retorna um objeto contendo o schedule daquele dia.
// Se o dia for 'Monday', chama e retorna a função itsMonday().
// Para os outros dias, retorna um objeto contento como key o nome do dia e como valor, outro objeto, com as keys 'officeHour' e 'exhibition', que contém o horário de funcionamento (que é uma string) e um array contendo os nomes dos animais disponíveis, respectivamente, como seus valores.
function daySchedule(dayName) {
  if (dayName === 'Monday') {
    return itsMonday();
  }
  const selectedDay = hours[dayName];
  const todaysSchedule = `Open from ${selectedDay.open}am until ${selectedDay.close}pm`;
  const animalsAvailable = species
    .filter((animal) => animal.availability.includes(dayName))
    .map((filteredAnimals) => filteredAnimals.name);
  const wholeSchedule = {
    [dayName]: {
      officeHour: todaysSchedule,
      exhibition: animalsAvailable,
    },
  };
  return wholeSchedule;
}

// Esta função recebe como parâmetro uma string, que pode ser um dia da semana, o nome de um animal ou qualquer coisa. A função chama outras funções específicas de acordo com o parâmetro passado.
// Se o parâmetro estiver contido no array de strings de dias da semana, será chamada a função daySchedule, que retorna o schedule do dia. Se o parâmetro estiver contido no array de strings de nomes de animais, será chamada a função animalSchedule, que retorna os dias nos quais o animal estará disponível.
// Se o parâmetro passado não estiver contido em nenhum dos dois arrays, a função retorna um objeto, cujas chaves são dias da semana e os valores, os respectivos schedules destes dias. A criação deste objeto é feita de maneira recursiva, utilizando o array weekDays declarado acima para gerar o schedule de cada dia, concatenando os resultados dentro de um objeto utilizando reduce.
function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  if (animalNames.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  const entireSchedule = weekDays.reduce(((acc, curr) => {
    const thisSchedule = getSchedule(curr);
    const scheduleValue = thisSchedule[curr];
    acc[curr] = scheduleValue;
    return acc;
  }), {});
  return entireSchedule;
}

// Código antigo~
/*
const entireSchedule = weekDays.map((day) => getSchedule(day));
const newObject = entireSchedule.reduce(((acc, curr, index) => {
  const [value] = Object.values(curr);
  acc[Object.keys(curr)] = value;
  return acc;
}), {});
return newObject;
*/

module.exports = getSchedule;
