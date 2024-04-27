const usersRouter = require("express").Router();
const { routes } = require("../api/config");
const { findAllUsers } = require("../middlewares");
const { sendAllUsers } = require("../controllers");

usersRouter.get(routes.users, findAllUsers, sendAllUsers);

module.exports = usersRouter;