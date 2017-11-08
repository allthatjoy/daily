const doubleAfter2Seconds = x =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });

const addPromise = calls => Promise.all(calls)

const x = 10

addPromise(
    [10, 20, 30].map(item =>
      doubleAfter2Seconds(item)),
  )
  .then(results =>
    console.log(x + results.reduce((prev, curr) => prev + curr, 0))
  )
