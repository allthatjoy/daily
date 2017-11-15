// reduce in general is used to sum up all array elements to one final value

// Abstract example:
// [1,2] => 3



// I'll use arrow function expressions within this example, if you're not
// familiar with them see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions



// create an numeric array at first:
const input = [20, 10, 5, 50]

// Array.reduce is an native JS function which could be triggered on every array
// The reduce function could take two parameters (callback-funcation and an
// initial value) but only one parameter (the callback-function) is required
const sum = input.reduce((previousValue, currentValue) => {
  // the next statment is responsible for handling the previous and the current
  // value, meaning here you can specify how to reduce the array
  return previousValue + currentValue;
});

// "sum" is now a single integer
console.log('sum', sum);


// In the example above we didn't used the second parameter which is used to set
// an initial value meaning the "previousValue" for the first callback call

// My advice is, to always (if possible) set the initial value (the second
// reduce-function parameter)
// The reason for that is:

const emptyInput = [];
// The reduce-function will trigger an error, if you haven't set an intitial
// value, which will look like:
// "Reduce of empty array with no initial value"
const anotherSum = emptyInput.reduce((prev, curr) => prev + curr);
console.log('anotherSum', anotherSum);
// the following line is able to handle this error because of the initial value
const anotherSumWithInitialValue = emptyInput.reduce((prev, curr) => prev + curr, 0);
console.log('anotherSumWithInitialValue', anotherSumWithInitialValue);

// Especially if your input array, which should be reduced, is depending on an
// user input you either have to handle the case if the array is empty or you
// set the second parameter for the reduce function


// How to handle objects using Array.reduce()
// To start, we got an array containing country objects with a name and the
// popularity number
const countries = [{
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

// We now want to reduce our array to a single value which should be the result
// of all popularities expect from USA
const allCountriesButChina = countries.reduce((prev, curr) => {
  return curr.country !== 'USA' ? prev + curr.pop : prev;
}, 0)

console.log(allCountriesButChina);
