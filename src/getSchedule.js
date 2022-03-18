const data = require('../data/zoo_data');

const { species, hours } = data;
const weekDays = Object.keys(hours);
// console.log(weekDays);
const animalNames = species.map((animal) => animal.name);

function animalSchedule(animalName) {
  const selectedAnimal = species.find((animal) => animal.name === animalName);
  return selectedAnimal.availability;
}

function itsMonday() {
  const wholeSchedule = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return wholeSchedule;
}

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

// const entireSchedule = weekDays.map((day) => getSchedule(day));
// const newObject = entireSchedule.reduce(((acc, curr, index) => {
//   const [value] = Object.values(curr);
//   acc[Object.keys(curr)] = value;
//   return acc;
// }), {});
// return newObject;

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

console.log(getSchedule());

module.exports = getSchedule;
