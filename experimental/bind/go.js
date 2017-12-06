// At first we define a function which prints the variable 'value' on the
// 'this' object.

const run = function() {
  console.log(this.value)
}

// As expected the output will be 'undefined' because there is no variable
// 'value' within the object containing the run-function.
run()


// Let's define a object with a variable 'value'.
const newValue = {
  value: 'Ben'
}

// Using 'bind' we're now able to define the 'this' object for the run-function

// 'bind' will return a new function with the new 'this'-object on the object
// surrounding the run-function
const newRunFunction = run.bind(newValue)

// 'newRunFunction' is now able to access the 'value' variable from the
// 'newValue' object

newRunFunction()

// OUTPUT: Ben


// NOTE: If we'd use 'use strict' at the beginning of this script, the result
// would be an error because 'this.value' is not defined within the first
// run-function call.
// 'use strict' forces you to write cleaner code without unclear variable or
// functions calls as seen above.
// MY ADVICE: Use 'use strict' whenever it's possible.
