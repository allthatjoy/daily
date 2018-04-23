// Own object with an individual generator (<- which is syntactic sugar for an iterator)

// The differences between the iterator example within this repo and the following
// example using generators are:
// BASIC:
// generators using the function* syntax
// generators are using the yield keyword
// PRO:
// we don't have to implement the next function syntax
// we can use standard loops within the generator
// we don't have to return the object syntax required from an iterator
// the generator syntax is a bit shorter in this case 13 vs. 5 lines of code
// (which is extremely dependant on your coding style so it's an relativ argument)
// CONST:
// we can't use the ES6 function syntax
// we don't have access to the objects this-property because the generator
// itself has a this-property which forces use to remove the "this" from the
// affected properties within the object

const animalManager = managerName => {
  let animals = []
  console.log(`Hi I'm ${managerName}`);
  return {
    addAnimal: (name, type) => animals.push({name, type}),
    removeAnimalByName: name => animals = animals.filter(({name: currName}) => currName != name),
    removeAnimalByType: type => animals = animals.filter(({type: currType}) => currType != type),
    [Symbol.iterator]: function* () {
      for (var i = 0; i < animals.length; i++) {
        yield animals[i]
      }
    }
  }
}

console.log('=== creating a new animal manager called "Jo"');
const managerJo = animalManager('Jo')

console.log('=== adding animal: name: Kittens with type: cat');
managerJo.addAnimal('Kittens', 'cat')
console.log('=== adding animal: name: Rex with type: dog');
managerJo.addAnimal('Rex', 'dog')
console.log('=== adding animal: name: Beast with type: dragon');
managerJo.addAnimal('Beast', 'dragon')

console.log('=== starting with the first for-of iteration over the animalManager-object');
for ({name, type} of managerJo) {
  console.log(`Animal of type: ${type} has name: ${name}`);
}

console.log('=== removing Rex by name');
managerJo.removeAnimalByName('Rex')
console.log('=== removing Beast by type dragon');
managerJo.removeAnimalByType('dragon')


console.log('=== starting with the second for-of iteration over the animalManager-object');
for ({name, type} of managerJo) {
  console.log(`Animal of type: ${type} has name: ${name}`);
}
