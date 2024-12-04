const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  company_name: { type: String, required: true },
  message: { type: String, },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
