const gamesRouter = require("express").Router();
const { findAllGames } = require("../middlewares");
const { sendAllGames } = require("../controllers");

gamesRouter.get("/games", findAllGames, sendAllGames);

module.exports = gamesRouter;