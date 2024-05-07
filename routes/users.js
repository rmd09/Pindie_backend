const usersRouter = require("express").Router();
const { findAllUsers, createUser, findUserById, updateUser } = require("../middlewares");
const { sendAllUsers, sendUserCreated, sendGameCreated, sendUserUpdated } = require("../controllers");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  ); 

usersRouter.get("/users/:id", findUserById, sendGameCreated);

usersRouter.put("/users/:id", updateUser, sendUserUpdated);

module.exports = usersRouter;