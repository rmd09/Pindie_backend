const cors = require("./cors");
const { findAllCategories, createCategory, findCategoryById, updateCategory } = require("./categories");
const { findAllUsers, createUser, findUserById, updateUser } = require("./users");
const { findAllGames, createGame, findGameById, updateGame } = require("./games");

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
    findGameById,
    updateGame,
    updateCategory,
    updateUser
}