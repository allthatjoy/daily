const mongoose = require('mongoose')
const testModel = require('./testModel')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', {
  useMongoClient: true
});
testModel.find().then(console.log).catch(console.log)
