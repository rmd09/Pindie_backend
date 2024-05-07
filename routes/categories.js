const categoriesRouter = require("express").Router();
const { findAllCategories, createCategory, findCategoryById, updateCategory } = require("../middlewares");
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated } = require("../controllers");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    createCategory, 
    sendCategoryCreated
); 

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;