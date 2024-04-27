const mongoose = require('mongoose');
const { modelNames } = require("../database/config");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(modelNames.caterogy, categorySchema);