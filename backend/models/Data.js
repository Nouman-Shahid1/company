const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
