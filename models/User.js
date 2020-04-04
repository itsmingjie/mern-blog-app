// for user model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = {
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
};

const UserSchema = new Schema(UserSchema);
module.exports = mongoose.model("user", UserSchema);
