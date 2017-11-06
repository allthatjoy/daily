const mongoose = require('mongoose');

// append the following string with the database name you want to read the
// collections from
const database = "mongodb://localhost:27017/test";

mongoose.connect(database, {
  useMongoClient: true
});

// The "global" object call isn't required in this case
// meaning "mongoose.Promise = Promise;" would be enough
mongoose.Promise = global.Promise;

mongoose.connection.on('open', () => {
  console.log('connected!');
  // List all the collections within the database
  // using promises.
  mongoose.connection.db.listCollections()
    .toArray()
    .then(collections => {
      // If no error occurred the resolve function within "toArray()" will be
      // called which leads to this function.
      // "collections" is an array where we can use the map-function to
      // execute a specific operation on every element. In this case a simple
      // console.log.
      collections.map(currentObject => console.log('Collection name:', currentObject.name))
    })
    .catch(error => console.log('error', error))
    .then(() => {
      mongoose.connection.close();
      console.log('disconnected!');
    });
});
