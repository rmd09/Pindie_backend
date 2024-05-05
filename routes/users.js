const usersRouter = require("express").Router();
const { findAllUsers } = require("../middlewares");
const { sendAllUsers } = require("../controllers");

usersRouter.get("users", findAllUsers, sendAllUsers);

module.exports = usersRouter;