const gamesRouter = require("express").Router();
const { findAllGames, createGame, findGameById, updateGame } = require("../middlewares");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require("../controllers");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById); 

gamesRouter.put("/games/:id", updateGame, sendGameUpdated);

module.exports = gamesRouter;