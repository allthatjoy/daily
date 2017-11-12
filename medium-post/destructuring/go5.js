const someFunction = object => ({hello: 10, world: 15})

const {hello: firstValue, world} = someFunction()

console.log('hello', firstValue)
console.log('world', world)
