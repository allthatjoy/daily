// Own object with an individual iterator

const animalManager = managerName => {
  this.animals = []
  console.log(`Hi I'm ${managerName}`);
  return {
    addAnimal: (name, type) => this.animals.push({name, type}),
    removeAnimalByName: name => this.animals = this.animals.filter(({name: currName}) => currName != name),
    removeAnimalByType: type => this.animals = this.animals.filter(({type: currType}) => currType != type),
    [Symbol.iterator]: () => {
      this.iteration = -1
      return {
        next: () => {
          this.iteration++
          if (this.iteration < this.animals.length) {
            return {value: this.animals[this.iteration], done: false}
          } else {
            return {value: null, done: true}
          }
        }
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
