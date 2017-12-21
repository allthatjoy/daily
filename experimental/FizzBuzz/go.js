'use strict'
// What's FizzBuzz?

/*
In general FizzBuzz is a common job interview question looking like:
Write a program that prints the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print
“Buzz”. For numbers which are multiples of both three and five print
“FizzBuzz”.
*/

// Using JS you could write someting like this:

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// But I think this looks pretty low level and doesn't really show your
// understanding of programming.

// Let's improve it a bit:

for (let i = 1; i < 101; i++) {
  console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') ||  i);
}

// Both compared, the first sample needs 11 lines and the second only 3!
// For sure the first one is a bit more readable but it's acceptable for that
// case I think.

// Let's dig deeper and unterstand why this works like the first sample.

// At first you've to be familiar with ternary notation of the if-condition

// ternary notation:
const txt1 = (2 % 2 === 0) ? 'Hello Tim!' : 'World Tom!'
console.log(txt1);

// conventional if-condition
let txt2
if (2 % 2 === 0) {
  txt2 = 'Hello Tim!'
} else {
  txt2 = 'Hello Tom!'
}
console.log(txt2);

// Instead of using the keywords "if" and "else" the ternary notation just uses
// "?" and ":" to seperate the different cases. It also fits in one line and
// doesn't need a deklaration befor the statement itself. You also can use const
// instead of let which is better coding style in general.

// Secondary we take a look at the "logical or" operator:

const output = []
output.push(1 || 2)
output.push(0 || 2)
output.push('' || 2)
output.push(null ||  2)
output.push(undefined ||  2)
output.push('Hello World!' ||  2)

console.log(output.join(', '));
// OUTPUT: 1, 2, 2, 2, Hello World!

// The "logical or" always takes the first value if it's a value other than:
// 0, null, undefined or ''
// otherwise it takes the second given argument.

// Let's take a look at: (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')
// The first part is used to identifiy if the number is a multiply of 3, the
// second part does the same for 5.

// If the number is a multiply of 3/5 it'll return either 'Fizz' or 'Buzz'
// because the modulo operator '%' will return 0 if it's the case and
// as we learned from the "logical or" a zero is equal to false.

// The core statement:
// (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') ||  i

// In the case the modulo operator returns a value other than 0 the ternary
// if-notation will return ''. If both conditions result in an empty string
// the "logical or" at the end of the statement will select the second argument
// which is simply the current value itself.
