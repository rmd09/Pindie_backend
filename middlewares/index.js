const cors = require("./cors");
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory } = require("./categories");
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require("./users");
const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require("./games");

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
    updateUser,
    deleteGame,
    deleteUser,
    deleteCategory
}