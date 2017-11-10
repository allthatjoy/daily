var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "liveTrade",
  new Schema({
    price: Number,
    amount: Number,
    datetime: String,
    id: String,
    order_type: 0,
    createdOn: {
      type: Date,
      default: Date.now
    }
  })
);
