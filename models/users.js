const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true }

  }
)

var userModel = mongoose.model("User", userSchema);
module.exports = userModel;