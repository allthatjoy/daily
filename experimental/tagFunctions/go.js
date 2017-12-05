// At first you've to know what template literals are.
// An example for a template literal would be:
const stringOne = 'Hello'
const stringTwo = 'World'
const output = `${stringOne} ${stringTwo}!`
console.log(output);

// OUTPUT: Hello World!

// As you can see you've to put your whole string into backticks and to use
// variables you've to put them into ${...}. Basically it's just another way
// to put variables into strings without splitting your string with plus
// characters. In addition it makes your code a bit more readable which is
// always helpful in the future and cool!

// Let's take a look at tag functions. At first you've to know that tag
// functions are only syntactic sugar which means they're only another way
// to write code to get the same result as if you'd write it in the
// standard way (you'll see what that means for tag functions later). Meaning
// you'll get the same result with a different (usually a more readable way)
// typing.

// To call your tag function you just write you functions name and the text you
// want to pass within backticks directly after the function name without any
// braces.

const name = "Ben"
const txt = "Hello World!"

print `TEST1: ${name} says ${txt}`

function print() {
  // BTW: 'arguments' is a function internal object containing all the arguments
  // passed to the function (That object doesn't exists in the same way within
  // arrow functions)

  // console.log(arguments);

  // OUTPUT: { '0': [ 'TEST: ', ' says ', '' ], '1': 'Ben', '2': 'Hello World!' }

  // The template literal will be transformed into an object containing the
  // input pieces. To print the real output you could use something like this
  // for every template literal passed to this function:

  let output = ''
  arguments[0].forEach((text, i) => {
    output += text
    if (arguments[i + 1] != undefined) {
      output += arguments[i + 1]
    }
  })
  console.log(output);
}


// We could also use an array to pass the variables into the template literal

const outputs = [
  {name: "Tim", txt: "First"},
  {name: "Georg", txt: "Second"},
  {name: "Patrick", txt: "Third"}
]

// Simple interate throught the array and call the tag function "print" with the
// properties of the current object from the array.

outputs.forEach(({name, txt}) =>
  print `TEST2: Name: ${name} TXT: ${txt}`)


// I said that tag functions are only syntactic sugar that's because you could
// also write:

outputs.forEach(({name, txt}) =>
  print(['TEST3: Name: ', ' TXT: '], name, txt))

// to get the exact same result. But as you can see using tag functions it's
// much more compact in structure and readable.

// If you wondering about line 67 and 74:
// outputs.forEach(({name, txt}) =>
// I'm using the array function "forEach" to iterate over the array in
// combination with object descructuring so I don't have to refer to the object
// itself using something like output.name or output.txt.
// If you don't know what object descructuring is yet, read my short medium
// article about it:
// https://medium.com/@timhaag/javascript-destructuring-cd511f0b5a63
