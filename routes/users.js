const usersRouter = require("express").Router();
const { findAllUsers, createUser } = require("../middlewares");
const { sendAllUsers, sendUserCreated } = require("../controllers");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
  ); 

module.exports = usersRouter;