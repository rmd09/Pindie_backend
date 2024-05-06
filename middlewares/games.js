const { gameModel } = require("../models");

async function findAllGames(req, res, next) {
    req.gamesArray = await gameModel.find({}).populate("users").populate("categories");
    console.log(req.gamesArray);
    next();
}

const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
        console.log(req.body);
        req.game = await gameModel.create(req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
};

module.exports = {
    findAllGames,
    createGame
}