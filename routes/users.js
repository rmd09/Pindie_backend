const usersRouter = require("express").Router();
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkIsUserExists, checkEmptyNameAndEmail } = require("../middlewares");
const { sendAllUsers, sendUserCreated, sendGameCreated, sendUserUpdated, sendUserDeleted } = require("../controllers");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
  ); 

usersRouter.get("/users/:id", findUserById, sendGameCreated);

usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;