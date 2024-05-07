const cors = require("./cors");
const { findAllCategories, createCategory, findCategoryById } = require("./categories");
const { findAllUsers, createUser, findUserById } = require("./users");
const { findAllGames, createGame, findGameById } = require("./games");

module.exports = {
    cors,
    findAllCategories,
    createCategory,
    findCategoryById,
    findAllUsers,
    createUser,
    findUserById,
    findAllGames,
    createGame,
    findGameById
}