const gamesRouter = require("express").Router();
const { findAllGames, createGame, findGameById } = require("../middlewares");
const { sendAllGames, sendGameCreated, sendGameById } = require("../controllers");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById); 

module.exports = gamesRouter;