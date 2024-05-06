const categoriesRouter = require("express").Router();
const { findAllCategories, createCategory } = require("../middlewares");
const { sendAllCategories, sendCategoryCreated } = require("../controllers");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    sendCategoryCreated
); 

module.exports = categoriesRouter;