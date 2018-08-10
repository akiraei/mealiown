const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  name: String,
  count: Number,
  category: String,
  date: String,
  time: String,
  calories: Number,
  balance: Number,
  tasty: Number,
  sum: Number
});

module.exports = mongoose.model("Record", recordSchema);
