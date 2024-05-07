const { gameModel } = require("../models");

async function findAllGames(req, res, next) {
    req.gamesArray = await gameModel.find({}).populate({path: "users", select: "-password"}).populate("categories");
    next();
}

const findGameById = async (req, res, next) => {
    try {
        req.game = await gameModel.findById(req.params.id).populate({path: "users", select: "-password"}).populate("categories");
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
    }
};

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
    findGameById,
    createGame
}