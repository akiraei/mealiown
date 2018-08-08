const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  name: String,
  token: String,
  pw: String
});

module.exports = mongoose.model("Token", tokenSchema);
