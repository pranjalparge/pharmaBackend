const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  company_name: { type: String, required: true },
});

const User = mongoose.model("Candidates", candidateSchema);
module.exports = User;
