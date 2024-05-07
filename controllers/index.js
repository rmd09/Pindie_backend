const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated } = require("./categories");
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated } = require("./users");
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated } = require("./games");

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameCreated,
    sendGameById,
    sendCategoryById,
    sendUserById,
    sendGameUpdated,
    sendCategoryUpdated,
    sendUserUpdated
}