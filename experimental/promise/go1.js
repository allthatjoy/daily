// A basic function, taking two parameters, the first one is just a value
// and the second is the callback function

var runCallback = (value, callback) => {
  // after comparing the value the callback will either be called with true or
  // false
  if (value === 'Ben') {
    callback(true);
  } else {
    callback(false);
  }
}

// "Ben" is the first argument the runCallback-function will be called with.
// The second argument is the callback function which will be executed after
// the runCallback-function has a result.
// As you can see you've to handle the result the first time within the
// runCallback-function and a second time within the callback function which
// is not the cleanest way
runCallback('Ben', result => {
  if (result) {
    console.log('Yes!');
  } else {
    console.log('Nope!');
  }
})

// In go2.js you'll see the same example using promises which will hopefully
// show how you could structure your code in a better and cleaner way.
