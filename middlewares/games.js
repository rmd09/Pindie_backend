const { gameModel } = require("../models");

async function findAllGames(req, res, next) {
    req.gamesArray = await gameModel.find({}).populate("users").populate("categories");
    console.log(req.gamesArray);
    next();
}

module.exports = findAllGames;