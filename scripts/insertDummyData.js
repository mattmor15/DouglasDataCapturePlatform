const { createHash } = require('crypto')

const maleNames = ['James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Charles'];
const femaleNames = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomBirthday() {
  const year = getRandomInteger(1950, 2000);
  const month = getRandomInteger(0, 12);
  const day = getRandomInteger(0, 29);
  return new Date(year, month, day);
}

const dummyPatients = []
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    dummyPatients.push({
      _id: createHash('sha256').update(maleNames[j] + lastNames[i]).digest('hex'),
      firstName: maleNames[j],
      lastName: lastNames[i],
      sex: 'male',
      dateOfBirth: getRandomBirthday()
    })
    dummyPatients.push({
      _id: createHash('sha256').update(femaleNames[j] + lastNames[i]).digest('hex'),
      firstName: femaleNames[j],
      lastName: lastNames[i],
      sex: 'female',
      dateOfBirth: getRandomBirthday()
    })
  }
}

db = connect('mongodb://mongo:27017/main');
db.patients.insertMany(dummyPatients);