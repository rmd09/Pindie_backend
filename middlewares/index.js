const cors = require("./cors");
const { findAllCategories, createCategory} = require("./categories");
const { findAllUsers, createUser} = require("./users");
const { findAllGames, createGame } = require("./games");

module.exports = {
    cors,
    findAllCategories,
    createCategory,
    findAllUsers,
    createUser,
    findAllGames,
    createGame
}