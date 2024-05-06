const { sendAllCategories, sendCategoryCreated } = require("./categories");
const { sendAllUsers, sendUserCreated } = require("./users");
const { sendAllGames, sendGameCreated } = require("./games");

module.exports = {
    sendAllCategories,
    sendCategoryCreated,
    sendAllUsers,
    sendUserCreated,
    sendAllGames,
    sendGameCreated
}