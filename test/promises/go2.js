// This exsample will show you how to write the code from the first example
// in a better and cleaner way.

// The runPromise-function will do the exact same comparison within the
// function body than the runCallback-function from the first example but
// instead of running as the normal body of the runPromise-function, the whole
// logic is written within an anonymous function passed as argument for the
// Promise class. That's the biggest structure difference between callbacks
// and promissed because now the function logic is able to call either resolve
// for a "positive" or reject for a "negative" result.
var runPromise = value => new Promise((resolve, reject) => {
  if (value === 'Ben') {
    resolve()
  } else {
    reject();
  }
});

// Instead of two parameters used in the runCallback-function from the first
// example, the runPromise-function now takes only one parameter which is only
// the value. As you can see above the runPromise-function will return a
// promise object on which we can call "then" or "catch". "then" as well as
// "catch" takes an anonymous function and both of those function are only
// called if either resolve or reject is used within the runPromise-function.
// If "resolve" will be called the "then" function is used and if "reject"
// gets called the "catch" function is used.
runPromise('Ben')
  .then(() => console.log('Yes!'))
  .catch(() => console.log('Nope!'))

// My personal opinion is, that promises are a great way to structure your code,
// make it readable and maintainable even if it looks a bit unnecessary at
// first, you'll goint to really love it.
