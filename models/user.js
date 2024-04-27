const mongoose = require('mongoose');
const { modelNames } = require("../database/config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model(modelNames.user, userSchema);