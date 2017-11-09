console.log('Example 1');
// basic function without currying
let humanPrinter = (name, age, weight) =>
  console.log(name + ' is ' + age + ' year(-s) old and weighs about ' + weight + 'kg !');

humanPrinter('ben', 10, 30);


// The same function with currying
// As you can see instead of taking all parameters at ones "humanPrinter" will
// return a new anonymous function with only a single parameter called "name"
// and this function again returns an anonymous function with a parameter called
// "age" and even the this function returns a function taking the "weight" as
// parameter
// The function taking "weight" is than finally printing the human
console.log('Example 2');
humanPrinter = name => age => weight =>
  console.log(name + ' is ' + age + ' year(-s) old and weighs about ' + weight + 'kg !');


// The statement used to call the humanPrint may show you the way it works
// a bit better in the next line
humanPrinter('ben')(10)(30);
