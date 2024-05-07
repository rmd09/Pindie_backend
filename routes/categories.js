const categoriesRouter = require("express").Router();
const { findAllCategories, createCategory, findCategoryById } = require("../middlewares");
const { sendAllCategories, sendCategoryCreated, sendCategoryById } = require("../controllers");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    sendCategoryCreated
); 

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

module.exports = categoriesRouter;