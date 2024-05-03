const mongoose = require("mongoose");
const { categoryModel, userModel} = require("./index");

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
    },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: userModel
    }],
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: categoryModel
    }]
})

module.exports = mongoose.model("games", gameSchema);