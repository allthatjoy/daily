// What if you want to use currying but the function you want to us it with
// isn't structured for it?

// (npm) packages like "curry" are able to transfer your functions so you can
// use currying.
const curry = require('curry')

// pass you function as parameter to the curry-function directoy on the
// initialization
let humanPrinter = curry((name, age, weight) => {
  console.log(name + ' is ' + age + ' year(-s) old and weighs about ' + weight + 'kg !');
})

humanPrinter('ben')(10)(30);

// or if you don't want to change the code, assign it new like:
humanPrinter = (name, age, weight) => {
  console.log(name + ' is ' + age + ' year(-s) old and weighs about ' + weight + 'kg !');
}

humanPrinter = curry(humanPrinter)

humanPrinter('nick')(20)(90);
