const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  token: String
});

module.exports = mongoose.model("Token", tokenSchema);
