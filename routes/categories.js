const categoriesRouter = require("express").Router();
const { findAllCategories } = require("../middlewares");
const { sendAllCategories } = require("../controllers");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRouter;