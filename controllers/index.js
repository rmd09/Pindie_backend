const { sendAllCategories, sendCategoryCreated, sendCategoryById } = require("./categories");
const { sendAllUsers, sendUserCreated, sendUserById } = require("./users");
const { sendAllGames, sendGameCreated, sendGameById } = require("./games");

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendCategoryById,
    sendUserById
}