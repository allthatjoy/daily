// The "filter"-function is used to return a new array containint the elements
// which passed the condition which will be passed as function to the
// "filter"-function


// Think about an array like:

const animals = [5, 6, 1, 2, 8, 9, 10, 11, 3]

// You want to get all the even numbers from the array.
// To do so you could use the "filter"-function but at first we create a
// function which will be used as parameter to the filter function.

const evenNumbersFunction = number => number % 2 === 0

// This function simply returns a boolean value which than will be used by the
// "filter"-function to identify valid or invalid items.

const evenNumbers = animals.filter(evenNumbersFunction)

// The last thing is to pass the "evenNumbersFunction"-function as parameter
// to the "filter"-function and you'll get an array containing only the even
// numbers

console.log(evenNumbers);
