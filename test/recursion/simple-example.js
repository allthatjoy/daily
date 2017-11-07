// Recursion is simply a function calling itself until a certain point.

// This example is one of the most simples ways to use recursion.
// The following function will be called with 10 as argument and will then
// call itself with an argument value of: currenValue - 1
// until the currentValue is 0

const recursionFunction = value => {
  if (value == 0) return;
  console.log('currentValue', value);
  recursionFunction(value - 1)
}

recursionFunction(100);
