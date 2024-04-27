const mongoose = require("mongoose");
const { modelNames } = require("../database/config");

const gameSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model(modelNames.games, gameSchema);