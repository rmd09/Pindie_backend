const cors = require("./cors");
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require("./categories");
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require("./users");
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists } = require("./games");

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
    deleteCategory,
    checkEmptyFields,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsCategoryExists,
    checkIsGameExists,
    checkEmptyName,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    checkIsUserExists
}