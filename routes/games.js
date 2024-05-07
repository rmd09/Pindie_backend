const gamesRouter = require("express").Router();
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("../middlewares");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require("../controllers");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById); 

gamesRouter.put("/games/:id", updateGame, sendGameUpdated);

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;