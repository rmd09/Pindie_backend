const gamesRouter = require("express").Router();
const { routes } = require("../api/config");
const { findAllGames } = require("../middlewares");
const { sendAllGames } = require("../controllers");

gamesRouter.get(routes.games, findAllGames, sendAllGames);

module.exports = gamesRouter;