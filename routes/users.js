const usersRouter = require("express").Router();
const { findAllUsers, createUser, findUserById } = require("../middlewares");
const { sendAllUsers, sendUserCreated, sendGameCreated } = require("../controllers");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  ); 

usersRouter.get("/users/:id", findUserById, sendGameCreated);

module.exports = usersRouter;