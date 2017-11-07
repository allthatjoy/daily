// What's a realistic case for a function using currying?

// You got a function which compares the property type of a given object to the
// given type and returns the boolean value of the comparison
const isValidType = type => givenObject => givenObject.type === type

// In addition to that you've an array with humans, animals and cyborgs
// and you only want the array to contain the cyborgs
const mixedTypes = [
  {name:"ben", type:"human"},
  {name:"rex", type: "animal"},
  {name:"Mr. Robot", type: "cyborg"},
  {name:"tim", type:"human"},
  {name:"kitty", type: "animal"},
  {name:"terminator", type: "cyborg"}
]

// We're using the default filter function to filter the array elements.
// As filter argument we're using the isValidType function with "human" as
// argument.
// The isValidType function will return a function receiving the current
// filter object.
console.log('Example 1');
console.log(mixedTypes.filter(isValidType('human')))
// the line above is just the simple version of:
console.log('Example 2');
console.log(mixedTypes.filter(item => isValidType('human')(item)));
