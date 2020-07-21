const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUser = new Schema({
  name: { type: String, required: true },
  email: String,
  description: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", newUser);
