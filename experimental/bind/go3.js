// "bind" makes it possible to use default values for functions calls

// Think about a default object you want to use to provide default values
// to a specific function call.

const defaultObject = {
  firstname: "Ben",
  lastname: "Miller",
  age: 20
}

// In addition to the defaultObject we also got a list of actions we can run.

const actions = ['eat', 'run', 'sleep', 'fight']

// We also got a print funciton.

const print = function() {
  console.log(this.firstname + ' ' + this.lastname + ' at age ' + this.age +
  ' likes to ' + this.action)
}

// We now want to call the "print"-function with every action. But instead of
// passing the action as an parameter or anything else we want to define the
// "this" object for "print" new everytime we're about to call it. In addition
// to that we also need to add out "defaultObject"-properties to the "this"
// object.
actions.forEach(action => {
  const newThis = Object.assign({action}, defaultObject)
  print.bind(newThis)()
})

// As you can see we've used Object.assign which can be used to combine multiple
// objects. The return value will be a single object containing all the
// properties from the passed objects. This object then will be our "this"
// object for the "print"-function and to bind this new value to it we're using
// the "bind"-function. The return value of the "bind"-function call will be a
// copy of the original print function with the newly defined "this"-object.
// We then only have to call the function using an implicitly call in this case.
// You also could assign the function to a variable to call it using it's name.
