const humans = ['Tim', 'Tom', 'Ben']
const aliens = ['OG', 'Zek', 'Foo']
const print = type =>
  name => console.log(`${name} is of the ${type} type`)
const printHuman = print('human')
const printAlien = print('alien')
humans.forEach(printHuman)
aliens.forEach(printAlien)
