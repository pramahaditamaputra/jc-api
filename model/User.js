const mongoose = require("mongoose");

// membuat schema untuk collection user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
});

//membuat model
const User = mongoose.model("User", userSchema);

module.exports = User;
