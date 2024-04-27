const { gameModel } = require("../models");

async function findAllGames(req, res, next) {
    req.gamesArray = await gameModel.find({});
    console.log(req.gamesArray);
    next();
}

module.exports = findAllGames;