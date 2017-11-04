var runPromise = value => new Promise((resolve, reject) => {
  if (value === 'Ben') {
    resolve()
  } else {
    reject();
  }
});

runPromise('Ben')
  .then(() => console.log('Yes!'))
  .catch(() => console.log('Nope!'))
