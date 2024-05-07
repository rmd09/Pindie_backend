const usersRouter = require("express").Router();
const { findAllUsers, createUser, findUserById, updateUser, deleteUser } = require("../middlewares");
const { sendAllUsers, sendUserCreated, sendGameCreated, sendUserUpdated, sendUserDeleted } = require("../controllers");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  ); 

usersRouter.get("/users/:id", findUserById, sendGameCreated);

usersRouter.put("/users/:id", updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;