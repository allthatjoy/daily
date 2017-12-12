// Imagine you want to call a specific function multiple times without
// the requirement of the object prefix.

// Think about an object like this:

const someObject = {
  imYourValue: 'Hello Moon!',
  print: function() {console.log(this.imYourValue)}
}

someObject.print()

// OUTPUT: Hello Moon!

// Instead of calling "someObject.print()" you only want to call "print()" but
// do the exact same as before. Let's try it out by simply saving the
// "print"-function to another variable.

let print = someObject.print

print()

// OUTPUT: undefined

// Why do we get "undefined" instead of "Hello Moon!"?
// The answer to that is pretty simple. By storing the "print"-function from
// "someObject" into another variable outside of the "someObject"-object the
// "this" object referenced to within the console.log(); call of "print" changed.
// In this specific case the available "this"-object to our new "print"-function
// will be the global object. To test is out simple assign "imYourValue" also
// to the "global"-object, like:

global.imYourValue = 'Hello World!'
// or
imYourValue = 'Hello World!'
// will do the same

print()

// OUTPUT: Hello World!

// But back to out initial intention of using "print" instead of "someObject.print()"
// with the same output.

// Using "bind" it's possible to assign a new "this" object for a function.
// So if we're using something like that:

print = print.bind(someObject)

print()

//OUTPUT: Hello Moon!

// "print" now uses "someObject" as it's "this" object and we don't even have
// to write "someObject" every time we want to use it's "print"-function

// "bind" makes it possible to define which object is used as "this" on any given
// time. That's also pretty handy if you want to define default values for
// function calls. I'll talk about it in go3.js
