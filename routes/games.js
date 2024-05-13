const gamesRouter = require("express").Router();
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists } = require("../middlewares");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require("../controllers");

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.get("/games/:id", findGameById, sendGameById); 

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  );

module.exports = gamesRouter;