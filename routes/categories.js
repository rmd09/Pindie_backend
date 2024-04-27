const categoriesRouter = require("express").Router();
const { routes } = require("../api/config");
const { findAllCategories } = require("../middlewares");
const { sendAllCategories } = require("../controllers");

categoriesRouter.get(routes.categories, findAllCategories, sendAllCategories);

module.exports = categoriesRouter;