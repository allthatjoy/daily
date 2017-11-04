var assert = require('assert');

function toBeInjected(fetch, item) {
  return fetch('https://sampleurl.de?username=' + item)
    .then(objects => objects.json())
    .then(objects => objects[item])
}

describe('toBeInjected', () => {
  it('parses the response of the fetch correctly', () => {
    const fakeFetch = url => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve([{
            name: "Hans"
          }, {
            name: "Franz"
          }, {
            name: "Kranz"
          }]);
        }
      });
    }
    toBeInjected(fakeFetch, 2)
      .then(result => {
        assert(result.name === 'Kranz')
      });
  })
});
