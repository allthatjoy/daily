var runCallback = (value, callback) => {
  if (value === 'Ben') {
    callback(true);
  } else {
    callback(false);
  }
}

runCallback('Ben', result => {
  if (result) {
    console.log('Yes!');
  } else {
    console.log('Nope!');
  }
})
